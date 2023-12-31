import { useState } from "react";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Employees", src: "User" },
    { title: "Leaveboard", src: "Chat",gap: true },
    { title: "Attendence ", src: "Calendar" },
    { title: "Taskboard", src: "Chart" },
    { title: "Payroll ", src: "Folder" },
    { title: "Setting", src: "Setting",gap: true },
  ];

  return (
      <div className={` ${ open ? "w-72" : "w-20 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img src="./src/assets/logo.png" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/>
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
            HR Management
          </h1>
        </div>
       
        <div className="flex items-center mb-4 mt-4">
            <img src="./src/assets/Ellipse 14.png" alt="Profile" className="w-16 h-16 rounded-xl mr-4"/>
            <div className={`text-white ${!open && "scale-0"}`}>
                <p className=" text-lg">John Doe</p>
                <p className="text-sm ">Admin</p>
            </div>
        </div>


        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            > 
            <Link  to={`/${Menu.title.toLowerCase()}`} className="flex">
              <img src={`./src/assets/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
            </Link>
            </li>
          ))}
        </ul>
      </div>
  );
};