import React from 'react';
import {AppContainer} from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';
import NavigationService from './src/services/NavigationService';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <AppContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
