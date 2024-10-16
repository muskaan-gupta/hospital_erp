interface Patient {
    id: string;
    name: string;
    age: number;
    gender: string;
    phone: string;
    address: string;
    email: string;
    dob: string;
  }
  
  export default function PatientDetails({ patient }: { patient: Patient }) {
    return (
      <div className="bg-white p-6 shadow rounded-lg mt-6">
        <h2 className="text-lg font-semibold">General Information</h2>
        <ul className="mt-4 space-y-2">
          <li><strong>Name:</strong> {patient.name}</li>
          <li><strong>Age:</strong> {patient.age}</li>
          <li><strong>Gender:</strong> {patient.gender}</li>
          <li><strong>Phone:</strong> {patient.phone}</li>
          <li><strong>Email:</strong> {patient.email}</li>
          <li><strong>Date of Birth:</strong> {patient.dob}</li>
          <li><strong>Address:</strong> {patient.address}</li>
        </ul>
      </div>
    );
  }
  