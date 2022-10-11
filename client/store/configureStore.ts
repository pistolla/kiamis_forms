import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createRootReducer from '../reducers';
import history from '../utils/history';



export { history };

const middlewares = [thunkMiddleware, logger, routerMiddleware(history)];


const store = createStore(createRootReducer({...history}), {}, compose(
    applyMiddleware(...middlewares)
    )
);

export default store;