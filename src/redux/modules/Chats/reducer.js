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
	      chats: action.chats
			}
		case 'GETTING_CHATS':
		  return {
		  	...state,
		  	status:'fetching chatrooms'
		  }
		case 'FAILED_GETTING_CHATS':
		  return {
		  	...state,
		  	status: 'fetching failed'
		  }
		default:
		  return state;
	}
}
