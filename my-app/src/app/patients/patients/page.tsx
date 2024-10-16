"use client";
import { useState } from 'react';
import PatientTable from '../../../components/PatientTable';
import Pagination from '../../../components/Pagination';
import ActionButtons from '../../../components/ActionButtons';

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 10;

  const patientsData = [
    { id: 1, name: 'Manoj Kumar', age: 30, phone: '333-444-7777', lastVisit: '12-03-2018', status: 'Completed' },
    { id: 2, name: 'Riya', age: 26, phone: '3423-232-987', lastVisit: '12-10-2018', status: 'Pending' },
    { id: 3, name: 'Paul', age: 46, phone: '3423-132-987', lastVisit: '45-10-2018', status: 'Cancelled' },
    { id: 4, name: 'Manoj Kumar', age: 30, phone: '333-444-7777', lastVisit: '12-03-2018', status: 'Completed' },
    { id: 5, name: 'Riya', age: 26, phone: '3423-232-987', lastVisit: '12-10-2018', status: 'Pending' },
    { id: 6, name: 'Paul', age: 46, phone: '3423-132-987', lastVisit: '45-10-2018', status: 'Cancelled' },
    { id: 7, name: 'Manoj Kumar', age: 30, phone: '333-444-7777', lastVisit: '12-03-2018', status: 'Completed' },
    { id: 8, name: 'Riya', age: 26, phone: '3423-232-987', lastVisit: '12-10-2018', status: 'Pending' },
    { id: 9, name: 'Paul', age: 46, phone: '3423-132-987', lastVisit: '45-10-2018', status: 'Cancelled' },
    { id: 10, name: 'Manoj Kumar', age: 30, phone: '333-444-7777', lastVisit: '12-03-2018', status: 'Completed' },
    { id: 11, name: 'Riya', age: 26, phone: '3423-232-987', lastVisit: '12-10-2018', status: 'Pending' },
    { id: 12, name: 'Paul', age: 46, phone: '3423-132-987', lastVisit: '45-10-2018', status: 'Cancelled' },
  ];

  const filteredPatients = patientsData.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);

  return (
    <div className="p-6 w-[80vw]">
      <h1 className="text-3xl font-semibold text-pink-500">Patients List</h1>
      
      <div className="mt-4 flex justify-between items-center text-black">
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

      <PatientTable patients={currentPatients} />

      <div className="mt-6 flex justify-between items-center">
        <div>
          <button className="bg-red-500 text-white p-2 rounded mr-2">Delete</button>
          <button className="bg-pink-500 text-white p-2 rounded">Edit</button>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredPatients.length}
          itemsPerPage={patientsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="mt-4">
        <ActionButtons />
      </div>
    </div>
  );
}
