import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'


export const addMessages = (messages) =>{
  return {
    type: 'GET_MESSAGES_SUCCESS',
    messages: messages
  }
}

export const gettingMessages = () => ({type: 'GETTING_MESSAGES'})

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

export const setCurrentMessages = (id) =>{
  return dispatch =>{
    dispatch(gettingMessages())
    return serverApi.joinChat(id)
    .then(body=>{
      dispatch(addMessages(body.data.messages))
    })
    .catch(err=>{
      errorHandler(err, dispatch)
    })
  }
}