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
    Hash,
    Atom,
    Languages,
    PieChart,
    Leaf,
    Map,
    Landmark,
    Calculator,
    Lock,
    Clock,
    ArrowRight,
    ShoppingCart,
    Eye,
    X,
    Check,
} from "lucide-react";
import preview5Skills from "@/assets/matrics-5skills.png";
import previewMistakes from "@/assets/matrics-mistakes.png";
import previewStudyPlan from "@/assets/matrics-prep-paper.png";
import scienceSkills from "@/assets/matrics-science-5skills.png";
import scienceMethods from "@/assets/matrics-science-methods.png";
import heroInside from "@/assets/matrics-hero-inside.png";
import heroHowTo from "@/assets/matrics-hero-howto.png";
import heroCommandWords from "@/assets/matrics-hero-commandwords.png";
import heroPastPaper from "@/assets/matrics-hero-pastpaper.png";
import charNova from "@/assets/character-nova.png";
import charSol from "@/assets/character-sol.png";
import charLex from "@/assets/character-lex.png";
import charTerra from "@/assets/character-terra.png";
import WhatsAppButton from "@/components/WhatsAppButton";

const WHATSAPP_URL = "https://wa.me/27652985458?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20study%20guides";

// Countdown to the (placeholder, unconfirmed) 2026 NSC exam start date — same
// target date and same "computed once on load" behaviour as the source design.
const EXAM_DATE = new Date("2026-10-21T00:00:00");
const daysLeft = Math.max(0, Math.ceil((EXAM_DATE.getTime() - Date.now()) / 86400000));

// ---------------------------------------------------------------------------
// Catalog — PLACEHOLDER product data.
// Only the first 4 have real PDFs/preview pages behind them today; the rest
// exist to prove the store scales past a fixed 4-item grid and should be
// replaced with the real, finalised guide list before launch.
// ---------------------------------------------------------------------------

type PreviewImage = { src: string; label: string; locked?: boolean };

type Guide = {
    id: string;
    name: string;
    icon: typeof PieChart;
    accent: string;
    pdf?: string;
    cover?: string;
    preview?: PreviewImage[];
    comingSoon?: boolean;
};

const guides: Guide[] = [
    {
        id: "math",
        name: "Mathematics",
        icon: PieChart,
        accent: "348 80% 40%",
        pdf: "/Ruby Maths 2 Study Guide 2026.pdf",
        cover: charNova,
        preview: [
            { src: preview5Skills, label: "5 Skills That Give You the Most Marks" },
            { src: previewMistakes, label: "Mistakes That Cost Students Marks" },
            { src: previewStudyPlan, label: "Your 2026 Prep Paper", locked: true },
        ],
    },
    {
        id: "science",
        name: "Physical Sciences",
        icon: Atom,
        accent: "226 60% 45%",
        pdf: "/Ruby Physical Science P1 Study Guide 2026.pdf",
        cover: charSol,
        preview: [
            { src: scienceSkills, label: "5 Skills That Give You the Most Marks" },
            { src: scienceMethods, label: "How to Solve Each Question Type" },
            { src: previewStudyPlan, label: "Your 2026 Prep Paper", locked: true },
        ],
    },
    {
        id: "english",
        name: "English Home Language",
        icon: Languages,
        accent: "351 75% 48%",
        pdf: "/Ruby English P1 Study Guide 2026_.pdf",
        cover: charLex,
        preview: [
            { src: preview5Skills, label: "5 Skills That Give You the Most Marks" },
            { src: previewMistakes, label: "Mistakes That Cost Students Marks" },
            { src: previewStudyPlan, label: "Your 2026 Prep Paper", locked: true },
        ],
    },
    {
        id: "mathslit",
        name: "Mathematical Literacy",
        icon: Hash,
        accent: "35 70% 42%",
        pdf: "/Ruby Maths Lit P1 Study Guide 2026.pdf",
        cover: charNova,
        preview: [
            { src: preview5Skills, label: "5 Skills That Give You the Most Marks" },
            { src: previewMistakes, label: "Mistakes That Cost Students Marks" },
            { src: previewStudyPlan, label: "Your 2026 Prep Paper", locked: true },
        ],
    },
    // Placeholder — coming soon, not yet purchasable
    { id: "lifesci", name: "Life Sciences", icon: Leaf, accent: "150 30% 40%", cover: charSol, comingSoon: true },
    { id: "geo", name: "Geography", icon: Map, accent: "200 45% 42%", cover: charTerra, comingSoon: true },
    { id: "history", name: "History", icon: Landmark, accent: "25 55% 40%", cover: charTerra, comingSoon: true },
    { id: "accounting", name: "Accounting", icon: Calculator, accent: "170 40% 35%", cover: charNova, comingSoon: true },
];

