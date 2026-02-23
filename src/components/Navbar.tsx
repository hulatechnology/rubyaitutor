import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/why-children-struggle", label: "Why Children Struggle" },
  { to: "/your-childs-report", label: "Your Child's Report" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-primary backdrop-blur-md border-b border-primary/80">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="heading-display text-2xl text-primary-foreground font-bold tracking-tight">
          Ruby
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary-foreground ${
                location.pathname === link.to ? "text-primary-foreground" : "text-primary-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/your-childs-report"
            className="inline-flex items-center justify-center text-sm font-medium px-6 py-2.5 rounded-lg bg-cta text-cta-foreground hover:bg-cta-hover transition-colors"
          >
            Start a Learning Checkup
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-primary/60 bg-primary px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to ? "text-primary-foreground" : "text-primary-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/your-childs-report"
            onClick={() => setOpen(false)}
            className="mt-4 w-full inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg bg-cta text-cta-foreground hover:bg-cta-hover transition-colors"
          >
            Start a Learning Checkup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
