import React, { useState } from "react";
import data from "../utils/employedata.json";
import { useParams } from "react-router-dom";

export default function Employedata() {
  const { id } = useParams();
  const getLeaveCount = (attendance, leaveType) => {
    return attendance.filter((record) => record.leaveType === leaveType).length;
  };

  const calculateTotalHours = (clockIn, clockOut) => {
    if (!clockIn || !clockOut) return "";

    const [clockInHour, clockInMinute, clockInSecond] = clockIn
      .split(":")
      .map(Number);
    const [clockOutHour, clockOutMinute, clockOutSecond] = clockOut
      .split(":")
      .map(Number);

    const totalSeconds =
      clockOutHour * 3600 +
      clockOutMinute * 60 +
      clockOutSecond -
      (clockInHour * 3600 + clockInMinute * 60 + clockInSecond);

    const totalHours = totalSeconds / 3600;
    return totalHours.toFixed(2);
  };

  return (
    <div>
      <div>
        <div className="p-4">
          {data.map((entry, index) => (
            <>
            {entry.employeeId == id && (
              <div>
                <div key={index} className="mb-4 ">
                  <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
                    {" "}
                    {entry.name}
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
                    {entry.employeeId}
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
                    {" "}
                    {entry.designation}
                  </button>

                  {/* <button className="bg-red-500 text-white px-4 py-2 rounded-md float-right">Add Person</button> */}
                </div>

                <div className="flex mb-4 justify-between mt-4">
                  <div className="w-10/12 p-2 bg-gray-200 rounded-md flex gap-8">
                    <h1 className="font-bold text-[12px]">
                      Casual Leave{" "}
                      <p className="text-base text-center">
                        {getLeaveCount(entry.attendance, "Casual Leave")}
                      </p>
                    </h1>
                    <h1 className="font-bold text-[12px]">
                      Paid Leave
                      <p className="text-base text-center">
                        {getLeaveCount(entry.attendance, "Paid Leave")}
                      </p>
                    </h1>

                    <h1 className="font-bold text-[12px]">
                      Earn leave{" "}
                      <p className="text-base text-center">
                        {" "}
                        {getLeaveCount(entry.attendance, "Earned Leave")}
                      </p>
                    </h1>
                  </div>
                  <div className="flex items-center ml-4 space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                      <i className="fa-solid fa-table-cells-large"></i>
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                      <i className="fa-solid fa-list"></i>
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Attendance</h2>

                  <table className="w-full text-center">
                    <thead>
                      <tr>
                        <th className="py-2">Date</th>
                        <th className="py-2">Clock In</th>
                        <th className="py-2">Clock Out</th>
                        <th className="py-2">Total Hours</th>
                        <th className="py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entry.attendance.map((value, index) => (
                        <tr key={index}>
                          <td className="py-2 ">{value.date}</td>
                          <td className="py-2">{value.clockIn}</td>
                          <td className="py-2">{value.clockOut}</td>
                          <td className="py-2">
                            {calculateTotalHours(value.clockIn, value.clockOut)}
                          </td>
                          <td className="py-2">{value.leaveType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
