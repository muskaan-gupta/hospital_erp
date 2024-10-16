interface DoctorDetailsProps {
    doctor: {
      name: string;
      specialization: string;
      experience: string;
      gender: string;
      address: string;
      phone: string;
      dob: string;
      email: string;
       image: "https://www.konnectplugins.com/proclinic/Vertical/images/doctor.jpeg";
    };
  }
  
  export default function DoctorDetailsCard({ doctor }: DoctorDetailsProps) {
    return (
      <div className="bg-white p-4 shadow rounded-lg ">
        <div className="flex">
          <img src="https://www.konnectplugins.com/proclinic/Vertical/images/doctor.jpeg" alt={doctor.name} className="w-32 h-32 rounded-full object-cover" />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold">{doctor.name}</h2>
            <p>{doctor.specialization}</p>
            <p>{doctor.experience}</p>
            <div className="mt-4 flex space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded">Edit Doctor</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Delete Doctor</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  