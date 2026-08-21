import type { LucideIcon } from "lucide-react";
import {
    Hash,
    Atom,
    Languages,
    PieChart,
    Leaf,
    Map,
    Landmark,
    Calculator,
    Briefcase,
    LineChart,
    Plane,
    Monitor,
    ShoppingBag,
} from "lucide-react";
import charNova from "@/assets/character-nova.png";
import charSol from "@/assets/character-sol.png";
import charLex from "@/assets/character-lex.png";
import charTerra from "@/assets/character-terra.png";
import charStella from "@/assets/character-stella.png";
import charLuna from "@/assets/character-luna.png";

import businessstudiesPreview1 from "@/assets/study-guide-previews/businessstudies-1.png";
import businessstudiesPreview2 from "@/assets/study-guide-previews/businessstudies-2.png";
import businessstudiesPreview3 from "@/assets/study-guide-previews/businessstudies-3.png";
import businessstudiesPreview4 from "@/assets/study-guide-previews/businessstudies-4.png";
import catPreview1 from "@/assets/study-guide-previews/cat-1.png";
import catPreview2 from "@/assets/study-guide-previews/cat-2.png";
import catPreview3 from "@/assets/study-guide-previews/cat-3.png";
import catPreview4 from "@/assets/study-guide-previews/cat-4.png";
import consumerstudiesPreview1 from "@/assets/study-guide-previews/consumerstudies-1.png";
import consumerstudiesPreview2 from "@/assets/study-guide-previews/consumerstudies-2.png";
import consumerstudiesPreview3 from "@/assets/study-guide-previews/consumerstudies-3.png";
import consumerstudiesPreview4 from "@/assets/study-guide-previews/consumerstudies-4.png";
import economicsPreview1 from "@/assets/study-guide-previews/economics-1.png";
import economicsPreview2 from "@/assets/study-guide-previews/economics-2.png";
import economicsPreview3 from "@/assets/study-guide-previews/economics-3.png";
import economicsPreview4 from "@/assets/study-guide-previews/economics-4.png";
import geoPreview1 from "@/assets/study-guide-previews/geo-1.png";
import geoPreview2 from "@/assets/study-guide-previews/geo-2.png";
import geoPreview3 from "@/assets/study-guide-previews/geo-3.png";
import geoPreview4 from "@/assets/study-guide-previews/geo-4.png";
import historyPreview1 from "@/assets/study-guide-previews/history-1.png";
import historyPreview2 from "@/assets/study-guide-previews/history-2.png";
import historyPreview3 from "@/assets/study-guide-previews/history-3.png";
import historyPreview4 from "@/assets/study-guide-previews/history-4.png";
import lifesciPreview1 from "@/assets/study-guide-previews/lifesci-1.png";
import lifesciPreview2 from "@/assets/study-guide-previews/lifesci-2.png";
import lifesciPreview3 from "@/assets/study-guide-previews/lifesci-3.png";
import lifesciPreview4 from "@/assets/study-guide-previews/lifesci-4.png";
import mathslitPreview1 from "@/assets/study-guide-previews/mathslit-1.png";
import mathslitPreview2 from "@/assets/study-guide-previews/mathslit-2.png";
import mathslitPreview3 from "@/assets/study-guide-previews/mathslit-3.png";
import mathslitPreview4 from "@/assets/study-guide-previews/mathslit-4.png";
import mathPreview1 from "@/assets/study-guide-previews/math-1.png";
import mathPreview3 from "@/assets/study-guide-previews/math-3.png";
import sciencePreview1 from "@/assets/study-guide-previews/science-1.png";
import sciencePreview2 from "@/assets/study-guide-previews/science-2.png";
import sciencePreview3 from "@/assets/study-guide-previews/science-3.png";
import sciencePreview4 from "@/assets/study-guide-previews/science-4.png";
import tourismPreview1 from "@/assets/study-guide-previews/tourism-1.png";
import tourismPreview2 from "@/assets/study-guide-previews/tourism-2.png";
import tourismPreview3 from "@/assets/study-guide-previews/tourism-3.png";
import tourismPreview4 from "@/assets/study-guide-previews/tourism-4.png";

// ---------------------------------------------------------------------------
// Catalog. PLACEHOLDER product data, alphabetical by name.
// Only Mathematics, Physical Sciences, English Home Language and Mathematical
// Literacy have real PDFs/preview pages behind them today; the rest exist to
// prove the store scales past a fixed grid and should be replaced with the
// real, finalised guide list before launch.
// ---------------------------------------------------------------------------

