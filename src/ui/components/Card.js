import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {

  },
  cardContent: {

  }
});

export default Card;
