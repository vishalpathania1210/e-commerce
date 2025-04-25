import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const signuppage = JSON.parse(localStorage.getItem("firstvalue"));
  const loginpage = JSON.parse(localStorage.getItem("secondvalue"));

  if (signuppage === loginpage) {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", "vishal");
    }
    const newtoken = localStorage.getItem("token");
    if (newtoken) {
      return children;
    } else {
      return <Navigate to="/" replace />;
    }
  } else {
    return <Navigate to="/" replace />;
  }
};



