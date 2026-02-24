import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import reportImage from "@/assets/parent-report.jpg";
import understandingLevel from "@/assets/learning-checkup-1.png";
import rootCause from "@/assets/root-cause.png";
import teachFirst from "@/assets/teach-first.png";
import parentGuidance from "@/assets/parent-report.png";
import expectedOutcome from "@/assets/learning-checkup-3.png";
import { CheckCircle } from "lucide-react";

const reportFeatures = [
  "What your child confidently knows and where they struggle",
  "The specific skills preventing progress",
  "The first step your child needs to take to move forward",
  "How Ruby will teach your child moving forward",
  "How confidence changes as learning starts to make sense",
];

const YourChildsReport = () => (
  <Layout>
    {/* Hero */}
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-3">
              Sample Learning Diagnostic Report
            </p>
            <h1 className="text-4xl md:text-5xl mb-6">See what your child actually understands</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ruby turns your child's answers into a clear explanation of their strengths, their gaps, and how to support them at home.
            </p>
            <CTAButton />
          </div>
          <div>
            <img
              src={reportImage}
              alt="Parent reviewing child's learning report"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Report preview — Understanding Level */}
    <section className="py-10 md:py-14 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">
          Inside the report you receive
        </p>
        <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
          <img
            src={understandingLevel}
            alt="Understanding Level section of the learning diagnostic report"
            className="w-full"
          />
        </div>
      </div>
    </section>

    {/* Checklist / report sections */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl text-center mb-8">Understand your child's development</h2>
        <div className="bg-card border border-border rounded-lg shadow-sm divide-y divide-border">
          {reportFeatures.map((f) => (
            <div key={f} className="flex items-start gap-4 px-6 py-5">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground leading-relaxed">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Second report preview — Root Cause + Teaching Plan */}
    <section className="py-10 md:py-14 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl space-y-6">
        <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
          <img
            src={rootCause}
            alt="Root Cause section of the learning diagnostic report"
            className="w-full"
          />
        </div>
        <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
          <img
            src={teachFirst}
            alt="What Ruby Will Teach First section of the report"
            className="w-full"
          />
        </div>
        <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
          <img
            src={parentGuidance}
            alt="Parent Guidance section of the report"
            className="w-full"
          />
        </div>
        <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
          <img
            src={expectedOutcome}
            alt="Expected Outcome section of the report"
            className="w-full"
          />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 md:py-16 bg-background text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-6">You don't have to guess anymore</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.
        </p>
        <CTAButton className="px-10 py-5 text-lg shadow-lg" />
      </div>
    </section>
  </Layout>
);

export default YourChildsReport;
