import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'

const Field = ({ label, input, placeholder, meta: { touched, invalid, error }, ...custom}: any) => {
  const classes = useStyles()
  return(
    <div className={classes.field}>
      <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        fullWidth
        {...input}
        {...custom}
      />
    </div>
  )
}
export default Field