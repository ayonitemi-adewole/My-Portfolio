import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo/logo-2.png';

const MyProjects = ({ limit = null }) => {
    const [projects, setProjects] = useState([]);
    const [isLg, setIsLg] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth >= 1024;
        }
        return false;
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setIsLoading(false);
            });
    }, []);


    useEffect(() => {
        const handleResize = () => {
            setIsLg(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const visibleProjects = limit ? projects.slice(0, limit) : projects;
    const hasMoreProjects = limit != null && projects.length > limit;

    return (
        <div className='relative flex flex-col items-center justify-between w-full p-5 py-20 md:px-20 xl:px-20 md:mt-10 lg:mt-20 xl:mt-10 max-w-[1400px] mx-auto overflow-hidden'>
            {/* Background gradient orbs */}
            <div className="absolute top-40 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-40 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='flex flex-col items-center gap-3 mb-12'
            >
                <div className="relative inline-flex">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30"></div>
                    <div className="relative flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl">
                        <img src={logo} alt="" className="w-5 h-5" />
                        <p className='text-purple-400 text-sm font-semibold uppercase tracking-widest'>Latest Works</p>
                    </div>
                </div>
                <p className='text-3xl md:text-4xl lg:text-5xl text-neutral-300 font-medium text-center'>
                    Explore My Popular <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>Projects</span>
                </p>
            </motion.div>

            {isLoading ? (
                <div className="flex items-center justify-center w-full py-20">
                    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='grid grid-cols-1 gap-8 lg:gap-12 w-full'
                >
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            viewport={{ once: true }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 group ${(index % 2 === 0 || !isLg) ? '' : 'lg:flex-row-reverse'}`}
                        >
                            {/* Image Section */}
                            {(index % 2 === 0 || !isLg) ? (
                                <>
                                    <div className="relative overflow-hidden rounded-2xl">
                                        {/* Gradient border */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                                        <div className="relative">
                                            <motion.img
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.5 }}
                                                src={project.primaryImage}
                                                alt={project.title}
                                                className='w-full h-[300px] lg:h-[400px] object-cover'
                                            />
                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                                <Link
                                                    to={`/project-details/${index + 1}`}
                                                    className="flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                                                >
                                                    View Details
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center gap-5 p-6 lg:p-8'>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                                                <h3 className='text-lg lg:text-xl text-purple-400 font-medium mb-2'>{project.title}</h3>
                                                <p className='text-white text-2xl lg:text-4xl font-bold mb-4'>{project.name}</p>
                                                <p className='text-neutral-400 text-sm md:text-base lg:text-lg font-mono line-clamp-4'>{project.description}</p>

                                                <div className="flex flex-wrap gap-3 mt-5">
                                                    <Link
                                                        to={`/project-details/${index + 1}`}
                                                        className='inline-flex items-center gap-1 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors'
                                                    >
                                                        Read more...
                                                    </Link>
                                                    {/* <Link
                                                        to={`/project-details/${index + 1}`}
                                                        className='flex items-center justify-center w-12 aspect-square text-neutral-400 border border-white/10 hover:bg-purple-600 hover:scale-110 group transition rounded-full'
                                                    >
                                                        <ArrowUpRight className='inline-block group-hover:text-white group-hover:rotate-45 transition' />
                                                    </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='flex flex-col justify-center gap-5 p-6 lg:p-8 order-2 lg:order-1'>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                                                <h3 className='text-lg lg:text-xl text-purple-400 font-medium mb-2'>{project.title}</h3>
                                                <p className='text-white text-2xl lg:text-4xl font-bold mb-4'>{project.name}</p>
                                                <p className='text-neutral-400 text-sm md:text-base lg:text-lg font-mono line-clamp-4'>{project.description}</p>

                                                <div className="flex flex-wrap gap-3 mt-5">
                                                    <Link
                                                        to={`/project-details/${index + 1}`}
                                                        className='inline-flex items-center gap-1 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors'
                                                    >
                                                        Read more...
                                                    </Link>
                                                    {/* <Link
                                                        to={`/project-details/${index + 1}`}
                                                        className='flex items-center justify-center w-12 aspect-square text-neutral-400 border border-white/10 hover:bg-purple-600 hover:scale-110 group transition rounded-full'
                                                    >
                                                        <ArrowUpRight className='inline-block group-hover:text-white group-hover:rotate-45 transition' />
                                                    </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-2xl order-1 lg:order-2">
                                        {/* Gradient border */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                                        <div className="relative">
                                            <motion.img
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.5 }}
                                                src={project.primaryImage}
                                                alt={project.title}
                                                className='w-full h-[300px] lg:h-[400px] object-cover'
                                            />
                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                                <Link
                                                    to={`/project-details/${index + 1}`}
                                                    className="flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                                                >
                                                    View Details
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {hasMoreProjects && (
                <div className="flex justify-center mt-10">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-500 transition"
                    >
                        View all projects
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyProjects;
