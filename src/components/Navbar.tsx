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
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="heading-display text-2xl text-cta font-bold tracking-tight">
          Ruby
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-cta ${
                location.pathname === link.to ? "text-cta" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/your-childs-report"
            className="inline-flex items-center justify-center text-sm font-medium px-6 py-2.5 rounded-lg text-cta-foreground hover:opacity-90 transition-all"
            style={{ background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" }}
          >
            Discover Their Learning Level
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-6 pt-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to ? "text-cta" : "text-foreground"
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
            Discover Their Learning Level
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
