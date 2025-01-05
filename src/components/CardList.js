import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
	// const cardsArray = robots.map((user, i) => {
	// 	return (
	// 		<Card 
	// 			key={i} 
	// 			id={robots[i].id} 
	// 			name={robots[i].name} 
	// 			email={robots[i].email} 
	// 		/>
	// 	);
		// The Key prop shoould be a unique ID that does'nt change key={i} "DataBase Unique ID"
	// })
	return(
		<div>
	      { 
	      	robots.map((user, i) => {
				return (
					<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email} 
					/>
				);
				// The Key prop shoould be a unique ID that does'nt change key={i} "DataBase Unique ID"
			}) 
	      }
	    </div>
	);
}

export default CardList;