import React from 'react';

export const Navbar= () => {
  return (
    <nav className="bg-dark-purple text-white border-l-2 border-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-end">
        <div className="flex  items-center space-x-4">
          <i className="fas fa-home mr-8 "></i>
        </div>
        <div className= "font-semibold">John Doe</div>
        <img src="./src/assets/Ellipse 14.png" alt="Profile" className="w-12 h-12 rounded-full"/>
      </div>
    </nav>
  )
}
