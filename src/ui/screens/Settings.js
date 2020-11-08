import React from 'react'
import { Text, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function Settings({ navigation }) {

    const logout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    const makeAdmin = () => {
        auth().currentUser.updateProfile({
            displayName: "admin"
        }).then(() => {
            console.log('made admin!');
        }).catch(function (error) {
            // An error happened.
        });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Button title="Sign out" onPress={() => logout()} />
            <Button title="make admin" onPress={() => makeAdmin()} />
        </View>
    );
}