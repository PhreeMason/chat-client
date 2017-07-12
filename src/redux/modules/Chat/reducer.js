const initialState = {
	chatroom:{
		id: '',
	  name: '',
	  messages: []
	},
	chatroom_users: [],
	status: null
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'GETTING_CHATROOM':
		  return {
			 	...state,
	      status: 'fetching'
			}
    case 'GET_CHATROOM_FAILURE':
      return {
      	...state,
      	status: 'fetch fail'
      } 
    case 'GET_CHATROOM_SUCCESS':
      return {
      	...action.chat, 
      	status: 'fetched'
      }
    case 'SENDING_MESSAGE':
      return {
      	...state,
      	status: 'updating'
      }
    case 'ADD_MESSAGE':
      return {
			  ...state,
			  chatroom:{
			    ...state.chatroom,
			    messages: [...state.chatroom.messages, action.message]
			  },
			  status: 'updated'
      }
		default:
		  return state;
	}
}