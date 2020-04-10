import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'

import TextField from '../../common/Fields/TextField'
import { required } from '../../../utils/validators'

// import useStyles from './styles'

export const ADD_EDIT_BOOK_FORM = 'ADD_EDIT_BOOK_FORM'

interface IAddEditBookFormProps extends InjectedFormProps {}

const AddEditBookForm = ({ handleSubmit, submitting }: IAddEditBookFormProps) =>  {
    return (
        <form onSubmit={ handleSubmit }>
            <Field name="title" type="text" component={TextField} label="Title" validate={[required]} />
            <Field name="author" type="text" component={TextField} label="Author" validate={[required]} />
            <Field 
                name="date" 
                type="date" 
                component={TextField} 
                label="Date" 
                InputLabelProps={{
                    shrink: true
                }} 
                validate={[required]} 
            />
        </form>
    )
}
export default reduxForm({
    form: ADD_EDIT_BOOK_FORM,
})(AddEditBookForm)