import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Appointments',
      data: [50, 60, 170, 80, 100, 120],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

export default function ChartCard({ title }: { title: string }) {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-lg mb-4 text-black">{title}</h2>
      <Line data={data} />
    </div>
  );
}
