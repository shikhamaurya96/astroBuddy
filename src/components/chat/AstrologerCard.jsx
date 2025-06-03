import React,{useState} from 'react'

const AstrologerCard = ({name,image,experties,language,experience}) => {
   
  return (
    <div  className='md:w-1/3 w-full border bg-white shadow-lg shadow-gray-600 p-4 flex gap-12'>
        <div>
<img src={image} alt='astrologer' className='w-24'/>
<p>reviews</p>
        </div>
        <div>
<h1  className='text-lg font-bold'>{name}</h1>
<p >Experties : <span className='text-sm text-gray-700'>{experties.join(", ")}</span></p>
<p>
    Lang : <span className='text-sm text-gray-700'>{language.join(", ")}</span>
</p>
<p>
    Exp : <span className='text-sm text-gray-700'>{experience}</span>
</p>
<button className='bg-green-600 text-white p-1 rounded-lg float-right font-bold'>Chat</button>
        </div>
        </div>
  )
}

export default AstrologerCard