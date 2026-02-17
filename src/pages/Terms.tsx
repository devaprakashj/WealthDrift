import { motion } from "framer-motion";

export default function Terms() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-8 sm:p-12"
                >
                    <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-2">Terms of Service</h1>
                    <p className="text-brand-gold text-xs uppercase tracking-widest mb-10 font-bold">Last Updated: February 17, 2025</p>

                    <div className="prose prose-invert max-w-none text-brand-text-secondary space-y-8 leading-relaxed">
                        <section className="bg-brand-mint/5 border-l-4 border-brand-mint p-6 rounded-r-lg">
                            <h2 className="text-xl font-bold text-white mb-4">Financial Disclaimer</h2>
                            <p className="text-white text-sm">
                                <strong>WealthDrift is for educational and informational purposes only.</strong> The content on this website does not constitute financial, investment, legal, or tax advice. We are not financial advisors. Every financial decision involves risk, and you should perform your own research or consult with a qualified professional before making any financial commitments.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                            <p>
                                By accessing or using wealthdrift.com (the "Site"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use the Site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Intellectual Property</h2>
                            <p>
                                Unless otherwise stated, WealthDrift and/or its licensors own the intellectual property rights for all material on WealthDrift. All intellectual property rights are reserved. You may access this from WealthDrift for your own personal use subjected to restrictions set in these terms and conditions.
                            </p>
                            <p className="mt-4">You must not:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Republish material from WealthDrift</li>
                                <li>Sell, rent or sub-license material from WealthDrift</li>
                                <li>Reproduce, duplicate or copy material from WealthDrift</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. User Content</h2>
                            <p>
                                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas (e.g., comments). WealthDrift does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of WealthDrift, its agents and/or affiliates.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Hyperlinking to our Content</h2>
                            <p>
                                The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, and Online directory distributors. These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Disclaimer of Liability</h2>
                            <p>
                                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury resulting from negligence; limit or exclude our or your liability for fraud or fraudulent misrepresentation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. External Links</h2>
                            <p>
                                Our Site may contain links to external websites that are not provided or maintained by or in any way affiliated with WealthDrift. Please note that WealthDrift does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                            </p>
                        </section>

                        <section className="pt-10 border-t border-brand-border">
                            <h2 className="text-xl font-bold text-white mb-4">7. Contact Information</h2>
                            <p>If you have any queries regarding any of our terms, please contact us at contact@wealthdrift.com.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
