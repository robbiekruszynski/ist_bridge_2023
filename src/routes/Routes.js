// Routes.js
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import InitialPage from '../menu-items/components/InitialPage';
import Dashboard from '../views/dashboard/Default/index';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;

