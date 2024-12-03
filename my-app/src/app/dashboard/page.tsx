"use client"; // Required since we'll use state and event handlers

import StatsWidget from '../../components/StatsWidget';
import ChartCard from '../../components/ChartCard';
import RecentPatients from '../../components/RecentPatients';
import DoctorsAvailability from '@/components/DoctorsAvailability';
import ToDoTasks from '../../components/ToDoTasks';
import RecentPayments from '../../components/RecentPayments';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100  w-[90vw] ">
            <div className="w-full  bg-white shadow-md rounded-lg p-6">

      <h1 className="text-3xl text-black font-semibold">Dashboard</h1>
      
      {/* Statistics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <StatsWidget title="Patients" value="1,500" icon="🧑‍⚕️" />
        <StatsWidget title="Appointments" value="350" icon="📅" />
        <StatsWidget title="Doctors" value="45" icon="👨‍⚕️" />
        <StatsWidget title="Revenue" value="$12,000" icon="💵" />
      </div>

      {/* Appointment Overview & Recent Patients */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <ChartCard title="Appointments Overview" />
        <RecentPatients />
      </div>

      {/* Doctors Availability & To-Do Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <DoctorsAvailability />
        <ToDoTasks />
      </div>

      {/* Recent Payments */}
      <div className="mt-6">
        <RecentPayments />
      </div>
    </div>
    </div>
  );
}
