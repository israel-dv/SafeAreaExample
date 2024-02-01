/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Home} from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
