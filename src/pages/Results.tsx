import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import { RESULTS_SUBJECTS, type Band, type ResultPaper, type ResultRow, type ResultSubject } from "@/data/results";
import { findGuide } from "@/data/studyGuides";
import { tiers, ctaGradient, AI_TUTOR_SIGNUP_URL } from "@/data/pricing";
import "./results.css";

const FONTS_HREF =
    "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap";

/** How many of a paper's best-scoring questions show before "See the full breakdown". */
const TOP_WINS = 3;

const pctBand = (pct: number): Band => (pct >= 75 ? "good" : pct >= 50 ? "partial" : "gap");
const rowBand = (a: number, e: number): Band => (a === 0 ? "good" : pctBand(Math.round((e / a) * 100)));
const bandColor = (band: Band) =>
    band === "good" ? "var(--rp-good)" : band === "partial" ? "var(--rp-warn)" : "var(--rp-bad)";
const subjectAvg = (subj: ResultSubject) =>
    Math.round(subj.papers.reduce((s, p) => s + p.pct, 0) / subj.papers.length);

const bundle = tiers[tiers.length - 1];

const Row = ({ row, bandFn, hideGap }: { row: ResultRow; bandFn?: (a: number, e: number) => Band; hideGap?: boolean }) => {
    const band = (bandFn ?? rowBand)(row.a, row.e);
    return (
        <div className={`rp-row rp-row--${band}`}>
            <div className="rp-row-main">
                <span className="rp-row-part">{row.p}</span>
                <span className="rp-row-marks">
                    {row.approx ? "~" : ""}
                    {row.e}/{row.a}
                </span>
            </div>
            {row.g && !hideGap && <div className="rp-row-gap">{row.g}</div>}
        </div>
    );
};

