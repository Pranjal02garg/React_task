import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-600 text-sm font-medium bg-gray-50 p-4 rounded-md border border-gray-200">
          No tasks yet. Add one above!
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}