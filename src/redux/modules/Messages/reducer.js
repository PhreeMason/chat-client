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
    case 'GET_MESSAGES_FAILURE':
      return {
      	...state,
      	status: 'fetch fail'
      } 
    case 'GET_MESSAGES_SUCCESS':
      return {
      	messages: action.messages, 
      	status: 'fetched'
      }
    case 'SENDING_MESSAGE':
      return {
      	...state,
      	status: 'updating'
      }
    case 'ADD_MESSAGE':
      var messageArry = state.messages[action.message.chatroom_id]
      return { 
        messages: {
          ...state.messages, [action.message.chatroom_id]: [
          ...messageArry, action.message
          ]
        },
        status: 'updated'  
      }
		default:
		  return state;
	}
}