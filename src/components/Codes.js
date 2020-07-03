import React from 'react';

class Codes extends React.Component {
  constructor (props){
    super(props)

    this.state = {
      fullBranchInput : '',
      codeBranchInput: ''
    }
  }

  render(){
    const branches = this.props.branches
    const branchAsProps = Object.getOwnPropertyNames(branches)

    return (
      <div>
      <input
      type="text"
      focus placeholder="Enter Branch ie..'Bronx Library Center'"
      className=""
      onChange={evt => this.setState({ fullBranchInput: evt.target.value })}
      /> |
      <input
      type="text"
      focus placeholder="Enter Branch Code ie..'BLC'"
      className=""
      onChange={evt => this.setState({ codeBranchInput: evt.target.value })}
      />
         {branchAsProps.map((item)=><li key={item+1}>{item} : {branches[item]}</li>)}
      </div>
    )
  }


}

export default Codes
