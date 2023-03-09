import {createStore, combineReducers} from 'redux';
import reducerChangeTab from '../reducer/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
const rootReducer = combineReducers({
  reducerChangeTab,
});
// const persistConfig = {
//   key: 'root',
//   storage:AsyncStorage
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(rootReducer);
// const persister = persistStore(store)


export  {store};
