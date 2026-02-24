import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import TrustStrip from "@/components/TrustStrip";
import supportImage from "@/assets/parent-support.jpg";
import {
  Users,
  Mail,
  Clock,
  Check,
  FileText,
  HelpCircle,
  BookOpen,
  Settings,
  CreditCard,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const reassuranceItems = [
  "Real human support",
  "Help understanding your child's report",
  "Guidance on where to start",
  "No obligation to subscribe",
];

const helpCards = [
  {
    icon: FileText,
    title: "Understanding the learning report",
    desc: "We will explain what the results actually mean and what to focus on first.",
  },
  {
    icon: HelpCircle,
    title: "Is my child behind?",
    desc: "We help you interpret whether your child is missing foundations or just needs practice.",
  },
  {
    icon: BookOpen,
    title: "Getting started",
    desc: "We'll help you decide whether to begin with the checkup or guided support.",
  },
  {
    icon: Users,
    title: "Using Ruby at home",
    desc: "Advice on how often your child should use it and how involved you should be.",
  },
  {
    icon: Settings,
    title: "Technical help",
    desc: "Login issues, devices, or anything not working as expected.",
  },
  {
    icon: CreditCard,
    title: "Subscription questions",
    desc: "Trial, billing, cancellations, and what happens after the checkup.",
  },
];

const grades = Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    grade: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl leading-tight mb-6">
                We're here to help you and your child
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                If you're unsure about your child's learning, need help
                understanding a report, or have questions before starting, you
                can reach us directly. A real person will respond.
              </p>
              <a
                href="mailto:support@rubylearning.com"
                className="inline-flex items-center justify-center text-base font-medium px-8 py-4 rounded-lg bg-cta text-cta-foreground hover:bg-cta-hover transition-colors shadow-md gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Support
              </a>
              <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                We normally reply within one working day.
              </p>
            </div>
            <div>
              <img
                src={supportImage}
                alt="Friendly support helping a parent and child"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick reassurance strip ── */}
      <section className="py-8 bg-blue-tint border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {reassuranceItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-foreground"
              >
                <Check
                  className="w-5 h-5 text-primary shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What parents contact us about ── */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              What parents usually contact us about
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              These are the most common questions we hear. You're welcome to
              ask us anything.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {helpCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-xl p-7 border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <card.icon
                    className="w-5 h-5 text-primary shrink-0"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg">{card.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact methods ── */}
      <section className="py-14 md:py-20 bg-blue-tint">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-center mb-10">
            Ways to reach us
          </h2>
          <div className="bg-card rounded-xl border border-border shadow-sm p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl mb-2">Email</h3>
            <a
              href="mailto:support@rubylearning.com"
              className="text-lg text-primary font-medium hover:underline"
            >
              support@rubylearning.com
            </a>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Best for questions about your child, reports, or anything you're
              unsure about.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-5 pt-5 border-t border-border">
              <Clock className="w-4 h-4" />
              We aim to respond within 24 hours on weekdays.
            </div>
          </div>
        </div>
      </section>

      {/* ── Send us a message form ── */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-center mb-4">
            Send us a message
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            We'll get back to you as soon as we can.
          </p>

          {submitted ? (
            <div className="bg-blue-tint border border-border rounded-xl p-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl mb-2">Message sent</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for reaching out. We'll reply within one working day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-sm space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Parent name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Child's grade
                </label>
                <select
                  required
                  value={formState.grade}
                  onChange={(e) =>
                    setFormState({ ...formState, grade: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a grade</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us what you need help with..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center text-base font-medium px-8 py-4 rounded-lg bg-cta text-cta-foreground hover:bg-cta-hover transition-colors shadow-md gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send message
              </button>
              <p className="text-xs text-muted-foreground text-center">
                You are not subscribing to anything by contacting us.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── You don't need to figure this out alone ── */}
      <section className="py-14 md:py-20 bg-blue-tint">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl mb-8">
            You don't need to figure this out alone
          </h2>
          <div className="space-y-5 text-foreground leading-relaxed text-left max-w-xl mx-auto">
            <p>
              If your child is working hard but still struggling, contact us.
            </p>
            <p>
              If you are unsure whether they need extra help, contact us.
            </p>
            <p>
              If you received a report and don't know what to do next, contact
              us.
            </p>
          </div>
          <p className="mt-8 text-foreground font-medium">
            We will tell you honestly whether Ruby is right for your child.
          </p>
        </div>
      </section>

      {/* ── Before you contact us ── */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h3 className="text-xl mb-5">You might find this helpful first</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Frequently Asked Questions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/your-childs-report"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Your Child's Report
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* ── Final reassurance CTA ── */}
      <section className="pt-6 pb-14 md:pb-18 bg-background text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl mb-4">
            You can also start with a free learning checkup
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Many parents begin with the checkup and then contact us to go
            through the results together.
          </p>
          <CTAButton />
          <p className="text-sm text-muted-foreground mt-4">
            You will see your child's results before deciding anything further.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
