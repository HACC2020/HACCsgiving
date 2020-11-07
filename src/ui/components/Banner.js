import React from 'react';
import { Text, View } from 'react-native';

const Banner = (props) => {
  return (
    <View>
      <Text style={props.style}>{props.link}</Text>
    </View>
  );
};

export default Banner;
