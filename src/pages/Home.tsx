import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, PiggyBank, CreditCard } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-brand-border">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-mint/5 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-brand-mint text-xs font-bold uppercase tracking-widest mb-6">
                            US #1 Financial Guide
                        </span>
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight mb-6">
                            Take Control of Your <br />
                            <span className="gradient-text-mint">Financial Future</span>
                        </h1>
                        <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Expert-backed strategies to save more, invest smarter, and build
                            generational wealth. Let your money do the moving.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/blog" className="btn-mint w-full sm:w-auto text-center px-8 text-lg">
                                Explore Articles
                            </Link>
                            <Link to="/tools" className="glass-card px-8 py-3 text-white hover:border-brand-mint/50 transition-all w-full sm:w-auto text-center">
                                Financial Tools
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Topics */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Master Your Money</h2>
                    <p className="text-brand-text-secondary">Explore our curated categories to start your journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Smart Investing", icon: TrendingUp, color: "text-blue-400", desc: "Build a bulletproof portfolio with US index funds and ETFs.", link: "/blog?category=Investing" },
                        { title: "Savings Strategy", icon: PiggyBank, color: "text-brand-mint", desc: "High-yield savings and automated ways to grow your emergency fund.", link: "/blog?category=Saving" },
                        { title: "Credit Optimization", icon: CreditCard, color: "text-brand-gold", desc: "Unlock premium rewards and master your credit score easily.", link: "/blog?category=Credit Cards" },
                    ].map((topic) => (
                        <Link to={topic.link} key={topic.title} className="glass-card p-10 hover:border-brand-mint/30 transition-all group cursor-pointer block">
                            <topic.icon className={`w-12 h-12 ${topic.color} mb-6 group-hover:scale-110 transition-transform`} />
                            <h3 className="text-2xl font-playfair font-bold text-white mb-4">{topic.title}</h3>
                            <p className="text-brand-text-secondary text-sm leading-relaxed mb-6">{topic.desc}</p>
                            <div className="flex items-center gap-2 text-brand-mint text-sm font-bold group-hover:gap-4 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* AdSense Placement Placeholder */}
            <section className="max-w-5xl mx-auto px-4 w-full">
                <div className="w-full h-32 bg-brand-card/50 border border-dashed border-brand-border rounded-xl flex items-center justify-center text-brand-text-secondary text-xs uppercase tracking-widest">
                    Advertisment Slot (AdSense Ready)
                </div>
            </section>
        </div>
    );
}
