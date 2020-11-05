import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bullets = (props) => {
  return (
    <View style={styles.bullets}>
      <Text style={styles.pageBullet}>●</Text>
      <Text style={styles.pageBullet}>●</Text>
      <Text style={styles.pageBullet}>●</Text>
      <Text style={styles.pageBullet}>●</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  bullets: {
    flexDirection: 'row'
  },
  pageBullet: {
    fontSize: 48
  },
});

export default Bullets;
