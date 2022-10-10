import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../utils/jwtUtil';




const RestrictRoute = ({ component: Component, ...rest }) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Route
        {...rest}
        render={(props: any) => isAuthenticated() ? (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Redirect
                to={{
                    pathname: '/dashboard',
                    state: { from: props.location },
                }}
            />
        ) : (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Component {...props} />
        )
        }
    />
);

export default RestrictRoute;