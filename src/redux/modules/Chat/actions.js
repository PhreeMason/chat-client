import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'

export const getChat=()=>({type: 'GET_CHATROOM'})

export const getChatSuccess=(chat)=>{
  return {
    type: 'GET_CHATROOM_SUCCESS',
    chatroom: chat
  }
}

export const setCurrentChat=(chat)=>{
  return dispatch =>{
    dispatch(getChat())
    return serverApi.setChat(1)
  }
}

export const joinChat=(chat)=>{
  return dispatch =>{
  	dispatch(getChat())
  	return serverApi.joinChat(1)
  	.then(body=>{
      console.log(body)
  	})
  	.catch(err=>{
  		errorHandler(err, dispatch)
  	})
  }
}
