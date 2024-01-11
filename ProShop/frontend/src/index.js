import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import store from './store.js';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css'
import App from './App';
import PrivateRoute from './components/PrivateRoute.jsx';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ShippingScreen from './screens/ShippingScreen.jsx';
import PaymentScreen from './screens/PaymentScreen.jsx';
import PlaceOrderScreen from './screens/PlaceOrderScreen.jsx';
import OrderScreen from './screens/OrderScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import OrderListScreen from './screens/admin/OrderListScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"/*Parent*/ 
      element= {<App />} /*Takes an element of the app*/ >
      <Route index ={true} path ="/" 
        element={<HomeScreen />} /*Screen you will be taken to*/ />
      <Route path ="/product/:id" element={<ProductScreen />} />
      <Route path ="/cart" element={<CartScreen />} />
      <Route path ="/login" element={<LoginScreen />} />
      <Route path ="/register" element={<RegisterScreen />} />
      
      {/* Everything inside this route is private*/}
      <Route path='' element={<PrivateRoute/>}>
        <Route path ="/shipping" element={<ShippingScreen />} />
        <Route path ="/payment" element={<PaymentScreen />} />
        <Route path ="/placeorder" element={<PlaceOrderScreen />} />
        <Route path ="/order/:id" element={<OrderScreen />} />
        <Route path ="/profile" element={<ProfileScreen />} />
      </Route>

      {/* Everything inside this route is just for admins*/}
      <Route path='' element={<AdminRoute/>}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <PayPalScriptProvider deferLoading={ true }>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
