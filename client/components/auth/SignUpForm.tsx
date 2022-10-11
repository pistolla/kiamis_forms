import { Card, CardContent, CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
// Import custom components
import renderText from '../common/form/renderText';




const styles = createStyles({
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
});

type SignUpFormProps = {
    onSubmit: (...args: any[]) => any;
    handleSubmit: (...args: any[]) => any;
    classes: any;
} & WithStyles<typeof styles>;

const SignUpForm: React.FC<SignUpFormProps> = (props: SignUpFormProps) => {
  const { handleSubmit, onSubmit, classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title="Sign Up" />
        <CardContent>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Field type="text" name="first_name" component={renderText} label="First Name" />
            <br />
            <Field type="text" name="last_name" component={renderText} label="Last Name" />
            <br />
            <Field type="text" name="email" component={renderText} label="Email" />
            <br />
            <Field type="password" name="password" component={renderText} label="Password" />
            <br />
            <div className={classes.btnDiv}>
              <Button className={classes.btn} type="submit" variant="contained" color="primary">
                Create New Account
              </Button>
              <p>
                Already have an account? <Link to={'/'}>Login</Link>.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const validateSignUp: any = (values: any) => {
  const errors = new Map();

  const requiredFields = ['first_name', 'last_name', 'email', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors.set(field, '(The ' + field + ' field is required.)');
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
