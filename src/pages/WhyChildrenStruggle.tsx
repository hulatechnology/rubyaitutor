import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";

const reasons = [
  {
    title: "Missing building blocks",
    desc: "If a child never fully understood fractions earlier on, later topics like algebra stop making sense.",
  },
  {
    title: "Memorising, not understanding",
    desc: "Your child may know the steps but not the reason. When questions change slightly, they feel stuck.",
  },
  {
    title: "They won't say they're confused",
    desc: "Children often stay quiet because they don't want to look wrong in front of others.",
  },
  {
    title: "The class moves on",
    desc: "Schools must keep pace. If a concept takes longer for one child, there is rarely time to revisit it.",
  },
  {
    title: "Working hard, no progress",
    desc: "Without knowing what to fix, effort becomes frustration.",
  },
];

const WhyChildrenStruggle = () => (
  <Layout>
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl mb-8">It doesn't start in today's lesson</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Children rarely fall behind in the topic they are learning now. They fall behind in something they were expected to already know.
        </p>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <h3 className="text-xl mb-3">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-28 md:py-36 bg-background text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-6">You don't have to guess anymore</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.
        </p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default WhyChildrenStruggle;
