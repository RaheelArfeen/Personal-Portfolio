import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Shared/Logo";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const socialLinks = [
        { icon: Github, href: "https://github.com/RaheelArfeen", label: "GitHub", target: "_blank" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/Raheelarfeen/", label: "LinkedIn", target: "_blank" },
        { icon: Mail, href: "#contact", label: "Email" },
    ];

    return (
        <>
            <motion.nav
                className="z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo and Name */}
                        <a href="#">
                            <div className="flex items-center space-x-3">
                                <Logo />
                            </div>
                        </a>

                        {/* Desktop Social Links and Resume Button */}
                        <div className="hidden sm:flex items-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:bg-gray-800 rounded-lg"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    title={social.label}
                                    target={social.target || "_self"}
                                    rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                                >
                                    <social.icon size={20} />
                                </motion.a>
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

                        {/* Mobile Hamburger Button */}
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

            {/* Drawer for Mobile */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setDrawerOpen(false)}
                        />

                        {/* Drawer Panel */}
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

                            {/* Social Links */}
                            <nav className="mt-8 flex flex-col space-y-6">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                        target={social.target || "_self"}
                                        rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                                        onClick={() => setDrawerOpen(false)}
                                    >
                                        <social.icon size={24} />
                                        <span className="text-lg font-medium">{social.label}</span>
                                    </a>
                                ))}

                                {/* Resume Button */}
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="mt-auto inline-flex justify-center px-4 py-2 rounded-full text-sm font-medium border border-blue-500 text-blue-400 hover:bg-blue-500/20 transition-colors duration-300"
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
