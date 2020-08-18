import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {MainScreen} from '../screens/Main';

const AppNavigator = createSwitchNavigator(
  {
    Main: MainScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

export const AppContainer = createAppContainer(AppNavigator);
