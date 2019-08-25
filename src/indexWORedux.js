import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Lecture from "./component/lecture"
import App from "./AppWORedux"
import * as serviceWorker from './serviceWorker';
import "tachyons"

ReactDOM.render(<App/>, document.getElementById('root'));  

// ReactDOM.render(<Lecture prop1 = 'prop of lecture' />, document.getElementById('root'));  
//render [class lecture ] to [div id == "root"] in html

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
