import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Figure} from '../Figure';
import {
  FIGURE_CUBE,
  FIGURE_7,
  FIGURE_Z,
  FIGURE_1,
  FIGURE_4,
  FIGURE_T,
  FIGURE_L,
} from '../../constants';

export const ScreenFrame = ({side}) => (
  <>
    {side == 'left' && (
      <View>
        <Figure type={FIGURE_CUBE} />
        <Figure type={FIGURE_7} />
        <Figure type={FIGURE_Z} />
        <Figure type={FIGURE_CUBE} />
        <Figure type={FIGURE_1} />
        <Figure type={FIGURE_4} />
      </View>
    )}
    {side == 'rigth' && (
      <View>
        <Figure type={FIGURE_4} />
        <Figure type={FIGURE_T} />
        <Figure type={FIGURE_CUBE} />
        <Figure type={FIGURE_Z} />
        <Figure type={FIGURE_L} />
        <Figure type={FIGURE_CUBE} />
      </View>
    )}
  </>
);

ScreenFrame.propTypes = {
  side: PropTypes.string,
};
