import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Main from './components/organisms/Main/Main';

import './App.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <Main />
    </Provider>
  );
}

export default App;
