import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import myStore from './Store/index';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


