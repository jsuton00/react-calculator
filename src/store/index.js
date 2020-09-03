import { combineReducers, createStore } from 'redux';
import calcReducer from './reducers/calculateReducer';

const rootReducer = combineReducers({
  calculator: calcReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
