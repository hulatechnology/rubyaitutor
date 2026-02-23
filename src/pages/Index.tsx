import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import heroImage from "@/assets/hero-illustration.jpg";
import reportImage from "@/assets/parent-report.jpg";
import { Search, ClipboardList, Route, Sparkles, CheckCircle, Target, BarChart3, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    title: "Effort without direction",
    desc: "Studying more doesn't help if your child is studying the wrong things. Without diagnosis, hard work can feel pointless.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Your child completes a learning checkup",
    desc: "A short, friendly conversation — not a test. Ruby adapts in real time to understand what your child knows and where things get fuzzy.",
  },
  {
    icon: ClipboardList,
    title: "Ruby identifies the hidden gaps",
    desc: "Most struggles aren't about the current topic — they're about something missed months or years ago. Ruby traces the problem back to its root.",
  },
  {
    icon: Route,
    title: "You receive a personalised learning map",
    desc: "A clear, jargon-free report showing exactly what your child needs to work on, in the right order.",
  },
  {
    icon: Sparkles,
    title: "Your child rebuilds their foundation",
    desc: "With guided exercises and gentle practice, your child fills in the gaps — so new learning finally makes sense.",
  },
];

const reportFeatures = [
  "A clear summary of your child's current understanding",
  "The exact foundational gaps holding them back",
  "Which concepts to work on first, in the right order",
  "Personalised recommendations for how to practise",
  "A confidence assessment — how your child feels about learning",
];

const faqs = [
  {
    q: "What exactly is Ruby?",
    a: "Ruby is a learning diagnosis system. It identifies the hidden gaps in your child's understanding and gives you a clear plan to help them catch up.",
  },
  {
    q: "How long does the checkup take?",
    a: "About 15 minutes. It's a gentle, adaptive conversation — not a stressful test. Your child can do it from home at their own pace.",
  },
  {
    q: "Will my child feel stressed or tested?",
    a: "Not at all. Ruby is designed to feel like a conversation, not an exam. There are no scores to worry about. Most children find it surprisingly comfortable.",
  },
  {
    q: "How is this different from extra lessons?",
    a: "Extra lessons usually focus on the current syllabus. But if the real problem is a gap from two years ago, more lessons on today's work won't help. Ruby finds the root cause first.",
  },
  {
    q: "What ages or grades does Ruby support?",
    a: "Ruby currently supports learners from Grade 3 to Grade 12, across core subjects like Maths, English, and Science.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. There are no contracts or long-term commitments. You can cancel anytime.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="animate-fade-up">
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                For parents who care deeply
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Your child studies hard.<br />
                <span className="text-primary">Why aren't they improving?</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Ruby finds the hidden gaps in your child's learning foundation —
                the ones that textbooks and tutors often miss — and gives you
                a clear path to help them grow.
              </p>
              <CTAButton />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroImage}
                alt="Parent and child learning together"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Children Struggle ── */}
      <section className="py-20 md:py-24 bg-coral-light">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl mb-5">
              It's not about studying harder
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              If your child is working hard but still falling behind, it's almost
              never about intelligence or laziness. Here's what's really going on.
            </p>
          </div>
          <div className="space-y-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-background rounded-xl p-7 border border-border"
              >
                <h3 className="text-xl mb-2">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ── How Ruby Works ── */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl mb-5">
              How Ruby helps your child
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ruby isn't a course or a chatbot. It's a learning diagnosis — a way
              to finally understand what's really going on beneath the surface.
            </p>
          </div>
          <div className="space-y-10">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="text-lg font-semibold text-secondary-foreground">
                    {i + 1}
                  </span>
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

      {/* ── The Learning Report ── */}
      <section className="py-20 md:py-24 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl mb-5">
                Your child's learning report
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                After the checkup, you'll receive a detailed but easy-to-read
                report showing exactly where your child stands — and what to do
                next.
              </p>
              <div className="space-y-4 mb-10">
                {reportFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
              <CTAButton />
            </div>
            <div>
              <img
                src={reportImage}
                alt="Parent reviewing child's learning report"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Built to Keep Children Engaged ── */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl mb-5">
              Built to keep children engaged
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ruby is designed so your child willingly comes back, session after
              session. It builds routine, tracks real progress, and celebrates
              meaningful milestones — without turning learning into a game.
            </p>
          </div>

          {/* Session mockup */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10 max-w-2xl mx-auto">
            {/* Today's mission */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Today's mission
                  </p>
                  <p className="font-medium text-foreground">
                    Understanding place value in decimals
                  </p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Foundation recovery
                  </p>
                  <Progress value={62} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    62% of gaps resolved
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Latest milestone
                  </p>
                  <p className="font-medium text-foreground">
                    Fractions foundation complete
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Achieved after 8 focused sessions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            {[
              {
                label: "Routine",
                desc: "Short, focused sessions that fit into your child's day naturally.",
              },
              {
                label: "Progress",
                desc: "Your child sees how far they've come — not how far they have to go.",
              },
              {
                label: "Consistency",
                desc: "Gentle reminders and achievable goals keep momentum going.",
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ── FAQ Reassurance ── */}
      <section className="py-20 md:py-24 bg-coral-light">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Common questions from parents
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-base font-medium py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl mb-5">
            Every child deserves to understand
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Start with a free learning checkup. It takes just a few minutes and
            could change everything.
          </p>
          <CTAButton />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
