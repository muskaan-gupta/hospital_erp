

interface Visit {
    doctor: string;
    cost: string;
    date: string;
    status: string;
  }
  
  interface PatientVisitsProps {
    visits: Visit[];
  }
  
  export default function PatientVisitsTable({ visits }: PatientVisitsProps) {
    return (
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-pink-500 text-lg font-semibold">Patient Visits</h2>
        <table className="min-w-full mt-4 border-collapse text-black">
          <thead>
            <tr>
              <th className="border p-2">Doctor Name</th>
              <th className="border p-2">Cost</th>
              <th className="border p-2">Visit Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody >
            {visits.map((visit, index) => (
              <tr key={index}>
                <td className="border p-2">{visit.doctor}</td>
                <td className="border p-2">{visit.cost}</td>
                <td className="border p-2">{visit.date}</td>
                <td className="border p-2">{visit.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
        <div className="flex items-center space-x-2">
     
      <div className="flex space-x-1">
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">CSV</button>
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Print</button>
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">PDF</button>
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Excel</button>
      </div>
    </div>
        </div>
      </div>
    );
  }
  