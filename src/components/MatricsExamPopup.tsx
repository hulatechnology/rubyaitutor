import { useEffect, useState } from "react";
import { X, ShoppingCart, Clock, Copy, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ctaGradient, tiers, AI_TUTOR_SIGNUP_URL } from "@/data/pricing";
import rubyLogo from "@/assets/ruby-logo.png";

// Life Orientation (LO CAT) exam — Tuesday 1 September 2026, 09:00 SAST (UTC+2).
const EXAM_AT = new Date("2026-09-01T09:00:00+02:00");

// Shown once per browser session.
const SESSION_KEY = "ruby-matric-exam-popup";

const VOUCHER = "RUBY20";
const LO_GUIDE_ID = "lifeorientation";

type Remaining = { days: number; hours: number; minutes: number; done: boolean };

function remainingUntil(target: Date): Remaining {
    const ms = target.getTime() - Date.now();
    if (ms <= 0) return { days: 0, hours: 0, minutes: 0, done: true };
    const totalMinutes = Math.floor(ms / 60000);
    return {
        days: Math.floor(totalMinutes / 1440),
        hours: Math.floor((totalMinutes % 1440) / 60),
        minutes: totalMinutes % 60,
        done: false,
    };
}

const MatricsExamPopup = () => {
    const { cart, toggleCart, setCartOpen, setVoucherCode } = useCart();

    const [open, setOpen] = useState(false);
    const [left, setLeft] = useState<Remaining>(() => remainingUntil(EXAM_AT));
    const [copied, setCopied] = useState(false);

    const loInCart = cart.includes(LO_GUIDE_ID);
    const singlePrice = tiers[0].price;

    // Decide whether to show, shortly after load.
    useEffect(() => {
        if (remainingUntil(EXAM_AT).done) return;
        let seen = false;
        try {
            seen = sessionStorage.getItem(SESSION_KEY) === "seen";
        } catch {
            seen = false;
        }
        if (seen) return;
        const t = setTimeout(() => setOpen(true), 1200);
        return () => clearTimeout(t);
    }, []);

    // Live countdown.
    useEffect(() => {
        if (!open) return;
        const id = setInterval(() => {
            const next = remainingUntil(EXAM_AT);
            setLeft(next);
            if (next.done) setOpen(false);
        }, 1000);
        return () => clearInterval(id);
    }, [open]);

    const dismiss = () => {
        try {
            sessionStorage.setItem(SESSION_KEY, "seen");
        } catch {
            /* private mode — fine, it just shows again next load */
        }
        setOpen(false);
    };

    const addLoAndOpenCart = () => {
        if (!loInCart) toggleCart(LO_GUIDE_ID);
        setVoucherCode(VOUCHER);
        dismiss();
        setCartOpen(true);
    };

    const getFullBundle = () => {
        setVoucherCode(VOUCHER);
        dismiss();
        window.location.href = AI_TUTOR_SIGNUP_URL;
    };

    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(VOUCHER);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* clipboard blocked — the code is written right there to type */
        }
    };

    if (!open) return null;

    const bundlePrice = tiers[3].price;

    return (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-3 sm:p-4">
            <div className="absolute inset-0 bg-black/50" onClick={dismiss} />

            <div className="relative w-full sm:max-w-md bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-up">
                <button
                    type="button"
                    onClick={dismiss}
                    aria-label="Close"
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center"
                >
                    <X className="w-4 h-4 text-muted-foreground" />
                </button>

                {/* Countdown header */}
                <div className="px-6 pt-6 pb-5 text-white" style={ctaGradient}>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wide bg-white/20 rounded-full px-2.5 py-1 mb-3">
                        <Clock className="w-3.5 h-3.5" /> Life Orientation (LO CAT)
                    </div>
                    <p className="text-sm font-semibold text-white/85 mb-2">
                        Exam starts Tuesday 1 September, 9am
                    </p>
                    <div className="flex gap-2">
                        {[
                            { v: left.days, l: "days" },
                            { v: left.hours, l: "hrs" },
                            { v: left.minutes, l: "min" },
                        ].map((b) => (
                            <div
                                key={b.l}
                                className="flex-1 rounded-xl bg-white/15 py-2 text-center"
                            >
                                <p className="text-2xl font-extrabold leading-none tabular-nums">
                                    {String(b.v).padStart(2, "0")}
                                </p>
                                <p className="text-[10px] font-bold uppercase tracking-wide text-white/75 mt-1">
                                    {b.l}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                    <h3 className="text-lg font-extrabold mb-1">
                        Last-minute LO prep
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Get the exact scope for the CAT, plus a prep paper and memo. Instant PDF.
                    </p>

                    {/* Quick add: LO guide */}
                    <button
                        type="button"
                        onClick={addLoAndOpenCart}
                        className={`w-full inline-flex items-center justify-between gap-2 rounded-xl px-4 py-3 mb-2.5 text-sm font-extrabold transition-all ${
                            loInCart
                                ? "bg-primary/10 text-primary border-2 border-primary"
                                : "text-cta-foreground shadow-md hover:opacity-90"
                        }`}
                        style={!loInCart ? ctaGradient : undefined}
                    >
                        <span className="inline-flex items-center gap-2">
                            {loInCart ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                <ShoppingCart className="w-4 h-4" />
                            )}
                            {loInCart ? "LO guide in cart, checkout" : "Add LO Study Guide"}
                        </span>
                        <span>{loInCart ? "" : `R${singlePrice}`}</span>
                    </button>

                    {/* Quick add: full bundle */}
                    <button
                        type="button"
                        onClick={getFullBundle}
                        className="w-full inline-flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-extrabold border-2 border-primary text-primary hover:bg-primary/[0.06] transition-all"
                    >
                        <span className="inline-flex items-center gap-2">
                            <img src={rubyLogo} alt="" className="w-4 h-4 rounded-full object-cover" />
                            Get the full bundle + AI Tutor
                        </span>
                        <span>R{bundlePrice}</span>
                    </button>

                    {/* Voucher */}
                    <div className="mt-4 rounded-xl border border-dashed border-primary/50 bg-primary/[0.04] px-4 py-3">
                        <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                                <p className="text-xs font-bold text-muted-foreground">
                                    20% off, ends 1 September
                                </p>
                                <p className="text-lg font-extrabold text-primary tracking-wide">
                                    {VOUCHER}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={copyCode}
                                className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-3 py-1.5 text-xs font-extrabold text-primary hover:bg-primary/10"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5" /> Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" /> Copy
                                    </>
                                )}
                            </button>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-2">
                            Applied automatically at checkout when you add from here.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={dismiss}
                        className="w-full text-center text-xs font-bold text-muted-foreground hover:text-foreground mt-3"
                    >
                        No thanks
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MatricsExamPopup;
