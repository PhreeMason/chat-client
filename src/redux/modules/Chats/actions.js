import serverApi from '../../helpers/Api'

export const addChat=(chats)=>{
  return {
  	type: 'ADD_CHAT',
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
        alert('Failed to load chats')
        return body.errors    
      } else {
        const chats = body.data
        dispatch(addChat(chats));
      }
    })
  }
}
