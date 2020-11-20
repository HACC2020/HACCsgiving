import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';
//internal importsS
import { ServiceCard } from '../components';
import { COLORS } from '../../config/Colors';

const Services = ({ navigation }) => {

  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const ref = firestore().collection('services');

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { title, body, link } = doc.data();
        list.push({
          id: doc.id,
          title,
          body,
          link,
        });
      });

      setServices(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Services</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ServiceCard service={item} navigation={navigation} />/*<Text>{item.title}</Text>*/}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainGreen,
    flex: 1
  },
  title: {
    color: COLORS.white,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleContainer: {
    justifyContent: 'center',
    marginVertical: 12
  },
});

export default Services;
