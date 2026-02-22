import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import heroImage from "@/assets/hero-illustration.jpg";
import childImage from "@/assets/child-learning.jpg";
import { Heart, BookOpen, TrendingUp, Shield } from "lucide-react";

const testimonials = [
  {
    quote: "I finally understand why my daughter was struggling. It wasn't effort — it was a gap in her foundation we didn't know about.",
    name: "Sarah M.",
    role: "Parent of a Grade 7 learner",
  },
  {
    quote: "Ruby showed us exactly where to focus. Within weeks, my son's confidence started to come back.",
    name: "James T.",
    role: "Parent of a Grade 5 learner",
  },
  {
    quote: "No more guessing. We know what the problem is and we have a clear path forward.",
    name: "Priya K.",
    role: "Parent of a Grade 9 learner",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">For parents who care deeply</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Your child studies hard.<br />
                <span className="text-primary">Why aren't they improving?</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Ruby finds the hidden gaps in your child's learning foundation — the ones
                that textbooks and tutors often miss — and gives you a clear path to help them grow.
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

      {/* Pain point */}
      <section className="py-16 bg-coral-light">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl mb-6">
            It's not about studying harder
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most children who struggle aren't lazy — they're building on shaky ground.
            When early concepts aren't properly understood, everything built on top of them
            feels impossible. Ruby identifies exactly where the cracks are.
          </p>
        </div>
      </section>

      {/* How Ruby helps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-14">
            How Ruby helps your child
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Diagnoses the real problem", desc: "Ruby pinpoints the exact concepts your child hasn't fully grasped — even from years ago." },
              { icon: Heart, title: "Understands, not judges", desc: "No scores to stress about. Ruby is gentle, patient, and built to encourage your child." },
              { icon: TrendingUp, title: "Builds from the ground up", desc: "A personalised learning path that fills gaps in the right order, so progress actually sticks." },
              { icon: Shield, title: "Restores confidence", desc: "When children understand the 'why,' they stop doubting themselves and start believing again." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-14">
            What parents are saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background rounded-xl p-8 border border-border">
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <img src={childImage} alt="Child learning" className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg" />
          <h2 className="text-3xl md:text-4xl mb-4">
            Every child deserves to understand
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Start with a free learning checkup. It takes just a few minutes and could change everything.
          </p>
          <CTAButton />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
