
import { useState } from 'react'
import Sidebar from './Sidebar'
import Product from './Product'
import Materialflow from './Materialflow'
import Images from './Images'
import Emission from './Emission'
import  './App.css'
import Imagesnavbar from './Imagesnavbar'
import Navbar from './Navbar'


function App() {
  
  const [show,setShow]=useState('productJourney');
  
 

  return (
    <>
    <div className="parent lg:flex  md:flex-row flex-col   w-full sm:flex  w-full md:flex flex ">
    <Sidebar/>
    <div className='Sub_navbar flex items-center flex-col'>
        <Navbar show={show} setShow={setShow}/>
        {["productJourney","images"].includes(show) && <Imagesnavbar/> }
        {show=="productJourney" && <Product/>} 
        {show=="materialFlow" && <Materialflow/>}
        {show=="images" && <Images/> }
        {show=="emissionReport" && <Emission/>}
  
    </div>
    </div>
    </>
  )
}

export default App
