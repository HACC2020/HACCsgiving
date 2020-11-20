import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../config/Colors';

const ServiceCard = ({ service, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        // style={{ backgroundColor: 'blue' }}
        style={styles.textContainer}
        onPress={() => navigation.navigate('ServiceDetails', { service: service })}
      >
        <View >
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
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  textContainer: {
    backgroundColor: COLORS.darkGreen,
    marginHorizontal: 16,
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 8
  }
});

export default ServiceCard;