import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../utils/jwtUtil';

// @ts-expect-error TS(7031): Binding element 'Component' implicitly has an 'any... Remove this comment to see the full error message
const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Route
    {...rest}
    render={(props: any) => isAuthenticated() ? (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Layout>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Component {...props} />
      </Layout>
    ) : (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location },
        }}
      />
    )
    }
  />
);

export default PrivateRoute;
