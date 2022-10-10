import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Import custom components
import MainRouter from '../../routers/routes';


class AppContainer extends Component {
  render() {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <MainRouter />;
  }
}

export default hot(module)(AppContainer);