type Tier = { count: number; price: number; label: string; bonus?: string };

const tiers: Tier[] = [
    { count: 1, price: 99, label: "1 Study Guide" },
    { count: 2, price: 149, label: "2 Study Guides" },
    { count: 3, price: 189, label: "3 Study Guides" },
    { count: 4, price: 199, label: "Full Bundle", bonus: "+ AI Tutor Access" },
];

const tierForCount = (n: number): Tier | null => {
    if (n <= 0) return null;
    if (n >= 4) return tiers[3];
    return tiers[n - 1];
};

// Hero carousel slides — real screenshots of the guide content itself.
const heroSlides = [heroInside, heroHowTo, heroCommandWords, heroPastPaper];

const heroFeats = [
    { emoji: "📖", title: "CAPS Aligned", sub: "100% Curriculum" },
    { emoji: "🎯", title: "Exam Focused", sub: "Past papers & memos" },
    { emoji: "🤖", title: "AI Tutor", sub: "24/7 Homework help" },
];

const trustBadges = [
    { type: "icon" as const, icon: "📚", hue: "150 30% 40%", text: "Built from 5 years of real NSC past papers" },
    { type: "icon" as const, icon: "✅", hue: "226 60% 45%", text: "Marked exactly like the memo" },
    { type: "icon" as const, icon: "🌍", hue: "351 75% 48%", text: "Feedback in all 11 official languages" },
    { type: "stat" as const, num: "8,800+", hue: "35 70% 42%", text: "guides downloaded 📈" },
    { type: "stat" as const, num: "1,400+", hue: "348 80% 40%", text: "schools reached 🏫" },
];

type FixPair = { problemIcon: string; problemText: string; fixIcon: string; fixText: ReactNode; hue: string };

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
        fixText: <>A guide built only from the <strong>highest-mark topics</strong> — not the whole textbook.</>,
        hue: "226 60% 45%",
    },
    {
        problemIcon: "🤷",
        problemText: "You can see the memo's answer, but not how anyone was supposed to get there.",
        fixIcon: "🤖",
        fixText: <>An <strong>AI tutor that bridges the question and the answer</strong> — showing why a mark is earned.</>,
        hue: "351 75% 48%",
    },
    {
        problemIcon: "🌐",
        problemText: "Tutoring that only happens in English — even if it's not your home language.",
        fixIcon: "🗣️",
        fixText: <>AI feedback in <strong>all 11 official languages</strong>, not just English.</>,
        hue: "35 70% 42%",
    },
];

const hiwSteps = [
    { emoji: "🛒", num: 1, title: "Choose your subjects", text: "Pick the guides you need from the shop below." },
    { emoji: "📖", num: 2, title: "Study the guide", text: "Learn the highest-mark topics and methods." },
    { emoji: "📋", num: 3, title: "Write the prep paper", text: "Test yourself under real exam conditions." },
    { emoji: "🏆", num: 4, title: "Mark with the memo", text: "See exactly how each mark is earned." },
];

// What every guide contains, regardless of subject — same 6 components in every guide.
const guideContentHeadings = [
    "What the Paper Looks Like",
    "The Topics That Give the Most Marks",
    "Methods & Worked Examples",
    "Quick Recall",
    "Sit a Real Paper",
    "November 2026 Forecast",
];

/* PLACEHOLDER testimonials — replace quotes/names with real student feedback before launch */
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
        a: "A full PDF study guide, a 2026 prep paper, and a full memo with step-by-step marking explanations — delivered instantly.",
    },
    {
        q: "How does the bundle pricing work?",
        a: "Add guides to your cart one at a time — the price updates automatically. 1 guide is R99, 2 is R149, 3 is R189, and the full bundle (every guide, plus AI Tutor access) is R199. It's a once-off payment, not a subscription.",
    },
    {
        q: "Can I preview a guide before buying?",
        a: 'Yes — every subject card has a "Preview guide" button showing real sample pages before you add it to your cart.',
    },
    {
        q: "Can I get a refund?",
        a: "[Policy not yet confirmed — needs a business decision before this answer can go live, especially given SA digital-goods consumer rules.]",
        flagged: true,
    },
];

