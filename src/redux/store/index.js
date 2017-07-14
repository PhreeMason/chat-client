import { 
	createStore, 
  applyMiddleware, 
  combineReducers 
} from 'redux';
import thunk from 'redux-thunk';
import {reducer as form } from 'redux-form'
import auth from '../modules/Auth/reducer'
import chats from '../modules/Chats/reducer'
import errors from '../modules/Error/reducer'

const reducers = combineReducers({
	form,
	auth,
	chats,
	errors
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)