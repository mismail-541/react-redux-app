import {
		CHANGE_SEARCH_FIELD,
		REQUEST_STUDENTS_PENDING,
		REQUEST_STUDENTS_SUCCESS,
		REQUEST_STUDENTS_FAILED
		} from './constants.js';


export const setSearchField = (text)=>{

	console.log('setSearchField action..............')

	return(
		{
			type: CHANGE_SEARCH_FIELD,
			payload: text	
		}
	);
}

export const requestStudents = () => (dispatch) => {
	console.log('inside requestStudents()...');
	dispatch({ type: REQUEST_STUDENTS_PENDING})	
	fetch('https://hp-api.herokuapp.com/api/characters')
	  .then(response => response.json())
	  .then(data => dispatch({type: REQUEST_STUDENTS_SUCCESS , payload: data}))
	  .catch(error => dispatch({type: REQUEST_STUDENTS_FAILED, payload: error}))
}