import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './app';
import './style.less';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
