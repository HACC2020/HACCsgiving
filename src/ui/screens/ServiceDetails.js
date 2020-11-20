import React, { useCallback } from 'react';
import { Button, Text, View, Alert, Linking, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Card from '../components/Card';
import { COLORS } from '../../config/Colors';


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
        <View style={styles.container}>
            <Card>
                <Text style={styles.cardText}>{route.params.service.title}</Text>
            </Card>
            <Card>
                <Text  numberOfLines={25} style={StyleSheet.paragraph}>{route.params.service.body}</Text>
            </Card>
            <Button title="link to service" onPress={handleLink} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        backgroundColor: COLORS.mainGreen,
        padding: 8,
    },
    cardText: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
      }
});

export default ServiceDetails;