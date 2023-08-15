import React, { useEffect, useState } from "react";
import { TitleCard } from "../component/TitleCard";

export const Leaveboard = () => {
  // const [leaveRequests, setLeaveRequests] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/leaves")
  //     .then((response) => response.json())
  //     .then((data) => setLeaveRequests(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  const leaveRequests = [
    {
      name: 'John Doe',
      leaveType: 'Annual Leave',
      fromDate: '2023-08-15',
      toDate: '2023-08-20',
      days: 6,
      reason: 'Vacation',
      action: 'Approve / Reject',
    },
    {
      name: 'John Doe',
      leaveType: 'Annual Leave',
      fromDate: '2023-08-15',
      toDate: '2023-08-20',
      days: 6,
      reason: 'Vacation',
      action: 'Approve / Reject',
    },
    {
      name: 'John Doe',
      leaveType: 'Annual Leave',
      fromDate: '2023-08-15',
      toDate: '2023-08-20',
      days: 6,
      reason: 'Vacation',
      action: 'Approve / Reject',
    },
  ];

  return (
    <div>
      <div className="font-semibold grid grid-cols-4 gap-4 m-4">
        <TitleCard
          title="HR/Admin"
          content="23"
          photo={<img src="../src/assets/Ellipse 14.png" alt="profile"></img>}
        />
        <TitleCard
          title="Operation"
          content="13"
          photo={<img src="../src/assets/Ellipse 14.png" alt="profile"></img>}
        />
        <TitleCard
          title="Product"
          content="10"
          photo={<img src="../src/assets/Ellipse 14.png" alt="profile"></img>}
        />
        <TitleCard
          title="Marketing"
          content="10"
          photo={<img src="../src/assets/Ellipse 14.png" alt="profile"></img>}
        />
      </div>

      <div className="bg-gray-100 pd-8 m-8 rounded-lg shadow-md ">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-2xl font-bold m-4">Leave Request</h2>
          <button className="bg-blue-500 text-white rounded-lg m-4 px-4 py-2">
            View All
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-300 pd-8 m-4 mt-8 rounded-lg shadow-md">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Leave Type</th>
              <th className="py-2">From</th>
              <th className="py-2">To</th>
              <th className="py-2">Days</th>
              <th className="py-2">Reason</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request, index) => (
              <tr key={index}>
                <td className="py-2">{request.name}</td>
                <td className="py-2">{request.leaveType}</td>
                <td className="py-2">{request.fromDate}</td>
                <td className="py-2">{request.toDate}</td>
                <td className="py-2">{request.days}</td>
                <td className="py-2">{request.reason}</td>
                <td className="py-2">{request.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
