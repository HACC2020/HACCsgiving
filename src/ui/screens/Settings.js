import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth';
import { COLORS } from '../../config/Colors';
//internal imports
import { logout, makeAdmin } from '../../firebase/authentication'

export default function Settings({ navigation }) {
  let user = auth().currentUser;

  if (!user) {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>State worker?</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign in here</Text>
          </TouchableOpacity>
        </View>

        <View style={{ ...styles.buttonContainer, marginTop: 16 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings Screen</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => logout()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.buttonContainer, marginTop: 16 }}>
        <TouchableOpacity
          onPress={() => makeAdmin()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Make Admin</Text>
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.buttonContainer, marginTop: 16 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.mainGreen,
    alignItems: 'center'
  },
  button: {
    backgroundColor: COLORS.darkGreen,
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
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    color: COLORS.white,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 70
  },
});