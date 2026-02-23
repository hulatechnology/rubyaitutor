import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary border-t border-primary/80 py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="heading-display text-xl text-primary-foreground mb-3">Ruby</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            Helping parents understand why their child struggles — and what to do about it.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-primary-foreground">Explore</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/how-it-works" className="hover:text-primary-foreground transition-colors">How It Works</Link>
            <Link to="/why-children-struggle" className="hover:text-primary-foreground transition-colors">Why Children Struggle</Link>
            <Link to="/your-childs-report" className="hover:text-primary-foreground transition-colors">Your Child's Report</Link>
            <Link to="/pricing" className="hover:text-primary-foreground transition-colors">Pricing</Link>
            <Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-primary-foreground">Get in Touch</h4>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Have questions about your child's learning?<br />
            We're here to help.
          </p>
          <a href="mailto:hello@rubylearning.com" className="text-sm text-primary-foreground hover:underline mt-2 inline-block">
            hello@rubylearning.com
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Ruby Learning. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
