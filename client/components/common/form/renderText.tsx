import TextField from '@material-ui/core/TextField';
import React from 'react';

type Props = {
    input: any;
    label: string;
    meta?: any;
};


const renderText = ({ input, label, type, meta: { touched, error, invalid } }: Props) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <TextField
    type={type}
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    margin="normal"
    fullWidth={true}
    {...input}
  />
);

export default renderText;
