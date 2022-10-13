import { blueGrey } from '@material-ui/core/colors';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app/AppContainer';
import { verifyToken } from './services/tokenService';
import store, { history } from './store/configureStore';



const mountNode = document.getElementById('root');
const theme = {
  palette: {
      primary: {
          main: '#556cd6',
      },
      secondary: {
          main: '#19857b',
      },
      error: {
          main: blueGrey.A400,
      },
      background: {
          default: '#fff',
      },
  },
  sidebarWidth: 240
} as const;
type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key]
}
declare module '@material-ui/core/styles/createTheme' {
  interface Theme extends CustomTheme { }
  interface ThemeOptions extends CustomTheme { }
}

const appTheme = createTheme(theme);

// Used to log in if token is valid

store.dispatch(verifyToken());

ReactDOM.render(
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
    <MuiThemeProvider theme={appTheme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  </Suspense>,
  mountNode
);
