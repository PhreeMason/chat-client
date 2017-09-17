const initialState = {
	currentProfile: null,
	editable: false
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'SAME_USER':
		  return {
				...state,
				currentProfile: state.currentUser,
				editable: true
			}
	  case 'CLEAR_USER':
	    return {
	    	...state,
				currentProfile: null
	    }
    case 'LOGOUT': 
      return Object.assign({}, initialState, { willAuthenticate: false });
		default:
			return state;
	}
}
