import ActionButtons from '../../../components/ActionButtons';

export default function AppointmentDetailsPage() {
  const appointment = {
    patientId: 'PT56',
    department: 'Dental',
    doctorName: 'Dr Kiran Sharma',
    appointmentDate: '16-nov-2018',
    timeSlot: '10AM-11AM',
    tokenNumber: '27',
    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  };

  return (
    <div className="p-6 text-black w-[80vw]">
      <h1 className="text-3xl font-semibold text-pink-500">Appointment Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded-lg w-[75vw]">
        <table className="min-w-full table-auto bg-white ">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-4 py-2 text-left">Field</th>
      <th className="px-4 py-2 text-left">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2"><strong>Patient ID</strong></td>
      <td className="border px-4 py-2">{appointment.patientId}</td>
    </tr>
    <tr>
      <td className="border px-4 py-2"><strong>Department</strong></td>
      <td className="border px-4 py-2">{appointment.department}</td>
    </tr>
    <tr>
      <td className="border px-4 py-2"><strong>Doctor Name</strong></td>
      <td className="border px-4 py-2">{appointment.doctorName}</td>
    </tr>
    <tr>
      <td className="border px-4 py-2"><strong>Appointment Date</strong></td>
      <td className="border px-4 py-2">{appointment.appointmentDate}</td>
    </tr>
    <tr>
      <td className="border px-4 py-2"><strong>Time Slot</strong></td>
      <td className="border px-4 py-2">{appointment.timeSlot}</td>
    </tr>
    <tr>
      <td className="border px-4 py-2"><strong>Token Number</strong></td>
      <td className="border px-4 py-2">{appointment.tokenNumber}</td>
    </tr>
    <tr>
      <td className="border px-4 py-2"><strong>Problem</strong></td>
      <td className="border px-4 py-2">{appointment.problem}</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>

   

      <div className="mt-4 flex space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Edit Appointment</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete Appointment</button>
      </div>
    </div>
  );
}
