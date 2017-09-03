import React from 'react';
import {connect} from 'react-redux'
import ProfileForm from './ProfileForm'
import UserShow from './UserShow'
import { Route } from 'react-router-dom'
import {viewProfile} from '../../redux/modules/User/actions'

class Profile extends React.Component {
  
  
  componentWillMount() {
    const {currentUser, match, viewProfile} = this.props
    console.log(match, viewProfile)
  }
  
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
    currentProfile: state.auth.currentProfile
  }
}

export default connect(mapStateToProps, {viewProfile})(Profile)