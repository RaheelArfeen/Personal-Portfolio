import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Shared/Logo";

const Footer = () => {
    const socialLinks = [
        { href: "https://github.com/RaheelArfeen", icon: Github, label: "GitHub" },
        { href: "https://www.linkedin.com/in/Raheelarfeen/", icon: Linkedin, label: "LinkedIn" },
        { href: "mailto:raheelarfeen@gmail.com", icon: Mail, label: "Email" },
        { href: "https://twitter.com/RaheelArfeen", icon: Twitter, label: "Twitter" },
    ];

    return (
        <footer className="bg-[#0F172A] text-white border-t border-blue-900 px-6 py-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
                {/* Name or Logo */}
                <motion.h2
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Logo/>
                </motion.h2>

                {/* Social Icons */}
                <motion.div
                    className="flex gap-6 border-b w-full justify-center pb-6 border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {socialLinks.map(({ href, icon: Icon, label }, index) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            title={label}
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.p
                    className="text-sm text-gray-500 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    &copy; {new Date().getFullYear()} Raheel Arfeen. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
