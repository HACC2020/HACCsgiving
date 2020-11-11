import React from 'react'
import { Text, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth';
//internal imports
import { logout, makeAdmin } from '../../firebase/authentication'

export default function Settings({ navigation }) {
    let user = auth().currentUser;

    if (!user) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>State worker?</Text>
                <Button title="Sign in here" onPress={() => navigation.navigate('Login')} />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Button title="Sign out" onPress={() => logout()} />
            <Button title="make admin" onPress={() => makeAdmin()} />
        </View>
    );
}