import { useState, useEffect, type ReactNode } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Lock,
    Clock,
    ShoppingCart,
    Eye,
    Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroInside from "@/assets/matrics-hero-inside.png";
import heroHowTo from "@/assets/matrics-hero-howto.png";
import heroCommandWords from "@/assets/matrics-hero-commandwords.png";
import heroPastPaper from "@/assets/matrics-hero-pastpaper.png";
import rubyLogo from "@/assets/ruby-logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import StudyGuideHowItWorks from "@/components/StudyGuideHowItWorks";
import CartNavButton from "@/components/CartNavButton";
import CartDrawer from "@/components/CartDrawer";
import StickyCartBar from "@/components/StickyCartBar";
import { useCart } from "@/context/CartContext";
import { guides } from "@/data/studyGuides";
import { tiers, tierForCount, ctaGradient } from "@/data/pricing";

const WHATSAPP_URL = "https://wa.me/27652985458?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20study%20guides";

// The only guides with a real PDF behind them today; this is what "the full bundle" delivers.
const REAL_GUIDE_IDS = ["math", "science", "english", "mathslit"];

// Countdown to the (placeholder, unconfirmed) 2026 NSC exam start date (same
// target date and same "computed once on load" behaviour as the source design).
const EXAM_DATE = new Date("2026-10-21T00:00:00");
const daysLeft = Math.max(0, Math.ceil((EXAM_DATE.getTime() - Date.now()) / 86400000));


// Hero carousel slides: real screenshots of the guide content itself.
const heroSlides = [heroInside, heroHowTo, heroCommandWords, heroPastPaper];

type IconOrLogo = string | { logo: true };

const heroFeats: { icon: IconOrLogo; title: string; sub: string }[] = [
    { icon: "📖", title: "CAPS Aligned", sub: "100% Curriculum" },
    { icon: "🎯", title: "Exam Focused", sub: "Past papers & memos" },
    { icon: { logo: true }, title: "AI Tutor", sub: "24/7 Homework help" },
];

const trustBadges = [
    { icon: "📚", hue: "150 30% 40%", primary: "Built from 5 years of real NSC past papers" },
    { icon: "✅", hue: "226 60% 45%", primary: "Marked exactly like the memo" },
    { icon: "🌍", hue: "351 75% 48%", primary: "Feedback in all 11 official languages" },
    { icon: "📈", hue: "35 70% 42%", primary: "8,800+", secondary: "guides downloaded" },
    { icon: "🏫", hue: "348 80% 40%", primary: "1,400+", secondary: "schools reached" },
];

type FixPair = { problemIcon: string; problemText: string; fixIcon: IconOrLogo; fixText: ReactNode; hue: string };

const fixPairs: FixPair[] = [
    {
        problemIcon: "⏰",
        problemText: "Less than 70 days to your exam and the whole syllabus still feels untouched.",
        fixIcon: "🎯",
        fixText: <><strong>5 years of past papers analysed</strong> per subject to find what keeps coming up.</>,
        hue: "150 30% 40%",
    },
    {
        problemIcon: "😤",
        problemText: "Hours in a textbook with no idea which parts are actually worth marks.",
        fixIcon: "📈",
        fixText: <>A guide built only from the <strong>highest-mark topics</strong>, not the whole textbook.</>,
        hue: "226 60% 45%",
    },
    {
        problemIcon: "🤷",
        problemText: "You can see the memo's answer, but not how anyone was supposed to get there.",
        fixIcon: { logo: true },
        fixText: <>An <strong>AI tutor that bridges the question and the answer</strong>, showing why a mark is earned.</>,
        hue: "351 75% 48%",
    },
    {
        problemIcon: "🌐",
        problemText: "Tutoring that only happens in English, even if it's not your home language.",
        fixIcon: "🗣️",
        fixText: <>AI feedback in <strong>all 11 official languages</strong>, not just English.</>,
        hue: "35 70% 42%",
    },
];

const hiwSteps = [
    { icon: "📝", title: "Pick your subjects", text: "Choose the study guides you need for November." },
    { icon: "📖", title: "Study the guide", text: "Learn the highest-mark topics and methods, not the whole textbook." },
    { icon: "✅", title: "Test yourself", text: "Write the prep paper under real exam conditions." },
    { icon: "🏆", title: "Get your results", text: "Mark with the memo and see exactly where you stand." },
];

