import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';
import { COLORS } from '../../config/Colors';


const ServiceCard = ({ service, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ServiceDetails', { service: service })}
      >
        <Card>
          <Text style={styles.cardText}>{service.title}</Text>
        </Card>
        {/*<Text numberOfLines={2}>{service.body}</Text>*/}
        {/*<Text>{service.link}</Text>*/}
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'stretch',
    // backgroundColor: 'lime',
    marginHorizontal: 10,
  },
  cardText: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchTitle: {
    // paddingTop: 100,
  },
  searchTitleText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default ServiceCard;