import { motion } from "framer-motion";
import { ShieldCheck, Users, Target, Award } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Story */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">Our Mission</h1>
                        <p className="text-brand-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
                            WealthDrift was founded for one reason: to cut through the noise of the financial industry
                            and provide everyday Americans with honest, expert, and actionable advice.
                        </p>
                    </motion.div>

                    <div className="prose prose-invert max-w-3xl mx-auto text-brand-text-secondary leading-relaxed space-y-6">
                        <p>
                            In a world where financial jargon is used to confuse rather than clarify, we believe
                            transparency is the ultimate wealth-building tool. Our team consists of former financial
                            advisors, investment analysts, and personal finance geeks who are obsessed with one thing
                            — helping you let your money do the moving.
                        </p>
                        <p>
                            Unlike most blogs, we don&apos;t just chase trends. Every strategy we publish is backtested,
                            expert-reviewed, and designed for long-term sustainability. Whether you&apos;re paying off
                            student loans or planning for early retirement, we have your back.
                        </p>
                    </div>
                </section>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {[
                        { title: "Expert Reviewed", icon: ShieldCheck, desc: "Our content is checked by CFPs and finance experts for accuracy." },
                        { title: "Independence", icon: Award, desc: "Technical accuracy and editorial independence are our top priorities." },
                        { title: "Community First", icon: Users, desc: "We answer reader questions and build tools based on your needs." },
                        { title: "Data Driven", icon: Target, desc: "Everything is backed by real numbers and historical data analysis." },
                    ].map((val) => (
                        <div key={val.title} className="glass-card p-10 flex items-start gap-6">
                            <div className="p-3 rounded-xl bg-brand-mint/10 border border-brand-mint/20 text-brand-mint shrink-0">
                                <val.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-playfair font-bold text-white mb-2">{val.title}</h3>
                                <p className="text-brand-text-secondary text-sm leading-relaxed">{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Affiliate Link Disclosure */}
                <section id="affiliate" className="glass-card p-10 border-brand-gold/20">
                    <h2 className="text-2xl font-playfair font-bold text-brand-gold mb-4">Affiliate Disclosure</h2>
                    <p className="text-brand-text-secondary text-sm leading-relaxed italic">
                        WealthDrift is a professional blog that may receive compensation from the companies
                        whose products we review. We test each product thoroughly and give high marks only
                        to the very best. We are independently owned and the opinions expressed here are
                        our own. This compensation helps us keep the site 100% free for our readers.
                    </p>
                </section>
            </div>
        </div>
    );
}
