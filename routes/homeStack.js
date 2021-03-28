import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Second from '../screens/Second';

const screens = {
    Home: {
        screen: Home
    },
    Second: {
        screen: Second
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);