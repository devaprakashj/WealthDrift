import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Tag } from "lucide-react";
import { formatDate } from "../lib/utils";
import { posts } from "../lib/posts";
import SafeImage from "../components/util/SafeImage";

export default function Blog() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">Expert Financial Guides</h1>
                    <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto">
                        Actionable strategies and honest reviews to help you make smarter money decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link to={`/blog/${post.slug}`}>
                                <div className="glass-card overflow-hidden h-full hover:border-brand-mint/30 hover:scale-[1.02] transition-all duration-300 flex flex-col">
                                    {/* Featured Image */}
                                    <div className="relative h-48 w-full overflow-hidden border-b border-brand-border">
                                        <SafeImage
                                            src={post.image}
                                            alt={post.imageAlt}
                                            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent opacity-60 pointer-events-none" />
                                    </div>

                                    {/* Category Pill */}
                                    <div className="p-8 pb-0">
                                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-brand-mint bg-brand-mint/10 px-2 py-0.5 rounded-full mb-6">
                                            <Tag className="w-3 h-3" /> {post.category}
                                        </span>
                                        <h2 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-brand-mint transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-brand-text-secondary text-sm leading-relaxed line-clamp-3 mb-8">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-auto p-8 pt-0 flex items-center justify-between text-[11px] text-brand-text-secondary font-medium uppercase tracking-widest">
                                        <span>{formatDate(post.date)}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5 text-brand-mint" /> {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
