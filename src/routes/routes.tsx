import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '../components';
import { SignIn, SignUp, Dashboard } from '../pages';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
