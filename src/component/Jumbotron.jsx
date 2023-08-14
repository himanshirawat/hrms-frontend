import React from "react";

export const Jumbotron = ({heading}) => {
  return (
    <div className="bg-gray-200 pd-8 m-4 mt-8 h-16 rounded-lg shadow-md flex justify-between items-center">
      <div className="pd-4 m-4">
        <h2 className="text-3xl font-semibold">{heading}</h2>
      </div>
      <div  className="pd-4 m-4">
        <p className="font-medium hidden md:flex">
          <span>
          <i className="fas fa-home mr-2"></i>Home <i className="fa-solid fa-greater-than fa-xs ml-2 mr-2"></i>
          </span>
          <span>{heading}</span>
        </p>
      </div>
    </div>
  )
}
