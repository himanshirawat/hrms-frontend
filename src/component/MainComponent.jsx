import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {Dashboard,Attendence,Employees,Leaveboard, Payroll,Taskboard,} from "../pages";
import { Jumbotron } from "./Jumbotron";

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
      </Routes>
    </main>
  );
};
