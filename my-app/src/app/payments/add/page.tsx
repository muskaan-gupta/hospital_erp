"use client";
import { useState } from 'react';
import FormAlert from '../../../components/FormAlert';
import DynamicServiceFields from '../../../components/DynamicServiceFields';

export default function AddPaymentPage() {
  const [formData, setFormData] = useState({
    patientId: '',
    patientName: '',
    department: 'Neuro',
    doctorName: '',
    admissionDate: '',
    dischargeDate: '',
    services: [{ name: '', cost: '' }],
    discount: '',
    advancePaid: '',
    paymentType: 'Check',
    cardCheckNo: '',
    confirm: false,
  });

  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirm) {
      setAlert({ type: 'error', message: 'Please confirm to submit.' });
    } else {
      setAlert({ type: 'success', message: 'Successfully Done! Payment added.' });
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
      <h1 className="text-3xl font-semibold text-pink-500">Add Payment</h1>

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
            <label className="block text-sm">Patient Name</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div>
            <label className="block text-sm">Doctor Name</label>
            <select
              className="w-full p-2 border rounded"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              required
            >
              <option value="">Select Doctor</option>
              <option value="Dr Kiran Sharma">Dr Kiran Sharma</option>
              <option value="Dr Manoj Kumar">Dr Manoj Kumar</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm">Admission Date</label>
            <input
              className="w-full p-2 border rounded"
              type="date"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm">Discharge Date</label>
            <input
              className="w-full p-2 border rounded"
              type="date"
              name="dischargeDate"
              value={formData.dischargeDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Services</h2>
          <DynamicServiceFields
            services={formData.services}
            setFormData={setFormData}
            formData={formData}
          />
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Payment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm">Discount (%)</label>
              <input
                className="w-full p-2 border rounded"
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm">Advance Paid</label>
              <input
                className="w-full p-2 border rounded"
                type="number"
                name="advancePaid"
                value={formData.advancePaid}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm">Payment Type</label>
              <select
                className="w-full p-2 border rounded"
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                required
              >
                <option value="Check">Check</option>
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm">Card/Check No</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="cardCheckNo"
              value={formData.cardCheckNo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            name="confirm"
            checked={formData.confirm}
            onChange={handleChange}
          />
          <span className="ml-2 text-sm">Please Confirm</span>
        </div>

        <button className="bg-pink-500 text-white p-2 rounded mt-4" type="submit">
          Submit
        </button>
      </form>

      {alert && <FormAlert type={alert.type} message={alert.message} />}
    </div>
  );
}
