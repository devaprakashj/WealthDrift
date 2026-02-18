import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, PiggyBank, CreditCard } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col gap-10 md:gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-brand-border py-20 md:py-0">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-mint/5 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-brand-mint text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
                            US #1 Financial Guide
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-playfair font-bold text-white leading-tight mb-6 px-2">
                            Maximize Wealth in the <br className="hidden sm:block" />
                            <span className="gradient-text-mint">United States Economy</span>
                        </h1>
                        <p className="text-brand-text-secondary text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-4">
                            Expert-backed strategies to save more, invest smarter, and build
                            generational wealth. Let your money do the moving.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                            <Link to="/blog" className="btn-mint w-full sm:w-auto text-center px-8 text-base md:text-lg">
                                Explore Articles
                            </Link>
                            <Link to="/tools" className="glass-card px-8 py-3 text-white hover:border-brand-mint/50 transition-all w-full sm:w-auto text-center text-base md:text-lg">
                                Financial Tools
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Bar - Crucial for USA Organic Authority */}
            <div className="max-w-7xl mx-auto px-4 w-full -mt-6 md:-mt-10">
                <div className="glass-card py-6 md:py-10 border-brand-border/20 bg-brand-card/30 backdrop-blur-xl">
                    <p className="text-[8px] md:text-[10px] text-brand-text-secondary text-center uppercase tracking-[0.2em] md:tracking-[0.4em] mb-6 md:mb-10 font-bold">Featured In & Trusted By Experts At</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 px-6">
                        <span className="text-white font-serif text-lg md:text-2xl tracking-tighter">MarketWatch</span>
                        <span className="text-white font-serif text-lg md:text-2xl tracking-tighter italic">YAHOO!</span>
                        <span className="text-white font-serif text-lg md:text-2xl tracking-tighter">INSIDER</span>
                        <span className="text-white font-serif text-lg md:text-2xl tracking-tighter">Forbes</span>
                        <span className="text-white font-serif text-lg md:text-2xl tracking-tighter">WSJ</span>
                    </div>
                </div>
            </div>

            {/* Featured Topics */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-playfair font-bold text-white mb-4">Master Your Money: US Financial Insights</h2>
                    <p className="text-brand-text-secondary text-sm md:text-base">Strategic guides curated for the modern American investor.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        { title: "Smart Investing", icon: TrendingUp, color: "text-blue-400", desc: "Build a bulletproof portfolio with US index funds and ETFs.", link: "/blog?category=Investing" },
                        { title: "Savings Strategy", icon: PiggyBank, color: "text-brand-mint", desc: "High-yield savings and automated ways to grow your emergency fund.", link: "/blog?category=Saving" },
                        { title: "Credit Optimization", icon: CreditCard, color: "text-brand-gold", desc: "Unlock premium rewards and master your credit score easily.", link: "/blog?category=Credit Cards" },
                    ].map((topic) => (
                        <Link to={topic.link} key={topic.title} className="glass-card p-8 md:p-10 hover:border-brand-mint/30 transition-all group cursor-pointer block">
                            <topic.icon className={`w-10 h-10 md:w-12 md:h-12 ${topic.color} mb-6 group-hover:scale-110 transition-transform`} />
                            <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mb-3 md:mb-4">{topic.title}</h3>
                            <p className="text-brand-text-secondary text-sm leading-relaxed mb-6">{topic.desc}</p>
                            <div className="flex items-center gap-2 text-brand-mint text-sm font-bold group-hover:gap-4 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="glass-card p-8 md:p-12 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-brand-mint/5 pointer-events-none" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-brand-mint mb-6 mx-auto" />
                        <h2 className="text-2xl md:text-5xl font-playfair font-bold text-white mb-6">Join the WealthDrift Newsletter</h2>
                        <p className="text-brand-text-secondary text-base md:text-lg mb-8 md:text-lg">
                            Get weekly deep-dives into US investing, tax strategies, and credit hacks.
                            Join 5,000+ Americans building generational wealth.
                        </p>

                        <NewsletterForm />

                        <p className="text-[10px] text-brand-text-secondary mt-6 uppercase tracking-widest leading-relaxed">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            const { subscribeToNewsletter } = await import("../lib/newsletter");
            await subscribeToNewsletter(email);
            setStatus("success");
            setEmail("");
        } catch (err) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-brand-mint/10 border border-brand-mint/20 text-brand-mint"
            >
                <p className="font-bold text-lg mb-1">Welcome Aboard! 🚀</p>
                <p className="text-sm">Check your inbox for your first wealth-building guide.</p>
            </motion.div>
        );
    }

    return (
        <form className="flex flex-col sm:flex-row gap-4 px-2" onSubmit={handleSubmit}>
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your US email"
                className="flex-grow bg-brand-bg border border-brand-border rounded-xl p-4 text-white text-sm md:text-base focus:border-brand-mint outline-none"
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className="btn-mint px-8 md:px-12 py-4 whitespace-nowrap cursor-pointer text-sm md:text-base disabled:opacity-50"
            >
                {status === "loading" ? "Joining..." : "Get Free Access"}
            </button>
            {status === "error" && (
                <p className="text-red-400 text-xs mt-2 text-left absolute -bottom-6">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}
