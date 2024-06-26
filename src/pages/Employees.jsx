import React from "react";
import { ProfileCard } from "../component/ProfileCard";
import data from "../utils/employedata.json";


export const Employees = () => {
  return (
    <div>
      <div className="p-4">
        <div className="mb-4 ">
          <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
            All
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
            Teams
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md float-right">
            Add Person
          </button>
        </div>

        <div className="flex mb-4 justify-between mt-4">
          <div className="w-10/12 p-4 bg-gray-200 rounded-md">
            <h1 className="font-bold text-xl">Members</h1>
          </div>
          <div className="flex items-center ml-4 space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              <i class="fa-solid fa-table-cells-large"></i>
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              <i class="fa-solid fa-list"></i>
            </button>
          </div>
        </div>

        <div className="bg-gray-300 shadow-md rounded-lg grid grid-cols-3 m-8 p-4 gap-3">
          {data.map((entry, index) => {
            console.log(entry)
          return(
            <ProfileCard
              key={index}
              profilePicture="../assets/Ellipse 14.png"
              employee={entry}
            />
          )})}
        </div>
      </div>
    </div>
  );
};
