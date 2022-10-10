import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
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