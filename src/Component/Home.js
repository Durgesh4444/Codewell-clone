import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'
import Footer from "./Footer"
import ChallengeCard from "./ChallengeCard";

const Navbar = () => {
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
{/* ---------------------------------------------------------------------------- */}
<div className="flex mt-[60px] gap-[30px]">
      <div className="w-[70%] pt-[20px]">
        <h1 className="text-[42px] font-bold text-[#212529] ">Improve your HTML and CSS skills by practicing on real design templates.</h1>
        <p className="text-[17px] font-semibold text-gray-700 my-[20px]">With Codewell, you can browse high quality Figma templates that you can use to sharpen your HTML and CSS skills.</p>
        <h3 className="text-[17px] flex items-center gap-[10px] my-[10px]"><span className="text-[25px]"><i class="fa-solid fa-circle-check"></i></span>New templates every week.</h3>
        <h3 className="text-[17px] flex items-center gap-[10px] my-[10px]"><span className="text-[25px]"><i class="fa-solid fa-circle-check"></i></span> Access to Slack channel, even for unpaid members.</h3>
        <h3 className="text-[17px] flex items-center gap-[10px] my-[10px]"><span className="text-[25px]"><i class="fa-solid fa-circle-check"></i></span>All assets are included in all templates.</h3>
        <button className="flex items-center gap-[10px] bg-[#1890ff] text-[#fff] py-[10px] px-[20px] rounded-md mt-[30px] font-semibold hover:bg-[#40A9FF] duration-500"><span className="text-[22px]"><i class="fa-brands fa-github"></i></span>Login with Github</button>

      </div>
     
      <div className="w-[70%]">
      <img src="https://www.codewell.cc/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fheroimage.ec17b9f14c842697e05865dfe09541c1.png&w=3840&q=75" alt="img"></img>
      </div>

     </div>
  </section>
{/* ----------------------------------------------------------------------------- */}

<section className='w-[72%] mx-[auto]'>
      <h1 className='text-[26px] font-bold my-[30px]'>Challenges</h1>
      <div className='flex gap-[53px] mb-[50px]'>
        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2Fon_Deck_Main_Thumbnail_6ffb6aa05b.jpg&w=1080&q=75" heading="Javascript30 Navbar" text="Perfect to practice day 22 of Wes Bos's Javascript 30 course, a follow along navbar." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FPersonal_Blog_Main_Thumbnail_73c31210b9.jpg&w=1080&q=75" heading="Personal Blog" text="Perfect for practicing modular components and responsive design." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FDeveloper_Main_Thumbnail_6d3bc6a0bb.jpg&w=1080&q=75" heading="Web Developer Portfolio" text="Great to practice basic CSS skills and build your web developer portfolio around." />
      </div>
    </section>

    {/* ---------------------------------- */}

    <section className="w-[72%] flex mx-[auto] my-[50px] gap-[60px] bg-[#D5EFF7] rounded-md">
      <div className="p-[50px]">
        <img src="https://www.codewell.cc/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fslack.0455c2006ce266d24bec2ed34d2fe5c2.png&w=1920&q=75" alt="img" className="w-[200px] mb-[40px]"></img>
        <h1 className="text-[25px] text-[#212529] font-bold mb-[10px]">Join Our Slack Channel</h1>
        <p className="w-[115%]">Chat and discuss solutions with a growing community of developers.</p>
        <button className="bg-[#1890ff] text-[#fff] ml-[auto] py-[15px] px-[20px] rounded-md mt-[30px] font-semibold hover:bg-[#40A9FF] duration-500">Join Our Community</button>  

      </div>
      
      <div className="w-[60%]">
      <img src="https://www.codewell.cc/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fpattern.ca3fcdc3b9135772aacad227933a3c10.png&w=750&q=75" alt="img" ></img>

      </div>
    </section>
     
    <Footer/>
    </>
  );
};

export default Navbar;
