import React from 'react';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = (theme: any) => ({
  success: {
    backgroundColor: green[600],
  },

  error: {
    backgroundColor: theme.palette.error.dark,
  },

  info: {
    backgroundColor: theme.palette.primary.dark,
  },

  warning: {
    backgroundColor: amber[700],
  },

  icon: {
    fontSize: 20,
  },

  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },

  message: {
    display: 'flex',
    alignItems: 'center',
  }
});

type CustomizedSnackbarProps = {
    classes: any;
    className?: string;
    message?: React.ReactNode;
    variant: 'success' | 'warning' | 'error' | 'info';
};

const CustomizedSnackbar = (props: CustomizedSnackbarProps) => {
  const { classes, className, message, variant } = props;
  const Icon = variantIcon[variant];

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span id="client-snackbar" className={classes.message}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
    />
  );
};

export default withStyles(styles)(CustomizedSnackbar);