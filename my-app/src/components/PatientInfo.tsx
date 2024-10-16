interface Patient {
    id: number;
    name: string;
    age: number;
    gender: string;
    phone: string;
    address: string;
    email: string;
    dob: string;
    status: string;
  }
  
  interface PatientInfoProps {
    patient: Patient;
  }
  
  export default function PatientInfo({ patient }: PatientInfoProps) {
    return (
      <div className="bg-white p-4 shadow rounded-lg mb-6">
        <h2 className="text-lg font-semibold">General Information</h2>
        <ul className="mt-4 space-y-2">
          <li><strong>Name:</strong> {patient.name}</li>
          <li><strong>Age:</strong> {patient.age}</li>
          <li><strong>Gender:</strong> {patient.gender}</li>
          <li><strong>Phone:</strong> {patient.phone}</li>
          <li><strong>Email:</strong> {patient.email}</li>
          <li><strong>Date of Birth:</strong> {patient.dob}</li>
          <li><strong>Status:</strong> {patient.status}</li>
        </ul>
      </div>
    );
  }
  