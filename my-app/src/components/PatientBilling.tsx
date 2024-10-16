export default function PatientBilling({ patientId }: { patientId: string | string[] }) {
    const bills = [
      { service: 'Consultation', amount: '$50', date: '12-01-2024', status: 'Paid' },
      { service: 'Blood Test', amount: '$20', date: '15-11-2024', status: 'Unpaid' },
    ];
  
    return (
      <div className="bg-white p-6 shadow rounded-lg mt-6">
        <h2 className="text-lg font-semibold">Billing</h2>
        <ul className="mt-4 space-y-2">
          {bills.map((bill, index) => (
            <li key={index}>
              <strong>Service:</strong> {bill.service}, <strong>Amount:</strong> {bill.amount}, <strong>Date:</strong> {bill.date}, <strong>Status:</strong> {bill.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  