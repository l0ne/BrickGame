import React, {Component} from "react";
import {connect} from "react-redux";
import {racingGame} from "../services/RacingGame";
import {powerSwitch, pressLeft, pressRigth, startGame} from "../actions/ControlsActions";
import {Screen} from "../components/Screen";
import {Vibration} from "react-native";

class Monitor extends Component {

    state = {
        screen: [],
        smallScreen: [],
        carPosition: 163,
        car: [],
        pause: null,
        score: 0
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initScreen();
        racingGame.initLevel();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.controls.isPowerOn != this.props.controls.isPowerOn) {
            if (this.props.controls.isPowerOn) {
                this.loading();
            } else {
                this.initScreen();
            }
        }

        if (prevProps.controls.isStartGame != this.props.controls.isStartGame) {
            if (this.props.controls.isStartGame) {
                this.startGame();
            } else {
                // this.loading();
            }
        }

        if (prevProps.controls.turnLeft != this.props.controls.turnLeft && prevProps.controls.turnRigth != this.props.controls.turnRigth) {
            if (this.props.controls.turnLeft) {
                this.setState({carPosition: this.state.carPosition - 3});
            }

            if (this.props.controls.turnRigth) {
                this.setState({carPosition: this.state.carPosition + 3});
            }
        }
    }



    async startGame() {

        this.drawSmallScreen(racingGame.lives);

        let protect = 0;
        if (this.state.pause > 0) {
            protect = this.state.pause + 20;
        }

        for (let i = this.state.pause ? this.state.pause : 0; i <= racingGame.coordinates.length; i++) {

            if (!this.props.controls.isStartGame) {
                this.setState({pause: i});
                return false;
            }

            let car = racingGame.car(this.state.carPosition);
            if (racingGame.isCarsCollision(car, racingGame.coordinates[i], i) && i > protect) {
                Vibration.vibrate(500)
                racingGame.lives.shift();
                this.drawSmallScreen(racingGame.lives);
                this.setState({pause: i});
                this.props.startGame(this.props.controls.isStartGame);

                this.showCrash(racingGame.coordinates[i]);

                if (!racingGame.lives.length) {
                    this.showGameover();
                }

                console.log('collision')
                return false;
            }

            racingGame.coordinates[i] = racingGame.coordinates[i].concat(car);
            this.drawFrame(racingGame.coordinates[i], i);
            await this.sleep(100);
        }

    }

    showCrash(coordinates) {
        let carCrash = [];
        let j = false;
        let frame = [];
        let cPos = this.state.carPosition;
        for (let i=0; i<4; i++) {
            if (j) {
                carCrash = [cPos-1, cPos+2, cPos+10, cPos+11, cPos+20, cPos+21, cPos+29, cPos+32];
                j = false;
            } else {
                carCrash = [cPos, cPos+1, cPos+30, cPos+31, cPos+9, cPos+19, cPos+12, cPos+22];
                j = true;
            }
            frame = carCrash.concat(coordinates);
            this.drawFrame(frame);
            this.sleep(10);
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
        for (let i = 0; i<230; i++) {
            coordinates.push(i);
            counter++;

            if (counter == 11) {
                this.drawFrame(coordinates);
                await this.sleep(10);
                counter = 0;
            }
        }

        counter = 0
        for (let i = 0; i<249;i++) {
            coordinates.pop();
            counter++;
            if (counter == 19) {
                this.drawFrame(coordinates);
                await this.sleep(10);
                counter = 0;
            }
        }
    }

    drawFrame(coordinates, score) {
        return new Promise((resolve => {
            let screen = [];

            for (let j = 0; j < 21; j++) {
                let chars = [];
                for (let i = 0; i < 10; i++) {
                    chars.push({id: i, on: 0});
                }
                screen.push({id: j, chars: chars});
            }

            coordinates.map(item => {
                let i = item/10;
                let x = Math.floor(i);
                let y = Math.round((i - x) * 10)
                if (screen[x] && screen[x].chars[y]) {
                    screen[x].chars[y].on = 1
                }
            });

            this.setState({screen, score}, () => {
                resolve()
            });
        }))
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    initScreen() {

        let screen = [];

        for (let j = 0; j < 21; j++) {
            let chars = [];
            for (let i = 0; i < 10; i++) {
                chars.push({id: i, on: 0});
            }
            screen.push({id: j, chars: chars});
        }

        let smallScreen = [];

        for (let j = 0; j < 4; j++) {
            let chars = [];
            for (let i = 0; i < 4; i++) {
                chars.push({id: i, on: 0});
            }
            smallScreen.push({id: j, chars: chars});
        }

        this.setState({screen, smallScreen});
    }

    drawSmallScreen(coordinates) {

        let smallScreen = [];

        for (let j = 0; j < 4; j++) {
            let chars = [];
            for (let i = 0; i < 4; i++) {
                chars.push({id: i, on: 0});
            }
            smallScreen.push({id: j, chars: chars});
        }

        coordinates.map(item => {
            let i = item/10;
            let x = Math.floor(i);
            let y = Math.round((i - x) * 10)
            if (smallScreen[x] && smallScreen[x].chars[y]) {
                smallScreen[x].chars[y].on = 1
            }
        });

        this.setState({smallScreen});
    }

    render() {
        const {screen, smallScreen, score} = this.state;
        return (
            <Screen screen={screen} smallScreen={smallScreen} score={score} highScore={racingGame.score}
                    speed={racingGame.speed} level={racingGame.level}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        powerSwitch: (state) => dispatch(powerSwitch(state)),
        startGame: (state) => dispatch(startGame(state)),
        pressLeft: () => dispatch(pressLeft()),
        pressRigth: () => dispatch(pressRigth())
    }
}

const mapStateToProps = (state) => ({
    controls: state.controls
})

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
