// app/components/Sidebar.tsx
"use client";
import { useState } from 'react';
import { HomeIcon, UserIcon, CalendarIcon, DocumentReportIcon, CogIcon, ChevronDownIcon, ChevronUpIcon, CurrencyRupeeIcon,KeyIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-64 h-[100vh] bg-gray-800 text-white pt-24 fixed mt-12">
     
      <ul className='text-xl'>
        <li>
          <a href="/" className="flex items-center py-2 hover:bg-gray-700 px-4 rounded">
            <HomeIcon className="h-5 w-5 mr-2" /> Dashboard
          </a>
        </li>

        <li>
          <div className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-700 px-4 rounded" onClick={() => toggleDropdown('patients')}>
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 mr-2" /> Patients
            </div>
            {openMenu === 'patients' ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </div>
          {openMenu === 'patients' && (
            <ul className="pl-6">
              <li><a href="/patients/patients" className="block py-2 hover:bg-gray-700 rounded">All Patients</a></li>
              <li><a href="/patients/add/" className="block py-2 hover:bg-gray-700 rounded">Add Patient</a></li>
              <li><a href="/patients/about/" className="block py-2 hover:bg-gray-700 rounded">Patient Details</a></li>
              <li><a href="/patients/details/" className="block py-2 hover:bg-gray-700 rounded">Edit Patient</a></li>

            </ul>
          )}
        </li>
        <li>
          <div className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-700 px-4 rounded" onClick={() => toggleDropdown('doctors')}>
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 mr-2" /> Doctors
            </div>
            {openMenu === 'doctors' ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </div>
          {openMenu === 'doctors' && (
            <ul className="pl-6">
              <li><a href="/doctors/lists" className="block py-2 hover:bg-gray-700 rounded">All Doctors</a></li>
              <li><a href="/doctors/add" className="block py-2 hover:bg-gray-700 rounded">Add Doctors</a></li>
              <li><a href="/doctors/details" className="block py-2 hover:bg-gray-700 rounded">Doctors Details </a></li>
              <li><a href="/doctors/edits" className="block py-2 hover:bg-gray-700 rounded">Edit Doctors</a></li>

            </ul>
          )}
        </li>

        <li>
          <div className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-700 px-4 rounded" onClick={() => toggleDropdown('appointments')}>
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" /> Appointments
            </div>
            {openMenu === 'appointments' ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </div>
          {openMenu === 'appointments' && (
            <ul className="pl-6">
              <li><a href="/appointments/views" className="block py-2 hover:bg-gray-700 rounded">View Appointments</a></li>
              <li><a href="/appointments/schedules" className="block py-2 hover:bg-gray-700 rounded">Schedule Appointment</a></li>
              <li><a href="/appointments/lists" className="block py-2 hover:bg-gray-700 rounded">All Appointment</a></li>
              <li><a href="/appointments/edits" className="block py-2 hover:bg-gray-700 rounded">Edit Appointment</a></li>
            </ul>
          )}
        </li>

        <li>
          <div className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-700 px-4 rounded" onClick={() => toggleDropdown('payments')}>
            <div className="flex items-center">
              <CurrencyRupeeIcon className="h-5 w-5 mr-2" /> Payments
            </div>
            {openMenu === 'payments' ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </div>
          {openMenu === 'payments' && (
            <ul className="pl-6">
              <li><a href="/payments/add" className="block py-2 hover:bg-gray-700 rounded">Add Payments</a></li>
              <li><a href="/payments/lists" className="block py-2 hover:bg-gray-700 rounded">All Payment</a></li>
              <li><a href="/payments/invoice" className="block py-2 hover:bg-gray-700 rounded">Payment Invoice</a></li>

            </ul>
          )}
        </li>
        <li>
          <div className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-700 px-4 rounded" onClick={() => toggleDropdown('room_allotments')}>
            <div className="flex items-center">
              <KeyIcon className="h-5 w-5 mr-2" /> Room Allotment
            </div>
            {openMenu === 'room_allotments' ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </div>
          {openMenu === 'room_allotments' && (
            <ul className="pl-6">
              <li><a href="/room/alotments" className="block py-2 hover:bg-gray-700 rounded">Add Room Allotment</a></li>
              <li><a href="/room/lists" className="block py-2 hover:bg-gray-700 rounded">All Room</a></li>
              <li><a href="/room/edit" className="block py-2 hover:bg-gray-700 rounded">Edit Room Allotment</a></li>

            </ul>
          )}
        </li>

        <li>
          <div className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-700 px-4 rounded" onClick={() => toggleDropdown('other_pages')}>
            <div className="flex items-center">
              <KeyIcon className="h-5 w-5 mr-2" />Other Pages
            </div>
            {openMenu === 'other_pages' ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </div>
          {openMenu === 'other_pages' && (
            <ul className="pl-6">
              <li><a href="/login/" className="block py-2 hover:bg-gray-700 rounded">Login</a></li>
              <li><a href="/signup/" className="block py-2 hover:bg-gray-700 rounded">Sign Up</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-700 rounded">404</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-700 rounded">Blank Page</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-700 rounded">Pricing</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-700 rounded">FAQ</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-700 rounded">Invoice</a></li>

            </ul>
          )}
        </li>

        <li>
          <div className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-700 px-4 rounded" onClick={() => toggleDropdown('reports')}>
            <div className="flex items-center">
              <DocumentReportIcon className="h-5 w-5 mr-2" /> Reports
            </div>
            {openMenu === 'reports' ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </div>
          {openMenu === 'reports' && (
            <ul className="pl-6">
              <li><a href="#" className="block py-2 hover:bg-gray-700 rounded">Medical Reports</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-700 rounded">Lab Results</a></li>
            </ul>
          )}
        </li>

        <li>
          <div className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-700 px-4 rounded" onClick={() => toggleDropdown('settings')}>
            <div className="flex items-center">
              <CogIcon className="h-5 w-5 mr-2" /> Settings
            </div>
            {openMenu === 'settings' ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </div>
          {openMenu === 'settings' && (
            <ul className="pl-6">
              <li><a href="#" className="block py-2 hover:bg-gray-700 rounded">Profile Settings</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-700 rounded">System Settings</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
