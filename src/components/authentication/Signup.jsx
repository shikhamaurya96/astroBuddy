import React,{useState,useEffect,useRef} from 'react'
import {
  Select, 
  Option
} from "@material-tailwind/react";
import { getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import app from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const [input,setInput] = useState("");

  const [loginStatus,setLoginStatus] = useState(false)
  const [error,setError] = useState(null)
  const [emailType,setEmailType] = useState(true)
  
  
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  function signupHandler(){
    console.log("signup");

    if(loginStatus===false){

  navigate("/account",{
    state:{email:input}
   })

    }
    else{
        navigate("/login",{
          state:{
            email:input
          }
        })
    }
     
  }
  function handleLoginStatus(){
    setLoginStatus(!loginStatus)
    
  }
const  handleGoogleLogin = ()=>{
signInWithPopup(auth,provider)
.then((result)=>{
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    navigate("/home")

}).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(`Error code : ${errorCode} ${errorMessage}`)
})
}





  return (
    error?error:
    <div className="min-h-screen mt-20">
      <div className='text-center flex flex-col items-center space-y-2 !mt-12 !p-4'>
    
      <h2 className='text-3xl font-bold text-gray-800 '>{loginStatus===false?"Create an account":"Welcome back"}</h2>

       
      <input 
      type="text"
      placeholder={emailType===true?"Email address":"Phone number"}
      value={input}
      className='w-full md:w-1/4 border border-gray-400 rounded-md p-3 outline-none focus:border-teal-600 block !mt-7'
      onChange={(e)=>setInput(e.target.value)}
      required/> 
      <button className='w-full md:w-1/4 border border-gray-400 rounded-md p-3 bg-teal-600 text-white block !mt-6 hover:bg-teal-700 cursor-pointer' onClick={signupHandler}>Continue</button> 
   <p className='text-sm text-gray-700 !mt-6'>{loginStatus===false?"Already have an account?":"Don't have an account"} <span className='text-teal-600 cursor-pointer' onClick={handleLoginStatus}>{loginStatus===false?"Login":"Signup"}</span></p>
  <div className="flex items-center justify-center w-full !mt-6 ">
  <hr className=" border-t border-gray-500 w-full md:w-36 " />
  <span className="!px-4 text-gray-600">OR</span>
  <hr className=" border-t border-gray-500 w-full md:w-36 " />
</div>
<button className=' flex items-center gap-4 text-gray-600 w-full md:w-1/4 border border-gray-400  rounded-md !p-3 outline-none hover:bg-gray-100 cursor-pointer !mt-4' onClick={handleGoogleLogin}>
<img src='./image/google2.png' alt='google' className='max-w-5'/><span>Continue with Google</span>
</button>

      </div>
  
</div>
  )
}

export default Signup