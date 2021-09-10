import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box object model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    //width: 150,
    borderWidth: 10,
    padding: 50,
    //backgroundColor: 'green',
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
