import { 
	createStore, 
  applyMiddleware, 
  combineReducers 
} from 'redux';
import thunk from 'redux-thunk';
import {reducer as form } from 'redux-form'

const reducers = combineReducers({
	form
})

const middleware = [thunk]

export default createStore(
  reducers,
  window._REDUX_DEVTOOLS_EXTENSIONS && window._REDUX_DEVTOOLS_EXTENSION(),
  applyMiddleware(...middleware)
)