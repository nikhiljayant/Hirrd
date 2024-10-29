import React from 'react'
// Dependency
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AppLayout