import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import Login from './login';
import HomePage from './homePage';
import Logout from './logout';
import Register from './register';
const App = () => {
  const isAuthenticated = () => {
    // Check if token exists in localStorage
    return localStorage.getItem('token') !== null;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes accessible to all */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected routes accessible only to authenticated users */}
        <Route path="/" element={isAuthenticated() ? <Navigate to="/HomePage" /> : <Navigate to="/login" />} />
        <Route path="/HomePage" element={isAuthenticated() ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
