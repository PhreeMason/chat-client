import React, { Component } from 'react'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import {updateUser} from '../../redux/modules/User/actions'
import {connect} from 'react-redux'

class ProfileForm extends Component {
  constructor() {
    super();
    this.state={
      pic_link: '',
      location: '',
      bio: ''
    }
  }
  
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const data = {}
    const myState = this.state
    for (var param in myState){
      if (myState.hasOwnProperty(param) && myState[param]) {
        data[param] = myState[param];
      }
    }
    this.props.updateUser(data)
    this.setState({
      pic_link: '',
      location: '',
      bio: ''
    })
  }

  handleCancel = ()=>{
    this.props.history.push('/profile')
  }    

  render() {
    const {pic_link, location, bio} = this.state
    return (
      <Form inverted onSubmit={this.handleSubmit}>
        <Form.Group>
          <Input name='pic_link' 
          label='http://' 
          placeholder='mypicturesite.com'
          value={pic_link} 
          onChange={this.handleChange}/>
        </Form.Group>
        <br/>  
        <Form.Group>
          <Input name='location' 
          label='location' 
          value={location}
          onChange={this.handleChange}/>
        </Form.Group>
        <br/>
        <Form.Group>
           <TextArea autoHeight rows={2}
            name='bio'
            onChange={this.handleChange}
            value={bio}
          /> 
        </Form.Group>
        <br/>     
          <Form.Group>
           <Button color='blue' onClick={this.handleSubmit}>Submit</Button>
           
           <Button color='red' onClick={this.handleCancel}>Cancel</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default connect(null, {updateUser}) (ProfileForm)