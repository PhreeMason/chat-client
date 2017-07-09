import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'
import Auth from '../components/Auth'
import { StyleSheet, css } from 'aphrodite';
import { userIsAuthenticated, authenticate, authenticationFail} from '../redux/modules/Auth/actions'
import {connect} from 'react-redux'

const styles = StyleSheet.create({
    red: {
        backgroundImage: 'linear-gradient( 135deg, #F05F57 0%, #360940 100%);'
    }
});

const Games = () =>(<h1>Games</h1>)
const NotFound = () =>(<h1>Wrong turn</h1>)
const Home = ()=>(<h1>Home Page</h1>)
const Chats=()=>(<h1>Chat Page</h1>)
const HomePage = userIsAuthenticated(Home)
const Chat = userIsAuthenticated(Chats)
const Pro= userIsAuthenticated(Profile)
const Game = userIsAuthenticated(Games)


class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Fetching a new token!');
      this.props.authenticate();
    } else {
      this.props.authenticationFail();
    }
  }
  render() {
    return (
      <Router>
        <div className={css(styles.red)}>
          <div className="navbar">
            <NavBar/>
          </div>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/profile" component={Pro} />
          <Route exact path="/games" component={Game} />
          <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, {userIsAuthenticated, authenticate, authenticationFail})(App);
