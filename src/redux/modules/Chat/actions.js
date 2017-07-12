import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'

export const getChat = () =>({type: 'GETTING_CHATROOM'})

export const getChatSuccess = (chat) =>{
  return {
    type: 'GET_CHATROOM_SUCCESS',
    chat: chat
  }
}

export const sendingMessage = () => ({type: 'SENDING_MESSAGE'})

export const setCurrentChat = (id) =>{
  return dispatch =>{
    dispatch(getChat())
    return serverApi.joinChat(id)
    .then(body=>{
      dispatch(getChatSuccess(body.data))
    })
    .catch(err=>{
      errorHandler(err, dispatch)
    })
  }
}

const addMessage = (message) =>{
  return {
    type: 'ADD_MESSAGE',
    message: message
  }
}

export const sendMessage = (room_id, message) =>{
  return dispatch =>{
    dispatch(sendingMessage())
    return serverApi.sendMessage(room_id, message)
    .then(body=>{
      console.log('addind message', body.data)
      dispatch(addMessage(body.data))
    })
    .catch(err=>{
      errorHandler(err, dispatch)
    })
  }
}