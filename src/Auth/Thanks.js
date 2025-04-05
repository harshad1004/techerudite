import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-50 p-6">
      <div className="bg-white p-10 rounded-lg shadow text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thanks for Booking!</h1>
        <p className="text-lg text-gray-700 mb-6">Your booking has been submitted successfully.</p>
        <button onClick={() => navigate('/booking')} className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Book Another
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
