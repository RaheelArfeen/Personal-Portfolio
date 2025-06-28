import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Timeline from "../Components/Timeline";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white w-full">
            <Header/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Timeline/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Index;
