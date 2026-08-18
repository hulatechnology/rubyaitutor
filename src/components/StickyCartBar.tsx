import { ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { tierForCount, ctaGradient } from "@/data/pricing";

const StickyCartBar = () => {
    const { cart, cartOpen, setCartOpen } = useCart();
    const tier = tierForCount(cart.length);

    if (cart.length === 0 || cartOpen) return null;

    return (
        <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex items-center justify-between gap-3 px-5 py-4 rounded-2xl text-cta-foreground shadow-lg"
            style={ctaGradient}
        >
            <span className="text-sm font-extrabold">{cart.length} guide{cart.length > 1 ? "s" : ""} · R{tier?.price}</span>
            <span className="text-sm font-extrabold inline-flex items-center gap-1">Checkout <ArrowRight className="w-4 h-4" /></span>
        </button>
    );
};

export default StickyCartBar;
