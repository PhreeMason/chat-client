import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import store from './redux/store';
import apiCable from './redux/helpers/ApiCable'
import './App.css';


ReactDOM.render(
	<Provider store={store}>
	  <div className="App">
	  	<App apiCable={apiCable}/>
	  </div>
	</Provider>, 
	document.getElementById('root')
  );


registerServiceWorker();
