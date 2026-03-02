import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Background from '../components/Background';
import Footer from '../components/Footer';
import { InfinitySpin } from 'react-loader-spinner';
import { SquarePen, X, ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, Code2, Layers, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const techIcons = {
  react: 'React',
  typescript: 'TypeScript',
  firebase: 'Firebase',
  shadcn: 'ShadCN UI',
  framer: 'Framer Motion',
  paystack: 'Paystack',
  coingecko: 'CoinGecko',
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        const projectData = data[parseInt(id) - 1];
        setProject(projectData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project data:', error);
        setLoading(false);
      });
  }, [id]);

  // Keyboard navigation for carousel
  const handleKeyDown = useCallback((e) => {
    if (!isCarouselOpen) return;
    if (e.key === 'Escape') setIsCarouselOpen(false);
    if (e.key === 'ArrowLeft') {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.additionalImages.length - 1 : prev - 1
      );
    }
    if (e.key === 'ArrowRight') {
      setCurrentImageIndex((prev) =>
        prev === project.additionalImages.length - 1 ? 0 : prev + 1
      );
    }
  }, [isCarouselOpen, project]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (loading) {
    return (
      <div className="text-white flex items-center justify-center text-center py-20 w-full h-screen">
        <InfinitySpin
          visible={true}
          width="200"
          color="#ffffff"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-white text-center py-20">Projects not found</div>
    );
  }

  // Extract tech stack from description
  const getTechStack = () => {
    const techs = [];
    const descLower = project.description.toLowerCase();
    Object.entries(techIcons).forEach(([key, value]) => {
      if (descLower.includes(key)) {
        techs.push(value);
      }
    });
    return techs.length > 0 ? techs : ['React', 'TypeScript', 'Firebase'];
  };

  const techStack = getTechStack();

  return (
    <>
      <NavBar />
      <Background />
      <div className="relative flex flex-col w-full overflow-y-scroll">
        <div className="px-5 md:px-14 xl:px-5 pt-20 pb-10 max-w-[1400px] mx-auto text-white">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </motion.button>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 mb-12"
          >
            {/* Project Title Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    >
                      {project.name}
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-lg md:text-xl text-neutral-300 max-w-2xl"
                    >
                      {project.intro}
                    </motion.p>
                  </div>
                  
                  {/* Tech Stack Tags */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Primary Image with Overlay */}
            <div className="relative group cursor-pointer" onClick={() => window.open(project.link, '_blank')}>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src={project.primaryImage}
                  alt={project.title}
                  className="w-full h-[450px] md:h-[600px] lg:h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-center gap-3">
                    <ExternalLink className="w-6 h-6 text-white" />
                    <span className="text-white text-lg font-medium">Live Preview</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => window.open(project.link, '_blank')}
                className="flex items-center gap-2 px-6 py-3 bg-[#4B22B5] hover:bg-[#5a2fca] text-white rounded-xl font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Website
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all hover:scale-105">
                <Code2 className="w-5 h-5" />
                View Code
              </button>
            </motion.div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#4B22B5]/20 rounded-lg">
                    <Layers className="w-5 h-5 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">About This Project</h2>
                </div>
                <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Gallery Section */}
          {project.additionalImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#4B22B5]/20 rounded-lg">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Project Gallery</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.additionalImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative cursor-pointer"
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsCarouselOpen(true);
                    }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative rounded-xl overflow-hidden border border-white/10">
                      <img
                        src={image}
                        alt={`${project.title} additional ${index + 1}`}
                        className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium">View Image</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Project Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <SquarePen className="w-5 h-5 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Project Summary</h2>
                </div>
                <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
                  {project.summary}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />

        {/* Carousel Modal */}
        <AnimatePresence>
          {isCarouselOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
              onClick={() => setIsCarouselOpen(false)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 right-4 text-white hover:text-purple-400 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                onClick={() => setIsCarouselOpen(false)}
              >
                <X size={32} />
              </motion.button>

              {/* Previous Button */}
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="absolute left-4 text-white hover:text-purple-400 z-50 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? project.additionalImages.length - 1 : prev - 1
                  );
                }}
              >
                <ChevronLeft size={48} />
              </motion.button>

              {/* Image Container */}
              <motion.div
                key={currentImageIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-[85vw] max-h-[80vh] flex items-center justify-center px-16"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={project.additionalImages[currentImageIndex]}
                  alt={`${project.title} ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
              </motion.div>

              {/* Next Button */}
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="absolute right-4 text-white hover:text-purple-400 z-50 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) =>
                    prev === project.additionalImages.length - 1 ? 0 : prev + 1
                  );
                }}
              >
                <ChevronRight size={48} />
              </motion.button>

              {/* Image Counter */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                {currentImageIndex + 1} / {project.additionalImages.length}
              </motion.div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
                {project.additionalImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-purple-500 scale-110'
                        : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectDetails;
