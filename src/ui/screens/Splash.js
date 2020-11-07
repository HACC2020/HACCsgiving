import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bullets from '../components/Bullets';
import { COLORS } from '../../config/Colors';
import Banner from '../components/Banner';

/**
 * TODO:
 */
const Splash = (props) => {
  const str = 'Click here for COVID-19 information';
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        {/* <Text style={styles.welcomeText}>Splash</Text> */}
        <Banner style={styles.banner} link={str} />
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
  // button: {
  //   backgroundColor: COLORS.darkGreen,
  //   padding: 16,
  //   borderRadius: 50,
  // },
  // buttonText: {
  //   color: COLORS.white,
  //   fontSize: 20,
  //   fontWeight: 'bold'
  // },
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

export default Splash;