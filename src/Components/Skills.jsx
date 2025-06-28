import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: "HTML5", level: 90, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
        { name: "React", level: 80, color: "from-cyan-500 to-blue-600" },
        { name: "Node.js", level: 75, color: "from-green-600 to-lime-500" },
        { name: "ExpressJS", level: 70, color: "from-yellow-400 to-orange-700" },
        { name: "Git", level: 80, color: "from-red-500 to-orange-500" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-cyan-500" }
    ];

    const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedLevels(skills.map(skill => skill.level));
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        My Skills
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Here are the technologies I'm learning and the progress I've made so far in my fullstack journey.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.02,
                                    y: -5,
                                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)"
                                }}
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <motion.span
                                        className="text-lg font-semibold text-white"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {skill.name}
                                    </motion.span>
                                    <motion.span
                                        className="text-blue-400 font-bold"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                                    >
                                        {skill.level}%
                                    </motion.span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                    <motion.div
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.1 + 0.3,
                                            duration: 1,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-white/20"
                                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Currently Learning</h3>
                            <motion.div
                                className="flex flex-wrap justify-center gap-3"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.3
                                        }
                                    }
                                }}
                            >
                                {["Express.js", "MongoDB", "Next.js", "Node.js"].map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                                        variants={{
                                            hidden: { opacity: 0, scale: 0 },
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 25
                                                }
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;