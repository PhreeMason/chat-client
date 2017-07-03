import { reset, SubmissionError } from'redux-form'
import serverApi from '../../helpers/Api'

export const authenticationRequest = () =>{
	return {
		type: 'AUTHENTICATION_REQUEST'
	}
}

export const setCurrentUser = user => {
	return{
		type: 'AUTHENTICATION_SUCCESS',
		user
	}
}


export const signup = (user, router)=>{
	return dispatch => {
		dispatch(authenticationRequest())
		return serverApi.createUser(user)
		.then(body=>{
			const slug = body.user.username
			localStorage.setItem('token', body.token)
			dispatch(setCurrentUser(body.user))
			dispatch(reset('signup'))
			router.history.replace(`/users/${slug}/profile`);
		})
		.catch(err ={
			throw new SubmissionError(err)
		})
	}
}

export const login = (user, router) => {
  return dispatch => {
    dispatch(authenticationRequest()); 
    return serverApi.loginUser(user)
      .then(body => {
        const { user, token } = body;
        localStorage.setItem('token', token);
        dispatch(setCurrentUser(user))
        dispatch(reset('login'));
        router.history.replace(`/users/${user.username}/profile`);
      })
      .catch((err) => {
        throw new SubmissionError(err)
      })
  }
}