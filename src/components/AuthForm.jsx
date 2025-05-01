import { useState } from "react";

export default function AuthForm({ onSubmit, isRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-grey rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-900">
        {isRegister ? "Create Account" : "Sign In"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-indigo-100 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          {isRegister ? "Create Account" : "Sign In"}
        </button>
      </form>
      <p className="text-center text-sm text-gray-600">
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <a
          href={isRegister ? "/login" : "/register"}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {isRegister ? "Sign In" : "Create Account"}
        </a>
      </p>
      {!isRegister && (
        <p className="text-center text-sm text-gray-600">
          <a href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </p>
      )}
    </div>
  );
}