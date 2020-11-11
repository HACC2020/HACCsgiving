import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bullets from '../components/Bullets';
import { COLORS } from '../../config/Colors';


/**
 * TODO:
 * -
 * - Maybe add a background image (your choice)
 */
const Landing = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to Helping Hands!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EmployeeCheck')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next →</Text>
        </TouchableOpacity>
      </View>
      <Bullets current={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.mainGreen,
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 50,
    width: 125,
    padding: 16,
  },
  buttonContainer: {
    // backgroundColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 32,
    width: '100%'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
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

export default Landing;
