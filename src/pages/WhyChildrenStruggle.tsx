import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import { Blocks, ListChecks, HandHelping, Clock, TrendingUp, Home } from "lucide-react";
import parentHelpingImg from "@/assets/parent-helping-child.png";

const reasons = [
  {
    icon: Blocks,
    title: "Missing building blocks",
    desc: "If a child never fully understood fractions earlier on, later topics like algebra stop making sense.",
  },
  {
    icon: ListChecks,
    title: "Memorising, not understanding",
    desc: "Your child may know the steps but not the reason. When questions change slightly, they feel stuck.",
  },
  {
    icon: HandHelping,
    title: "They won't say they're confused",
    desc: "Children often stay quiet because they don't want to look wrong in front of others.",
  },
  {
    icon: Clock,
    title: "The class moves on",
    desc: "Schools must keep pace. If a concept takes longer for one child, there is rarely time to revisit it.",
  },
  {
    icon: TrendingUp,
    title: "Working hard, no progress",
    desc: "Without knowing what to fix, effort becomes frustration.",
  },
];

const earlyNotices = [
  "Homework takes much longer than expected",
  "They understood yesterday but cannot do it today",
  "They become frustrated very quickly",
];

const parentNotices = [
  "Homework takes much longer than it should",
  "They forget things they seemed to understand yesterday",
  "They avoid certain subjects",
  "They get upset or frustrated quickly",
];

const WhyChildrenStruggle = () => (
  <Layout>
    {/* Hero */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl mb-8">It doesn't start in today's lesson</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Children rarely fall behind in the topic they are learning now. They fall behind in something they were expected to already know.
            </p>

            {/* Reassurance sub-panel */}
            <div className="mt-8 rounded-lg bg-cream px-6 py-5">
              <p className="text-sm font-medium text-foreground mb-3">Parents often notice this before school does</p>
              <ul className="space-y-2">
                {earlyNotices.map((n, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0 mt-2" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={parentHelpingImg}
              alt="A parent sitting beside their child at a home table, gently helping with homework while the child looks confused"
              className="w-full max-w-md mx-auto h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Cause blocks with left red border accent */}
    <section className="py-14 md:py-20 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-7">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-xl p-8 border border-border shadow-sm border-l-[3px]"
                style={{ borderLeftColor: "hsl(351 75% 48% / 0.25)" }}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={20} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">{r.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Recognition box */}
    <section className="py-10 md:py-14 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="rounded-xl p-8 md:p-10 border border-border shadow-sm" style={{ backgroundColor: "hsl(30 30% 97%)" }}>
          <div className="flex gap-3 items-center mb-6">
            <Home size={18} className="text-muted-foreground" />
            <h3 className="text-xl">What parents usually notice at home</h3>
          </div>
          <ul className="space-y-3">
            {parentNotices.map((notice, i) => (
              <li key={i} className="flex gap-3 items-start text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0 mt-2.5" />
                {notice}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-22 bg-background text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-6">You don't have to guess anymore</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.
        </p>
        <CTAButton className="px-10 py-5 text-lg shadow-lg" />
      </div>
    </section>
  </Layout>
);

export default WhyChildrenStruggle;
