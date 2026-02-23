import { Link } from "react-router-dom";

const CTAButton = ({ className = "" }: { className?: string }) => (
  <Link
    to="/your-childs-report"
    className={`inline-flex items-center justify-center text-base font-medium px-8 py-4 rounded-lg bg-cta text-cta-foreground hover:bg-cta-hover transition-colors shadow-md ${className}`}
  >
    Help my child understand
  </Link>
);

export default CTAButton;
