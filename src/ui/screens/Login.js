// Login.js
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { login } from '../../firebase/authentication';
import { COLORS } from '../../config/Colors';

//TODO login errors for incomplete field

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let state = { email: '', password: '', errorMessage: null }


  return (
    <View style={styles.container} >

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Log In</Text>
      </View>
      {state.errorMessage &&
        <Text style={{ color: 'red' }}>
          {state.errorMessage}
        </Text>
      }

      <View style={{ flex: 4, justifyContent: 'flex-start' }}>
        <Input
          autoCapitalize="none"
          containerStyle={styles.inputContainer}
          inputStyle={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="white"
          placeholder="Email"
          style={styles.inputLabel}
          value={email}
        />

        <Input
          autoCapitalize="none"
          containerStyle={styles.inputContainer}
          inputStyle={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          style={styles.inputLabel}
          value={password}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => login(email, password)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Log In</Text>
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

      {/*<Button
                title="Don't have an account? Sign Up"
                onPress={() => navigation.navigate('SignUp')}
            />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.mainGreen,
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
  inputContainer: {
    paddingHorizontal: 32
  },
  inputLabel: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
  title: {
    color: COLORS.white,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  textInput: {
    color: COLORS.white,
  },
})