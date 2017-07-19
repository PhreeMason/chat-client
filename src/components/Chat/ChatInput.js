import React from 'react';
import { Form, TextArea, } from 'semantic-ui-react'

export default class ChatInput extends React.Component {
  constructor() {
  	super();
  	this.state={
  		body: ''
  	}
  }
  
  handleChange = (e) =>{
    this.setState({
      body: e.target.value
    })

  }

  handleKeyPress = (e) =>{
    if (e.key === 'Enter') {
      this.handleSubmit(e)
    }
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
		  <TextArea autoHeight 
        placeholder='Try adding multiple lines' rows={2}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        value={this.state.body}  
      />
		  </Form>
    );
  }
}