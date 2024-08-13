// src/routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Login from '../components/login.jsx'; // Ensure this path is correct

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/sign-in' element={<Login />} />
    </Routes>
  );
};
