export default function PatientMedicalHistory({ patientId }: { patientId: string | string[] }) {
    const medicalHistory = [
      { condition: 'Flu', date: '12-10-2020', treatment: 'Antibiotics', doctor: 'Dr. John' },
      { condition: 'Cold', date: '11-05-2021', treatment: 'Rest', doctor: 'Dr. Jane' },
    ];
  
    return (
      <div className="bg-white p-4 shadow rounded-lg mb-6">
        <h2 className="text-lg font-semibold">Medical History</h2>
        <ul className="mt-4 space-y-2">
          {medicalHistory.map((history, index) => (
            <li key={index}>
              <strong>Condition:</strong> {history.condition}, <strong>Date:</strong> {history.date}, <strong>Treatment:</strong> {history.treatment}, <strong>Doctor:</strong> {history.doctor}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  