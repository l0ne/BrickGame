import {View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';

export const Сube = ({visible, size, color}) => {
  const _color = visible === '[x]' ? '#505f6c' : '#dddddd';
  return (
    <View
      style={[
        styles.container,
        {borderColor: color || _color},
        size && {width: size, height: size},
      ]}>
      <View style={[styles.child, {backgroundColor: color || _color}]} />
    </View>
  );
};

Сube.propTypes = {
  visible: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
