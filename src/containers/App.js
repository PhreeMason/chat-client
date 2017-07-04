import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    red: {
        backgroundImage: 'linear-gradient( 135deg, #F05F57 0%, #360940 100%);'
    }
});

const dominoRoom = () =>(<div>dominoRoom</div>)
const NotFound = () =>(<h1>Wrong turn</h1>)

class App extends Component {
  render() {
    return (
      <Router>
        <div className={css(styles.red)}>
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
