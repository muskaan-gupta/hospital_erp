export default function PatientVitals({ patientId }: { patientId: string | string[] }) {
    const vitals = [
      { measurement: 'Blood Pressure', value: '120/80', date: '12-12-2024' },
      { measurement: 'Heart Rate', value: '72 bpm', date: '12-12-2024' },
    ];
  
    return (
      <div className="bg-white p-6 shadow rounded-lg mt-6">
        <h2 className="text-lg font-semibold">Vitals</h2>
        <ul className="mt-4 space-y-2">
          {vitals.map((vital, index) => (
            <li key={index}>
              <strong>{vital.measurement}:</strong> {vital.value} <span>({vital.date})</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  