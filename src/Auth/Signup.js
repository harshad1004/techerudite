// File: src/pages/SignupPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      alert(res.data.msg);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-md p-10 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" name="firstName" placeholder="John" className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" name="lastName" placeholder="Doe" className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" placeholder="example@email.com" className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" name="password" placeholder="********" className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;



