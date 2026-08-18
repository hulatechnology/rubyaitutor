import type { LucideIcon } from "lucide-react";

export type HowItWorksStep = {
    icon: LucideIcon;
    title: string;
    text: string;
};

const StudyGuideHowItWorks = ({ steps }: { steps: HowItWorksStep[] }) => (
    <section className="py-14 md:py-20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl">How it works</h2>
            <div className="grid md:grid-cols-4 gap-9 md:gap-6 mt-9">
                {steps.map(({ icon: Icon, title, text }, i) => (
                    <div key={title} className="relative">
                        {i < steps.length - 1 && (
                            <div className="hidden md:block absolute top-[34px] left-[calc(50%+40px)] right-[calc(-50%+40px)] border-t-2 border-dashed border-border" />
                        )}
                        <div className="relative w-[68px] h-[68px] rounded-full bg-white shadow-md border border-border flex items-center justify-center mx-auto mb-3.5">
                            <Icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
                            <span className="absolute -top-1 left-1/2 translate-x-[18px] w-[22px] h-[22px] rounded-full bg-primary text-primary-foreground text-[11px] font-extrabold flex items-center justify-center shadow-md">
                                {i + 1}
                            </span>
                        </div>
                        <h4 className="text-[15.5px] font-bold mb-1">{title}</h4>
                        <p className="text-[13px] text-muted-foreground">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default StudyGuideHowItWorks;
