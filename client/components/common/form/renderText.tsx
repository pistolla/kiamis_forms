import TextField from '@material-ui/core/TextField';
import React from 'react';

type Props = {
    input: any;
    label: string;
    meta?: any;
    type?: any
};


const renderText = ({ input, label, type, meta: { touched, error, invalid } }: Props) => (
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
