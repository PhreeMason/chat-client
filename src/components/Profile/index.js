import React from 'react';
import {connect} from 'react-redux'
import ProfileForm from './ProfileForm'
import UserShow from './UserShow'
import { Route } from 'react-router-dom'

class Profile extends React.Component {

  render() {
  	const {currentUser, match} = this.props
    return (
      <div>
        <UserShow user={currentUser}/>
        <Route path={`${match.url}/edit`} component={ProfileForm} />
      </div>
		)
  }
}

const mapStateToProps=(state)=>{
  return {
    currentUser: state.auth.currentUser,
  }
}

export default connect(mapStateToProps)(Profile)