// app/login/page.tsx
"use client"; // For state and event handling

import { useState } from 'react';

const LoginPage = () => {
  // State for form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation: Ensure fields are not empty
    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }

    // Handle login logic here (API call, authentication, etc.)
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear form fields (optional)
    setEmail('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-[80vw] ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Error message */}
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-3 mb-4 rounded-md">
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-teal-500 text-white w-full py-2 rounded-md hover:bg-teal-600"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-teal-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
