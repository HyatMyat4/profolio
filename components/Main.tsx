import React from 'react'
import { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

function Main() {


    useEffect(() => {
       const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {            
            if(entry.isIntersecting){
                 if(entry.target.id === 'About' ){
                    entry.target.classList.add('slideright')
                 }else if(entry.target.id === 'Projects'){
                  entry.target.classList.add('slideright')
                 }else if(entry.target.id === 'Skills'){
                  entry.target.classList.add('slideleft') 
                 }else{
                    entry.target.classList.add('slideleft')  
                 }
                
             
            }else{
                entry.target.classList.remove('slideleft')
                entry.target.classList.remove('slideright')
            }
        });
       })

        const  hiddenElements = document.querySelectorAll('section')
        hiddenElements.forEach((el) => observer.observe(el))
       
    }, [])
    


  return (
   
    <div  className=' w-full 800:w-[800px] h-[93vh] z-0 m-auto p-[15px] 1000:p-0  '>     
       <section id='section1' className='w-full 400:h-[91vh] mt-[3vh] frc my-[40px]  400:my-0 '>
            <div className='w-full h-auto fcc items-start'>
                 <span className='text-teal-400 text-[20px]'>Hi, my name is,</span>
                 <h1 className='text-[45px] font-bold  '>Htet Myat . </h1>
                   <h1 className='text-[50px] font-bold hidden 600:flex '>
                   <Typewriter
                    words={['I create and manage the web.']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={2000}
                  
                /></h1>
                   <h1 className='text-[50px] font-bold flex 600:hidden '>
                   I create and manage the web.</h1>
                   <p className=' text-[20px]'>
                    I'm a <span className='text-teal-400 '>full stack developer</span> . I am proficient
                     in designing and implementing complex features for <span className='text-sky-500'> websites </span> ,<span className=' text-orange-500'> desktop software </span> 
                      and <span className=' text-teal-500'>mobile applications</span> ,
                      which allows me to create solutions that are efficient, scalable, user-friendly,
                       and easy to maintain. Currently, I am expanding my skillset to include mobile
                        development using <span className=' text-cyan-400 '>Dart</span> , <span className=' text-sky-400'>Flutter</span> .</p>
                  <div className='px-[35px] py-[12px] border hover:scale-110 transition-all duration-75 cursor-pointer border-teal-400 mt-[30px] rfc justify-center   rounded-[5px]'>                   
                      <span className=' text-teal-400'>Resume</span>
                  </div>
            </div>

       </section>
         <About/>
         <Skills/>
         <Project/>
         <Contact/>
   
       
    </div>

  )
}

export default Main

