import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authService from '../../services/authService';

// Import custom components
// @ts-expect-error TS(6142): Module '../../components/auth/LoginForm' was resol... Remove this comment to see the full error message
import LoginForm from '../../components/auth/LoginForm';

class LoginContainer extends Component {
  constructor(props: any) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  /**
   * Submit the form.
   *
   * @param {object} formProps
   */
  submitForm(formProps: any) {
    (this.props as any).actions.login(formProps);
  }

  render() {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <LoginForm onSubmit={this.submitForm} errorMessage={(this.props as any).errorMessage}/>;
  }
}

/**
 * Map the state to props.
 */
const mapStateToProps = (state: any) => ({
  token: state.auth.token,
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.errorMessage
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Object.assign({}, authService), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
