import serverApi from '../../helpers/Api'

export const addChat=(chatroom)=>{
  return {
  	type: 'ADD_CHAT',
  	chatroom
  }
}

export const gettingChats=()=>{
  return{type: 'GETTING_CHATS'}
}


export const getChats=()=>{
  console.log('inside the dispatch')
  return dispatch=>{
  	return serverApi.getChats()
  	.then(body=>{
      console.log('thebody goes here')
  		console.log(body)
  	})
    .catch(err=>{
      console.error('the errors go here')
      console.error(err)
    })
  }
}
