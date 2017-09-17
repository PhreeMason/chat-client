import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'
import {setCurrentUser} from '../Auth/actions'

const currentProfile = user => {
	return{
		type: 'USER_PROFILE',
		user
	}
}

const sameUser = () =>{
	return {
		type: 'SAME_USER'
	}
}

export const updateUser = (data) =>{
	return dispatch => {
		return serverApi.updateUser(data)
		.then(body=>{
			dispatch(setCurrentUser(body.data.user))
		})
		.catch(err=>{
			errorHandler(err, dispatch)		
		})
	}
}

export const viewProfile = (paramsUsername, currentUsername) =>{
  return dispatch => {
  	if (paramsUsername === currentUsername) {
      dispatch(sameUser)
  	} else {
  		return serverApi.userProfile(username)
		  	.then(body=>{
		  		dispatch(currentProfile(body.user))
				})
				.catch(err=>{
					errorHandler(err, dispatch)		
				})
	  	}
  }
}

