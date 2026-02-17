export default function WealthDriftLogo({ className = "w-8 h-8", textClassName = "text-2xl" }) {
    return (
        <div className="flex items-center gap-2 group">
            <div className={`relative ${className}`}>
                {/* Abstract "W" with Growth Arrow */}
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,212,170,0.3)]">
                    <rect width="100" height="100" rx="20" fill="#111118" />
                    <path
                        d="M25 35L40 70L50 45L60 70L75 35"
                        stroke="#00d4aa"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-white transition-colors duration-300"
                    />
                    <path
                        d="M65 25L80 25L80 40"
                        stroke="#00d4aa"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M50 55L80 25"
                        stroke="#00d4aa"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <span className={`font-playfair font-bold text-white transition-colors group-hover:text-brand-mint ${textClassName}`}>
                Wealth<span className="text-brand-mint group-hover:text-white">Drift</span>
            </span>
        </div>
    );
}
