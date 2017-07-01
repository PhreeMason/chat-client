import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


export default class NavBar extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
      	<Menu>
      	  <NavLink to='/'>
      	    <Menu.Item>Profile</Menu.Item>
      	  </NavLink>
      	</Menu>
      </div>
    );
  }
}
