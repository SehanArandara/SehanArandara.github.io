import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Calendar, Building, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 bg-slate-900 border border-white/10 rounded-3xl z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                    {project.date && (
                                        <span className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            {project.date}
                                        </span>
                                    )}
                                    {project.association && (
                                        <span className="flex items-center gap-2">
                                            <Building size={14} />
                                            {project.association}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="text-slate-400 hover:text-white" size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">About</h3>
                                <p className="text-slate-300 leading-relaxed">{project.description}</p>
                            </div>

                            {/* Highlights */}
                            {project.highlights && project.highlights.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Key Highlights</h3>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-300">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            {(project.github || project.demo) && (
                                <div className="flex flex-wrap gap-4 pt-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                                        >
                                            <Github size={18} />
                                            View on GitHub
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/20 transition-colors text-cyan-300"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
