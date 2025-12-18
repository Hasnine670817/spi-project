import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import AppProvider from './Context/AppContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
