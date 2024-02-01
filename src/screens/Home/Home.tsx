import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderCard} from '../../components/HeaderCard';
import {Container} from '../../components/Container';

export const Home = () => {
  return (
    <Container statusBarColor="#622ED0">
      <HeaderCard />
      <View style={styles.otherContent}>
        <Text style={styles.text}>Other Content</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  otherContent: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
