import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import reportImage from "@/assets/parent-report.jpg";
import understandingLevel from "@/assets/learning-checkup-1.png";
import rootCause from "@/assets/root-cause.png";
import teachFirst from "@/assets/teach-first.png";
import parentGuidance from "@/assets/parent-report.png";
import expectedOutcome from "@/assets/learning-checkup-3.png";

const YourChildsReport = () => (
  <Layout>
    {/* Hero */}
    <section className="py-8 md:py-12 bg-background">
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

    {/* Introduction to the walkthrough */}
    <section className="py-6 md:py-8 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
          Inside the report you receive
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The report shows what your child confidently knows and where they struggle, the specific skills preventing progress, and the first step they need to take to move forward. It also explains how Ruby will teach your child and how confidence changes as learning starts to make sense.
        </p>
      </div>
    </section>

    {/* 1. Understanding Level */}
    <section className="py-8 md:py-10 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl mb-2">Understanding Level</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          This shows what your child truly understands and where the gaps are. It is the first thing parents naturally look for.
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

    {/* 2. Root Cause */}
    <section className="py-8 md:py-10 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl mb-2">Root Cause</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Ruby identifies the specific concept causing ongoing difficulty, not just the symptom. This section answers: why is my child struggling?
        </p>
        <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
          <img
            src={rootCause}
            alt="Root Cause section of the learning diagnostic report"
            className="w-full"
          />
        </div>
      </div>
    </section>

    {/* 3. Learning Plan */}
    <section className="py-8 md:py-10 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl mb-2">Learning Plan</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          This becomes your child's personalised learning path. It answers: what happens next?
        </p>
        <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
          <img
            src={teachFirst}
            alt="What Ruby Will Teach First section of the report"
            className="w-full"
          />
        </div>
      </div>
    </section>

    {/* 4. Parent Guidance & Expected Outcome */}
    <section className="py-8 md:py-10 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl mb-2">Parent Guidance & Expected Outcome</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          How you help at home and what improvement looks like. This section answers: what will change?
        </p>
        <div className="space-y-5">
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
      </div>
    </section>

    {/* CTA */}
    <section className="py-8 md:py-12 bg-background text-center">
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
