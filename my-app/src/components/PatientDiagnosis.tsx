export default function PatientDiagnosis({ patientId }: { patientId: string | string[] }) {
    const diagnoses = [
      { condition: 'Flu', doctor: 'Dr. John', date: '12-01-2024', treatment: 'Antibiotics' },
      { condition: 'Cold', doctor: 'Dr. Jane', date: '15-11-2024', treatment: 'Rest' },
    ];
  
    return (
      <div className="bg-white p-6 shadow rounded-lg mt-6">
        <h2 className="text-lg font-semibold">Diagnosis</h2>
        <ul className="mt-4 space-y-2">
          {diagnoses.map((diag, index) => (
            <li key={index}>
              <strong>Condition:</strong> {diag.condition} <span>({diag.date})</span>, <strong>Doctor:</strong> {diag.doctor}, <strong>Treatment:</strong> {diag.treatment}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  