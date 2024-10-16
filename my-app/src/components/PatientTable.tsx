import Link from 'next/link';

interface Patient {
  id: number;
  name: string;
  age: number;
  phone: string;
  lastVisit: string;
  status: string;
}

interface PatientTableProps {
  patients: Patient[];
}

export default function PatientTable({ patients }: PatientTableProps) {
  return (
    <div className="mt-4">
      <table className="min-w-full bg-white border text-black">
        <thead>
          <tr>
            <th className="p-2 border">Patient ID</th>
            <th className="p-2 border">Patient Name</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Last Visit</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="p-2 border">{patient.id}</td>
              <td className="p-2 border">{patient.name}</td>
              <td className="p-2 border">{patient.age}</td>
              <td className="p-2 border">{patient.phone}</td>
              <td className="p-2 border">{patient.lastVisit}</td>
              <td className="p-2 border">
                <span
                  className={`p-1 text-white rounded ${
                    patient.status === 'Completed'
                      ? 'bg-green-500'
                      : patient.status === 'Pending'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                >
                  {patient.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
