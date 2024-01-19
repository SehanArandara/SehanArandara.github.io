import React from 'react'
import MyFace from "../Assets/MyFace.jpg"
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillFilePersonFill } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'
import { AiFillGithub } from 'react-icons/ai'


const AboutMe = () => {
    return (
        <div name='aboutme' className=' w-full mx-auto  bg-[#0a192f] pt-3'>
            <h1 className='text-[#00dbfe] text-3xl text-center lg:pt-28 lg:text-4xl font-bold  pt-20 mb-6 lg:mb-15 '>About Me</h1>
            <h3 className='text-[#8892b0] text-1xl text-center lg:text-1xl font-bold  mb-6 '>Associate Software Engineer</h3>
            
            <div className='lg:flex justify-center text-gray-300 lg:w-[1200px] mx-auto lg:mt-0'>
                <div className='mx-auto lg:mx-0 lg:self-center'>
                    <img src={MyFace} className='w-64 md:w-80 lg:w-[1200px] mx-auto rounded' alt='sehan' />
                </div>

                <div className='lg:ml-12 flex flex-col justify-between p-4'>
                    <h1 className='font-bold  lg:text-5xl text-2xl text-center lg:text-left mt-7 lg:mt-7 '>Sehan Arandara</h1>
                    <p className=' text-justify lg:p-0 mt-5 '>As an undergraduate student pursuing a BSc (Hons) in Information Technology
with a specialization in Software Engineering at the Sri Lankan Institute of
Information Technology (SLIIT), I am seeking opportunities to leverage my
strong coding skills and 6 months of industry experience to contribute to
meaningful projects within a dynamic team.
                    </p>

                    <h1 className='font-bold  lg:text-4xl text-2xl text-center lg:text-left mt-4 lg:mt-5 '>Interested In</h1>
                    <p className=' text-justify lg:p-0 '>Software Engineering <br /> Full Stack Engineering <br />Mobile App Engineering <br />AI/ML Engineering</p>
                    <div className="flex flex-row justify-content-center fs-2 gap-4 mt-5">
                        <a href='https://github.com/SehanArandara'>
                            <AiFillGithub className='w-10 h-10 hover:bg-[#161111]' />
                        </a>
                        <a href='https://www.linkedin.com/in/sehan-arandara-1313b5218/'>
                            <FaLinkedin className='w-10 h-10  hover:bg-blue-600' />
                        </a>
                        <a href='https://wa.me/+94779920805'>
                            <ImWhatsapp className='w-10 h-10 hover:bg-lime-500' />
                        </a>
                        <a href='https://mailto:sdarandara123@gmail.com'>
                            <HiOutlineMail className='w-10 h-10 hover:bg-[#6fc2b0]' />
                        </a>
                    </div>
                </div>


            </div>




        </div>
    )
}

export default AboutMe