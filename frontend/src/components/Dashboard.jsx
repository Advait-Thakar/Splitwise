import React from 'react'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>
        <div className="dash-nav">
            {/* Dashboard nav goes here!     */}
        </div>
        <h1>Dashboard</h1>
        <Outlet />        
        <p>This is the dashboard page.</p>
    </div>
  )
}
