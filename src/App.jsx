import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Routeing from './utils/routers/Routeing'


const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#111827";
  }, []);
  return (
    <>
        <Navbar/>
        <Routeing/>
    </>
  )
}

export default App