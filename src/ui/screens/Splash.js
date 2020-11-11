import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import Bullets from '../components/Bullets';
import { COLORS } from '../../config/Colors';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Recommended from '../components/Recommended';

/**
 * TODO:
 */
const Splash = (props) => {
  const str = 'Click here for COVID-19 information';
  return (
    <View style={styles.container}>

      <View style={styles.bannerContainer}>
        <View style={styles.settingsContainer}>
          <View style={styles.settingsButton}>
            <TouchableOpacity
             onPress={() => props.navigation.navigate('Settings')}
            >
              <Text style={styles.settingsButtonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
        // onPress={() => props.navigation.navigate('Settings')}
        >
          <Card cardStyle={{ marginHorizontal: 16 }} contentStyle={{ paddingVertical: 0 }}>
            <Banner style={styles.banner} link={str} />
          </Card>
        </TouchableOpacity>
      </View>

      <Recommended />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.mainGreen,
    //justifyContent: 'flex-end'
  },
  bannerContainer: {
    // position: 'absolute',
    marginTop: 15
  },
  banner: {
    color: COLORS.darkGreen,
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
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
  bullets: {
    position: 'absolute',
    bottom: 0,
  },
  pinnedServiceContainer: {
    alignItems: 'stretch',
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'flex-end'
  },
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  settingsButton: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 50,
    padding: 10,
    marginRight: 16
  },
  settingsButtonText: {
    color: COLORS.white,
    fontSize: 14,
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

/*
<View style={styles.homeButton}>
        <TouchableOpacity
        // onPress={() => props.navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.servicesButton}>
        <TouchableOpacity
        // onPress={() => props.navigation.navigate('All Services')}
        >
          <Text style={styles.servicesButtonText}>All Services</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bullets}>
        <Bullets current={4} />
      </View>


*/

export default Splash;