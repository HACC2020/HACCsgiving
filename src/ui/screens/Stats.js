import React from 'react'
import { Text, View, Button } from 'react-native'
import analytics from '@react-native-firebase/analytics';

export default function Stats({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Stats, Only admins should be able to see</Text>
            <Button
                title="Press me"
                // Logs in the firebase analytics console as "select_content" event
                // only accepts the two object properties which accept strings.
                onPress={async () =>
                    await analytics().logEvent('button', {
                        content_type: 'randombutton',
                        item_id: 'abcd',
                    })
                }
            />
        </View>
    );
}