const initialState = {
	status: 'not updated',
	chats: []
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'ADD_CHAT':
			if (state.chats.filter(chatroom => chatroom.name === action.chatroom.name).length !== 0) {
	      return state;
	    }
		  return {
			 	status:'updated',
	      chats: [...state.chatrooms, action.chatroom]
			}
		default:
		  return state;
	}
}
