import React from 'react';
import {View, Text} from 'react-native';
import {ScreenFrame} from '../../components/ScreenFrame';
import Keyboard from '../../components/Keyboard';
import {Footer} from '../../components/Footer';
import {styles} from './styles';
import PropTypes from 'prop-types';
import {Number} from '../Number';

export const Layout = ({children}) => (
  <View style={styles.container}>
    <View style={styles.textOnTopContainer}>
      <Text style={styles.textOnTop}>SUPER</Text>
    </View>
    <View style={styles.topContainer}>
      <ScreenFrame side="left" />
      <View style={styles.screenContainer}>
        <View style={styles.screenBorder}>{children}</View>
      </View>
      <ScreenFrame side="rigth" />
    </View>
    <Keyboard />
    <Footer />
  </View>
);

Number.propTypes = {
  children: PropTypes.any,
};
