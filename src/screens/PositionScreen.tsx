import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

//la posision relativa es por defecto
//Y es relativa ala posicion en la que inicia el objeto
//Top 0 o left right bottom es donde se encuentra el objeto en pososcion relativa

//La posicion absoluta se mueve de acuerdo a las dimensiones del padre
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: 300,
    height: 600,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    top: 50,
    left: 50,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
  },
  cajaAzul: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
