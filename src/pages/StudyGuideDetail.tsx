import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, FileText, ClipboardCheck, BookOpen, Eye, NotebookPen, Trophy, ShoppingCart, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import StudyGuideHowItWorks from "@/components/StudyGuideHowItWorks";
import CartNavButton from "@/components/CartNavButton";
import CartDrawer from "@/components/CartDrawer";
import StickyCartBar from "@/components/StickyCartBar";
import { useCart } from "@/context/CartContext";
import { guides, findGuide } from "@/data/studyGuides";
import { tierForCount, singlePrice, ctaGradient } from "@/data/pricing";

const WHATSAPP_URL = "https://wa.me/27652985458?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20study%20guides";

const whatYouGet = [
    { icon: FileText, text: "A full study guide, built from five years of real NSC papers" },
    { icon: ClipboardCheck, text: "A 2026-style prep paper to test yourself under real conditions" },
    { icon: BookOpen, text: "A complete memo, so you know exactly where marks are won or lost" },
];

const hiwSteps = [
    { icon: NotebookPen, title: "Get this guide", text: "Add it to your cart and it's yours straight away." },
    { icon: BookOpen, title: "Study the guide", text: "Learn the highest-mark topics and methods, not the whole textbook." },
    { icon: ClipboardCheck, title: "Test yourself", text: "Write the prep paper under real exam conditions." },
    { icon: Trophy, title: "Get your results", text: "Mark with the memo and see exactly where you stand." },
];

const StudyGuideDetail = () => {
    const { id } = useParams<{ id: string }>();
    const guide = id ? findGuide(id) : undefined;
    const { cart, cartOpen, toggleCart } = useCart();

    if (!guide) return <Navigate to="/matrics" replace />;

    const bundlePartners = (guide.bundleWith ?? [])
        .map((bid) => guides.find((g) => g.id === bid))
        .filter((g): g is NonNullable<typeof g> => Boolean(g));
    const bundleTier = tierForCount(2);
    const inCart = cart.includes(guide.id);

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
                <section className="py-8 md:py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-center">
                            <div className="relative rounded-[20px] overflow-hidden border border-border shadow-lg bg-card order-2 md:order-1">
                                {guide.cover ? (
                                    <img src={guide.cover} alt={`${guide.name} study guide`} className="w-full h-64 md:h-80 object-cover object-top" />
                                ) : (
                                    <div
                                        className="w-full h-64 md:h-80 flex items-center justify-center"
                                        style={{ background: `hsl(${guide.accent} / 0.12)` }}
                                    >
                                        <guide.icon className="w-16 h-16" style={{ color: `hsl(${guide.accent})` }} strokeWidth={1.5} />
                                    </div>
                                )}
                                <div
                                    className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-2.5 text-white"
                                    style={{ background: `hsl(${guide.accent} / 0.92)` }}
                                >
                                    <guide.icon className="w-4 h-4" />
                                    <span className="text-sm font-extrabold">{guide.name}</span>
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

                {/* How it works */}
                <StudyGuideHowItWorks steps={hiwSteps} />

                {/* Preview */}
                {guide.preview && guide.preview.length > 0 && (
                    <section className="py-10 bg-muted/60 border-y border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                                <Eye className="w-5 h-5 text-primary" /> A look inside
                            </h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {guide.preview.map((img) => (
                                    <div key={img.label} className="relative overflow-hidden rounded-xl border border-border bg-card">
                                        <img
                                            src={img.src}
                                            alt={img.label}
                                            loading="lazy"
                                            className={`w-full h-auto object-cover ${img.locked ? "blur-[3px]" : ""}`}
                                        />
                                        {img.locked && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                                                <span className="text-[11px] font-extrabold bg-card/90 px-2 py-0.5 rounded-full">
                                                    Unlocks with purchase
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Best bought together */}
                {bundlePartners.length > 0 && (
                    <section className="py-12 md:py-16">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl mb-2">🎁 Best bought together</h2>
                                <p className="text-muted-foreground">
                                    Students taking {guide.name} usually take one of these too.
                                    {bundleTier && ` 2 guides together is R${bundleTier.price}.`}
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {bundlePartners.map((partner) => (
                                    <Link
                                        key={partner.id}
                                        to={`/matrics/guide/${partner.id}`}
                                        className="flex items-center gap-4 bg-card border border-border rounded-2xl p-4 hover:border-primary/40 transition-all"
                                    >
                                        {partner.cover ? (
                                            <img src={partner.cover} alt="" className="w-14 h-14 rounded-xl object-cover object-top border border-border" />
                                        ) : (
                                            <div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ background: `hsl(${partner.accent} / 0.12)` }}
                                            >
                                                <partner.icon className="w-6 h-6" style={{ color: `hsl(${partner.accent})` }} />
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-sm font-extrabold">{partner.name}</p>
                                            <p className="text-xs text-muted-foreground">Study guide + prep paper + memo</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
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
