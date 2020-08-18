import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  leftButtonBlock: {width: '70%', flexDirection: 'row', paddingLeft: 10},
  rigthButtonBlock: {width: '30%', alignItems: 'flex-end', paddingRight: 10},
});
