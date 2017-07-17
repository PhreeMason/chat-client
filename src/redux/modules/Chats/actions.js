import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'
import {addMessages} from '../Messages/actions'

export const addChat=(chats)=>{
  return {
  	type: 'ADD_CHATS',
  	chats: chats
  }
}

export const gettingChats=()=>{
  return{type: 'GETTING_CHATS'}
}

export const getChatsFailed=()=>{
  return{type: 'FAILED_GETTING_CHATS'}
}

export const enterChat = (chat) =>{
  return {
    type: 'ENTER_CHAT',
    chat
  }
}

export const getChats =()=>{
  return dispatch => {
    dispatch(gettingChats())
    return serverApi.getChats()
    .then(body=>{
      if (body.errors) {
        dispatch(getChatsFailed)
        return errorHandler(body, dispatch)   
      } else {
        const chats = body.data.chatrooms
        const messages = body.data.messages
        dispatch(addChat(chats));
        dispatch(addMessages(messages));
      }
    })
  }
}

export const createChat =(params)=>{
  return dispatch =>{
    dispatch(gettingChats())
    return serverApi.createChat(params)
      .then(body => {
        getChats(dispatch)
      })
      .catch((err) => {
        dispatch(getChatsFailed)
        errorHandler(err, dispatch)
      })
  } 
}

export const directMessage = (username) =>{
  return dispatch =>{
    dispatch(gettingChats())
    return serverApi.directMessage(username)
      .then(body=>{
        getChats(dispatch)
      })
      .catch(err=>{
        dispatch(getChatsFailed)
        errorHandler(err, dispatch)
      })
  }
}