import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { guides } from "@/data/studyGuides";
import { tiers, tierForCount, ctaGradient } from "@/data/pricing";

const CartDrawer = () => {
    const { cart, cartOpen, setCartOpen, toggleCart } = useCart();
    const [checkoutStarted, setCheckoutStarted] = useState(false);

    if (!cartOpen) return null;

    const tier = tierForCount(cart.length);
    const singlePrice = tiers[0].price;
    const savings = tier && cart.length > 1 ? singlePrice * cart.length - tier.price : 0;
    const cartedGuides = guides.filter((g) => cart.includes(g.id));

    const close = () => {
        setCartOpen(false);
        setCheckoutStarted(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black/40" onClick={close} />
            <div className="relative w-full sm:w-[420px] h-full bg-card shadow-2xl flex flex-col animate-fade-up">
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                    <h3 className="text-lg font-extrabold">Your cart</h3>
                    <button type="button" onClick={close} aria-label="Close cart">
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-5">
                    {cartedGuides.length === 0 ? (
                        <div>
                            <p className="text-sm text-muted-foreground mb-4">Your cart is empty. Add a study guide to get started.</p>
                            <div className="flex flex-wrap gap-2">
                                {guides.map((g) => (
                                    <span key={g.id} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                                        {g.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <ul className="space-y-3">
                            {cartedGuides.map((g) => (
                                <li key={g.id} className="flex items-center gap-3">
                                    {g.cover ? (
                                        <img src={g.cover} alt="" className="w-12 h-12 rounded-lg object-cover border border-border" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-lg border border-border flex items-center justify-center" style={{ background: `hsl(${g.accent} / 0.12)` }}>
                                            <g.icon className="w-5 h-5" style={{ color: `hsl(${g.accent})` }} />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <p className="text-sm font-extrabold">{g.name}</p>
                                        <p className="text-xs text-muted-foreground">Study guide + prep paper + memo</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => toggleCart(g.id)}
                                        className="text-xs font-extrabold text-muted-foreground hover:text-primary"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {cartedGuides.length > 0 && (
                    <div className="border-t border-border px-6 py-5">
                        {tier?.bonus && <p className="text-sm font-extrabold text-primary mb-2">{tier.bonus}</p>}
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-muted-foreground">{tier?.label}</span>
                            <span className="text-2xl font-extrabold">R{tier?.price}</span>
                        </div>
                        {savings > 0 && (
                            <p className="text-xs text-primary font-semibold mb-4">You save R{savings} vs buying separately</p>
                        )}
                        {savings === 0 && <div className="mb-4" />}
                        <button
                            type="button"
                            onClick={() => setCheckoutStarted(true)}
                            className="w-full inline-flex items-center justify-center gap-2 text-base font-extrabold px-6 py-3.5 rounded-full text-cta-foreground shadow-md hover:opacity-90 transition-all"
                            style={ctaGradient}
                        >
                            Checkout <ArrowRight className="w-4 h-4" />
                        </button>
                        <p className="text-center text-[11px] text-muted-foreground font-semibold pt-2.5">
                            🔒 Once-off payment — not a subscription
                        </p>
                        {checkoutStarted && (
                            <p className="text-center text-xs text-muted-foreground pt-3">
                                Checkout isn't connected yet — this is a design preview.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
