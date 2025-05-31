//import Signup from "./components/authentication/Signup";
//import AccountCreation from "./components/authentication/AccountCreation";
import Header from "./components/header/Header.jsx";
import { Outlet } from "react-router-dom";
function App() {
  
  return (
    <>
     <Header/>
     <Outlet/>
    </>
  )
}

export default App
