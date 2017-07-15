export const addMessages = (messages) =>{
  return {
    type: 'GET_MESSAGES_SUCCESS',
    messages: messages
  }
}

const recieveMessage = (message) =>{
	return {
		type: 'ADD_MESSAGE',
	  message
	}
}

export const updateMesages = (message) =>{
  return dispatch =>{
    var data = JSON.parse(message)
  	dispatch(recieveMessage(data))
  }
}