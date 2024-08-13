// src/routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Login from '../components/Login'; // Ensure this path is correct
import { Home } from '../components/Home';
import { Profile } from '../components/Profile';
import { Dashboard } from '../components/Dashboard';
import { AddExpense } from '../components/AddExpense';
import { SettleUp } from '../components/SettleUp';
import { Groups } from '../components/Groups';
import { Friends } from '../components/Friends';
import { Summary } from '../components/Summary';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/sign-in' element={<Login />} />
      <Route path='/home' element={<Home />}>
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Summary />} />
          <Route path='expense' element={<AddExpense />} />
          <Route path='settle' element={<SettleUp />} />
          <Route path='groups' element={<Groups />} />
          <Route path='friends' element={<Friends />} />
        </Route>
      </Route>
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};
