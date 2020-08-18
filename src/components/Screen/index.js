import {Text, View} from 'react-native';
import {Сube} from '../Сube';
import {Score} from '../Score';
import {Number} from '../Number';
import React from 'react';
import {COLORS, LABELS} from '../../constants';
import {styles} from './styles';
import PropTypes from 'prop-types';

export const Screen = ({
  screen,
  smallScreen,
  score,
  highScore,
  speed,
  level,
}) => {
  const renderRow = (items, size) => {
    let row = [];
    if (typeof items === 'string') {
      row = items.split(',');
    } else {
      row = items.map((item) => item.on && 'x');
    }

    return row.map((item, i) => (
      <Сube
        color={item === 'x' ? COLORS.black : COLORS.grey}
        size={size}
        key={i}
      />
    ));
  };

  const renderScreen = (items, size) => {
    return items.map((item, i) => (
      <View style={styles.screenRow} key={i}>
        {renderRow(item.chars ? item.chars : item, size)}
      </View>
    ));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.screenMain}>{renderScreen(screen, 12)}</View>
      <View style={styles.subScreenContainer}>
        <Score text={LABELS.HSCORE} number={highScore} />
        <Score text={LABELS.SCORE} number={score} />
        <View style={styles.subScreen}>{renderScreen(smallScreen, 11)}</View>
        <View style={styles.levelContainer}>
          <View style={styles.textContainer}>
            <Number number={speed} />
            <Text style={styles.text}>{LABELS.SPEED}</Text>
          </View>
          <View style={styles.textContainer}>
            <Number number={level} />
            <Text style={styles.text}>{LABELS.LEVEL}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

Screen.propTypes = {
  number: PropTypes.number,
};
