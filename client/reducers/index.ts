import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import {reducer as formReducer} from 'redux-form';

// Import custom components
import authReducer from './authReducer';

const appReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    form: formReducer,  // ← redux-form
    auth: authReducer,
});

const rootReducer = (state: any, action: any) => {

    if (action === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }

    // @ts-expect-error TS(2554): Expected 1 arguments, but got 2.
    return appReducer(state, action);
};

export default rootReducer;