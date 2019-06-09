import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import {Provider} from 'react-redux';
import {configureStore} from './app/store/configureStore';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './app/common/util/ScrollToTop';

const store = configureStore();
//console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>
    ,document.getElementById('root'));


serviceWorker.unregister();
