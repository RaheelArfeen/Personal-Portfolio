import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import RaheelArfeen from '../assets/RaheelArfeen.png'

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = "Fullstack Developer from Grade 7";

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                        opacity: [0.6, 0.3, 0.6]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -180, -360],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Horizontal Layout */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Side - Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                Hello, I'm Raheel
                            </motion.h1>

                            <motion.div
                                className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center lg:justify-start"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <span className="text-gray-300">
                                    {displayText}
                                    <motion.span
                                        className="animate-pulse"
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        |
                                    </motion.span>
                                </span>
                            </motion.div>

                            <motion.p
                                className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Passionate about creating amazing web experiences and learning new technologies every day.
                                Join me on my coding journey as I build the future, one line of code at a time.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <motion.a
                                    href="#projects"
                                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/25"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    View My Projects
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    className="px-8 py-3 border-2 border-blue-400 rounded-full text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "rgb(96, 165, 250)",
                                        color: "white"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    Get In Touch
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Right Side - Profile Picture */}
                        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.1,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20
                                }}
                            >
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {/* Profile image */}
                                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                        <img
                                            src={RaheelArfeen}
                                            alt="Raheel - Profile Picture"
                                            className="w-full h-full rounded-full object-cover border-4 border-gray-800 shadow-2xl"
                                        />

                                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/5"></div>

                                        <motion.div
                                            className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full shadow-lg"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.7, 1, 0.7]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        <motion.div
                                            className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full shadow-lg"
                                            animate={{
                                                scale: [1, 1.3, 1],
                                                opacity: [0.8, 1, 0.8]
                                            }}
                                            transition={{
                                                duration: 2.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 1
                                            }}
                                        />
                                        <motion.div
                                            className="absolute top-1/2 -right-6 w-5 h-5 bg-pink-500 rounded-full shadow-lg"
                                            animate={{
                                                scale: [1, 1.4, 1],
                                                opacity: [0.6, 1, 0.6]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 0.5
                                            }}
                                        />
                                        <motion.div
                                            className="absolute top-1/4 -left-6 w-4 h-4 bg-yellow-500 rounded-full shadow-lg"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.7, 1, 0.7]
                                            }}
                                            transition={{
                                                duration: 2.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 1.5
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={32} className="text-gray-400" />
            </motion.div>
        </section>
    );
};

export default Hero;