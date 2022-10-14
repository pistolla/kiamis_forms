import { MuiThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import App from './containers/app/AppContainer';
import appTheme from './material_theme';
import { verifyToken } from './services/tokenService';
import store, { history } from './store/configureStore';
import i18n from "./translation";
const React = require('react');

const mountNode = document.getElementById('root');

// Used to log in if token is valid

store.dispatch(verifyToken());

ReactDOM.render(
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
    <MuiThemeProvider theme={appTheme}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </I18nextProvider>
    </MuiThemeProvider>
  </Suspense>,
  mountNode
);
