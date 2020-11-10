import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppNavigator from './src/ui/navigators/AppNavigator';


const App = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
