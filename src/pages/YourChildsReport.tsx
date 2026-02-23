import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import reportImage from "@/assets/parent-report.jpg";
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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
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
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-coral-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl text-center mb-10">Understand your child's development</h2>
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
        <h2 className="text-3xl mb-4">You don't have to guess anymore</h2>
        <p className="text-muted-foreground mb-8">
          In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.
        </p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default YourChildsReport;
