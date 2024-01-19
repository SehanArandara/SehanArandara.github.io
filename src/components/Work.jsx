import React from "react";
import codegenLogo from "../Assets/codegenLogo.jpg";
import { FaJava ,FaJenkins } from "react-icons/fa";
import { SiSpringboot,SiMysql,SiJfrog,SiApachemaven } from "react-icons/si";

const Work = () => {
    return (
        <div className="bg-[#0a192f]">
            <div className="text-[#00dbfe] text-3xl text-center lg:pt-28 lg:text-4xl font-bold pt-20 mb-6 lg:mb-15 bg-[#0a192f]">
                Work Experience
            </div>

            <div className="bg-[#0a192f] flex items-center mb-8 text-gray-300 m-5 md:m-20 border border-gray-500 p-4 md:p-6 rounded">
                {/* Logo on the left */}
                <div className="mr-4">
                    <img src={codegenLogo} alt="Codegen Logo" className="w-44 h-44" />
                </div>

                {/* Details on the right */}
                <div style={{
                    marginLeft : '38px'
                }}>
                    <div className="font-bold">Trainee Software Engineer</div>
                    <br/>
                    <div className="text-sm">CodeGen International (Pvt) Ltd</div>
                    <div className="text-sm">July 2023 - January 2024</div>
                    <br/>
                    <div className="text-sm">
                        Collaborated closely with clients, particularly in the travel industry,
                        utilizing Travel Box, Codegen's flagship product. <a href="https://codegen.co.uk/travelbox-platform/">[Travel Box info]</a>
                    </div>
                    <div className="text-sm">
                        Technologies Used :
                        <ul>
                            <li>Java, Spring Boot, Maven, JFrog, Jenkins</li>
                            <li>Angular, CSS</li>
                            <li>SQL, PL SQL</li>
                        </ul>
                        <div className='flex items-center'>
                            <FaJava size={30} color='white' className='m-3 hover:bg-[#2342a1]' />
                            <SiSpringboot size={30} color='white' className='m-3 hover:bg-[#2342a1]' />
                            <SiMysql size={30} color='white' className='m-3 hover:bg-[#2342a1]' />
                            <SiJfrog size={30} color='white' className='m-3 hover:bg-[#2342a1]' />
                            <SiApachemaven size={30} color='white' className='m-3 hover:bg-[#2342a1]' />
                            <FaJenkins size={30} color='white' className='m-3 hover:bg-[#2342a1]' />
                            {/* Add more icons as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
