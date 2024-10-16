interface Doctor {
    id: number;
    name: string;
    experience: number;
    phone: string;
    specialization: string;
    availability: string;
  }
  
  interface DoctorTableProps {
    doctors: Doctor[];
  }
  
  export default function DoctorTable({ doctors }: DoctorTableProps) {
    return (
      <div className="mt-4 w-[80vw] text-black">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="p-2 border">Doctor ID</th>
              <th className="p-2 border">Doctor Name</th>
              <th className="p-2 border">Experience (in Years)</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Specialization</th>
              <th className="p-2 border">Availability</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className="p-2 border">{doctor.id}</td>
                <td className="p-2 border">{doctor.name}</td>
                <td className="p-2 border">{doctor.experience}</td>
                <td className="p-2 border">{doctor.phone}</td>
                <td className="p-2 border">{doctor.specialization}</td>
                <td className="p-2 border">
                  <span
                    className={`p-1 text-white rounded ${
                      doctor.availability === 'Available'
                        ? 'bg-green-500'
                        : doctor.availability === 'On Leave'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {doctor.availability}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  