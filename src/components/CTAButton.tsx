import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTAButton = ({ className = "" }: { className?: string }) => (
  <Button asChild size="lg" className={`text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all ${className}`}>
    <Link to="/your-childs-report">Check your child's learning level</Link>
  </Button>
);

export default CTAButton;
