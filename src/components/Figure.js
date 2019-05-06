import {View} from "react-native";
import {Сube} from "./Сube";
import React, {Fragment} from 'react';

export const Figure = (props) => {
    const {type} = props;

    return (
        <Fragment>
            <View style={{flexDirection: 'row'}}>
                <View>{type[0].map(i => <Сube visible={i} key={Math.random()}></Сube>)}</View>
                <View>{type[1].map(i => <Сube visible={i} key={Math.random()}></Сube>)}</View>
            </View>
            <Сube visible={0}></Сube>
        </Fragment>
    )
}
