import React, { useState } from "react";
import { TitleCard } from "../component";

export const Payroll = () => {
  const [payrollData] = useState([
    {
      name: "Alice Johnson",
      team: "Development",
      role: "Software Engineer",
      salary: 60000,
    },
    {
      name: "Alice Johnson",
      team: "Development",
      role: "Software Engineer",
      salary: 60000,
    },
  ]);

  return (
    <div className="p-4">
      <div className="mb-4 ">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
          Salaries
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
          PaySlip
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md float-right">
          {" "}
          + Add
        </button>
      </div>

      <div className="font-semibold grid grid-cols-4 gap-4 m-4">
        <TitleCard title="HR/Admin" />
        <TitleCard title="Operation" />
        <TitleCard title="Product" />
        <TitleCard title="Marketing" />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Employee's Salary</h2>

        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Team</th>
              <th className="py-2">Role</th>
              <th className="py-2">Salary</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((entry, index) => (
              <tr key={index}>
                <td className="py-2">{entry.name}</td>
                <td className="py-2">{entry.team}</td>
                <td className="py-2">{entry.role}</td>
                <td className="py-2">{entry.salary}</td>
                <td className="py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 mr-1">
                  <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1">
                  <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
