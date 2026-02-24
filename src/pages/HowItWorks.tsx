import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import { Search, ClipboardList, Route, Sparkles } from "lucide-react";
import rubyTeachingImg from "@/assets/ruby-teaching-interface.png";
import rootCauseImg from "@/assets/root-cause.png";
import teachFirstImg from "@/assets/teach-first.png";
import rubyChatImg from "@/assets/ruby-tutoring-chat.png";

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
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl mb-8">How Ruby helps your child learn</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Your child starts with a gentle learning check. Ruby uses it to see what makes sense and what doesn't, then guides them forward one step at a time.
        </p>
      </div>
    </section>

    <section className="py-14 md:py-20 bg-blue-tint">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-20 md:space-y-28">
          {steps.map(({ icon: Icon, title, desc, image, imageAlt }, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={title}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
              >
                {/* Text side */}
                <div className="md:w-2/5 shrink-0">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-primary-foreground">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>

                {/* Screenshot side */}
                <div className="md:w-3/5">
                  <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
                    <img
                      src={image}
                      alt={imageAlt}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-22 bg-background text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl mb-6">You don't have to guess anymore</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">In less than 10 questions you'll see exactly where your child is struggling and how to help them move forward.</p>
        <CTAButton />
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
