import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, TrendingUp, PiggyBank, CreditCard } from "lucide-react";

function CompoundInterestCalc() {
    const [principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(7);
    const [years, setYears] = useState(20);
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const r = rate / 100;
        const amount = principal * Math.pow(1 + r, years);
        setResult(amount);
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                    <label className="block text-brand-text-secondary mb-1">Principal Amount ($)</label>
                    <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white focus:border-brand-mint focus:outline-none" />
                </div>
                <div>
                    <label className="block text-brand-text-secondary mb-1">Annual Return (%)</label>
                    <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white focus:border-brand-mint focus:outline-none" />
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-brand-text-secondary mb-1">Years of Growth</label>
                    <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white focus:border-brand-mint focus:outline-none" />
                </div>
            </div>
            <button onClick={calculate} className="btn-mint w-full cursor-pointer">Calculate Growth</button>
            {result && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-xl bg-brand-mint/10 border border-brand-mint/20 text-center">
                    <p className="text-sm text-brand-text-secondary">Expected Total Balance</p>
                    <p className="text-3xl font-bold text-brand-mint font-playfair">${result.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </motion.div>
            )}
        </div>
    );
}

function BudgetCalc() {
    const [income, setIncome] = useState(5000);
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-brand-text-secondary mb-1 text-sm">Monthly Take-Home Pay ($)</label>
                <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white focus:border-brand-mint focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">50% Needs</span>
                        <span className="text-white font-bold">${(income * 0.5).toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-1/2" />
                    </div>
                </div>
                <div className="p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/20">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-brand-gold font-bold uppercase tracking-wider">30% Wants</span>
                        <span className="text-white font-bold">${(income * 0.3).toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-gold h-full w-[30%]" />
                    </div>
                </div>
                <div className="p-4 rounded-xl bg-brand-mint/10 border border-brand-mint/20">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-brand-mint font-bold uppercase tracking-wider">20% Savings/Debt</span>
                        <span className="text-white font-bold">${(income * 0.2).toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-mint h-full w-[20%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Tools() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Financial Calculators</h1>
                    <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto">Free, easy-to-use tools to help you plan your path to wealth.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="glass-card p-8 sm:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-brand-mint/10 border border-brand-mint/20">
                                <Calculator className="w-6 h-6 text-brand-mint" />
                            </div>
                            <h2 className="text-2xl font-playfair font-bold text-white">Compound Interest</h2>
                        </div>
                        <CompoundInterestCalc />
                    </div>

                    <div className="glass-card p-8 sm:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                <PiggyBank className="w-6 h-6 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-playfair font-bold text-white">50/30/20 Budgeting</h2>
                        </div>
                        <BudgetCalc />
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Net Worth Tracker", icon: TrendingUp, desc: "See where you stand globally." },
                        { title: "Roth IRA Calculator", icon: Calculator, desc: "Predict your tax-free retirement." },
                        { title: "Credit Payoff", icon: CreditCard, desc: "Fast-track your way out of debt." },
                    ].map((tool) => (
                        <div key={tool.title} className="glass-card p-8 hover:border-brand-mint/30 transition-all opacity-70 group">
                            <div className="p-3 rounded-xl bg-white/5 w-fit mb-6 group-hover:bg-brand-mint/10 transition-colors">
                                <tool.icon className="w-6 h-6 text-white group-hover:text-brand-mint" />
                            </div>
                            <h3 className="text-white font-bold mb-2">{tool.title}</h3>
                            <p className="text-brand-text-secondary text-xs">{tool.desc} (Coming in V2)</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
