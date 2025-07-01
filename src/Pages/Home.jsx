import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Timeline from "../Components/Timeline";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { useTheme } from "../Context/ThemeContext";

const Home = () => {
    const { isDarkMode } = useTheme();

    return (
        <div
            className={`min-h-screen w-full transition-colors duration-500 ${isDarkMode
                ? "bg-gray-900 text-white"
                : "bg-gray-50 text-gray-900"
                }`}
        >
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
