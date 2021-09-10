import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

export const DimensionsScreen = () => {
  //const {width, height} = Dimensions.get('window');

  //responde al girar el celular
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <Text>
        width: {width} heigth {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: 50,
    height: 50,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: '50%',
    height: '50%',
  },
});
