import { Link } from "react-router-dom";

const PromoBanner = () => (
  <div className="w-full text-white" style={{ backgroundColor: "#0339f8" }}>
    <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-center">
      <p className="text-sm md:text-base font-extrabold flex items-center gap-2">
        <span aria-hidden="true">🚀</span>
        Matrics! Get your <span className="underline underline-offset-4 text-yellow-300">FREE</span> 2026 June Exams Study Guide here! <span aria-hidden="true">👉</span>
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
