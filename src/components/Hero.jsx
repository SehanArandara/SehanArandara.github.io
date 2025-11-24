import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Sparkles, ExternalLink } from 'lucide-react';
import { FaReact, FaPython, FaBrain } from 'react-icons/fa';
import { SiSpringboot, SiGoogle, SiVisualstudiocode, SiTensorflow } from 'react-icons/si';
import { Link } from 'react-scroll';
import profileImg from '../Assets/DP.jpg'; // Using DP.jpg as the profile image

const Hero = () => {
    const techIcons = [
        { icon: <FaReact size={28} />, color: "text-cyan-400", bg: "bg-cyan-400/10", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-12" },
        { icon: <FaPython size={28} />, color: "text-yellow-400", bg: "bg-yellow-400/10", position: "top-1/4 right-0 translate-x-8" },
        { icon: <SiTensorflow size={28} />, color: "text-orange-500", bg: "bg-orange-500/10", position: "bottom-1/4 right-0 translate-x-8" },
        { icon: <SiSpringboot size={28} />, color: "text-green-500", bg: "bg-green-500/10", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-12" },
        { icon: <SiGoogle size={28} />, color: "text-blue-500", bg: "bg-blue-500/10", position: "bottom-1/4 left-0 -translate-x-8" },
        { icon: <SiVisualstudiocode size={28} />, color: "text-blue-400", bg: "bg-blue-400/10", position: "top-1/4 left-0 -translate-x-8" },
    ];

    return (
        <section name="home" className="relative w-full min-h-screen bg-slate-950 text-white overflow-hidden flex items-center justify-center py-20 lg:py-0">

            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content - Text */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">

                    {/* Experience Tag */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-lg"
                    >
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-slate-200 tracking-wide">
                            2+ Years Exp. <span className="text-slate-500 mx-2">|</span> Mentored 300+ Students
                        </span>
                    </motion.div>

                    {/* Headlines */}
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl font-medium text-cyan-400"
                        >
                            Hello, I'm Sehan Arandara
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl lg:text-7xl font-bold tracking-tight font-sans leading-tight"
                        >
                            <span className="text-white">Software Engineer</span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                                & AI/ML Instructor
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-slate-400 max-w-xl leading-relaxed"
                        >
                            Building scalable tech at <span className="text-cyan-400 font-semibold">Classic Travel</span> and empowering the next generation of AI developers.
                            With 2+ years of industry experience, I bridge the gap between Full-Stack Engineering and Applied Machine Learning.
                        </motion.p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
                    >
                        <Link to="blogs" smooth={true} offset={50} duration={500} className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/25 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />
                                <span className="relative flex items-center justify-center gap-2">
                                    View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </Link>

                        <Link to="contact" smooth={true} offset={50} duration={500} className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl font-bold text-white hover:border-white/30 transition-colors flex items-center justify-center gap-2"
                            >
                                Contact Me <Mail className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Content - Profile & Orbit */}
                <div className="relative flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0">

                    {/* Orbit Container */}
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">

                        {/* Breathing Glow Behind */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 rounded-full blur-[60px] opacity-40"
                        />

                        {/* Profile Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-4 z-10 rounded-[2rem] overflow-hidden border-2 border-white/10 bg-slate-900 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 z-20 mix-blend-overlay" />
                            <img
                                src={profileImg}
                                alt="Sehan Arandara"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                        </motion.div>

                        {/* Floating Icons */}
                        {techIcons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                                className={`absolute ${item.position} z-20`}
                            >
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{
                                        duration: 3 + Math.random(),
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: Math.random() * 2
                                    }}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className={`p-4 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg ${item.bg} ${item.color} cursor-pointer`}
                                >
                                    {item.icon}
                                </motion.div>
                            </motion.div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
