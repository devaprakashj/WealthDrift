import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar, User, Award, ArrowRight } from "lucide-react";
import { formatDate } from "../lib/utils";
import { posts } from "../lib/posts";
import SafeImage from "../components/util/SafeImage";
import ReadingProgress from "../components/util/ReadingProgress";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
            <ReadingProgress />
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
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": window.location.href
                        }
                    })}
                </script>
                {post.faqs && (
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": post.faqs.map(f => ({
                                "@type": "Question",
                                "name": f.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": f.answer
                                }
                            }))
                        })}
                    </script>
                )}
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
                                <SafeImage
                                    src={post.image}
                                    alt={post.imageAlt}
                                    className="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent pointer-events-none" />
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

                            <div className="prose prose-invert prose-luxury text-brand-text-secondary space-y-8 leading-relaxed mb-12 text-base md:text-lg max-w-none">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        a: ({ node, ...props }) => {
                                            const isInternal = props.href?.startsWith("/");
                                            if (isInternal) {
                                                return <Link to={props.href || "#"} className="text-brand-mint hover:underline font-bold" {...(props as any)} />;
                                            }
                                            return <a target="_blank" rel="noopener noreferrer" className="text-brand-mint hover:underline font-bold" {...props} />;
                                        },
                                        h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mt-12 mb-6 border-l-4 border-brand-mint pl-4" {...props} />,
                                        h3: ({ node, ...props }) => <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mt-10 mb-4" {...props} />,
                                        h4: ({ node, ...props }) => <h4 className="text-lg md:text-xl font-bold text-white mt-8 mb-3" {...props} />,
                                        p: ({ node, ...props }) => <p className="mb-6 last:mb-0" {...props} />,
                                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-8 space-y-2" {...props} />,
                                        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-8 space-y-2" {...props} />,
                                        li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                                    }}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </div>

                            {/* FAQ Section UI - Highly effective for US Featured Snippets */}
                            {post.faqs && (
                                <div className="mb-12" id="faqs">
                                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-8 flex items-center gap-3">
                                        <Award className="text-brand-mint w-6 h-6" /> Common US Financial Questions
                                    </h2>
                                    <div className="space-y-4">
                                        {post.faqs.map((faq, idx) => (
                                            <div key={idx} className="glass-card p-6 border border-brand-border/40 hover:border-brand-mint/30 transition-all">
                                                <h4 className="text-white font-bold mb-3 flex items-start gap-3">
                                                    <span className="text-brand-mint">Q:</span> {faq.question}
                                                </h4>
                                                <p className="text-brand-text-secondary text-sm leading-relaxed pl-7">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Keywords / Tags */}
                            <div className="flex flex-wrap gap-2 mb-12">
                                {post.keywords.map((kw) => (
                                    <span key={kw} className="text-[9px] md:text-[10px] font-bold text-brand-mint/80 bg-brand-mint/5 px-2 md:px-3 py-1.5 rounded border border-brand-mint/10 uppercase tracking-widest">
                                        #{kw.replace(/\s+/g, '-')}
                                    </span>
                                ))}
                            </div>

                            {/* Author Bio for E-E-A-T */}
                            <div className="p-6 md:p-10 rounded-2xl bg-brand-card border border-brand-border mb-12 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left hover:border-brand-mint/20 transition-all duration-700 overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <Award className="w-32 h-32 md:w-40 md:h-40 text-brand-mint" />
                                </div>
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-brand-mint via-brand-gold to-brand-mint p-1 flex-shrink-0 shadow-2xl relative z-10 animate-gradient-x">
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
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                                        <h4 className="text-2xl font-playfair font-bold text-white">Devaprakash J</h4>
                                        <span className="hidden md:block w-1 h-1 rounded-full bg-brand-border" />
                                        <span className="text-brand-mint text-[10px] font-bold uppercase tracking-[0.2em]">Verified Financial Researcher</span>
                                    </div>
                                    <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                                        Founder of WealthDrift. With over a decade of experience in personal finance and algorithmic wealth building, JP decodes complex US tax codes and investment strategies into actionable alpha for the modern investor.
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                                        <Link to="/about" className="text-white text-xs font-bold uppercase tracking-widest hover:text-brand-mint transition-colors flex items-center gap-2">
                                            View Full Profile <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="py-8 border-y border-brand-border mb-12 flex flex-col items-center sm:flex-row sm:justify-between gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-brand-mint/10 flex items-center justify-center text-brand-mint">
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <p className="text-white text-sm font-bold">Share this Expert Guide:</p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-3">
                                    <ShareButton
                                        platform="X"
                                        url={window.location.href}
                                        title={post.title}
                                        icon={<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>}
                                    />
                                    <ShareButton
                                        platform="Reddit"
                                        url={window.location.href}
                                        title={post.title}
                                        color="hover:text-[#ff4500] hover:border-[#ff4500]/50"
                                        icon={<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.056 1.597.04.21.06.423.06.637 0 2.506-3.497 4.545-7.81 4.545s-7.81-2.039-7.81-4.545c0-.218.02-.433.064-.647-.615-.265-1.05-.881-1.05-1.597 0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.179.472 1.187-.813 2.783-1.366 4.553-1.482l.905-4.244 3.282.696c.03.03.835.668 1.513 1.452 1.513zm-9.29 10c-.766 0-1.387.621-1.387 1.387s.621 1.387 1.387 1.387 1.387-.621 1.387-1.387-.621-1.387-1.387-1.387zm6.556 0c-.766 0-1.387.621-1.387 1.387s.621 1.387 1.387 1.387 1.387-.621 1.387-1.387-.621-1.387-1.387-1.387zm-1.879 2.597c-.896 0-1.674.525-2.083 1.293-.053.101-.019.225.077.283a.208.208 0 0 0 .285-.065c.34-.639.99-.982 1.721-.982.724 0 1.38.343 1.724.982a.208.208 0 0 0 .284.065c.097-.058.131-.182.078-.283-.41-.768-1.192-1.293-2.086-1.293z" /></svg>}
                                    />
                                    <ShareButton
                                        platform="Pinterest"
                                        url={window.location.href}
                                        title={post.title}
                                        color="hover:text-[#bd081c] hover:border-[#bd081c]/50"
                                        icon={<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.718-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.35c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.259 7.929-7.259 4.164 0 7.398 2.967 7.398 6.931 0 4.135-2.607 7.462-6.225 7.462-1.214 0-2.354-.629-2.746-1.379l-.749 2.848c-.27 1.03-1.001 2.321-1.488 3.113 1.13.35 2.33.541 3.574.541 6.63 0 12.016-5.385 12.016-12.017C24.032 5.367 18.665.029 12.017.029z" /></svg>}
                                    />
                                </div>
                            </div>

                            {/* Recommended Reading */}
                            <div className="mt-12 md:mt-20">
                                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-8 border-l-4 border-brand-mint pl-6 italic">Master More US Finance</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {posts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2).map((recommended) => (
                                        <Link key={recommended.slug} to={`/blog/${recommended.slug}`} className="group block">
                                            <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-brand-border">
                                                <SafeImage src={recommended.image} alt={recommended.title} className="w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-colors pointer-events-none" />
                                            </div>
                                            <h4 className="text-white text-lg font-bold group-hover:text-brand-mint transition-colors leading-tight mb-2">{recommended.title}</h4>
                                            <p className="text-brand-text-secondary text-[11px] uppercase tracking-widest font-bold text-brand-mint/70">{recommended.readTime}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </article>

                    <aside className="lg:col-span-4 space-y-10">
                        {/* High-Impact Sidebar */}
                        <div className="sticky top-24 space-y-10">
                            {/* Newsletter First */}
                            <SidebarNewsletter />

                            {/* Recent Guides Widget */}
                            <div className="glass-card p-8 border border-brand-border/40">
                                <h3 className="text-lg font-playfair font-bold text-white mb-6 flex items-center gap-2">
                                    Latest Guides <span className="w-8 h-[1px] bg-brand-mint animate-pulse" />
                                </h3>
                                <div className="space-y-6">
                                    {posts.slice(0, 4).filter(p => p.slug !== slug).map(recent => (
                                        <Link key={recent.slug} to={`/blog/${recent.slug}`} className="group block flex gap-4 items-center">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-brand-border">
                                                <img src={recent.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div>
                                                <h4 className="text-white text-sm font-bold group-hover:text-brand-mint transition-colors line-clamp-2 leading-snug">
                                                    {recent.title}
                                                </h4>
                                                <span className="text-[10px] text-brand-text-secondary uppercase tracking-widest mt-1 block">{formatDate(recent.date)}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Categories */}
                            <div className="glass-card p-8 border border-brand-border/40">
                                <h3 className="text-lg font-playfair font-bold text-white mb-6">Explore Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Array.from(new Set(posts.map(p => p.category))).map(cat => (
                                        <Link
                                            key={cat}
                                            to={`/categories/${cat.toLowerCase()}`}
                                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-brand-border text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest hover:border-brand-mint hover:text-brand-mint transition-all"
                                        >
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

function ShareButton({ platform, url, title, icon, color = "hover:text-brand-mint hover:border-brand-mint/50" }: any) {
    const shareUrls: any = {
        X: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        Reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        Pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
    };

    return (
        <a
            href={shareUrls[platform]}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-lg bg-brand-card border border-brand-border transition-all flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider ${color}`}
        >
            {icon}
            {platform}
        </a>
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
        <div className="glass-card p-8 relative overflow-hidden group border border-brand-mint/20">
            <div className="absolute top-0 right-0 p-2 opacity-5">
                < Award className="w-16 h-16 text-brand-mint" />
            </div>

            <h3 className="text-xl font-playfair font-bold text-white mb-4 relative z-10 underline decoration-brand-mint/50 decoration-2 underline-offset-8">Stay Wealthy</h3>

            {status === "success" ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-mint text-sm font-bold py-4"
                >
                    Success! Check your inbox. 🚀
                </motion.div>
            ) : (
                <div className="relative z-10">
                    <p className="text-brand-text-secondary text-xs mb-6 leading-relaxed">Join 50,000+ top 1% earners getting our weekly wealth-building blueprint.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            className="w-full bg-brand-bg border border-brand-border rounded-lg p-3 text-white text-sm focus:border-brand-mint outline-none transition-all"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="btn-mint w-full text-xs py-3 cursor-pointer disabled:opacity-50 font-bold uppercase tracking-widest"
                        >
                            {status === "loading" ? "Joining Elite..." : "Join Free"}
                        </button>
                    </form>
                    {status === "error" && (
                        <p className="text-red-400 text-[10px] mt-2">Error. Please try again.</p>
                    )}
                </div>
            )}
        </div>
    );
}
