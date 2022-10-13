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

const rootReducer = (history: History) => {

    // if (action === 'LOG_OUT_SUCCESS') {
    //     state = undefined;
    // }

    return appReducer(history);
};

export default rootReducer;