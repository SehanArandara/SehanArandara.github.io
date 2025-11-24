import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BookOpen, Award, MessageCircle, Play } from 'lucide-react';
import { SiPython, SiTensorflow, SiPytorch, SiOpenai } from 'react-icons/si';
import a1 from '../Assets/a1.jpg';
import a2 from '../Assets/a2.jpeg';
import a4 from '../Assets/a4.jpeg';
import a6 from '../Assets/a6.jpeg';
import a7 from '../Assets/a7.jpeg';

const Teaching = () => {
    const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);

    const stats = [
        { icon: <Users size={20} />, label: "200+ Learners Mentored" },
        { icon: <BookOpen size={20} />, label: "Machine Learning & GenAI Curriculum" },
        { icon: <Award size={20} />, label: "Hands-on Workshops" }
    ];

    const videos = [
        {
            id: 1,
            title: "Introduction to AI/ML batch 01",
            url: "https://www.youtube.com/embed/C2NBibuLQmw"
        },
        {
            id: 2,
            title: "Introduction to AI/ML batch 02",
            url: "https://www.youtube.com/embed/ncbUJM1K0pQ"
        }
    ];

    const techStack = [
        { icon: <SiPython size={32} />, name: "Python", color: "hover:text-yellow-400" },
        { icon: <SiTensorflow size={32} />, name: "TensorFlow", color: "hover:text-orange-500" },
        { icon: <SiPytorch size={32} />, name: "PyTorch", color: "hover:text-red-500" },
        { icon: <SiOpenai size={32} />, name: "OpenAI", color: "hover:text-green-400" }
    ];

    const testimonials = [
        { id: 1, image: a1, alt: "Student Testimonial 1" },
        { id: 2, image: a2, alt: "Student Testimonial 2" },
        { id: 3, image: a4, alt: "Student Testimonial 4" },
        { id: 4, image: a6, alt: "Student Testimonial 5" },
        { id: 5, image: a7, alt: "Student Testimonial 6" }
    ];

    return (
        <section name="teaching" className="w-full min-h-screen bg-slate-950 text-white py-24 flex items-center justify-center relative overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                            Teaching & Mentorship
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Empowering the next generation of developers. I bridge the gap between complex AI theory and practical application as an instructor at <span className="text-indigo-400 font-semibold">SKYREK</span>.
                    </p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
                        >
                            <div className="text-indigo-400">{stat.icon}</div>
                            <span className="text-sm font-medium text-slate-300">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Video Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="relative bg-white/5 backdrop-blur-md border border-indigo-500/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all shadow-lg hover:shadow-indigo-500/20">
                                <div className="aspect-video relative">
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    />
                                </div>
                                <div className="p-4 bg-gradient-to-t from-slate-900 to-transparent">
                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <Play size={16} className="text-indigo-400" />
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Curriculum Stack */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                        Covering Modern AI Stacks
                    </h3>
                    <div className="flex justify-center items-center gap-8 flex-wrap">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className={`text-slate-500 ${tech.color} transition-colors cursor-pointer`}
                                title={tech.name}
                            >
                                {tech.icon}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Toggle Button */}
                <div className="flex justify-center mb-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsTestimonialsOpen(!isTestimonialsOpen)}
                        className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/25 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12 origin-left" />
                        <span className="relative flex items-center gap-2">
                            <MessageCircle size={20} />
                            {isTestimonialsOpen ? "Hide Student Testimonials" : "See What My Students Say"}
                        </span>
                    </motion.button>
                </div>

                {/* Testimonials Slider */}
                <AnimatePresence>
                    {isTestimonialsOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-8 relative">
                                <div className="overflow-hidden">
                                    <motion.div
                                        className="flex gap-6"
                                        animate={{
                                            x: ["0%", "-50%"]
                                        }}
                                        transition={{
                                            x: {
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                duration: 25,
                                                ease: "linear"
                                            }
                                        }}
                                    >
                                        {/* First set */}
                                        {testimonials.map((testimonial) => (
                                            <div
                                                key={testimonial.id}
                                                className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all"
                                            >
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.alt}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        ))}
                                        {/* Duplicate set for seamless loop */}
                                        {testimonials.map((testimonial) => (
                                            <div
                                                key={`dup-${testimonial.id}`}
                                                className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all"
                                            >
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.alt}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Teaching;
