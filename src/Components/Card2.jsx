import React from 'react'

const Card2 = () => {
  return (
    <div>
        <div className=' p-5 flex flex-col justify-center items-center overflow-hidden mb-5'>
            <div className='bg-blue-500 h-16 w-16 lg:h-24 lg:w-24 rounded-full mb-3'>
                <img src="https://www.lexis.solutions/_next/image?url=%2Fimages%2F1-communication.png&w=64&q=75" className='h-full w-full' alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Communication is key</h1>
                <h2 className='mt-4 text-xl md:text-lg lg:w-64 text-gray-400'>Technical skills are essential, but we also prioritize teamwork and social skills training for a well-rounded approach.</h2>
            </div>
        </div>
    </div>
  )
}

export default Card2