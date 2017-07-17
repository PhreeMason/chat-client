import React from 'react';
import {connect} from 'react-redux'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

class Profile extends React.Component {
 
  render() {
  	const {user} = this.props
    return (
		  <Card
		    image='/assets/images/avatar/large/elliot.jpg'
		    header={user.username}
		    meta='Friend'
		    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
		    extra={extra}
		  />
		)
  }
}

const mapStateToProps=(state)=>{
  return {user: state.auth.currentUser}
}

export default connect(mapStateToProps)(Profile)