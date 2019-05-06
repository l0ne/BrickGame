import {Figure} from "./Figure";
import {View} from "react-native";
import React from "react";

export const ScreenFrame = (props) => {
    const {side} = props;

    if (side == 'left') {
        return (
            <View>
                <Figure type={[[1,1], [1,1]]} />
                <Figure type={[[1,0,0], [1,1,1]]} />
                <Figure type={[[0,1,1], [1,1,0]]} />
                <Figure type={[[1,1], [1,1]]} />
                <Figure type={[[0,1,0], [1,1,1]]} />
                <Figure type={[[1,1,0], [0,1,1]]} />
            </View>
        )
    }

    if (side == 'rigth') {
        return (
            <View>
                <Figure type={[[1,1,0], [0,1,1]]} />
                <Figure type={[[1,1,1], [0,1,0]]} />
                <Figure type={[[1,1], [1,1]]} />
                <Figure type={[[0,1,1], [1,1,0]]} />
                <Figure type={[[1,1,1], [0,0,1]]} />
                <Figure type={[[1,1], [1,1]]} />
            </View>
        )
    }
}
