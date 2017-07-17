import React, { Component } from 'react'
import { Form, Grid } from 'semantic-ui-react'
import {createChat} from '../../redux/modules/Chats/actions'
import {connect} from 'react-redux'


class ChatsNew extends Component {
  state = { name: ''}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = e => {
    const {name} = this.state
    this.props.createChat({name: name.trim()})
    this.setState({name:''})
  }

  render() {
    const { name } = this.state
    return (
      <Grid.Column width={7}>
        <h3>New Chat</h3>
        <Form onSubmit={this.handleSubmit}>
	        <Form.Group>
	          <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
	          <Form.Button content='Create' />
	        </Form.Group>
        </Form>
      </Grid.Column> 
    )
  }
}


export default connect(null, {createChat})(ChatsNew);