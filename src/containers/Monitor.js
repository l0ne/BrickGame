import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

import {Сube} from "../components/Сube";
import {connect} from "react-redux";
import {Number} from "../components/Number";
import {racingGame} from "../services/RacingGame";
import {Score} from "../components/Score";

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

        for (let i = this.state.pause ? this.state.pause : 0; i <= racingGame.coordinates.length; i++) {
            if (!this.props.controls.isStartGame) {
                this.setState({pause: i});
                return false;
            }
            racingGame.coordinates[i] = racingGame.coordinates[i].concat(racingGame.car(this.state.carPosition));
            this.drawFrame(racingGame.coordinates[i], i);
            await this.sleep(100);
        }

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

    render() {
        const {screen, smallScreen, score} = this.state;
        return (
            <View style={styles.screen}>
                <View style={styles.screenMain}>
                    {screen.map(i => <View style={{flexDirection: 'row'}} key={i.id}>
                        {i.chars.map(j => <Сube color={j.on ? '#000' : '#a3a39a'} size={12} key={j.id}/>)}
                    </View>)}
                </View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                    <Score text='HIGH SCORE' number={racingGame.score}/>
                    <View style={{marginTop: 10}}/>
                    <Score text='SCORE' number={score} />
                    <View style={{marginTop: 40}}>
                        {smallScreen.map(i => <View style={{flexDirection: 'row'}} key={i.id}>
                            {i.chars.map(j => <Сube color={j.on ? '#000' : '#a3a39a'} size={11} key={j.id}/>)}
                        </View>)}
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'space-between', marginTop: 30}}>
                        <View style={{alignItems: 'center'}}>
                            <Number number={racingGame.speed}/>
                            <Text style={{fontSize: 8, marginTop: 2}}>SPEED</Text>
                        </View>
                        <View style={{marginLeft: 2, alignItems: 'center'}}>
                            <Number number={racingGame.level}/>
                            <Text style={{fontSize: 8, marginTop: 2}}>LEVEL</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    controls: state.controls
})

export default connect(mapStateToProps, null)(Monitor);

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        backgroundColor: '#bec3b5',
        width: '100%',
        height: '100%',
        borderWidth: 15,
        borderLeftColor: '#b3b3b3',
        borderTopColor: '#a8a8a8',
        borderRightColor: '#c9c9c9',
        borderBottomColor: '#cfcfcf',
        padding: 1,
        paddingTop: 2
    },
    screenMain: {borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, marginLeft: 1, paddingRight: 1, paddingTop: 3}
});
