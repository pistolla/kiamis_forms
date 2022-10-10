import { Card, CardContent, CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
// Import custom components
import renderText from '../common/form/renderText';




const styles = {
  root: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    margin: 'auto',
  },
  card: {
    padding: 20,
    overflow: 'auto',
  },
  cardHeader: {
    textAlign: 'center',
  },
  btnDiv: {
    textAlign: 'center',
  },
  btn: {
    marginTop: 21,
  },
};

type SignUpFormProps = {
    onSubmit: (...args: any[]) => any;
    classes: any;
};

const SignUpForm = (props: SignUpFormProps) => {
  // @ts-expect-error TS(2339): Property 'handleSubmit' does not exist on type 'Si... Remove this comment to see the full error message
  const { handleSubmit, onSubmit, classes } = props;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={classes.root}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Card className={classes.card}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CardHeader className={classes.cardHeader} title="Sign Up" />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CardContent>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Field type="text" name="first_name" component={renderText} label="First Name" />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <br />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Field type="text" name="last_name" component={renderText} label="Last Name" />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <br />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Field type="text" name="email" component={renderText} label="Email" />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <br />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Field type="password" name="password" component={renderText} label="Password" />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <br />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className={classes.btnDiv}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Button className={classes.btn} type="submit" variant="contained" color="primary">
                Create New Account
              </Button>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                Already have an account? <Link to={'/'}>Login</Link>.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const validateSignUp = (values: any) => {
  const errors = {};

  const requiredFields = ['first_name', 'last_name', 'email', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      errors[field] = '(The ' + field + ' field is required.)';
    }
  });

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    (errors as any).email = '(Invalid email address.)';
  }
  return errors;
};

export default reduxForm({
  form: 'SignUpForm', // a unique identifier for this form
  validate: validateSignUp, // ←Callback function for client-side validation

})(withStyles(styles)(SignUpForm));
