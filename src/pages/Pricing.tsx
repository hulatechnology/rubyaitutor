import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Learning Checkup",
    price: "Free",
    desc: "A starting point to understand your child's learning level.",
    features: [
      "One subject assessment",
      "Summary of learning gaps",
      "Basic recommendations",
      "Takes about 15 minutes",
    ],
    highlight: false,
  },
  {
    name: "Full Diagnosis",
    price: "R299",
    period: "/once-off",
    desc: "A comprehensive diagnosis across all core subjects with a detailed report.",
    features: [
      "All core subjects assessed",
      "Detailed learning gap report",
      "Personalised learning path",
      "Foundation-level breakdown",
      "Printable parent report",
    ],
    highlight: true,
  },
  {
    name: "Guided Recovery",
    price: "R499",
    period: "/month",
    desc: "Ongoing support to help your child rebuild their learning foundation.",
    features: [
      "Everything in Full Diagnosis",
      "Weekly guided practice sessions",
      "Progress tracking dashboard",
      "Monthly parent updates",
      "Priority support",
    ],
    highlight: false,
  },
];

const Pricing = () => (
  <Layout>
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl mb-8">Simple, honest pricing</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Start free. Upgrade when you're ready. No contracts, no pressure.
        </p>
      </div>
    </section>

    <section className="pb-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 border-2 transition-shadow ${
                plan.highlight
                  ? "border-primary bg-blue-tint shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlight && (
                <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 block">Most popular</span>
              )}
              <h3 className="text-2xl mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{plan.desc}</p>
              <ul className="space-y-3 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <CTAButton className="w-full text-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
