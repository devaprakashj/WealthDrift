import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function CookieConsent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setTimeout(() => setShow(true), 2000);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "true");
        setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 z-50 flex items-center justify-center pointer-events-none"
                >
                    <div className="glass-card p-6 md:p-8 max-w-4xl w-full border-brand-mint/30 shadow-2xl pointer-events-auto flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h4 className="text-white font-bold mb-2">We respect your privacy</h4>
                            <p className="text-brand-text-secondary text-sm leading-relaxed">
                                WealthDrift uses cookies to improve your experience and show personalized ads via Google AdSense.
                                By continuing to use our site, you agree to our
                                <Link to="/privacy" className="text-brand-mint hover:underline ml-1">Privacy Policy</Link>.
                            </p>
                        </div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <button
                                onClick={accept}
                                className="btn-mint whitespace-nowrap px-8 py-3 text-sm cursor-pointer w-full md:w-auto"
                            >
                                Allow Cookies
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
