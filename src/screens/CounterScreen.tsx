import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FabPositionConditional} from '../components/Fab';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <Text>Click me</Text>
      </TouchableOpacity>

      {/*<FabBL btnText="-1" onPress={() => setContador(contador - 1)} />
      <FabBR btnText="+1" onPress={() => setContador(contador + 1)} />*/}

      <FabPositionConditional
        btnText="-1"
        onPress={() => setContador(contador - 1)}
        position="bl"
      />

      <FabPositionConditional
        btnText="+1"
        onPress={() => setContador(contador + 1)}
        position="br"
      />

      {/*<TouchableOpacity
        onPress={() => setContador(contador + 1)}
        style={styles.fabLocationBR}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setContador(contador - 1)}
        style={styles.fabLocationBL}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    top: -100,
  },
});
