import React from "react";
import Input from "./Input.js";
import Table from "./Table.js";

class Codes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullBranchInput: "",
      codeBranchInput: "",
    };

    this.filterCodes = this.filterCodes.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    const branches = this.props.branches;
    return (
      <div>
        <div className="centered">
          <Input
            placeholder={"Search branch name ie... 'Aguilar'"}
            change={(evt) => this.onChange(evt, "fullBranchInput")}
          />
          {/* This input is wired to filter based on branch code, not branch name, but is not necesary for UX reasons.
						&nbsp; AND / OR &nbsp;
        <Input
          placeholder={"Type branch code ie... 'BC'"}
          change={(evt) => this.onChange(evt, "codeBranchInput")}
				/>
				*/}
        </div>
        <Table branchInfo={branches} filter={this.filterCodes} />
      </div>
    );
  }

  filterCodes(input) {
    const branchInput = new RegExp(this.state.fullBranchInput, "ig");
    const branchCodeInput = new RegExp(this.state.codeBranchInput, "ig");
    return branchInput.test(input.branch) && branchCodeInput.test(input.code);
  }

  onChange(evt, second) {
    const regex = /[^\-a-zA-Z0-9' ]+/gi;
    let filteredInput = evt.target.value.replace(regex, "");
    this.setState({ [second]: filteredInput });
  }
}

export default Codes;
