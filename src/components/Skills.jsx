import React from 'react'
import {FaReact, FaJava, FaNode, FaHtml5, FaCss3,FaPhp} from 'react-icons/fa'
import {SiTailwindcss, SiMongodb, SiJavascript, SiPython, SiMysql, SiAdobephotoshop, SiFigma, SiIntellijidea ,SiKotlin,SiAndroidstudio} from 'react-icons/si'
import {TbBrandVisualStudio, } from 'react-icons/tb'



const Skills = () => {
  return (
    <div name = 'skills' className=' w-full mx-auto  bg-[#0a192f] pt-3'>
        <h1 className='text-[#00dbfe] text-3xl text-center lg:pt-28 lg:text-4xl font-bold yasiru pt-20 mb-15'>Skills</h1>

        <div className='flex flex-wrap justify-center items-center px-8  gap-4 lg:gap-8 lg:pt-16 mt-6  '>
          
          <FaJava size={50} color='white' className='m-3 hover:bg-[#2342a1]  p-2 transition-all'/>
          <SiJavascript size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>

          <FaReact size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          <FaNode size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          <SiMongodb size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          
          
          <SiPython size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          <FaHtml5 size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          <FaCss3 size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          
          <SiTailwindcss size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>

          <SiMysql size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>

          <SiKotlin size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          <FaPhp size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>

        </div>

    
        <div className='flex justify-center  gap-4 lg:gap-8 pt-12'>
          <TbBrandVisualStudio size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          <SiIntellijidea size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          <SiAdobephotoshop size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          <SiFigma size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>
          <SiAndroidstudio size={50} color='white'className='m-3  hover:bg-[#2342a1]  p-2 transition-all'/>

           
        </div>
        
    </div>
  )
}

export default Skills
