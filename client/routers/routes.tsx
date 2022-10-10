import React, { Fragment } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route, Switch } from 'react-router-dom';
// @ts-expect-error TS(7016): Could not find a declaration file for module '@loa... Remove this comment to see the full error message
import loadable from '@loadable/component';

// Import custom components
// @ts-expect-error TS(6142): Module './PrivateRoute' was resolved to '/media/DA... Remove this comment to see the full error message
import PrivateRoute from './PrivateRoute';
// @ts-expect-error TS(6142): Module './RestrictRoute' was resolved to '/media/D... Remove this comment to see the full error message
import RestrictRoute from './RestrictRoute';
// @ts-expect-error TS(6142): Module '../components/common/layout/MainLayout' wa... Remove this comment to see the full error message
import MainLayout from '../components/common/layout/MainLayout';
// @ts-expect-error TS(6142): Module '../components/error/NotFound' was resolved... Remove this comment to see the full error message
import NotFound from '../components/error/NotFound';

// @ts-expect-error TS(6142): Module '../containers/auth/LoginContainer' was res... Remove this comment to see the full error message
const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
// @ts-expect-error TS(6142): Module '../containers/auth/SignUpContainer' was re... Remove this comment to see the full error message
const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));
// @ts-expect-error TS(6142): Module '../containers/dashboard/DashboardContainer... Remove this comment to see the full error message
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
