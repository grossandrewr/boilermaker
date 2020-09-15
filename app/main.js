import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store'

import '../public/index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>Hello to the world</div>
  </Provider>,
  document.getElementById('app')
)
