import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import { Search, ClipboardList, Route, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Your child completes a learning checkup",
    desc: "A short, friendly conversation — not a test. Ruby asks questions that adapt in real time to understand what your child knows and where things get fuzzy.",
  },
  {
    icon: ClipboardList,
    title: "2. Ruby identifies the hidden gaps",
    desc: "Most struggles aren't about the current topic — they're about something missed months or years ago. Ruby traces the problem back to its root.",
  },
  {
    icon: Route,
    title: "3. You receive a personalised learning map",
    desc: "A clear, jargon-free report showing exactly what your child needs to work on, in the right order. No guesswork. No overwhelm.",
  },
  {
    icon: Sparkles,
    title: "4. Your child rebuilds their foundation",
    desc: "With guided exercises and gentle practice, your child fills in the gaps properly — so new learning finally makes sense and confidence grows.",
  },
];

const HowItWorks = () => (
  <Layout>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl mb-6">How Ruby Works</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Ruby isn't a course or a chatbot. It's a learning diagnosis — a way to finally
          understand what's really going on beneath the surface.
        </p>
      </div>
    </section>

    <section className="py-16 bg-coral-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-12">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-4">Ready to see what's really going on?</h2>
        <p className="text-muted-foreground mb-8">It starts with a simple checkup. No pressure, no judgement.</p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
