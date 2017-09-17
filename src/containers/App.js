import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'
import Auth from '../components/Auth'
import {ErrorShow} from './ErrorShow'
import { userIsAuthenticated, authenticate, authenticationFail} from '../redux/modules/Auth/actions'
import {clearErrors} from '../redux/modules/Error/actions'
import {connect} from 'react-redux'
import ChatContainer from './ChatContainer'
import Home from './Home'
const Chats = userIsAuthenticated(ChatContainer)
const NotFound = () =>(<h1>404</h1>)
const Pro = userIsAuthenticated(Profile)

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.authenticate();
    } else {
      this.props.authenticationFail();
    }
  }
  render() {
    const {errors, apiCable, clearErrors, isAuthenticated} = this.props
    return (
      <Router>
        <div>
          <div className="navbar">
           {isAuthenticated ? <NavBar/> : null}
          </div>
          {errors.length ? <ErrorShow clearErrors={clearErrors}errors={errors}/> : null}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Auth} />
            <Route path="/chats" render={(props)=> <Chats {...props} apiCable={apiCable}/> }/>
            <Route path="/profile/:username" component={Pro}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { clearErrors, userIsAuthenticated, authenticate, authenticationFail})(App);
