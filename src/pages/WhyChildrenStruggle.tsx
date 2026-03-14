import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import { Blocks, ListChecks, HandHelping, Clock, TrendingUp, Home } from "lucide-react";
import heroBlob from "@/assets/why-struggle-hero-blob.png";

const reasons = [
  {
    icon: Blocks,
    title: "Missing building blocks",
    desc: "If a child never fully understood fractions earlier on, later topics like algebra stop making sense.",
    iconColor: "hsl(214 64% 34% / 0.7)",
  },
  {
    icon: ListChecks,
    title: "Memorising, not understanding",
    desc: "Your child may know the steps but not the reason. When questions change slightly, they feel stuck.",
    iconColor: "hsl(215 58% 41% / 0.7)",
  },
  {
    icon: HandHelping,
    title: "They won't say they're confused",
    desc: "Children often stay quiet because they don't want to look wrong in front of others.",
    iconColor: "hsl(150 25% 50% / 0.85)",
  },
  {
    icon: Clock,
    title: "The class moves on",
    desc: "Schools must keep pace. If a concept takes longer for one child, there is rarely time to revisit it.",
    iconColor: "hsl(351 75% 48% / 0.55)",
  },
  {
    icon: TrendingUp,
    title: "Working hard, no progress",
    desc: "Without knowing what to fix, effort becomes frustration.",
    iconColor: "hsl(215 57% 28% / 0.7)",
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
    {/* Hero — compact */}
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <div className="md:w-[46%]">
            <div>
              <h1 className="text-4xl md:text-5xl mb-4">It doesn't start in today's lesson</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Children rarely fall behind in the topic they are learning now. They fall behind in something they were expected to already know.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={heroBlob}
              alt="A father and child high-fiving while learning together at a laptop"
              className="w-[90%] sm:w-full md:max-w-[560px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Cause blocks — connected chain */}
    <section className="py-8 md:py-12 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl mb-8 text-center">Why Some Children Fall Behind</h2>
        <div className="relative">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < reasons.length - 1 && (
                  <div className="absolute left-9 top-full w-px h-4 bg-border z-0" />
                )}
                <div
                  className="relative z-10 bg-card rounded-xl px-8 py-7 border border-border border-l-[3px] mb-4 transition-shadow duration-300 hover:[box-shadow:0_18px_40px_rgba(26,46,108,0.18)]"
                  style={{ borderLeftColor: "hsl(351 75% 48% / 0.25)", boxShadow: "0 12px 28px rgba(26, 46, 108, 0.12)" }}
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border" style={{ borderColor: r.iconColor, backgroundColor: `${r.iconColor.replace(')', ' / 0.08)')}` }}>
                      <Icon size={17} style={{ color: r.iconColor }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{r.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Recognition — integrated, no box */}
    <section className="pt-0 pb-8 md:pb-10 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex gap-3 items-center mb-4">
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
    </section>

    {/* CTA — tighter, prominent */}
    <section className="py-10 md:py-14 text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-4">You don't have to guess anymore</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.
        </p>
        <CTAButton className="px-12 py-5 text-lg shadow-lg" />
      </div>
    </section>
  </Layout>
);

export default WhyChildrenStruggle;
