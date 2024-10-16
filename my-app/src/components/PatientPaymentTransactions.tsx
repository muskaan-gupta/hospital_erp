interface Transaction {
  date: string;
  cost: string;
  discount: string;
  paymentType: string;
  invoice: string;
  status: string;
}

interface PatientPaymentTransactionsProps {
  transactions: Transaction[];
}

export default function PatientPaymentTransactions({ transactions }: PatientPaymentTransactionsProps) {
  return (
    <div className="bg-white p-4 shadow rounded-lg mt-6">
      <h2 className="text-lg font-semibold text-pink-500">Patient Payment Transactions</h2>
      <table className="min-w-full mt-4 border-collapse text-black">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Cost</th>
            <th className="border p-2">Discount</th>
            <th className="border p-2">Payment Type</th>
            <th className="border p-2">Invoice</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="border p-2">{transaction.date}</td>
              <td className="border p-2">{transaction.cost}</td>
              <td className="border p-2">{transaction.discount}</td>
              <td className="border p-2">{transaction.paymentType}</td>
              <td className="border p-2">
                <button className="text-blue-500 underline">{transaction.invoice}</button>
              </td>
              <td className="border p-2">
                <span
                  className={`p-1 text-white rounded ${
                    transaction.status === 'Completed'
                      ? 'bg-green-500'
                      : transaction.status === 'Pending'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <div className="flex space-x-2">
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">CSV</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Print</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">PDF</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Excel</button>
        </div>
      </div>
    </div>
  );
}
