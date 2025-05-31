import React,{useState} from 'react'
import { Rating } from "@material-tailwind/react";
const AstrologerCard = () => {
    const [rated, setRated] =useState(4);
  return (
    <div  className='md:w-1/3 w-full border bg-white shadow-lg shadow-gray-600 p-4 flex gap-12'>
        <div>
<img src='./image/guruji.jpg' alt='astrologer' className='w-24'/>
<p>reviews</p>
        </div>
        <div>
<h1  className='text-lg font-bold'>Himali bhosle</h1>
<p >Experties : <span className='text-sm text-gray-700'>Vedic Astrology, Numerology, Palmistry</span></p>
<p>
    Lang : <span className='text-sm text-gray-700'>English, Hindi, Marathi</span>
</p>
<p>
    Exp : <span className='text-sm text-gray-700'>10 years</span>
</p>
<button className='bg-green-600 text-white p-1 rounded-lg float-right font-bold'>Chat</button>
        </div>
        </div>
  )
}

export default AstrologerCard