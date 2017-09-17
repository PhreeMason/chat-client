import React from 'react';
import {connect} from 'react-redux'
import ProfileForm from './ProfileForm'
import UserShow from './UserShow'
import { Route } from 'react-router-dom'
import {viewProfile} from '../../redux/modules/User/actions'

class Profile extends React.Component {
  
  
  componentWillMount() { // fetch current profile information
    const {currentUser, match, viewProfile} = this.props
     viewProfile(match.params.username, currentUser.username)
  }

  //componentWillUnmount() {
    // clear out the current profile from store
  //}
  
  render() {
  	const {currentUser, match, editable} = this.props
    return (
      <div>
        <UserShow user={currentUser} editable={editable}/>
        <Route path={`${match.url}/edit`} component={ProfileForm} />
      </div>
		)
  }
}

const mapStateToProps=(state)=>{
  return {
    currentUser: state.auth.currentUser,
    currentProfile: state.auth.currentProfile,
    editable: state.auth.editable
  }
}

export default connect(mapStateToProps, {viewProfile})(Profile)