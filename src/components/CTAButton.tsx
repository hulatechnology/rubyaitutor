import { Link } from "react-router-dom";

const CTAButton = ({ className = "" }: { className?: string }) => (
  <Link
    to="/your-childs-report"
    className={`inline-flex items-center justify-center text-lg font-extrabold px-6 py-4 rounded-full text-cta-foreground transition-all shadow-md hover:opacity-90 ${className}`}
    style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
  >
    Try Now!
  </Link>
);

export default CTAButton;
