// Import the constants file in order to get the action types:
import {
	CHANGE_SEARCH_FIELD,
	REQUEST_STUDENTS_PENDING,
	REQUEST_STUDENTS_SUCCESS,
	REQUEST_STUDENTS_FAILED
	} from './constants.js';

// Define an initial state. this will be used to initialize the application state:
const initialStateSearch = {
	searchField: ''
}

// create the students search application reducer. Parameters are the state, and the action.
export const searchStudents = (state=initialStateSearch,action={}) =>{
	
	// differentiate actions by action type:
	switch(action.type){

		// case of search field action type:
		case CHANGE_SEARCH_FIELD:			
			// Return a new 'state' object, where the value is the initiatl state 
			// combined with the new provided parameter for the search  field. 
			// This will allow the state to be updated with new values:
			return Object.assign({},state,{searchField: action.payload});		

		default:
			return state;
	}
}


// Define an initial state for the fetch operation:
const initialStateStudents = {
	isPending: false,
	students: [],
	error:''
}

// Create the API fetch request action reducer.
export const requestStudents = (state=initialStateStudents, action={}) =>{
	switch(action.type){
		
		case REQUEST_STUDENTS_PENDING:
			return Object.assign({},state,{isPending: true})
		
		case REQUEST_STUDENTS_SUCCESS:
			return Object.assign({},state,{students: action.payload, isPending:false})
		
		case REQUEST_STUDENTS_FAILED:
			return Object.assign({},state,{error: action.payload, isPending:false})
		
		default:
			return state;
	}
}