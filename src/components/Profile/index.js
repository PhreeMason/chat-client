import React from 'react';
import {connect} from 'react-redux'
import ChatPage from '../Chat/ChatsPage'


class Profile extends React.Component {
 
  render() {
  	const {user} = this.props
    return (
      <div>
        <h1>Welcome {user.username} </h1>
        <ChatPage/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {user: state.auth.currentUser}
}

export default connect(mapStateToProps)(Profile)
