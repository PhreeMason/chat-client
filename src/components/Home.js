import React, { Component, PropTypes } from 'react';
import {signup, login} from '../redux/modules/Auth/actions'
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUp'
import LogIn from '../components/LogIn'
import {Grid} from 'semantic-ui-react'

class Home extends Component {

  handleSignUp = (values) =>{
    this.props.signup({user: values}, this.context.router)
  }

  handleLogin = (values) =>{
    this.props.login({user: values}, this.context.router)
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

export default connect(null, { login, signup })(Home);