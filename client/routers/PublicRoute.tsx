import React, { Component } from 'react';
import { Route } from 'react-router-dom';

type Props = {
    component: React.ElementType,
    exact: boolean,
    path: string
};


const PublicRoute = ({component: Component, ...rest}: Props) => (
    
    <Route
        {...rest}
        
        render={(props: any) => <Component {...props} />}
    />
);

export default PublicRoute;