import React from 'react'

const Box = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className='p-[50px] rounded-lg w-[35%] flex flex-col justify-center items-center text-center'>
        <img src={props.src} alt="img" className='w-[100px] '></img>
        <h1 className='my-[20px] text-[30px] font-bold text-gray-800'>{props.heading}</h1>
        <p className='font-semibold text-gray-600'>{props.text}</p>

    </div>
  )
}

export default Box;