import { motion } from "framer-motion";
import { Mail, Globe, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Get In Touch</h1>
                    <p className="text-brand-text-secondary text-lg">Have a question or a partnership inquiry?</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-6">
                                <div className="p-4 rounded-xl bg-brand-mint/10 border border-brand-mint/20 text-brand-mint">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Email Us</h3>
                                    <p className="text-brand-text-secondary text-sm">support@wealthdrift.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-6">
                                <div className="p-4 rounded-xl bg-blue-400/10 border border-blue-400/20 text-blue-400">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Location</h3>
                                    <p className="text-brand-text-secondary text-sm">New York, NY 10001</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 sm:p-10"
                    >
                        {submitted ? (
                            <div className="text-center py-10">
                                <h3 className="text-2xl font-playfair font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-brand-text-secondary text-sm">We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-brand-text-secondary text-xs uppercase mb-2 font-bold">Name</label>
                                    <input required className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white focus:border-brand-mint outline-none" />
                                </div>
                                <div>
                                    <label className="block text-brand-text-secondary text-xs uppercase mb-2 font-bold">Email</label>
                                    <input required type="email" className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white focus:border-brand-mint outline-none" />
                                </div>
                                <div>
                                    <label className="block text-brand-text-secondary text-xs uppercase mb-2 font-bold">Message</label>
                                    <textarea required rows={4} className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white focus:border-brand-mint outline-none" />
                                </div>
                                <button className="btn-mint w-full flex items-center justify-center gap-2 cursor-pointer">
                                    Send Message <Send className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
