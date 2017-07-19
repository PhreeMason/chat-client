import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import store from './redux/store';
import apiCable from './redux/helpers/ApiCable'
import { StyleSheet, css  } from 'aphrodite';

const styles = StyleSheet.create({
    body: {
        backgroundImage: 'linear-gradient( 135deg, #F05F57 0%, #360940 100%);',
        minHeight: '900px'
    }
});

ReactDOM.render(
	<Provider store={store}>
	  <div className={css(styles.body)}>
	  	<App apiCable={apiCable}/>
	  </div>
	</Provider>, 
	document.getElementById('root')
  );


registerServiceWorker();
