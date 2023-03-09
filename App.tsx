import React from 'react';
import BottomTabNav from './tabnavigation/BottomTabNav';
import { store } from './src/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persister}> */}
        <BottomTabNav />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
