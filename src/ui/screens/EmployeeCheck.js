import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bullets from '../components/Bullets';
import { COLORS } from '../../config/Colors';

const EmployeeCheck = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Employee Check!</Text>
      </View>
      <TouchableOpacity
          onPress={() => props.navigation.navigate('DependencyCheck')}
          style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Bullets current={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.mainGreen,
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: COLORS.darkGreen,
    padding: 16,
    borderRadius: 50,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  welcomeContainer: {
    position: 'absolute',
    top: 70
  },
  welcomeText: {
    color: COLORS.white,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});


export default EmployeeCheck;
