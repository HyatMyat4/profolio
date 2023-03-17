import React from "react";
import { Typewriter } from "react-simple-typewriter";
function About() {
  return (
    <section id="About" className="w-full h-auto 400:h-[90vh] mt-[3vh]  frc  ">
      <div className="w-full h-auto fcc  items-start">
        <div className="w-full h-[60px] flex flex-row items-center ">
          <span className="text-[25px] mr-[10px] font-bold text-gray-700 dark:text-gray-200">
            <Typewriter
              words={["A b o u t  m e"]}
              loop={10}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
          <div className="w-[350px] h-[1px] hidden 600:flex bg-teal-500 mt-[5px]"></div>
        </div>
        <p className="text-[20px]">
          Hello! My name is <span className="text-teal-400">Htet Myat</span> and
          I enjoy coding things. My passion for web development began when I
          first learned to code with an java script. As I explored the world of
          technology, I discovered{" "}
          <span className="text-teal-400">web development</span> and was
          captivated by the creativity and innovation involved in building
          online experiences.
        </p>
        <p className="text-[20px] mt-[15px]">
          All i learning self study from
          <span className="text-rose-600"> youtube</span> ,
          <span className="text-emerald-500"> Google</span> ,
          <span className=" text-[#F48024]"> Stackoverflow</span>
        </p>
        <p className="text-[20px] my-[15px]">
          Fast-forward to today, and I have had the opportunity to work
          alongside proficient back-end developers and full-stack developers on
          the construction of real-world applications.
        </p>
        <p className="text-[20px]">
          In my free time, I start learing{" "}
          <span className=" text-sky-500">C++</span> for Game development ,{" "}
          <span className=" text-gray-500">Using Unreal engin 5 </span> .
        </p>
      </div>
    </section>
  );
}

export default About;
