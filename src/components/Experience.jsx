import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

// Import logos (using placeholders if actual files aren't available yet, but referencing the Assets folder structure)
import codegenLogo from '../Assets/codegenLogo.jpg';
import conscienceLogo from '../Assets/Conscience.png';
import classicLogo from '../Assets/classic.jpg'; // Using travely as placeholder for Classic Travel if specific logo missing

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Associate Software Engineer",
            company: "Classic Travel - Expolanka Holdings",
            period: "Feb 2025 – Present",
            logo: classicLogo,
            description: [
                "Developing the EVS platform & mobile app using React Native and Laravel, streamlining student engagement.",
                "Leading R&D initiatives for AI/ML and LLM integration.",
                "Optimizing SQL databases and creating responsive UIs with Tailwind CSS."
            ],
            tech: ["React Native", "Laravel", "AI/ML", "SQL"]
        },
        {
            id: 2,
            role: "Associate Software Engineer",
            company: "Conscience Integrated (Pvt) Ltd",
            period: "Feb 2024 – Aug 2024",
            logo: conscienceLogo,
            description: [
                "Delivered scalable web solutions for marketing teams, including the Immiyami platform.",
                "Built backend features with CakePHP and interactive frontends using React.js."
            ],
            tech: ["React.js", "CakePHP", "Node.js"]
        },
        {
            id: 3,
            role: "Software Engineering Trainee",
            company: "CodeGen International (Pvt) Ltd",
            period: "July 2023 – Jan 2024",
            logo: codegenLogo,
            description: [
                "Contributed to the flagship TravelBox product, improving system usability.",
                "Full-stack development using Java Spring Boot and AngularJS within a Microservices architecture."
            ],
            tech: ["Java", "Spring Boot", "Angular", "Microservices"]
        }
    ];

    return (
        <section name="work" className="w-full min-h-screen bg-slate-950 text-white py-24 flex items-center justify-center relative overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                            Work Experience
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        My professional journey in the tech industry.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-30 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >

                                {/* Timeline Node (Logo) */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-950 shadow-xl z-10 flex items-center justify-center overflow-hidden group">
                                    <div className="absolute inset-0 bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-colors" />
                                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover p-1 rounded-full" />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all shadow-lg group"
                                    >
                                        <div className="flex flex-col gap-2 mb-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-indigo-300 font-medium">
                                                <Briefcase size={16} />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>

                                        <ul className="list-disc list-outside ml-4 space-y-2 mb-6 text-slate-300 text-sm leading-relaxed marker:text-indigo-500">
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-medium text-indigo-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty Space for the other side on desktop */}
                                <div className="hidden md:block md:w-1/2" />

                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
