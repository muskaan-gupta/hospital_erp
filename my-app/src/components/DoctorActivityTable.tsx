interface Activity {
    patient: string;
    condition: string;
    visitDate: string;
    status: string;
  }
  
  interface DoctorActivityTableProps {
    activities: Activity[];
  }
  
  export default function DoctorActivityTable({ activities }: DoctorActivityTableProps) {
    return (
      <div className="mt-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="p-2 border">Patient Name</th>
              <th className="p-2 border">Injury/Condition</th>
              <th className="p-2 border">Visit Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td className="p-2 border">{activity.patient}</td>
                <td className="p-2 border">{activity.condition}</td>
                <td className="p-2 border">{activity.visitDate}</td>
                <td className="p-2 border">{activity.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  