import { motion } from "framer-motion";

export default function Disclaimer() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-8 sm:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <svg className="w-32 h-32 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-2">Legal Disclaimer</h1>
                    <p className="text-brand-gold text-xs uppercase tracking-widest mb-10 font-bold">Effective Date: February 18, 2026</p>

                    <div className="prose prose-invert max-w-none text-brand-text-secondary space-y-8 leading-relaxed">
                        <section className="bg-brand-gold/5 border-l-4 border-brand-gold p-6 rounded-r-lg">
                            <h2 className="text-xl font-bold text-brand-gold mb-4">Not Financial Advice</h2>
                            <p className="text-white">
                                The information provided by WealthDrift ("we," "us," or "our") on wealthdrift.com (the "Site") is for general informational and educational purposes only. **All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.**
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Professional Disclaimer</h2>
                            <p>
                                The Site cannot and does not contain financial advice. The financial information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial advice. **THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.**
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Affiliates Disclaimer</h2>
                            <p>
                                The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include but are not limited to several financial service providers, credit card issuers, and investment platforms.
                            </p>
                            <p className="mt-4 font-bold text-white">
                                WealthDrift is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn advertising fees by linking to Amazon.com and affiliated websites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Errors and Omissions</h2>
                            <p>
                                While we have made every attempt to ensure that the information contained on this site has been obtained from reliable sources, WealthDrift is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is," with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information.
                            </p>
                        </section>

                        <section className="pt-10 border-t border-brand-border">
                            <h2 className="text-xl font-bold text-white mb-4">External Links Disclaimer</h2>
                            <p>
                                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
