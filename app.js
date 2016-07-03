/*
 * Module dependencies
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import TwityApp from './components/TwityApp';
import PageProfile from './pages/PageProfile';
import PageHome from './pages/PageHome';

class User extends React.Component {
  render() {
    return <p>Esta es la página de User</p>
  }
}

const routes =  <Router history={hashHistory}>
              <Route component = {TwityApp} >
                <Route path="/" component = {PageHome} />
                  <Route path="profile" component = {PageProfile} />
                  <Route path="user" component = {User} />
                </Route>
              </Router>

ReactDOM.render(routes, document.getElementById('container'));