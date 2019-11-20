import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import AppTabNavigator from './AppTabNavigator';
import AuthStackNavigtor from './AuthStackNavigtor';

const SwitchNavigator = createSwitchNavigator({
    App: AppTabNavigator,
    Authentication: AuthStackNavigtor,
});

export default createAppContainer(SwitchNavigator);