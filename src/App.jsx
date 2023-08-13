import React from "react";
import {Sidebar, Navbar, Jumbotron} from "./component"
const App = () => {

  return (
    <div className="flex">
        <Sidebar />
      <div className="h-screen flex-1">
        <Navbar />
        <Jumbotron />
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default App;