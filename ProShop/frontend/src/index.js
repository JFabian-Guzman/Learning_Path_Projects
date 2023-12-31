import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store.js';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"/*Parent*/ 
      element= {<App />} /*Takes an element of the app*/ >
      <Route index ={true} path ="/" 
        element={<HomeScreen />} /*Screen you will be taken to*/ />
      <Route path ="/product/:id" element={<ProductScreen />} />
      <Route path ="cart" element={<CartScreen />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
