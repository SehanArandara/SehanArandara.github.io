import React from 'react';
import sliit from "../Assets/sliit.png"
import tc from "../Assets/TC1.png"

const Education = () => {
    return (
        <div className="education  mx-auto bg-[#0a192f] p-20 pt-3">
            {/* Heading */}
            <div className="text-[#00dbfe] text-3xl text-center lg:pt-28 lg:text-4xl font-bold pt-20 mb-6 lg:mb-15">
                Education
            </div>

            {/* Campus */}
            <div className="flex items-center mb-8 text-gray-300 m-5 md:m-20 border border-gray-500 p-4 md:p-6 rounded">
                <div className="mr-5 md:mr-10">
                    <img src={sliit} alt="Campus Logo" className="w-16 h-16 md:w-20 h-20 object-contain" />
                </div>
                <div>
                    <div className="font-bold">Sri Lanka Institute of Information Technology</div>
                    <div className="text-sm">
                        Bsc. Special (Hons) Information Technology Specialization - Software Engineering
                    </div>
                    <div className="text-sm">2021-present</div>
                    <div className="text-sm">GPA: 3.4</div>
                </div>
            </div>


            {/* School */}
            <div className="flex items-center mb-8 text-gray-300 m-5 md:m-20 border border-gray-500 p-4 md:p-6 rounded">
                <div className="mr-10">
                    <img src={tc} alt="School Logo" className="w-16 h-16 md:w-20 h-20 object-contain " />
                </div>
                <div>
                    <div className="font-bold">Thakshila College - Gampaha</div>
                    <div className="text-sm">AL: Other stream (Maths+IT)</div>
                    <div className="text-sm">2019</div>
                    <div className="text-sm">
                        ICT: B / Combined Maths: S / Physics: S / z score: 0.7972
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Education;
