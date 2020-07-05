import React from 'react';
import Input from './Input.js';

class Codes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fullBranchInput: '',
			codeBranchInput: '',
		};

		this.filterCodes = this.filterCodes.bind(this);
    this.onChange = this.onChange.bind(this);
	}

	render() {
		const branches = this.props.branches;
		return (
			<div>
				<Input
					placeholder={"Enter Branch ie..'Bronx Library Center'"}
					change={(evt) => this.onChange(evt,'fullBranchInput')}
				/>
				 &nbsp; | | &nbsp;
        <Input
          placeholder={"Enter Branch Code ie..'BLC'"}
          change={(evt) => this.onChange(evt, 'codeBranchInput')} />
				<ul>
					{branches.filter(this.filterCodes).map((object) => (
						<li key={object.branch + 1}>
							{object.branch} : {object.code}
						</li>
					))}
				</ul>
			</div>
		);
	}

 filterCodes (input) {
		const branchInput = new RegExp(this.state.fullBranchInput, 'i');
		const branchCodeInput = new RegExp(this.state.codeBranchInput, 'i');
		return branchInput.test(input.branch) && branchCodeInput.test(input.code);
	}

  onChange(evt, second) {
		this.setState({ [second]: evt.target.value });
	}

}

export default Codes;
