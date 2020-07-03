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
    const branchAsProps = Object.getOwnPropertyNames(branches)

    return (
      <div>
      <input
      type="text"
      focus placeholder="Enter Branch ie..'Bronx Library Center'"
      className=""
      onChange={evt => this.setState({ fullBranchInput: evt.target.value })}
      /> | | &nbsp;
      <input
      type="text"
      focus placeholder="Enter Branch Code ie..'BLC'"
      className=""
      onChange={evt => this.setState({ codeBranchInput: evt.target.value })}
      />
      <ul>
    { branches.map((object)=> <li key={Object.keys(object)+1}> {Object.keys(object)} : {object[Object.keys(object)]}</li>
      )
    }
         {/* branchAsProps.map((item)=><li key={item+1}>{Object.getOwnPropertyNames(item)} : {branches[item]}</li>) */}
      </ul>
      </div>
    )
  }

  filterCodes (code) {
    const branches = this.props.branches;

    const branchInput = new RegExp(this.state.fullBranchInput, 'i');
    const branchCodeInput = new RegExp(this.state.codeBranchInput, 'i');

    return branchInput.test(branches)
      && branchCodeInput.test(branches)

  }


}

export default Codes
