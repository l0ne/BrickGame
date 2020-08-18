import {StyleSheet, Text, View} from 'react-native';
import {Number} from '../Number';
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const Score = ({number, text}) => {
  let array = [];
  if (number) {
    array = number.toString().split('').reverse();
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Number number={array[4]} />
        <Number number={array[3]} />
        <Number number={array[2]} />
        <Number number={array[1]} />
        <Number number={array[0]} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  text: {fontSize: 7, fontWeight: '400', marginTop: 2, marginBottom: 10},
});

Score.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};
