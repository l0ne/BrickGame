class RacingGame {
  coordinates = [];
  score = 0;
  level = 1;
  speed = 1;
  lives = [];

  constructor() {}

  initLevel() {
    this.lives = [0, 10, 20, 30];
    const roadL = this.calculateRoads();
    const roadR = this.calculateRoads(9);
    const car = this.calculateCar();
    const car2 = this.calculateCar();
    for (let i = 0; i < 10000; i++) {
      let coordinates = [];
      coordinates = coordinates.concat(roadL.next().value);
      coordinates = coordinates.concat(roadR.next().value);
      coordinates = coordinates.concat(car.next().value);
      if (i > 10) {
        coordinates = coordinates.concat(car2.next().value);
      }
      this.coordinates[i] = coordinates;
    }
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  *calculateCar(_i) {
    let random = this.randomInteger(0, 1) ? 6 : 3;
    for (let i = _i ? _i : -5; i < 21; i++) {
      yield this.car(i * 10 + random);

      if (i == 20) {
        i = -5;
        random = this.randomInteger(0, 1) ? 6 : 3;
      }
    }
  }

  *calculateRoads(pitch = 0) {
    let coordinates = Array.from({length: 21}, (v, k) => {
      if (k != 3 && k != 7 && k != 11 && k != 15 && k != 19) {
        return k * 10 + pitch;
      }
    });
    for (let i = 0; i <= 4; i++) {
      yield coordinates;
      switch (i) {
        case 1:
          coordinates = Array.from({length: 21}, (v, k) => {
            if (k != 0 && k != 4 && k != 8 && k != 12 && k != 16 && k != 20) {
              return k * 10 + pitch;
            }
          });
          break;
        case 2:
          coordinates = Array.from({length: 21}, (v, k) => {
            if (k != 1 && k != 5 && k != 9 && k != 13 && k != 17 && k != 21) {
              return k * 10 + pitch;
            }
          });
          break;
        case 3:
          coordinates = Array.from({length: 21}, (v, k) => {
            if (k != 2 && k != 6 && k != 10 && k != 14 && k != 18) {
              return k * 10 + pitch;
            }
          });
          break;
        default:
          coordinates = Array.from({length: 21}, (v, k) => {
            if (k != 3 && k != 7 && k != 11 && k != 15 && k != 19) {
              return k * 10 + pitch;
            }
          });
          i = 0;
      }
    }
  }

  car(position) {
    let result = [
      position,
      position + 9,
      position + 10,
      position + 11,
      position + 20,
      position + 29,
      position + 30,
      position + 31,
    ];
    return result;
  }

  isCarsCollision(car, road, i) {
    let res = car.filter((i) => road.indexOf(i) < 0);
    if (res.length != car.length) {
      this.score = i;
      return true;
    }

    return false;
  }

  drawScreen(coordinates, rows, columns) {
    let screen = [];

    for (let j = 0; j < rows; j++) {
      let chars = [];
      for (let i = 0; i < columns; i++) {
        chars.push({id: i, on: 0});
      }
      screen.push({id: j, chars: chars});
    }

    coordinates.map((item) => {
      let i = item / 10;
      let x = Math.floor(i);
      let y = Math.round((i - x) * 10);
      if (screen[x] && screen[x].chars[y]) {
        screen[x].chars[y].on = 1;
      }
    });

    return screen;
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  clearScreen() {
    let screen = [];
    let smallScreen = [];

    for (let i = 0; i < 21; i++) {
      screen.push(',,,,,,,,,');
      i < 4 && smallScreen.push(',,,');
    }

    return {screen, smallScreen};
  }
}

export const racingGame = new RacingGame();
