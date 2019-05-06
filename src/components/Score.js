import {Text, View} from "react-native";
import {Number} from "./Number";
import React, {Fragment} from "react";

export const Score = (props) => {
    const {number, text} = props;
    let first = number;
    let two = null;
    let three = null;
    let four = null;
    let five = null;
    let i = 0;
    if (number > 9) {
        i = number/10;
        two = Math.floor(i);
        first = Math.round((i - two) * 10)
    }
    if (number > 99) {
        i = two/10;
        three = Math.floor(i);
        two = Math.round((i - three) * 10)
    }
    if (number > 999) {
        i = three/10;
        four = Math.floor(i);
        three = Math.round((i - four) * 10)
    }
    if (number > 9999) {
        i = four/10;
        five = Math.floor(i);
        four = Math.round((i - five) * 10)
    }
    return (
        <Fragment>
            <View style={{flexDirection: 'row', alignItems: 'space-between'}}>
                <Number number={five} />
                <Number number={four}/>
                <Number number={three} />
                <Number number={two} />
                <Number number={first} />
            </View>
            <Text style={{fontSize: 7, fontWeight: '400', marginTop: 2}}>{text}</Text>
        </Fragment>
    )
}
