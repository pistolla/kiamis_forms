import React from 'react';
import { Route } from 'react-router-dom';



const PublicRoute = ({component: Component, ...rest}) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Route
        {...rest}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        render={(props: any) => <Component {...props} />}
    />
);

export default PublicRoute;