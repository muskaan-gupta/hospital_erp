export default function MedicalRecords({ patientId }: { patientId: string | string[] }) {
    const records = [
      { fileName: 'Blood Report.pdf', date: '10-10-2023', downloadLink: '/files/blood-report.pdf' },
      { fileName: 'X-Ray Report.pdf', date: '15-11-2023', downloadLink: '/files/xray-report.pdf' },
    ];
  
    return (
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold">Medical Records</h2>
        <ul className="mt-4 space-y-2">
          {records.map((record, index) => (
            <li key={index}>
              <strong>File:</strong> {record.fileName}, <strong>Date:</strong> {record.date}, <a href={record.downloadLink} className="text-blue-500 underline">Download</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  