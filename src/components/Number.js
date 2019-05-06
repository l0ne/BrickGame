import React from "react";
import {View} from "react-native";

export const Number = (props) => {
    const {number} = props;
    let up = {}
    let down = {}
    switch (number) {
        case 1:
            up = {borderRightColor: '#000'};
            down = {borderRightColor: '#000'};
            break;
        case 2:
            up = {borderRightColor: '#000', borderTopColor: '#000'};
            down = {borderLeftColor: '#000', borderTopColor: '#000', borderBottomColor: '#000'};
            break;
        case 3:
            up = {borderRightColor: '#000', borderTopColor: '#000'};
            down = {borderRightColor: '#000', borderTopColor: '#000', borderBottomColor: '#000'};
            break;
        case 4:
            up = {borderRightColor: '#000', borderLeftColor: '#000'};
            down = {borderRightColor: '#000', borderTopColor: '#000'};
            break;
        case 5:
            up = {borderLeftColor: '#000', borderTopColor: '#000'};
            down = {borderRightColor: '#000', borderTopColor: '#000', borderBottomColor: '#000'};
            break;
        case 6:
            up = {borderLeftColor: '#000', borderTopColor: '#000'};
            down = {borderRightColor: '#000', borderTopColor: '#000', borderBottomColor: '#000', borderLeftColor: '#000'};
            break;
        case 7:
            up = {borderRightColor: '#000', borderTopColor: '#000'};
            down = {borderRightColor: '#000'};
            break;
        case 8:
            up = {borderRightColor: '#000', borderTopColor: '#000', borderLeftColor: '#000'};
            down = {borderRightColor: '#000', borderTopColor: '#000', borderLeftColor: '#000', borderBottomColor: '#000'};
            break;
        case 9:
            up = {borderRightColor: '#000', borderTopColor: '#000', borderLeftColor: '#000'};
            down = {borderRightColor: '#000', borderTopColor: '#000', borderBottomColor: '#000'};
            break;
        case 0:
            up = {borderRightColor: '#000', borderTopColor: '#000', borderLeftColor: '#000'};
            down = {borderRightColor: '#000', borderLeftColor: '#000', borderBottomColor: '#000'};
            break;
        default:
            up = {borderColor: '#a3a39a'}
            down = {borderColor: '#a3a39a'}
    }

    return (
        <View style={{transform: [{ rotate: '2deg'}], marginRight: 1, marginLeft: 1}}>
            <View style={[{width: 7, height: 8, borderWidth: 1, borderRadius: 2, borderColor: '#a3a39a'}, up]}/>
            <View style={[{width: 7, height: 8, borderWidth: 1, borderRadius: 2, marginTop: -1, borderColor: '#a3a39a'}, down]}/>
        </View>
    )
}
