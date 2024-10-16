import { FaEdit, FaTrashAlt, FaDownload } from 'react-icons/fa';

export default function ActionButtons() {
  return (
    <>
    <div className="flex space-x-1">
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">CSV</button>
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Print</button>
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">PDF</button>
    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Excel</button>
  </div>
    <div className="flex items-center space-x-2 mt-2">
      <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-1">
        <FaEdit /> <span>Edit Patient</span>
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-1">
        <FaTrashAlt /> <span>Delete Patient</span>
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-1">
        <FaDownload /> <span>Download File</span>
      </button>
   
    </div>
    </>
  );
}
