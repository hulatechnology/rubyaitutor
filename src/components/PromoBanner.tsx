import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const PromoBanner = () => (
  <div
    className="w-full text-cta-foreground"
    style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
  >
    <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-center">
      <p className="text-sm md:text-base font-extrabold flex items-center gap-2">
        <Sparkles className="w-4 h-4" />
        Matrics! Get your free 2026 June Exams Study Guide here!
      </p>
      <Link
        to="/matrics"
        className="text-sm md:text-base font-extrabold underline underline-offset-4 hover:opacity-80 transition-opacity"
      >
        Get it now
      </Link>
    </div>
  </div>
);

export default PromoBanner;
