import React from 'react';
import {connect} from 'react-redux'


class Profile extends React.Component {
 
  render() {
  	const {user} = this.props
    return (
      <h1>Welcome {user.username} </h1>
    );
  }
}

const mapStateToProps=(state)=>{
  return {user: state.auth.currentUser}
}

export default connect(mapStateToProps)(Profile)
