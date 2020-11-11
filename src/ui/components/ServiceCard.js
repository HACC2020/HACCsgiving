import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ServiceCard = ({ service, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ServiceDetails', {service: service})}
      >
        <Text>{service.title}</Text>
        <Text numberOfLines={1} style={{ width: 20 }}>{service.body}</Text>
        <Text>{service.link}</Text>
      </TouchableOpacity>
    </View>
  )
};

export default ServiceCard;