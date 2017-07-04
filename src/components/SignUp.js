import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'
import InputField from '../containers/Input'

const SignUpFormFunc=(props)=>{
	  return (
	    <div className="signup">
	      <h2>Sign Up</h2>
	      <Form onSubmit={data=>props.handleSubmit(data)}>	
		  	  <Form.Field>
			      <Field
			      label='Username' 
			      name="username" 
			      component={InputField} 
			      type="text" />
			    </Form.Field>
			    <Form.Field >
			     <Field
			     label='Email' 
			      name="email" 
			      component={InputField} 
			      type="email" />
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


const SignUpForm = reduxForm({
	form: 'signup'
})(SignUpFormFunc);

export default SignUpForm;