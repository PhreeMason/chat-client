import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'
import InputField from './Input'

const LogInFormFunc =(props)=> {
  return (
    <div className="login">
    <h2>Log In</h2>
      <Form onSubmit={data=>props.handleSubmit(data)}>
	  	  <Form.Field>
		      <Field
		      label='Username' 
		      name="username" 
		      component={InputField} 
		      type="text" />
		    </Form.Field>
		    <Form.Field>
		     <Field 
		     label='Password'
		      name="password" 
		      component={InputField} 
		      type="password" />
		    </Form.Field>
		    <Form.Button content='submit'/>
		  </Form>
    </div>
  );
}

const LogInForm = reduxForm({
	form: 'login'
})(LogInFormFunc);

export default LogInForm;
