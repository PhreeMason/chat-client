const initialState = {
	isAuthenticated: false,
	willAuthenticate:true,
	currentUser: {}
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'AUTHENTICATION_REQUEST':
		  return {
			 	...state,
	      isAuthenticated: true
			}
		case 'AUTHENTICATION_SUCCESS':
		  return {
        isAuthenticated: true,
        willAuthenticate: false,
        currentUser: action.user,
		  }
		default:
		  return state;
	}
}