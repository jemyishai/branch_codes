import React from "react";

///center and make % of width - 50% - input check
//table alignment with columns
//get rid of second input
//make a table

//Align Title
//tests
//deploy

let Input = (props) => (
  <div className="nypl-text-field">
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

export default Input;
