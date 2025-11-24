import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, BookOpen } from 'lucide-react';
import { SiCoursera, SiGoogle, SiAmazonaws, SiUdacity, SiHackerrank } from 'react-icons/si';

const Education = () => {
    const certifications = [
        {
            id: 1,
            title: "Supervised Machine Learning: Regression & Classification",
            provider: "DeepLearning.AI",
            icon: <SiCoursera className="text-blue-500" size={24} />,
            color: "border-blue-500/20 hover:border-blue-500/50"
        },
        {
            id: 2,
            title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
            provider: "DeepLearning.AI",
            icon: <SiCoursera className="text-blue-500" size={24} />,
            color: "border-blue-500/20 hover:border-blue-500/50"
        },
        {
            id: 3,
            title: "Introduction to Generative AI",
            provider: "Google Cloud Skills Boost",
            icon: <SiGoogle className="text-red-500" size={24} />,
            color: "border-red-500/20 hover:border-red-500/50"
        },
        {
            id: 4,
            title: "Introduction to Large Language Models",
            provider: "Google Cloud Skills Boost",
            icon: <SiGoogle className="text-yellow-500" size={24} />,
            color: "border-yellow-500/20 hover:border-yellow-500/50"
        },
        {
            id: 5,
            title: "Machine Learning Foundations",
            provider: "AWS Educate",
            icon: <SiAmazonaws className="text-orange-500" size={24} />,
            color: "border-orange-500/20 hover:border-orange-500/50"
        },
        {
            id: 6,
            title: "SQL (Advanced) Certificate",
            provider: "HackerRank",
            icon: <SiHackerrank className="text-green-500" size={24} />,
            color: "border-green-500/20 hover:border-green-500/50"
        },
        {
            id: 7,
            title: "Introducing Generative AI with AWS",
            provider: "Udacity",
            icon: <SiUdacity className="text-cyan-500" size={24} />,
            color: "border-cyan-500/20 hover:border-cyan-500/50"
        }
    ];

    const coreModules = [
        "Machine Learning",
        "Deep Learning",
        "Cloud Computing",
        "Distributed Systems",
        "Software Architecture",
        "Data Structures & Algorithms"
    ];

    return (
        <section name="education" className="w-full min-h-screen bg-slate-950 text-white py-24 flex items-center justify-center relative overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" />
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
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
                            Education & Certifications
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        My academic foundation and continuous learning journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Left Column: Degree Card (Spans 2 cols on large) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 h-full"
                    >
                        <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                            {/* Background Icon */}
                            <GraduationCap className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8">
                                    <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
                                        <GraduationCap className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">BSc (Hons) in Information Technology</h3>
                                    <p className="text-cyan-400 font-medium mb-4">Specializing in Software Engineering</p>
                                    <p className="text-slate-400 text-sm flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-cyan-500" />
                                        SLIIT (Sri Lanka Institute of Information Technology)
                                    </p>
                                    <p className="text-slate-500 text-sm mt-2 ml-4">June 2021 – July 2025</p>
                                </div>

                                <div className="mt-auto">
                                    <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <BookOpen size={16} /> Core Modules
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {coreModules.map((module, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-xs font-medium text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
                                            >
                                                {module}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Certifications (Spans 3 cols on large) */}
                    <div className="lg:col-span-3">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl font-bold text-white mb-6 flex items-center gap-3"
                        >
                            <Award className="text-indigo-400" />
                            Professional Certifications
                        </motion.h3>

                        <div className="grid grid-cols-1 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                                    className={`flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl transition-all cursor-pointer group ${cert.color}`}
                                >
                                    <div className="p-3 bg-slate-900 rounded-lg border border-white/5 group-hover:scale-110 transition-transform">
                                        {cert.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                                            {cert.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                                            {cert.provider}
                                        </p>
                                    </div>
                                    <CheckCircle className="w-5 h-5 text-slate-600 group-hover:text-green-400 transition-colors opacity-0 group-hover:opacity-100" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
