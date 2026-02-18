import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-brand-card border-t border-brand-border py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/">
                            <Logo className="w-10 h-10" textClassName="text-3xl" />
                        </Link>
                        <p className="text-brand-text-secondary mt-4 max-w-sm">
                            Helping everyday Americans build real wealth through honest,
                            expert financial guidance. Let your money do the moving.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-brand-text-secondary">
                            <li><Link to="/blog" className="hover:text-brand-mint">Articles</Link></li>
                            <li><Link to="/tools" className="hover:text-brand-mint">Calculators</Link></li>
                            <li><Link to="/about" className="hover:text-brand-mint">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-mint">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-brand-text-secondary">
                            <li><Link to="/press" className="hover:text-brand-mint">Press & Media</Link></li>
                            <li><Link to="/sitemap.xml" className="hover:text-brand-mint">Sitemap</Link></li>
                            <li><Link to="/about#affiliate" className="hover:text-brand-mint">Affiliate Disclosure</Link></li>
                            <li><Link to="/privacy" className="hover:text-brand-mint">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-brand-mint">Terms of Service</Link></li>
                            <li><Link to="/disclaimer" className="hover:text-brand-mint">Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Social Hub</h4>
                        <ul className="space-y-2 text-sm text-brand-text-secondary">
                            <li><a href="https://twitter.com/wealthdrift" target="_blank" rel="noopener" className="hover:text-brand-mint">Follow on X</a></li>
                            <li><a href="https://reddit.com/r/wealthdrift" target="_blank" rel="noopener" className="hover:text-brand-mint">Reddit Community</a></li>
                            <li><a href="https://pinterest.com/wealthdrift" target="_blank" rel="noopener" className="hover:text-brand-mint">Pinterest Boards</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-brand-mint">LinkedIn Authority</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-brand-border text-center">
                    <div className="flex justify-center gap-6 mb-4 text-brand-text-secondary italic text-[10px] uppercase tracking-[0.3em]">
                        <span>Verified Editorial Content</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-mint mt-1" />
                        <span>US Financial Authority</span>
                    </div>
                    <p className="text-xs text-brand-text-secondary max-w-2xl mx-auto leading-relaxed">
                        © 2026 WealthDrift Research Panel. All financial guides are strictly for educational purposes.
                        We are an independent publisher. We may receive compensation from some companies mentioned,
                        at no cost to you, which helps us keep our expert research free.
                    </p>
                </div>
            </div>
        </footer>
    );
}
