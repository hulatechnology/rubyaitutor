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
  { q: "Is the Discovery Activity stressful?", a: "No. It isn't a test and there are no scores or time pressure. It's a gentle question and answer activity. Ruby asks simple questions and adjusts based on your child's responses. The goal is to understand how they think, not to catch them out. Many children actually relax during the activity because they can answer privately without worrying about classmates.", icon: Clock },
  { q: "Should I still use this if my child gets good marks?", a: "Yes. Good marks don't always mean full understanding. Some children cope by memorising methods. When the work becomes more complex, confidence suddenly drops. Ruby helps strengthen foundations early so future topics remain manageable. For strong students, it often improves confidence and prepares them for harder work ahead.", icon: Shield },
  { q: "How much time does this take?", a: "The Discovery Activity takes only a few minutes. After that, your child can use Ruby in short sessions that fit around normal school and their homework. Most families use it for brief regular practice rather than long study periods. The aim is steady progress, not extra pressure.", icon: Clock },
  { q: "What will the results show me?", a: "You receive a clear learning report, not just a score. It will explain: what your child understands confidently, what concepts they missed, where learning first broke down, and what Ruby will teach next. You will finally know why your child has been getting stuck and how improvement will happen.", icon: FileText },
  { q: "Is Ruby a tutor, an app, or something else?", a: "Ruby is best understood as a learning discovery and guidance system. It first works out what your child understands and what they missed, then teaches those specific concepts step by step. So instead of replacing a teacher or giving random help, Ruby identifies the cause of difficulty and guides learning from that point. It combines the attention of a private tutor with a structured learning plan that adapts to your child.", icon: HelpCircle },
  { q: "Is this like hiring a tutor?", a: "Not quite. A tutor usually helps with current homework or explains today's lesson. Ruby focuses on why the lesson is difficult in the first place. Often the problem comes from an earlier concept your child was expected to already know. By finding and rebuilding those missing foundations, your child can follow school lessons more easily and improve their academic performance.", icon: Users },
  { q: "What makes Ruby different from extra classes?", a: "Extra classes repeat the topic. Ruby identifies the cause. If your child struggles with algebra, extra lessons often teach more algebra. But the real issue may be fractions or number sense learned years earlier. Ruby traces mistakes back to the earlier concept and teaches that first. Instead of more work, your child gets the right work in the right order.", icon: GraduationCap },
  { q: "How involved do I need to be as a parent?", a: "Very little. Your child can use Ruby independently. You don't need to teach the lessons or supervise every session. You can simply check the report and follow their progress.", icon: Users },
  { q: "Which school levels does Ruby cover?", a: "Ruby supports school-age learners from Grade 1 to 12. The system adapts to your child's current understanding rather than their grade alone. If they need to revisit earlier material, Ruby will. If they are ready to move forward, it adjusts accordingly.", icon: BookOpen },
  { q: "Can Ruby support my child in their home language?", a: "Yes. Ruby can explain concepts and guide learning in your child's preferred home language. This helps them understand ideas more clearly instead of translating in their head. Reports to parents can also be delivered in your chosen language.", icon: GraduationCap },
  { q: "What happens if I want to stop?", a: "You can stop at any time. There is no long-term commitment. If you decide Ruby is not right for your family, you can cancel and your access will end immediately. The goal is to help your child, not to lock you into a contract.", icon: XCircle },
];

const FAQ = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-14 md:pt-18 pb-5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-blue-tint border border-border rounded-xl p-8 md:p-12 text-center shadow-sm">
          <h1 className="text-4xl md:text-5xl mb-4">Frequently Asked <span className="text-primary">Questions</span></h1>
          <p className="text-base text-foreground/70 mb-1">
            Most parents read this right before starting the Discovery Activity.
          </p>
          <p className="text-sm text-foreground/55">
            Here are the things families usually want to know first.
          </p>
        </div>
      </div>
    </section>

    {/* Reassurance panel */}
    <section className="pb-5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card border border-border rounded-lg p-7 md:p-9 shadow-sm">
          <ul className="grid sm:grid-cols-2 gap-5 text-sm text-foreground font-medium">
            {[
              "Your child cannot fail the learning check",
              "Ruby adapts to your child's level",
              "Most children finish in about 10 minutes",
              "You see the results immediately",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* FAQ accordion */}
    <section className="pb-6">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-muted/40 border border-border/80 rounded-xl px-6 shadow-sm hover:bg-muted/60 transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-blue-tint data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground py-5 hover:no-underline">
                <span className="flex items-center gap-3">
                  <faq.icon className="w-4 h-4 text-primary/70 shrink-0" strokeWidth={2} />
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-[1.85] pb-7 pt-1 px-1">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Trust Strip */}
    <TrustStrip />

    {/* Decision CTA block */}
    <section className="pt-6 pb-14 md:pb-18 text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-4">Still have questions?</h2>
        <p className="text-foreground/65 leading-relaxed mb-8">
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
