import { useState } from "react";
import { ArrowRight, Mail, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { guides } from "@/data/studyGuides";
import {
    tiers,
    tierForCount,
    ctaGradient,
    AI_TUTOR_SIGNUP_URL,
} from "@/data/pricing";

const EMAIL_PATTERN =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─────────────────────────────────────────────────────────────────────────────
// Vercel API
// ─────────────────────────────────────────────────────────────────────────────
//
// Your Firebase/static website calls the API running in your Vercel app.
//
// DO NOT put PayFast merchant credentials here.
// They remain on the Vercel server.
// ─────────────────────────────────────────────────────────────────────────────

const PAYFAST_CHECKOUT_URL =
    "https://ruby-ai-tutor.vercel.app/api/payfast/study-guides";

const CartDrawer = () => {

    const {
        cart,
        cartOpen,
        setCartOpen,
        toggleCart,
        email,
        setEmail,
    } = useCart();

    const [
        checkoutStarted,
        setCheckoutStarted,
    ] = useState(false);

    const [
        emailError,
        setEmailError,
    ] = useState<string | null>(null);

    const [
        checkoutError,
        setCheckoutError,
    ] = useState<string | null>(null);

    if (!cartOpen) {
        return null;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Pricing
    // ─────────────────────────────────────────────────────────────────────────

    const tier =
        tierForCount(cart.length);

    const singlePrice =
        tiers[0].price;

    const savings =
        tier && cart.length > 1
            ? singlePrice * cart.length -
            tier.price
            : 0;

    // ─────────────────────────────────────────────────────────────────────────
    // Guides currently in the cart
    // ─────────────────────────────────────────────────────────────────────────

    const cartedGuides =
        guides.filter((g) =>
            cart.includes(g.id)
        );

    // ─────────────────────────────────────────────────────────────────────────
    // Checkout
    // ─────────────────────────────────────────────────────────────────────────

    const handleCheckout =
        async () => {

            // ─────────────────────────────────────────────────────────────────
            // Validate email
            // ─────────────────────────────────────────────────────────────────

            const cleanEmail =
                email.trim();

            if (
                !EMAIL_PATTERN.test(
                    cleanEmail
                )
            ) {
                setEmailError(
                    "Enter a valid email so we know where to send your guides."
                );

                return;
            }

            setEmailError(null);
            setCheckoutError(null);

            // ─────────────────────────────────────────────────────────────────
            // Make sure we have a valid cart
            // ─────────────────────────────────────────────────────────────────

            if (
                cart.length === 0
            ) {
                setCheckoutError(
                    "Your cart is empty."
                );

                return;
            }

            // ─────────────────────────────────────────────────────────────────
            // Four-guide bundle
            //
            // Your pricing file defines:
            //
            // 4 guides = R199 + AI Tutor
            //
            // Your existing behaviour is to send this customer to the
            // AI Tutor signup page instead of PayFast.
            // ─────────────────────────────────────────────────────────────────

            if (
                tier?.count === 4
            ) {
                window.location.href =
                    AI_TUTOR_SIGNUP_URL;

                return;
            }

            // ─────────────────────────────────────────────────────────────────
            // Start loading state
            // ─────────────────────────────────────────────────────────────────

            setCheckoutStarted(true);

            try {

                // ─────────────────────────────────────────────────────────────
                // Call Vercel API
                //
                // IMPORTANT:
                //
                // We intentionally DO NOT send:
                //
                // amountOverride
                // merchant_id
                // merchant_key
                // passphrase
                //
                // The server calculates the price from guideIds.
                // ─────────────────────────────────────────────────────────────

                const response =
                    await fetch(
                        PAYFAST_CHECKOUT_URL,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json",
                            },

                            body: JSON.stringify({
                                email:
                                    cleanEmail,

                                guideIds:
                                    cart,
                            }),
                        }
                    );

                // ─────────────────────────────────────────────────────────────
                // Read response
                // ─────────────────────────────────────────────────────────────

                let result: {
                    url?: string;
                    params?: Record<
                        string,
                        string
                    >;
                    redirect?: string;
                    error?: string;
                };

                try {
                    result =
                        await response.json();
                } catch {
                    throw new Error(
                        "The payment server returned an invalid response."
                    );
                }

                // ─────────────────────────────────────────────────────────────
                // API error
                // ─────────────────────────────────────────────────────────────

                if (
                    !response.ok
                ) {
                    throw new Error(
                        result?.error ||
                        "Unable to start PayFast checkout."
                    );
                }

                // ─────────────────────────────────────────────────────────────
                // The API may return a redirect
                //
                // This is primarily for the 4-guide bundle if someone somehow
                // reaches this endpoint directly.
                // ─────────────────────────────────────────────────────────────

                if (
                    result.redirect
                ) {
                    window.location.href =
                        result.redirect;

                    return;
                }

                // ─────────────────────────────────────────────────────────────
                // Validate PayFast response
                // ─────────────────────────────────────────────────────────────

                if (
                    !result.url ||
                    !result.params
                ) {
                    throw new Error(
                        "Invalid PayFast checkout response."
                    );
                }

                // ─────────────────────────────────────────────────────────────
                // Create PayFast form
                //
                // PayFast expects the checkout parameters to be POSTed to its
                // /eng/process endpoint.
                // ─────────────────────────────────────────────────────────────

                const form =
                    document.createElement(
                        "form"
                    );

                form.method =
                    "POST";

                form.action =
                    result.url;

                form.style.display =
                    "none";

                // ─────────────────────────────────────────────────────────────
                // Add all signed PayFast parameters
                // ─────────────────────────────────────────────────────────────

                Object.entries(
                    result.params
                ).forEach(
                    ([key, value]) => {

                        const input =
                            document.createElement(
                                "input"
                            );

                        input.type =
                            "hidden";

                        input.name =
                            key;

                        input.value =
                            String(value);

                        form.appendChild(
                            input
                        );
                    }
                );

                // ─────────────────────────────────────────────────────────────
                // Submit to PayFast
                // ─────────────────────────────────────────────────────────────

                document.body.appendChild(
                    form
                );

                form.submit();

            } catch (error) {

                console.error(
                    "PayFast checkout error:",
                    error
                );

                setCheckoutStarted(
                    false
                );

                setCheckoutError(
                    error instanceof Error
                        ? error.message
                        : "Unable to connect to PayFast. Please try again."
                );
            }
        };

    // ─────────────────────────────────────────────────────────────────────────
    // Close drawer
    // ─────────────────────────────────────────────────────────────────────────

    const close = () => {

        setCartOpen(false);

        setCheckoutStarted(
            false
        );

        setEmailError(
            null
        );

        setCheckoutError(
            null
        );
    };

    // ─────────────────────────────────────────────────────────────────────────
    // Render
    // ─────────────────────────────────────────────────────────────────────────

    return (
        <div className="fixed inset-0 z-50 flex justify-end">

            {/* Background overlay */}

            <div
                className="absolute inset-0 bg-black/40"
                onClick={close}
            />

            {/* Drawer */}

            <div className="relative w-full sm:w-[420px] h-full bg-card shadow-2xl flex flex-col animate-fade-up">

                {/* ───────────────────────────────────────────────────────────
                    Header
                ─────────────────────────────────────────────────────────── */}

                <div className="flex items-center justify-between px-6 py-5 border-b border-border">

                    <h3 className="text-lg font-extrabold">
                        Your cart
                    </h3>

                    <button
                        type="button"
                        onClick={close}
                        aria-label="Close cart"
                    >
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>

                </div>

                {/* ───────────────────────────────────────────────────────────
                    Cart items
                ─────────────────────────────────────────────────────────── */}

                <div className="flex-1 overflow-y-auto px-6 py-5">

                    {cartedGuides.length === 0 ? (

                        <div>

                            <p className="text-sm text-muted-foreground mb-4">
                                Your cart is empty. Add a study guide to get started.
                            </p>

                            <div className="flex flex-wrap gap-2">

                                {guides.map(
                                    (g) => (
                                        <span
                                            key={g.id}
                                            className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                                        >
                                            {g.name}
                                        </span>
                                    )
                                )}

                            </div>

                        </div>

                    ) : (

                        <ul className="space-y-3">

                            {cartedGuides.map(
                                (g) => (

                                    <li
                                        key={g.id}
                                        className="flex items-center gap-3"
                                    >

                                        {/* Cover */}

                                        {g.cover ? (

                                            <img
                                                src={g.cover}
                                                alt=""
                                                className="w-12 h-12 rounded-lg object-cover border border-border"
                                            />

                                        ) : (

                                            <div
                                                className="w-12 h-12 rounded-lg border border-border flex items-center justify-center"
                                                style={{
                                                    background:
                                                        `hsl(${g.accent} / 0.12)`,
                                                }}
                                            >

                                                <g.icon
                                                    className="w-5 h-5"
                                                    style={{
                                                        color:
                                                            `hsl(${g.accent})`,
                                                    }}
                                                />

                                            </div>

                                        )}

                                        {/* Guide details */}

                                        <div className="flex-1 min-w-0">

                                            <p className="text-sm font-extrabold">
                                                {g.name}
                                            </p>

                                            <p className="text-xs text-muted-foreground">
                                                Study guide + prep paper + memo
                                            </p>

                                        </div>

                                        {/* Remove */}

                                        <button
                                            type="button"
                                            onClick={() =>
                                                toggleCart(
                                                    g.id
                                                )
                                            }
                                            className="text-xs font-extrabold text-muted-foreground hover:text-primary"
                                        >
                                            Remove
                                        </button>

                                    </li>

                                )
                            )}

                        </ul>

                    )}

                </div>

                {/* ───────────────────────────────────────────────────────────
                    Checkout section
                ─────────────────────────────────────────────────────────── */}

                {cartedGuides.length > 0 && (

                    <div className="border-t border-border px-6 py-5">

                        {/* Bonus */}

                        {tier?.bonus && (

                            <p className="text-sm font-extrabold text-primary mb-2">
                                {tier.bonus}
                            </p>

                        )}

                        {/* Price */}

                        <div className="flex items-center justify-between mb-1">

                            <span className="text-sm text-muted-foreground">
                                {tier?.label}
                            </span>

                            <span className="text-2xl font-extrabold">
                                R{tier?.price}
                            </span>

                        </div>

                        {/* Savings */}

                        {savings > 0 && (

                            <p className="text-xs text-primary font-semibold mb-4">
                                You save R{savings} vs buying separately
                            </p>

                        )}

                        {savings === 0 && (
                            <div className="mb-4" />
                        )}

                        {/* ───────────────────────────────────────────────────
                            Email
                        ─────────────────────────────────────────────────── */}

                        <label
                            htmlFor="cart-email"
                            className="block text-xs font-extrabold text-foreground/90 mb-1.5"
                        >
                            Where should we send your guides?
                        </label>

                        <div className="relative mb-1">

                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

                            <input
                                id="cart-email"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                value={email}
                                disabled={
                                    checkoutStarted
                                }
                                onChange={(e) => {

                                    setEmail(
                                        e.target.value
                                    );

                                    if (
                                        emailError
                                    ) {
                                        setEmailError(
                                            null
                                        );
                                    }

                                    if (
                                        checkoutError
                                    ) {
                                        setCheckoutError(
                                            null
                                        );
                                    }
                                }}
                                className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm font-semibold bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 ${emailError
                                        ? "border-destructive"
                                        : "border-border"
                                    }`}
                            />

                        </div>

                        {/* Email error */}

                        {emailError ? (

                            <p className="text-xs text-destructive font-semibold mb-3">
                                {emailError}
                            </p>

                        ) : (

                            <p className="text-xs text-muted-foreground mb-3">
                                Your PDFs are emailed to you.
                            </p>

                        )}

                        {/* ───────────────────────────────────────────────────
                            Checkout/API error
                        ─────────────────────────────────────────────────── */}

                        {checkoutError && (

                            <p className="text-xs text-destructive font-semibold mb-3">
                                {checkoutError}
                            </p>

                        )}

                        {/* ───────────────────────────────────────────────────
                            Checkout button
                        ─────────────────────────────────────────────────── */}

                        <button
                            type="button"
                            onClick={
                                handleCheckout
                            }
                            disabled={
                                checkoutStarted
                            }
                            className="w-full inline-flex items-center justify-center gap-2 text-base font-extrabold px-6 py-3.5 rounded-full text-cta-foreground shadow-md hover:opacity-90 transition-all disabled:opacity-60"
                            style={
                                ctaGradient
                            }
                        >

                            {checkoutStarted
                                ? "Connecting to PayFast..."
                                : "Checkout"}

                            {!checkoutStarted && (

                                <ArrowRight className="w-4 h-4" />

                            )}

                        </button>

                        {/* Payment message */}

                        <p className="text-center text-[11px] text-muted-foreground font-semibold pt-2.5">
                            🔒 Once-off payment, not a subscription
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
};

export default CartDrawer;