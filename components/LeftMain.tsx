import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
function LeftMain() {
  return (
    <div className="w-[100px]  h-[93vh] hidden 1000:flex  fcc  animate-slideup42 items-center justify-end fixed bottom-0">
      <div className="mb-[20px] hover:scale-125 transition-all duration-75">
        <VscGithubAlt className="text-[28px] text-gray-700   cursor-pointer" />
      </div>
      <div className="mb-[20px] hover:scale-125 transition-all duration-75">
        <FaLinkedinIn className="text-[28px] text-[#0A66C2] cursor-pointer" />
      </div>
      <div className="mb-[20px] w-[30px] hover:scale-125 transition-all duration-75 cursor-pointer">
        <img src="/5296765_camera_instagram_instagram logo_icon.png" />
      </div>
      <div className="mb-[20px] hover:scale-125 text-sky-400 transition-all duration-75">
        <SlSocialTwitter className="text-[28px] cursor-pointer" />
      </div>
      <div className="mb-[20px] hover:scale-125 text-blue-500 transition-all duration-75">
        <FaFacebookF className="text-[28px] cursor-pointer" />
      </div>
      <div className="w-[2px] h-[150px]  bg-teal-400  "></div>
    </div>
  );
}

export default LeftMain;
