import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as crudAction from '../../actions/crudAction';
// Import custom components
import SignUpForm from '../../components/auth/SignUpForm';
import { USERS } from '../../constants/entity';



class SignUpContainer extends Component {
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
    (this.props as any).actions.submitForm(USERS, formProps);
  }

  render() {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <SignUpForm onSubmit={this.submitForm} />;
  }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(SignUpContainer);
