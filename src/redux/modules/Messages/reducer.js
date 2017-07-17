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
    case 'NEW_CHAT_MESSAGES':
      var key = Object.keys(action.messages)[0]
      key = parseInt(key, 10)
      if (state.messages[key]) {
        return state
      }
      return {
        ...state,
        messages: {
          ...state.messages, [key]: action.messages
        }
      }
		default:
		  return state;
	}
}