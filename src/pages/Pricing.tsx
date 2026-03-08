import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Learning Checkup",
    price: "Free",
    desc: "A quick learning assessment to understand your child's level and identify where understanding first broke down.",
    features: [
      "One learning check",
      "Clear summary of learning gaps",
      "Simple next-step guidance",
      "Takes about 10 minutes",
    ],
    highlight: false,
    label: "Start here",
    emphasizeCTA: true,
  },
  {
    name: "Full Learning Diagnosis",
    price: "R149",
    period: "/month",
    desc: "A detailed diagnosis across subjects showing exactly what your child missed and how to rebuild their foundation.",
    features: [
      "All core subjects available",
      "Detailed learning gap report",
      "Personalised learning path",
      "Progress tracking dashboard",
      "Foundation-level breakdown",
      "Diagnoses in 11 Languages",
      "Access to Video Learning",
      "Available 24/7",
    ],
    highlight: true,
    label: null,
    emphasizeCTA: false,
  },
  {
    name: "Ongoing Guided Support",
    price: "R199",
    period: "/month",
    desc: "Continuous guided learning that helps your child rebuild understanding and stay confident as schoolwork progresses.",
    features: [
      "Everything in Full Learning Diagnosis",
      "Daily guided practice sessions",
      "Parent progress updates",
      "Priority support",
    ],
    highlight: false,
    label: "After the diagnosis",
    emphasizeCTA: false,
  },
];

const steps = [
  { num: 1, text: "Start the learning checkup (takes about 10 minutes)" },
  { num: 2, text: "See exactly where your child is struggling" },
  { num: 3, text: "Ruby guides the next steps" },
];

const Pricing = () => (
  <Layout>
    {/* Hero with steps */}
    <section className="pt-16 md:pt-20 pb-10 md:pb-12 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl mb-10">Choose the right support for your child</h1>

        {/* 3-step process */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full border-2 border-primary text-primary text-sm font-semibold flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <span className="text-sm text-foreground leading-snug text-left max-w-[200px]">{step.text}</span>
              </div>
              {i < steps.length - 1 && (
                <span className="hidden md:block text-muted-foreground/40 text-lg">→</span>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          No commitment needed. You'll see the results before deciding on ongoing support.
        </p>
      </div>
    </section>

    {/* Pricing cards */}
    <section className="pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 border-2 transition-shadow flex flex-col ${
                plan.highlight
                  ? "border-primary bg-blue-tint shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {plan.label && (
                <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 block">{plan.label}</span>
              )}
              {plan.highlight && (
                <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 block">Most recommended starting point</span>
              )}
              <h3 className="text-2xl mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{plan.desc}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <CTAButton className={`w-full text-center ${plan.emphasizeCTA ? "px-10 py-5 text-lg shadow-lg" : ""}`} />
            </div>
          ))}
        </div>

        {/* Reassurance block */}
        <div className="max-w-2xl mx-auto mt-12 bg-muted/50 border border-border rounded-lg p-6">
          <ul className="space-y-3 text-sm text-foreground">
            <li className="flex items-start gap-3">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Ruby works at your child's level, not their grade</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Your child cannot fail the checkup</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>You will see the learning gaps clearly explained</span>
            </li>
          </ul>
        </div>

        {/* WhatsApp hint */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto leading-relaxed">
          Questions before you start?{" "}
          <a
            href="https://wa.me/27652985458?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20Ruby%20AI%20Tutor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Chat with us on WhatsApp.
          </a>
        </p>

        {/* Decision paragraph */}
        <p className="text-center text-sm text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
          Most families simply begin with the free learning checkup. After seeing the report, you can decide whether your child would benefit from ongoing support.
        </p>
      </div>
    </section>
  </Layout>
);

export default Pricing;
