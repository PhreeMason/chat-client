const initialState = {
	messages: {},
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
        ...state,
      	messages: {
          ...state.messages,
          [action.room_id]: action.messages
        }, 
      	status: 'fetched'
      }
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages:{
          ...state.messages, 
          [action.room_id]: [...state.messages[action.room_id], action.message]
        }
      }
		default:
		  return state;
	}
}