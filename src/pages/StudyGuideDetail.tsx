import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, FileText, ClipboardCheck, BookOpen, ShoppingCart, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import StudyGuideHowItWorks from "@/components/StudyGuideHowItWorks";
import CartNavButton from "@/components/CartNavButton";
import CartDrawer from "@/components/CartDrawer";
import StickyCartBar from "@/components/StickyCartBar";
import { useCart } from "@/context/CartContext";
import { guides, findGuide } from "@/data/studyGuides";
import { tiers, singlePrice, ctaGradient } from "@/data/pricing";
import rubyLogo from "@/assets/ruby-logo.png";

const WHATSAPP_URL = "https://wa.me/27652985458?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20study%20guides";

// The only guides with a real PDF behind them today; this is what "the full bundle" delivers.
const REAL_GUIDE_IDS = ["math", "science", "english", "mathslit"];

const whatYouGet = [
    { icon: FileText, text: "A full study guide, built from five years of real NSC papers" },
    { icon: ClipboardCheck, text: "A 2026-style prep paper to test yourself under real conditions" },
    { icon: BookOpen, text: "A complete memo, so you know exactly where marks are won or lost" },
];

const hiwSteps = [
    { icon: "📝", title: "Get this guide", text: "Add it to your cart and it's yours straight away." },
    { icon: "📖", title: "Study the guide", text: "Learn the highest-mark topics and methods, not the whole textbook." },
    { icon: "✅", title: "Test yourself", text: "Write the prep paper under real exam conditions." },
    { icon: "🏆", title: "Get your results", text: "Mark with the memo and see exactly where you stand." },
];

