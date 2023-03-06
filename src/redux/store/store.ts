import {createStore, combineReducers} from 'redux';
import reducerChangeTab from '../reducer/reducer';

const rootReducer = combineReducers({
  reducerChangeTab,
});

const store = createStore(rootReducer);

export default store;
