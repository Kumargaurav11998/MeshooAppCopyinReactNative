import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './Resource/Helper/Store';
import MainNavigation from './Resource/Routes/MainNavigation/MainNavigation';
import Toast from 'react-native-toast-message';
import {LogBox} from 'react-native';
export default App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
      <Toast />
    </Provider>
  );
};
