import React from 'react';

const Input = (props) => {
	return (
		<input
			type="text"
			focus="true"
			placeholder={props.placeholder}
			className=""
			onChange={props.change}
		/>
	);
};

export default Input;
