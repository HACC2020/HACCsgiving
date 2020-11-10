import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeCheck from '../screens/EmployeeCheck';
import Landing from '../screens/Landing';
import DependencyCheck from '../screens/DependencyCheck';
import Splash from '../screens/Splash';
import SplashNavigator from './SplashNavigator';
// import Home from '../screens/Home';

/**
 * TODO:
 * - Implement react-navigation
 * - Add remaining screens from the mockup
 * 
 * So far, the plan is to set up the navigator so that it follows the mockup.
 * Right now, we have first and second screens from the mockup, Landing.js and EmployeeCheck.js.
 */

const Stack = createStackNavigator();

const TheAppNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="EmployeeCheck" component={EmployeeCheck} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="DependencyCheck" component={DependencyCheck} />
      <Stack.Screen name="Splash" component={SplashNavigator} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TheAppNavigator />
    </NavigationContainer>
  );
}