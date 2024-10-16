interface Service {
    serviceName: string;
    unitCost: number;
    discount: number;
  }
  
  interface InvoiceTableProps {
    services: Service[];
  }
  
  export default function InvoiceTable({ services }: InvoiceTableProps) {
    return (
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-pink-500">Services:</h3>
        <table className="min-w-full bg-white border mt-2">
          <thead>
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Service</th>
              <th className="p-2 border">Unit Cost</th>
              <th className="p-2 border">Discount (%)</th>
              <th className="p-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{service.serviceName}</td>
                <td className="p-2 border">${service.unitCost}</td>
                <td className="p-2 border">{service.discount}</td>
                <td className="p-2 border">
                  ${service.unitCost - (service.unitCost * service.discount) / 100}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  