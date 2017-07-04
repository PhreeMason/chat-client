import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from '../components/Home'

const dominoRoom = () =>(<div>dominoRoom</div>)
const NotFound = () =>(<h1>Wrong turn</h1>)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <NavBar/>
          </div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dominoRoom" component={dominoRoom} />
          <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
