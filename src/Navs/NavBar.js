import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted>
        <Menu.Item>
          <img src='/logo.png' alt='nothing'/>
        </Menu.Item>

        <Menu.Item
        as={ Link } to='/'
          name='Home'
          color = 'teal'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

         <Menu.Menu position='right'>
         <Menu.Item
         as={ Link } to='/signup' 
           name='signup' 
           active={activeItem === 'signup'} 
           onClick={this.handleItemClick}
          >
           Sign Up
         </Menu.Item>

         <Menu.Item
         as={ Link } to='/sign-in' 
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
       </Menu.Menu>
      </Menu>
    )
  }
}
