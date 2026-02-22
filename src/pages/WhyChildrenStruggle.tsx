import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";

const reasons = [
  {
    title: "Gaps in foundational concepts",
    desc: "If a child didn't fully grasp fractions in Grade 4, algebra in Grade 8 will feel impossible. These invisible gaps compound over time.",
  },
  {
    title: "Memorising instead of understanding",
    desc: "Many children learn to pass tests — not to understand. When the format changes or the questions get harder, they feel lost.",
  },
  {
    title: "Fear of asking for help",
    desc: "Children often hide confusion because they're embarrassed. The longer it goes unnoticed, the harder it is to catch up.",
  },
  {
    title: "One-size-fits-all teaching",
    desc: "Classrooms move at a set pace. If a child needs a little more time on one concept, the class has already moved on.",
  },
  {
    title: "Effort without direction",
    desc: "Studying more doesn't help if your child is studying the wrong things. Without diagnosis, hard work can feel pointless.",
  },
];

const WhyChildrenStruggle = () => (
  <Layout>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl mb-6">Why Children Struggle</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          If your child is working hard but still falling behind, you're not alone.
          And it's almost never about intelligence or laziness.
        </p>
      </div>
    </section>

    <section className="py-16 bg-sage-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-xl mb-3">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-4">The first step is understanding</h2>
        <p className="text-muted-foreground mb-8">
          Ruby helps you see what's really going on — so you can help your child move forward with clarity.
        </p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default WhyChildrenStruggle;
