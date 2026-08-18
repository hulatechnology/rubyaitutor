import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { tierForCount } from "@/data/pricing";

const CartNavButton = () => {
    const { cart, setCartOpen } = useCart();
    const tier = tierForCount(cart.length);

    return (
        <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:border-primary/40 transition-all"
        >
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span className="text-sm font-extrabold">
                {cart.length > 0 ? `${cart.length} · R${tier?.price}` : "Cart"}
            </span>
            {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[11px] font-extrabold flex items-center justify-center">
                    {cart.length}
                </span>
            )}
        </button>
    );
};

export default CartNavButton;
