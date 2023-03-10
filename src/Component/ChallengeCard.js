import React from 'react'

const ChallengeCard = (props) => {
  return (
    <div className='border-solid border-[1px] border-gray-300 p-[20px] w-[30%]'>
        <img src={props.src} alt="img"className='w-[300px] rounded-md'  ></img>
        <h1 className='text-gray-900 font-semibold text-[17px] my-[10px]' >{props.heading}</h1>
        <p className='text-[14px] font-semibold mb-[10px]'>{props.text}</p>
        <button className="flex items-center gap-[5px] bg-[#1890ff] text-[#fff] py-[15px] px-[79px] rounded-md hover:bg-[#40A9FF] duration-500 font-semibold">View Challenge<span className="text-[12px]"><i class="fa-solid fa-arrow-right-long"></i></span></button>

    </div>
  )
}

export default ChallengeCard