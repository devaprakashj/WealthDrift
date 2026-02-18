import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SafeImageProps {
    src: string;
    alt: string;
    className?: string;
    skeletonClassName?: string;
}

export default function SafeImage({ src, alt, className = "", skeletonClassName = "" }: SafeImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-brand-border animate-pulse ${skeletonClassName}`}
                        style={{ background: 'linear-gradient(90deg, #1A1D1F 25%, #232627 50%, #1A1D1F 75%)', backgroundSize: '200% 100%' }}
                    />
                )}
            </AnimatePresence>

            <img
                src={error ? "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200" : src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setError(true)}
            />
        </div>
    );
}
