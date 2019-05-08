import {StyleSheet, Text, View} from "react-native";
import {Сube} from "./Сube";
import {Score} from "./Score";
import {Number} from "./Number";
import React from "react";

export const Screen = (props) => {
    const {screen, smallScreen, score, highScore, speed, level} = props;
    return (
        <View style={styles.screen}>
            <View style={styles.screenMain}>
                {screen.map(i => <View style={{flexDirection: 'row'}} key={i.id}>
                    {i.chars.map(j => <Сube color={j.on ? '#000' : '#a3a39a'} size={12} key={j.id}/>)}
                </View>)}
            </View>
            <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                <Score text='HIGH SCORE' number={highScore}/>
                <View style={{marginTop: 10}}/>
                <Score text='SCORE' number={score} />
                <View style={{marginTop: 40}}>
                    {smallScreen.map(i => <View style={{flexDirection: 'row'}} key={i.id}>
                        {i.chars.map(j => <Сube color={j.on ? '#000' : '#a3a39a'} size={11} key={j.id}/>)}
                    </View>)}
                </View>
                <View style={{flexDirection: 'row', alignItems: 'space-between', marginTop: 30}}>
                    <View style={{alignItems: 'center'}}>
                        <Number number={speed}/>
                        <Text style={{fontSize: 8, marginTop: 2}}>SPEED</Text>
                    </View>
                    <View style={{marginLeft: 2, alignItems: 'center'}}>
                        <Number number={level}/>
                        <Text style={{fontSize: 8, marginTop: 2}}>LEVEL</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

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
