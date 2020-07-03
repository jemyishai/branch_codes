import React from 'react';

class Codes extends React.Component {

  render(){
    const branches = this.props.branches
    const branchAsProps = Object.getOwnPropertyNames(this.props.branches)

    return (
      <div>
         {branchAsProps.map((item)=><li key={item+1}>{item} : {branches[item]}</li>)}
      </div>
    )
  }


}

export default Codes
