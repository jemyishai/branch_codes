import React from 'react';

class Codes extends React.Component {
  constructor (props){
    super(props)

    this.state = {
      fullBranchInput : '',
      codeBranchInput: ''
    }
    this.filterCodes = this.filterCodes.bind(this)
  }

  render(){
    const branches = this.props.branches
    console.log('branches: ',branches)

    return (
      <div>
      <input
      type="text"
      focus="true"
      placeholder="Enter Branch ie..'Bronx Library Center'"
      className=""
      onChange={evt => this.setState({ fullBranchInput: evt.target.value })}
      /> | | &nbsp;
      <input
      type="text"
      focus="true"
      placeholder="Enter Branch Code ie..'BLC'"
      className=""
      onChange={evt => this.setState({ codeBranchInput: evt.target.value })}
      />
      <ul>
    { branches.map((object)=> <li key={object.branch+1}> {object.branch} : {object.code}</li>)
    }
         {/* branchAsProps.map((item)=><li key={item+1}>{Object.getOwnPropertyNames(item)} : {branches[item]}</li>) */}
      </ul>
      </div>
    )
  }

  filterCodes (input) {

    const branchInput = new RegExp(this.state.fullBranchInput, 'i');
    const branchCodeInput = new RegExp(this.state.codeBranchInput, 'i');

    return branchInput.test(input.branch)
      && branchCodeInput.test(input.code)

  }


}

export default Codes
