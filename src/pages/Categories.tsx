import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categoryIcons } from "../lib/utils";
import { ArrowRight } from "lucide-react";

const categories = [
    { name: "Saving", desc: "Maximize your interest with high-yield savings accounts and CD ladders." },
    { name: "Investing", desc: "Long-term strategies for index funds, ETFs, and retirement accounts." },
    { name: "Credit Cards", desc: "Master travel rewards, cash back, and credit score optimization." },
    { name: "Side Hustles", desc: "Generate extra income streams through freelancing and businesses." },
    { name: "Budgeting", desc: "Simple systems to track spending without losing your mind." },
    { name: "Real Estate", desc: "Beginner guides to rental properties and REITs." },
];

export default function Categories() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Categories</h1>
                    <p className="text-brand-text-secondary text-lg">Browse our library of expert-written financial guides.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link to={`/blog?category=${cat.name}`}>
                                <div className="glass-card p-8 h-full hover:border-brand-mint/30 transition-all group">
                                    <span className="text-4xl mb-6 block">{categoryIcons[cat.name] || "💰"}</span>
                                    <h3 className="text-2xl font-playfair font-bold text-white mb-3 group-hover:text-brand-mint transition-colors">
                                        {cat.name}
                                    </h3>
                                    <p className="text-brand-text-secondary text-sm leading-relaxed mb-6">
                                        {cat.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-brand-mint text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Browse Articles <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
