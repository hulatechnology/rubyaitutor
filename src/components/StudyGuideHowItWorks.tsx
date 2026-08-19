export type HowItWorksStep = {
    icon: string;
    title: string;
    text: string;
};

const StudyGuideHowItWorks = ({ steps, heading = true }: { steps: HowItWorksStep[]; heading?: boolean }) => (
    <section className={`text-center ${heading ? "py-14 md:py-20" : "pt-2 pb-10 md:pb-14"}`}>
        <div className="container mx-auto px-4 max-w-5xl">
            {heading && <h2 className="text-2xl md:text-3xl">How it works</h2>}
            <div className={`grid md:grid-cols-4 gap-9 md:gap-6 ${heading ? "mt-9" : ""}`}>
                {steps.map(({ icon, title, text }, i) => (
                    <div key={title} className="relative">
                        {i < steps.length - 1 && (
                            <div className="hidden md:block absolute top-[46px] left-[calc(50%+52px)] right-[calc(-50%+52px)] border-t-2 border-dashed border-border" />
                        )}
                        <div className="relative w-24 h-24 rounded-full bg-white shadow-md border border-border flex items-center justify-center mx-auto mb-3.5">
                            <span className="text-4xl leading-none">{icon}</span>
                            <span className="absolute -top-1 left-1/2 translate-x-[26px] w-[26px] h-[26px] rounded-full bg-primary text-primary-foreground text-[12px] font-extrabold flex items-center justify-center shadow-md">
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
