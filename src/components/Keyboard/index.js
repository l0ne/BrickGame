import React from 'react';
import {View} from 'react-native';
import {Button} from '../Button';
import {connect} from 'react-redux';
import {styles} from './styles';
import {LABELS} from '../../constants';
import {
  powerSwitch,
  startGame,
  pressLeft,
  pressRigth,
  pressSound,
  pressRotate,
  pressDown,
} from '../../actions/ControlsActions';

const Keyboard = ({
  powerSwitch,
  startGame,
  controls,
  pressLeft,
  pressRigth,
  pressSound,
  pressDown,
  pressRotate,
}) => {
  return (
    <>
      <View style={[styles.container, {width: 200}]}>
        <Button
          text={LABELS.START}
          action={() => startGame(controls.isStartGame)}
        />
        <Button
          text={LABELS.ONOFF}
          action={() => powerSwitch(controls.isPowerOn)}
        />
        <Button text={LABELS.SOUND} action={() => pressSound()} />
      </View>
      <View style={styles.container}>
        <View style={styles.leftButtonBlock}>
          <Button text={LABELS.LEFT} size={40} action={() => pressLeft()} />
          <Button
            text={LABELS.DOWN}
            size={40}
            style={{marginTop: 50}}
            action={() => pressDown()}
          />
          <Button text={LABELS.RIGHT} size={40} action={() => pressRigth()} />
        </View>
        <View style={styles.rigthButtonBlock}>
          <Button text={LABELS.ROTATE} size={70} action={() => pressRotate()} />
        </View>
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  powerSwitch: (state) => dispatch(powerSwitch(state)),
  startGame: (state) => dispatch(startGame(state)),
  pressLeft: () => dispatch(pressLeft()),
  pressRigth: () => dispatch(pressRigth()),
  pressSound: () => dispatch(pressSound()),
  pressDown: () => dispatch(pressDown()),
  pressRotate: () => dispatch(pressRotate()),
});

const mapStateToProps = (state) => ({
  controls: state.controls,
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
