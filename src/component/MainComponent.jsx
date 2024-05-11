import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {Dashboard,Attendence,Employees,Leaveboard, Payroll,Taskboard,} from "../pages";
import { Jumbotron } from "./Jumbotron";
import Employedata from "../pages/Employedata";

export const MainComponent = () => {
  const location = useLocation();
  let heading = "";

  switch (location.pathname) {
    case "/dashboard":
      heading = "Dashboard";
      break;
    case "/attendence":
      heading = "Attendence";
      break;
    case "/employees":
      heading = "Employees";
      break;
    case "/leaveboard":
      heading = "Leaveboard";
      break;
    case "/payroll":
      heading = "Payroll";
      break;
    case "/taskboard":
      heading = "Taskboard";
      break;
    case "/employdata":
      heading = "Employee Data";
      break;
    default:
      heading = "Setting";
  }


  return (
    <main>
      <Jumbotron heading={heading} />
      <Routes>
        <Route path="/"/>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/attendence" Component={Attendence} />
        <Route path="/employees" Component={Employees} />
        <Route path="/leaveboard" Component={Leaveboard} />
        <Route path="/payroll" Component={Payroll} />
        <Route path="/taskboard" Component={Taskboard} />
        <Route path="/employees/:id" Component={Employedata} />
      </Routes>
    </main>
  );
};
