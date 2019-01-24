import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';


const initialState = {};

const middleWare = [thunk];

// this is needed for chrome redux extension

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState,
  composeEnhancers(
    applyMiddleware(...middleWare),
  ),
);

export default store;
