import React, {Component} from 'react';
import {connect} from 'react-redux';
import {racingGame} from '../../services/RacingGame';
import {
  powerSwitch,
  pressLeft,
  pressRigth,
  startGame,
} from '../../actions/ControlsActions';
import {Screen} from '../Screen';
import {Vibration} from 'react-native';
import {INIT_SCREEN} from '../../constants';

class Monitor extends Component {
  state = {
    screen: [],
    smallScreen: [],
    carPosition: 163,
    car: [],
    pause: null,
    score: 0,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initScreen();
    racingGame.initLevel();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {controls} = this.props;
    const {carPosition} = this.state;
    if (prevProps.controls.isPowerOn != controls.isPowerOn) {
      if (controls.isPowerOn) {
        this.loading();
      } else {
        this.initScreen();
      }
    }

    if (prevProps.controls.isStartGame != controls.isStartGame) {
      if (controls.isStartGame) {
        this.startGame();
      } else {
        // this.loading();
      }
    }

    if (
      prevProps.controls.turnLeft != controls.turnLeft &&
      prevProps.controls.turnRigth != controls.turnRigth
    ) {
      if (controls.turnLeft) {
        this.setState({carPosition: carPosition - 3});
      }

      if (controls.turnRigth) {
        this.setState({carPosition: carPosition + 3});
      }
    }
  }

  async startGame() {
    this.drawSmallScreen(racingGame.lives);

    let protect = 0;
    if (this.state.pause > 0) {
      protect = this.state.pause + 20;
    }

    for (
      let i = this.state.pause ? this.state.pause : 0;
      i <= racingGame.coordinates.length;
      i++
    ) {
      if (!this.props.controls.isStartGame) {
        this.setState({pause: i});
        return false;
      }

      let car = racingGame.car(this.state.carPosition);
      if (
        racingGame.isCarsCollision(car, racingGame.coordinates[i], i) &&
        i > protect
      ) {
        Vibration.vibrate(500);
        racingGame.lives.shift();
        this.drawSmallScreen(racingGame.lives);
        this.setState({pause: i});
        this.props.startGame(this.props.controls.isStartGame);

        this.showCrash(racingGame.coordinates[i]);

        if (!racingGame.lives.length) {
          this.showGameover();
        }

        console.log('collision');
        return false;
      }

      racingGame.coordinates[i] = racingGame.coordinates[i].concat(car);
      this.drawFrame(racingGame.coordinates[i], i);
      await racingGame.sleep(100);
    }
  }

  showCrash(coordinates) {
    let carCrash = [];
    let j = false;
    let frame = [];
    let cPos = this.state.carPosition;
    for (let i = 0; i < 4; i++) {
      if (j) {
        carCrash = [
          cPos - 1,
          cPos + 2,
          cPos + 10,
          cPos + 11,
          cPos + 20,
          cPos + 21,
          cPos + 29,
          cPos + 32,
        ];
        j = false;
      } else {
        carCrash = [
          cPos,
          cPos + 1,
          cPos + 30,
          cPos + 31,
          cPos + 9,
          cPos + 19,
          cPos + 12,
          cPos + 22,
        ];
        j = true;
      }
      frame = carCrash.concat(coordinates);
      this.drawFrame(frame);
      racingGame.sleep(10);
    }
  }

  showGameover() {
    this.setState({pause: null, score: 0});
    racingGame.initLevel();
    this.loading();
  }

  async loading() {
    let coordinates = [];
    let counter = 0;
    for (let i = 0; i < 230; i++) {
      coordinates.push(i);
      counter++;

      if (counter == 11) {
        this.drawFrame(coordinates);
        await racingGame.sleep(10);
        counter = 0;
      }
    }

    counter = 0;
    for (let i = 0; i < 249; i++) {
      coordinates.pop();
      counter++;
      if (counter == 19) {
        this.drawFrame(coordinates);
        await racingGame.sleep(10);
        counter = 0;
      }
    }

    this.setState({screen: INIT_SCREEN});
    // this.drawFrame(PREVIEW_GAME.A);
  }

  drawFrame(coordinates, score) {
    return new Promise((resolve) => {
      let screen = racingGame.drawScreen(coordinates, 21, 10);
      console.log(screen)
      this.setState({screen, score}, () => {
        resolve();
      });
    });
  }

  drawSmallScreen(coordinates) {
    let smallScreen = racingGame.drawScreen(coordinates, 4, 4);
    this.setState({smallScreen});
  }

  initScreen() {
    const {screen, smallScreen} = racingGame.clearScreen();
    this.setState({screen, smallScreen});
  }

  render() {
    const {screen, smallScreen, score} = this.state;
    return (
      <Screen
        screen={screen}
        smallScreen={smallScreen}
        score={score}
        highScore={racingGame.score}
        speed={racingGame.speed}
        level={racingGame.level}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    powerSwitch: (state) => dispatch(powerSwitch(state)),
    startGame: (state) => dispatch(startGame(state)),
    pressLeft: () => dispatch(pressLeft()),
    pressRigth: () => dispatch(pressRigth()),
  };
};

const mapStateToProps = (state) => ({
  controls: state.controls,
});

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
