import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="heading-display text-xl text-primary mb-3">Ruby</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Helping parents understand why their child struggles — and what to do about it.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-foreground">Explore</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
            <Link to="/why-children-struggle" className="hover:text-primary transition-colors">Why Children Struggle</Link>
            <Link to="/your-childs-report" className="hover:text-primary transition-colors">Your Child's Report</Link>
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-foreground">Get in Touch</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Have questions about your child's learning?<br />
            We're here to help.
          </p>
          <a href="mailto:hello@rubylearning.com" className="text-sm text-primary hover:underline mt-2 inline-block">
            hello@rubylearning.com
          </a>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ruby Learning. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
