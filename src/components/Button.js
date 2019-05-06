import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export const Button = (props) => {
    const {text, size, style, action} = props;
    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={action}
                              style={[styles.button, size && {
                                  width: size,
                                  height: size,
                                  borderRadius: size / 2
                              }, style && style]}></TouchableOpacity>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f5ce2a',
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#c6c1bf',
        margin: 5
    },
    buttonText: {fontWeight: 'bold', color: '#505f6c', fontSize: 12}
});
