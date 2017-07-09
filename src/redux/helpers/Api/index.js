import axios from 'axios';

const url = 'http://localhost:3001/api/v1';

const token  = localStorage.getItem('token');

axios.defaults.headers.common['Authorization'] = token

export default {
	createUser(user){
		return axios.post(`${url}/users`, user) 
	},

	loginUser(user){
		return axios.post(`${url}/auth`, user)
	},

	auth(){
		return axios.post(`${url}/auth/refresh`)
	},

	getChats(){
		return axios.get(`${url}/chatrooms`)
	},

	joinChat(chatroom_id){
		return axios.post(`${url}/chatrooms/${chatroom_id}/chatroom_users`)
	},

  leaveChat(chatroom_id){
		return axios.delete(`${url}/chatrooms/${chatroom_id}/chatroom_users`)
	},
}


