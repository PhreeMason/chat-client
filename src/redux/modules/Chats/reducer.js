const initialState = {
	status: 'not updated',
	chats: []
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'ADD_CHATS':
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
		case 'ENTER_CHAT':
		  if (state.chats.filter(chat=> chat.id === action.chat.id).length > 0) {
		  	return state;
		  }
		  return {
		  	status: 'updated',
		  	chats:[...state.chats, action.chat]
		  }
		case 'REMOVE_CHAT':
		  var chats = []
		  state.chats.forEach((chat) => {
		    if (chat.id !== action.id) {chats.push(chat)}
		  })
		  return {
		  	...state,
		  	chats: chats
		  }
		default:
		  return state;
	}
}
