import React from 'react'
import './Emission.css'
import HomeImage from "../src/assets/Images/Home.png";


function Emission() {
  return (
    <>

      <div className="emission_container  sm:flex flex-col w-4/5  md:flex lg:flex w-4/5 mt-12">
        <img src={HomeImage} alt="Emission_home_image" className='Homeimg' />

        <div className="Main_Card_Container sm:flex flex-col w-4/5 lg:flex my-2 ml-5 gap-x-2	">



          <div className='Box1 sm:flex  md:flex lg:flex md:flex-row  flex-col'>

            <div className="card sm:w-72 h-32 lg:flex flex-col w-72 h-32 ">
              <div className="card_heading">
                <h1> Carbon Saved</h1>
              </div>
              <div className="card_body">
                <p className="p1">7.20 tons</p>
              </div>
            </div>

            <div className="card sm:w-72 h-32 lg:flex flex-col w-72 h-32 ">
              <div className="card_heading">
                <h1 > Water Saved vs Virgin Equivalent</h1>
              </div>
              <div className="card_body">
                <p className="p1">7.20 m3</p>
              </div>
            </div>
          </div>


          <div className='Box2 sm:flex  md:flex lg:flex md:flex-row flex-col'>
            <div className="card sm:W-72 h-32 lg:flex flex-col w-72 h-32">
              <div className="card_heading">
                <h1> Total Waste Used</h1>
              </div>
              <div className="card_body">
                <p className="p1">5 tons</p>
              </div>
            </div>
            <div className="card sm:W-72 h-32 lg:flex flex-col w-72 h-32">
              <div className="card_heading">
                <h1> Electricity Saved Vs Virgin Equiv..</h1>
              </div>
              <div className="card_body">
                <p className="p1">194,867 MJ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Emission