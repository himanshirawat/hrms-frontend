import React, { useEffect, useState } from 'react'

export const Attendance = () => {

  // const [attendanceData, setAttendanceData] = useState([]);
  // const [searchDate, setSearchDate] = useState('');

  // useEffect(() => {
  //   fetch('your-backend-api-url')
  //     .then(response => response.json())
  //     .then(data => setAttendanceData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  // const filteredData = attendanceData.filter(entry => {
  //   if (!searchDate) return true;
  //   return entry.date.includes(searchDate);
  // });

  const [attendanceData] = useState([
      {
        name: 'john.doe',
        email: 'john.doe@example.com',
        clockIn: '2023-08-15 09:00:00',
        clockOut: '2023-08-15 17:30:00',
        status: 'Present',
        employeeId: 'JD001'
      },
      {
        name: 'jane.smith',
        email: 'jane.smith@example.com',
        clockIn: '2023-08-15 09:00:00',
        clockOut: '2023-08-15 17:30:00',
        status: 'Present',
        employeeId: 'JS002'
      },
      {
        name: 'david.jones',
        email: 'david.jones@example.com',
        clockIn: '2023-08-15 09:00:00',
        clockOut: '2023-08-15 17:30:00',
        status: 'Present',
        employeeId: 'DJ003'
      },
      {
        name: 'jane.smith',
        email: 'jane.smith@example.com',
        clockIn: '2023-08-15 09:00:00',
        clockOut: '2023-08-15 17:30:00',
        status: 'absent',
        employeeId: 'JS002'
      },
      {
        name: 'david.jones',
        email: 'david.jones@example.com',
        clockIn: '2023-08-15 09:00:00',
        clockOut: '2023-08-15 17:30:00',
        status: 'Present',
        employeeId: 'DJ003'
      },
      {
        name: 'jane.smith',
        email: 'jane.smith@example.com',
        clockIn: '2023-08-15 09:00:00',
        clockOut: '2023-08-15 17:30:00',
        status: 'absent',
        employeeId: 'JS002'
      },
      {
        name: 'david.jones',
        email: 'david.jones@example.com',
        clockIn: '2023-08-15 09:00:00',
        clockOut: '2023-08-15 17:30:00',
        status: 'Present',
        employeeId: 'DJ003'
      },
    ]);

  const calculateTotalHours = (clockIn, clockOut) => {
    if (!clockIn || !clockOut) return '';
  
    const startTime = new Date(clockIn);
    const endTime = new Date(clockOut);
    const timeDifference = endTime - startTime;
    const totalHours = timeDifference / (1000 * 60 * 60);
    return totalHours.toFixed(2);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Attendance</h2>

      <table className="w-full ">
        <thead>
          <tr>
          <th className="py-2 text-center">Employee ID</th>
            <th className="py-2 text-center">Name</th>
            <th className="py-2 text-center">Email</th>
            <th className="py-2 text-center">Clock In</th>
            <th className="py-2 text-center">Clock Out</th>
            <th className="py-2 text-center">Total Hours</th>
            <th className="py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={index}>
              <td className="py-2 text-center">{entry.employeeId}</td>
              <td className="py-2 text-center">{entry.name}</td>
              <td className="py-2 text-center">{entry.email}</td>
              <td className="py-2 text-center">{entry.clockIn}</td>
              <td className="py-2 text-center">{entry.clockOut}</td>
              <td className="py-2 text-center">{calculateTotalHours(entry.clockIn, entry.clockOut)}</td>
              <td className="py-2 text-center">{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
