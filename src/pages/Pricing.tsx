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
  },
];

const Pricing = () => (
  <Layout>
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl mb-8">Choose the right support for your child</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          All options start with free 7 day trial. From there, you can decide how much support your child needs.
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
                <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 block">Most recommended starting point</span>
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
        <p className="text-center text-sm text-muted-foreground mt-10">
          You can begin with the free trial and decide afterwards. No commitment required.
        </p>
      </div>
    </section>
  </Layout>
);

export default Pricing;
