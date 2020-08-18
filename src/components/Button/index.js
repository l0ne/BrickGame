import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';

export const Button = ({text, size, style, action}) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={action}
      style={[
        styles.button,
        size && {width: size, height: size, borderRadius: size / 2},
        !!style && style,
      ]}></TouchableOpacity>
    <Text style={styles.buttonText}>{text}</Text>
  </View>
);

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  action: PropTypes.func,
};
