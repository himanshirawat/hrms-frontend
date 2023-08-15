import React, { useEffect, useState } from 'react'

export const Attendence = () => {

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
      name: 'test 1',
      clockIn: '2023-08-15 09:00:00',
      clockOut: '2023-08-15 17:30:00',
      status: 'Present',
    },
    {
      name: 'test2',
      clockIn: '2023-08-15 09:00:00',
      clockOut: '2023-08-15 17:30:00',
      status: 'Present',
    },
    {
      name: 'test 3',
      clockIn: '2023-08-15 09:00:00',
      clockOut: '2023-08-15 17:30:00',
      status: 'Present',
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

      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Clock In</th>
            <th className="py-2">Clock Out</th>
            <th className="py-2">Total Hours</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={index}>
              <td className="py-2">{entry.name}</td>
              <td className="py-2">{entry.clockIn}</td>
              <td className="py-2">{entry.clockOut}</td>
              <td className="py-2">{calculateTotalHours(entry.clockIn, entry.clockOut)}</td>
              <td className="py-2">{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
