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

import data from './data.json';

class User extends React.Component {
  render() {
    return <p>Esta es la página de User</p>
  }
}

class NoMatch extends React.Component {
  render() {
    return <p>Esta pagina no matchea</p>
  }
}


const routes =  <Router history={hashHistory}>
              <Route component = {TwityApp}>
                <Route path="/"/>
                  <Route path="profile" component = {PageProfile} />
                  <Route path="user" component = {User} />
                  <Route path="*" component={PageHome}/>
                </Route>

              </Router>

ReactDOM.render(routes, document.getElementById('container'));