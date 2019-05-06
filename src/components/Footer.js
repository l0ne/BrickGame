import {Fragment} from "react";
import {Text, View} from "react-native";
import React from "react";

export const Footer = () => {
    return (
        <Fragment>
            <View style={{transform: [{ rotate: '330deg'}]}}>
                <Text style={{color: '#505f6c', fontWeight: 'bold', fontSize: 44, marginTop: -10}}>BRICK</Text>
                <Text style={{color: '#505f6c', fontWeight: 'bold', fontSize: 44, marginTop: -10, marginLeft: 70}}>GAME</Text>
                <Text style={{marginLeft: 150, fontSize: 20, color: '#934444', marginTop: -10, fontWeight: '600'}}>1 in 1</Text>
            </View>
            <View style={{flex: 1, width: '100%', borderBottomWidth: 3, borderColor: '#934444', marginTop: 20}}/>
            <View style={{backgroundColor: '#dddddd', padding: 5, marginTop: -18, marginLeft: 200}}><Text style={{fontSize: 16, fontWeight: 'bold'}}>E 88</Text></View>
        </Fragment>
    )
}
