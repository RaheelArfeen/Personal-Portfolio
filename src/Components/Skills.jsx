import { motion } from "framer-motion";

const skills = [
    { name: "HTML5", level: 90, colorFrom: "#F97316", colorTo: "#EF4444" },
    { name: "CSS3", level: 85, colorFrom: "#3B82F6", colorTo: "#6366F1" },
    { name: "JavaScript", level: 80, colorFrom: "#FBBF24", colorTo: "#F97316" },
    { name: "React", level: 80, colorFrom: "#06B6D4", colorTo: "#2563EB" },
    { name: "Node.js", level: 75, colorFrom: "#16A34A", colorTo: "#84CC16" },
    { name: "ExpressJS", level: 70, colorFrom: "#FBBF24", colorTo: "#C2410C" },
    { name: "Git", level: 80, colorFrom: "#EF4444", colorTo: "#F97316" },
    { name: "Tailwind CSS", level: 85, colorFrom: "#2DD4BF", colorTo: "#06B6D4" },
];

const currentlyLearning = [
    "Express.js",
    "MongoDB",
    "Next.js",
    "Node.js",
    "JWT (JSON Web Token)"
];

// SVG circle parameters
const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    My Skills
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-5xl mx-auto mb-16">
                    {skills.map(({ name, level, colorFrom, colorTo }, i) => {
                        const strokeDashoffset = CIRCUMFERENCE * (1 - level / 100);
                        return (
                            <motion.div
                                key={name}
                                className="group cursor-pointer"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.7 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <svg
                                    className="w-36 h-36 mx-auto"
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r={RADIUS}
                                        stroke="#2d3748"
                                        strokeWidth="12"
                                    />
                                    <motion.circle
                                        cx="60"
                                        cy="60"
                                        r={RADIUS}
                                        stroke={`url(#grad-${i})`}
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        strokeDasharray={CIRCUMFERENCE}
                                        strokeDashoffset={CIRCUMFERENCE}
                                        initial={{ strokeDashoffset: CIRCUMFERENCE }}
                                        animate={{ strokeDashoffset }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        style={{ rotate: "-90deg", transformOrigin: "50% 50%" }}
                                    />
                                    <defs>
                                        <linearGradient id={`grad-${i}`} x1="1" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor={colorFrom} />
                                            <stop offset="100%" stopColor={colorTo} />
                                        </linearGradient>
                                    </defs>
                                    <text
                                        x="60"
                                        y="58"
                                        textAnchor="middle"
                                        fontSize="26"
                                        fontWeight="700"
                                        fill="white"
                                    >
                                        {level}%
                                    </text>
                                    <text
                                        x="60"
                                        y="83"
                                        textAnchor="middle"
                                        fontSize="14"
                                        fill="#94a3b8"
                                        fontWeight="600"
                                    >
                                        {name}
                                    </text>
                                </svg>

                                <p className="mt-4 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {`Proficiency in ${name}`}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="bg-gradient-to-r from-blue-700/20 to-purple-700/20 border border-blue-700/40 rounded-xl p-8 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-3xl font-bold text-white mb-6">Currently Learning</h3>
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.3,
                                },
                            },
                        }}
                    >
                        {currentlyLearning.map((tech, i) => (
                            <motion.span
                                key={tech}
                                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base font-semibold cursor-default select-none shadow-lg"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: { type: "spring", stiffness: 500, damping: 25 },
                                    },
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
