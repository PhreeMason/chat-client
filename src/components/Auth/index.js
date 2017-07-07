import React, { Component } from 'react';
import {signup, login} from '../redux/modules/Auth/actions'
import { connect } from 'react-redux';
import SignUpForm from './SignUp'
import LogIn from './LogIn'
import {Grid} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'


class Auth extends Component {

  static propTypes ={
    history: PropTypes.object.isRequired
  }

  handleSignUp = (values) =>{
    this.props.signup({user: values}, this.props.history)
  }

  handleLogin = (values) =>{
    this.props.login({user: values}, this.props.history)
  }

  render() {
    return (
     <Grid columns={2} padded>
	     <Grid.Column>
	       <SignUpForm onSubmit={this.handleSignUp}/>
	     </Grid.Column>
	     <Grid.Column>
	       <LogIn onSubmit={this.handleLogin}/>
	     </Grid.Column>
     </Grid>
    );
  }
}

export default withRouter(connect(null, { login, signup })(Auth));