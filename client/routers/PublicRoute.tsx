import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {Route} from 'react-router-dom';

// @ts-expect-error TS(7031): Binding element 'Component' implicitly has an 'any... Remove this comment to see the full error message
const PublicRoute = ({component: Component, ...rest}) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Route
        {...rest}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        render={(props: any) => <Component {...props} />}
    />
);

export default PublicRoute;