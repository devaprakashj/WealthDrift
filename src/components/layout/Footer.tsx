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
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-brand-text-secondary">
                            <li><Link to="/privacy" className="hover:text-brand-mint">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-brand-mint">Terms of Service</Link></li>
                            <li><Link to="/about#affiliate" className="hover:text-brand-mint">Affiliate Disclosure</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-brand-border text-center text-xs text-brand-text-secondary">
                    <p>© 2025 WealthDrift. All articles are for educational purposes. We only recommend products we trust.</p>
                </div>
            </div>
        </footer>
    );
}
