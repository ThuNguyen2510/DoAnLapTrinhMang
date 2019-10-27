import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import 'font-awesome/css/font-awesome.min.css';

import {createStore} from 'redux';
import  appReducers from './reducers/index';
import {Provider} from 'react-redux';
import comic from './reducers/comic';
const store=createStore(
    appReducers
);
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        
    , document.getElementById('root'));
serviceWorker.unregister();
