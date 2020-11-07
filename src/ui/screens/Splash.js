import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import Bullets from '../components/Bullets';
import { COLORS } from '../../config/Colors';
import Banner from '../components/Banner';

/**
 * TODO:
 */
const Splash = (props) => {
  const str = '\nClick here for COVID-19 information';
  return (
    <View style={styles.container}>
      <View style={styles.settingsButton}>
        <TouchableOpacity
            onPress={() => navigate('Settings')}>
            <Text style={styles.settingsButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bannerContainer}>
        {/* <Text style={styles.welcomeText}>Splash</Text> */}
        <Banner style={styles.banner} link={str} />
      </View>

      <View style={styles.homeButton}>
        <TouchableOpacity
            onPress={() => navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.servicesButton}>
        <TouchableOpacity
            onPress={() => navigate('All Services')}>
            <Text style={styles.servicesButtonText}>All Services</Text>
        </TouchableOpacity>
      </View>

      <Bullets current={4} />
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
  bannerContainer: {
    position: 'absolute',
    top: 20
  },
  banner: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
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
  },
  settingsButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: COLORS.darkGreen,
    padding: 10,
    borderRadius: 50
  },
  settingsButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  homeButton: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    backgroundColor: COLORS.darkGreen,
    padding: 16,
    borderRadius: 50
  },
  servicesButton: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    backgroundColor: COLORS.darkGreen,
    padding: 21,
    borderRadius: 50
  },
  servicesButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold'
  },
});

export default Splash;