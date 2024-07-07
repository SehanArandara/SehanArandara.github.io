import React from "react";
import codegenLogo from "../Assets/codegenLogo.jpg";
import Conscience from "../Assets/Conscience.png";
import { FaJava, FaJenkins, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJfrog, SiApachemaven, SiCakephp } from "react-icons/si";

const Work = () => {
  return (
    <div className="bg-[#0a192f]">
      <div className="text-[#00dbfe] text-3xl text-center lg:pt-28 lg:text-4xl font-bold pt-20 mb-6 lg:mb-15 bg-[#0a192f]">
        Work Experience
      </div>

      <div className="bg-[#0a192f] flex flex-col md:flex-row items-center mb-8 text-gray-300 m-5 md:m-20 border border-gray-500 p-4 md:p-6 rounded">
        {/* Logo on the left */}
        <div className="mr-0 md:mr-4 mb-4 md:mb-0">
          <img src={codegenLogo} alt="Codegen Logo" className="w-24 h-24 md:w-44 md:h-44" />
        </div>

        {/* Details on the right */}
        <div className="ml-0 md:ml-6">
          <div className="font-bold text-lg md:text-xl">Trainee Software Engineer</div>
          <br />
          <div className="text-sm md:text-base">CodeGen International (Pvt) Ltd</div>
          <div className="text-sm md:text-base">July 2023 - January 2024</div>
          <br />
          <div className="text-sm md:text-base">
            Collaborated closely with clients, particularly in the travel industry,
            utilizing Travel Box, Codegen's flagship product. <a href="https://codegen.co.uk/travelbox-platform/" className="text-[#00dbfe]">[Travel Box info]</a>
          </div>
          <div className="text-sm md:text-base mt-4">
            Technologies Used :
            <ul className="list-disc list-inside">
              <li>Java, Spring Boot, Maven, JFrog, Jenkins</li>
              <li>Angular, CSS</li>
              <li>SQL, PL SQL</li>
            </ul>
            <div className="flex items-center flex-wrap mt-3">
              <FaJava size={30} color="white" className="m-3 hover:bg-[#2342a1]" />
              <SiSpringboot size={30} color="white" className="m-3 hover:bg-[#2342a1]" />
              <SiMysql size={30} color="white" className="m-3 hover:bg-[#2342a1]" />
              <SiJfrog size={30} color="white" className="m-3 hover:bg-[#2342a1]" />
              <SiApachemaven size={30} color="white" className="m-3 hover:bg-[#2342a1]" />
              <FaJenkins size={30} color="white" className="m-3 hover:bg-[#2342a1]" />
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a192f] flex flex-col md:flex-row items-center mb-8 text-gray-300 m-5 md:m-20 border border-gray-500 p-4 md:p-6 rounded">
        {/* Logo on the left */}
        <div className="mr-0 md:mr-4 mb-4 md:mb-0">
          <img src={Conscience} alt="Conscience Logo" className="w-24 h-24 md:w-44 md:h-44" />
        </div>

        {/* Details on the right */}
        <div className="ml-0 md:ml-6">
          <div className="font-bold text-lg md:text-xl">Associate Software Engineer</div>
          <br />
          <div className="text-sm md:text-base">Conscience Integrated (Pvt) Ltd</div>
          <div className="text-sm md:text-base">February 2024 - Present</div>
          <br />
          <div className="text-sm md:text-base">
            I have contributed to various projects including the immiyami website for one of our clients. My work spans developing mobile and web applications for marketing purposes, as well as integrating APIs to enhance functionality and user experience.
          </div>
          <div className="text-sm md:text-base mt-4">
            Technologies Used :
            <ul className="list-disc list-inside">
              <li>CakePhp</li>
              <li>React JS</li>
              <li>MERN</li>
            </ul>
            <div className="flex items-center flex-wrap mt-3">
              <FaReact size={30} color="white" className="m-3 hover:bg-[#2342a1]" />
              <SiCakephp size={30} color="white" className="m-3 hover:bg-[#2342a1]" />
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
