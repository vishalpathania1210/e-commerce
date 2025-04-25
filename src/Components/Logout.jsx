import { replace } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
    const navigate=useNavigate()
        localStorage.removeItem("token")
        navigate("/",replace)
        alert("you are logged out ")
    
  return (
  <></>
  )
}
