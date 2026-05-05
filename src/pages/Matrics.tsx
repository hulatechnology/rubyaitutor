import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import {
    CheckCircle,
    Sparkles,
    FileText,
    ClipboardCheck,
    BookOpen,
    Download,
    Hash,
    Atom,
    Languages,
    PieChart,
    MessageSquare,
    Zap,
    Target,
    TrendingUp,

} from "lucide-react";
import preview5Skills from "@/assets/matrics-5skills.png";
import previewMistakes from "@/assets/matrics-mistakes.png";
import previewStudyPlan from "@/assets/matrics-prep-paper.png";
import scienceSkills from "@/assets/matrics-science-5skills.png";
import scienceMethods from "@/assets/matrics-science-methods.png";

const heroCarouselImages = [
    { src: preview5Skills, label: "5 Skills That Give You the Most Marks" },
    { src: previewMistakes, label: "Mistakes That Cost Students Marks" },
    { src: scienceSkills, label: "Physical Science: 5 High-Mark Skills" },
    { src: scienceMethods, label: "How to Solve Each Question Type" },
    { src: previewStudyPlan, label: "Your 2026 Prep Paper" },
];

const subjects = [
    { id: "math", name: "Maths", icon: PieChart, pdf: "/Ruby Maths 2 Study Guide 2026.pdf" },
    { id: "science", name: "Physical Science", icon: Atom, pdf: "/Ruby Physical Science P1 Study Guide 2026.pdf" },
    { id: "english", name: "English", icon: Languages, pdf: "/Ruby English P1 Study Guide 2026_.pdf" },
    { id: "mathslit", name: "Maths Literacy", icon: PieChart, pdf: "/Ruby Maths Lit P1 Study Guide 2026.pdf" },
];

const defaultPreviewImages = [
    { src: preview5Skills, label: "5 Skills That Give You the Most Marks" },
    { src: previewMistakes, label: "Mistakes That Cost Students Marks" },
    { src: previewStudyPlan, label: "Your 2026 Prep Paper 📝", locked: true },
];

const previewImagesBySubject: Record<string, typeof defaultPreviewImages> = {
    math: defaultPreviewImages,
    english: defaultPreviewImages,
    science: [
        { src: scienceSkills, label: "5 Skills That Give You the Most Marks" },
        { src: scienceMethods, label: "How to Solve Each Question Type" },
        { src: previewStudyPlan, label: "Your 2026 Prep Paper 📝", locked: true },
    ],
};

const previewTabs = [
    { id: "math", name: "Mathematics" },
    { id: "science", name: "Physical Science" },
    { id: "english", name: "English" },
];


const packCards = [
    {
        title: "Study Guide",
        tagline: "Know exactly what to focus on",
        icon: FileText,
        items: [
            "Paper structure (Sections A, B, C)",
            "Timing strategy",
            "5 high-mark skills",
            "Step-by-step answering methods",
            "14-day study plan",
        ],
    },
    {
        title: "2026 Prep Papers",
        tagline: "Practice what's most likely to come up",
        icon: ClipboardCheck,
        items: [
            "Exam-style questions",
            "Based on recurring patterns",
            "Simulates real June exam",
        ],
    },
    {
        title: "Memo (Answers)",
        tagline: "See how to get full marks",
        icon: BookOpen,
        items: [
            "Full worked solutions",
            "Step-by-step explanations",
            "Shows how marks are awarded",
        ],
    },
];

const upgradeBenefits = [
    { icon: MessageSquare, text: "Ask questions like you're texting a tutor" },
    { icon: Zap, text: "Get instant explanations" },
    { icon: Target, text: "Practice with feedback" },
    { icon: TrendingUp, text: "Improve weak areas faster" },
];

