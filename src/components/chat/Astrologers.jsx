import React from 'react'
import AstrologerCard from './AstrologerCard'
const Astrologers = () => {
  return (
    <div className='mt-16  h-screen overflow-x-hidden bg-blue-gray-50 '>
        <h1 className='text-center m-8 text-3xl font-sans font-bold'>Chat with your favourite <span className='text-orange-600'>Astrologer</span></h1>
        <div className='bg-orange-600 shadow-xl shadow-gray-500 rounded-md w-11/12 m-auto  md:w-2/3 md:p-6 p-2 flex md:flex-row flex-col  justify-between'>
          <p className='text-white mt-2 md:text-2xl'>
          Search your best Astrologer
          </p>
          <div className=' md:w-1/3 flex w-full'>
          <input type='search' placeholder='Search Astrologer' className='outline-none p-2 mt-2 w-full md:w-full rounded-lg '/>
          <button className='bg-blue-600 p-2 mt-2 ml-2 rounded-lg font-bold text-white'>Search</button>
          </div>
          

        </div>
        <div className=' mt-20 md:mx-28 mx-4'>
        <AstrologerCard/>
        </div>
        
    </div>
  )
}

export default Astrologers