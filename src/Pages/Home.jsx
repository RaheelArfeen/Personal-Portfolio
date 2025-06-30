import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Timeline from "../Components/Timeline";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {

    return (
        <div className="min-h-screen bg-gray-900 text-white w-full">
            <Header />

            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="timeline">
                <Timeline />
            </section>
            <section id="contact">
                <Contact />
            </section>

            <Footer />
        </div>
    );
};

export default Home;
