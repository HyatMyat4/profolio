import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { BsBoxArrowUpRight, BsGear } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { Projectdata } from "../constant";
import Link from "next/link";

function Project() {
  return (
    <div id="Projects" className="mt-[20px] 600:mt-0">
      {Projectdata.map((data: Project) => (
        <section
          id={data.PROJECT_SHORT_NAME}
          className="w-full 400:h-[93vh] frc my-[40px]  400:my-0   "
        >
          <div
            id="monospace"
            className="w-full h-auto bg-slate-200 dark:bg-[#1e2439] rounded-[5px] shadow-lg "
          >
            <div className="w-[98%] h-auto rounded-[5px] relative group overflow-hidden  cursor-pointer  m-auto my-[8px]">
              <div className="w-full h-full   translate-x-[290px]  absolute rotate-[-55deg]  hidden   group-hover:inline   ">
                <div className="w-full h-full hidden 800:flex bg-slate-200 dark:bg-[#000000e2]  relative   animate-slidelefttranfrom  z-50 frc justify-center  ">
                  <div
                    className={`${
                      data.js === "" ? "hidden" : ""
                    } w-[40px] h-auto rotate-[55deg] translate-y-[-130px] translate-x-[110px] `}
                  >
                    <img src={data.js} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[45px] h-auto ${
                      data.Ts === "" ? "hidden" : ""
                    } rotate-[55deg] absolute top-[30px] right-[300px] `}
                  >
                    <img src={data.Ts} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[55px] h-auto ${
                      data.Nextjs === "" ? "hidden" : ""
                    } rotate-[55deg] absolute top-[100px] right-[240px] `}
                  >
                    <img src={data.Nextjs} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[50px] ${
                      data.tailwind === "" ? "hidden" : ""
                    } h-auto rotate-[55deg] translate-y-[-65px] translate-x-[110px]`}
                  >
                    <img src={data.tailwind} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[50px] ${
                      data.mui === "" ? " opacity-0" : ""
                    } h-auto rotate-[55deg] translate-y-[0px] translate-x-[105px]`}
                  >
                    <img src="/mui.png" className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[50px] h-auto ${
                      data.react === "" ? "hidden" : ""
                    } rotate-[55deg] translate-y-[-150px] translate-x-[-130px]`}
                  >
                    <img src={data.react} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[50px] ${
                      data.redux === "" ? "hidden" : ""
                    } h-auto rotate-[55deg] translate-y-[-70px] translate-x-[-120px]`}
                  >
                    <img src={data.redux} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[50px] h-auto ${
                      data.icons === "" ? "hidden" : ""
                    } rotate-[55deg] translate-y-[10px] translate-x-[-115px]`}
                  >
                    <img src={data.icons} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[50px] h-auto ${
                      data.pusher === "" ? "hidden" : ""
                    } rotate-[55deg] absolute  top-[20px] left-[180px] `}
                  >
                    <img src={data.pusher} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[65px] h-auto ${
                      data.nodejs === "" ? "hidden" : ""
                    } rotate-[55deg] absolute  top-[100px] left-[230px] `}
                  >
                    <img src={data.nodejs} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-auto  h-auto ${
                      data.Express === "" ? "hidden" : ""
                    }   rotate-[55deg] top-[168px] bottom-[35px] left-[230px] absolute cursor-pointer  `}
                  >
                    <div className="hover:scale-125 transition-all duration-75 ">
                      <span className="frc text-[20px] text-gray-500">
                        Express
                        <BsGear className="ml-[2px] animate-Fastspin" />
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-[25px] h-auto rotate-[55deg] ${
                      data.mongodb === "" ? "hidden" : ""
                    } absolute  top-[100px] left-[170px]  bottom-[250px] `}
                  >
                    <img src={data.mongodb} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[35px] h-auto ${
                      data.Firebase === "" ? "hidden" : ""
                    } rotate-[55deg] absolute  top-[20px] left-[100px]   `}
                  >
                    <img src={data.Firebase} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[45px] ${
                      data.mysql === "" ? "hidden" : ""
                    } h-auto rotate-[55deg] absolute  top-[100px] left-[50px] bottom-[-120px]   `}
                  >
                    <img src={data.mysql} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[45px] h-auto ${
                      data.postger === "" ? "hidden" : ""
                    } rotate-[55deg] absolute  top-[120px] left-[15px] bottom-[-340px]   `}
                  >
                    <img src={data.postger} className="ScaleAnimation" />
                  </div>
                  <div
                    className={`w-[40px] h-auto ${
                      data.prisma === "" ? "hidden" : ""
                    } rotate-[55deg] absolute  top-[160px] left-[15px] bottom-[-520px]   `}
                  >
                    <img src={data.prisma} className="ScaleAnimation" />
                  </div>
                </div>
              </div>

              <img src={data.PROJECT_IMG} className=" rounded-[5px] " />
            </div>
            <div className="p-[20px] pt-[10px] ">
              <span
                id="monospace"
                className=" animate-slideleft2 text-[20px] text-teal-400"
              >
                {data.PROJECT_NAME}
              </span>
              <p className="my-[20px] text-[15px] 550:text-auto">
                {data.PROJECT_TEXT} ....
                <a className="text-teal-400 text-[18px] z-50 cursor-pointer hover:text-orange-500 transition-all duration-75 ">
                  More
                </a>
              </p>
              <div className="w-full  h-auto frc justify-around flex-wrap my-[15px]">
                {data.langauge_Frontend.map((data) => (
                  <span className="m-[10px] mb-0 ">{data}</span>
                ))}
              </div>
              <div className="w-full  h-auto frc justify-around flex-wrap mb-[20px]">
                {data.langauge_Backend.map((data) => (
                  <span className="m-[10px] mb-0 ">{data}</span>
                ))}
              </div>
              <div className="w-[95%] h-[1px] bg-teal-800 m-auto "></div>
              <div className="w-full h-[60px] frc justify-end">
                <a
                  href={data.Frontend_Repo_Link}
                  className="w-auto relative  group"
                >
                  <div className="w-auto text-[10px] absolute left-[-13px] text-white hidden group-hover:flex top-[-25px] animate-slideup rounded-[20px] bg-black frc pl-[8px] pr-[8px] py-[1px] ">
                    Frontend
                  </div>
                  <VscGithubAlt className="text-[25px]  text-teal-400  cursor-pointer mr-[25px] ScaleAnimation" />
                </a>
                <a
                  href={data.Backend_Repo_Link}
                  className={`w-auto relative ${
                    data.Backend_Repo_Link === "" ? "hidden" : " "
                  } group`}
                >
                  <div
                    className="w-auto text-[10px] absolute left-[-13px] hidden group-hover:flex top-[-25px] animate-slideup 
                               rounded-[20px] bg-black frc pl-[8px] pr-[8px] py-[1px] text-white "
                  >
                    Backend
                  </div>
                  <GoMarkGithub className="text-[25px]  text-teal-400  cursor-pointer mr-[25px] ScaleAnimation" />
                </a>

                <Link
                  href={`/${data.PROJECT_SHORT_NAME}`}
                  className="w-auto z-50 relative  group"
                >
                  <div
                    className="w-auto text-[10px] text-white absolute left-[-13px] hidden group-hover:flex top-[-25px] animate-slideup 
                               rounded-[20px] bg-black frc pl-[8px] pr-[8px] py-[1px] "
                  >
                    Detail
                  </div>
                  <BsBoxArrowUpRight className="text-[25px]  text-teal-400  cursor-pointer mr-[25px] ScaleAnimation" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Project;
