import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import { MaterialIcons, Entypo, Feather } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Color';
import MenuScreen from '../screens/MenuScreen';
import BucketScreen from '../screens/BucketScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const Home = createStackNavigator(
    {
        screen: HomeScreen,
    },
    config
);

Home.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
    },
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `home${focused ? '' : '-outline'}`
                    : 'home'
            }
        />
    ),
};

const Menu = createStackNavigator(
    {
        screen: MenuScreen,
    },
    config
);

Menu.navigationOptions = {
    tabBarLabel: 'Menu',
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
    },
    tabBarIcon: ({ focused }) => (
        <MaterialIcons
            name="menu"
            size={26}
            style={{ marginBottom: -3 }}
            focused={focused}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}

        />
    ),
};

const Bucket = createStackNavigator(
    {
        bucket: BucketScreen,
        checkout: CheckoutScreen,
    },
    config
);

Bucket.navigationOptions = {
    tabBarLabel: 'Bucket',
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
    },
    tabBarIcon: ({ focused }) => (
        <Entypo
            name="bucket"
            size={26}
            style={{ marginBottom: -3 }}
            focused={focused}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}

        />
    ),
};

const More = createStackNavigator(
    {
        screen: HomeScreen,
    },
    config
);

More.navigationOptions = {
    tabBarLabel: 'More',
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
    },
    tabBarIcon: ({ focused }) => (
        <Feather
            name="more-horizontal"
            size={26}
            style={{ marginBottom: -3 }}
            focused={focused}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}

        />
    ),
};

export default AppTabNavigator = createBottomTabNavigator({
    Home: Home,
    Menu: Menu,
    Bucket: Bucket,
    More: More
});