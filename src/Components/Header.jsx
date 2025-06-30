import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Shared/Logo";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Timeline", href: "#timeline" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                className="sticky top-0 inset-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <a href="#">
                            <div className="flex items-center space-x-3">
                                <Logo />
                            </div>
                        </a>

                        {/* Desktop Nav + Social Links */}
                        <div className="hidden sm:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <motion.a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-blue-500 text-blue-400 hover:bg-blue-500/20 transition-colors duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                title="Download Resume"
                            >
                                Download Resume
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="sm:hidden p-2 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-300"
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open menu"
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
                            {/* Close Button */}
                            <button
                                onClick={() => setDrawerOpen(false)}
                                className="self-end p-2 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-300"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>

                            {/* Nav Links */}
                            <nav className="mt-8 flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-lg font-medium"
                                        onClick={() => setDrawerOpen(false)}
                                    >
                                        {link.label}
                                    </a>
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
