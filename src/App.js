import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/experience/Experience';
import Footer from './components/Footer';
import Projects from './components/projects/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="App">
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div >
  );
};

export default App;