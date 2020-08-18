import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    backgroundColor: '#bec3b5',
    width: '100%',
    height: '100%',
    borderWidth: 15,
    borderLeftColor: '#b3b3b3',
    borderTopColor: '#a8a8a8',
    borderRightColor: '#c9c9c9',
    borderBottomColor: '#cfcfcf',
    padding: 1,
    paddingTop: 2,
  },
  screenMain: {
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginLeft: 1,
    paddingRight: 1,
    paddingTop: 3,
  },
  screenRow: {flexDirection: 'row'},
  textContainer: {alignItems: 'center', marginRight: 2},
  text: {fontSize: 8, marginTop: 2},
  levelContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  subScreenContainer: {flex: 1, alignItems: 'center', marginTop: 10},
  subScreen: {marginTop: 40},
});
