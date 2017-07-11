import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'
import Auth from '../components/Auth'
import {ErrorShow} from './ErrorShow'
// import { StyleSheet, css } from 'aphrodite';
import { userIsAuthenticated, authenticate, authenticationFail} from '../redux/modules/Auth/actions'
import {connect} from 'react-redux'
import ChatsPage from '../components/Chat'
// const styles = StyleSheet.create({
//     red: {
//         backgroundImage: 'linear-gradient( 135deg, #F05F57 0%, #360940 100%);'
//     }
// });

const Games = () =>(<h1>Games</h1>)
const NotFound = () =>(<h1>Wrong turn</h1>)
const Home = ()=>(<h1>Home Page</h1>)
const HomePage = userIsAuthenticated(Home)
const Pro= userIsAuthenticated(Profile)
const Game = userIsAuthenticated(Games)


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
    const {errors} = this.props
    return (
      <Router>
        <div>
          <div className="navbar">
            <NavBar/>
          </div>
          {errors.length ? <ErrorShow errors={errors}/> : null}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Auth} />
            <Route path="/chats" component={userIsAuthenticated(ChatsPage)} />
            <Route path="/profile" component={Pro} />
            <Route path="/games" component={Game} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors.errors
  }
}

export default connect(mapStateToProps, { userIsAuthenticated, authenticate, authenticationFail})(App);
