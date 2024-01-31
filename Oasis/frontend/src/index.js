import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index ={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LogInScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);