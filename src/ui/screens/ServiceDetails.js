import React, { useCallback } from 'react';
import { Button, Text, TouchableOpacity, View, Alert, Linking, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { COLORS } from '../../config/Colors';
import { ScrollView } from 'react-native-gesture-handler';

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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{route.params.service.title}</Text>
      </View>

      <ScrollView>
        <View style={styles.paragraphContainer}>
          <Text numberOfLines={20} style={styles.paragraph}>{route.params.service.body}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ ...styles.buttonContainer, marginTop: 16 }}>
            <TouchableOpacity
              onPress={handleLink}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Link to service</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.buttonContainer, marginVertical: 16 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>
  )
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   paddingTop: 30,
  //   backgroundColor: '#ecf0f1',
  //   padding: 8,
  // },
  container: {
    backgroundColor: COLORS.mainGreen,
    flex: 1
  },
  button: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 50,
    flex: 1,
    marginHorizontal: 16,
    padding: 16
  },
  buttonContainer: {
    // backgroundColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paragraphContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginHorizontal: 16,
    padding: 16
  },
  title: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleContainer: {
    justifyContent: 'center',
    marginVertical: 36
  },
});

export default ServiceDetails;