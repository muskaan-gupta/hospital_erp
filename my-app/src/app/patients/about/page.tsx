"use client";
import PatientDetailsCard from '../../../components/PatientDetailsCard';
import PatientVisitsTable from '../../../components/PatientVisitsTable';
import ActionButtons from '../../../components/ActionButtons';
import PatientPaymentTransactions from '@/components/PatientPaymentTransactions';


export default function PatientDetailsPage({ params }: { params: { id: string } }) {
  const patient = {
    name: 'Daniel Smith',
    dob: '26-10-1989',
    gender: 'Male',
    address: 'Koramangala, Bangalore, India',
    phone: '+91 11111 11111',
    email: 'your@email.com',
  };
  const visits = [
    { doctor: 'Manoj Kumar', cost: '$30', date: '12-03-2018', status: 'Rescheduled' },
    { doctor: 'Riya', cost: '$26', date: '12-10-2018', status: 'Operation' },
    { doctor: 'Paul', cost: '$46', date: '45-10-2018', status: 'Fever' },
    { doctor: 'Manoj Kumar', cost: '$30', date: '12-03-2018', status: 'Ortho' },
    { doctor: 'Riya', cost: '$26', date: '12-10-2018', status: 'General Check-up' },
    { doctor: 'Paul', cost: '$46', date: '45-10-2018', status: 'Injury' },
    { doctor: 'Dr. Anita', cost: '$50', date: '11-09-2022', status: 'Follow-up' },
    { doctor: 'Dr. Raj', cost: '$100', date: '22-07-2023', status: 'Consultation' },
    { doctor: 'Dr. Meera', cost: '$75', date: '08-11-2023', status: 'Surgery' },
    { doctor: 'Dr. Mohan', cost: '$40', date: '05-02-2024', status: 'Follow-up' },
    { doctor: 'Dr. Divya', cost: '$30', date: '20-06-2024', status: 'General Check-up' },
    { doctor: 'Dr. Arjun', cost: '$60', date: '15-07-2024', status: 'Consultation' },
  ];
  const transactions = [
    { date: '12-03-2018', cost: '$300', discount: '15%', paymentType: 'Check', invoice: 'Invoice', status: 'Pending' },
    { date: '12-03-2018', cost: '$130', discount: '5%', paymentType: 'Credit Card', invoice: 'Invoice', status: 'Completed' },
    { date: '12-03-2018', cost: '$30', discount: '5%', paymentType: 'Credit Card', invoice: 'Invoice', status: 'Cancelled' },
    { date: '12-03-2018', cost: '$30', discount: '5%', paymentType: 'Cash', invoice: 'Invoice', status: 'Completed' },
    { date: '12-03-2018', cost: '$30', discount: '5%', paymentType: 'Credit Card', invoice: 'Invoice', status: 'Completed' },
    { date: '12-03-2018', cost: '$30', discount: '5%', paymentType: 'Insurance', invoice: 'Invoice', status: 'Completed' },
    { date: '12-03-2018', cost: '$30', discount: '5%', paymentType: 'Credit Card', invoice: 'Invoice', status: 'Completed' },
  ];


  return (
    <div className="p-6 w-[80vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PatientDetailsCard patient={patient} />
        <PatientVisitsTable visits={visits} />
      </div>
      <div className="p-6">
      <h1 className="text-3xl font-semibold text-pink-500">Patient Payment Transactions</h1>
      <PatientPaymentTransactions transactions={transactions} />
    </div>
    </div>
  );
}
