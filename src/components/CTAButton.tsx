import { Link } from "react-router-dom";

const CTAButton = ({ className = "" }: { className?: string }) => (
  <Link
    to="/your-childs-report"
    className={`inline-flex items-center justify-center text-lg font-extrabold px-8 py-4 rounded-lg text-cta-foreground transition-all shadow-md hover:opacity-90 ${className}`}
    style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
  >
    Discover Their Learning Level
  </Link>
);

export default CTAButton;
