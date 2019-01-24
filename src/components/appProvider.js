import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from 'reducers/configureStore';
import AppRouter from './appRouter';

const AppProvider = () => (
  <div>
    <Provider store={reduxStore}>
      <AppRouter />
    </Provider>
  </div>
);

export default AppProvider;
