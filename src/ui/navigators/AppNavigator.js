import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import EmployeeCheck from '../screens/EmployeeCheck';
import Home from '../screens/Home';

/**
 * TODO:
 * - Implement react-navigation
 * - Add remaining screens from the mockup
 * 
 * So far, the plan is to set up the navigator so that it follows the mockup.
 * Right now, we have first and second screens from the mockup, Home.js and EmployeeCheck.js.
 */
const AppNavigator = (props) => {
  return (
    <>
      <Home />
      {/* <EmployeeCheck /> */}
    </>
  );
}

export default AppNavigator;