import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface Props {
  btnText: string;
  onPress: () => void;
  position?: 'bl' | 'br';
}

export const FabPositionConditional = ({
  btnText,
  onPress,
  position = 'br',
}: Props) => {
  const ios = () => (
    <TouchableOpacity
      style={[
        styles.fabLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );

  const android = () => (
    <View
      style={[
        styles.fabLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('black', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{btnText}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  return Platform.OS === 'ios' ? ios() : android();
};

export const FabBL = ({btnText, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fabLocationBL}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const FabBR = ({btnText, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fabLocationBR}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  right: {
    right: 10,
  },
  left: {
    left: 10,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
