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
    <View style={{ flex: 1 }}>

      <SearchBar
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
      <View style={styles.container}>

        <FlatList
          data={filteredServices}
          renderItem={({ item }) => <ServiceCard service={item} navigation={navigation} />}
          keyExtractor={item => item.title}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.mainGreen,
    //justifyContent: 'flex-end'
  },
  bannerContainer: {
    // position: 'absolute',
    marginTop: 15
  },
  banner: {
    color: COLORS.darkGreen,
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: COLORS.darkGreen,
    padding: 16,
    borderRadius: 50,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  bullets: {
    position: 'absolute',
    bottom: 0,
  },
  pinnedServiceContainer: {
    alignItems: 'stretch',
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'flex-end'
  },
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  settingsButton: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 50,
    padding: 10,
    marginRight: 16
  },
  settingsButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  welcomeContainer: {
    position: 'absolute',
    top: 70
  },
  welcomeText: {
    color: COLORS.white,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Search;