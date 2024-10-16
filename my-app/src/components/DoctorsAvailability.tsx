export default function DoctorsAvailability() {
    const doctors = [
      { name: 'Dr. John Doe', available: true },
      { name: 'Dr. Jane Smith', available: false },
      { name: 'Dr. Sarah Lee', available: true },
    ];
  
    return (
      <div className="bg-white p-6 shadow rounded-lg text-black">
        <h2 className="text-lg mb-4">Doctors Availability</h2>
        <ul className="space-y-2">
          {doctors.map((doc, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{doc.name}</span>
              <span>{doc.available ? 'Available' : 'Unavailable'}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  