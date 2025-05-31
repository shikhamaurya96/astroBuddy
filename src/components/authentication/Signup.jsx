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
  const [countryCodeList,setCountryCodeList] = useState("")
  //const [disableOption,setDisableOption] = useState(false)
  const [selectItem,setSelectItem] = useState("")
  
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
// const fetchCountryListData = async()=>{
//   try{
//     const [currentCountryData,allCountryList] = await Promise.all([
//       fetch('https://ipapi.co/json/'),
//       fetch("https://restcountries.com/v3.1/all")
//     ])
//     const currentCountryResponse = await currentCountryData.json();
//     const countryListResponse = await allCountryList.json();
//     //setCurrentCountry(currentCountryResponse.country_calling_code);
//     setSelectItem(`${currentCountryResponse.country_name}(${currentCountryResponse.country_calling_code})`)
//     console.log(countryListResponse)
//     console.log(currentCountryResponse)
//     setCountryCodeList(countryListResponse)
//   }
// catch(error){
// console.log(error)
// }
// }
// useEffect(()=>{
//   fetchCountryListData();
// },[emailType===false])


// const signInWithPhone = ()=>{
//   setEmailType(!emailType)
// }




  return (
    error?error:
    <div className="min-h-screen">
      <div className='text-center flex flex-col items-center space-y-2 !mt-12 !p-4'>
    
      <h2 className='text-3xl font-bold text-gray-800 '>{loginStatus===false?"Create an account":"Welcome back"}</h2>

       {/* {
        (emailType===false)&&(countryCodeList) ?<div className="w-full md:w-1/4 ">
        <Select variant="outlined" size="lg"
        label="Select Country"
        value={selectItem}
        
        onChange={(e)=>setSelectItem(e.target.value)}
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
          })
        }>
          {
            countryCodeList.map((el)=><Option key={el.name.common} value={el.idd.root+el.idd?.suffixes?.[0]} className='flex items-center space-x-2'><img src={el.flags.svg} className="h-5 w-5 rounded-full object-cover"/><span>{el.name.common}</span><span>{el.idd.root+el.idd?.suffixes?.[0]}</span></Option>)
          }
          
        </Select>
      </div>
      
        :""
        }    */}
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

{/* <button className=' flex items-center gap-4 text-gray-600 w-full md:w-1/4 border border-gray-400  rounded-md !p-3 outline-none hover:bg-gray-100 cursor-pointer  !mt-7' onClick={signInWithPhone}>
<img src={emailType===true?"./image/phone.png":"./image/email.png"} alt='google' className='max-w-5'/><span>{emailType===true?"Continue with phone":"Continue with email"}</span>
</button> */}
      </div>
  
</div>
  )
}

export default Signup