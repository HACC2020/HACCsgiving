import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bullets from '../components/Bullets';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to the app!</Text>
      </View>
      <Bullets />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00a86b',
    justifyContent: 'flex-end'
  },
  welcomeContainer: {
    position: 'absolute',
    top: 70
  },
  welcomeText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Home;
