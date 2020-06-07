import React from 'react';
import './User.css';

const User = (props) =>{

	const name=props.name;
	const image=props.image;

	return(
		<div className='user-card'>

			<img className='user-card-image' alt='user' src={image} />
			<h2>{name}</h2>
			
		</div>
	);
}

export default User;