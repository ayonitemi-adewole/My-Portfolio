import Background from '../components/Background';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import CarouselStrip from '../components/CarouselStrip';
import Experience from '../components/Experience';
import MySkills from '../components/MySkills';
import MyProjects from '../components/MyProjects';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
const Home = () => {
  return (
    <div className="font-bold h-screen w-full text-white overflow-scroll">
      <NavBar />
      <Hero />
      <Intro />
      <CarouselStrip />
      <Experience />

      <MySkills />
      <MyProjects limit={2} />
      <GetInTouch />
      <Footer />
    </div>
  );
};
export default Home;
