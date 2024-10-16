"use client";
import { useState } from 'react';

export default function RoomAllotmentPage() {
  const [formData, setFormData] = useState({
    roomNumber: '',
    roomType: 'ICU',
    patientName: '',
    allotmentDate: '',
    dischargeDate: '',
    doctorName: '',
    isConfirmed: false,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, isConfirmed: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.isConfirmed) {
      setSuccessMessage('Successfully Done! Please check in Allotment list');
      setErrorMessage('');
    } else {
      setSuccessMessage('');
      setErrorMessage('Holy guacamole! You should check in on some of those fields below.');
    }
  };

  return (
    <div className="p-6 w-[80vw] text-black">
      <h1 className="text-3xl font-semibold text-pink-500">Add Room Allotment</h1>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm">Room Number</label>
          <input
            type="text"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="ICU">ICU</option>
            <option value="General">General</option>
            <option value="Private">Private</option>
          </select>
        </div>

        <div>
          <label className="block text-sm">Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Allotment Date</label>
          <input
            type="date"
            name="allotmentDate"
            value={formData.allotmentDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm">Discharge Date</label>
          <input
            type="date"
            name="dischargeDate"
            value={formData.dischargeDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Doctor Name</label>
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm flex items-center">
            <input
              type="checkbox"
              name="isConfirmed"
              checked={formData.isConfirmed}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Please Confirm
          </label>
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-pink-500 text-white p-2 rounded w-full"
          >
            Allot Room
          </button>
        </div>

        {successMessage && (
          <div className="col-span-2 mt-4 bg-green-100 text-green-700 p-2 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="col-span-2 mt-4 bg-yellow-100 text-yellow-700 p-2 rounded">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
