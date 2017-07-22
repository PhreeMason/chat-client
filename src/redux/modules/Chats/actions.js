import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'

export const addChat = (chats) =>{
  return {
  	type: 'ADD_CHATS',
  	chats: chats
  }
}

export const gettingChats = () =>{
  return{type: 'GETTING_CHATS'}
}

export const getChatsFailed = () =>{
  return{type: 'FAILED_GETTING_CHATS'}
}

export const enterChat = (chat) =>{
  return {
    type: 'ENTER_CHAT',
    chat
  }
}

export const removeChat = (chatroom_id) =>{
  return {
    type: 'REMOVE_CHAT',
    id: chatroom_id
  }
}

export const getChats =()=>{
  return dispatch => {
    dispatch(gettingChats())
    return serverApi.getChats()
      .then(body => {
        const chats = body.data.chatrooms
        dispatch(addChat(chats));
      })
      .catch((err) => {
        dispatch(getChatsFailed)
        errorHandler(err, dispatch)
      })
  }
}



export const createChat =(params, history)=>{
  return dispatch =>{
    dispatch(gettingChats())
    return serverApi.createChat(params)
      .then(body => {
        const chat = body.data.chatroom
        dispatch(enterChat(chat));
        history.push(`/chats/${chat.id}/${chat.name.replace(/ /g, "-")}`)
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
        const chat = body.data.chatroom
        dispatch(enterChat(chat));
      })
      .catch(err=>{
        dispatch(getChatsFailed)
        errorHandler(err, dispatch)
      })
  }
}

export const leaveChat = (chatroom_id) =>{
  return dispatch =>{
    return serverApi.leaveChat(chatroom_id)
      .then(body=>{
        dispatch(removeChat(chatroom_id))
      })
      .catch(err=>{
        dispatch(getChatsFailed)
        errorHandler(err, dispatch)
      })
  }
}