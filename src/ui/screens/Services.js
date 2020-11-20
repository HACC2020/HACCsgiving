import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          style={{ flex: 1 }}
          data={services}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ServiceCard service={item} navigation={navigation} />/*<Text>{item.title}</Text>*/}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.mainGreen,
    //justifyContent: 'flex-end'
  },
  bannerContainer: {
    // position: 'absolute',
    marginTop: 15
  },
  banner: {
    color: COLORS.darkGreen,
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: COLORS.darkGreen,
    padding: 16,
    borderRadius: 50,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  bullets: {
    position: 'absolute',
    bottom: 0,
  },
  pinnedServiceContainer: {
    alignItems: 'stretch',
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'flex-end'
  },
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  settingsButton: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 50,
    padding: 10,
    marginRight: 16
  },
  settingsButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  welcomeContainer: {
    position: 'absolute',
    top: 70
  },
  welcomeText: {
    color: COLORS.white,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Services;
