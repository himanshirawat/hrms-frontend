import React from "react";
import {Sidebar, Navbar, MainComponent} from "./component"
import {BrowserRouter as Router} from "react-router-dom";

export const App = () => {

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1">
          <Navbar />
          <div className="overflow-y-scroll h-screen">

          <MainComponent />
          </div>
        </div>
    </div>
    </Router>
    
  );
};

export default App;