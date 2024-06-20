import React from 'react'
import Dashboard from '../pages/Dashboard';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OnlyAdminPrivateRoute() {
    const { currentUser } = useSelector((state) => state.user); 
    // if there's a user we navigate to the children that's the dashboard that we can find by means of Outlet
  return  currentUser && currentUser.isAdmin ? <Outlet /> : <Navigate to="/sign-in" /> 
}
