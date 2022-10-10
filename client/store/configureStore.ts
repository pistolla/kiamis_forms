import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import logger from 'redux-logger';

import createRootReducer from '../reducers';
import history from '../utils/history';

export {history};

const middlewares = [thunkMiddleware, logger, routerMiddleware(history)];

// @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
const store = createStore(createRootReducer(history), {}, compose(
    applyMiddleware(...middlewares)
    )
);

export default store;