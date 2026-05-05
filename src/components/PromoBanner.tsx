import { Link } from "react-router-dom";

const PromoBanner = () => (
  <div className="w-full text-white" style={{ backgroundColor: "#0339f8" }}>
        <div className="container mx-auto px-4 py-2 text-center text-sm md:text-base font-extrabold leading-snug">
            🚀 Matrics! Get your <span className="underline underline-offset-4 text-yellow-300">FREE</span> 2026 June Exams Study Guide here! 👉{" "}
      <Link
        to="/matrics"
                className="underline underline-offset-4 text-yellow-300 hover:opacity-80 transition-opacity whitespace-nowrap"
      >
        Get it now
      </Link>
    </div>
  </div>
);

export default PromoBanner;