export type Guide = {
    id: string;
    name: string;
    icon: LucideIcon;
    accent: string;
    pdf?: string;
    cover?: string;
    comingSoon?: boolean;
    /** Product page description. No em dashes. */
    description?: string;
    /** Guide ids recommended as "frequently bought together" with this one. */
    bundleWith?: string[];
    /** Real screenshots from inside the guide, shown as a carousel after the cover on the product page. */
    previewImages?: string[];
};

export const guides: Guide[] = [
    {
        id: "accounting",
        name: "Accounting",
        icon: Calculator,
        accent: "170 40% 35%",
        cover: charLuna,
        description:
            "Focused on the highest-mark topics and the exact process for each one: ledgers, financial statements, and analysis and interpretation. Every process is shown as a worked example using real exam-style figures, and you finish with a full prep paper and memo so you can practise the full process under time pressure.",
        bundleWith: ["math", "mathslit"],
    },
    {
        id: "afrikaans",
        name: "Afrikaans FAL",
        icon: Languages,
        accent: "265 45% 45%",
        cover: charLex,
        description:
            "Covers the highest-mark question types in Paper 1 language in context: comprehension, summary writing, and language structures and conventions, the way examiners actually test them, not the whole textbook. Worked examples show you how full marks are earned on editing, cloze, and figures-of-speech questions, and a full prep paper with memo lets you test yourself under real conditions.",
        bundleWith: ["english", "math", "mathslit"],
    },
    {
        id: "businessstudies",
        name: "Business Studies",
        icon: Briefcase,
        accent: "210 50% 40%",
        cover: charNova,
        description:
            "Built around the case-study and essay questions that carry the most marks, covering business environments, human resources, and business operations the way they're tested, not the whole textbook. Worked examples show the structure examiners are marking for on scenario-based questions, and you finish with a full prep paper and memo.",
        bundleWith: ["accounting", "economics"],
        previewImages: [businessstudiesPreview1, businessstudiesPreview2, businessstudiesPreview3, businessstudiesPreview4],
    },
    {
        id: "cat",
        name: "Computer Applications Technology",
        icon: Monitor,
        accent: "300 40% 40%",
        pdf: "https://kmgnizvqkqkiulzgvkcb.supabase.co/storage/v1/object/public/study-guides/cat-p2-nov-2026-studyguide.pdf",
        cover: charLuna,
        description:
            "Built around the theory questions that carry the most marks in Paper 1: systems technologies, hardware and software concepts, database concepts, and social implications, the topics that trip students up most. Every concept comes with a worked example pulled from real past papers, and you finish with a full prep paper and memo.",
        bundleWith: ["businessstudies", "mathslit"],
        previewImages: [catPreview1, catPreview2, catPreview3, catPreview4],
    },
    {
        id: "consumerstudies",
        name: "Consumer Studies",
        icon: ShoppingBag,
        accent: "48 65% 42%",
        pdf: "https://kmgnizvqkqkiulzgvkcb.supabase.co/storage/v1/object/public/study-guides/consumer-studies-p1-nov-2026-studyguide.pdf",
        cover: charStella,
        description:
            "Covers the highest-mark topics: the consumer in the marketplace, batching and food production, housing, and entrepreneurship, the way they're actually tested, not the whole textbook. Worked examples show you how full marks are earned on scenario and case-study questions, and a full prep paper with memo lets you test yourself under real conditions.",
        bundleWith: ["businessstudies", "economics"],
        previewImages: [consumerstudiesPreview1, consumerstudiesPreview2, consumerstudiesPreview3, consumerstudiesPreview4],
    },
    {
        id: "economics",
        name: "Economics",
        icon: LineChart,
        accent: "90 35% 35%",
        cover: charLuna,
        description:
            "Focused on the highest-mark topics across both papers: microeconomics (markets, elasticity and market structures), macroeconomics (the circular flow, business cycles and the state), and economic pursuits and contemporary issues, with the graph-reading and calculation methods examiners expect to see. Every method comes with a worked example from real past papers, plus a full prep paper and memo so you can practise under real time pressure.",
        bundleWith: ["accounting", "businessstudies"],
        previewImages: [economicsPreview1, economicsPreview2, economicsPreview3, economicsPreview4],
    },
    {
        id: "english",
        name: "English Home Language",
        icon: Languages,
        accent: "351 75% 48%",
        pdf: "/Ruby English P1 Study Guide 2026_.pdf",
        cover: charLex,
        description:
            "Paper 1 marks slip away in comprehension and language technique questions for reasons that have nothing to do with understanding the passage. This guide teaches the actual techniques examiners are marking for: inference, tone, rhetorical devices, and summary rules. Every technique comes with a worked example on a real extract, and you finish with a full prep paper and memo.",
        bundleWith: ["history"],
    },
    {
        id: "geo",
        name: "Geography",
        icon: Map,
        accent: "200 45% 42%",
        cover: charTerra,
        description:
            "Covers the highest-mark topics across both physical and human geography (map work, climatology, settlement geography) the way they're actually tested, not the whole textbook. Worked examples show you how to handle map-work and data-response questions specifically, and a full prep paper with memo lets you practise under real conditions.",
        bundleWith: ["history", "mathslit"],
        previewImages: [geoPreview1, geoPreview2, geoPreview3, geoPreview4],
    },
    {
        id: "history",
        name: "History",
        icon: Landmark,
        accent: "25 55% 40%",
        cover: charTerra,
        description:
            "Built around the essay and source-based questions that carry the most marks in both papers. You'll learn the structure examiners are marking for, not just the content, with worked examples on real past-paper sources and essay topics, plus a full prep paper and memo.",
        bundleWith: ["geo", "english"],
        previewImages: [historyPreview1, historyPreview2, historyPreview3, historyPreview4],
    },
    {
        id: "lifesci",
        name: "Life Sciences",
        icon: Leaf,
        accent: "150 30% 40%",
        cover: charSol,
        description:
            "Built around the topics that carry the most marks across both papers: genetics, human physiology, and evolution, the highest-frequency content from five years of real NSC papers. Every topic comes with a worked example showing exactly how marks are awarded, plus a diagram-labelling refresher for the questions students lose easy marks on. You finish with a full prep paper and memo.",
        bundleWith: ["mathslit", "science"],
        previewImages: [lifesciPreview1, lifesciPreview2, lifesciPreview3, lifesciPreview4],
    },
    {
        id: "mathslit",
        name: "Mathematical Literacy",
        icon: Hash,
        accent: "35 70% 42%",
        pdf: "/Ruby Maths Lit P1 Study Guide 2026.pdf",
        cover: charNova,
        description:
            "Maths Lit is less about formulas and more about knowing how to apply them when the paper is in front of you. This guide walks through the highest-mark question types (finance, measurement, data handling, maps and plans) the way they actually appear in the exam, with worked examples for each. A full 2026-style prep paper and memo let you practise the real thing before you sit it.",
        bundleWith: ["lifesci", "geo"],
        previewImages: [mathslitPreview1, mathslitPreview2, mathslitPreview3, mathslitPreview4],
    },
    {
        id: "math",
        name: "Mathematics",
        icon: PieChart,
        accent: "348 80% 40%",
        pdf: "/Ruby Maths 2 Study Guide 2026.pdf",
        cover: charNova,
        description:
            "Only what's worth knowing for Maths Papers 1 & 2, built from five years of real NSC papers. You'll get the five skills that carry the most marks every year, worked examples for every method, and a breakdown of the mistakes that quietly cost students marks even when they know the content. Finish with a full 2026-style prep paper and a step-by-step memo, so you walk into November having already written something close to the real thing.",
        bundleWith: ["science", "accounting"],
        previewImages: [mathPreview1, mathPreview3],
    },
    {
        id: "science",
        name: "Physical Sciences",
        icon: Atom,
        accent: "226 60% 45%",
        pdf: "/Ruby Physical Science P1 Study Guide 2026.pdf",
        cover: charSol,
        description:
            "Physical Sciences marks are won on method, not memory. This guide gives you a repeatable way to answer every question type that comes up in Paper 1, from mechanics to electricity. Each method is shown with a worked example pulled from real past papers, plus the patterns that repeat most often across the last five years' exams. Ends with a full prep paper and memo so you can test the method under real time pressure.",
        bundleWith: ["math", "lifesci"],
        previewImages: [sciencePreview1, sciencePreview2, sciencePreview3, sciencePreview4],
    },
    {
        id: "tourism",
        name: "Tourism",
        icon: Plane,
        accent: "185 50% 38%",
        cover: charStella,
        description:
            "Covers the highest-mark topics, tourism attractions, marketing, sustainable and responsible tourism, and world heritage sites and time zones, the way they actually come up in the exam, not the whole textbook. Worked examples show you how to handle map-work and scenario-based questions specifically, and a full prep paper with memo lets you test yourself before the real thing.",
        bundleWith: ["geo", "history"],
        previewImages: [tourismPreview1, tourismPreview2, tourismPreview3, tourismPreview4],
    },
];

export const findGuide = (id: string) => guides.find((g) => g.id === id);
