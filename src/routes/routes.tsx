import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignIn, SignUp } from '../pages';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);

export default Routes;
