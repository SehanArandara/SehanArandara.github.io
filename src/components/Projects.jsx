import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, BrainCircuit, Globe, FlaskConical, Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'AI & ML', 'Web App', 'Mobile', 'Research'];

    const projects = [
        {
            id: 1,
            title: "EZ Visa",
            tagline: "Award-winning mobile app for digital visa processing.",
            category: "Mobile",
            date: "Apr 2025 - Present",
            association: "Classic Travel",
            description: "A revolutionary mobile application that streamlines the visa application process through advanced OCR technology and AI-powered document processing. Winner of the National Innovation Award.",
            highlights: [
                "OCR Passport scanning with 98% accuracy",
                "Home-based E-Studio for professional passport photos",
                "National Innovation Award Winner 2025",
                "Reduced visa processing time by 60%"
            ],
            tech: ["React Native", "Python", "Flask", "AI/ML", "OCR", "TensorFlow"],
            icon: <Smartphone size={64} />,
            github: null,
            demo: null
        },
        {
            id: 2,
            title: "Study Fly",
            tagline: "AI-powered university application platform.",
            category: "AI & ML",
            date: "Feb 2025 - Present",
            association: "Classic Travel",
            description: "An intelligent platform that uses LLM technology to provide personalized university recommendations based on student profiles, academic history, and career goals.",
            highlights: [
                "LLM-based university recommendations using Gemini API",
                "Automated document upload and verification",
                "OCR integration for transcript processing",
                "Real-time application tracking"
            ],
            tech: ["React.js", "PHP", "Tailwind CSS", "Gemini API", "OCR"],
            icon: <BrainCircuit size={64} />,
            github: null,
            demo: null
        },
        {
            id: 3,
            title: "Intelligent EcoUrban Monitoring System",
            tagline: "IoT & AI solution for urban air quality forecasting.",
            category: "Research",
            date: "Jan 2024 - Jul 2025",
            association: "SLIIT Research Project",
            description: "A comprehensive IoT-based system that monitors urban air quality in real-time and uses deep learning models to predict pollution levels, helping cities make data-driven environmental decisions.",
            highlights: [
                "Real-time sensor integration (PM2.5, CO2, temperature)",
                "Predictive AI models with 92% accuracy",
                "Interactive data visualization dashboard",
                "Early warning system for pollution spikes"
            ],
            tech: ["IoT", "Python", "Flask", "React", "Deep Learning", "LSTM", "TensorFlow"],
            icon: <FlaskConical size={64} />,
            github: null,
            demo: null
        },
        {
            id: 4,
            title: "Personalized Roadmap Generator",
            tagline: "Generative AI learning path creator powered by Gemini.",
            category: "AI & ML",
            date: "Jul 2025",
            description: "An AI-powered tool that generates customized learning roadmaps for students and professionals based on their goals, current skill level, and available time.",
            highlights: [
                "Powered by Google Gemini for intelligent path generation",
                "Adaptive learning recommendations",
                "Progress tracking and milestone management"
            ],
            tech: ["Google Gemini", "React", "Flask", "Firestore"],
            icon: <BrainCircuit size={64} />,
            github: null,
            demo: null
        },
        {
            id: 5,
            title: "SkillSprint",
            tagline: "Microservices-based learning platform similar to Udemy.",
            category: "Web App",
            date: "2024",
            description: "A scalable e-learning platform built with microservices architecture, featuring course management, payment processing, and real-time video streaming.",
            highlights: [
                "Microservices architecture for scalability",
                "Integrated Stripe payment gateway",
                "Docker & Kubernetes deployment",
                "Real-time course progress tracking"
            ],
            tech: ["Spring Boot", "React", "Docker", "Kubernetes", "Stripe", "MongoDB"],
            icon: <Globe size={64} />,
            github: null,
            demo: null
        },
        {
            id: 6,
            title: "Bangalore House Price Prediction",
            tagline: "ML model for real estate price forecasting.",
            category: "AI & ML",
            date: "2024",
            description: "A machine learning model that predicts house prices in Bangalore based on location, size, amenities, and market trends.",
            highlights: [
                "Linear regression with feature engineering",
                "90% prediction accuracy",
                "Interactive Flask web interface"
            ],
            tech: ["Python", "Scikit-Learn", "Linear Regression", "Flask", "Pandas"],
            icon: <BrainCircuit size={64} />,
            github: null,
            demo: null
        },
        {
            id: 7,
            title: "Cancer Detection CNN",
            tagline: "Deep learning model for early cancer detection.",
            category: "Research",
            date: "2024",
            description: "A convolutional neural network trained to detect cancer cells from medical imaging data with high accuracy.",
            highlights: [
                "CNN architecture with transfer learning",
                "95% accuracy on test dataset",
                "Medical image preprocessing pipeline"
            ],
            tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
            icon: <FlaskConical size={64} />,
            github: null,
            demo: null
        },
        {
            id: 8,
            title: "Immiyami",
            tagline: "Immigration platform for visa and documentation services.",
            category: "Web App",
            date: "2024",
            association: "Conscience Integrated",
            description: "A comprehensive web platform for managing immigration services, visa applications, and client documentation.",
            highlights: [
                "Client portal for document management",
                "Automated email notifications",
                "Admin dashboard for case tracking"
            ],
            tech: ["CakePHP", "React", "MySQL", "Bootstrap"],
            icon: <Globe size={64} />,
            github: null,
            demo: null
        },
        {
            id: 9,
            title: "Travely",
            tagline: "Tourism management system for travel agencies.",
            category: "Web App",
            date: "2023",
            description: "A full-stack MERN application for managing tourism packages, bookings, and customer relationships.",
            highlights: [
                "Package booking system",
                "Payment integration",
                "Customer review system"
            ],
            tech: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
            icon: <Globe size={64} />,
            github: null,
            demo: null
        },
        {
            id: 10,
            title: "Astro-Dev Portfolio",
            tagline: "Modern portfolio website with stunning animations.",
            category: "Web App",
            date: "2025",
            description: "A sleek, modern portfolio website built with React and Framer Motion, showcasing projects and skills with beautiful animations.",
            highlights: [
                "Glassmorphism design",
                "Smooth scroll animations",
                "Responsive across all devices"
            ],
            tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
            icon: <Code2 size={64} />,
            github: null,
            demo: null
        }
    ];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section name="blogs" className="w-full min-h-screen bg-slate-950 text-white py-24 flex items-center justify-center relative overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A showcase of my work spanning AI/ML, full-stack development, and innovative solutions.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Modal */}
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

            </div>
        </section>
    );
};

export default Projects;
