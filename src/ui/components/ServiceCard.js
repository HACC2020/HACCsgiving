import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ServiceCard = ({ service, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ServiceDetails', { service: service })}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{service.title}</Text>
        </View>
        {/*<Text numberOfLines={2}>{service.body}</Text>*/}
        {/*<Text>{service.link}</Text>*/}
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  },
  textContainer: {
    marginHorizontal: 16,
    marginVertical: 4
  }
});

export default ServiceCard;