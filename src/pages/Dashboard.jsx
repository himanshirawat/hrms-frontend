import React from 'react';
import { Card } from '../component';

export const Dashboard = () => {
  return (
    <div>
      
      <div className="text-white font-semibold grid grid-cols-3 gap-4 m-4">
        <Card title="Employees" content="23" color="bg-blue-600" size="text-5xl" 
           icon={<i className="fa-solid fa-users"></i>}/>
        <Card title="Tasks" content="13" color="bg-red-600"size="text-5xl"
            icon={<i className="fa-solid fa-note-sticky"></i>}/>
        <Card title="Leaves" content="10" color="bg-blue-400" size="text-5xl"
            icon={<i className="fa-solid fa-calendar-days"></i>} />
      </div>

      <div className="grid grid-cols-2 gap-4 m-4">
        <Card title="Total Employees" content="23"/>
        <Card title="Approved Leave/Tasks" content="13"/>
      </div>
        
    </div>
  )
}
