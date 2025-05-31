import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import app from '../../utils/firebase'

const AccountLogin = () => {
    const[password,setPassword] = useState("")
    const [error,setError] = useState(null)
    const location = useLocation();
    const email = location.state.email;
    const navigate = useNavigate();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    function handleSignupStatus(){
navigate("/")
    }
    function signupHandler(){
signInWithEmailAndPassword(auth,email,password)
.then((userCredentials)=>{
    console.log("Signed in");
    const user = userCredentials.user;
    console.log("signed in user>>>",user)
    navigate("/home")
})
.catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
setError(`Error code : ${errorCode} ${errorMessage}`)
})
    }
    const handleGoogleLogin = ()=>{
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
    
    <div className='text-center flex flex-col items-center space-y-4 mt-12 p-4 '>
  
        <h2 className='text-3xl  text-gray-800 mb-4'>Enter your password</h2>
        
    <input 
    type='email'
    name='email'
    placeholder='Email address'
    defaultValue={email}
    className={`w-full md:w-1/4 border border-gray-600 rounded-md p-3 outline-none bg-gray-200 focus:border-teal-600 block `}
    required/> 
    <input 
    type='password'
    name='password'
    placeholder='Password'
    value={password}
    className='w-full md:w-1/4 border border-gray-600 rounded-md p-3 outline-none focus:border-teal-600 block mt-2'
    onChange={(e)=>setPassword(e.target.value)}
    required/> 
    <button className='w-full md:w-1/4 border border-gray-400 rounded-md p-3 bg-teal-600 text-white block mt-6 hover:bg-teal-700 cursor-pointer' onClick={signupHandler}>Continue</button> 
    <p className='text-sm text-gray-700 mt-6'>Don't have an account <span className='text-teal-600 cursor-pointer' onClick={handleSignupStatus}>Sign up</span></p>
<div className="flex items-center justify-center w-full mt-6 ">
<hr className=" border-t border-gray-500 w-full md:w-36  " />
<span className="px-4 text-gray-600">OR</span>
<hr className=" border-t border-gray-500 w-full md:w-36 " />
</div>
<button className=' flex items-center gap-4 text-gray-600 w-full md:w-1/4 border border-gray-400  rounded-md p-3 outline-none hover:bg-gray-100 cursor-pointer mt-4' onClick={handleGoogleLogin}>
<img src='./image/google2.png' alt='google' className='max-w-5'/><span>Continue with Google</span>
</button>


    </div>


  )
}

export default AccountLogin