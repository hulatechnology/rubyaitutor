import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import TrustStrip from "@/components/TrustStrip";
import heroImage from "@/assets/hero-blob.png";
import rubyTeachingUI from "@/assets/dds.png";
import rubyChat from "@/assets/ruby-engagement-chat.png";
import reportImg1 from "@/assets/understanding-level-replace.png";
import reportImg2 from "@/assets/root-cause-replace.png";
import reportImg3 from "@/assets/parent-guidance-replace.png";
import { Search, ClipboardList, Route, Sparkles, CheckCircle, Target, Lightbulb, TrendingUp, Clock, HelpCircle, GraduationCap, Shield, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const reasons = [
  {
    title: "Finds the missing concepts",
    desc: "Ruby analyses your child's answers to identify the exact skills they never fully understood, even from earlier grades.",
    icon: Search,
  },
  {
    title: "Explains in a way they grasp",
    desc: "Lessons adapt to your child's level and home language so they finally understand the why, not just the answer.",
    icon: Lightbulb,
  },
  {
    title: "Personal learning path",
    desc: "Every child follows a different progression based on what they know and what they need next.",
    icon: Route,
  },
  {
    title: "Supports ongoing learning",
    desc: "As your child progresses at school, Ruby continuously adjusts to keep understanding strong.",
    icon: TrendingUp,
  },
];

const steps = [
  {
    icon: Search,
    title: "A short learning check",
    desc: "Ruby asks simple questions to understand how your child is thinking. No scores, no pressure.",
  },
  {
    icon: ClipboardList,
    title: "Missing concepts are discovered",
    desc: "Ruby identifies the exact ideas your child didn't fully grasp, even from earlier grades.",
  },
  {
    icon: Route,
    title: "A clear learning path is created",
    desc: "You get clear guidance showing exactly how your child will catch up.",
  },
  {
    icon: Sparkles,
    title: "Understanding is rebuilt",
    desc: "Ruby teaches the missing foundations step by step so new schoolwork becomes easier to follow.",
  },
];

const reportFeatures = [
  "What your child confidently knows and where they struggle",
  "The specific skills preventing progress",
  "The first step your child needs to take to move forward",
  "How Ruby will teach your child moving forward",
  "How confidence changes as learning starts to make sense",
];

const faqs = [
  {
    q: "Is the learning check stressful?",
    a: "No. It isn't a test and there are no scores or time pressure. It's a gentle question and answer activity. Ruby asks simple questions and adjusts based on your child's responses. The goal is to understand how they think, not to catch them out. Many children actually relax during the activity because they can answer privately without worrying about classmates.",
    icon: Clock,
  },
  {
    q: "Is Ruby a tutor, an app, or something else?",
    a: "Ruby is best understood as a learning diagnosis and guidance system. It first works out what your child understands and what they missed, then teaches those specific concepts step by step. So instead of replacing a teacher or giving random help, Ruby identifies the cause of difficulty and guides learning from that point. It combines the attention of a private tutor with a structured learning plan that adapts to your child.",
    icon: HelpCircle,
  },
  {
    q: "What makes Ruby different from extra classes?",
    a: "Extra classes repeat the topic. Ruby identifies the cause. If your child struggles with algebra, extra lessons often teach more algebra. But the real issue may be fractions or number sense learned years earlier. Ruby traces mistakes back to the earlier concept and teaches that first. Instead of more work, your child gets the right work in the right order.",
    icon: GraduationCap,
  },
  {
    q: "How much time does this take?",
    a: "The learning check takes only a few minutes. After that, your child can use Ruby in short sessions that fit around normal school and their homework. Most families use it for brief regular practice rather than long study periods. The aim is steady progress, not extra pressure.",
    icon: Clock,
  },
  {
    q: "Should I still use this if my child gets good marks?",
    a: "Yes. Good marks don't always mean full understanding. Some children cope by memorising methods. When the work becomes more complex, confidence suddenly drops. Ruby helps strengthen foundations early so future topics remain manageable. For strong students, it often improves confidence and prepares them for harder work ahead.",
    icon: Shield,
  },
  {
    q: "How involved do I need to be as a parent?",
    a: "Very little. Your child can use Ruby independently. You don't need to teach the lessons or supervise every session. You can simply check the report and follow their progress.",
    icon: Users,
  },
];

/* Simple SVG building-blocks diagram showing a missing foundation block */
const LearningGapDiagram = () => (
  <svg viewBox="0 0 400 260" className="w-full max-w-md mx-auto mb-10" aria-label="Diagram showing learning gaps: a missing block in the foundation causes instability above">
    {/* Bottom row - foundation */}
    <rect x="20" y="200" width="75" height="38" rx="5" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <rect x="105" y="200" width="75" height="38" rx="5" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    {/* Missing block - dashed outline */}
    <rect x="190" y="200" width="75" height="38" rx="5" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="6,4" />
    <text x="227" y="224" textAnchor="middle" fontSize="11" fill="hsl(var(--destructive))" fontWeight="500" fontFamily="Inter, sans-serif">missing</text>
    <rect x="275" y="200" width="75" height="38" rx="5" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    {/* Second row */}
    <rect x="62" y="154" width="75" height="38" rx="5" fill="hsl(var(--primary))" opacity="0.15" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <rect x="147" y="154" width="75" height="38" rx="5" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,3" />
    <rect x="232" y="154" width="75" height="38" rx="5" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,3" />
    {/* Third row */}
    <rect x="105" y="108" width="75" height="38" rx="5" fill="hsl(var(--primary))" opacity="0.07" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,3" />
    <rect x="190" y="108" width="75" height="38" rx="5" fill="hsl(var(--primary))" opacity="0.07" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,3" />
    {/* Top block - most unstable */}
    <rect x="147" y="62" width="75" height="38" rx="5" fill="hsl(var(--primary))" opacity="0.04" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,3" />
    {/* Labels */}
    <text x="185" y="30" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))" fontFamily="Inter, sans-serif">Today's topic</text>
    <text x="185" y="256" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))" fontFamily="Inter, sans-serif">Earlier foundations</text>
    <line x1="180" y1="52" x2="200" y2="52" stroke="hsl(var(--muted-foreground))" strokeWidth="0.8" opacity="0.4" />
  </svg>
);

