import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
//internal imports  
import { Splash, Search, Services, Stats} from '../screens'

const Tab = createBottomTabNavigator();

const SplashNavigator = (props) => {

  let user = auth().currentUser;

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
          }  else if (route.name === 'Stats') {
            iconName = focused ? 'md-stats-chart-sharp' : 'md-stats-chart-outline';
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
      <Tab.Screen name="New Search" component={Search} initialParams={{ initialSearch: ''}}/>
      <Tab.Screen name="All Services" component={Services} />
      {user && user.displayName === 'admin' &&
        <Tab.Screen name="Stats" component={Stats} />
      }
    </Tab.Navigator>
  )
};

export default SplashNavigator;
