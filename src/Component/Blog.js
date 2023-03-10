import React from 'react'
import Footer from "./Footer"
import { NavLink } from "react-router-dom";
const Blog = () => {
  return (
    <>
   <section className="bg-[#D5EFF7] m-[20px] rounded-md py-[20px] px-[200px]">
   <nav className=" h-[80px] items-center flex gap-[2%] list-none text-[16px] font-semibold text-[gray] bg-[#fff] px-[20px] rounded-md">
       
       <li> <NavLink to="/"><img src="https://www.codewell.cc/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Flogo.a65eaf431610f253af8d444274b40158.png&w=640&q=75" alt="img" className="w-[150px]"></img></NavLink></li>
       <li> <NavLink to="/About">Subscription</NavLink></li>
       <li><NavLink to="/Contact">Challenges </NavLink></li>
       <li><NavLink to="/Blog">Blog</NavLink></li>
       <button className="flex items-center gap-[10px] bg-[#1890ff] text-[#fff] ml-[auto] py-[10px] px-[20px] rounded-md hover:bg-[#40A9FF] duration-500"><span className="text-[22px]"><i class="fa-brands fa-github"></i></span>Login with Github</button>
   </nav>
      <h1 className="text-[40px] font-bold text-[#212529] text-center w-[60%] mx-[auto] mt-[80px] leading-tight">Development news, straight to your inbox.</h1>
      <p className="text-[17px] text-gray-700 my-[20px] text-center w-[55%] mx-[auto] mb-[70px]">Subscribe to receive updates whenever we post a new blog, release a new template, or do giveaways.</p>
      </section>
{/* ------------------------------------------------------------------ */}
<h1 className='text-[32px] font-bold leading-tight pl-[14%] mt-[50px]'>Featured Article</h1>
      <div className='flex w-[72%] mx-[auto] gap-[20px] my-[30px] mb-[100px]'>
      <div>
        <img src='https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2Fcover_image_81fb8f5a91.png&w=1080&q=75' alt='img' className='rounded-xl'></img>
        <h1 className='text-[25px] font-bold leading-tight my-[8px]'>Make it Happen with Joshua Dempsey</h1>
        <p>A series of guest interviews with aspiring developers to help beginners land their first gig.</p>
      </div>

      <div className='w-[45%] bg-[#D5EFF7] p-[30px] rounded-lg'>
        <h1 className='text-[32px] font-bold leading-tight'>Receive Exclusive free challenges when you sign up.</h1>
        <p className='text-[17px] text-gray-600 my-[20px]'>Sign up to our newsletter to receive a free challenge straight to your inbox, and stay updated when we release new templates, add new features, or do giveaways.</p>
        <input placeholder='email@example.com' className='w-[100%] pl-[20px] h-[50px] rounded-md mb-[15px]'></input>
    <button className="text-center bg-[#1890ff] text-[#fff] w-[100%] h-[50px] rounded-md hover:bg-[#40A9FF] duration-500 font-semibold">Send me updates</button>
      </div>
      
      </div>

      



    {/* ----------------------------------------------------------- */}

    <section className='bg-[#D5EFF7] mx-[20px] rounded-md py-[80px]'>
    <h1 className="text-[40px] font-bold w-[72%] text-[#212529] pr-[30%] mx-[auto] leading-tight">Stay updated with Codewell by signing up for our newsletter</h1>
    <p className="text-[17px] text-gray-700 my-[10px] w-[72%] mx-[auto] mb-[30px] pr-[25%]">Sign up to our newsletter to receive a free challenge straight to your inbox, and stay updated when we release new templates, add new features, or do giveaways.</p>
    <div className='flex w-[72%] mx-[auto] gap-[10px]'>
    <input placeholder='email@example.com' className='w-[30%] pl-[20px] h-[55px] rounded-md'></input>
    <button className="flex items-center gap-[10px] bg-[#1890ff] text-[#fff] py-[10px] px-[20px] rounded-md hover:bg-[#40A9FF] duration-500 font-semibold">Send me updates</button>
    </div>
    
    </section>
   <Footer/>
    </>
  )
}

export default Blog;