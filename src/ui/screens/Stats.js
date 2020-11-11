import React from 'react'
import { Text, View } from 'react-native'

export default function Stats({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Stats, Only admins should be able to see</Text>
        </View>
    );
}