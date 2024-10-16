// app/payments/page.tsx
"use client"; // Required since we'll use state and event handlers

import PaymentPage from '@/components/payment';
import { useState } from 'react';

interface Payment {
  id: number;
  patientName: string;
  amount: number;
  date: string;
  status: string;
}

const PaymentsPage = () => {
  // Mock payment data
  const [payments] = useState<Payment[]>([
    { id: 101, patientName: 'John Doe', amount: 250, date: '2024-10-01', status: 'Completed' },
    { id: 102, patientName: 'Jane Smith', amount: 500, date: '2024-10-02', status: 'Pending' },
    { id: 103, patientName: 'Sam Wilson', amount: 750, date: '2024-10-03', status: 'Failed' },
    { id: 104, patientName: 'Mary Johnson', amount: 300, date: '2024-10-04', status: 'Completed' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Filter payments based on search term and status filter
  const filteredPayments = payments.filter(
    (payment) =>
      (payment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.id.toString().includes(searchTerm)) &&
      (statusFilter === '' || payment.status === statusFilter)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-[85vw]">
      <h1 className="text-2xl font-bold mb-6">Payments</h1>
<PaymentPage />
      {/* Search and Filter Inputs */}
      <div className="mb-6 flex flex-col md:flex-row md:space-x-6">
        {/* Search by payment ID or patient name */}
        <input
          type="text"
          placeholder="Search by payment ID or patient name"
          className="border border-gray-300 rounded-md p-2 w-full mb-4 md:mb-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter by status */}
        <select
          className="border border-gray-300 rounded-md p-2 w-full"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left">Payment ID</th>
              <th className="py-3 px-6 text-left">Patient Name</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.length > 0 ? (
              filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-t">
                  <td className="py-3 px-6">{payment.id}</td>
                  <td className="py-3 px-6">{payment.patientName}</td>
                  <td className="py-3 px-6">${payment.amount}</td>
                  <td className="py-3 px-6">{payment.date}</td>
                  <td className={`py-3 px-6 font-semibold ${payment.status === 'Completed' ? 'text-green-600' : payment.status === 'Failed' ? 'text-red-600' : 'text-yellow-600'}`}>
                    {payment.status}
                  </td>
                  <td className="py-3 px-6">
                    <button className="bg-teal-500 text-white px-3 py-1 rounded-md hover:bg-teal-600 mr-2">
                      View
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                      Refund
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsPage;
