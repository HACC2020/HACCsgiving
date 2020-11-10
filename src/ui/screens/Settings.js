import React from 'react'
import { Text, View, Button } from 'react-native'
import { logout, makeAdmin } from '../../../fire'

export default function Settings({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Button title="Sign out" onPress={() => logout()} />
            <Button title="make admin" onPress={() => makeAdmin()} />
        </View>
    );
}