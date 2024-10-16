// app/components/Appointment.tsx
"use client";
interface AppointmentProps {
    title: string;
    value: number;
    change: number;
  }
  
  const Appointment: React.FC<AppointmentProps> = ({ title, value, change }) => {
    return (
      <div className="bg-green-700 p-6 rounded-lg shadow-md">
        <h3 className="text-lg">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change > 0 ? `↑ ${change}%` : `↓ ${change}%`} from last week
        </p>
      </div>
    );
  };
  
  export default Appointment;
  