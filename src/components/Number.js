import React from "react";
import {StyleSheet, View} from "react-native";
import {COLORS} from "../constants";

export const Number = (props) => {
    const {number} = props;
    let config = []; // left top rigth left top rigth bottom
    switch (number) {
        case 1: config = [0,0,1,0,0,1,0]; break;
        case 2: config = [0,1,1,1,1,0,1]; break;
        case 3: config = [0,1,1,0,1,1,1]; break;
        case 4: config = [1,0,1,0,1,1,0]; break;
        case 5: config = [1,1,0,0,1,1,1]; break;
        case 6: config = [1,1,0,1,1,1,1]; break;
        case 7: config = [0,1,1,0,0,1,0]; break;
        case 8: config = [1,1,1,1,1,1,1]; break;
        case 9: config = [1,1,1,0,1,1,1]; break;
        case 0: config = [1,1,1,1,0,1,1]; break;
        default: config = [0,0,0,0,0,0,0];
    }

    let up = {
        borderLeftColor: config[0] ? COLORS.black : COLORS.grey,
        borderTopColor: config[1] ? COLORS.black : COLORS.grey,
        borderRightColor: config[2] ? COLORS.black : COLORS.grey,
    };
    let down = {
        borderLeftColor: config[3] ? COLORS.black : COLORS.grey,
        borderTopColor: config[4] ? COLORS.black : COLORS.grey,
        borderRightColor: config[5] ? COLORS.black : COLORS.grey,
        borderBottomColor: config[6] ? COLORS.black : COLORS.grey,
        marginTop: -1
    };

    return (
        <View style={{transform: [{ rotate: '2deg'}], marginRight: 1, marginLeft: 1}}>
            <View style={[styles.section, up]}/>
            <View style={[styles.section, down]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {width: 7, height: 8, borderWidth: 1}
});
