import React from 'react';
import {connect} from 'react-redux'
import ProfileForm from './ProfileForm'
import UserShow from './UserShow'
import { Route } from 'react-router-dom'
import {viewProfile} from '../../redux/modules/User/actions'

class Profile extends React.Component {
  
  componentDidMount() {

    console.log(this.props.match.params.username)
  }
  
  componentWillMount() {
    const {currentUser, match, viewProfile} = this.props
    if (match.params.username !== currentUser.username) {
      viewProfile(match.params.username)
    }
  }
  render() {
  	const {currentUser, match, currentProfile} = this.props
    return (
      <div>
        <UserShow user={currentProfile.username === currentUser.username ? currentUser : currentProfile}/>
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