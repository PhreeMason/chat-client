import { reset } from'redux-form'
import serverApi from '../../helpers/Api'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import Loading from '../../../components/Loading'

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

export const authenticationFail = () =>{
	return {
		type: 'AUTHENTICATION_FAIL'
	}
}

export const logout = (history) => {
  localStorage.removeItem('token');
  history.replace('/');
  return { type: 'LOGOUT' };
}


export const signup = (user, history)=>{
	return dispatch => {
		dispatch(authenticationRequest())
		return serverApi.createUser(user)
		.then(body=>{
	    if (body.errors) {
	    	dispatch(authenticationFail)
        history.push(`/`)      
	    } else {
		    const {user, token} = body.data
				localStorage.setItem('token', token);
				dispatch(setCurrentUser(user));
				dispatch(reset('signup'));
				history.push(`/dominoRoom`);
	    }
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
        history.push(`/profile`);
      })
      .catch((err) => {
        dispatch(authenticationFail)
        history.push(`/`)
      })
  }
}

export const authenticate = () => {
  return dispatch => {
    dispatch(authenticationRequest());
    return serverApi.auth()
      .then(response => {
        const { user, token } = response;
        localStorage.setItem('token', token);
        dispatch(setCurrentUser(user));
      })
      .catch(err => {
        localStorage.removeItem('token');
        window.location = '/login';
      });
  };
}

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth.currentUser !== null,
  wrapperDisplayName: 'UserIsAuthenticated',
  // Returns true if the user auth state is loading
  authenticatingSelector: state => state.auth.willAuthenticate,
  // Render this component when the authenticatingSelector returns true
  AuthenticatingComponent: Loading,
})