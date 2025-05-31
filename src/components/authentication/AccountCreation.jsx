import React,{useState,useEffect} from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../utils/firebase';
const AccountCreation = () => {
  const location = useLocation();
  const [myEmail,setMyEmail] = useState(location.state.email)
  const [password,setPassword]= useState("");
  const [error,setError] = useState(null)
  const navigate = useNavigate();
const auth = getAuth(app);

    function accountHandler(){
        console.log("account created")
        createUserWithEmailAndPassword(auth, myEmail, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          
navigate("/home")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`${errorCode}: ${errorMessage}`)
          // ..
        });

    }
  return (
error?error:
    <div className='text-center flex flex-col items-center space-y-2 mt-12 p-4 '>
<h2 className='text-3xl  text-gray-800 '>Create your account</h2>
<input 
      type='text'
      placeholder='Email address'
      value={myEmail}
      onChange={(e)=>setMyEmail(e.target.value)}
      className={`w-full md:w-1/4 border border-gray-600 rounded-md p-3 outline-none bg-gray-200 focus:border-teal-600 block mt-7`}
      required/> 

  <input 
      type='password'
      name='password'
      placeholder='Password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      className='w-full md:w-1/4 border border-gray-600 rounded-md p-3 outline-none focus:border-teal-600 block mt-2'
      required/> 
      
  <button className='w-full md:w-1/4 border border-gray-400 rounded-md p-3 bg-teal-600 text-white block mt-6 hover:bg-teal-700 cursor-pointer' onClick={accountHandler}>Continue</button>
      <Link to="/"><p className='text-sm text-teal-600 font-bold mt-6 cursor-pointer'>Go back </p></Link>
    </div>
  )
}

export default AccountCreation