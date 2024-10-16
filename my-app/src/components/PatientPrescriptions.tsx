export default function PatientPrescriptions({ patientId }: { patientId: string | string[] }) {
    const prescriptions = [
      { medication: 'Paracetamol', dose: '500mg', frequency: '2 times a day', duration: '5 days' },
      { medication: 'Amoxicillin', dose: '250mg', frequency: '3 times a day', duration: '7 days' },
    ];
  
    return (
      <div className="bg-white p-6 shadow rounded-lg mt-6">
        <h2 className="text-lg font-semibold">Prescriptions</h2>
        <ul className="mt-4 space-y-2">
          {prescriptions.map((prescription, index) => (
            <li key={index}>
              <strong>Medication:</strong> {prescription.medication}, <strong>Dose:</strong> {prescription.dose}, <strong>Frequency:</strong> {prescription.frequency}, <strong>Duration:</strong> {prescription.duration}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  