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
import PrivateRoute from './components/PrivateRoutes';
import AgentScreen from './screens/AgentScreen';
import ProfileScreen from './screens/ProfileScreen';
import SellStepsScreen from './screens/SellStepsScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index ={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LogInScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/catalog" element={<BuyScreen />} />
      <Route path="/catalog/page/:pageNumber" element={<BuyScreen />} />
      <Route path="/catalog/:id" element={<HouseIDScreen />} />
      <Route path="/agents" element={<AgentScreen />} />
      <Route path="/profile/:id" element={<ProfileScreen />} />
      <Route path="/sellSteps" element={<SellStepsScreen />} />


      {/* Everything inside this route is private*/}
      <Route path='' element={<PrivateRoute/>}>
        <Route path ="/sell" element={<SellScreen />} />
      </Route>
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