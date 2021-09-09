import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
      }}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 50,
        }}>
        Hola Carlos
      </Text>
    </View>
  );
};