const PaperCard = ({ subj, paper, idx }: { subj: ResultSubject; paper: ResultPaper; idx: number }) => {
    const [open, setOpen] = useState(false);
    const badge = paper.label.startsWith("Paper ") ? "P" + paper.label.split(" ")[1] : "P";
    // Folded view: fully covered questions first (biggest first), then the highest share of marks earned.
    const topWins = [...paper.rows]
        .sort((x, y) => Number(y.e >= y.a) - Number(x.e >= x.a) || y.e / y.a - x.e / x.a || y.a - x.a)
        .slice(0, TOP_WINS);

    return (
        <div className="rp-paper-card" id={`${subj.id}-p${idx + 1}`}>
            <div className="rp-paper-head">
                <div className="rp-paper-badge" style={{ background: subj.color }}>{badge}</div>
                <div className="rp-paper-title">
                    <div className="rp-paper-name">{paper.label}</div>
                    <div className="rp-paper-meta">{paper.meta}</div>
                </div>
                <div className="rp-paper-pct" style={{ color: bandColor(pctBand(paper.pct)) }}>{paper.pct}%</div>
            </div>
            {paper.note && <div className="rp-paper-note">{paper.note}</div>}
            {paper.warning && <div className="rp-paper-warning">{paper.warning}</div>}

            {open ? (
                <>
                    <div className="rp-rows-label">Earned / available marks</div>
                    <div>
                        {paper.rows.map((r) => (
                            <Row key={r.p} row={r} bandFn={paper.customBand} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className="rp-rows-label">Top-scoring questions</div>
                    <div>
                        {topWins.map((r) => (
                            <Row key={r.p} row={r} bandFn={paper.customBand} hideGap />
                        ))}
                    </div>
                </>
            )}

            <button
                type="button"
                className="rp-toggle"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
            >
                {open ? "Hide the full breakdown" : `See the full breakdown: all ${paper.rows.length} questions`}
                <ChevronDown className={`rp-toggle-icon${open ? " rp-toggle-icon--open" : ""}`} />
            </button>

            {paper.choices && (
                <div className="rp-choice-block">
                    <div className="rp-choice-label">
                        This paper lets students choose which questions to answer, coverage depends on the combination
                    </div>
                    {paper.choices.map((c) => (
                        <div className="rp-choice-row" key={c.label}>
                            <span>{c.label}</span>
                            <span className="rp-pct" style={{ color: bandColor(pctBand(c.pct)) }}>
                                {c.e}/{c.a} · {c.pct}%
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const SubjectBuy = ({ subj }: { subj: ResultSubject }) => {
    const guide = subj.guideId ? findGuide(subj.guideId) : undefined;
    if (!guide || guide.comingSoon) return null;
    return (
        <Link className="rp-subject-buy" to={`/matrics/guide/${guide.id}`}>
            <span>
                Get the November 2026 <strong>{guide.name}</strong> guide
            </span>
            <span className="rp-subject-buy-price">
                R{tiers[0].price} <ArrowRight className="rp-arrow" />
            </span>
        </Link>
    );
};

const Offer = () => (
    <div className="rp-offer">
        <p className="rp-offer-lead">
            Our November 2026 guides are built the same way: from real past papers and marking memos, focused on the questions that carry the most marks.
        </p>
        <a className="rp-offer-button" href={AI_TUTOR_SIGNUP_URL} style={ctaGradient}>
            Get every November guide + AI Tutor, R{bundle.price} <ArrowRight className="rp-arrow" />
        </a>
        <div className="rp-tiers">
            {tiers.map((t) => (
                <div className={`rp-tier${t === bundle ? " rp-tier--best" : ""}`} key={t.count}>
                    <b>R{t.price}</b>
                    <span>{t === bundle ? "Every guide + AI Tutor" : t.label}</span>
                </div>
            ))}
        </div>
        <Link className="rp-offer-link" to="/matrics">
            Or pick single guides from R{tiers[0].price}
        </Link>
    </div>
);

const Results = () => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Our Results | Ruby";
        let link = document.querySelector<HTMLLinkElement>(`link[href="${FONTS_HREF}"]`);
        if (!link) {
            link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = FONTS_HREF;
            document.head.appendChild(link);
        }
        return () => {
            document.title = prevTitle;
        };
    }, []);

    return (
        <Layout>
            <div className="results-page">
                <header className="rp-hero">
                    <h1 className="rp-headline">Our June guides covered 83 out of every 100 marks on the real exams</h1>
                    <p className="rp-sub">
                        A student who studied only our guide could have earned 83% of the marks. That's across 24 real May/June 2026 papers in 13 subjects, checked question by question against the actual paper and marking memo.
                    </p>

                    <div className="rp-stat-strip">
                        <div className="rp-donut-wrap">
                            <svg viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="85" fill="none" stroke="#E7E3DB" strokeWidth="22" />
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="85"
                                    fill="none"
                                    stroke="oklch(0.52 0.13 155)"
                                    strokeWidth="22"
                                    pathLength={100}
                                    strokeDasharray="83 100"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="rp-donut-num">83<small>%</small></div>
                        </div>
                        <div className="rp-stat-cards">
                            <div className="rp-stat-card"><b>17/24</b><span>guides cover 80%+ of the paper's marks</span></div>
                            <div className="rp-stat-card"><b>24/24</b><span>guides cover more than half the paper's marks. Every single one</span></div>
                            <div className="rp-stat-card"><b>2</b><span>guides cover every mark on the paper</span></div>
                        </div>
                    </div>

                    <Offer />

                    <p className="rp-note">
                        Every row below reads <strong>earned&nbsp;/&nbsp;available</strong>. "Earned" is the marks a student who studied only the guide could pick up on that question. "Available" is what the real question was worth. Rows in amber or red show exactly what the guide is missing.
                    </p>
                </header>

                <div className="rp-head">
                    <nav className="rp-subject-nav">
                        {RESULTS_SUBJECTS.map((subj) => (
                            <a className="rp-chip" href={`#${subj.id}`} key={subj.id}>
                                <span className="rp-cdot" style={{ background: subj.color }} />
                                {subj.short} <b>{subjectAvg(subj)}%</b>
                            </a>
                        ))}
                    </nav>
                    <div className="rp-key">
                        <span><strong>Each row:</strong> marks a guide-only student could earn, out of what the question was worth.</span>
                        <span className="rp-key-item"><span className="rp-key-swatch" style={{ background: "var(--rp-good)" }} />fully covered</span>
                        <span className="rp-key-item"><span className="rp-key-swatch" style={{ background: "var(--rp-warn)" }} />partly covered</span>
                        <span className="rp-key-item"><span className="rp-key-swatch" style={{ background: "var(--rp-bad)" }} />not covered</span>
                    </div>
                </div>

                <div className="rp-subjects">
                    {RESULTS_SUBJECTS.map((subj) => (
                        <section className="rp-subject" id={subj.id} key={subj.id} style={{ borderColor: subj.color }}>
                            <div className="rp-subject-head">
                                <span className="rp-subject-dot" style={{ background: subj.color }} />
                                <h2 className="rp-subject-name">{subj.name}</h2>
                                <span className="rp-subject-avg">{subjectAvg(subj)}%</span>
                            </div>
                            <div className="rp-paper-grid">
                                {subj.papers.map((p, i) => (
                                    <PaperCard subj={subj} paper={p} idx={i} key={p.label} />
                                ))}
                            </div>
                            <SubjectBuy subj={subj} />
                        </section>
                    ))}
                </div>

                <div className="rp-cta">
                    <div>
                        <h3>Get the November 2026 guides</h3>
                        <p>
                            1 guide R{tiers[0].price}, 2 for R{tiers[1].price}, 3 for R{tiers[2].price}, or every guide plus AI Tutor access for R{bundle.price}.
                        </p>
                    </div>
                    <div className="rp-cta-actions">
                        <a className="rp-cta-button" href={AI_TUTOR_SIGNUP_URL} style={ctaGradient}>
                            Get every guide, R{bundle.price}
                        </a>
                        <Link className="rp-offer-link" to="/matrics">Browse single guides</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Results;
