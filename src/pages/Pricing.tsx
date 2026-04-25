import Layout from "@/components/Layout";
import { Check } from "lucide-react";
import { useState } from "react";

const whyReasons = [
  "Most tutoring costs R800 – R2000 per month",
  "Parents often cannot see why their child is struggling",
  "Ruby identifies the exact concept your child missed",
  "Your child receives step by step guidance instead of answers",
];

type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  oldPrice?: string;
  badge?: { label: string; tone: "primary" | "accent" };
  offer?: string;
  features: { text: string; sub?: string }[];
  cta: string;
  ctaTone: "muted" | "primary" | "accent";
  borderTone: "default" | "primary" | "accent";
};

const plans: Plan[] = [
  {
    id: "freebie",
    name: "Freebie",
    tagline: "Try it out — no card needed",
    price: "Free",
    features: [
      { text: "CAPS Aligned curriculum" },
      { text: "1× Discovery Activity", sub: "(Maths or Reading)" },
      { text: "1× Discovery Report" },
      { text: "5 Personalised Skills Worksheets" },
      { text: "5 AI Homework Questions per day" },
      { text: "5 hints per day" },
      { text: "Home Language Feedback" },
      { text: "5 Audio Playbacks per day" },
    ],
    cta: "Get Started",
    ctaTone: "muted",
    borderTone: "default",
  },
  {
    id: "scholar",
    name: "Scholar",
    tagline: "Grade 1 – 11",
    price: "R99",
    priceSuffix: "/mo",
    oldPrice: "R149",
    badge: { label: "Most Popular", tone: "primary" },
    offer: "Launch Offer — Save R50/mo",
    features: [
      { text: "CAPS Aligned curriculum" },
      { text: "2× Discovery Activities", sub: "(Maths & Reading)" },
      { text: "2× Discovery Reports" },
      { text: "Full Personalised Skills Worksheets" },
      { text: "Unlimited AI Homework Assist" },
      { text: "Unlimited hints" },
      { text: "Home Language Feedback" },
      { text: "Unlimited Audio Playback" },
    ],
    cta: "Go Premium",
    ctaTone: "primary",
    borderTone: "primary",
  },
  {
    id: "master",
    name: "Master",
    tagline: "Grade 12",
    price: "R129",
    priceSuffix: "/mo",
    oldPrice: "R199",
    badge: { label: "Grade 12 Edition", tone: "accent" },
    offer: "Launch Offer — Save R70/mo",
    features: [
      { text: "Everything in Scholar" },
      { text: "50+ Matric Past Papers", sub: "(Practice & Guide Mode)" },
      { text: "9 Matric Study Guides", sub: "(Major Subjects)" },
      { text: "10+ Matric 2026 Prep Papers", sub: "(Major Subjects)" },
    ],
    cta: "Access Everything",
    ctaTone: "accent",
    borderTone: "accent",
  },
];

const Pricing = () => {
  const [voucher, setVoucher] = useState("");

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl mb-6">
            Parents spend over <span className="text-primary">R1000 per month on tutoring.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            Most tutoring focuses on repeating homework or memorising answers. Ruby identifies the exact learning gap and guides your child step by step so they truly understand the work.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium mb-6">
            Support that costs less and helps your child learn more effectively is coming soon.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            On average, South African parents spend R1000+ per month on tutoring. Ruby is being built to provide personalised learning support at a fraction of that cost.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          {/* Why families are joining */}
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl text-center mb-8">Why families are joining Ruby</h2>
            <ul className="space-y-3 max-w-lg mx-auto">
              {whyReasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan selection header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-xs md:text-sm font-extrabold tracking-wider text-primary mb-3">
              CAPS ALIGNED · SOUTH AFRICAN CURRICULUM
            </p>
            <h2 className="text-3xl md:text-4xl mb-3">Choose your learning plan</h2>
            <p className="text-base text-muted-foreground">
              Personalised tutoring that adapts to your child's pace — in any SA home language.
            </p>

            {/* Voucher */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col sm:flex-row items-stretch justify-center gap-2 max-w-md mx-auto"
            >
              <input
                type="text"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                placeholder="Have a voucher code?"
                className="flex-1 px-4 py-2.5 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                disabled={!voucher.trim()}
                className={`px-6 py-2.5 rounded-full text-sm font-extrabold transition-colors ${
                  voucher.trim()
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                Apply
              </button>
            </form>
          </div>

          {/* Plan cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {plans.map((plan) => {
              const borderClass =
                plan.borderTone === "primary"
                  ? "border-primary"
                  : plan.borderTone === "accent"
                  ? "border-amber-400"
                  : "border-border";

              const ctaClass =
                plan.ctaTone === "primary"
                  ? "text-primary-foreground hover:opacity-90"
                  : plan.ctaTone === "accent"
                  ? "bg-amber-400 text-foreground hover:opacity-90"
                  : "bg-foreground text-background hover:opacity-90";

              const ctaStyle =
                plan.ctaTone === "primary"
                  ? { background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }
                  : undefined;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl border-2 ${borderClass} bg-card p-6 md:p-7 shadow-md flex flex-col`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span
                        className={`inline-block px-4 py-1 rounded-full text-xs font-extrabold ${
                          plan.badge.tone === "primary"
                            ? "bg-primary text-primary-foreground"
                            : "bg-amber-400 text-foreground"
                        }`}
                      >
                        {plan.badge.label}
                      </span>
                    </div>
                  )}

                  <div className="mb-5">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                  </div>

                  <div className="mb-5">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                      {plan.priceSuffix && (
                        <span className="text-base text-muted-foreground font-bold">
                          {plan.priceSuffix}
                        </span>
                      )}
                      {plan.oldPrice && (
                        <span className="text-base text-muted-foreground line-through">
                          {plan.oldPrice}
                        </span>
                      )}
                    </div>
                    {plan.offer && (
                      <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-tint text-primary">
                        {plan.offer}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-7 text-sm flex-1">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.ctaTone === "accent" ? "text-amber-500" : "text-primary"
                          }`}
                        />
                        <span className="text-foreground">
                          <span className="font-bold">{f.text}</span>
                          {f.sub && (
                            <span className="text-muted-foreground font-normal"> {f.sub}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://forms.gle/Aq7Mf43c2jnZHdrh6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full text-base font-extrabold px-6 py-3.5 rounded-lg transition-all shadow-md ${ctaClass}`}
                    style={ctaStyle}
                  >
                    {plan.cta}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Closing line */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Many families start with the Discovery Activity to understand where their child's learning gaps began.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
