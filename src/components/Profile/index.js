import React from 'react';
import {connect} from 'react-redux'
import ProfileForm from './ProfileForm'
import UserShow from './UserShow'
import {Grid} from 'semantic-ui-react'
import { Route } from 'react-router-dom'

class Profile extends React.Component {

  render() {
  	const {currentUser, match} = this.props
    return (
      <Grid padded>
        <Grid.Column width={6}>
          <UserShow user={currentUser}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Route path={`${match.url}/edit`} component={ProfileForm} />
        </Grid.Column>
      </Grid>
		)
  }
}

const mapStateToProps=(state)=>{
  return {
    currentUser: state.auth.currentUser,
  }
}

export default connect(mapStateToProps)(Profile)