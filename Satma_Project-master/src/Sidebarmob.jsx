import React from 'react'
import plasticbagmobile from '../src/assets/Images/PbagMob.png';
import hamburgermobile from '../src/assets/Images/Hamburger.png';
import garbagemobile from '../src/assets/Images/Garbaging.png';
import satmamobile from '../src/assets/Images/satmaimg.png';
import { Card, Space } from 'antd';
import  './Sidebarmob.css';


function Sidebarmob() {
  return (
    <>
 <div className="mobile_sidebar sm:flex w-70 md:flex w-192 flex-col lg:hidden">

   
    <div className="custom-card-title_mob sm:flex ml-9 flex-row ">
    <img src={satmamobile} alt="" className='w-52' />
    <img src={hamburgermobile} alt="" className='w-12  h-12 bg-emerald-500' />

      </div>
<Space direction="horizontal" size={10} className='mt-2 mx-8 sm:flex h-32 '>
         
    <Card className='antcardbody boder border-emerald-500	boder-solid sm:flex'
      style={{
        width: 370, 
      }}
    >
    <div className='cardbody_mob sm:flex md:flex lg:hidden'>
     <img src={plasticbagmobile} alt="" className='body2_img_mob' />
     <div className='card_sub_body sm:flex  flex-col ml-2'>
     <p className='mob_para m-3 text-sm font-normal' >
       Retail bag <span>(SKU 246757BU)</span>
     </p>
     <div className="line-2"></div>
     <p className=' text-lg font-normal text-center'> Waste Used</p>
     <p className='text-center'>75% rLDP</p>
            </div>
            </div>
     
    </Card>
    </Space>
</div>
    </>
  )
}

export default Sidebarmob