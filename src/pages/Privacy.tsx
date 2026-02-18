import { motion } from "framer-motion";

export default function Privacy() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-8 sm:p-12"
                >
                    <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-2">Privacy Policy</h1>
                    <p className="text-brand-mint text-xs uppercase tracking-widest mb-10 font-bold">Last Updated: February 17, 2026</p>

                    <div className="prose prose-invert max-w-none text-brand-text-secondary space-y-8 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                            <p>
                                At WealthDrift (reachable from wealthdrift.com), one of our main priorities is the privacy of our visitors.
                                This Privacy Policy document contains types of information that is collected and recorded by WealthDrift and how we use it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Log Files</h2>
                            <p>
                                WealthDrift follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Cookies and Web Beacons</h2>
                            <p>
                                Like any other website, WealthDrift uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Google DoubleClick DART Cookie</h2>
                            <p>
                                Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-brand-mint underline">https://policies.google.com/technologies/ads</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Advertising Partners Privacy Policies</h2>
                            <p>
                                WealthDrift may feature advertising from third-party networks, including but not limited to **Google AdSense**. These partners use technology like cookies and web beacons to serve ads based on your visit to our Site and other sites on the Internet.
                            </p>
                            <p className="mt-4">
                                Most third-party ad servers or ad networks use technologies that are used in their respective advertisements and links that appear on WealthDrift, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see.
                            </p>
                            <p className="mt-4 italic">Note: WealthDrift has no access to or control over these cookies used by third-party advertisers.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                                <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                                <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">7. GDPR Data Protection Rights</h2>
                            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                                <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
                                <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">8. Children's Information</h2>
                            <p>
                                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. WealthDrift does not knowingly collect any Personal Identifiable Information from children under the age of 13.
                            </p>
                        </section>

                        <section className="pt-10 border-t border-brand-border">
                            <h2 className="text-xl font-bold text-white mb-4">9. Contact Us</h2>
                            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at legal@wealthdrift.com.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
