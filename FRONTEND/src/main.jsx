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
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import WatchHistory from './Pages/WatchHistory/WatchHistory.jsx'
import Subscribers from './Pages/Subscribers/Subscribers.jsx'
import VideoLike from './Pages/VideoLikes/VideoLike.jsx'
import SearchResults from './Pages/SearchResults/SearchResults.jsx'
import UserTweet from './Pages/UserTweet/UserTweet.jsx'
import UserCourses from './Pages/UserCourses/UserCourses.jsx'
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
        element:<UserProfile/>,
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
      },
      {
        path:'history',
        element:<WatchHistory/>
      },
      {
        path:'subscribers',
        element:<Subscribers/>
      },
      {
        path:'likedVideos',
        element:<VideoLike/>
      },
      {
        path:'/results',
        element:<SearchResults/>
      },
      {
        path:'users/:username/tweets',
        element:<UserTweet/>
      },
      {
        path:'users/:username/courses',
        element:<UserCourses/>
      },
    ]
  }
])
const queryClient=new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
