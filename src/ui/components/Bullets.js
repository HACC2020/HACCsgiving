import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bullets = (props) => {
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    setCurrent(props.current);
  }, []);

  return (
    <View style={styles.bullets}>
      <Text style={current == 1 ? styles.pageBulletCurrent : styles.pageBullet}>●</Text>
      <Text style={current == 2 ? styles.pageBulletCurrent : styles.pageBullet}>●</Text>
      <Text style={current == 3 ? styles.pageBulletCurrent : styles.pageBullet}>●</Text>
      <Text style={current == 4 ? styles.pageBulletCurrent : styles.pageBullet}>●</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  bullets: {
    flexDirection: 'row'
  },
  pageBullet: {
    color: '#fff',
    fontSize: 48
  },
  pageBulletCurrent: {
    color: '#000',
    fontSize: 48
  }
});

export default Bullets;
