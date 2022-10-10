import loadable from '@loadable/component';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';
// Import custom components
import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';


const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));

const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));

const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));

const Router = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message

  <Fragment>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Switch>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <RestrictRoute exact path="/" component={AsyncLoginForm} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <RestrictRoute exact path="/signup" component={AsyncSignUpForm} />

      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />

      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