const ctaGradient = { background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" };

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Matrics = () => {
    const [cart, setCart] = useState<string[]>([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [previewOpenFor, setPreviewOpenFor] = useState<string | null>(null);
    const [checkoutStarted, setCheckoutStarted] = useState(false);
    const [heroSlide, setHeroSlide] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setHeroSlide((s) => (s + 1) % heroSlides.length), 3200);
        return () => clearInterval(id);
    }, []);

    const toggleCart = (id: string) => {
        setCheckoutStarted(false);
        setCart((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
    };

    const scrollToShop = () => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });

    const tier = tierForCount(cart.length);
    const singlePrice = tiers[0].price;
    const savings = tier && cart.length > 1 ? singlePrice * cart.length - tier.price : 0;
    const purchasable = guides.filter((g) => !g.comingSoon);
    const cartedGuides = guides.filter((g) => cart.includes(g.id));

    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* Store header — no site nav, nothing to click away to */}
            <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
                <div className="container mx-auto flex items-center justify-between py-3.5 px-4">
                    <span className="text-2xl font-bold tracking-tight text-primary">Ruby</span>
                    <button
                        type="button"
                        onClick={() => setCartOpen(true)}
                        className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:border-primary/40 transition-all"
                    >
                        <ShoppingCart className="w-5 h-5 text-primary" />
                        <span className="text-sm font-extrabold">
                            {cart.length > 0 ? `${cart.length} · R${tier?.price}` : "Cart"}
                        </span>
                        {cart.length > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[11px] font-extrabold flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </button>
                </div>
            </header>

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
                                            <span className="text-xl leading-none">{f.emoji}</span>
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
                                <div key={b.text} className="flex flex-col items-center text-center gap-2">
                                    {b.type === "icon" ? (
                                        <div
                                            className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-lg"
                                            style={{ background: `hsl(${b.hue})`, boxShadow: `0 3px 0 hsl(${b.hue} / 0.4)` }}
                                        >
                                            {b.icon}
                                        </div>
                                    ) : (
                                        <p className="text-2xl font-extrabold" style={{ color: `hsl(${b.hue})` }}>{b.num}</p>
                                    )}
                                    <p className="text-[13.5px] font-bold text-foreground/90">{b.text}</p>
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
                            <p className="text-muted-foreground">This is why most students walk in underprepared — not because they didn't try.</p>
                        </div>
                        <div className="max-w-4xl mx-auto flex flex-col gap-3.5">
                            {fixPairs.map((pair) => (
                                <div key={pair.problemText} className="grid gap-2.5 md:grid-cols-[1fr_28px_1fr] md:gap-3.5 items-stretch">
                                    <div className="flex items-center gap-3.5 bg-white border border-border rounded-2xl px-5 py-4">
                                        <span className="text-2xl leading-none shrink-0">{pair.problemIcon}</span>
                                        <p className="text-[15px] font-semibold text-black leading-snug">{pair.problemText}</p>
                                    </div>
                                    <div className="hidden md:flex items-center justify-center text-primary text-xl font-extrabold">→</div>
                                    <div
                                        className="flex items-center gap-3.5 rounded-2xl px-5 py-4"
                                        style={{ background: `hsl(${pair.hue})` }}
                                    >
                                        <span className="text-2xl leading-none shrink-0">{pair.fixIcon}</span>
                                        <p className="text-[15px] font-semibold text-white leading-snug">{pair.fixText}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-14 md:py-20 text-center" style={{ background: "#BE1832" }}>
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-2xl md:text-3xl text-white">How it works</h2>
                        <div className="grid md:grid-cols-4 gap-9 md:gap-6 mt-9">
                            {hiwSteps.map((s, i) => (
                                <div key={s.title} className="relative">
                                    {i < hiwSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-[34px] left-[calc(50%+40px)] right-[calc(-50%+40px)] border-t-2 border-dashed border-white/30" />
                                    )}
                                    <div className="relative w-[68px] h-[68px] rounded-full bg-white shadow-md flex items-center justify-center text-2xl mx-auto mb-3.5">
                                        {s.emoji}
                                        <span className="absolute -top-1 left-1/2 translate-x-[18px] w-[22px] h-[22px] rounded-full bg-white text-[#BE1832] text-[11px] font-extrabold flex items-center justify-center shadow-md">
                                            {s.num}
                                        </span>
                                    </div>
                                    <h4 className="text-[15.5px] font-bold mb-1 text-white">{s.title}</h4>
                                    <p className="text-[13px] text-white/80">{s.text}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={scrollToShop}
                            className="inline-flex items-center justify-center gap-2 text-base font-extrabold px-8 py-4 rounded-full bg-white text-[#BE1832] transition-all shadow-md hover:-translate-y-0.5 mt-10"
                        >
                            <ShoppingCart className="w-5 h-5" /> Shop study guides
                        </button>
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
                                return (
                                    <div
                                        key={g.id}
                                        className={`rounded-2xl border bg-card shadow-sm overflow-hidden flex flex-col ${g.comingSoon ? "border-border opacity-80" : "border-border"
                                            }`}
                                    >
                                        <div className="relative">
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
                                            {g.comingSoon ? (
                                                <span className="absolute top-2 right-2 bg-muted text-muted-foreground text-xs font-extrabold px-2.5 py-1 rounded-full shadow-md">
                                                    Coming soon
                                                </span>
                                            ) : (
                                                <span className="absolute top-2 right-2 bg-card text-foreground text-xs font-extrabold px-2.5 py-1 rounded-full shadow-md">
                                                    R{singlePrice}
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-4 flex flex-col flex-1">
                                            <h3 className="text-base mb-3">{g.name} Study Guide</h3>

                                            {!g.comingSoon && (
                                                <ul className="flex flex-col gap-1 mb-3.5">
                                                    {guideContentHeadings.map((h) => (
                                                        <li key={h} className="flex items-start gap-1.5">
                                                            <Check className="w-3 h-3 text-primary shrink-0 mt-[3px]" />
                                                            <span className="text-[10.5px] text-muted-foreground leading-snug">{h}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <button
                                                type="button"
                                                disabled={g.comingSoon}
                                                onClick={() => setPreviewOpenFor(previewing ? null : g.id)}
                                                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary mb-3 self-start disabled:text-muted-foreground disabled:cursor-not-allowed"
                                            >
                                                <Eye className="w-3.5 h-3.5" />
                                                {g.comingSoon ? "Preview coming soon" : previewing ? "Hide preview" : "Preview guide"}
                                            </button>

                                            <button
                                                type="button"
                                                disabled={g.comingSoon}
                                                onClick={() => toggleCart(g.id)}
                                                className={`w-full inline-flex items-center justify-center gap-2 text-sm font-extrabold px-4 py-2.5 rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed ${inCart
                                                        ? "bg-primary/10 text-primary border-2 border-primary"
                                                        : g.comingSoon
                                                            ? "bg-muted text-muted-foreground"
                                                            : "text-cta-foreground shadow-md hover:opacity-90"
                                                    }`}
                                                style={
                                                    !inCart && !g.comingSoon
                                                        ? ctaGradient
                                                        : undefined
                                                }
                                            >
                                                {g.comingSoon ? (
                                                    "Notify me"
                                                ) : inCart ? (
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
                        </div>

                        {/* Pricing tiers */}
                        <div className="rounded-[22px] bg-card border border-border shadow-md p-5 md:p-7">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold">💰 The more you add, the less you pay</h3>
                                <p className="text-sm text-muted-foreground mt-1">Your price updates automatically as you add guides to your cart above</p>
                                <p className="text-xs font-extrabold text-primary mt-2">🔒 Once-off payment — not a subscription</p>
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

                {/* Trust — student quotes */}
                <section className="py-14 md:py-20 bg-card">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-4">
                            {testimonials.map((t) => (
                                <div key={t.name} className="bg-primary rounded-2xl p-5">
                                    <p className="text-sm text-white italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                                    <p className="mt-2.5 text-sm font-extrabold text-white">{t.name}</p>
                                </div>
                            ))}
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
                                    <AccordionContent
                                        className={`text-[14.5px] leading-relaxed ${f.flagged ? "text-coral font-semibold" : "text-foreground/80"}`}
                                    >
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
                        <p className="text-white/85 mb-6">Every guide is built the same way — five years of past papers, distilled into what's actually likely to be asked.</p>
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

            {/* Page-specific footer — no links out to the rest of the site */}
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

            {/* Floating WhatsApp / chat support — raised above the mobile cart bar when it's showing */}
            {!cartOpen && (
                <WhatsAppButton
                    href={WHATSAPP_URL}
                    positionClassName={cart.length > 0 ? "bottom-24 right-4 md:bottom-6 md:right-6" : "bottom-6 right-6"}
                />
            )}

            {/* Sticky mobile cart bar */}
            {cart.length > 0 && !cartOpen && (
                <button
                    type="button"
                    onClick={() => setCartOpen(true)}
                    className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex items-center justify-between gap-3 px-5 py-4 rounded-2xl text-cta-foreground shadow-lg"
                    style={ctaGradient}
                >
                    <span className="text-sm font-extrabold">{cart.length} guide{cart.length > 1 ? "s" : ""} · R{tier?.price}</span>
                    <span className="text-sm font-extrabold inline-flex items-center gap-1">Checkout <ArrowRight className="w-4 h-4" /></span>
                </button>
            )}

            {/* Cart drawer */}
            {cartOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setCartOpen(false)} />
                    <div className="relative w-full sm:w-[420px] h-full bg-card shadow-2xl flex flex-col animate-fade-up">
                        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                            <h3 className="text-lg font-extrabold">Your cart</h3>
                            <button type="button" onClick={() => setCartOpen(false)} aria-label="Close cart">
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-5">
                            {cartedGuides.length === 0 ? (
                                <div>
                                    <p className="text-sm text-muted-foreground mb-4">Your cart is empty. Add a study guide to get started.</p>
                                    <div className="flex flex-wrap gap-2">
                                        {purchasable.map((g) => (
                                            <span key={g.id} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                                                {g.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <ul className="space-y-3">
                                    {cartedGuides.map((g) => (
                                        <li key={g.id} className="flex items-center gap-3">
                                            {g.cover ? (
                                                <img src={g.cover} alt="" className="w-12 h-12 rounded-lg object-cover border border-border" />
                                            ) : (
                                                <div className="w-12 h-12 rounded-lg border border-border flex items-center justify-center" style={{ background: `hsl(${g.accent} / 0.12)` }}>
                                                    <g.icon className="w-5 h-5" style={{ color: `hsl(${g.accent})` }} />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <p className="text-sm font-extrabold">{g.name}</p>
                                                <p className="text-xs text-muted-foreground">Study guide + prep paper + memo</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => toggleCart(g.id)}
                                                className="text-xs font-extrabold text-muted-foreground hover:text-primary"
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {cartedGuides.length > 0 && (
                            <div className="border-t border-border px-6 py-5">
                                {tier?.bonus && <p className="text-sm font-extrabold text-primary mb-2">{tier.bonus}</p>}
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm text-muted-foreground">{tier?.label}</span>
                                    <span className="text-2xl font-extrabold">R{tier?.price}</span>
                                </div>
                                {savings > 0 && (
                                    <p className="text-xs text-primary font-semibold mb-4">You save R{savings} vs buying separately</p>
                                )}
                                {savings === 0 && <div className="mb-4" />}
                                <button
                                    type="button"
                                    onClick={() => setCheckoutStarted(true)}
                                    className="w-full inline-flex items-center justify-center gap-2 text-base font-extrabold px-6 py-3.5 rounded-full text-cta-foreground shadow-md hover:opacity-90 transition-all"
                                    style={ctaGradient}
                                >
                                    Checkout <ArrowRight className="w-4 h-4" />
                                </button>
                                <p className="text-center text-[11px] text-muted-foreground font-semibold pt-2.5">
                                    🔒 Once-off payment — not a subscription
                                </p>
                                {checkoutStarted && (
                                    <p className="text-center text-xs text-muted-foreground pt-3">
                                        Checkout isn't connected yet — this is a design preview.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Matrics;
