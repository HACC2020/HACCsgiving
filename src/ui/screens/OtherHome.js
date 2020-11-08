import React from 'react'
import { Text, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function OtherHome({ navigation }) {

    const logout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Sign out" onPress={() => logout()} />
        </View>
    );
}