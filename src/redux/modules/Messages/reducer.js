const initialState = {
	messages: [],
	status: null
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'GETTING_MESSAGES':
		  return {
			 	...state,
	      status: 'fetching'
			}
    case 'GET_MESSAGES_SUCCESS':
      return {
      	messages: action.messages, 
      	status: 'fetched'
      }
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages:[
          ...state.messages, action.message
        ]
      }
		default:
		  return state;
	}
}