import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";

const Index = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white w-full">
            <Header/>
            <Hero/>
            <About/>
        </div>
    );
};

export default Index;
