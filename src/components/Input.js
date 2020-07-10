import React from 'react';

const Input = (props) => {
	return (
		<div class="nypl-text-field">
		<input
			id="keyword-text"
			type="text"
			focus="true"
			placeholder={props.placeholder}
			className=""
			onChange={props.change}
		/>
		</div>
	);
};

export default Input;
