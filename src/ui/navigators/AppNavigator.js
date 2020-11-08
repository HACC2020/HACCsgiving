import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//internal imports
import EmployeeCheck from '../screens/EmployeeCheck';
import Landing from '../screens/Landing';
import DependencyCheck from '../screens/DependencyCheck';
import Home from '../screens/Home';
import OtherHome from '../screens/OtherHome';
import login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Stats from '../screens/Stats';
import Settings from  '../screens/Settings';
import Search from '../screens/Search';

/**
 * TODO:
 * - Implement react-navigation
 * - Add remaining screens from the mockup
 * 
 * So far, the plan is to set up the navigator so that it follows the mockup.
 * Right now, we have first and second screens from the mockup, Landing.js and EmployeeCheck.js.
 */

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TheAppNavigator = (props) => {

  let user = auth().currentUser;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="EmployeeCheck" component={EmployeeCheck} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DependencyCheck" component={DependencyCheck} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Homes" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={Search} />
      {user.displayName === 'admin' &&
        <Tab.Screen name="Stats" component={Stats} />
      }
    </Tab.Navigator>
  );

}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="OtherHome" component={OtherHome} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TheAppNavigator />
    </NavigationContainer>
  );
}