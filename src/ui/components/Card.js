import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../config/Colors';

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.cardStyle }}>
      <View style={{ ...styles.cardContent, ...props.contentStyle }}>
        {props.children}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: COLORS.white,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    paddingHorizontal: 25,
    paddingVertical: 10
  }
});

export default Card;
