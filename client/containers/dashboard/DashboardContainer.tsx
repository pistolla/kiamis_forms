import React, { Component } from 'react';

// Import custom components
// @ts-expect-error TS(6142): Module '../../components/dashboard/Dashboard' was ... Remove this comment to see the full error message
import Dashboard from '../../components/dashboard/Dashboard';

class DashboardContainer extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Dashboard />;
  }
}

export default DashboardContainer;
