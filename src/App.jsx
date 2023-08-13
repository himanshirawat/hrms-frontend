import React from "react";
import {Sidebar, Navbar, Jumbotron} from "./component"
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendence from "./pages/Attendence";
const App = () => {

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1">
          <Navbar />
          <Jumbotron />
          <main> 
            <Routes>
              <Route path='/' Component={Dashboard}/>
              <Route path="/attendence" Component={Attendence} />
            </Routes>
          </main>
        </div>
    </div>
    </Router>
    
  );
};
export default App;