import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  const header = "HDIP Computer Science - Sheila Modules table 2";
  const columnheader = ["Name", "No Lectures", "No Practicals"]
  const modules = ["ICT 2", "Full Stack Dev", "Devops"];
  const noLectures = ["1","2","3"];
  const noPracticals = ["1","2","3"];

  return (
    <>
      <h1> {header} </h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>{columnheader[0]}</th>
            <th>{columnheader[1]}</th>
            <th>{columnheader[2]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{modules[0]}</td>
            <td>{noLectures[1]}</td>
            <td>{noPracticals[2]}</td>
          </tr>
          <tr>
          <td>{modules[1]}</td>
            <td>{noLectures[0]}</td>
            <td>{noPracticals[1]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Demo;
