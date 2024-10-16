"use client"
import { useState } from 'react';

export default function RoomAllotmentListPage() {
  const [allotments] = useState([
    {
      room: 10,
      roomType: 'Icu',
      patientName: 'Manoj Kumar',
      allotmentDate: '12-11-2018',
      dischargeDate: '16-11-2018',
      doctorName: 'Dr Daniel Smith',
      status: 'Available',
    },
    {
      room: 4,
      roomType: 'Ac Room',
      patientName: 'Susan',
      allotmentDate: '10-11-2018',
      dischargeDate: '-',
      doctorName: 'Dr Daniel Smith',
      status: 'Not Discharged',
    },
    {
      room: 2,
      roomType: 'Ac Room',
      patientName: '-',
      allotmentDate: '-',
      dischargeDate: '-',
      doctorName: '-',
      status: 'Not Alloted',
    },
    {
      room: 3,
      roomType: 'General',
      patientName: 'Raj Kiran',
      allotmentDate: '10-11-2018',
      dischargeDate: '12-11-2018',
      doctorName: 'Dr Wilsson',
      status: 'Available',
    },
    // Repeat or add more allotments here
  ]);

  return (
    <div className="p-6 w-[80vw] text-black">
      <h1 className="text-3xl font-semibold text-pink-500">Allotments List</h1>

      <table className="min-w-full bg-white border mt-6">
        <thead>
          <tr>
            <th className="p-2 border">Room</th>
            <th className="p-2 border">Room Type</th>
            <th className="p-2 border">Patient Name</th>
            <th className="p-2 border">Allotment Date</th>
            <th className="p-2 border">Discharge Date</th>
            <th className="p-2 border">Doctor Name</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {allotments.map((allotment, index) => (
            <tr key={index}>
              <td className="p-2 border">{allotment.room}</td>
              <td className="p-2 border">{allotment.roomType}</td>
              <td className="p-2 border">{allotment.patientName}</td>
              <td className="p-2 border">{allotment.allotmentDate}</td>
              <td className="p-2 border">{allotment.dischargeDate}</td>
              <td className="p-2 border">{allotment.doctorName}</td>
              <td className={`p-2 border ${allotment.status === 'Available' ? 'text-green-600' : allotment.status === 'Not Discharged' ? 'text-red-600' : 'text-yellow-600'}`}>
                {allotment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex items-center space-x-2">
        <button className="bg-red-500 text-white px-4 py-2 rounded">DELETE</button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded">EDIT</button>
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">csv</button>
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">print</button>
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">PDF</button>
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Excel</button>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p>Showing 1 to 10 of 12 entries</p>
        <div className="flex space-x-2">
          <button className="px-2 py-1 border rounded">Previous</button>
          <button className="px-2 py-1 bg-pink-500 text-white rounded">1</button>
          <button className="px-2 py-1 border rounded">2</button>
          <button className="px-2 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
