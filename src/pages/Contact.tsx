import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import supportImage from "@/assets/parent-support.jpg";
import CTAButton from "@/components/CTAButton";
import TrustStrip from "@/components/TrustStrip";
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
    desc: "We'll walk you through what the results actually mean and what to focus on first.",
  },
  {
    icon: HelpCircle,
    title: "Is my child behind?",
    desc: "We'll help you understand whether your child is missing foundations or just needs more practice.",
  },
  {
    icon: BookOpen,
    title: "Getting started",
    desc: "Not sure where to begin? We'll help you decide whether to start with the checkup or guided support.",
  },
  {
    icon: Users,
    title: "Using Ruby at home",
    desc: "We can advise on how often your child should use it and how involved you need to be.",
  },
  {
    icon: Settings,
    title: "Technical help",
    desc: "Login issues, devices, or anything not working the way it should.",
  },
  {
    icon: CreditCard,
    title: "Subscription questions",
    desc: "Trial, billing, cancellations — we'll explain how everything works.",
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center max-w-5xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl leading-tight mb-5">
                We're here to help you and your child
              </h1>
              <p className="text-base text-foreground/80 font-medium leading-relaxed mb-4 max-w-lg">
                Many parents contact us before they start. You're not expected to know what your child needs yet.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                If you're unsure about your child's learning, need help
                understanding a report, or have questions before starting, you
                can reach us directly. A real person will respond.
              </p>
              <a
                href="mailto:support@rubylearning.com"
                className="inline-flex items-center justify-center text-base font-medium px-8 py-4 rounded-lg text-cta-foreground hover:opacity-90 transition-all shadow-md gap-2"
                style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
              >
                <Mail className="w-5 h-5" />
                Email Support
              </a>
              <p className="text-sm text-foreground/60 mt-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                We reply the same day during weekdays.
              </p>
            </div>
            <div>
              <img
                src={supportImage}
                alt="Friendly support helping a parent and child"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick reassurance strip ── */}
      <section className="py-10 md:py-12 bg-blue-tint/60 border-y border-border">
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
            <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
              These are the most common questions we hear. You're welcome to
              ask us anything. You don't need a perfect question. Just describe what you're worried about.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {helpCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-xl p-8 border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <card.icon
                    className="w-5 h-5 text-primary shrink-0"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg">{card.title}</h3>
                </div>
                <p className="text-muted-foreground leading-[1.8]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── You don't need to figure this out alone + Form ── */}
      <section className="py-14 md:py-20 bg-blue-tint">
        <div className="container mx-auto px-4 max-w-2xl text-center [&_form]:text-left">
          <p className="text-foreground leading-relaxed max-w-xl mx-auto mb-10">
            You don't need to figure this out alone. If your child is working hard but still struggling, contact us. If you are unsure whether they need extra help, contact us. If you received a report and don't know what to do next, contact us. <strong>We will tell you honestly whether Ruby is right for your child.</strong>
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            Need a faster response?{" "}
            <a
              href="https://wa.me/27652985458?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20Ruby%20AI%20Tutor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Chat with us instantly on WhatsApp
            </a>
          </p>

          <p className="text-muted-foreground mb-10">
            Tell us a little about your child and what you're unsure about.
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
              className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-md ring-1 ring-border/50 space-y-6"
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
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center text-base font-medium px-8 py-4 rounded-lg text-cta-foreground hover:opacity-90 transition-all shadow-md gap-2"
                style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
              >
                <MessageCircle className="w-5 h-5" />
                Send message
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Contacting us does not create an account or start a subscription.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Before you contact us ── */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground mb-3">
            If you prefer, you can also read more first:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-medium bg-card border border-border rounded-lg px-5 py-3 text-primary hover:bg-blue-tint transition-colors"
            >
              Frequently Asked Questions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/your-childs-report"
              className="inline-flex items-center gap-2 text-sm font-medium bg-card border border-border rounded-lg px-5 py-3 text-primary hover:bg-blue-tint transition-colors"
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
      <section className="pt-6 pb-20 md:pb-28 bg-background text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl mb-4">
            You can start with a free learning checkup whenever you're ready
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            You'll see your child's results first. Then you can decide what to do next, with or without us.
          </p>
          <CTAButton className="text-sm px-6 py-3" />
          <p className="text-sm text-muted-foreground mt-4">
            You will see your child's results before deciding anything further.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
