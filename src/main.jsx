import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from './components/authentication/ProtectedRoute.jsx';
import Signup from "./components/authentication/Signup.jsx"
import AccountCreation from './components/authentication/AccountCreation.jsx';
import Home from './components/home/Home.jsx';
import AccountLogin from './components/authentication/AccountLogin.jsx';
import SignupWithPhone from './components/authentication/SignupWithPhone.jsx';
import Loader from './components/home/Loader.jsx';
import Astrologers from './components/chat/Astrologers.jsx';



const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"",
      element:<Signup/>
    },
    {
      path:"account",
      element:<AccountCreation/>
    },
    {
      path:"home",
      element:<Home/>
    },
    {
      path:"login",
      element:<AccountLogin/>
    },
    {
      path:"phone",
      element:<SignupWithPhone/>
    },
    {
      path:"astrologer",
      element:<Astrologers/>
    }

  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
