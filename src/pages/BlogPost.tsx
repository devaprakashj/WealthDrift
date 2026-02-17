import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar, User, Award } from "lucide-react";
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
                {/* Breadcrumbs with Schema */}
                <nav className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand-text-secondary">
                    <Link to="/" className="hover:text-brand-mint">Home</Link>
                    <span>/</span>
                    <Link to="/blog" className="hover:text-brand-mint">Blog</Link>
                    <span>/</span>
                    <span className="text-brand-mint truncate max-w-[200px]">{post.title}</span>

                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://wealthdrift.vercel.app/"
                            }, {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": "https://wealthdrift.vercel.app/blog"
                            }, {
                                "@type": "ListItem",
                                "position": 3,
                                "name": post.title,
                                "item": window.location.href
                            }]
                        })}
                    </script>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    <article className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-mint bg-brand-mint/10 px-3 py-1 rounded-full">
                                    {post.category}
                                </span>
                                <span className="text-brand-text-secondary text-[10px] md:text-xs flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-8">
                                {post.title}
                            </h1>

                            {/* Featured Hero Image */}
                            <div className="relative h-[250px] sm:h-[400px] w-full rounded-2xl overflow-hidden mb-12 border border-brand-border">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent" />
                            </div>

                            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-brand-border">
                                <div className="w-10 h-10 rounded-full bg-brand-mint/20 flex items-center justify-center text-brand-mint border border-brand-mint/20">
                                    <User className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">Devaprakash J</p>
                                    <p className="text-brand-text-secondary text-[10px] flex items-center gap-1 uppercase tracking-widest">
                                        <Calendar className="w-3 h-3" /> Updated {formatDate(post.date)}
                                    </p>
                                </div>
                            </div>

                            {/* Table of Contents - Crucial for US SEO */}
                            <div className="glass-card p-6 mb-12 border-l-4 border-l-brand-mint bg-brand-mint/5 overflow-x-hidden">
                                <h3 className="text-lg font-playfair font-bold text-white mb-4 italic">What's Inside This Guide:</h3>
                                <ul className="space-y-3 text-sm text-brand-text-secondary">
                                    <li className="flex items-start gap-2 hover:text-brand-mint transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-mint mt-1.5 shrink-0" />
                                        <a href="#introduction">Executive Summary & Introduction</a>
                                    </li>
                                    <li className="flex items-start gap-2 hover:text-brand-mint transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-mint mt-1.5 shrink-0" />
                                        <a href="#core-strategies">Core Financial Strategies</a>
                                    </li>
                                    <li className="flex items-start gap-2 hover:text-brand-mint transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-mint mt-1.5 shrink-0" />
                                        <a href="#implementation">Step-by-Step Implementation</a>
                                    </li>
                                    <li className="flex items-start gap-2 hover:text-brand-mint transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-mint mt-1.5 shrink-0" />
                                        <a href="#faqs">Frequently Asked Questions</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="prose prose-invert prose-luxury text-brand-text-secondary space-y-6 leading-relaxed mb-12 text-base md:text-lg">
                                <div className="whitespace-pre-wrap font-inter break-words overflow-x-hidden">{post.content}</div>
                            </div>

                            {/* Keywords / Tags */}
                            <div className="flex flex-wrap gap-2 mb-12">
                                {post.keywords.map((kw) => (
                                    <span key={kw} className="text-[9px] md:text-[10px] font-medium text-brand-text-secondary bg-white/5 px-2 md:px-3 py-1 rounded-full border border-brand-border uppercase tracking-widest">
                                        #{kw.replace(/\s+/g, '-')}
                                    </span>
                                ))}
                            </div>

                            {/* Author Bio for E-E-A-T */}
                            <div className="p-6 md:p-8 rounded-2xl bg-brand-card border border-brand-border mb-12 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left hover:border-brand-mint/30 transition-all duration-500 overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Award className="w-16 h-16 md:w-20 md:h-20 text-brand-mint" />
                                </div>
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-brand-mint to-brand-gold p-1 flex-shrink-0 shadow-2xl relative z-10">
                                    <img
                                        src="/deva.jpg"
                                        alt="Devaprakash J - Founder & Lead Researcher"
                                        className="w-full h-full object-cover rounded-full border-4 border-brand-card"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200";
                                        }}
                                    />
                                </div>
                                <div className="relative z-10 w-full">
                                    <h4 className="text-xl font-playfair font-bold text-white mb-2">Article by Devaprakash J</h4>
                                    <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed mb-4 max-w-xl">
                                        As the Founder and Lead Analyst at WealthDrift, Devaprakash J specializes in decoding the US financial landscape for modern investors. With a focus on math-backed strategies and transparency, his work helps thousands achieve financial independence.
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                                        <span className="text-brand-mint text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 bg-brand-mint/10 rounded-full border border-brand-mint/20">Executive Editor</span>
                                        <span className="text-[9px] md:text-[10px] text-brand-text-secondary uppercase tracking-widest font-medium">Wealth Professional</span>
                                    </div>
                                </div>
                            </div>

                            <div className="my-10 p-3 border border-brand-border rounded-lg bg-brand-card/30 text-center text-[9px] md:text-[10px] text-brand-text-secondary tracking-[0.2em] uppercase">
                                Advertisment
                                <div className="h-[200px] md:h-[250px] flex items-center justify-center italic text-brand-text-muted">AdSense Content Ad Block</div>
                            </div>

                            <div className="py-8 border-y border-brand-border mb-12">
                                <p className="text-white text-sm font-bold mb-6 text-center md:text-left">Share this USA wealth guide:</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    {/* X (Twitter) */}
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-grow sm:flex-grow-0 p-3 rounded-lg bg-brand-card border border-brand-border hover:text-brand-mint hover:border-brand-mint/50 transition-all flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                        Post
                                    </a>

                                    {/* Reddit */}
                                    <a
                                        href={`https://www.reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-grow sm:flex-grow-0 p-3 rounded-lg bg-brand-card border border-brand-border hover:text-[#ff4500] hover:border-[#ff4500]/50 transition-all flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.056 1.597.04.21.06.423.06.637 0 2.506-3.497 4.545-7.81 4.545s-7.81-2.039-7.81-4.545c0-.218.02-.433.064-.647-.615-.265-1.05-.881-1.05-1.597 0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.179.472 1.187-.813 2.783-1.366 4.553-1.482l.905-4.244 3.282.696c.03.03.835.668 1.513 1.452 1.513zm-9.29 10c-.766 0-1.387.621-1.387 1.387s.621 1.387 1.387 1.387 1.387-.621 1.387-1.387-.621-1.387-1.387-1.387zm6.556 0c-.766 0-1.387.621-1.387 1.387s.621 1.387 1.387 1.387 1.387-.621 1.387-1.387-.621-1.387-1.387-1.387zm-1.879 2.597c-.896 0-1.674.525-2.083 1.293-.053.101-.019.225.077.283a.208.208 0 0 0 .285-.065c.34-.639.99-.982 1.721-.982.724 0 1.38.343 1.724.982a.208.208 0 0 0 .284.065c.097-.058.131-.182.078-.283-.41-.768-1.192-1.293-2.086-1.293z" /></svg>
                                        Reddit
                                    </a>

                                    {/* Pinterest */}
                                    <a
                                        href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(post.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-grow sm:flex-grow-0 p-3 rounded-lg bg-brand-card border border-brand-border hover:text-[#e60023] hover:border-[#e60023]/50 transition-all flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.333.333 0 0 1 .076.31c-.098.404-.318 1.291-.36 1.469-.055.23-.186.278-.429.166-1.597-.743-2.594-3.076-2.594-4.948 0-4.029 2.928-7.729 8.442-7.729 4.432 0 7.877 3.158 7.877 7.379 0 4.405-2.777 7.948-6.631 7.948-1.295 0-2.512-.672-2.928-1.466 0 0-.641 2.434-.796 3.041-.288 1.103-1.066 2.488-1.589 3.328 1.125.348 2.318.535 3.555.535 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638 0 12.017 0z" /></svg>
                                        Pinterest
                                    </a>
                                </div>
                            </div>

                            {/* Recommended Reading */}
                            <div className="mt-12 md:mt-20">
                                <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mb-8 border-l-4 border-brand-mint pl-4">Master More US Finance</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {posts.filter(p => p.slug !== slug).slice(0, 2).map((recommended) => (
                                        <Link key={recommended.slug} to={`/blog/${recommended.slug}`} className="group block">
                                            <div className="relative h-40 rounded-xl overflow-hidden mb-4 border border-brand-border">
                                                <img src={recommended.image} alt={recommended.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-colors" />
                                            </div>
                                            <h4 className="text-white font-bold group-hover:text-brand-mint transition-colors leading-tight mb-2 text-sm md:text-base">{recommended.title}</h4>
                                            <p className="text-brand-text-secondary text-[10px] uppercase tracking-widest">{recommended.readTime}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </article>

                    <aside className="lg:col-span-4 space-y-10">
                        <div className="p-1 border border-brand-border rounded-lg bg-brand-card/50 text-center text-[9px] text-brand-text-secondary tracking-widest leading-loose">
                            ADVERTISEMENT
                            <div className="h-[600px] flex items-center justify-center italic text-brand-text-muted">Skyscraper Ad Block</div>
                        </div>

                        <SidebarNewsletter />
                    </aside>
                </div>
            </div>
        </div>
    );
}

function SidebarNewsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            const { subscribeToNewsletter } = await import("../lib/newsletter");
            await subscribeToNewsletter(email);
            setStatus("success");
            setEmail("");
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="glass-card p-8 sticky top-24">
            <h3 className="text-xl font-playfair font-bold text-white mb-6 underline decoration-brand-mint decoration-2 underline-offset-8">Stay Wealthy</h3>

            {status === "success" ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-mint text-sm font-bold"
                >
                    Success! Check your email. 🚀
                </motion.div>
            ) : (
                <>
                    <p className="text-brand-text-secondary text-sm mb-6 leading-relaxed">Join 50,000+ readers getting our weekly wealth-building strategies.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@address.com"
                            className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white text-sm mb-4 focus:border-brand-mint outline-none"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="btn-mint w-full text-sm cursor-pointer disabled:opacity-50"
                        >
                            {status === "loading" ? "Joining..." : "Join Free"}
                        </button>
                    </form>
                    {status === "error" && (
                        <p className="text-red-400 text-[10px] mt-2">Error. Try again.</p>
                    )}
                </>
            )}
        </div>
    );
}
