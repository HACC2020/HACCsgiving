import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../screens/Splash';
import Search from '../screens/Search';
import Services from '../screens/Services';

const Tab = createBottomTabNavigator();

const SplashNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{

      }}
    >
      <Tab.Screen name="Home" component={Splash} />
      <Tab.Screen name="New Search" component={Search} />
      <Tab.Screen name="All Services" component={Services} />
    </Tab.Navigator>
  )
};

export default SplashNavigator;
