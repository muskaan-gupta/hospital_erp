import DoctorDetailsCard from '../../../components/DoctorDetailsCard';
import ActionButtons from '../../../components/ActionButtons';
import DoctorActivityTable from '../../../components/DoctorActivityTable';

export default function DoctorDetailsPage({ params }: { params: { id: string } }) {
  const doctor = {
    name: 'Dr. Daniel Smith',
    specialization: 'General Physician',
    experience: '14 Years',
    gender: 'Male',
    address: 'Koramangala, Bangalore, India',
    phone: '+91 11111 11111',
    dob: '26-10-1989',
    email: 'your@email.com',
    image: '/images/doctor.jpg', // Add your image path here
  };
  const activities = [
    { patient: 'Manoj Kumar', condition: 'Viral fever', visitDate: '12-03-2018', status: 'Condition is good' },
    { patient: 'Riya', condition: 'Hand Fracture', visitDate: '12-10-2018', status: 'Small Operation' },
    { patient: 'Paul', condition: 'Dengue', visitDate: '15-10-2018', status: 'Admitted in General Ward' },
    { patient: 'Manoj Kumar', condition: 'Malaria', visitDate: '12-03-2018', status: 'Condition is good' },
    { patient: 'Manoj Kumar', condition: 'Viral fever', visitDate: '12-03-2018', status: 'Condition is good' },
    { patient: 'Riya', condition: 'Hand Fracture', visitDate: '12-10-2018', status: 'Small Operation' },
    { patient: 'Paul', condition: 'Dengue', visitDate: '15-10-2018', status: 'Admitted in General Ward' },
    { patient: 'Manoj Kumar', condition: 'Malaria', visitDate: '12-03-2018', status: 'Condition is good' },
  ];

  return (
    <div className="p-6 w-[80vw] text-black">
      <h1 className="text-3xl font-semibold text-pink-500">Doctor Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <DoctorDetailsCard doctor={doctor} />
        <div className="bg-white p-4 shadow rounded-lg">
          <ul className="space-y-2">
            <li><strong>Specialization:</strong> {doctor.specialization}</li>
            <li><strong>Experience:</strong> {doctor.experience}</li>
            <li><strong>Gender:</strong> {doctor.gender}</li>
            <li><strong>Address:</strong> {doctor.address}</li>
            <li><strong>Phone:</strong> {doctor.phone}</li>
            <li><strong>Date Of Birth:</strong> {doctor.dob}</li>
            <li><strong>Email:</strong> {doctor.email}</li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <ActionButtons />
      </div>
      <div className="p-6">
      <h1 className="text-3xl font-semibold text-pink-500">Doctor Activity</h1>
      <DoctorActivityTable activities={activities} />
      <div className="mt-4">
      <div className="flex space-x-1">
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">CSV</button>
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Print</button>
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">PDF</button>
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Excel</button>
  </div>
      </div>
    </div>
    </div>
  );
}
