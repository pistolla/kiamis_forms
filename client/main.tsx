import { blueGrey } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app/AppContainer';
import { verifyToken } from './services/tokenService';
import store, { history } from './store/configureStore';



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
