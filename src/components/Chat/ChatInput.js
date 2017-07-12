import React from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react'

export default class ChatInput extends React.Component {
  constructor() {
  	super();
  	this.state={
  		body: ''
  	}
  }
  
  handleChange = (event) =>{
  	this.setState({
  		body: event.target.value
  	})
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    if (this.state.body) {
    	this.props.handleSubmit(this.state.body)
    	this.setState({
    		body: ''
    	})
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
		    <Input>
		     <input onChange={this.handleChange} 
		      value={this.state.body} />
		      <Button icon type='submit'>
            <Icon name='send outline'/>
		      </Button>
		    </Input>
		  </Form>
    );
  }
}