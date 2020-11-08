import React from 'react'
import { Text, View, Button } from 'react-native'

export default function OtherHome({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}