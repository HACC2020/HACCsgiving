import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bullets from '../components/Bullets';
import { COLORS } from '../../config/Colors';

/**
 * DISABLED BECAUSE IT HAS NO USE. USER SHOULD NOT BE ABLE TO NAVIGATE
 * TO THIS SCREEN.
 */
const DependencyCheck = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Are you a dependent?</Text>
      </View>
      <View style={styles.confirmations}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('DependencyCheck')}
          style={styles.confirmationButton}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('DependencyCheck')}
          style={styles.confirmationButton}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navButtonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.buttonText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Splash')}
          style={styles.backButton}
        >
          <Text style={styles.buttonText}>Skip →</Text>
        </TouchableOpacity>
      </View>
      <Bullets current={3} />
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
  backButton: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 50,
    width: 125,
    padding: 16,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  confirmations: {
    // backgroundColor: 'lime',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 300,
    width: '100%'
  },
  confirmationButton: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 50,
    width: 125,
    padding: 16,
  },
  navButtonContainer: {
    // backgroundColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    width: '100%'
  },
  welcomeContainer: {
    // backgroundColor: 'lime',
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

export default DependencyCheck;