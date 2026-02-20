import { TrendingUp, TrendingDown } from "lucide-react";

export default function LiveUSMarkets() {
    // Static curated data representing current US market trends for SEO relevance
    const markets = [
        { name: "S&P 500", value: "5,823.40", change: "+0.45%", up: true },
        { name: "NASDAQ", value: "18,412.15", change: "+0.62%", up: true },
        { name: "USD Index", value: "103.45", change: "-0.12%", up: false },
        { name: "10Y Treasury", value: "4.21%", change: "+0.03%", up: true },
    ];

    return (
        <div className="w-full bg-brand-bg/50 border-y border-brand-border py-2 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-mint font-bold shrink-0">
                        <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
                        US Markets Today
                    </div>
                    {markets.map((m, i) => (
                        <div key={i} className="flex items-center gap-4 text-sm font-medium">
                            <span className="text-brand-text-secondary">{m.name}</span>
                            <span className="text-white tabular-nums font-bold">{m.value}</span>
                            <span className={`flex items-center gap-1 ${m.up ? "text-green-400" : "text-red-400"}`}>
                                {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                {m.change}
                            </span>
                            <span className="text-brand-border mx-2">|</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {markets.map((m, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-4 text-sm font-medium">
                            <span className="text-brand-text-secondary">{m.name}</span>
                            <span className="text-white tabular-nums font-bold">{m.value}</span>
                            <span className={`flex items-center gap-1 ${m.up ? "text-green-400" : "text-red-400"}`}>
                                {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                {m.change}
                            </span>
                            <span className="text-brand-border mx-2">|</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
