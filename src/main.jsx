import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,  
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from './Homepage.jsx';
import GamePage from './Gamepage.jsx';
import CreditsPage from './Creditspage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path:"/game",
    element: <GamePage />,
  },
  {
    path:"/credits",
    element: <CreditsPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
