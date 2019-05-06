import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {MainContainer} from "../components/Main";


const AppNavigator = createSwitchNavigator({
        Main: MainContainer,
    }, {
        initialRouteName: 'Main'
    }
);

export const AppContainer = createAppContainer(AppNavigator);
