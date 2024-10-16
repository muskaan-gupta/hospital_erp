interface Payment {
    patientName: string;
    doctorName: string;
    service: string;
    charges: string;
    discount: string;
    status: string;
  }
  
  interface PaymentTableProps {
    payments: Payment[];
  }
  
  export default function PaymentTable({ payments }: PaymentTableProps) {
    return (
      <div className="mt-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="p-2 border">Patient Name</th>
              <th className="p-2 border">Doctor Name</th>
              <th className="p-2 border">Service Name</th>
              <th className="p-2 border">Charges</th>
              <th className="p-2 border">Discount (%)</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td className="p-2 border">{payment.patientName}</td>
                <td className="p-2 border">{payment.doctorName}</td>
                <td className="p-2 border">{payment.service}</td>
                <td className="p-2 border">{payment.charges}</td>
                <td className="p-2 border">{payment.discount}</td>
                <td className="p-2 border">
                  <span
                    className={`p-1 text-white rounded ${
                      payment.status === 'completed'
                        ? 'bg-green-500'
                        : payment.status === 'Pending'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  