// File: src/pages/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();  
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      onLogin(res.data.user);
      navigate('/booking');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="w-full border px-3 py-2 rounded" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full border px-3 py-2 rounded" onChange={handleChange} required />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;