import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store/store.js'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//to make summernote work
//import $ from 'jquery';
//import 'bootstrap3/dist/css/bootstrap.css';

//window.jQuery = $;
//require('bootstrap3');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
