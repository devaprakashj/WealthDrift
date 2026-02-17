import { Mail, Download, Award, Newspaper, ExternalLink } from "lucide-react";

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
                                    { label: 'Monthly Readers', val: '50K+' },
                                    { label: 'States Reached', val: '50' },
                                    { label: 'Guides Published', val: '100+' },
                                    { label: 'Calculators', val: '5' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="text-3xl font-bold text-brand-mint mb-1">{stat.val}</p>
                                        <p className="text-[10px] text-brand-text-secondary uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-2xl font-playfair font-bold text-white mb-2">WealthDrift in the News</h2>
                            <p className="text-brand-text-secondary mb-8 underline decoration-brand-mint/30 underline-offset-4">Recent mentions and expert quotes.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { source: 'Financial Times 2025', title: 'Why US Gen Z is flocking to Roth IRAs over 401(k)s.', link: '#' },
                                    { source: 'Business Insider', title: 'The new rules of High-Yield Savings in a high-rate environment.', link: '#' },
                                ].map((news) => (
                                    <div key={news.title} className="glass-card p-6 hover:border-brand-mint/40 transition-all group">
                                        <div className="flex items-center gap-2 text-[10px] text-brand-mint font-bold uppercase tracking-[0.2em] mb-3">
                                            <Newspaper className="w-3 h-3" />
                                            {news.source}
                                        </div>
                                        <h4 className="text-white font-bold group-hover:text-brand-mint transition-colors mb-4">{news.title}</h4>
                                        <button className="text-brand-text-secondary text-[10px] flex items-center gap-1 uppercase font-bold tracking-widest">
                                            Read Article <ExternalLink className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="glass-card p-10 bg-brand-gold/5 border-brand-gold/20 leading-relaxed">
                            <h2 className="text-2xl font-playfair font-bold text-brand-gold mb-6">As Seen On</h2>
                            <div className="flex flex-wrap gap-10 items-center justify-center grayscale opacity-50">
                                {/* Placeholder for News Logos */}
                                <span className="text-white font-serif text-xl tracking-tighter">MarketWatch</span>
                                <span className="text-white font-serif text-xl tracking-tighter">YAHOO! Finance</span>
                                <span className="text-white font-serif text-xl tracking-tighter">The Wall Street Journal</span>
                                <span className="text-white font-serif text-xl tracking-tighter">Forbes</span>
                            </div>
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
