import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Main from './components/organisms/Main/Main';

import './App.scss';

const App = () => (
  <Provider store={configureStore()}>
    <Main />
  </Provider>
);

export default App;
