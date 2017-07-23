import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'


export const addMessages = (messages, id) =>{
  return {
    type: 'GET_MESSAGES_SUCCESS',
    messages: messages,
    room_id: id
  }
}

export const gettingMessages = () => ({type: 'GETTING_MESSAGES'})

const recieveMessage = (message, id) =>{
	return {
		type: 'ADD_MESSAGE',
	  message: message,
    room_id: id
	}
}

export const updateMesages = (message, id) =>{
  return dispatch =>{
    var data = JSON.parse(message)
  	dispatch(recieveMessage(data, id))
  }
}

export const setCurrentMessages = (id) =>{
  return dispatch =>{
    dispatch(gettingMessages())
    return serverApi.joinChat(id)
    .then(body=>{
      dispatch(addMessages(body.data.messages, id))
    })
    .catch(err=>{
      errorHandler(err, dispatch)
    })
  }
}