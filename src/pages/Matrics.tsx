import { useState } from "react";
import Layout from "@/components/Layout";
import {
  CheckCircle,
  Sparkles,
  FileText,
  ClipboardCheck,
  BookOpen,
  Download,
  Calculator,
  Atom,
  Languages,
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

const subjects = [
  { id: "math", name: "Mathematics", icon: Calculator },
  { id: "science", name: "Physical Science", icon: Atom },
  { id: "english", name: "English", icon: Languages },
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

  const toggleSubject = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const scrollToSubjects = () => {
    document.getElementById("subjects")?.scrollIntoView({ behavior: "smooth" });
  };

  const formComplete = !!(form.name && form.school && form.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formComplete) {
      setSubmitted(true);
      alert("Download starting...");
    }
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-extrabold mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" /> Free 2026 Study Pack
          </div>
          <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] mb-5 animate-fade-up">
            Stop guessing what's in your <span className="text-primary">June exam.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Most students lose marks on patterns they never noticed.
          </p>
        </div>
      </section>

      {/* Visual Preview Section - Tabbed */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-[1600px]">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl mb-3">
              Preview your <span className="text-primary">subject</span>
            </h2>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Subject preview tabs"
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-1 mb-8 sm:mb-10 sm:bg-card sm:border sm:border-border sm:rounded-full sm:p-1.5 sm:max-w-xl sm:mx-auto"
          >
            {previewTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-5 py-2.5 rounded-full text-sm md:text-base font-extrabold transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card sm:bg-transparent border border-border sm:border-0 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Preview images */}
          <div key={activeTab} className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 grid-flow-col md:grid-flow-row auto-cols-[85%] md:auto-cols-auto">
              {(previewImagesBySubject[activeTab] ?? defaultPreviewImages).map((img) => (
                <div
                  key={img.label}
                  className="group relative overflow-hidden rounded-2xl border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card snap-center"
                >
                  <div className="overflow-hidden relative">
                    <img
                      src={img.src}
                      alt={img.label}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {img.locked && (
                      <>
                        <div className="absolute inset-0 backdrop-blur-[4px] bg-gradient-to-t from-background/85 via-background/30 to-background/10" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-4 text-center">
                          <p className="text-foreground text-base md:text-lg font-extrabold mb-3">
                            Unlock the full study pack
                          </p>
                          <button
                            type="button"
                            onClick={scrollToSubjects}
                            className="inline-flex items-center gap-2 text-sm font-extrabold px-5 py-2.5 rounded-full text-cta-foreground hover:opacity-90 transition-opacity shadow-md"
                            style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
                          >
                            Get Free Study Pack
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  {img.locked && (
                    <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 border border-border">
                      <p className="text-foreground text-xs font-extrabold">
                        {img.label}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Full study pack available after you select your subjects
          </p>
        </div>
      </section>

      {/* What you'll get */}
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
                <Sparkles className="w-4 h-4" /> Improve My Marks with AI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Selection */}
      <section id="subjects" className="py-12 md:py-20 bg-blue-tint">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl mb-3">
              Choose your <span className="text-primary">subjects</span>
            </h2>
            <p className="text-lg text-muted-foreground">Pick what you're writing in June</p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
            {[
              { n: 1, label: "Choose subjects" },
              { n: 2, label: "Enter details" },
              { n: 3, label: "Download" },
            ].map((step, idx) => {
              const active = stepActive(step.n);
              return (
                <div key={step.n} className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold transition-all ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border text-muted-foreground"
                      }`}
                    >
                      {active ? <CheckCircle className="w-4 h-4" /> : step.n}
                    </div>
                    <span
                      className={`text-sm font-extrabold transition-colors ${
                        active ? "text-foreground" : "text-muted-foreground"
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

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {subjects.map((s) => {
              const isSel = selected.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggleSubject(s.id)}
                  className={`group rounded-2xl p-7 border-2 text-left transition-all duration-300 hover:-translate-y-1 ${
                    isSel
                      ? "border-primary bg-primary/10 shadow-lg ring-2 ring-primary/30"
                      : "border-border bg-card hover:border-primary/40 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSel ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}>
                      <s.icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSel ? "border-primary bg-primary" : "border-border"
                    }`}>
                      {isSel && <CheckCircle className="w-5 h-5 text-primary-foreground" />}
                    </div>
                  </div>
                  <h3 className="text-xl">{s.name}</h3>
                </button>
              );
            })}
          </div>

          {/* Progressive Form */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              selected.length > 0 ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
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

                {formComplete && !submitted && (
                  <p className="text-center text-sm font-extrabold text-primary pt-1 animate-fade-up">
                    Your study pack is ready
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!formComplete}
                  className={`w-full inline-flex items-center justify-center gap-2 text-lg font-extrabold px-6 py-4 rounded-full transition-all shadow-md ${
                    formComplete
                      ? "text-cta-foreground hover:opacity-90 cursor-pointer"
                      : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                  }`}
                  style={
                    formComplete
                      ? { background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }
                      : undefined
                  }
                >
                  <Download className="w-5 h-5" />
                  {formComplete ? "Download Now" : "Unlock My Study Pack"}
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
