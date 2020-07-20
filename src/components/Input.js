import React from 'react';

let Input = (props) => (
			<div className="nypl-text-field">
				<input
					id="keyword-text"
					type="text"
					focus="true"
					placeholder={props.placeholder}
					className=""
					pattern="[a-zA-Z0-9]+"
					onChange={props.change}
				/>
			</div>
);

export default Input;
