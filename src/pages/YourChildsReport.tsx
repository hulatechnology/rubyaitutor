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
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl mb-8">See what your child actually understands</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
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

    <section className="py-24 md:py-32 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl text-center mb-12">Understand your child's development</h2>
        <div className="space-y-5">
          {reportFeatures.map((f) => (
            <div key={f} className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border shadow-sm">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground leading-relaxed">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-28 md:py-36 bg-background text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-6">You don't have to guess anymore</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.
        </p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default YourChildsReport;
