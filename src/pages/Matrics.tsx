import { useState } from "react";
import Layout from "@/components/Layout";
import { CheckCircle, Sparkles, FileText, ClipboardCheck, BookOpen, Download, Calculator, Atom, Languages, MessageSquare, Zap, Target, TrendingUp } from "lucide-react";

const subjects = [
  { id: "math", name: "Mathematics", icon: Calculator },
  { id: "science", name: "Physical Science", icon: Atom },
  { id: "english", name: "English", icon: Languages },
];

const packCards = [
  {
    title: "Study Guide",
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
    icon: ClipboardCheck,
    items: [
      "Exam-style questions",
      "Based on recurring patterns",
      "Simulates real June exam",
    ],
  },
  {
    title: "Memo (Answers)",
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

  const toggleSubject = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.school && form.email) {
      setSubmitted(true);
      setTimeout(() => {
        document.getElementById("download-section")?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
          <p className="text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Get the exact topics, question types, and patterns that show up every year.
          </p>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Free 2026 Study Pack built from real past papers. Focus on what actually gets marks.
          </p>
          <button
            onClick={() => scrollTo("subjects")}
            className="inline-flex items-center justify-center text-lg font-extrabold px-8 py-4 rounded-full text-cta-foreground transition-all shadow-md hover:opacity-90 animate-fade-up"
            style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))", animationDelay: "0.2s" }}
          >
            Get Free Study Pack
          </button>
        </div>
      </section>

      {/* What this pack does */}
      <section className="py-8 md:py-16 bg-blue-tint">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Most students study everything.
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold text-primary mb-10">
            Top students study what repeats.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">This pack shows you:</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "What Paper 1 actually looks like",
              "The 5 skills that give you the most marks",
              "The question types that come up every year",
              "The mistakes that cost students marks",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl mb-4">
              What <span className="text-primary">you'll get</span>
            </h2>
            <p className="text-lg text-muted-foreground">Three resources. One focused goal: more marks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl mb-4">{card.title}</h3>
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
          </div>
        </div>
      </section>

      {/* Subject Selection */}
      <section id="subjects" className="py-12 md:py-20 bg-blue-tint">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-3">
              Choose your <span className="text-primary">subjects</span>
            </h2>
            <p className="text-lg text-muted-foreground">Pick one, two, or all three.</p>
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
                      ? "border-primary bg-primary/5 shadow-lg"
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
              selected.length > 0 ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-md max-w-2xl mx-auto animate-fade-up">
              <h3 className="text-2xl mb-2 text-center">Almost there</h3>
              <p className="text-muted-foreground text-center mb-6">
                Tell us where to send your study pack.
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
                  className="w-full inline-flex items-center justify-center gap-2 text-lg font-extrabold px-6 py-4 rounded-full text-cta-foreground transition-all shadow-md hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
                >
                  <Sparkles className="w-5 h-5" /> Unlock My Study Pack
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download-section" className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Your <span className="text-primary">Study Pack</span>
          </h2>
          {submitted ? (
            <p className="text-lg text-muted-foreground mb-8">
              Thanks {form.name.split(" ")[0]}! Your pack for{" "}
              <span className="font-extrabold text-foreground">
                {selected.map((id) => subjects.find((s) => s.id === id)?.name).join(", ")}
              </span>{" "}
              is ready.
            </p>
          ) : (
            <p className="text-lg text-muted-foreground mb-8">
              Select your subjects and complete the form above to unlock your download.
            </p>
          )}
          <button
            disabled={!submitted}
            onClick={() => alert("Download starting...")}
            className={`inline-flex items-center justify-center gap-2 text-lg font-extrabold px-8 py-4 rounded-full transition-all ${
              submitted
                ? "text-cta-foreground shadow-md hover:opacity-90 cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
            style={
              submitted
                ? { background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }
                : undefined
            }
          >
            <Download className="w-5 h-5" /> Download Study Pack
          </button>
        </div>
      </section>

      {/* Conversion */}
      <section className="py-12 md:py-20 bg-blue-tint">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-3xl p-8 md:p-14 border border-border shadow-md text-center">
            <h2 className="text-3xl md:text-4xl mb-4">
              Want more than just <span className="text-primary">PDFs?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              This free pack shows you what to study.
            </p>
            <p className="text-lg text-foreground mb-10">
              The full version helps you improve faster with AI.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
              {upgradeBenefits.map((b) => (
                <div key={b.text} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <span className="text-foreground pt-1.5">{b.text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://ai-tutor-olive-zeta.vercel.app/"
              className="inline-flex items-center justify-center gap-2 text-lg font-extrabold px-8 py-4 rounded-full text-cta-foreground transition-all shadow-md hover:opacity-90"
              style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
            >
              <Sparkles className="w-5 h-5" /> Upgrade to AI Study Pack
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Matrics;
