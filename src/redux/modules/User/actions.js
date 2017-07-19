import serverApi from '../../helpers/Api'
import {errorHandler} from '../Error/actions'
import {setCurrentUser} from '../Auth/actions'

export const updateUser = (data) =>{
	return dispatch => {
		return serverApi.updateUser(data)
		.then(body=>{
			dispatch(setCurrentUser(body.data.user))
		})
		.catch(err=>{
			errorHandler(err, dispatch)		
		})
	}
}