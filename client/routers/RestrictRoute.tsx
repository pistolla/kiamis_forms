import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../utils/jwtUtil';

type Props = {
    component: React.ElementType,
    exact: boolean,
    path: string
}


const RestrictRoute = ({ component: Component, ...rest }: Props) => (
    
    <Route
        {...rest}
        render={(props: any) => isAuthenticated() ? (
            
            <Redirect
                to={{
                    pathname: '/dashboard',
                    state: { from: props.location },
                }}
            />
        ) : (
                
                <Component {...props} />
        )
        }
    />
);

export default RestrictRoute;