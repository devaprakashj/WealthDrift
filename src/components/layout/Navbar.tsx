import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Categories", href: "/categories" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="sticky top-0 z-50 w-full glass-card border-none rounded-none border-b border-brand-border backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-playfair font-bold">
                            <span className="text-brand-mint">W</span>ealthDrift
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-medium transition-colors hover:text-brand-mint ${location.pathname === link.href ? "text-brand-mint" : "text-brand-text-secondary"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="text-brand-text-secondary hover:text-brand-mint transition-colors cursor-pointer">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass-card mx-4 mb-4 p-4 border border-brand-border"
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-brand-text-secondary hover:text-brand-mint"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
