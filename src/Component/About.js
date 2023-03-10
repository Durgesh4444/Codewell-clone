import React from 'react'
import Footer from "./Footer"
import { NavLink } from "react-router-dom";
import Box from './Box';
import Card from './Card';


const About = () => {
  return (
      <div>
       
      <nav className="bg-[#FFFFFF] drop-shadow-lg h-[80px] items-center flex gap-[2%] list-none text-[16px] font-semibold text-[gray] bg-[#fff] px-[20px] rounded-md w-[72%] mx-[auto] my-[40px]">
       
          <li> <NavLink to="/"><img src="https://www.codewell.cc/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Flogo.a65eaf431610f253af8d444274b40158.png&w=640&q=75" alt="img" className="w-[150px]"></img></NavLink></li>
          <li> <NavLink to="/About">Subscription</NavLink></li>
          <li><NavLink to="/Contact">Challenges </NavLink></li>
          <li><NavLink to="/Blog">Blog</NavLink></li>
          <button className="flex items-center gap-[10px] bg-[#1890ff] text-[#fff] ml-[auto] py-[10px] px-[20px] rounded-md hover:bg-[#40A9FF] duration-500"><span className="text-[22px]"><i class="fa-brands fa-github"></i></span>Login with Github</button>

      </nav>

{/* -------------------------------------------------- */}
      <section className='flex w-[72%] mx-[auto] bg-[#D5EFF7] px-[40px] rounded-lg py-[40px] gap-[100px]'>
      <div className='w-[80%]'>
      <h1 className="text-[42px] font-bold text-[#212529] ">Code a full project without needing any design skills.</h1>
        <p className="text-[16px] font-semibold text-gray-700 my-[20px]">You want to practice on real projects, but don’t have the design skills to design your own projects. We hear you, and that’s exactly why we made Codewell.
</p>
        <button className="flex items-center gap-[10px] bg-[#1890ff] text-[#fff] py-[10px] px-[20px] rounded-md mt-[30px] font-semibold hover:bg-[#40A9FF] duration-500">Unlock Pro Access</button>

      </div>
      <div className='w-[45%]'>
        <img src='https://www.codewell.cc/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Ffirst.defaa3645c8256029a5c5ecf9a17fe36.png&w=640&q=75' alt='img' className='relative bottom-[-40px]'></img>
      </div>

      </section>

      {/* -------------------------------------------------------------- */}
      <div className='flex justify-center gap-[28px] mt-[28px] mx-[auto]'>
      <Box color="#D7E3FF" src="https://www.codewell.cc/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fsecond.cc085ba8f96767d3efa6bc0ab7fb6ff0.png&w=384&q=75" heading="Source Files" text="Practice pixel-perfect developing with Figma source files for exact padding, spacing, and measurement sizes."/>

      <Box color="#FFD9D7" src="https://www.codewell.cc/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fthird.49f2a03255ef7e59b160c901d8773e6e.png&w=384&q=75" heading="All-Access" text="For just $8/mo — you can gain access to an entire library of templates designed by professionals with no compromises."/>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className='flex justify-center gap-[35px]'>
      <Card massage="Free" price="$0" text="Get a feel for what the challenges look like."/>
      <Card bgcolor="#D5EFF7" massage="Yearly" price="$6" text="All access to everything on Codewell."/>
      <Card massage="Monthly" price="$8" text="All access to everything on Codewell."/>

      </div>
      <Footer/>
    </div>
      
  )
}

export default About