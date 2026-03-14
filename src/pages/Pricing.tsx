import Layout from "@/components/Layout";
import { Check } from "lucide-react";

const betaFeatures = [
  "Early access to Ruby AI Tutor",
  "See exactly where your child's learning gaps are",
  "Guided support that builds real understanding",
  "Help shape the future of the platform",
  "Founding family pricing at launch",
];

const whyReasons = [
  "Most tutoring costs R800 – R2000 per month",
  "Parents often cannot see why their child is struggling",
  "Ruby identifies the exact concept your child missed",
  "Your child receives step by step guidance instead of answers",
];

const Pricing = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-16 md:pt-20 pb-10 md:pb-12">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl mb-6">
          Parents spend over R1000 per month on tutoring.
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          Most tutoring focuses on repeating homework or memorising answers. Ruby identifies the exact learning gap and guides your child step by step so they truly understand the work.
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium mb-6">
          Support that costs less and helps your child learn more effectively is coming soon.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          On average, South African parents spend R1000+ per month on tutoring. Ruby is being built to provide personalised learning support at a fraction of that cost.
        </p>
      </div>
    </section>

    {/* Beta card */}
    <section className="pb-16">
      <div className="container mx-auto px-4">
        {/* Why families are joining */}
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl text-center mb-8">Why families are joining Ruby</h2>
          <ul className="space-y-3 max-w-lg mx-auto">
            {whyReasons.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-xl mx-auto rounded-xl p-8 border-2 border-primary bg-blue-tint shadow-lg text-center">
          <h2 className="text-2xl md:text-3xl mb-3">Join the Ruby Beta</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Ruby is currently in beta as we prepare for launch.
            <br /><br />
            Families who join the waiting list will receive early access to the platform, the opportunity to help shape the product, and priority access when subscriptions open.
            <br /><br />
            Beta families will also receive a special founding price when Ruby launches.
          </p>

          <ul className="space-y-3 mb-10 text-left max-w-sm mx-auto">
            {betaFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/27652985458?text=Hi%2C%20I%20would%20like%20to%20join%20the%20Ruby%20AI%20Tutor%20beta%20waiting%20list"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-lg font-extrabold px-10 py-5 rounded-lg text-cta-foreground transition-all shadow-lg hover:opacity-90"
            style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
          >
            Join the Beta Waiting List
          </a>

          <p className="text-xs text-muted-foreground mt-4">
            No commitment required. You will be notified when beta access opens.
          </p>
        </div>

        {/* Why families are joining */}
        <div className="max-w-2xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl text-center mb-8">Why families are joining Ruby</h2>
          <ul className="space-y-3 max-w-lg mx-auto">
            {whyReasons.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing line */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Many families start with the learning checkup to understand where their child's learning gaps began.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2 font-medium">
            Ruby will open to beta families first. Join the waiting list to secure early access.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
