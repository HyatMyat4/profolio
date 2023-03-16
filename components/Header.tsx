import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import DarkLightButton from "./DarkLightButton";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { VscTriangleRight, VscTriangleUp } from "react-icons/vsc";
export default function Header() {
  const [pathname, setpathname] = useState("");

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("hashchange", () => {
        const pathname = window.location.hash;
        setpathname(pathname);
      });
    }
  }, []);

  const isActive = pathname?.split("#").pop();

  return (
    <div
      id="monospace"
      className="w-full h-[7vh]  z-[999]    shadow-lg  dark:shadow-cyan-500/50 flex flex-row items-center justify-between "
    >
      <Link
        href="/"
        className="w-[65px] h-auto animate-Fastspin   frc ml-[20px] cursor-pointer hover:animate-slowspin overflow-hidden"
      >
        <img src="/106451545-c7cef300-6497-11eb-80d9-e51c9fc3cd33.png" />
      </Link>
      <div className="w-auto 800:w-[500px] group h-[60px] animate-slidedown  rounded-[5px] text-[18px] frc justify-between select-none">
        <div className="w-full h-full hidden 800:flex frc justify-around ">
          <a
            href="#About"
            className={`w-auto h-auto frc ${
              isActive === "About" ? "text-teal-400 scale-110" : ""
            }  hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer   `}
          >
            <VscTriangleRight
              className={` text-orange-500 ${
                isActive === "About" ? " animate-slowfade" : "hidden"
              }`}
            />
            About
          </a>
          <a
            href="#Skills"
            className={`w-auto h-auto frc ${
              isActive === "Skills" ? "text-teal-400 scale-110" : ""
            }  hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer`}
          >
            <VscTriangleRight
              className={` text-orange-500 ${
                isActive === "Skills" ? "animate-slowfade" : "hidden"
              }`}
            />{" "}
            Skills
          </a>
          <a
            href="#Projects"
            className={`w-auto h-auto frc ${
              isActive === "Projects" ? "text-teal-400 scale-110" : ""
            } hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer`}
          >
            <VscTriangleRight
              className={` text-orange-500 ${
                isActive === "Projects" ? "animate-slowfade" : "hidden"
              }`}
            />{" "}
            Projects
          </a>
          <a
            href="#Contact"
            className={`w-auto h-auto frc ${
              isActive === "Contact" ? "text-teal-400 scale-110" : ""
            } hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer`}
          >
            <VscTriangleRight
              className={` text-orange-500 ${
                isActive === "Contact" ? "animate-slowfade" : "hidden"
              }`}
            />{" "}
            Contact
          </a>
        </div>
        <div className="w-auto h-auto frc relative flex 800:hidden  ">
          <div className="mr-[20px]  ">
            <DarkLightButton />
          </div>
          <div
            className={`w-[35px] h-auto  group mr-[20px] cursor-pointer animate-slideright`}
          >
            <img src="/sidebar.svg" className="w-full" />
          </div>
          <div
            className={` bg-[#EEEEEE] dark:bg-[#10141e] shadow-lg hidden group-hover:flex fcc w-[200px] h-[250px] mr-[15px]  animate-slowfade3 rounded-[10px] absolute right-0 bottom-[-260px] z-[999]
              `}
          >
            <div className=" absolute right-0 top-[-16px] mr-[9px] ">
              <VscTriangleUp className=" text-[25px] text-[#dedcdc] dark:text-[#10141e] " />
            </div>
            <a
              href="#About"
              className="w-full h-[60px] frc justify-center text-[20px] hover:text-teal-400 cursor-pointer ScaleAnimation "
            >
              About
            </a>
            <a
              href="#Skills"
              className="w-full h-[60px] frc justify-center text-[20px] hover:text-teal-400 cursor-pointer ScaleAnimation"
            >
              Skills
            </a>
            <a
              href="#Projects"
              className="w-full h-[60px] frc justify-center text-[20px] hover:text-teal-400 cursor-pointer ScaleAnimation"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="w-full h-[60px] frc justify-center text-[20px] hover:text-teal-400 cursor-pointer ScaleAnimation "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="mr-[38px] hidden 800:flex">
        <DarkLightButton />
      </div>
    </div>
  );
}
