import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Video from './Pages/Video/Video.jsx'
import UserProfile from './Pages/UserProfile/UserProfile.jsx'
import VideoUpload from './Pages/VideoUpload/VideoUpload.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'watch/:videoId',
        element:<Video/>
      },
      {
        path:'users/:username',
        element:<UserProfile/>
      },
      {
        path:':userId/upload',
        element:<VideoUpload/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<SignUp/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
