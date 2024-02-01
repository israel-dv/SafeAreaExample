import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HeaderCard = () => {
  return (
    <View style={HeaderCardStyles.container}>
      <Text style={HeaderCardStyles.title}>Safe Area</Text>
    </View>
  );
};

const HeaderCardStyles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: '#622ED0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
});
