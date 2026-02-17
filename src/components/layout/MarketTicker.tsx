import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const marketData = [
    { name: "NIFTY 50", value: "24,115.30", change: "+1.2%", status: "up" },
    { name: "SENSEX", value: "79,476.63", change: "+0.85%", status: "up" },
    { name: "S&P 500", value: "5,985.20", change: "+0.45%", status: "up" },
    { name: "NASDAQ", value: "19,269.46", change: "-0.21%", status: "down" },
    { name: "BITCOIN", value: "$91,452.12", change: "+4.52%", status: "up" },
    { name: "ETH", value: "$3,124.50", change: "+2.15%", status: "up" },
    { name: "GOLD", value: "$2,642.80", change: "-0.15%", status: "down" },
];

export default function MarketTicker() {
    return (
        <div className="w-full bg-brand-bg/50 border-b border-brand-border py-1 overflow-hidden hidden sm:block h-[34px]">
            <motion.div
                className="flex whitespace-nowrap gap-12 items-center"
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {/* Double the array for infinite scroll simulation */}
                {[...marketData, ...marketData].map((data, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-brand-text-secondary tracking-widest uppercase">{data.name}</span>
                        <span className="text-[11px] font-bold text-white font-inter">{data.value}</span>
                        <span className={`flex items-center gap-0.5 text-[10px] font-bold ${data.status === 'up' ? 'text-brand-mint' : 'text-red-400'}`}>
                            {data.status === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {data.change}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
