import React from 'react';

class Codes extends React.component (){
  constructor(props){
    super(props);

  }


  render(){
    return (
      <div>
        {this.props.branches}
      </div>
    )
  }


}

export default Codes
