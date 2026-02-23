import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import { Search, ClipboardList, Route, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. A short learning check",
    desc: "Ruby asks simple questions to understand how your child is thinking. No scores, no pressure.",
  },
  {
    icon: ClipboardList,
    title: "2. Missing concepts are discovered",
    desc: "Ruby identifies the exact ideas your child didn't fully grasp, even from earlier grades.",
  },
  {
    icon: Route,
    title: "3. A clear learning path is created",
    desc: "You get clear guidance showing exactly how your child will catch up.",
  },
  {
    icon: Sparkles,
    title: "4. Understanding is rebuilt",
    desc: "Ruby teaches the missing foundations step by step so new schoolwork becomes easier to follow.",
  },
];

const HowItWorks = () => (
  <Layout>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl mb-6">How Ruby helps your child learn</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Your child starts with a gentle learning check. Ruby uses it to see what makes sense and what doesn't, then guides them forward one step at a time.
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
        <h2 className="text-3xl mb-4">You don't have to guess anymore</h2>
        <p className="text-muted-foreground mb-8">In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.</p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
