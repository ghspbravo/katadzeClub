import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import PartnerScreen from '../screens/PartnerScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Профиль',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
  Partner: PartnerScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Скидки',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-gift' : 'md-gift'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
},
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#828282',
      style: {
        backgroundColor: Colors.background,
        borderTopColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
      }
    }
  });
