import {push} from 'connected-react-router';

import {isAuthenticated} from '../utils/jwtUtil';

export const verifyToken: any = () => {
    return (dispatch: any) => {
        if (isAuthenticated()) {
            dispatch(push('/dashboard'));
        }
    };
};