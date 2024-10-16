import ActionButtons from './ActionButtons';

interface PatientDetailsProps {
  patient: {
    name: string;
    dob: string;
    gender: string;
    address: string;
    phone: string;
    email: string;
  };
}

export default function PatientDetailsCard({ patient }: PatientDetailsProps) {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-pink-500 text-lg font-semibold">Patient Details</h2>
      <ul className="mt-4 space-y-2 text-black">
        <li><strong>Name:</strong> {patient.name}</li>
        <li><strong>Date Of Birth:</strong> {patient.dob}</li>
        <li><strong>Gender:</strong> {patient.gender}</li>
        <li><strong>Address:</strong> {patient.address}</li>
        <li><strong>Phone:</strong> {patient.phone}</li>
        <li><strong>Email:</strong> {patient.email}</li>
      </ul>
      <div className="mt-4">
        <ActionButtons />
      </div>
    </div>
  );
}
