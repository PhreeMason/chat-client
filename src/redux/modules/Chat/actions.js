// import serverApi from '../../helpers/Api'
// import {errorHandler} from '../Error/actions'

// export const getChat = () =>({type: 'GETTING_CHATROOM'})

// export const getChatSuccess = (chat) =>{
//   return {
//     type: 'GET_CHATROOM_SUCCESS',
//     chat: chat
//   }
// }

// export const sendingMessage = () => ({type: 'SENDING_MESSAGE'})

// export const setCurrentChat = (id) =>{
//   return dispatch =>{
//     dispatch(getChat())
//     return serverApi.joinChat(id)
//     .then(body=>{
//       console.log(body)
//       dispatch(getChatSuccess(body.data))
//     })
//     .catch(err=>{
//       console.log(err)
//       errorHandler(err, dispatch)
//     })
//   }
// }



// export const sendMessage = (room_id, message) =>{
//   return dispatch =>{
//     dispatch(sendingMessage())
//     return serverApi.sendMessage(room_id, message)
//     .then(body=>{
//       console.log('addind message', body)
//       dispatch(addMessage(body.data))
//     })
//     .catch(err=>{
//       console.log(err)
//       errorHandler(err, dispatch)
//     })
//   }
// }