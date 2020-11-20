import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bullets from '../components/Bullets';
import { COLORS } from '../../config/Colors';


/**
 * TODO:
 * 
 */
const Landing = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/waikiki-beach-347018_1920.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to Helping Hands!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EmployeeCheck')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started →</Text>
          </TouchableOpacity>
        </View>
        <Bullets current={1} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end'
  },
  background: {
    flex: 1,
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 50,
    flex: 1,
    marginHorizontal: 16,
    padding: 16
  },
  buttonContainer: {
    // backgroundColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  buttonText: {
    color: COLORS.darkGreen,
    fontSize: 24,
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
