import React, {Fragment, Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Button} from "../components/Button";
import {connect} from "react-redux";
import {powerSwitch, startGame, pressLeft, pressRigth} from "../actions/ControlsActions";

class Keyboard extends Component {

    constructor(props) {
        super(props);
    }

    pressOnOff() {
        console.log('press button')
        this.props.powerSwitch(this.props.controls.isPowerOn);
    }

    pressStartP() {
        console.log('press button')
        this.props.startGame(this.props.controls.isStartGame);
    }

    pressLeft() {
        this.props.pressLeft();
    }

    pressRigth() {
        this.props.pressRigth();
    }

    render() {
        return (
            <Fragment>
                <View style={{flexDirection: 'row', width: '50%', justifyContent: 'space-between', marginTop: 10}}>
                    <Button text='START/P' action={() => this.pressStartP()} />
                    <Button text='ON/OFF' action={() => this.pressOnOff()} />
                    <Button text='SOUND'/>
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10}}>
                    <View style={{width: '70%', flexDirection: 'row', paddingLeft: 10}}>
                        <Button text='LEFT' size={40} action={() => this.pressLeft()}/>
                        <Button text='DOWN' size={40} style={{marginTop: 50}}/>
                        <Button text='RIGHT' size={40} action={() => this.pressRigth()}/>
                    </View>
                    <View style={{width: '30%', alignItems: 'flex-end', paddingRight: 10}}>
                        <Button text='ROTATE' size={70}/>
                    </View>
                </View>
            </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
