import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'

export const addChat=(chats)=>{
  return {
  	type: 'ADD_CHATS',
  	chats
  }
}

export const gettingChats=()=>{
  return{type: 'GETTING_CHATS'}
}

export const getChatsFailed=()=>{
  return{type: 'FAILED_GETTING_CHATS'}
}

export const getChats =()=>{
  return dispatch => {
    dispatch(gettingChats())
    return serverApi.getChats()
    .then(body=>{
      if (body.errors) {
        dispatch(getChatsFailed)
        errorHandler(body, dispatch)
        return body.errors    
      } else {
        const chats = body.data
        dispatch(addChat(chats));
      }
    })
  }
}
