import React from "react";
import {View} from "react-native";
import {COLORS} from "../constants";

export const Number = (props) => {
    const {number} = props;
    let up = {}
    let down = {}
    switch (number) {
        case 1:
            up = {borderRightColor: COLORS.black, borderTopColor: COLORS.grey, borderLeftColor: COLORS.grey};
            down = {
                borderRightColor: COLORS.black,
                borderLeftColor: COLORS.grey,
                borderTopColor: COLORS.grey,
                borderBottomColor: COLORS.grey
            };
            break;
        case 2:
            up = {borderRightColor: COLORS.black, borderTopColor: COLORS.black, borderLeftColor: COLORS.grey};
            down = {borderLeftColor: COLORS.black, borderTopColor: COLORS.black, borderBottomColor: COLORS.black, borderRightColor: COLORS.grey};
            break;
        case 3:
            up = {borderRightColor: COLORS.black, borderTopColor: COLORS.black, borderLeftColor: COLORS.grey};
            down = {borderRightColor: COLORS.black, borderTopColor: COLORS.black, borderBottomColor: COLORS.black, borderLeftColor: COLORS.grey};
            break;
        case 4:
            up = {borderRightColor: COLORS.black, borderLeftColor: COLORS.black, borderTopColor: COLORS.grey};
            down = {
                borderRightColor: COLORS.black,
                borderLeftColor: COLORS.grey,
                borderTopColor: COLORS.black,
                borderBottomColor: COLORS.grey
            };
            break;
        case 5:
            up = {
                borderLeftColor: COLORS.black,
                borderTopColor: COLORS.black,
                borderRightColor: COLORS.grey
            };
            down = {
                borderLeftColor: COLORS.grey,
                borderRightColor: COLORS.black,
                borderTopColor: COLORS.black,
                borderBottomColor: COLORS.black
            };
            break;
        case 6:
            up = {borderLeftColor: COLORS.black, borderTopColor: COLORS.black, borderRightColor: COLORS.grey};
            down = {
                borderRightColor: COLORS.black,
                borderTopColor: COLORS.black,
                borderBottomColor: COLORS.black,
                borderLeftColor: COLORS.black};
            break;
        case 7:
            up = {borderRightColor: COLORS.black, borderTopColor: COLORS.black, borderLeftColor: COLORS.grey};
            down = {
                borderRightColor: COLORS.black,
                borderLeftColor: COLORS.grey,
                borderTopColor: COLORS.grey,
                borderBottomColor: COLORS.grey
            };
            break;
        case 8:
            up = {borderRightColor: COLORS.black, borderTopColor: COLORS.black, borderLeftColor: COLORS.black};
            down = {
                borderRightColor: COLORS.black,
                borderTopColor: COLORS.black,
                borderLeftColor: COLORS.black,
                borderBottomColor: COLORS.black
            };
            break;
        case 9:
            up = {
                borderRightColor: COLORS.black,
                borderTopColor: COLORS.black,
                borderLeftColor: COLORS.black
            };
            down = {
                borderRightColor: COLORS.black,
                borderLeftColor: COLORS.grey,
                borderTopColor: COLORS.black,
                borderBottomColor: COLORS.black
            };
            break;
        case 0:
            up = {
                borderTopColor: COLORS.black,
                borderLeftColor: COLORS.black,
                borderRightColor: COLORS.black,
            };
            down = {
                borderTopColor: COLORS.grey,
                borderLeftColor: COLORS.black,
                borderRightColor: COLORS.black,
                borderBottomColor: COLORS.black,
            };
            break;
        default:
            up = {
                borderColor: COLORS.grey
            };
            down = {
                borderColor: COLORS.grey
            };
    }

    return (
        <View style={{transform: [{ rotate: '2deg'}], marginRight: 1, marginLeft: 1}}>
            <View style={[{width: 7, height: 8, borderWidth: 1}, up]}/>
            <View style={[{width: 7, height: 8, borderWidth: 1, marginTop: -1}, down]}/>
        </View>
    )
}
