import React,{useState} from 'react'
import ImgUnit from '../components/ImgUnit'
import wheat from '../assets/wheat/wheat.jfif'
import wheat2 from '../assets/wheat/wheat2.jfif'
import wheat3 from '../assets/wheat/wheat3.jfif'
import wheat4 from '../assets/wheat/wheat4.jfif'
import wheat5 from '../assets/wheat/wheat5.jfif'
import {BiRupee} from 'react-icons/bi';
import {AiOutlinePercentage} from 'react-icons/ai';
import Offer from '../components/Offer'
const ProductPage = () => {

    const [currentImg,setCurrentImg] = useState(wheat);
    // console.log(currentImg);
    const pricePerUnit = 300
    const quantity = "10"
    const rating = 3.7
    let stars =[];
    let desc =["India gate basmati rice - rozana","South","material features:vegetarian"]
    const fullStar = <i class="fa-solid fa-star"/>
    const halfStar = <i class="fa-sharp fa-solid fa-star-half"/>
    const moreStar = <i class="fa-sharp fa-solid fa-star-half"/>
    const handleClick = (e) =>{
        setCurrentImg(e.target.src);
        
    }

    const star = (rating) =>{
        while(rating>0.9){
            stars.push(fullStar);
            rating--;
        }
         if(rating > 0){
            stars.push(halfStar)
         }

         return stars
    }

  return (
    <div className='flex  items-center m-4'>
   
      <div className='flex flex-col my-20'>
      <button onClick={(e)=> { handleClick(e)}}  ><ImgUnit imgUrl={wheat5}   /></button>
      <button onClick={(e)=> { handleClick(e)}} ><ImgUnit imgUrl={wheat}   /></button>
      <button onClick={(e)=> { handleClick(e)}} ><ImgUnit imgUrl={wheat2}   /></button>
      <button onClick={(e)=> { handleClick(e)}} ><ImgUnit imgUrl={wheat3}   /></button>
      <button onClick={(e)=> { handleClick(e)}} ><ImgUnit imgUrl={wheat4}   /></button>
      </div>


<div className='flex justify-center items-center ml-8 '  style={{
    "minHeight":"35em",
    "minWidth":"40em",
}}>
<img src={currentImg} alt="" width="640" className='rounded-xl'/>
</div>

{/* right */}
<div className='right flex flex-col ml-8'>
    {/* title */}
<div className='title text-3xl font-bold'>
Wheat from Mirzapur ({quantity}kg)
</div>
<div>
    
<div>rating </div>
<div className='relative'>
    <div className=' text-yellow-300'>
        
        {
            star(rating)
        }
          
        <span className='text-black'> {rating}</span>
    </div>
    
</div>
<hr/>
</div>




<div className='text-2xl'>
    <p className='text-red-600 text-lg font-bold'> Deal of The Day</p>
Price : <span className='flex items-center'><BiRupee/>{pricePerUnit}  </span>
<p className='text-lg font-thin italic'>Inclusive of all taxes</p>
<hr/>
</div>
<div className='flex items-center'>
    <span className='rounded-full border-2 border-black m-4'><AiOutlinePercentage/></span>
    <span className=''>All Offers</span>
</div>
<div className=' overflow-x-auto  space-x-2 flex' style={{
    "width":"400px"
}}>


    <Offer oName="Bank Offer" oDesc="Upto ₹57.50 discount on selected Banks" oNum="2" />
    <Offer oName="Bank Offer" oDesc="Upto ₹57.50 discount on selected Banks" oNum="2" />
    <Offer oName="Bank Offer" oDesc="Upto ₹57.50 discount on selected Banks" oNum="2" />
    

</div>
<div className='flex flex-col '>
    <button className='rounded-full text-xl bg-yellow-400 my-2 p-2'>Add to Cart</button>
    <button className='rounded-full text-xl bg-yellow-500 my-2 p-2'>Buy Now</button>
</div>
<div></div>
</div>


{/* about */}
<div className='about ml-8 ' style={{
    "height":"30em"
}}>
<p className='text-xl font-bold'> About This Item</p>
<div className='flex space-x-4'>
    <div className='font-bold'>
        <p>Diet Type</p>
        <p>Number of Items</p>
        <p>Weight</p>
    </div>
    <div>
        <p>	Vegetarian</p>
        <p>	1</p>
        <p>	{quantity*1000} grams</p>
    </div>
</div>
<hr/>
<div>
    <ul style={{
        "listStyle":"disc"
    }}>
        {desc.map((d) => (<li>{d}</li>))}
    </ul>
</div>
</div>
</div>

  
  )
}

export default ProductPage
