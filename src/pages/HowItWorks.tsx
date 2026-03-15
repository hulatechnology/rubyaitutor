import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import { Search, ClipboardList, Route, Sparkles } from "lucide-react";
import rubyTeachingImg from "@/assets/dds-2.png";
import rootCauseImg from "@/assets/gap.png";
import teachFirstImg from "@/assets/learning-plan.png";
import rubyChatImg from "@/assets/new-textbox-2.png";
import heroChatImg from "@/assets/ruby-chat-preview.png";

const steps = [
  {
    icon: Search,
    title: "A short learning check",
    desc: "Ruby asks simple questions to understand how your child is thinking. No scores, no pressure.",
    image: rubyTeachingImg,
    imageAlt: "Ruby learning check interface showing a maths question with submit button",
  },
  {
    icon: ClipboardList,
    title: "Missing concepts are discovered",
    desc: "Ruby identifies the exact ideas your child didn't fully grasp, even from earlier grades.",
    image: rootCauseImg,
    imageAlt: "Diagnostic report showing root cause analysis of learning gaps",
  },
  {
    icon: Route,
    title: "A clear learning path is created",
    desc: "You get clear guidance showing exactly how your child will catch up.",
    image: teachFirstImg,
    imageAlt: "Personalised learning plan showing what Ruby will teach first",
  },
  {
    icon: Sparkles,
    title: "Understanding is rebuilt",
    desc: "Ruby teaches the missing foundations step by step so new schoolwork becomes easier to follow.",
    image: rubyChatImg,
    imageAlt: "Ruby tutoring chat showing step-by-step algebra explanation",
  },
];

const HowItWorks = () => (
  <Layout>
    {/* Hero — two-column with chat preview */}
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left: text */}
          <div className="md:w-2/5 shrink-0">
            <h1 className="text-4xl md:text-5xl mb-4">How Ruby helps <span className="text-primary">your child learn</span></h1>
            <p className="text-sm text-muted-foreground mb-6">No tests, no pressure. Ruby guides your child step by step.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your child starts with a gentle learning check. Ruby uses it to see what makes sense and what doesn't, then guides them forward one step at a time.
            </p>
          </div>
          {/* Right: large chat preview */}
          <div className="md:w-3/5">
            <img
              src={heroChatImg}
              alt="Ruby tutoring chat showing a child's first learning session"
              className="w-full h-auto block object-contain"
              style={{ filter: "drop-shadow(0 12px 28px rgba(26, 46, 108, 0.12))" }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Steps — consistent left-text, right-image */}
    <section className="py-8 md:py-20 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-8 md:space-y-20">
          {steps.map(({ icon: Icon, title, desc, image, imageAlt }, i) => (
            <div
              key={title}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-center"
            >
              {/* Text — always left */}
              <div className="md:w-2/5 shrink-0">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>

              {/* Image — always right */}
              <div className="md:w-3/5">
                <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-auto block object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Closing CTA */}
    <section className="py-8 md:py-22 text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-6">You don't have to guess anymore</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.</p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
