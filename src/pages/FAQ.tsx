import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is Ruby?",
    a: "Ruby is a learning diagnosis system. It identifies the hidden gaps in your child's understanding — the foundational concepts they missed — and gives you a clear plan to help them catch up.",
  },
  {
    q: "Is this an online course or tutoring service?",
    a: "No. Ruby is not a course and not a tutor. Think of it more like a learning health check — it diagnoses the problem so you know exactly what kind of help your child needs.",
  },
  {
    q: "How long does the checkup take?",
    a: "The initial learning checkup takes about 15 minutes. It's a gentle, adaptive conversation — not a stressful test. Your child can do it from home at their own pace.",
  },
  {
    q: "What ages or grades does Ruby support?",
    a: "Ruby currently supports learners from Grade 3 to Grade 12, across core subjects like Maths, English, and Science.",
  },
  {
    q: "Will my child feel stressed or tested?",
    a: "Not at all. Ruby is designed to feel like a conversation, not an exam. There are no scores to worry about, and it adapts to your child's pace. Most children find it surprisingly comfortable.",
  },
  {
    q: "How is this different from extra lessons?",
    a: "Extra lessons usually focus on the current syllabus. But if the real problem is a gap from two years ago, more lessons on today's work won't help. Ruby finds the root cause first.",
  },
  {
    q: "What do I get after the checkup?",
    a: "You receive a clear, jargon-free report showing where your child's gaps are, which concepts to focus on, and in what order. It's designed for parents — not educators.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. If you're on the Guided Recovery plan, you can cancel anytime. There are no contracts or long-term commitments.",
  },
];

const FAQ = () => (
  <Layout>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about Ruby and how it helps your child.
        </p>
      </div>
    </section>

    <section className="pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
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

    <section className="py-20 bg-sage-light text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-8">
          Start with a free checkup and see for yourself. Or reach out — we're happy to help.
        </p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default FAQ;
