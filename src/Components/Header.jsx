import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Shared/Logo";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const navLinks = [
        { label: "Home", to: "home" },
        { label: "About", to: "about" },
        { label: "Skills", to: "skills" },
        { label: "Projects", to: "projects" },
        { label: "Timeline", to: "timeline" },
        { label: "Contact", to: "contact" },
    ];

    const navRefs = useRef([]);

    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            let currentSection = activeSection;

            for (const link of navLinks) {
                const section = document.getElementById(link.to);
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        currentSection = link.to;
                        break;
                    }
                }
            }

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection, navLinks]);

    useEffect(() => {
        const index = navLinks.findIndex((link) => link.to === activeSection);
        const node = navRefs.current[index];
        if (node) {
            setUnderlineStyle({
                left: node.offsetLeft,
                width: node.offsetWidth,
            });
        }
    }, [activeSection, navLinks]);

    const handleScrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setDrawerOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                className="sticky top-0 z-40 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div
                            className="flex items-center space-x-3 cursor-pointer"
                            onClick={() => handleScrollTo("home")}
                        >
                            <Logo />
                        </div>

                        {/* Desktop Nav */}
                        <div className="relative hidden sm:flex items-center space-x-6">
                            {navLinks.map((link, idx) => (
                                <button
                                    key={link.label}
                                    ref={(el) => (navRefs.current[idx] = el)}
                                    onClick={() => handleScrollTo(link.to)}
                                    className="text-gray-400 hover:text-blue-400 text-sm font-medium pb-1 cursor-pointer bg-transparent border-none"
                                    style={{ outline: "none" }}
                                >
                                    {link.label}
                                </button>
                            ))}

                            {/* Sliding underline */}
                            <motion.div
                                layout
                                transition={{ type: "spring", stiffness: 800, damping: 30 }}
                                className="absolute bottom-0 h-0.5 bg-blue-400 rounded"
                                style={{
                                    left: underlineStyle.left,
                                    width: underlineStyle.width,
                                }}
                            />
                            <motion.a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-blue-500 text-blue-400 hover:bg-blue-500/20 transition-colors duration-300 ml-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Resume
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="sm:hidden p-2 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-300"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setDrawerOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.aside
                            key="drawer"
                            className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg z-50 p-6 flex flex-col"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <button
                                onClick={() => setDrawerOpen(false)}
                                className="self-end p-2 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-300"
                            >
                                <X size={24} />
                            </button>

                            <nav className="mt-8 flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.label}
                                        onClick={() => handleScrollTo(link.to)}
                                        className={`text-left text-lg font-medium pb-1 transition-colors duration-300 cursor-pointer ${activeSection === link.to
                                            ? "text-blue-400 border-b border-blue-400"
                                            : "text-gray-400 hover:text-blue-400"
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                ))}

                                <a
                                    href="/resume.pdf"
                                    download
                                    className="mt-6 inline-flex justify-center px-4 py-2 rounded-full text-sm font-medium border border-blue-500 text-blue-400 hover:bg-blue-500/20 transition-colors duration-300"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    Download Resume
                                </a>
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
