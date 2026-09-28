import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ project, onClick }) => {
    const getIconColor = (category) => {
        const colors = {
            'AI & ML': 'text-violet-400',
            'Web App': 'text-blue-400',
            'Mobile': 'text-cyan-400',
            'Research': 'text-amber-400'
        };
        return colors[category] || 'text-slate-400';
    };

    const getGradient = (category) => {
        const gradients = {
            'AI & ML': 'from-violet-500/10 to-purple-500/10',
            'Web App': 'from-blue-500/10 to-cyan-500/10',
            'Mobile': 'from-cyan-500/10 to-teal-500/10',
            'Research': 'from-amber-500/10 to-orange-500/10'
        };
        return gradients[category] || 'from-slate-500/10 to-slate-600/10';
    };

    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            15,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.02,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            className="h-full"
        >
          <Tilt options={defaultOptions} className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all cursor-pointer group" >
            <div onClick={onClick} className="h-full">
            {/* Visual Header */}
            <div className={`relative h-40 bg-gradient-to-br ${getGradient(project.category)} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className={`relative z-10 ${getIconColor(project.category)} group-hover:scale-110 transition-transform duration-500`}>
                    {project.icon}
                </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.tagline}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded-md text-xs text-slate-300"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded-md text-xs text-slate-400">
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>

                {/* View Details Button */}
                <button className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                    View Details <ExternalLink size={14} />
                </button>
            </div>
            </div>
          </Tilt>
        </motion.div>
    );
};

export default ProjectCard;
