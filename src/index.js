/*
 * @Author: your name
 * @Date: 2020-05-26 15:34:12
 * @LastEditTime: 2020-06-02 08:43:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\web\src\index.js
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import{ BrowserRouter as Router,Link,Route,Redirect} from 'react-router-dom'
import WebComponentHelper from './view/WebComponentHelper';
import Main from './view/Main';
import Others from './view/Others';

ReactDOM.render(
  <Router>
    <Route path='/' exact component={Main}></Route>
    {/* <Route path='/others' component={Analysis}></Route> */}
    <Route path='/Extension' component={WebComponentHelper}></Route>
    <Route path='/npm' component={WebComponentHelper}></Route>
    <Route path='/Search' component={WebComponentHelper}></Route>
    <Route path='/Docs' component={WebComponentHelper}></Route>
    <Route path='/Others' exact component={WebComponentHelper}></Route>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
