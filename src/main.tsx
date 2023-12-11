import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.tsx';
import BuscaRecente from './routes/BuscaRecente.tsx';
import Detalhes from './routes/Detalhes.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recentes",
        element: <BuscaRecente />,
      },
      {
        path: `/detalhes`,
        element: <Detalhes />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
