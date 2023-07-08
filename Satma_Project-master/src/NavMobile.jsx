import React from 'react'
import './Navmob.css'
import react, { useState } from 'react'

function NavMobile() {

 const [active, setActive] = useState('1');
    
   
      const datamob =  [
            { id: 1, name: 'Product Journey'},
            { id: 2, name: 'Material Flow'},
            { id: 3, name: 'Images'},
            { id: 4, name: 'Emission Report'}
        ]
    
    const handleChange = (e) => {
       
        // const val=e.target.innerText.charAt(0).toLowerCase()+ e.target.innerText.substr(1,14).replace(" ","")
        // setShow(val);
        setActive(e.target.id);
        
    }
    
    return (
        <div>
            <div className="container_mob sm:flex  h-32 mt-3 md:hidden lg:hidden">
                {datamob.map((item) => (
                    <>
                        <div onClick={(e) => handleChange(e)} id={"1"} className="handleactive   flex justify-center cursor-pointer">
                            <div className={` titlediv ${item.id == active ? "paraname_handle" : " "} `} ><p id={item.id} className=''>{item.name}</p></div>
                            {/* <div className={` bg-slate-200 ${item.id == active ? "support_text_active" : "hidden"} flex items-center `} >
                            <p>{item.subtitle}</p>
                             </div> */}
                        </div>
                    </>
                ))}


            </div>
        </div>
    )
   }
  
  

export default NavMobile