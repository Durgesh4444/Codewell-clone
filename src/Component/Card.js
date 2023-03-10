import React from 'react'

const Card = (props) => {
  return (
    <div style={{backgroundColor:props.bgcolor}} className='border-solid border-[1px] border-gray-300 px-[40px] py-[60px] rounded-md mt-[50px]'>
      <h1 className='text-[23px] font-semibold'>{props.massage}</h1>
      <h1 className='text-[35px] font-bold'>{props.price}<span className='text-[20px] text-gray-500'>/mo</span></h1>
      <p className='font-semibold text-gray-600 text-[14px] my-[10px]' >{props.text}</p>
      <h3 className=' flex items-center gap-[10px] font-semibold text-gray-900'><span className='text-[#35C1A6] text-[22px]'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Access to free challenges</h3>  
      <h3 className=' flex items-center gap-[10px] font-semibold text-gray-900'><span className='text-[#35C1A6] text-[22px]'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Access to Slack community</h3>
      <h3 className=' flex items-center gap-[10px] font-semibold text-gray-900'><span className='text-[#35C1A6] text-[22px]'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Access to Figma design files</h3>
      <h3 className=' flex items-center gap-[10px] font-semibold text-gray-900'><span className='text-[#35C1A6] text-[22px]'><i class="fa-sharp fa-solid fa-circle-check"></i></span>Access to premium challenges</h3>



    </div>
  )
}

export default Card