import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    padding: 20,
    paddingTop: '10%',
  },
  textOnTopContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#dddddd',
    zIndex: 1,
  },
  textOnTop: {
    fontSize: 24,
    color: '#505f6c',
    fontWeight: 'bold',
  },
  topContainer: {
    flexDirection: 'row',
    marginTop: -12,
  },
  screenContainer: {
    width: '80%',
    height: 370,
    borderColor: '#934444',
    borderWidth: 4,
    marginLeft: 5,
    marginRight: 5,
    padding: 7,
  },
  screenBorder: {
    borderColor: '#e8e8e8',
    borderWidth: 5,
    borderRadius: 3,
  },
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
    padding: 2,
  },
});

