import React from "react";
import { Link } from "react-router-dom";

export const ProfileCard = ({ profilePicture, employee }) => {
  return (
    
    <div className="p-4 bg-white shadow-md rounded-lg">
      <>
        <div  className="flex items-center mb-4">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="hidden md:block">
            <p className="font-semibold">{employee.name}</p>
            <p className="text-gray-500">{employee.designation}</p>
          </div>
        </div>
        <Link
          to={`/employees/${employee.employeeId}`}
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Profile
        </Link>
      </>
    </div>
  );
};
