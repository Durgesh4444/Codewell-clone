import React from 'react'
import Footer from "./Footer"
import { NavLink } from "react-router-dom";
import ChallengeCard from './ChallengeCard';


const Contact = () => {
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
      <section className='w-[72%] mx-[auto]'>
      <h1 className='text-[26px] font-bold my-[30px]'>Challenges</h1>
      <div className='flex gap-[53px] mb-[50px]'>
        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2Fon_Deck_Main_Thumbnail_6ffb6aa05b.jpg&w=1080&q=75" heading="Javascript30 Navbar" text="Perfect to practice day 22 of Wes Bos's Javascript 30 course, a follow along navbar." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FPersonal_Blog_Main_Thumbnail_73c31210b9.jpg&w=1080&q=75" heading="Personal Blog" text="Perfect for practicing modular components and responsive design." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FDeveloper_Main_Thumbnail_6d3bc6a0bb.jpg&w=1080&q=75" heading="Web Developer Portfolio" text="Great to practice basic CSS skills and build your web developer portfolio around." />
      </div>
{/* --------------------------------------- */}

      <div className='flex gap-[53px] mb-[50px]'>
        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FArclight_Main_Thumbnail_ba22d8b257.jpg&w=1080&q=75" heading="Arclight Landing Page" text="Perfect for practicing your layout and responsive design skills." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FYelp_Camp_Main_Thumbnail_a223871c8b.jpg&w=1080&q=75" heading="YelpCamp by Colt Steele" text="Practice Colt Steele's project YelpCamp, covers everything from HTML to Advanced.	" />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FWorkside_Main_Thumbnail_5cfd4cd51e.jpg&w=1080&q=75" heading="Workside Job Board" text="Perfect for practicing project planning and different layouts at different breakpoints." />
      </div>

      {/* -------------------------------------------------- */}

      <div className='flex gap-[53px] mb-[50px]'>
        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FContrast_Main_Thumbnail_fa64c2ecab.jpg&w=1080&q=75" heading="Contrast Directory" text="Practice your CSS, loops, and fetch Javascript skills with this challenge." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FChirp_Main_Thumbnail_2_13d757aeaa.jpg&w=1080&q=75" heading="Chirp Landing Page" text="Perfect for practicing layouts, flex/grid and scrollable components." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FSubway_Main_Thumbnail_a28c60aea7.jpg&w=1080&q=75" heading="Multi Step Form" text="Practice creating a multi step form, custom components, and much more in this template." />
      </div>
{/* --------------------------------------------------------------- */}

      <div className='flex gap-[53px] mb-[50px]'>
        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FMeeet_Main_Thumbnail_3eddc77e32.jpg&w=1080&q=75" heading="Meeet Waitlist Template" text="A fun and simple project to practice responsiveness and positioning." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2Flink_Profile_Main_Thumbnail_149435edf1.jpg&w=1080&q=75" heading="linkProfile App" text="Perfect for practicing HTML/CSS and simple creation/deletion in Javascript." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FAccountable_Main_Thumbnail_2_981bb56c5c.jpg&w=1080&q=75" heading="Accountable Social Media Feed" text="Perfect to practice your responsive design, flex and/or grid skills." />
      </div>

{/* -------------------------------------------------------------------- */}
<div className='flex gap-[53px] mb-[50px]'>
        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FHosterr_Main_Thumbnail_d19f2c9607.jpg&w=1080&q=75" heading="Hosterr Waitlist Page" text="Great template to practice your CSS transform and flex skills." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FNewsletter_Main_Thumbnail_3baf90df69.jpg&w=1080&q=75" heading="Newsletter Popup Template" text="Perfect to practice creating % based containers and using flex or grid." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FIdeate_Main_Thumbnail_104eb6654b.jpg&w=1080&q=75" heading="Ideate Dashboard" text="Perfect to practice creating graphs, CSS grid, and much more." />
      </div>
{/* ---------------------------------------------------------------------------- */}
      <div className='flex gap-[53px] mb-[50px]'>
        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FRemix_Main_Thumbnail_1db70d9d83.jpg&w=1080&q=75" heading="Remix Template" text="Great template to practice CSS transforms, light/dark toggles, and much more." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FUnifeed_Main_Thumbnail_min_23437edba3.jpg&w=1080&q=75" heading="Unifeed Blog Page" text="A blog page perfect for practicing both Flex and Grid. Beginner level." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FCommune_Main_Thumbnail_min_e541984470.jpg&w=1080&q=75" heading="Commune Waitlist Page" text="The perfect template for beginners to start working on their HTML and CSS skills." />
      </div>
      <div className='flex gap-[53px] mb-[50px]'>
        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FTime_Now_Main_Thumbnail_min_99e0f87eb6.png&w=1080&q=75" heading="TimeNow Landing Page" text="A 2-page template, perfect for practicing custom components and flex layouts." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FComment_Main_Thumbnail_min_c6156ea4db.jpg&w=1080&q=75" heading="Comment Module" text="A comment box with nested replies. Perfect for practicing positioning. Intermediate level." />

        <ChallengeCard src="https://www.codewell.cc/_next/image?url=https%3A%2F%2Fcodewell-storage-bucket.s3.us-east-2.amazonaws.com%2FSnipper_Main_Thumbnail_min_20a219961c.png&w=1080&q=75" heading="Snipper Landing Page" text="Snipper's a really fun project if you want some quick coding to do.for beginners." />
      </div>
      
      </section>


      <Footer/> 
    </div>
    
  )
}

export default Contact