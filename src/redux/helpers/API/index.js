import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

const userToken =()=> {
	const token  = localStorage.getItem('token');
	return {'Authorization': `Bearer: ${token}`}
}

export default {
	createUser(user){
		debugger
		return axios.post(`${url}/users`, user) 
	},

	loginUser(user){
		return axios.post(`${url}/auth`, user)
	}
}



