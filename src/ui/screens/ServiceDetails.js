import React, { useCallback } from 'react';
import { Button, Text, View, Alert, Linking } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ServiceDetails = ({ navigation, route }) => {
    const url = route.params.service.link;

    const handleLink = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
            //tell firestore someone clicked a link
            firestore()
                .collection('linkclick')
                .add({
                    serviceId: route.params.service.id,
                })
                .then(() => {
                    console.log('logged link click!');
                });
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return (
        <View>
            <Text>{route.params.service.title}</Text>
            <Text>{route.params.service.body}</Text>
            <Button title="link to service" onPress={handleLink} />
        </View>
    )
};

export default ServiceDetails;