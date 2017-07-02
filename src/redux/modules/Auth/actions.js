import 'isomorphic-fetch';
import { reset, SubmissionError } from'redux-form'

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
		return fetch('/users',{
			method: 'POST',
			headers:{
				'Accept': 'application/json',
				'content-Type': 'application/json'
			},
			body: JSON.stringify({user: userDetails})
		})
		.then(response => response.json())
		.then(body=>{
			const slug = body.user.username
			localStorage.setItem('e.shop.token', body.token)
			dispatch(setCurrentUser(body.user))
			dispatch(reset('signup'))
			router.history.replace(`/users/${slug}/profile`);
		})
		.catch(err ={
			throw new SubmissionError(err)
		})
	}
}
