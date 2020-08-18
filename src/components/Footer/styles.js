import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    transform: [{rotate: '330deg'}],
  },
  logoText: {
    color: '#505f6c',
    fontWeight: 'bold',
    fontSize: 44,
    marginTop: -10,
  },
  redText: {
    marginLeft: 150,
    fontSize: 20,
    color: '#934444',
    marginTop: -10,
    fontWeight: '600',
  },
  line: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 3,
    borderColor: '#934444',
    marginTop: 20,
  },
  model: {
    backgroundColor: '#dddddd',
    padding: 5,
    marginTop: -18,
    marginLeft: 200,
  },
  modelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
