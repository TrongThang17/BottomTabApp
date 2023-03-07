import React from 'react';
import BottomTabNav from './tabnavigation/BottomTabNav';
import store from './src/redux/store/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <BottomTabNav />
    </Provider>
  );
};

export default App;
