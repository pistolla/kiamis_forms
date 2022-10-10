// @ts-expect-error TS(7016): Could not find a declaration file for module 'hist... Remove this comment to see the full error message
import {createBrowserHistory as createHistory} from 'history';

// a singleton history object
const history = createHistory();
export default history;