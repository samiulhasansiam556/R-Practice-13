import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/registration/Login';
import Signup from './Pages/registration/Signup';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
