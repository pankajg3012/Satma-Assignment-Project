import   './Product.css'
import pankajMap from '../src/assets/Images/productmapweb.png'


function Product() {
  return (
    <>
    <div className='sm:flex   lg:flex flex-col'>
   <div className='bottom_img w-11/12'>
    <img src={pankajMap} alt="" className='productmap w-auto h-auto' />
     </div>
    
    </div>
    </>
  )
}

export default Product