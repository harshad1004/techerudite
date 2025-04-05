// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from '../src/Auth/Signup';
import LoginPage from '../src/Auth/Signin';
import BookingPage from './Booking/booking';
import ThankYouPage from './Auth/Thanks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage onLogin={() => {}} />} />
        <Route path="/booking" element={<BookingPage onLogin={() => {}} />} />
        <Route path='/donebooking' element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
