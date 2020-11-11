import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';


export default function Stats({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [linkclicks, setServices] = useState([]);
    const ref = firestore().collection('linkclick');

    useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { title, link } = doc.data();
                list.push({
                    id: doc.id,
                });
            });

            setServices(list);
            if (loading) {
                setLoading(false);
            }
        });
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Total links clicked: {linkclicks.length}</Text>
        </View>
    );
}