import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "../../lib/posts";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(posts.slice(0, 3));

    useEffect(() => {
        if (query.trim()) {
            const filtered = posts.filter(p =>
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                p.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
            ).slice(0, 5);
            setResults(filtered);
        } else {
            setResults(posts.slice(0, 3));
        }
    }, [query]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setQuery("");
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl p-4 md:p-20"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-brand-text-secondary hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="max-w-4xl mx-auto mt-20 md:mt-0 px-4">
                        <div className="relative mb-12">
                            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-brand-mint" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search US investment guides..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent border-b-2 border-brand-border py-4 pl-12 text-2xl md:text-4xl text-white focus:outline-none focus:border-brand-mint transition-all font-playfair"
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-brand-text-muted text-[10px] tracking-widest uppercase">
                                <span className="p-1 rounded bg-white/5 border border-brand-border">ESC</span>
                                <span>to close</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-brand-text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                                {query ? `Search Results (${results.length})` : "Popular Guides"}
                            </h3>

                            <div className="grid grid-cols-1 gap-4">
                                {results.length > 0 ? (
                                    results.map((post) => (
                                        <Link
                                            key={post.slug}
                                            to={`/blog/${post.slug}`}
                                            onClick={onClose}
                                            className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white/5 border border-brand-border hover:border-brand-mint/30 hover:bg-white/[0.08] transition-all"
                                        >
                                            <div className="flex-grow pr-8">
                                                <span className="text-[10px] font-bold text-brand-mint uppercase tracking-widest mb-1 block">{post.category}</span>
                                                <h4 className="text-xl md:text-2xl font-playfair font-bold text-white group-hover:text-brand-mint transition-colors mb-2">
                                                    {post.title}
                                                </h4>
                                                <p className="text-brand-text-secondary text-sm md:text-base line-clamp-1">{post.excerpt}</p>
                                            </div>
                                            <div className="mt-4 md:mt-0 flex items-center gap-2 text-brand-mint opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs font-bold uppercase tracking-widest">Read Guide</span>
                                                <ArrowRight className="w-4 h-4 translate-x-[-10px] group-hover:translate-x-0 transition-transform" />
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="text-center py-20">
                                        <p className="text-brand-text-secondary text-lg">No guides found for "{query}"</p>
                                        <button
                                            onClick={() => setQuery("")}
                                            className="text-brand-mint underline mt-2"
                                        >
                                            View all guides
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
