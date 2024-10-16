"use client";

import { Bar, Line, Pie } from 'react-chartjs-2';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

const ReportsPage = () => {
  const [progress] = useState(75); // Progress tracking
  const [isFormVisible, setIsFormVisible] = useState(false); // Control form visibility
  const [reportName, setReportName] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [reportFile, setReportFile] = useState<File | null>(null);

  // Bar chart data
  const barData = {
    labels: ['Completed', 'Pending', 'Failed'],
    datasets: [
      {
        label: 'Payments',
        data: [1200, 450, 300],
        backgroundColor: ['#34d399', '#facc15', '#f87171'],
        borderColor: ['#10b981', '#eab308', '#ef4444'],
        borderWidth: 1,
      },
    ],
  };

  // Line chart data
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [5000, 4000, 4500, 6000, 7000, 7500],
        fill: false,
        borderColor: '#3b82f6',
        tension: 0.1,
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: ['Completed', 'Pending', 'Failed'],
    datasets: [
      {
        label: 'Payment Status',
        data: [60, 25, 15],
        backgroundColor: ['#10b981', '#facc15', '#f87171'],
        hoverBackgroundColor: ['#059669', '#eab308', '#ef4444'],
      },
    ],
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report Name:', reportName);
    console.log('Report Date:', reportDate);
    console.log('Report File:', reportFile);
    // Handle form submission logic (e.g., upload file to server)
    setIsFormVisible(false); // Hide form after submission
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setReportFile(e.target.files[0]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-[85vw]">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>

      {/* Add Report Button */}
      <div className="mb-6">
        <button
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          {isFormVisible ? 'Cancel' : 'Add Report'}
        </button>
      </div>

      {/* Report Upload Form */}
      {isFormVisible && (
        <form className="mb-8 bg-white p-6 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
          <h2 className="text-xl font-semibold mb-4">Upload New Report</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Report Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={reportDate}
              onChange={(e) => setReportDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Upload Report</label>
            <input
              type="file"
              className="border border-gray-300 rounded-md p-2 w-full"
              onChange={handleFileChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Report
          </button>
        </form>
      )}

      {/* Performance Tracking */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Performance Tracking</h2>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-teal-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Overall Progress: {progress}%</p>
      </div>

      {/* Grid layout for charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Payment Status Overview</h2>
          <Bar data={barData} />
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
          <Line data={lineData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Payment Status Breakdown</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
