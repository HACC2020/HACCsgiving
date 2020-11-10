import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../screens/Splash';
import Search from '../screens/Search';
import Services from '../screens/Services';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const SplashNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'New Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'All Services') {
            iconName = focused ? 'information-circle-sharp' : 'information-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} />;
        },
      })}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
        }
      }}
    >
      <Tab.Screen name="Home" component={Splash} />
      <Tab.Screen name="New Search" component={Search} />
      <Tab.Screen name="All Services" component={Services} />
    </Tab.Navigator>
  )
};

export default SplashNavigator;
