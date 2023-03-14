import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import DarkLightButton from './DarkLightButton';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { VscTriangleRight } from "react-icons/vsc";
export default function Header() {
   const [pathname , setpathname] = useState('')


   useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("hashchange", () => {
        const pathname = window.location.hash;
        setpathname(pathname);
      });
    }
   }, [])
   



  const isActive = pathname?.split("#").pop();
  console.log(isActive,'🍞')

    
  return (
    <div id='monospace' className='w-full h-[7vh]  z-[999]   group shadow-lg  dark:shadow-cyan-500/50 flex flex-row items-center justify-between '>    
       <Link href='/' className='w-[65px] h-auto animate-Fastspin   frc ml-[20px] cursor-pointer hover:animate-slowspin overflow-hidden'>
          <img src='/106451545-c7cef300-6497-11eb-80d9-e51c9fc3cd33.png'/>
       </Link>
        <div className='w-[500px] h-[60px] animate-slidedown  rounded-[5px] text-[18px] frc justify-around select-none'>
            <a href='#About'  className={`w-auto h-auto frc ${isActive === "About" ? "text-teal-400 scale-110" : ""}  hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer   `} >
                <VscTriangleRight className={` text-orange-500 ${isActive === "About" ? " animate-slowfade" : "hidden"}`} />About
            </a>
            <a href='#Skills' className={`w-auto h-auto frc ${isActive === "Skills" ? "text-teal-400 scale-110" : ""}  hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer`} >
              <VscTriangleRight className={` text-orange-500 ${isActive === "Skills" ? "animate-slowfade" : "hidden"}`} /> Skills
            </a>
            <a href='#Projects' className={`w-auto h-auto frc ${isActive === "Projects" ? "text-teal-400 scale-110" : ""} hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer`} >
              <VscTriangleRight className={` text-orange-500 ${isActive === "Projects" ? "animate-slowfade" : "hidden"}`} /> Projects
            </a>
            <a href="#Contact" className={`w-auto h-auto frc ${isActive === "Contact" ? "text-teal-400 scale-110" : ""} hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer`} >
            <VscTriangleRight className={` text-orange-500 ${isActive === "Contact" ? "animate-slowfade" : "hidden"}`} />  Contact
            </a>
        </div>
      <div className='mr-[38px]'>
         <DarkLightButton/>
      </div>
    </div>
  )
}
