import React from 'react';
import {SafeAreaView} from 'react-native';
import {PositionScreen} from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlexScreen />
    </SafeAreaView>
  );
};
export default App;
