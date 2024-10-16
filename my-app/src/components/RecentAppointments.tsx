export default function RecentAppointments({ patientId }: { patientId: string | string[] }) {
    const appointments = [
      { date: '12-05-2024', doctor: 'Dr. John Doe', status: 'Completed' },
      { date: '11-04-2024', doctor: 'Dr. Jane Smith', status: 'Cancelled' },
    ];
  
    return (
      <div className="bg-white p-4 shadow rounded-lg mb-6">
        <h2 className="text-lg font-semibold">Recent Appointments</h2>
        <ul className="mt-4 space-y-2">
          {appointments.map((appointment, index) => (
            <li key={index}>
              <strong>Date:</strong> {appointment.date}, <strong>Doctor:</strong> {appointment.doctor}, <strong>Status:</strong> {appointment.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  