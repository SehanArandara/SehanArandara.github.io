import React, { useState } from 'react'
import logo from '../Assets/logo.jpg'
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillFilePersonFill } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-scroll'
import resume from "../Assets/resume.pdf"

export const NavBar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt="logo" style={{ width: '50px' }} />
            </div>
            {/**menu */}

            <ul className='hidden md:flex '>
                <li>
                    <Link to="home" smooth={true} offset={50} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="aboutme" smooth={true} offset={50} duration={500} >
                        About
                    </Link>
                </li>

                <li>
                    <Link to="skills" smooth={true} offset={50} duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="blogs" smooth={true} offset={50} duration={500} >
                        Projects
                    </Link>
                </li>
                <li>
                    <li>
                        <Link to="contact" smooth={true} offset={50} duration={500} >
                            Contact Me
                        </Link>
                    </li>
                </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl' ><Link  onClick={handleClick}to="home" smooth={true} offset={50} duration={500} >
                    Home
                </Link></li>
                <li className='py-6 text-4xl' ><Link onClick={handleClick} to="aboutme" smooth={true} offset={50} duration={500} >
                    About
                </Link></li>
                <li className='py-6 text-4xl' ><Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500} >
                    Skills
                </Link></li>
                <li className='py-6 text-4xl' ><Link onClick={handleClick} to="blogs" smooth={true} offset={50} duration={500} >
                    Projects
                </Link></li>
                <li className='py-6 text-4xl' ><Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500} >
                    Contact Me
                </Link></li>
            </ul>

            {/**social media icons */}

            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className="flex justify-between items-center w-full text-gray-300"
                            href='https://www.linkedin.com/in/sehan-arandara-1313b5218/'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333]'>
                        <a className="flex justify-between items-center w-full text-gray-300"
                            href='https://github.com/SehanArandara'>
                            GitHub <AiFillGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className="flex justify-between items-center w-full text-gray-300"
                            href='https://mailto:sdarandara123@gmail.com'>
                            Mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className="flex justify-between items-center w-full text-gray-300"
                            href={resume}>
                            Resume  <BsFillFilePersonFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    )
}
