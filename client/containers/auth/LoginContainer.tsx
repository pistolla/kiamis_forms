import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Import custom components
import LoginForm from '../../components/auth/LoginForm';
import * as authService from '../../services/authService';



class LoginContainer extends Component {
  message?: any = "";
  constructor(props: any) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.message = (this.props as any).errorMessage
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
    return <LoginForm onSubmit={this.submitForm} />;
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
