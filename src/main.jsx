import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
const router = createBrowserRouter([
  {
    path: '/',
    element :<div>welcome to ract router</div>
    
  },
  {
    path: '/about',
    element: <div>hello world</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
