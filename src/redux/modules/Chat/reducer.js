const initialState = {
	chatroom:{
		id: '',
		name: '',
		messages: [],
		chatroom_users: [],
	},
	status: null
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'GET_CHATROOM':
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
      	chatroom: action.chatroom, 
      	status: 'all good'
      }
		default:
		  return state;
	}
}