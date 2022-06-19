
import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  return (
    localStorage.getItem("token")?
    children:
    <Navigate to="/login"/>
    
  )
}

export default PrivateRoute
