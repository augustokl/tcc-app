import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import store from './store';

import { background } from './styles/colors';

declare const global: { HermesInternal: null | {} };

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#312e38"
          translucent
        />
        <View style={{ flex: 1, backgroundColor: background }}>
          <Routes />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
