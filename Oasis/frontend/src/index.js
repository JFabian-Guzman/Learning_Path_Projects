import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';
import BuyScreen from './screens/BuyScreen';
import SellScreen from './screens/SellScreen';
import HouseIDScreen from './screens/HouseScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index ={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LogInScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/catalog/buy" element={<BuyScreen />} />
      {/* TODO: Change whats needed to make a rent screen */}
      <Route path="/catalog/rent" element={<BuyScreen />} />
      <Route path="/sell" element={<SellScreen />} />
      <Route path="/catalog/:id" element={<HouseIDScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);