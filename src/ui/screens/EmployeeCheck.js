import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bullets from '../components/Bullets';

const EmployeeCheck = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Employee Check!</Text>
      </View>
      <Bullets current={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00a86b',
    justifyContent: 'flex-end'
  },
  welcomeContainer: {
    position: 'absolute',
    top: 70
  },
  welcomeText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default EmployeeCheck;
