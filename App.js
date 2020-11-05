import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppNavigator from './ui/navigators/AppNavigator';


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
