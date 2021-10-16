import React from 'react';
import 'react-native-gesture-handler';
import Routes from './routes';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Routes />
    </Provider>
  );
};

export default App;
