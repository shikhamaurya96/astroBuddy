import React,{useState,useEffect,useRef} from 'react'

const Loader = () => {
    //const [animate,setAnimate] = useState(false);
    
  return (
    <div className='  h-screen flex justify-center items-center'>
        <div>
        <img src='./image/astro.png'  className="w-[300px] bg-black animate-growSpin" />
        </div>
        
    </div>
  )
}

export default Loader