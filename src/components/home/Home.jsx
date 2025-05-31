import React,{useState,useEffect} from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
const Home = () => {
const [showLoader,setShowLoader] = useState(true);
const navigate = useNavigate();
useEffect(()=>{
setTimeout(()=>{
  setShowLoader(false)
},2000)
},[])
function chatHandler(){
navigate("/astrologer")
}
  return (
    showLoader?<Loader/>:
    <div className='mt-20 h-screen overflow-hidden'>
    <div className=" md:mx-6 mx-4  h-3/4 relative">
<img src='./image/sky.jpg' className='w-full h-full bg-cover rounded-xl'/>
    <p className='text-orange-400 text-5xl font-serif shadow-2xl absolute top-8 left-8'>
      Chat online with our  <span className='text-6xl font-mono'> best Astrologer</span> <br/> <span className='text-6xl '>at AstroBuddy</span>
    </p>
    <img src='./image/guruji.jpg' alt='guruji' className=' w-40 top-1/2 left-28 md:w-72 absolute  md:top-1/3 md:left-1/3 '/>
    <button className='border p-3 mt-4 ml-10 bg-orange-600 rounded-lg text-white font-fantasy text-2xl font-bold absolute md:top-3/4 top-3/4 shadow-lg font-serif ' onClick={chatHandler}>Chat now</button> 
    </div>
    
    </div>
  )
}
export default Home