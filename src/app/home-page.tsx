'use client';

import About from "../components/About";
import Education from "../components/education/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

export default function HomePage() {
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
}