import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import localeReducer from './localeReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  routerReducer,
  localeReducer,
  navigationReducer,
});
