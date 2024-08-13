import React from 'react'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <div className="nav">
            {/* Your navbar component goes here! */}
        </div>
        <h1>Welcome to my home page</h1>
        {/* Child component starts! */}
        <Outlet /> 
        {/* Child component ends! */}
        <div className="footer">
            {/* Your footer component goes here! */}
        </div>
    </div>
  )
}