const reportSlides = [
  { src: reportImg1, alt: "Understanding Level — assessment summary showing strengths and gaps", label: "Understanding Level" },
  { src: reportImg2, alt: "Root Cause & What Ruby Will Teach — diagnosis and learning plan", label: "Root Cause & What Ruby Will Teach" },
  { src: reportImg3, alt: "Parent Guidance & Expected Outcome — practical support advice", label: "Parent Guidance & Expected Outcome" },
];

const ReportCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reportSlides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-card">
      <div className="bg-muted/50 px-4 py-2.5 flex items-center gap-2 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
        <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
        <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
        <span className="text-xs text-muted-foreground ml-2">Learning Checkup Report</span>
      </div>
      <div className="relative aspect-[4/3]">
        {reportSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 py-3 bg-card border-t border-border">
        {reportSlides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
            aria-label={slide.label}
          />
        ))}
      </div>
    </div>
  );
};
const Index = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="py-10 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_1.1fr] gap-4 md:gap-4 items-center">
            <div className="relative animate-fade-up text-center md:text-left">
              <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.2] sm:leading-tight mb-3 md:mb-4">
                When your child gets stuck, <span className="text-primary">Ruby shows them why.</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 hidden sm:block">
                Identify the learning gap and help your child understand, not memorize, in their home language
              </p>
              <Link
                to="/pricing"
                className="inline-block"
              >
                <CTAButton />
              </Link>
            </div>
            <div className="animate-fade-up flex items-center justify-center w-[95%] mx-auto md:w-full mt-2 md:mt-0" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroImage}
                alt="Parent and child learning together"
                className="w-full max-w-[520px] md:max-w-[700px] h-auto object-contain"
                style={{ filter: "drop-shadow(0 25px 60px rgba(0,0,0,0.08))" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Children Struggle ── */}
      <section className="py-8 md:py-20 bg-blue-tint">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">
              You've probably experienced this before
            </h2>
            <LearningGapDiagram />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Children rarely fall behind in the topic they are learning today. They fall behind in a concept they missed long ago because Math, reading, and science are built step by step. Each new skill depends on the one before it. When a single step is missing, students don't just get one question wrong, they stop understanding entire topics. Ruby finds the exact point learning broke down and rebuilds your child's foundation step by step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-card rounded-xl p-8 border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <r.icon className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                  <h3 className="text-xl">{r.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-16">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ── How Ruby Works ── */}
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">
              How Ruby helps <span className="text-primary">your child learn</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your child starts with a gentle learning check. Ruby uses it to see what makes sense and what doesn't, then guides them forward one step at a time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* UI Preview Panel — sized to match text height */}
            <div className="flex items-center justify-center">
              <div className="w-[75%] rounded-2xl border border-border shadow-xl overflow-hidden bg-card">
                <div className="bg-muted/50 px-4 py-2.5 flex items-center gap-2 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                  <span className="text-xs text-muted-foreground ml-2">Diagnostic Placement Check</span>
                </div>
                <img
                  src={rubyTeachingUI}
                  alt="Ruby discovery activity showing a friendly welcome screen with learning check details"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-8 md:mt-16">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ── The Learning Report ── */}
      <section className="py-8 md:py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">
                See what your child <span className="text-primary">actually understands</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Ruby turns your child's answers into a clear explanation of their strengths, their gaps, and how to support them at home.
              </p>
              <div className="space-y-4 mb-12">
                {reportFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
              <CTAButton />
            </div>
            <ReportCarousel />
          </div>
        </div>
      </section>

      {/* ── Built to Keep Children Engaged ── */}
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">
              Built to keep children engaged
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ruby is designed so your child willingly comes back, session after
              session. It builds routine, tracks real progress, and celebrates
              meaningful milestones — without turning learning into a game.
            </p>
          </div>

          {/* Chat UI Preview — primary visual */}
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-sm text-muted-foreground mb-4">Your child can ask for help at any moment</p>
            <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-card">
              <div className="bg-muted/50 px-4 py-2.5 flex items-center gap-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <span className="text-xs text-muted-foreground ml-2">Ruby Chat</span>
              </div>
              <img
                src={rubyChat}
                alt="Ruby chat interface showing step-by-step help with a maths question"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-14 max-w-2xl mx-auto">
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
                <p className="font-semibold text-foreground mb-2">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-16">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ── FAQ Reassurance ── */}
      <section className="py-8 md:py-20 bg-blue-tint">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-14">
            Common questions from parents
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-medium py-5 hover:no-underline">
                  <span className="flex items-center gap-3">
                    <faq.icon className="w-4 h-4 text-muted-foreground shrink-0" strokeWidth={1.5} />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <TrustStrip />

      {/* ── Final CTA ── */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl mb-6">
            You don't have to guess anymore
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 md:mb-12">
            In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.
          </p>
          <CTAButton />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
