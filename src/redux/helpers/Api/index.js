import axios from 'axios';

const url = 'http://localhost:3001/api/v1';

const userToken =()=> {
	const token  = localStorage.getItem('token');
	return {'Authorization': `Bearer: ${token}`}
}

export default {
	createUser(user){
		return axios.post(`${url}/users`, user) 
	},

	loginUser(user){
		return axios.post(`${url}/auth`, user)
	},

	auth(){
		return axios.post(`${url}/auth/refresh`, {headers: userToken()})
	},

	getChats(){
		console.log('inside the get')
		return axios.get(`${url}/chatrooms`)
	}
}



