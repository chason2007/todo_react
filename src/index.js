import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Completed from './Pages/Completed';
import Settings from './Pages/Settings';
import Home from './Pages/Home';
import Add from './Pages/Add';

const routerVariables = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <Add></Add>,
      },
      {
        path: "/completed",
        element: <Completed></Completed>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
      {
        path: "*",
        element: <div><h1>404 Page Not Found. Please check your URL</h1></div>, 
      }
    ],
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerVariables}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
