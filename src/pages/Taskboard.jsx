import React, { useState } from "react";
import { TitleCard } from "../component";

export const Taskboard = () => {
  const [taskData] = useState([
    {
      task: "Design UI Mockups",
      team: "Design",
      startDate: "2023-08-15",
      endDate: "2023-08-20",
    },
    {
      task: "Design UI Mockups",
      team: "Design",
      startDate: "2023-08-15",
      endDate: "2023-08-20",
    },
  ]);

  return (
    <div>
      <div className="font-semibold grid grid-cols-4 gap-4 m-4">
        <TitleCard title="Planned" />
        <TitleCard title="In Progress" />
        <TitleCard title="Completed" />
        <TitleCard title="All" />
      </div>

      <div className="p-4 m-4">
        <h2 className="text-xl font-semibold mb-4">Taskboard</h2>

        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Task</th>
              <th className="py-2">Team</th>
              <th className="py-2">Duration</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {taskData.map((entry, index) => (
              <tr key={index}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{entry.task}</td>
                <td className="py-2">{entry.team}</td>
                <td className="py-2">{`${entry.startDate} to ${entry.endDate}`}</td>
                <td className="py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 mr-1">
                    In Progress
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1  mr-1">
                    Planned
                  </button>
                  <button className="bg-green-500 text-white px-2 py-1">
                    Completed
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
