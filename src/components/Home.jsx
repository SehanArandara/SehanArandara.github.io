import React from 'react'
// import {HiArrowNarriwRight} from "react-icons"
import { FaCode } from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { Link } from "react-scroll"
import resume from "../Assets/resume.pdf"

import sd1 from "../Assets/sd1.jpg"


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f] flex items-center'>
            {/**content container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
                <p className='text-2xl text-[#00dbfe]'>Hi my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] mt-3'>Sehan Arandara</h1>
                <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0] mt-5'>
                    <img
                        src="https://readme-typing-svg.herokuapp.com?font=Oswald&size=30&pause=1000&color=8892B0&width=435&lines=I'm+an+Undergraduate+Student+-+SLIIT"
                        alt="Typing SVG"
                    />
                </h2>
                <br />
                <div className="flex">
                    <div className="flex flex-col md:flex-row">
                        <Link to="blogs" smooth={true} offset={50} duration={500} >
                            <button className="hover:border-[#00dbfe] text-white px-4 md:px-6 py-2 md:py-3 my-1 md:my-2 mr-0 md:mr-2 bg-slate-600 hover:bg-slate-700 rounded-md border-2 border-transparent  flex items-center">

                                <span className="mr-2 md:mr-3">My Projects</span>
                                <FaCode className="text-white" />
                            </button>
                        </Link>

                        <a  href={resume} download>
                        <button className="text-white px-4 md:px-6 py-2 md:py-3 my-1 md:my-2  mr-0 md:mr-2 bg-slate-600 hover:bg-slate-700 rounded-md border-2 border-transparent hover:border-[#00dbfe] flex items-center">
                            <span className="mr-2 md:mr-3">View My Resume</span>
                            <AiOutlineUser className="text-white" />
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            {/**image container */}
            <div className="w-72 h-72 mx-auto mb-8 rounded-full overflow-hidden">
                <img src={sd1} alt="My Face" className="object-cover w-full h-full rounded-full" />
            </div>


        </div>

    )
}

export default Home