import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import resume from '../Assets/resume.pdf';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'aboutme' },
        { name: 'Experience', to: 'work' },
        { name: 'Projects', to: 'blogs' },
        { name: 'Teaching', to: 'teaching' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold font-sans cursor-pointer"
                >
                    <Link to="home" smooth={true} duration={500}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                            SA
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="relative group text-slate-300 hover:text-white text-sm font-medium cursor-pointer transition-colors"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                        </Link>
                    ))}

                    <a href={resume} download>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors text-sm font-medium"
                        >
                            Resume <Download size={16} />
                        </motion.button>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 space-y-6 shadow-2xl"
                    >
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onClick={() => setIsOpen(false)}
                                className="text-lg text-slate-300 hover:text-cyan-400 font-medium cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href={resume} download onClick={() => setIsOpen(false)}>
                            <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium">
                                Download Resume <Download size={18} />
                            </button>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
