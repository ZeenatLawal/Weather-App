import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './weatherData/weather';

const reducer = combineReducers({
  weatherReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
