import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { formatDate } from "../lib/utils";
import { posts } from "../lib/posts";

export default function BlogPost() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-playfair font-bold text-white mb-4">Post Not Found</h1>
                    <Link to="/blog" className="text-brand-mint underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            {/* Dynamic SEO Tags for individual posts */}
            <head>
                <title>{`${post.title} | WealthDrift`}</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "image": [post.image],
                        "datePublished": post.date,
                        "dateModified": post.date,
                        "author": [{
                            "@type": "Organization",
                            "name": "WealthDrift Editorial",
                            "url": "https://wealthdrift.vercel.app/about"
                        }],
                        "description": post.excerpt,
                        "publisher": {
                            "@type": "Organization",
                            "name": "WealthDrift",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://wealthdrift.vercel.app/favicon.svg"
                            }
                        }
                    })}
                </script>
            </head>

            <div className="max-w-7xl mx-auto">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-brand-text-secondary hover:text-brand-mint transition-colors mb-10">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <article className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-brand-mint bg-brand-mint/10 px-3 py-1 rounded-full">
                                    {post.category}
                                </span>
                                <span className="text-brand-text-secondary text-xs flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-8">
                                {post.title}
                            </h1>

                            {/* Featured Hero Image */}
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 border border-brand-border">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent" />
                            </div>

                            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-brand-border">
                                <div className="w-10 h-10 rounded-full bg-brand-mint/20 flex items-center justify-center text-brand-mint border border-brand-mint/20">
                                    <User className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">WealthDrift Editorial</p>
                                    <p className="text-brand-text-secondary text-[11px] flex items-center gap-1 uppercase tracking-widest">
                                        <Calendar className="w-3 h-3" /> Updated {formatDate(post.date)}
                                    </p>
                                </div>
                            </div>

                            <div className="prose prose-invert prose-luxury text-brand-text-secondary space-y-6 leading-relaxed mb-12 text-lg">
                                <div className="whitespace-pre-wrap font-inter">{post.content}</div>
                            </div>

                            {/* Keywords / Tags */}
                            <div className="flex flex-wrap gap-2 mb-12">
                                {post.keywords.map((kw) => (
                                    <span key={kw} className="text-[10px] font-medium text-brand-text-secondary bg-white/5 px-3 py-1 rounded-full border border-brand-border">
                                        #{kw}
                                    </span>
                                ))}
                            </div>

                            <div className="my-12 p-3 border border-brand-border rounded-lg bg-brand-card/30 text-center text-[10px] text-brand-text-secondary tracking-[0.2em] uppercase">
                                Advertisment
                                <div className="h-[250px] flex items-center justify-center italic text-brand-text-muted">AdSense Content Ad Block</div>
                            </div>

                            <div className="flex items-center gap-4 py-8 border-y border-brand-border mb-12">
                                <p className="text-white text-sm font-bold">Share this guide:</p>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-lg bg-brand-card border border-brand-border hover:text-brand-mint transition-all cursor-pointer"><Share2 className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </motion.div>
                    </article>

                    <aside className="lg:col-span-4 space-y-10">
                        <div className="p-1 border border-brand-border rounded-lg bg-brand-card/50 text-center text-[9px] text-brand-text-secondary tracking-widest leading-loose">
                            ADVERTISEMENT
                            <div className="h-[600px] flex items-center justify-center italic text-brand-text-muted">Skyscraper Ad Block</div>
                        </div>

                        <div className="glass-card p-8 sticky top-24">
                            <h3 className="text-xl font-playfair font-bold text-white mb-6 underline decoration-brand-mint decoration-2 underline-offset-8">Stay Wealthy</h3>
                            <p className="text-brand-text-secondary text-sm mb-6 leading-relaxed">Join 50,000+ readers getting our weekly wealth-building strategies.</p>
                            <input type="email" placeholder="email@address.com" className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white text-sm mb-4 focus:border-brand-mint outline-none" />
                            <button className="btn-mint w-full text-sm cursor-pointer">Join Free</button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
