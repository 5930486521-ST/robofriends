import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import * as serviceWorker from './serviceWorker';
import "tachyons"

import {rootReducers} from "./statemanagement/Reducers"
import {createStore,applyMiddleware} from "redux";

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {Provider} from "react-redux";

const logger = createLogger();


const reduxStore = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store = {reduxStore}> 
                    <App/>
                </Provider>, document.getElementById('root'));  


serviceWorker.unregister();
