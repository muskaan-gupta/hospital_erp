export default function ToDoTasks() {
    const tasks = [
      { task: 'Follow up with patient John Doe', completed: false },
      { task: 'Review lab results for Jane Smith', completed: true },
      { task: 'Schedule surgery for Sarah Lee', completed: false },
    ];
  
    return (
      <div className="bg-white p-6 shadow rounded-lg text-black">
        <h2 className="text-lg mb-4">To-Do Tasks</h2>
        <ul className="space-y-2">
          {tasks.map((task, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{task.task}</span>
              <span>{task.completed ? 'Done' : 'Pending'}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  