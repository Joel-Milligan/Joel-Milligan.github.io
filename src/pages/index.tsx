import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;