export default function RecentPatients() {
    return (
      <div className="bg-white p-6 shadow rounded-lg text-black">
        <h2 className="text-lg mb-4">Recent Patients</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>John Doe</span>
            <span>Oct 6, 2024</span>
          </li>
          <li className="flex justify-between">
            <span>Jane Smith</span>
            <span>Oct 5, 2024</span>
          </li>
          <li className="flex justify-between">
            <span>Sam Wilson</span>
            <span>Oct 4, 2024</span>
          </li>
        </ul>
      </div>
    );
  }
  