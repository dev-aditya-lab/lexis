import React from 'react'

const Btn = ({text}) => {
  return (
    <>
    <button className="px-4 py-2 ml-2 leading-snug text-white transition-colors bg-purple-600 rounded-md cursor-pointer hover:bg-purple-700 ">{text}</button>
    </>
  )
}

export default Btn