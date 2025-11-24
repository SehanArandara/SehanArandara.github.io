import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Github, Linkedin, Mail, Cpu, Globe } from 'lucide-react';

const About = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardClass = "bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden shadow-xl";

    return (
        <section name="aboutme" className="w-full min-h-screen bg-slate-950 text-white py-24 flex items-center justify-center relative overflow-hidden">

            {/* Background Gradients (Matching Hero) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                            About Me
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A glimpse into my journey as a developer, mentor, and lifelong learner.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)] max-w-6xl mx-auto"
                >

                    {/* Item 1: Main Bio (Spans 2 cols, 2 rows) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className={`${cardClass} md:col-span-2 md:row-span-2 flex flex-col justify-center`}
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <Code2 className="w-32 h-32 text-cyan-400 transform rotate-12" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-cyan-500/10 rounded-lg">
                                    <Globe className="w-6 h-6 text-cyan-400" />
                                </div>
                                <span className="font-mono text-sm text-cyan-400 tracking-wider">developer_profile.json</span>
                            </div>

                            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">
                                The Coder & The Creator
                            </h3>

                            <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                I am a Software & AI/ML Engineer driven by impact. With over <span className="text-cyan-400 font-semibold">2 years of industry experience</span>,
                                I build scalable applications that solve real-world problems.
                            </p>

                            <p className="text-slate-300 leading-relaxed text-lg">
                                Currently, I'm engineering next-gen travel tech at
                                <span className="text-cyan-400 font-semibold"> Classic Travel</span>, blending Full-Stack development with Applied AI to create smarter, more efficient solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2: Instructor Journey (Spans 1 col, 2 rows) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className={`${cardClass} md:col-span-1 md:row-span-2 bg-gradient-to-br from-violet-900/20 to-transparent border-violet-500/20`}
                    >
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10 h-full flex flex-col items-center text-center justify-center py-8">
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-violet-500 blur-xl opacity-20 animate-pulse" />
                                <div className="w-20 h-20 bg-violet-500/10 rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Users className="w-10 h-10 text-violet-400" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3">AI Instructor</h3>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 rounded-full border border-violet-500/20 text-violet-300 text-sm font-semibold mb-6">
                                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                                300+ Students Mentored
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">
                                Passionate about democratizing AI. I conduct sessions on Machine Learning and Deep Learning, bridging the gap between theory and production.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 3: Tech Focus (New Item to replace Education - Spans 2 cols) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className={`${cardClass} md:col-span-2 flex items-center justify-between gap-8`}
                    >
                        <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">Tech Enthusiast</h4>
                            <p className="text-slate-400">Constantly exploring new horizons in Generative AI and Cloud Architecture.</p>
                        </div>
                        <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <Cpu className="w-8 h-8 text-indigo-400" />
                            <Code2 className="w-8 h-8 text-cyan-400" />
                            <Globe className="w-8 h-8 text-violet-400" />
                        </div>
                    </motion.div>

                    {/* Item 4: Social Connect (Spans 1 col) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className={`${cardClass} md:col-span-1 flex flex-col justify-center items-center bg-gradient-to-br from-cyan-900/20 to-transparent border-cyan-500/20`}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-slate-200">Let's Connect</h4>
                        <div className="flex gap-4">
                            <motion.a
                                href="https://github.com/SehanArandara"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 hover:text-white text-slate-400 transition-all"
                            >
                                <Github className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/sehan-arandara-1313b5218/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400 text-slate-400 transition-all"
                            >
                                <Linkedin className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="mailto:sdarandara123@gmail.com"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 text-slate-400 transition-all"
                            >
                                <Mail className="w-6 h-6" />
                            </motion.a>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
