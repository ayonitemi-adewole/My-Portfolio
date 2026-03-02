import { ChevronRight, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo/logo-2.png';

const MySkills = () => {
    const [modalData, setModalData] = useState(null);
    // Initialize with correct value to prevent animation issues from incorrect initial render
    const [dimensions, setDimensions] = useState(() => {
        if (typeof window !== 'undefined') {
            return { width: window.innerWidth, height: window.innerHeight };
        }
        return { width: 0, height: 0 };
    });

    const skills = [
        {
            name: 'HTML5',
            icon: '/assets/icons/html.png',
            description: 'HTML5 is the backbone of the web. I started with it in 2023 at SQI, learning how to structure web pages and create semantic markup. It opened the door to building interactive websites for me.'
        },
        {
            name: 'CSS3',
            icon: '/assets/icons/css-3.png',
            description: 'CSS3 brought styling to life! After HTML, I dove into CSS3 to make websites visually appealing. I mastered flexbox, grid, and animations, transforming plain markup into beautiful designs.'
        },
        {
            name: 'JavaScript',
            icon: '/assets/icons/js.png',
            description: 'JavaScript was like magic! Introduced in 2023 at SQI and further advance in 2024, it added interactivity to my projects. I explored DOM manipulation and built dynamic features until 2024 when React.js took things to the next level.'
        },
        {
            name: 'React',
            icon: '/assets/icons/physics.png',
            description: `React revolutionized my development approach. Learning it in 2024, I embraced component-based architecture and state management. It made building complex UIs intuitive and efficient. And "REACT.JS" is what I used to build what you're looking at right now!`
        },
        {
            name: 'Tailwind CSS',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
            description: 'Tailwind CSS streamlined my styling process. Its utility-first approach allowed rapid prototyping and consistent design systems without writing custom CSS.'
        },
        {
            name: 'Bootstrap',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
            description: 'Bootstrap accelerated my frontend development. With pre-built components and responsive grid, I created professional-looking sites quickly and efficiently.'
        },
        {
            name: 'Framer Motion',
            icon: '/assets/icons/framer-motion.png',
            description: 'Framer Motion added life to my UIs. I learned it in 2025 to create smooth animations and transitions, enhancing user experience with engaging interactions.'
        },
        {
            name: 'Node.js',
            icon: '/assets/icons/developer.png',
            description: 'Node.js enabled server-side JavaScript. I was introduced to it in 2024. Though, I\'m not really proficient in it yet, I\'m eager to learn more and build full-stack applications.'
        },
        {
            name: 'Express.js',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
            description: 'Express.js simplified backend development. Just like Node.js, I was introduced to it in 2024. While I\'m still learning, I appreciate its minimalistic approach to building APIs and web servers.'
        },
        {
            name: 'Firebase',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
            description: 'Firebase provided a comprehensive backend solution. I started using it in 2024 to handle authentication, real-time databases, and hosting, simplifying full-stack development.'
        },
        {
            name: 'Appwrite',
            icon: 'https://avatars.githubusercontent.com/u/48718259?s=200&v=4',
            description: 'Appwrite is a backend-as-a-service platform. I started exploring it in 2024 to simplify backend development with built-in authentication, database, and storage solutions.'
        },
        {
            name: 'Git',
            icon: '/assets/icons/social.png',
            description: 'Git became my version control lifeline. Learning branching, merging, and collaboration workflows helped me manage code changes and work effectively in teams.'
        },
        {
            name: 'GitHub',
            icon: '/assets/icons/github.png',
            description: 'GitHub enhanced my collaboration skills. I learned to host repositories, manage pull requests, and contribute to open-source projects, expanding my coding community.'
        },
        {
            name: 'VS Code',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
            description: 'VS Code is my go-to code editor. Its extensions, integrated terminal, and debugging tools streamline my workflow, making coding more efficient and enjoyable.'
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <>
            <div className='relative flex flex-col items-center justify-between xl:flex-row gap-10 bg-black/80 w-full p-5 py-20 md:px-20 xl:px-20 mt-16 md:mt-10 lg:mt-20 xl:mt-10 max-w-[1400px] mx-auto overflow-hidden'>
                {/* Background gradient orbs */}
                <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

                <div className='lg:max-w-[50%] gap-6 flex flex-col mb-10'>
                    {/* Header with glassmorphism */}
                    <div className="relative inline-flex self-start">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30"></div>
                        <div className="relative flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl">
                            <img src={logo} alt="" className="w-5 h-5" />
                            <p className='text-purple-400 text-sm font-semibold uppercase tracking-widest'>My Skills</p>
                        </div>
                    </div>
                    
                    <p className='text-4xl md:text-5xl lg:text-6xl font-semibold'>
                        Let's Explore <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>My Skill Set</span>
                    </p>
                    <p className='xl:hidden text-base md:text-lg lg:text-xl font-light text-neutral-300'>Right under is a grid of my skills, click on it to view more details</p>
                    <p className='hidden xl:block text-base md:text-lg lg:text-xl font-light text-neutral-300'>By the right is a grid of my skills, click on it to view more details</p>
                </div>
                
                <div className='min-w-[50%]'>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:max-h-[41vh] overflow-y-auto xl:p-5 pr-2'>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className='relative group cursor-pointer'
                                    onClick={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const cardCenterX = rect.left + rect.width / 2;
                                        const cardCenterY = rect.top + rect.height / 2;
                                        setModalData({
                                            skill,
                                            cardCenterX,
                                            cardCenterY,
                                            cardWidth: rect.width,
                                            cardHeight: rect.height
                                        });
                                    }}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Gradient border on hover */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 p-5 flex flex-col items-center justify-center gap-3 rounded-2xl transition-all duration-300 h-full">
                                        <div className="w-14 h-14 flex items-center justify-center">
                                            <img src={skill.icon} alt={skill.name} className='w-full h-full object-contain' />
                                        </div>
                                        <p className='text-white font-medium text-sm text-center'>{skill.name}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {modalData && (
                    (() => {
                        const { skill, cardCenterX, cardCenterY, cardWidth, cardHeight } = modalData;
                        const modalWidth = 448;
                        const modalHeight = 300;
                        const initialScale = cardWidth / modalWidth;
                        const centerX = dimensions.width / 2;
                        const centerY = dimensions.height / 2;
                        const initialX = cardCenterX - (modalWidth * initialScale / 2) - centerX;
                        const initialY = cardCenterY - (modalHeight * initialScale / 2) - centerY;
                        const finalX = 0;
                        const finalY = 0;

                        return (
                            <motion.div
                                className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
                                onClick={() => setModalData(null)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {/* Close button */}
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-50 transition-colors"
                                    onClick={() => setModalData(null)}
                                >
                                    <X size={24} />
                                </motion.button>

                                <motion.div
                                    className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col items-center gap-4 max-w-md mx-4"
                                    style={{ width: '25rem' }}
                                    onClick={(e) => e.stopPropagation()}
                                    initial={{ x: initialX, y: initialY, scale: initialScale, opacity: 0 }}
                                    animate={{ x: finalX, y: finalY, scale: 1, opacity: 1 }}
                                    exit={{ x: initialX, y: initialY, scale: initialScale, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {/* Gradient border */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-3xl blur opacity-30"></div>
                                    <div className="relative">
                                        <img src={skill.icon} alt={skill.name} className="w-24 h-24 object-contain" />
                                    </div>
                                    <h2 className="text-white font-bold text-2xl relative">{skill.name}</h2>
                                    <p className="text-neutral-300 text-center font-mono text-sm leading-relaxed relative">
                                        {skill.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })()
                )}
            </AnimatePresence>
        </>
    )
}

export default MySkills
