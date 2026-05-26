import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { useEffect, useState } from 'react';
import Background from './components/Background';
import { InfinitySpin } from 'react-loader-spinner';
import ScrollUpBtn from './components/ScrollUpBtn';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative w-full h-screen">
      {/* Loader */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-center py-20 w-full h-screen transition-opacity duration-1000 ease-in-out ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <Background />
        <InfinitySpin
          visible={true}
          width="200"
          color="#9810fa"
          ariaLabel="infinity-spin-loading"
        />
      </div>

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center w-full h-screen transition-opacity duration-1000 ease-in-out ${loading ? 'opacity-0 pointer-events-none invisible' : 'opacity-100'
          }`}
      >
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <ScrollUpBtn />
    </div>
  );
};

export default App;
