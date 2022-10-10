import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Import custom components
// @ts-expect-error TS(6142): Module '../../routers/routes' was resolved to '/me... Remove this comment to see the full error message
import MainRouter from '../../routers/routes';

class AppContainer extends Component {
  render() {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <MainRouter />;
  }
}

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
export default hot(module)(AppContainer);
