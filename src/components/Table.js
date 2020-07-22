import React from "react";

let Table = (props) => {
  let filtering = props.filter;
  let branchCodes = props.branchInfo;
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
            <tr>
              <td key={object.branch}>{object.branch}</td>
              <td key={object.code}>{object.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
