const initialState = {
	errors:[]
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'NO_RESPONSE':
		  return {
			 	errors: [`The server did not respond, 
			 	please check you connection and try again`]
			}
		default:
		  return state;
	}
}