import React from "react";

let Table = ({branchInfo:branchCodes, filter:filtering}) => {
  return (
    <div>
      <table className="nypl-basic-table">
        <thead>
          <tr>
            <th scope="col">Branch</th>
            <th scope="col">Code</th>
          </tr>
        </thead>
        <tbody>
          {branchCodes.filter(filtering).map((object) => (
            <tr key={object.branch +1}>
              <td >{object.branch}</td>
              <td >{object.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
