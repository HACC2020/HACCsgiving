// Login.js
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { login } from '../../firebase/authentication';

//TODO login errors for incomplete field

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    state = { email: '', password: '', errorMessage: null }


    return (
        <View style={styles.container} >
            <Text>Login</Text>
            { this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>
            }
            < TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <Button title="Login" onPress={() => login(email, password)} />
            {/*<Button
                title="Don't have an account? Sign Up"
                onPress={() => navigation.navigate('SignUp')}
            />*/}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
})