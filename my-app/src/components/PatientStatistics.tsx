// app/components/PatientStatistics.tsx
"use client";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PatientStatistics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Patients',
        data: [1200, 1900, 3000, 2800, 1500, 1800, 2200, 2100, 2000, 1700, 2500, 2300],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="bg-white p-6  rounded-lg shadow-md h-[40vh]">
      <h3>Patient Statistics</h3>
      <Line data={data} />
    </div>
  );
};

export default PatientStatistics;
