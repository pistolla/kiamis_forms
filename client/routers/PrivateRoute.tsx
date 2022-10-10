import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../utils/jwtUtil';




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
