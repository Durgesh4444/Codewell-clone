import React from 'react'

const Footer = () => {
  return (
    <section className='flex justify-center w-[70%] mx-[auto] gap-[50px] my-[70px]'>
      <div className='w-[50%]'>
        <img src='https://www.codewell.cc/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Flogo.a65eaf431610f253af8d444274b40158.png&w=640&q=75' className='w-[100px] mb-[10px]' alt='img'></img>
        <p className='text-[14px] font-semibold text-gray-600 '>With Codewell, you can browse high quality Figma templates that you can use to sharpen your HTML and CSS skills.</p>
      </div>

      <div>
        <h1 className='text-[17px] font-semibold mb-[10px]'>Codewell</h1>
        <p className='text-[14px] font-semibold text-gray-600'>Pro Subscription</p>
      </div>

      <div>
      <h1 className='text-[17px] font-semibold mb-[10px]'>Community</h1>
        <p className='text-[14px] font-semibold text-gray-600'>Slack Channel</p>
        <p className='text-[14px] font-semibold text-gray-600'>Blog</p>
      </div>

      <div>
      <h1 className='text-[17px] font-semibold mb-[10px]'>Resources</h1>
        <p className='text-[14px] font-semibold text-gray-600'>Privacy Policy</p>
        <p className='text-[14px] font-semibold text-gray-600'>Terms & Conditions</p>
        <p className='text-[14px] font-semibold text-gray-600'>Contact Us</p>

      </div>

    </section>
  )
}

export default Footer