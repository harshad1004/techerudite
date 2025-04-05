import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate(); 
  const [form, setForm] = useState({
    customerName: '',
    customerEmail: '',
    bookingDate: '',
    bookingType: 'Full Day',
    bookingSlot: '',
    fromTime: '',
    toTime: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/bookings/create', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(res.data.msg);
      navigate('/donebooking');
    } catch (err) {
      alert(err.response?.data?.msg || 'Booking failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">Booking Form</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1">Customer Name</label>
            <input type="text" name="customerName" value={form.customerName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1">Customer Email</label>
            <input type="email" name="customerEmail" value={form.customerEmail} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1">Booking Date</label>
            <input type="date" name="bookingDate" value={form.bookingDate} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1">Booking Type</label>
            <select name="bookingType" value={form.bookingType} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
              <option value="Full Day">Full Day</option>
              <option value="Half Day">Half Day</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          {form.bookingType === 'Half Day' && (
            <div>
              <label className="block mb-1">Booking Slot</label>
              <select name="bookingSlot" value={form.bookingSlot} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                <option value="First Half">First Half</option>
                <option value="Second Half">Second Half</option>
              </select>
            </div>
          )}
          {form.bookingType === 'Custom' && (
            <>
              <div>
                <label className="block mb-1">From Time</label>
                <input type="time" name="fromTime" value={form.fromTime} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block mb-1">To Time</label>
                <input type="time" name="toTime" value={form.toTime} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
              </div>
            </>
          )}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