const Matrics = () => {
    const [selected, setSelected] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", school: "", email: "" });
    const [activeTab, setActiveTab] = useState("english");
    const [heroApi, setHeroApi] = useState<CarouselApi | null>(null);

    useEffect(() => {
        if (!heroApi) return;
        const id = setInterval(() => {
            heroApi.scrollNext();
        }, 3500);
        return () => clearInterval(id);
    }, [heroApi]);

    const toggleSubject = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
        );
    };

    const scrollToSubjects = () => {
        document.getElementById("subjects")?.scrollIntoView({ behavior: "smooth" });
    };

    const formComplete = !!(form.name && form.school && form.email);

    const triggerDownload = async (url: string, filename: string) => {
        // iOS Safari ignores the download attribute — open in new tab so the
        // user can save from the browser's share sheet.
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as Window & { MSStream?: unknown }).MSStream;
        if (isIOS) {
            window.open(url, "_blank");
            return;
        }
        // For all other browsers fetch as blob so the download attribute is
        // honoured on mobile Chrome / Android WebView.
        try {
            const res = await fetch(url);
            const blob = await res.blob();
            const objectUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = objectUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(objectUrl);
        } catch {
            window.open(url, "_blank");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formComplete) return;
        setSubmitted(true);

        const { error } = await supabase.from("matric_leads").insert({
            name: form.name,
            school: form.school,
            email: form.email,
            subjects: selected,
        });

        if (error) {
            console.error("[matric_leads] insert failed:", error.message, error);
        }

        const pdfs = subjects.filter((s) => selected.includes(s.id));
        pdfs.forEach((s, i) => {
            setTimeout(() => {
                void triggerDownload(s.pdf, `Ruby-Study-Pack-${s.name.replace(/\s+/g, "-")}.pdf`);
            }, i * 600);
        });
    };

    const stepActive = (n: number) => {
        if (n === 1) return selected.length > 0;
        if (n === 2) return formComplete;
        if (n === 3) return submitted;
        return false;
    };

    return (
        <Layout>
            {/* Hero */}
            <section className="pt-8 pb-4 md:pt-12 md:pb-6">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                        {/* Left: copy */}
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-extrabold mb-5 animate-fade-up">
                                <Sparkles className="w-4 h-4" /> Free 2026 Study Pack
                            </div>
                            <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] mb-5 animate-fade-up">
                                Stop guessing what's in your <span className="text-primary">June exam.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-foreground/80 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                                Most students lose marks on patterns they never noticed.
                            </p>
                        </div>

                        {/* Right: image carousel */}
                        <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
                            <Carousel
                                opts={{ loop: true, align: "center" }}
                                setApi={setHeroApi}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {heroCarouselImages.map((img) => (
                                        <CarouselItem key={img.label}>
                                            <div className="overflow-hidden rounded-2xl border border-border shadow-md bg-card">
                                                <img
                                                    src={img.src}
                                                    alt={img.label}
                                                    loading="lazy"
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* What you'll get - moved up below hero */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="text-3xl md:text-4xl mb-4">
                            What <span className="text-primary">you'll get</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">Free resources plus an AI version to go further.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {packCards.map((card) => (
                            <div
                                key={card.title}
                                className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                                    <card.icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                                </div>
                                <h3 className="text-xl mb-1">{card.title}</h3>
                                <p className="text-base font-extrabold text-primary mb-4">{card.tagline}</p>
                                <ul className="space-y-2.5">
                                    {card.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-muted-foreground">
                                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                                            <span className="text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* AI Version card */}
                        <div className="rounded-2xl p-7 border-2 border-primary bg-primary/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                                <Sparkles className="w-6 h-6" strokeWidth={1.8} />
                            </div>
                            <h3 className="text-xl mb-1">AI Version</h3>
                            <p className="text-base font-extrabold text-primary mb-4">Improve faster with AI</p>
                            <ul className="space-y-2.5 mb-6">
                                {upgradeBenefits.map((b) => (
                                    <li key={b.text} className="flex items-start gap-2 text-foreground">
                                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                                        <span className="text-base">{b.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://ai-tutor-olive-zeta.vercel.app/"
                                className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-extrabold px-5 py-3 rounded-full text-cta-foreground transition-all shadow-md hover:opacity-90"
                                style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
                            >
                                <Sparkles className="w-4 h-4" /> Try it here
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            {/* Subject Selection + Form */}
            <section id="subjects" className="py-12 md:py-20 bg-blue-tint">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-8">
                        <button
                            type="button"
                            onClick={() => document.getElementById("subject-picker")?.scrollIntoView({ behavior: "smooth" })}
                            className="inline-flex items-center justify-center gap-2 text-base font-extrabold px-7 py-3.5 rounded-full text-cta-foreground transition-all shadow-md hover:opacity-90"
                            style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
                        >
                            <Download className="w-5 h-5" /> Download your study pack
                        </button>
                    </div>

                    {/* Step indicator */}
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
                        {[
                            { n: 1, label: "Choose subjects" },
                            { n: 2, label: "Enter details" },
                            { n: 3, label: "Go!" },
                        ].map((step, idx) => {
                            const active = stepActive(step.n);
                            return (
                                <div key={step.n} className="flex items-center gap-2 sm:gap-4">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold transition-all ${active
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-card border border-border text-muted-foreground"
                                                }`}
                                        >
                                            {active ? <CheckCircle className="w-4 h-4" /> : step.n}
                                        </div>
                                        <span
                                            className={`text-sm font-extrabold transition-colors ${active ? "text-foreground" : "text-muted-foreground"
                                                }`}
                                        >
                                            {step.label}
                                        </span>
                                    </div>
                                    {idx < 2 && (
                                        <div className="hidden sm:block w-8 h-px bg-border" />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Subject picker - simple checkboxes, no cards */}
                    <div id="subject-picker" className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-md mb-6">
                        <h3 className="text-xl mb-1 text-center">Select your subjects</h3>
                        <p className="text-sm text-muted-foreground text-center mb-5">Pick what you're writing in June</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {subjects.map((s) => {
                                const isSel = selected.includes(s.id);
                                return (
                                    <label
                                        key={s.id}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${isSel
                                                ? "border-primary bg-primary/10"
                                                : "border-border bg-background hover:border-primary/40"
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isSel}
                                            onChange={() => toggleSubject(s.id)}
                                            className="w-4 h-4 accent-primary"
                                        />
                                        <s.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.8} />
                                        <span className="text-base font-extrabold">{s.name}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* Progressive Form */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${selected.length > 0 ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-md max-w-2xl mx-auto animate-fade-up">
                            <h3 className="text-2xl mb-2 text-center">
                                Almost there. Where should we send your study pack?
                            </h3>
                            <p className="text-muted-foreground text-center mb-6">
                                Fill in your details below to unlock your free download.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-extrabold mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="e.g. Thandi Nkosi"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-extrabold mb-1.5">School</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.school}
                                        onChange={(e) => setForm({ ...form, school: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Your school name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-extrabold mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={!formComplete}
                                    className={`w-full inline-flex items-center justify-center gap-2 text-lg font-extrabold px-6 py-4 rounded-full transition-all shadow-md ${formComplete
                                            ? "text-cta-foreground hover:opacity-90 cursor-pointer"
                                            : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                                        }`}
                                    style={
                                        formComplete
                                            ? { background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }
                                            : undefined
                                    }
                                >
                                    Go!
                                </button>
                                {submitted && (
                                    <p className="text-center text-sm text-muted-foreground pt-2">
                                        Thanks {form.name.split(" ")[0]}! Your download has started.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default Matrics;
