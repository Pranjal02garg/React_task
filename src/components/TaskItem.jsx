export default function TaskItem({ task, onToggle, onDelete }) {
  const priorityColors = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-green-100 text-green-800",
  };

  return (
    <div
      className={`bg-white rounded-lg shadow overflow-hidden border-l-4 ${
        task.status === "complete"
          ? "border-gray-300 opacity-75"
          : task.priority === "High"
          ? "border-red-500"
          : task.priority === "Medium"
          ? "border-yellow-500"
          : "border-green-500"
      }`}
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-1">
              <h3
                className={`text-lg font-medium truncate ${
                  task.status === "complete" ? "line-through text-gray-500" : "text-gray-900"
                }`}
              >
                {task.title}
              </h3>
              <span
                className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  priorityColors[task.priority]
                }`}
              >
                {task.priority}
              </span>
            </div>
            {task.description && (
              <p className="text-gray-600 text-sm mb-2">{task.description}</p>
            )}
            <p className="text-xs text-gray-500">
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="ml-4 flex-shrink-0 flex space-x-2">
            <button
              onClick={() => onToggle(task.id)}
              className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium ${
                task.status === "complete"
                  ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
              }`}
            >
              {task.status === "complete" ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}