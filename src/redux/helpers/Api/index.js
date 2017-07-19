import axios from 'axios';

const url = 'https://lit-ridge-65285.herokuapp.com/api/v1';

const token = () => localStorage.getItem('token');

axios.defaults.headers.common['Authorization'] = token()

export default {
	createUser(user){
		return axios.post(`${url}/users.json`, user) 
	},

	loginUser(user){
		return axios.post(`${url}/auth.json`, user)
	},

	auth(){
		return axios.post(`${url}/auth/refresh.json`)
	},

	getChats(){
		return axios.get(`${url}/chatrooms.json`)
	},

	joinChat(chatroom_id){
		return axios.post(`${url}/chatrooms/${chatroom_id}/chatroom_users.json`)
	},

	createChat(params){
		return axios.post(`${url}/chatrooms.json`, {chatroom: params})
	},

  leaveChat(chatroom_id){
		return axios.delete(`${url}/chatrooms/${chatroom_id}/chatroom_users.json`)
	},

	sendMessage(chatroom_id, body){
		return axios.post(`${url}/chatrooms/${chatroom_id}/messages.json`, {chatroom_id, body})
	},

	directMessage(username){
		return axios.post(`${url}/chatrooms/direct_message.json`, {user: username})
	},

	updateUser(data){
		return axios.patch(`${url}/users.json`, {user: data})
	}
}


