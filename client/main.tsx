import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

import store, { history } from './store/configureStore';
import { verifyToken } from './services/tokenService';
// @ts-expect-error TS(6142): Module './containers/app/AppContainer' was resolve... Remove this comment to see the full error message
import App from './containers/app/AppContainer';

const mountNode = document.getElementById('root');

const theme = createMuiTheme({
  typography: {
    // @ts-expect-error TS(2322): Type '{ useNextVariants: true; }' is not assignabl... Remove this comment to see the full error message
    useNextVariants: true,
  },
  palette: {
    primary: blueGrey,
  },
});

// Used to log in if token is valid
// @ts-expect-error TS(2345): Argument of type '(dispatch: any) => void' is not ... Remove this comment to see the full error message
store.dispatch(verifyToken());

ReactDOM.render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <MuiThemeProvider theme={theme}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Provider store={store}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ConnectedRouter history={history}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <App />
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  </Suspense>,
  mountNode
);
