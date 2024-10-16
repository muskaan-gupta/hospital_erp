"use client";
import { useState } from 'react';
import AppointmentTable from '../../../components/AppointmentTable';
import Pagination from '../../../components/Pagination';
import ActionButtons from '../../../components/ActionButtons';

export default function AppointmentsListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 10;

  const appointmentsData = [
    { id: 'AP872', patientId: 'P12Y', token: '58', doctorName: 'Dr Manoj', problem: 'Small knee fracture', status: 'Active' },
    { id: 'AP8W72', patientId: 'P42Y', token: '5', doctorName: 'Dr Daniel', problem: 'Viral Fever', status: 'Active' },
    { id: 'AP873', patientId: 'P12G', token: '8', doctorName: 'Dr Manoj', problem: '-', status: 'Pending' },
    { id: 'APY72', patientId: 'P1DY', token: '18', doctorName: 'Dr Susan', problem: 'Chest pain', status: 'Active' },
    // ... more data can be added
  ];

  const filteredAppointments = appointmentsData.filter((appointment) =>
    appointment.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-pink-500">Appointments List</h1>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <label>Show</label>
          <select className="ml-2 p-1 border rounded">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      <AppointmentTable appointments={currentAppointments} />

      <div className="mt-6 flex justify-between items-center">
        <div>
          <button className="bg-red-500 text-white p-2 rounded mr-2">Delete</button>
          <button className="bg-pink-500 text-white p-2 rounded">Edit</button>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredAppointments.length}
          itemsPerPage={appointmentsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="mt-4">
      <div className="flex space-x-1">
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">CSV</button>
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Print</button>
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">PDF</button>
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Excel</button>
  </div>
      </div>
    </div>
  );
}
