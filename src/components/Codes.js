import React from 'react';

class Codes extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const branches = this.props.branches

    return (
      <div>
        {branches['Great Kills']}
      </div>
    )
  }


}

export default Codes