/* PLACEHOLDER testimonials, replace quotes/names with real student feedback before launch */
const testimonials = [
    { quote: "This has been so helpful, please keep on giving us exam tips! We can't pass without you.", name: "T. Moodley" },
    { quote: "We trust you because each of your study guides have been on point with the scope, thank you so much! I am looking forward to writing an exam for the first time!", name: "V. Bears" },
    { quote: "I am a matric rewriter and your tips and videos have helped me so much! Now I know what to do and what to expect in my exams.", name: "N. Malik" },
    { quote: "These study guides make my life easy!", name: "M. Daniels" },
    { quote: "What you said came in exactly! Your essay prep for Cold War helped so much!", name: "H. Dixon" },
    { quote: "That's exactly what came in our exam! MCQ, short questions and essays, all the same!", name: "J. Kemp" },
    { quote: "So helpful! The guides saved me so much time as I could only study the night before.", name: "L. Truter" },
    { quote: "Where was all of this when I was at school, but I am so happy my children can benefit from Ruby.", name: "S. Bennet" },
    { quote: "This didn't seem real, Ruby made it so easy for me to prepare for my exams.", name: "J. Read" },
];

const faqs = [
    {
        q: "What do I actually get?",
        a: "A full PDF study guide, a 2026 prep paper, and a full memo with step-by-step marking explanations, delivered instantly.",
    },
    {
        q: "How does the bundle pricing work?",
        a: "Add guides to your cart one at a time and the price updates automatically. 1 guide is R99, 2 is R149, 3 is R179, and the full bundle (every guide, plus AI Tutor access) is R199. It's a once-off payment, not a subscription.",
    },
    {
        q: "Can I preview a guide before buying?",
        a: 'Yes, every subject card has a "Preview guide" button showing real sample pages before you add it to your cart.',
    },
    {
        q: "What is the AI Tutor access that comes with the full bundle?",
        a: "It's included with the R199 full bundle, and gives you step-by-step help on any topic across your guides whenever you're stuck, not just the questions already in the guide.",
    },
    {
        q: "How do I get the guide after I pay?",
        a: "Your PDF is ready to download the moment payment goes through. Open it straight on your phone or laptop, no waiting and nothing posted to you.",
    },
    {
        q: "Is this for matric only?",
        a: "Yes, every guide is built specifically for Grade 12 students preparing for the November NSC exams.",
    },
    {
        q: "What payment methods do you accept?",
        a: "Checkout supports the usual card and instant EFT options you'd expect from a South African online store. [ ] confirm exact methods once checkout is live.",
    },
    {
        q: "Do I need data or internet to use the guide?",
        a: "You need data to download it once. After that, it's a PDF saved on your device, so you can study offline anytime without using more data.",
    },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Matrics = () => {
    const { cart, cartOpen, toggleCart } = useCart();
    const [previewOpenFor, setPreviewOpenFor] = useState<string | null>(null);
    const [heroSlide, setHeroSlide] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setHeroSlide((s) => (s + 1) % heroSlides.length), 3200);
        return () => clearInterval(id);
    }, []);

    const scrollToShop = () => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });

    const buyFullBundle = () => {
        REAL_GUIDE_IDS.forEach((id) => {
            if (!cart.includes(id)) toggleCart(id);
        });
        document.getElementById("pricing-tiers")?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const tier = tierForCount(cart.length);
    const singlePrice = tiers[0].price;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar rightSlot={<CartNavButton />} />

            <main className="flex-1">
                {/* Hero */}
                <section className="pt-10 pb-8 md:pt-14 md:pb-10">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-extrabold mb-5">
                                    <Clock className="w-4 h-4" /> {daysLeft} days to your November exam
                                </div>
                                <h1 className="text-[2.1rem] sm:text-4xl md:text-5xl leading-[1.15] mb-5">
                                    You don't need to study everything.<br />Just what's <span className="text-primary">examined</span>.
                                </h1>
                                <p className="text-lg md:text-xl text-foreground/80 mb-6 lg:max-w-md">
                                    Built from 5 years of real NSC past papers. Study only the topics that carry marks, not the whole syllabus.
                                </p>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-7">
                                    {heroFeats.map((f) => (
                                        <div key={f.title} className="flex items-center gap-2.5">
                                            {typeof f.icon === "string" ? (
                                                <span className="text-xl leading-none">{f.icon}</span>
                                            ) : (
                                                <img src={rubyLogo} alt="" className="w-6 h-6 rounded-full object-cover shrink-0" />
                                            )}
                                            <div className="text-left">
                                                <p className="text-xs font-extrabold leading-tight">{f.title}</p>
                                                <p className="text-[11px] text-muted-foreground font-semibold leading-tight">{f.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-3">
                                    <button
                                        type="button"
                                        onClick={scrollToShop}
                                        className="inline-flex items-center justify-center gap-2 text-base font-extrabold px-8 py-4 rounded-full text-cta-foreground transition-all shadow-md hover:opacity-90"
                                        style={ctaGradient}
                                    >
                                        <ShoppingCart className="w-5 h-5" /> Shop study guides, from R{singlePrice}
                                    </button>
                                    <span className="text-xs font-extrabold text-foreground/70">PDF guides · Instant delivery</span>
                                </div>
                            </div>

                            <div>
                                <div className="relative rounded-[20px] overflow-hidden border border-border shadow-lg bg-card">
                                    <div
                                        className="flex items-start transition-transform duration-500 ease-out"
                                        style={{ transform: `translateX(-${heroSlide * 100}%)` }}
                                    >
                                        {heroSlides.map((src, i) => (
                                            <img key={i} src={src} alt="" className={`w-full shrink-0 ${i === 0 ? "self-center" : ""}`} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1.5 mt-3">
                                    {heroSlides.map((_, i) => (
                                        <span
                                            key={i}
                                            className={`w-[7px] h-[7px] rounded-full transition-colors ${i === heroSlide ? "bg-primary" : "bg-border"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Proof strip */}
                <section className="pb-8 md:pb-10">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {trustBadges.map((b) => (
                                <div key={b.primary} className="flex flex-col items-center text-center gap-2">
                                    <div
                                        className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-lg"
                                        style={{ background: `hsl(${b.hue})`, boxShadow: `0 3px 0 hsl(${b.hue} / 0.4)` }}
                                    >
                                        {b.icon}
                                    </div>
                                    {b.secondary ? (
                                        <>
                                            <p className="text-lg font-extrabold leading-tight" style={{ color: `hsl(${b.hue})` }}>{b.primary}</p>
                                            <p className="text-[13.5px] font-bold text-foreground/90 -mt-1">{b.secondary}</p>
                                        </>
                                    ) : (
                                        <p className="text-[13.5px] font-bold text-foreground/90">{b.primary}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sound familiar? Here's the fix (merged problem + solution) */}
                <section className="py-14 md:py-16 bg-muted/60 border-y border-border">
                    <div className="container mx-auto px-4">
                        <div className="max-w-xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-3xl mb-2">😩 Sound familiar? Here's the <span className="text-primary">fix</span> 🎯</h2>
                            <p className="text-muted-foreground">This is why most students walk in underprepared, not because they didn't try.</p>
                        </div>
                        <div className="max-w-4xl mx-auto flex flex-col gap-3.5">
                            {fixPairs.map((pair) => (
                                <div key={pair.problemText} className="grid gap-2.5 md:grid-cols-2 md:gap-3.5 items-stretch">
                                    <div className="flex items-center gap-3.5 bg-white border border-border rounded-2xl px-5 py-4">
                                        <span className="text-2xl leading-none shrink-0">{pair.problemIcon}</span>
                                        <p className="text-[15px] font-semibold text-black leading-snug">{pair.problemText}</p>
                                    </div>
                                    <div
                                        className="flex items-center gap-3.5 rounded-2xl px-5 py-4"
                                        style={{ background: `hsl(${pair.hue})` }}
                                    >
                                        {typeof pair.fixIcon === "string" ? (
                                            <span className="text-2xl leading-none shrink-0">{pair.fixIcon}</span>
                                        ) : (
                                            <img
                                                src={rubyLogo}
                                                alt=""
                                                className="w-8 h-8 rounded-full object-cover shrink-0 ring-2 ring-white/80"
                                            />
                                        )}
                                        <p className="text-[15px] font-semibold text-white leading-snug">{pair.fixText}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <StudyGuideHowItWorks steps={hiwSteps} />
                <div className="pb-14 md:pb-20 -mt-10 md:-mt-14 text-center">
                    <button
                        type="button"
                        onClick={scrollToShop}
                        className="inline-flex items-center justify-center gap-2 text-base font-extrabold px-8 py-4 rounded-full text-cta-foreground transition-all shadow-md hover:opacity-90"
                        style={ctaGradient}
                    >
                        <ShoppingCart className="w-5 h-5" /> Shop study guides
                    </button>
                </div>

                {/* Trust Center: moving testimonial carousel */}
                <section className="py-14 md:py-20 bg-card overflow-hidden">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl mb-2">🏆 Trust Center</h2>
                            <p className="text-muted-foreground">What real students are saying.</p>
                        </div>
                    </div>
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={`${t.name}-${i}`} className="w-80 shrink-0 bg-white border-2 border-primary rounded-2xl p-5 mx-2">
                                <p className="text-sm text-black italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                                <p className="mt-2.5 text-sm font-extrabold text-black">{t.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SHOP */}
                <section id="shop" className="py-14 md:py-20 bg-blue-tint">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl mb-3">🛒 Pick your <span className="text-primary">study guides</span></h2>
                            <p className="text-lg text-muted-foreground">R{singlePrice} for one. Bundle up and every extra guide gets cheaper.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                            {guides.map((g) => {
                                const inCart = cart.includes(g.id);
                                const previewing = previewOpenFor === g.id;
                                const hasPreview = Boolean(g.preview && g.preview.length > 0);
                                return (
                                    <div
                                        key={g.id}
                                        className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden flex flex-col"
                                    >
                                        <Link to={`/matrics/guide/${g.id}`} className="relative block">
                                            {g.cover ? (
                                                <img
                                                    src={g.cover}
                                                    alt={`${g.name} study guide`}
                                                    loading="lazy"
                                                    className="w-full h-36 object-cover object-top"
                                                    style={{ background: `hsl(${g.accent} / 0.12)` }}
                                                />
                                            ) : (
                                                <div
                                                    className="w-full h-36 flex items-center justify-center"
                                                    style={{ background: `hsl(${g.accent} / 0.12)` }}
                                                >
                                                    <g.icon className="w-10 h-10" style={{ color: `hsl(${g.accent})` }} strokeWidth={1.5} />
                                                </div>
                                            )}
                                            <div
                                                className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3 py-1.5 text-white"
                                                style={{ background: `hsl(${g.accent} / 0.92)` }}
                                            >
                                                <g.icon className="w-3.5 h-3.5" />
                                                <span className="text-xs font-extrabold truncate">{g.name}</span>
                                            </div>
                                            <span className="absolute top-2 right-2 bg-card text-foreground text-xs font-extrabold px-2.5 py-1 rounded-full shadow-md">
                                                R{singlePrice}
                                            </span>
                                        </Link>
                                        <div className="p-4 flex flex-col flex-1">
                                            {hasPreview && (
                                                <button
                                                    type="button"
                                                    onClick={() => setPreviewOpenFor(previewing ? null : g.id)}
                                                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary mb-3 self-start"
                                                >
                                                    <Eye className="w-3.5 h-3.5" />
                                                    {previewing ? "Hide preview" : "Preview guide"}
                                                </button>
                                            )}

                                            <button
                                                type="button"
                                                onClick={() => toggleCart(g.id)}
                                                className={`w-full mt-auto inline-flex items-center justify-center gap-2 text-sm font-extrabold px-4 py-2.5 rounded-full transition-all ${inCart
                                                        ? "bg-primary/10 text-primary border-2 border-primary"
                                                        : "text-cta-foreground shadow-md hover:opacity-90"
                                                    }`}
                                                style={!inCart ? ctaGradient : undefined}
                                            >
                                                {inCart ? (
                                                    <>
                                                        <Check className="w-4 h-4" /> In cart
                                                    </>
                                                ) : (
                                                    <>
                                                        <ShoppingCart className="w-4 h-4" /> Add to cart
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        {previewing && g.preview && (
                                            <div className="border-t border-border p-3">
                                                <Carousel opts={{ align: "center" }} className="w-full">
                                                    <CarouselContent>
                                                        {g.preview.map((img) => (
                                                            <CarouselItem key={img.label}>
                                                                <div className="relative overflow-hidden rounded-xl border border-border">
                                                                    <img
                                                                        src={img.src}
                                                                        alt={img.label}
                                                                        loading="lazy"
                                                                        className={`w-full h-auto object-cover ${img.locked ? "blur-[3px]" : ""}`}
                                                                    />
                                                                    {img.locked && (
                                                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-background/40">
                                                                            <Lock className="w-5 h-5 text-primary" />
                                                                            <span className="text-[11px] font-extrabold bg-card/90 px-2 py-0.5 rounded-full">
                                                                                Unlocks with purchase
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </CarouselItem>
                                                        ))}
                                                    </CarouselContent>
                                                    <CarouselPrevious className="-left-3 h-7 w-7" />
                                                    <CarouselNext className="-right-3 h-7 w-7" />
                                                </Carousel>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {/* Bundle upsell card, always the last tile in the shop grid */}
                            <div className="rounded-2xl border-2 border-primary bg-card shadow-sm overflow-hidden flex flex-col items-center text-center p-5">
                                <img src={rubyLogo} alt="Ruby" className="w-16 h-16 rounded-full object-cover mb-3 mt-2" />
                                <h3 className="text-base font-extrabold mb-1">Get every guide</h3>
                                <p className="text-xs text-muted-foreground mb-3">All 4 study guides plus AI Tutor access, one price.</p>
                                <span className="inline-block bg-primary/10 text-primary text-sm font-extrabold px-3 py-1 rounded-full mb-4">
                                    R{tiers[3].price}
                                </span>
                                <button
                                    type="button"
                                    onClick={buyFullBundle}
                                    className="w-full mt-auto inline-flex items-center justify-center gap-2 text-sm font-extrabold px-4 py-2.5 rounded-full text-cta-foreground shadow-md hover:opacity-90 transition-all"
                                    style={ctaGradient}
                                >
                                    <ShoppingCart className="w-4 h-4" /> Get the full bundle
                                </button>
                            </div>
                        </div>

                        {/* Pricing tiers */}
                        <div id="pricing-tiers" className="rounded-[22px] bg-card border border-border shadow-md p-5 md:p-7">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold">💰 The more you add, the less you pay</h3>
                                <p className="text-sm text-muted-foreground mt-1">Your price updates automatically as you add guides to your cart above</p>
                                <p className="text-xs font-extrabold text-primary mt-2">🔒 Once-off payment, not a subscription</p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {tiers.map((t) => {
                                    const isBest = t.count === 4;
                                    const active = tier?.count === t.count;
                                    return (
                                        <div
                                            key={t.count}
                                            className={`relative rounded-2xl p-5 border-2 ${isBest
                                                    ? "text-white border-transparent"
                                                    : active
                                                        ? "border-primary bg-primary/[0.06]"
                                                        : "border-border bg-muted/50"
                                                }`}
                                            style={isBest ? ctaGradient : undefined}
                                        >
                                            {isBest && (
                                                <span className="absolute -top-3.5 -right-2.5 bg-[#FFC629] text-[#1a1a1a] text-[11px] font-extrabold px-2.5 py-1 rounded-full rotate-[8deg] shadow-md">
                                                    🔥 BEST VALUE
                                                </span>
                                            )}
                                            <p className={`text-sm font-bold mb-1 ${isBest ? "text-white/85" : "text-muted-foreground"}`}>{t.label}</p>
                                            <p className="text-2xl font-extrabold mb-1">R{t.price}</p>
                                            {t.bonus && <p className={`text-xs font-extrabold ${isBest ? "text-white" : "text-primary"}`}>{t.bonus}</p>}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-14 md:py-16 bg-muted/60">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl">❓ Questions before you buy</h2>
                        </div>
                        <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-2.5">
                            {faqs.map((f, i) => (
                                <AccordionItem
                                    key={f.q}
                                    value={`item-${i}`}
                                    className="bg-card border border-border rounded-xl px-5 border-b-0"
                                >
                                    <AccordionTrigger className="text-[15px] font-extrabold hover:no-underline py-4">
                                        {f.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[14.5px] leading-relaxed text-foreground/80">
                                        {f.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-14 md:py-20 text-center text-white" style={ctaGradient}>
                    <div className="container mx-auto px-4 max-w-2xl">
                        <h2 className="text-2xl md:text-3xl text-white mb-2">⏰ {daysLeft} days left. Start with the topics that count.</h2>
                        <p className="text-white/85 mb-6">Every guide is built the same way: five years of past papers, distilled into what's actually likely to be asked.</p>
                        <button
                            type="button"
                            onClick={scrollToShop}
                            className="inline-flex items-center justify-center gap-2 text-base font-extrabold px-8 py-4 rounded-full bg-white text-primary transition-all shadow-md hover:-translate-y-0.5"
                        >
                            <ShoppingCart className="w-5 h-5" /> Shop study guides
                        </button>
                    </div>
                </section>
            </main>

            {/* Page-specific footer, no links out to the rest of the site */}
            <footer className="bg-primary text-primary-foreground py-10">
                <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div>
                        <p className="text-xl font-bold mb-1">Ruby</p>
                        <p className="text-sm text-primary-foreground/80">2026 Matric Study Guides</p>
                    </div>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-extrabold underline underline-offset-4"
                    >
                        Questions? Chat to us on WhatsApp
                    </a>
                </div>
            </footer>

            {/* Floating WhatsApp / chat support, raised above the mobile cart bar when it's showing */}
            {!cartOpen && (
                <WhatsAppButton
                    href={WHATSAPP_URL}
                    positionClassName={cart.length > 0 ? "bottom-24 right-4 md:bottom-6 md:right-6" : "bottom-6 right-6"}
                />
            )}

            <StickyCartBar />
            <CartDrawer />
        </div>
    );
};

export default Matrics;
