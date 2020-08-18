import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {LABELS} from '../../constants';

export const Footer = () => (
  <>
    <View style={styles.container}>
      <Text style={styles.logoText}>{LABELS.BRICK}</Text>
      <Text style={[styles.logoText, {marginLeft: 70}]}>{LABELS.GAME}</Text>
      <Text style={styles.redText}>{LABELS.COUNT}</Text>
    </View>
    <View style={styles.line} />
    <View style={styles.model}>
      <Text style={styles.modelText}>{LABELS.SERIAL}</Text>
    </View>
  </>
);
