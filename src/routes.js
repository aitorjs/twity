import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import TwityApp from './../components/TwityApp';

import PageProfile from './../pages/PageProfile';
import PageHome from './../pages/PageHome';

class User extends React.Component {
  render() {
    return <p>Esta es la página de User</p>
  }
}

export default
  <Router history={hashHistory}>
    <Route component={TwityApp}>
      <Route path="/" component={PageHome} />
      <Route path="profile" component={PageProfile} />
      <Route path="user" component={User} />
                  <Route path="*" component={PageHome} />
                </Route>
              </Router>
