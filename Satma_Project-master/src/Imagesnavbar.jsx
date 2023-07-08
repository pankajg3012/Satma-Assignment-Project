import React, { useState } from 'react'
import  './Imagenav.css'
import imagnav1 from '../src/assets/Images/RecyclingBin.png';
import imagnav2 from '../src/assets/Images/recycling.png';
import imagnav3 from '../src/assets/Images/Segregation.png';
import imagnav4 from '../src/assets/Images/Scan.png';
import imagmap from '../src/assets/Images/productmapmob.png';



function Imagesnavbar() {
  const [showimg,setShowimg]=useState(false)

  return (
  <>
    <div className='img_nav sm:flex md:flex lg:flex'>
    <div className="img1">
    <img src={imagnav1} alt="Collection_img" className='img_sub' />
    <span>Collection</span>
    </div>
    <div className="img2">
    <img src={imagnav2} alt="Segregation_img" className='img_sub'/>
    <span>Segregation</span>
    </div>
    <div className="img3">
    <img src={imagnav3} alt="Recycling_img" className='img_sub'/>
    <span>Recycling</span>
    </div>
    <div className="img4">
    <img  src={imagnav4} alt="productscan" className='img_sub'  />
    <span>Product</span>
    </div>

    </div>
    </>
  )
}

export default Imagesnavbar