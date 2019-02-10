import React from 'react';
import { Spring } from 'react-spring/renderprops'

export default function Logo(){
	return(
		<Spring
			from={{ opacity: 0}}
			to={{ opacity: 1}}
			config={{duration: 2000, delay: 300}}
		>
			{props => (
		<div style={props}>
			<h1 className='f1'>RoboFriends</h1>	
		</div>
	)}
		</Spring>
		);
}

