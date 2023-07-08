import React, { useState } from 'react'
import {Modal, Button} from "antd"
import   './Imagebtn.css'
import img1 from '../src/assets/Images/transportweb.png';
import img2 from '../src/assets/Images/Sackweb.png';
import img3 from '../src/assets/Images/recieptweb.png';
import  img4 from '../src/assets/Images/machine.png'
import Imagesnavbar from './Imagesnavbar';


function Images() {
    const [showModal, setShowModal]=useState(false);
  return (
    <>
   <Imagesnavbar/>
   <div className="image_compo_contain sm:flex md:flex lg:flex mt-10">

    <div className='img_box lg:border-2 border-slate-700 rounded-lg width-full mx-auto my-0 '>
    <img src={img1} alt="" className='box_images_div' />
    <img src={img2} alt="" className='box_images_div' />
    <img src={img3} alt="" className='box_images_div' />
    <img src={img4} alt="" className='box_images_div' />
    <Button type="ghost" className='anchorpopup' onClick={()=>setShowModal(true)}>10+ More Images</Button>
    </div>
    
    <Modal title="" className="modal_img" open={showModal} onCancel={() => setShowModal(false)}>    
    <img src={img1} alt="" className='box_images_div1' />
    <img src={img2} alt="" className='box_images_div1' />
    <img src={img3} alt="" className='box_images_div1' />
    <img src={img4} alt="" className='box_images_div1' />
  </Modal>
  </div>
    </>
  )
}

export default Images