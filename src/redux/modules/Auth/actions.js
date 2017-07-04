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


export const signup = (user, history)=>{
	return dispatch => {
		dispatch(authenticationRequest())
		return serverApi.createUser(user)
		.then(body=>{
	    const {user, token} = body.data
			localStorage.setItem('token', token);
			dispatch(setCurrentUser(user));
			dispatch(reset('signup'));
			history.push(`/dominoRoom`);
		})
		.catch((err)=>{
			throw new SubmissionError(err.message)
		})
	}
}

export const login = (user, history) => {
  return dispatch => {
    dispatch(authenticationRequest()); 
    return serverApi.loginUser(user)
      .then(body => {
        const { user, token } = body.data;
        localStorage.setItem('token', token);
        dispatch(setCurrentUser(user))
        dispatch(reset('login'));
        history.push(`/dominoRoom`);
      })
      .catch((err) => {
        throw new SubmissionError(err.message)
      })
  }
}