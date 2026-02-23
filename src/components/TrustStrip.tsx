import { Shield, UserX, BookOpen, Home } from "lucide-react";

const indicators = [
  { icon: Shield, label: "Child-safe private learning environment" },
  { icon: UserX, label: "No public profiles or messaging" },
  { icon: BookOpen, label: "Guided educational learning sessions" },
  { icon: Home, label: "Designed for home learning support" },
];

const TrustStrip = () => (
  <section className="py-10 bg-muted border-y border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-8 md:gap-14">
        {indicators.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5 text-muted-foreground">
            <item.icon className="w-4 h-4 shrink-0" />
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
