import React from 'react';
import User from './User.js';
import './User.css';

const UserList = (props) =>{
	
		const usersList=props.usersList;

		console.log('users are=',usersList);

		const studentsArray = usersList.map( (user,index)=>{
			return <User key={index} name={user.name} image={user.image}/>
		} );

		return(
			<div className='user-list-container'>
				{studentsArray}
			</div>
		);
}

export default UserList;