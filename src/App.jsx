import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Signuppage } from './Components/Signuppage';
import { Loginpage } from './Components/Loginpage';
import { ProtectedRoute } from './Components/Protected';
import { Homepage } from './Components/Homepage';
import { Navonhomepage } from './Components/Navbar/Navonhomepage';
import { Electronics } from './Components/Electronics';
import { Healthproducts } from './Components/Healthproducts';
import { Cart } from './Components/Cart';
import { Logout } from './Components/Logout';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Signuppage />,
    },
    {
      path: "/loginpage",
      element: <Loginpage />,
    },
    {
      path: "/homepage",
      element: (
        <ProtectedRoute>
          <Navonhomepage /> 
          <Homepage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/electronics",
      element: (
        <ProtectedRoute>
          <Navonhomepage />  
          <Electronics />
        </ProtectedRoute>
      ),
    },
    {
      path: "/healthproducts",
      element: (
        <ProtectedRoute>
          <Navonhomepage />  
          <Healthproducts />
        </ProtectedRoute>
      ),
    },
    {
      path: "/cart",
      element: (
        <ProtectedRoute>
          <Navonhomepage /> 
          <Cart />
        </ProtectedRoute>
      ),
    },
    {
      path: "/logout",
      element: (
        <ProtectedRoute>
          <Navonhomepage />  
          <Logout />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
