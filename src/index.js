import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// Import Redux components:
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {searchStudents,requestStudents} from './reducers.js';

import { createLogger } from 'redux-logger';

//Import Redux thunk middleware:
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

// combine all reducers into 'rootReducer':
const rootReducer = combineReducers({searchStudents,requestStudents});


const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));


ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
  		<App/>
  	</Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
