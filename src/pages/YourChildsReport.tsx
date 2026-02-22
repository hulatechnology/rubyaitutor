import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import reportImage from "@/assets/parent-report.jpg";
import { CheckCircle } from "lucide-react";

const reportFeatures = [
  "A clear summary of your child's current understanding",
  "The exact foundational gaps holding them back",
  "Which concepts to work on first, in the right order",
  "Personalised recommendations for how to practise",
  "A confidence assessment — how your child feels about learning",
];

const YourChildsReport = () => (
  <Layout>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl mb-6">Your Child's Learning Report</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              After the checkup, you'll receive a detailed but easy-to-read report
              that shows you exactly where your child stands — and what to do next.
            </p>
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

    <section className="py-16 bg-coral-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl text-center mb-10">What's in the report</h2>
        <div className="space-y-5">
          {reportFeatures.map((f) => (
            <div key={f} className="flex items-start gap-4 bg-background rounded-lg p-5 border border-border">
              <CheckCircle className="w-6 h-6 text-sage shrink-0 mt-0.5" />
              <p className="text-foreground">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-4">Clarity changes everything</h2>
        <p className="text-muted-foreground mb-8">
          When you know what the problem is, the right solution becomes obvious.
        </p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default YourChildsReport;
