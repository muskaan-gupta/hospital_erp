"use client";
import { useState } from 'react';
import DoctorTable from '../../../components/DoctorTable';
import Pagination from '../../../components/Pagination';
import ActionButtons from '../../../components/ActionButtons';

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 10;

  const doctorsData = [
    { id: 1, name: 'Manoj Kumar', experience: 10, phone: '333-444-7777', specialization: 'Dental', availability: 'Available' },
    { id: 2, name: 'Riya', experience: 6, phone: '3423-232-987', specialization: 'Ortho', availability: 'On Leave' },
    { id: 3, name: 'Paul', experience: 15, phone: '3423-132-987', specialization: 'General Physician', availability: 'Not Available' },
    { id: 4, name: 'Manoj Kumar', experience: 20, phone: '333-444-7777', specialization: 'ENT', availability: 'Available' },
    { id: 5, name: 'Riya', experience: 16, phone: '3423-232-987', specialization: 'General Physician', availability: 'On Leave' },
    { id: 6, name: 'Paul', experience: 12, phone: '3423-132-987', specialization: 'Ortho', availability: 'Not Available' },
    { id: 7, name: 'Manoj Kumar', experience: 19, phone: '333-444-7777', specialization: 'Neuro Surgeon', availability: 'Available' },
    { id: 8, name: 'Paul', experience: 10, phone: '3423-132-987', specialization: 'Dental', availability: 'Available' },
  ];

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-pink-500">Doctors List</h1>

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

      <DoctorTable doctors={currentDoctors} />

      <div className="mt-6 flex justify-between items-center">
        <div>
          <button className="bg-red-500 text-white p-2 rounded mr-2">Delete</button>
          <button className="bg-pink-500 text-white p-2 rounded">Edit</button>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredDoctors.length}
          itemsPerPage={doctorsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="mt-4">
        <ActionButtons />
      </div>
    </div>
  );
}
