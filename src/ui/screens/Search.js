import React, { useState, useEffect, useRef } from 'react';
import { Text, View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import { ServiceCard } from '../components';
import { COLORS } from '../../config/Colors';

const Search = ({ navigation, route }) => {
  //initial search is given by another component (test)
  let initialSearch = useRef('');

  //const [query, setQuery] = useState('');
  const [filteredServices, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [search, updateSearch] = useState(initialSearch.current);
  const ref = firestore().collection('services');
  //console.log(initialSearch);

  const searchFilter = (text) => {
    let newData = services.filter((item) => {
      //console.log(initialSearch.current);
      let itemData = `${item.title.toUpperCase()} ${item.body.toUpperCase()}`;

      let textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    setFiltered(newData);
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  useEffect(() => {
    //if(!route.params.initialSearch.current){
    //console.log(route.params.initialSearch);
    //}
    //if(search !== initialSearch){
    //updateSearch(initialSearch.current);
    //setFiltered(initialSearch);
    //}
  }, []);

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { title, body, link } = doc.data();
        list.push({
          id: doc.id,
          title,
          body,
          link,
        });
      });

      setServices(list);
      // console.log(list);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  //this happens before services loaded edit: suddenly working hah
  if (initialSearch.current !== route.params.initialSearch) {
    initialSearch.current = route.params.initialSearch;

    updateSearch(initialSearch.current);
    searchFilter(initialSearch.current);

    console.log(search);
    console.log(services);
    //() => searchFilter(initialSearch.current);
    //setFiltered(initialSearch.current);
    console.log(initialSearch.current);
  }

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.searchContainer}
        inputStyle={styles.searchInput}
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={(text) => {
          updateSearch(text);
          searchFilter(text)
        }}
        value={search}
        autoCorrect={false}
      />
      <FlatList
        data={filteredServices}
        renderItem={({ item }) => <ServiceCard service={item} navigation={navigation} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainGreen
  },
  searchContainer: {
    backgroundColor: COLORS.mainGreen,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginVertical: 12
  },
  searchInput: {
    backgroundColor: COLORS.white,
    color: COLORS.black
  }
});

export default Search;