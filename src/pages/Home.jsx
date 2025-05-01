import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Task Manager</h1>
        <p className="text-gray-600 text-lg">
          Organize your tasks efficiently and boost your productivity.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/login"
            className="inline-flex items-center px-6 py-3 border border-indigo-100 rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center px-6 py-3 border border-green-100 rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}