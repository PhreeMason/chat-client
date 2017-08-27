import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'
import {setCurrentUser} from '../Auth/actions'

const currentProfile = user => {
	return{
		type: 'USER_PROFILE',
		user
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

export const viewProfile = (username) =>{
  return dispatch => {
  	return serverApi.userProfile(username)
  	.then(body=>{
  		console.log(body)
  		dispatch(currentProfile(body.user))
		})
		.catch(err=>{
			errorHandler(err, dispatch)		
		})
  }
}