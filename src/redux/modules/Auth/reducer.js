const initialState = {
	isAuthenticated: false,
	willAuthenticate:true,
	currentUser: null,
	currentProfile: null
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'AUTHENTICATION_REQUEST':
		  return {
			 	...state,
	      willAuthenticate: true
			}
		case 'AUTHENTICATION_SUCCESS':
		  return {
        isAuthenticated: true,
        willAuthenticate: false,
        currentUser: action.user,
		  }
		case 'AUTHENTICATION_FAIL':
		  return Object.assign({}, initialState, { willAuthenticate: false });
    case 'USER_PROFILE':
      return {
      	...state,
      	currentProfile: action.user
      }
    case 'LOGOUT': 
      return Object.assign({}, initialState, { willAuthenticate: false });
		default:
		  return state;
	}
}