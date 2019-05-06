import {View} from "react-native";
import React from "react";

export const Сube = (props) => {
    const {visible, size, color} = props;
    const _color = visible ? '#505f6c' : '#dddddd'
    return (
        <View style={{borderColor: color || _color, borderWidth: 1, width: size || 15, height: size || 15, padding: 2, margin: 1}}>
            <View style={{backgroundColor: color || _color, width: '100%', height: '100%'}} />
        </View>
    )
}
