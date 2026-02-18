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
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">America's Financial Blueprint</h1>
                        <p className="text-brand-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
                            WealthDrift is the definitive guide for US personal finance. We cut through the industry noise
                            to provide everyday Americans with honest, expert-backed, and actionable wealth-building advice.
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

                {/* Meet the Founder */}
                <section className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-b border-brand-border pb-20">
                    <div className="md:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10 aspect-square rounded-2xl overflow-hidden border border-brand-border"
                        >
                            <img
                                src="/deva.jpg"
                                alt="Devaprakash J - Founder of WealthDrift"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600";
                                }}
                            />
                        </motion.div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-mint/20 blur-3xl -z-10" />
                    </div>

                    <div className="md:col-span-7 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-brand-mint text-xs font-bold uppercase tracking-widest mb-2 block">The Founder's Story</span>
                            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">Devaprakash J</h2>
                            <p className="text-brand-text-secondary text-lg leading-relaxed mb-6">
                                "Financial freedom isn't just about numbers on a spreadsheet; it's about reclaiming your time and living life on your own terms. I founded WealthDrift to empower everyday people with the same strategies used by the top 1%."
                            </p>
                            <div className="flex flex-wrap gap-6 items-center">
                                <div className="flex gap-4">
                                    <div className="glass-card px-4 py-2 border-brand-border bg-white/5">
                                        <p className="text-brand-mint font-bold">100+</p>
                                        <p className="text-[10px] text-brand-text-secondary uppercase">Articles Written</p>
                                    </div>
                                    <div className="glass-card px-4 py-2 border-brand-border bg-white/5">
                                        <p className="text-brand-mint font-bold">50k</p>
                                        <p className="text-[10px] text-brand-text-secondary uppercase">Monthly Impact</p>
                                    </div>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/devaprakashj/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-brand-mint hover:text-white transition-colors group"
                                >
                                    <div className="p-2 rounded-full bg-brand-mint/10 border border-brand-mint/20 group-hover:bg-brand-mint group-hover:text-brand-bg transition-all">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-wider">Connect on LinkedIn</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Values with enhanced professional tone */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-playfair font-bold text-white mb-4">Our Editorial Standards</h2>
                    <p className="text-brand-text-secondary max-w-2xl mx-auto">We follow a rigorous process to ensure every guide we publish meets the highest standards of financial accuracy and transparency.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
                    {[
                        { title: "Expertise-Driven", icon: ShieldCheck, desc: "Our research team includes analysts with deep experience in US equity markets and tax planning." },
                        { title: "Strict Independence", icon: Award, desc: "Our reviews are never influenced by affiliate partnerships. We prioritize user value above all." },
                        { title: "Verified Data", icon: Users, desc: "We pull data directly from official US sources like the IRS, Bureau of Labor Statistics, and FDIC." },
                        { title: "Continuous Updates", icon: Target, desc: "The US economy moves fast. We audit our most critical guides monthly to reflect new tax codes and rates." },
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
