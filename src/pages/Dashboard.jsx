import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTasks } from "../hooks/useTasks";
import { auth } from "../services/firebase";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const user = useAuth();
  const navigate = useNavigate();
  const { tasks, addTask, updateTask, deleteTask } = useTasks(user?.uid);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handleToggle = (id) => {
    const task = tasks.find((t) => t.id === id);
    updateTask(id, { status: task.status === "complete" ? "incomplete" : "complete" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome, {user?.email}
            </h1>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-red-100 rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              Sign Out
            </button>
          </div>
          <TaskForm onAdd={(task) => addTask({ ...task, userId: user.uid })} />
          <TaskList tasks={tasks} onToggle={handleToggle} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}