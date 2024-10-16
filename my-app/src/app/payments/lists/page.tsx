"use client"
import { useState } from 'react';
import PaymentTable from '../../../components/PaymentTable';
import Pagination from '../../../components/Pagination';
import ActionButtons from '../../../components/ActionButtons';

export default function PaymentsListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const paymentsPerPage = 10;

  const paymentsData = [
    { patientName: 'Manoj Kumar', doctorName: 'Daniel Smith', service: 'X-ray', charges: '$500', discount: '5', status: 'completed' },
    { patientName: 'Riya', doctorName: 'Daniel Smith', service: 'ECG', charges: '$120', discount: '10', status: 'completed' },
    { patientName: 'Susan', doctorName: 'Daniel Smith', service: 'Dental', charges: '$190', discount: '8', status: 'Pending' },
    { patientName: 'Manoj Kumar', doctorName: 'Daniel Smith', service: 'X-ray', charges: '$500', discount: '5', status: 'cancelled' },
    // Add more data as necessary
  ];

  const filteredPayments = paymentsData.filter((payment) =>
    payment.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = filteredPayments.slice(indexOfFirstPayment, indexOfLastPayment);

  return (
    <div className="p-6 w-[80vw] text-black">
      <h1 className="text-3xl font-semibold text-pink-500">Payments List</h1>

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

      <PaymentTable payments={currentPayments} />

      <div className="mt-6 flex justify-between items-center">
        <div>
          <button className="bg-red-500 text-white p-2 rounded mr-2">Delete</button>
          <button className="bg-pink-500 text-white p-2 rounded">Edit</button>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredPayments.length}
          itemsPerPage={paymentsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="mt-4">
        <ActionButtons />
      </div>
    </div>
  );
}
