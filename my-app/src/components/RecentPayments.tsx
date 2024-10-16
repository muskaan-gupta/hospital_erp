export default function RecentPayments() {
    const payments = [
      { patient: 'John Doe', amount: '$200', date: 'Oct 6, 2024' },
      { patient: 'Jane Smith', amount: '$150', date: 'Oct 5, 2024' },
      { patient: 'Sarah Lee', amount: '$300', date: 'Oct 4, 2024' },
    ];
  
    return (
      <div className="bg-white p-6 shadow rounded-lg text-black">
        <h2 className="text-lg mb-4">Recent Payments</h2>
        <ul className="space-y-2">
          {payments.map((payment, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{payment.patient}</span>
              <span>{payment.amount}</span>
              <span>{payment.date}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  