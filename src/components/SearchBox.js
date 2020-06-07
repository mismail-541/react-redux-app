import React,{Component} from 'react';
import './SearchBox.css';

const SearchBox = (props) =>{

	const onchangeSearch = props.onchangeSearch;

	console.log(onchangeSearch);

	return(
		<div>
			<div><input className='search-box' type='search' onChange={onchangeSearch} placeholder='Search...'/></div>
		</div>
	);
}

export default SearchBox;