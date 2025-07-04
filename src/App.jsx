import React from 'react'
import './App.css';
import { Button } from './components/ui/button';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import JobListing from './pages/JobListing';
import JobPage from './pages/JobPage';
import PostJob from './pages/PostJob';
import SavedJob from './pages/SavedJob';
import MyJobs from './pages/MyJobs';
import { ThemeProvider } from "@/components/theme-provider"
import ProtectedRoute from './components/ProtectedRoute';
const router=createBrowserRouter(
  [
    {
      element:<AppLayout/>,
      children:[
        {  path:'/',
          element:<LandingPage/>
        },
        {
          path: '/onboarding',
          element: 
          <ProtectedRoute>
              <Onboarding />
          </ProtectedRoute>
        },
        {
          path: '/jobs',
          element:
          <ProtectedRoute>
              <JobListing />
          </ProtectedRoute>
        },
        {
          path: '/job/:id',
          element:
          <ProtectedRoute>
              <JobPage />
          </ProtectedRoute>
        },
        {
          path: '/post-job',
          element: 
          <ProtectedRoute>
              <PostJob />
          </ProtectedRoute>
        },
        {
          path: '/saved-jobs',
          element:
          <ProtectedRoute>
              <SavedJob />
          </ProtectedRoute>
        },
        {
          path: '/my-jobs',
          element: 
          <ProtectedRoute>
              <MyJobs />
          </ProtectedRoute>
          
        },
      ]
    },
  ]
)
const App = () => {
  return (
 
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
