import loadable from '@loadable/component';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';
// Import custom components
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RestrictRoute from './RestrictRoute';

const AsyncHomePage = loadable(() => import('../containers/home/HomeContainer'));

const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));

const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));

const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));

const Router = () => (
  <Fragment>
    <Switch>
      <PublicRoute exact path="/" component={AsyncHomePage} />
      <RestrictRoute exact path="/login" component={AsyncLoginForm} />
      <RestrictRoute exact path="/signup" component={AsyncSignUpForm} />
      <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
