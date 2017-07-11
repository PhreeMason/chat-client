import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
// eslint-disable-next-line
import { Link } from 'react-router-dom'
import {logout } from '../../redux/modules/Auth/actions'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import smash from '../../images/smash.png'

class NavBar extends Component {

  state={};

  static propTypes ={
    history: PropTypes.object.isRequired
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if (name==='logout') {
      this.props.logout(this.props.history)
    }
  }
  render() {
    const { activeItem } = this.state
    const {isAuthenticated} = this.props
    return (
      <Menu inverted>
        <Menu.Item>
          <img src={smash} alt='logo'/>
        </Menu.Item>
        {isAuthenticated?
	        <Menu.Menu>      
	        	<Menu.Item 
	            as={ Link } to='/profile'
	            name='profile' 
	            active={activeItem === 'profile'} 
	            onClick={this.handleItemClick}
	          >
	           Profile
	          </Menu.Item>

	          <Menu.Item
	            as={ Link } to='/chats' 
	            name='chat' 
	            active={activeItem === 'chat'} 
	            onClick={this.handleItemClick}
	          >
	           Chat
	          </Menu.Item>

	          <Menu.Item
	          as={ Link } to='/games' 
	            name='games' 
	            active={activeItem === 'games'} 
	            onClick={this.handleItemClick}
	          >
	           Games
	          </Menu.Item>
	        </Menu.Menu>
        :null}
        
        
        <Menu.Menu position='right'>
          {isAuthenticated ?
            <Menu.Item 
              name='logout' 
              active={activeItem === 'logout'} 
              onClick={this.handleItemClick}
            >
             Log Out
            </Menu.Item>
          :
            <Menu.Item
              as={ Link } to='/login'
                name='login'
                color = 'purple'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
              >
                Login
            </Menu.Item> 
          }
        </Menu.Menu>
        
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default withRouter(connect(mapStateToProps, { logout })(NavBar));
