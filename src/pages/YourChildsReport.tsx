import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import reportImage from "@/assets/skill_map.png";
import understandingLevel from "@/assets/understanding-level-replace.png";
import rootCause from "@/assets/root-cause-replace.png";
import teachFirst from "@/assets/next-skill.png";
import parentGuidanceOutcome from "@/assets/parent-guidance-replace.png";

const YourChildsReport = () => (
  <Layout>
    {/* Hero */}
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl mb-6">See what your child actually understands</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ruby turns your child's answers into a clear explanation of their strengths, their gaps, and how to support them at home.
            </p>
            <CTAButton />
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              The report is written in clear language and can be delivered in your preferred home language.
            </p>
          </div>
          <div>
            <img
              src={reportImage}
              alt="Parent reviewing child's learning report"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Introduction to the walkthrough */}
    <section className="py-4 md:py-8 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-xs font-medium tracking-widest text-foreground uppercase mb-3 text-center">
          Inside the report you receive
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The report shows what your child confidently knows and where they struggle, the specific skills preventing progress, and the first step they need to take to move forward. It also explains how Ruby will teach your child and how confidence changes as learning starts to make sense.
        </p>
      </div>
    </section>

    {/* 1. Understanding Level */}
    <section className="py-5 md:py-10">
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
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl mb-2">Learning Plan</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          This becomes your child's personalised learning path. It answers: what happens next?
        </p>
        <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
          <img
            src={teachFirst}
            alt="What Ruby Will Teach First section of the report"
            className="w-full h-auto object-contain"
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
        <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
          <img
            src={parentGuidanceOutcome}
            alt="Parent Guidance and Expected Outcome section of the report"
            className="w-full"
          />
        </div>
      </div>
    </section>

    {/* WhatsApp hint */}
    <section className="py-6 bg-blue-tint text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Not sure what the report means?{" "}
          <a
            href="https://wa.me/27652985458?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20Ruby%20AI%20Tutor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Chat with us on WhatsApp
          </a>{" "}
          and we'll walk you through it.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-8 md:py-12 text-center">
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