const StudyGuideDetail = () => {
    const { id } = useParams<{ id: string }>();
    const guide = id ? findGuide(id) : undefined;
    const { cart, cartOpen, toggleCart } = useCart();
    const [slide, setSlide] = useState(0);

    if (!guide) return <Navigate to="/matrics" replace />;

    // Cover is always slide one, real guide screenshots follow.
    const slides = [guide.cover, ...(guide.previewImages ?? [])].filter(Boolean) as string[];
    const goTo = (i: number) => setSlide((i + slides.length) % slides.length);

    const bundlePartners = (guide.bundleWith ?? [])
        .map((bid) => guides.find((g) => g.id === bid))
        .filter((g): g is NonNullable<typeof g> => Boolean(g));
    const inCart = cart.includes(guide.id);

    const buyFullBundle = () => {
        REAL_GUIDE_IDS.forEach((id) => {
            if (!cart.includes(id)) toggleCart(id);
        });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar rightSlot={<CartNavButton />} />

            <main className="flex-1">
                <div className="container mx-auto px-4 max-w-4xl pt-8">
                    <Link
                        to="/matrics"
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to all guides
                    </Link>
                </div>

                {/* Hero */}
                <section className="pt-8 pb-4 md:pt-12 md:pb-6">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-start">
                            <div className="order-2 md:order-1 flex flex-col gap-4">
                                <div className="relative rounded-[20px] overflow-hidden border border-border shadow-lg bg-card">
                                    {slides.length > 0 ? (
                                        <div className="relative h-64 md:h-80 overflow-hidden">
                                            <div
                                                className="flex h-full transition-transform duration-300 ease-out"
                                                style={{ transform: `translateX(-${slide * 100}%)` }}
                                            >
                                                {slides.map((src, i) => (
                                                    <img
                                                        key={i}
                                                        src={src}
                                                        alt={`${guide.name} study guide, image ${i + 1} of ${slides.length}`}
                                                        className="w-full h-64 md:h-80 object-cover object-top shrink-0"
                                                    />
                                                ))}
                                            </div>
                                            {slides.length > 1 && (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() => goTo(slide - 1)}
                                                        aria-label="Previous image"
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                                                    >
                                                        <ChevronLeft className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => goTo(slide + 1)}
                                                        aria-label="Next image"
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                                                    >
                                                        <ChevronRight className="w-5 h-5" />
                                                    </button>
                                                    <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5">
                                                        {slides.map((_, i) => (
                                                            <button
                                                                key={i}
                                                                type="button"
                                                                onClick={() => goTo(i)}
                                                                aria-label={`Go to image ${i + 1}`}
                                                                className={`w-[7px] h-[7px] rounded-full transition-colors ${i === slide ? "bg-white" : "bg-white/50"}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ) : (
                                        <div
                                            className="w-full h-64 md:h-80 flex items-center justify-center"
                                            style={{ background: `hsl(${guide.accent} / 0.12)` }}
                                        >
                                            <guide.icon className="w-16 h-16" style={{ color: `hsl(${guide.accent})` }} strokeWidth={1.5} />
                                        </div>
                                    )}
                                    <div
                                        className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-2.5 text-white pointer-events-none"
                                        style={{ background: `hsl(${guide.accent} / 0.92)` }}
                                    >
                                        <guide.icon className="w-4 h-4" />
                                        <span className="text-sm font-extrabold">{guide.name}</span>
                                    </div>
                                </div>

                                {/* Recommended, above the bundle so the upsell order reads guide -> pair -> full bundle */}
                                {bundlePartners.length > 0 && (
                                    <div>
                                        <p className="text-xs font-extrabold uppercase tracking-wide text-primary mb-2.5">
                                            🎁 Recommended
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            {bundlePartners.map((partner) => {
                                                const partnerInCart = cart.includes(partner.id);
                                                return (
                                                    <div
                                                        key={partner.id}
                                                        className="flex items-center gap-3 bg-card border border-border rounded-xl p-2.5"
                                                    >
                                                        <Link to={`/matrics/guide/${partner.id}`} className="flex items-center gap-3 flex-1 min-w-0">
                                                            {partner.cover ? (
                                                                <img src={partner.cover} alt="" className="w-10 h-10 rounded-lg object-cover object-top border border-border" />
                                                            ) : (
                                                                <div
                                                                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                                                    style={{ background: `hsl(${partner.accent} / 0.12)` }}
                                                                >
                                                                    <partner.icon className="w-5 h-5" style={{ color: `hsl(${partner.accent})` }} />
                                                                </div>
                                                            )}
                                                            <p className="text-sm font-extrabold truncate">{partner.name}</p>
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleCart(partner.id)}
                                                            aria-label={partnerInCart ? `Remove ${partner.name} from cart` : `Add ${partner.name} to cart`}
                                                            className={`shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full transition-all ${partnerInCart
                                                                    ? "bg-primary/10 text-primary border-2 border-primary"
                                                                    : "text-cta-foreground shadow-md hover:opacity-90"
                                                                }`}
                                                            style={!partnerInCart ? ctaGradient : undefined}
                                                        >
                                                            {partnerInCart ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
                                                        </button>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Get every guide, alongside this one */}
                                <div className="flex items-center gap-4 bg-card border-2 border-primary rounded-2xl shadow-sm p-4">
                                    <img src={rubyLogo} alt="Ruby" className="w-12 h-12 rounded-full object-cover shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-extrabold">Get every guide</p>
                                        <p className="text-xs text-muted-foreground">All 4 guides + AI Tutor, R{tiers[3].price}</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={buyFullBundle}
                                        className="shrink-0 inline-flex items-center justify-center gap-1.5 text-xs font-extrabold px-4 py-2.5 rounded-full text-cta-foreground shadow-md hover:opacity-90 transition-all"
                                        style={ctaGradient}
                                    >
                                        <ShoppingCart className="w-3.5 h-3.5" /> Get bundle
                                    </button>
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                {guide.comingSoon && (
                                    <span className="inline-block bg-muted text-muted-foreground text-xs font-extrabold px-3 py-1.5 rounded-full mb-4">
                                        Coming soon
                                    </span>
                                )}
                                <h1 className="text-3xl md:text-4xl mb-4">{guide.name} Study Guide</h1>
                                {guide.description ? (
                                    <p className="text-lg text-foreground/80 mb-6 leading-relaxed">{guide.description}</p>
                                ) : (
                                    <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                                        Built the same way every Ruby guide is: five years of real NSC papers, narrowed down to what's actually going to be asked. Full details go live closer to launch.
                                    </p>
                                )}

                                <ul className="flex flex-col gap-2.5 mb-6">
                                    {whatYouGet.map((w) => (
                                        <li key={w.text} className="flex items-start gap-2.5">
                                            <w.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm font-semibold text-foreground/90">{w.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() => toggleCart(guide.id)}
                                        className={`inline-flex items-center justify-center gap-2 text-base font-extrabold px-8 py-4 rounded-full transition-all ${inCart
                                                ? "bg-primary/10 text-primary border-2 border-primary"
                                                : "text-cta-foreground shadow-md hover:opacity-90"
                                            }`}
                                        style={!inCart ? ctaGradient : undefined}
                                    >
                                        {inCart ? (
                                            <>
                                                <Check className="w-5 h-5" /> In cart
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingCart className="w-5 h-5" /> Add to cart, R{singlePrice}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works, heading dropped here since the hero above already anchors the page */}
                <StudyGuideHowItWorks steps={hiwSteps} heading={false} />
            </main>

            <footer className="bg-primary text-primary-foreground py-10">
                <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div>
                        <p className="text-xl font-bold mb-1">Ruby</p>
                        <p className="text-sm text-primary-foreground/80">2026 Matric Study Guides</p>
                    </div>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-extrabold underline underline-offset-4"
                    >
                        Questions? Chat to us on WhatsApp
                    </a>
                </div>
            </footer>

            {!cartOpen && (
                <WhatsAppButton
                    href={WHATSAPP_URL}
                    positionClassName={cart.length > 0 ? "bottom-24 right-4 md:bottom-6 md:right-6" : "bottom-6 right-6"}
                />
            )}

            <StickyCartBar />
            <CartDrawer />
        </div>
    );
};

export default StudyGuideDetail;
