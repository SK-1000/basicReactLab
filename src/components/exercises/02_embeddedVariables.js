import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  const course = "Hdip Computing - Sheila Modules table based on solution.";
  const modules = [
    {
      name: "DevOps",
      noLectures: 9,
      noPracticals: 3
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 10,
      noPracticals: 2
    }
  ];
  return (
    <div>
      <h2>{course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{modules[0].name}</td>
            <td>{modules[0].noLectures}</td>
            <td>{modules[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[1].name}</td>
            <td>{modules[1].noLectures}</td>
            <td>{modules[1].noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
