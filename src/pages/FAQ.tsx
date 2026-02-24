import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import TrustStrip from "@/components/TrustStrip";
import { Check, Clock, HelpCircle, Users, GraduationCap, Shield, FileText, BookOpen, XCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  // Group 1: Child experience
  {
    q: "Is the learning check stressful?",
    a: "No. It isn't a test and there are no scores or time pressure. It's a gentle question and answer activity. Ruby asks simple questions and adjusts based on your child's responses. The goal is to understand how they think, not to catch them out. Many children actually relax during the activity because they can answer privately without worrying about classmates.",
    icon: Clock,
  },
  {
    q: "Should I still use this if my child gets good marks?",
    a: "Yes. Good marks don't always mean full understanding. Some children cope by memorising methods. When the work becomes more complex, confidence suddenly drops. Ruby helps strengthen foundations early so future topics remain manageable. For strong students, it often improves confidence and prepares them for harder work ahead.",
    icon: Shield,
  },
  {
    q: "How much time does this take?",
    a: "The learning check takes only a few minutes. After that, your child can use Ruby in short sessions that fit around normal school and their homework. Most families use it for brief regular practice rather than long study periods. The aim is steady progress, not extra pressure.",
    icon: Clock,
  },
  {
    q: "What will the results show me?",
    a: "You receive a clear learning report, not just a score. It will explain: what your child understands confidently, what concepts they missed, where learning first broke down, and what Ruby will teach next. You will finally know why your child has been getting stuck and how improvement will happen.",
    icon: FileText,
  },
  // Group 2: Trust and credibility
  {
    q: "Is Ruby a tutor, an app, or something else?",
    a: "Ruby is best understood as a learning diagnosis and guidance system. It first works out what your child understands and what they missed, then teaches those specific concepts step by step. So instead of replacing a teacher or giving random help, Ruby identifies the cause of difficulty and guides learning from that point. It combines the attention of a private tutor with a structured learning plan that adapts to your child.",
    icon: HelpCircle,
  },
  {
    q: "Is this like hiring a tutor?",
    a: "Not quite. A tutor usually helps with current homework or explains today's lesson. Ruby focuses on why the lesson is difficult in the first place. Often the problem comes from an earlier concept your child was expected to already know. By finding and rebuilding those missing foundations, your child can follow school lessons more easily and improve their academic performance.",
    icon: Users,
  },
  {
    q: "What makes Ruby different from extra classes?",
    a: "Extra classes repeat the topic. Ruby identifies the cause. If your child struggles with algebra, extra lessons often teach more algebra. But the real issue may be fractions or number sense learned years earlier. Ruby traces mistakes back to the earlier concept and teaches that first. Instead of more work, your child gets the right work in the right order.",
    icon: GraduationCap,
  },
  // Group 3: Parent involvement and logistics
  {
    q: "How involved do I need to be as a parent?",
    a: "Very little. Your child can use Ruby independently. You don't need to teach the lessons or supervise every session. You can simply check the report and follow their progress.",
    icon: Users,
  },
  {
    q: "Which school levels does Ruby cover?",
    a: "Ruby supports school-age learners from Grade 1 to 12. The system adapts to your child's current understanding rather than their grade alone. If they need to revisit earlier material, Ruby will. If they are ready to move forward, it adjusts accordingly.",
    icon: BookOpen,
  },
  {
    q: "What happens if I want to stop?",
    a: "You can stop at any time. There is no long-term commitment. If you decide Ruby is not right for your family, you can cancel and your access will end immediately. The goal is to help your child, not to lock you into a contract.",
    icon: XCircle,
  },
];

const FAQ = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-16 md:pt-20 pb-8 md:pb-10 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl mb-4">Frequently Asked Questions</h1>
        <p className="text-base text-muted-foreground mb-1">
          Most parents read this right before starting the learning checkup.
        </p>
        <p className="text-sm text-muted-foreground/70">
          Here are the things families usually want to know first.
        </p>
      </div>
    </section>

    {/* Reassurance panel */}
    <section className="pb-8 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-muted/50 border border-border rounded-lg p-5">
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground">
            {[
              "Your child cannot fail the learning check",
              "Ruby adapts to your child's level",
              "Most children finish in about 10 minutes",
              "You see the results immediately",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* FAQ accordion */}
    <section className="pb-10 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 shadow-sm">
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

    {/* Trust Strip */}
    <TrustStrip />

    {/* Micro trust indicators + CTA */}
    <section className="py-14 md:py-18 bg-sage-light text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Micro trust row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground mb-10">
          {[
            "Private and child-safe learning environment",
            "No public profiles or messaging",
            "Designed for home use",
            "No long-term commitment",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
              {t}
            </span>
          ))}
        </div>

        <h2 className="text-3xl mb-4">Still have questions?</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          You don't need to decide anything yet.
          <br />
          Start the free learning check and see your child's results first.
        </p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default FAQ;
