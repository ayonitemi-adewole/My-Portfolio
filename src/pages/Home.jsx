import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Experience from '../components/home/Experience';
import Skills from '../components/home/Skills';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactCTA from '../components/ContactCTA';
import Marquee from '../components/ui/Marquee';
import { marqueeItems } from '../data/site';

const Home = () => (
  <>
    <Hero />
    <div className="mt-12">
      <Marquee items={marqueeItems} />
    </div>
    <AboutPreview />
    <FeaturedProjects limit={2} />
    <Experience />
    <Skills />
    <ContactCTA />
  </>
);

export default Home;
