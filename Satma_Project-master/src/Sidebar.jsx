import React from 'react'
import './Sidebar.css'

import plasticbagmobile from '../src/assets/Images/PbagMob.png';
import hamburgermobile from '../src/assets/Images/Hamburger.png';
import garbagemobile from '../src/assets/Images/Garbaging.png';
import satmamobile from '../src/assets/Images/satmaimg.png';
import { Card, Space } from 'antd';
import Sidebarmob from './Sidebarmob';


function Sidebar() {
  return (
    <>
      <div className="main_sidebar lg:flex sm:hidden md:hidden">

    
  <Space direction="vertical" size={16}>
    <Card className='boder border-emerald-500	boder-solid'
      title={<div className="custom-card-title border-emerald-500	boder-solid"></div>}
      
      style={{
        width: 300,
      }}
    >
      <p> This Report Has Been Made For Demonstration Purpose by Satma CE Only</p>
      <br />
      <p> Any Elements Or Images used here cannot be replicated or reused elsewhere</p>
         </Card>
    <Card className=' boder border-emerald-500	boder-solid'
      size={16}
      title={<p className="custom-card-title2"><b>Shrink Wrap</b> (Xyz Pvt LTD)</p>}
      
      style={{
        width: 300, 
      }}
    >
     <img src={garbagemobile} alt="" className='body2_img' />
            <p  className='spandiv text-center '>
              Shrink Wrap With 60% recycled Post
            </p>
              <span className='spandiv text-center ml-16'>~Consumer Waste</span>
            <img src={plasticbagmobile} alt="" className='body2_img' />
     
    </Card>
  </Space>
      
        </div>
<Sidebarmob/>
    </>
  )
}

export default Sidebar