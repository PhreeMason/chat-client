import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
// eslint-disable-next-line
import { Link } from 'react-router-dom'
import {logout } from '../../redux/modules/Auth/actions'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

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
    return (
      <Menu inverted>
        <Menu.Menu>

        	<Menu.Item 
            as={ Link } to={`/profile/${this.props.username}`}
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

        </Menu.Menu>

        <Menu.Menu position='right'>

            <Menu.Item 
              name='logout' 
              active={activeItem === 'logout'} 
              onClick={this.handleItemClick}
            >
             Log Out
            </Menu.Item>

        </Menu.Menu>
        
      </Menu>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    username: state.auth.currentUser.username
  }
}

export default withRouter(connect(mapStateToProps, { logout })(NavBar));
