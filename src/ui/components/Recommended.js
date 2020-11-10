import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';
import { COLORS } from '../../config/Colors';

const Recommended = (props) => {
  return (
    <View>
      <View style={styles.searchTitle}>
        <Text style={styles.searchTitleText}>Recommended Searches</Text>
      </View>

      <View
        style={{
          borderBottomColor: COLORS.lightGreen,
          borderBottomWidth: 3,
          marginHorizontal: 48,
        }}
      />

      <View style={styles.card}>
        <TouchableOpacity
        // onPress={() => props.navigation.navigate('Home')}
        >
          <Card>
            <Text style={styles.cardText}>I need a place to live</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
        // onPress={() => props.navigation.navigate('Home')}
        >
          <Card>
            <Text style={styles.cardText}>I was laid off because of Covid-19</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
        // onPress={() => props.navigation.navigate('Home')}
        >
          <Card>
            <Text style={styles.cardText}>I need someone to look after my child while I work</Text>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
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

export default Recommended;
