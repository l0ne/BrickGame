import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS, NUMBER_CONFIG} from '../../constants';
import PropTypes from 'prop-types';

export const Number = ({number}) => {
  let lines = NUMBER_CONFIG[10];
  if (NUMBER_CONFIG[number] !== undefined) {
    lines = NUMBER_CONFIG[number];
  }

  let up = {
    borderLeftColor: lines[0] ? COLORS.black : COLORS.grey,
    borderTopColor: lines[1] ? COLORS.black : COLORS.grey,
    borderRightColor: lines[2] ? COLORS.black : COLORS.grey,
  };

  let down = {
    borderLeftColor: lines[3] ? COLORS.black : COLORS.grey,
    borderTopColor: lines[4] ? COLORS.black : COLORS.grey,
    borderRightColor: lines[5] ? COLORS.black : COLORS.grey,
    borderBottomColor: lines[6] ? COLORS.black : COLORS.grey,
    marginTop: -1,
  };

  return (
    <View style={styles.container}>
      <View style={[styles.section, up]} />
      <View style={[styles.section, down]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {transform: [{rotate: '2deg'}], marginRight: 1, marginLeft: 1},
  section: {width: 7, height: 8, borderWidth: 1},
});

Number.propTypes = {
  number: PropTypes.number,
};
