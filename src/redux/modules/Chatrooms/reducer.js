import * as action from './actions'

const initialState = {
	recieved: false,
	receiving: null,
	chatrooms: []
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'ADD_CHATROOM':
			if (state.chats.filter(chatroom => chatroom.name === action.chatroom.name).length !== 0) {
	      return state;
	    }
		  return {
			 	...state,
	      chatrooms: [...state.chatrooms, action.chatroom]
			}
		default:
		  return state;
	}
}
