import { Mail, Download, Award } from "lucide-react";

export default function Press() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">Press & Media Kit</h1>
                    <p className="text-brand-text-secondary text-lg max-w-3xl mx-auto">
                        We're on a mission to bring financial clarity to millions of Americans.
                        Members of the media can find our mission, brand assets, and contact info here.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Stats & Mission */}
                    <div className="lg:col-span-2 space-y-12">
                        <section className="glass-card p-10">
                            <h2 className="text-2xl font-playfair font-bold text-white mb-8 border-l-4 border-brand-mint pl-4">Our Track Record</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    { label: 'Calculators', val: '5' },
                                    { label: 'States Reached', val: '50' },
                                    { label: 'Expert Guides', val: '30+' },
                                    { label: 'Update Cycle', val: 'Daily' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="text-3xl font-bold text-brand-mint mb-1">{stat.val}</p>
                                        <p className="text-[10px] text-brand-text-secondary uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="glass-card p-10 bg-brand-gold/5 border-brand-gold/20 leading-relaxed">
                            <h2 className="text-2xl font-playfair font-bold text-brand-gold mb-6">Transparency Matters</h2>
                            <p className="text-brand-text-secondary text-sm">
                                WealthDrift is an independent publication. We do not accept payment for positive reviews or biased coverage. Our goal is to provide American families with the data they need to make the best financial decisions for their specific situation.
                            </p>
                        </section>
                    </div>

                    {/* Right Column: CTA & Media Kit */}
                    <aside className="space-y-8">
                        <div className="glass-card p-8 border-brand-mint/20">
                            <h3 className="text-xl font-playfair font-bold text-white mb-6">Media Inquiries</h3>
                            <p className="text-brand-text-secondary text-sm mb-8">
                                For expert quotes, interviews, or data requests, our team of financial analysts is ready to assist.
                            </p>
                            <a
                                href="mailto:press@wealthdrift.com"
                                className="btn-mint w-full flex items-center justify-center gap-2"
                            >
                                <Mail className="w-4 h-4" /> Email Press Team
                            </a>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="text-xl font-playfair font-bold text-white mb-6">Brand Assets</h3>
                            <div className="space-y-4">
                                <button className="w-full text-left p-4 rounded-xl border border-brand-border hover:bg-white/5 transition-all group flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Award className="w-5 h-5 text-brand-mint" />
                                        <span className="text-white text-sm font-bold">Logos & Iconography</span>
                                    </div>
                                    <Download className="w-4 h-4 text-brand-text-secondary group-hover:text-brand-mint" />
                                </button>
                                <button className="w-full text-left p-4 rounded-xl border border-brand-border hover:bg-white/5 transition-all group flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Download className="w-5 h-5 text-brand-mint" />
                                        <span className="text-white text-sm font-bold">Media Photo Kit</span>
                                    </div>
                                    <Download className="w-4 h-4 text-brand-text-secondary group-hover:text-brand-mint" />
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
