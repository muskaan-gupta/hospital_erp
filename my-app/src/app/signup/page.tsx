"use client"
import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
      setErrorMessage('Please fill all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    if (!formData.agreeTerms) {
      setErrorMessage('You must agree to the Terms & Conditions');
      return;
    }
    setErrorMessage('');
    // Handle successful submission logic here
  };

  return (
    <div className="p-6 w-[80vw] text-black">
      <h1 className="text-3xl font-semibold text-pink-500">Sign Up</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mr-2"
          />
          <label>I agree to Terms & Conditions</label>
        </div>

        <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded">
          Sign Up
        </button>

        {errorMessage && (
          <div className="mt-4 bg-yellow-100 text-yellow-700 p-2 rounded">
            {errorMessage}
          </div>
        )}
      </form>

      <p className="mt-4 text-center text-sm">
        Already Sign Up? <a href="/auth/login" className="text-pink-500">Login Here</a>
      </p>
    </div>
  );
}
