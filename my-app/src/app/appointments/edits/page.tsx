"use client";
import { useState } from 'react';
import FormAlert from '../../../components/FormAlert';

export default function EditAppointmentPage() {
  const [formData, setFormData] = useState({
    patientId: 'P654T',
    doctorName: 'Dr Kiran Sharma',
    timeSlot: '4PM-5PM',
    problem: 'Lorem ipsum dolor sit amet...',
    department: 'Ortho',
    appointmentDate: '12-11-2018',
    tokenNumber: '58',
    confirm: false,
  });

  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirm) {
      setAlert({ type: 'error', message: 'Please confirm to submit.' });
    } else {
      setAlert({ type: 'success', message: 'Successfully Updated! Appointment updated.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="p-6 w-[80vw] text-black">
      <h1 className="text-3xl font-semibold text-pink-500">Edit Appointment</h1>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm">Patient ID</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm">Department</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm">Doctor Name</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm">Appointment Date</label>
            <input
              className="w-full p-2 border rounded"
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm">Time Slot</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm">Token Number (Auto Generated)</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="tokenNumber"
              value={formData.tokenNumber}
              readOnly
            />
          </div>
        </div>

        <div>
          <label className="block text-sm">Problem</label>
          <textarea
            className="w-full p-2 border rounded"
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="confirm"
            checked={formData.confirm}
            onChange={handleChange}
          />
          <span className="ml-2 text-sm">Please Confirm</span>
        </div>

        <button className="bg-pink-500 text-white p-2 rounded" type="submit">
          Update
        </button>
      </form>

      {alert && <FormAlert type={alert.type} message={alert.message} />}
    </div>
  );
}
