interface Appointment {
    id: string;
    patientId: string;
    token: string;
    doctorName: string;
    problem: string;
    status: string;
  }
  
  interface AppointmentTableProps {
    appointments: Appointment[];
  }
  
  export default function AppointmentTable({ appointments }: AppointmentTableProps) {
    return (
      <div className="mt-4 w-[80vw] text-black">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="p-2 border">Appointment ID</th>
              <th className="p-2 border">Patient ID</th>
              <th className="p-2 border">Token Number</th>
              <th className="p-2 border">Doctor Name</th>
              <th className="p-2 border">Problem</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="p-2 border">{appointment.id}</td>
                <td className="p-2 border">{appointment.patientId}</td>
                <td className="p-2 border">{appointment.token}</td>
                <td className="p-2 border">{appointment.doctorName}</td>
                <td className="p-2 border">{appointment.problem}</td>
                <td className="p-2 border">
                  <span
                    className={`p-1 text-white rounded ${
                      appointment.status === 'Active'
                        ? 'bg-green-500'
                        : appointment.status === 'Pending'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  