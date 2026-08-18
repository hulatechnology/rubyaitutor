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
} from "lucide-react";
import preview5Skills from "@/assets/matrics-5skills.png";
import previewMistakes from "@/assets/matrics-mistakes.png";
import previewStudyPlan from "@/assets/matrics-prep-paper.png";
import scienceSkills from "@/assets/matrics-science-5skills.png";
import scienceMethods from "@/assets/matrics-science-methods.png";
import charNova from "@/assets/character-nova.png";
import charSol from "@/assets/character-sol.png";
import charLex from "@/assets/character-lex.png";
import charTerra from "@/assets/character-terra.png";
import charStella from "@/assets/character-stella.png";
import charLuna from "@/assets/character-luna.png";

// ---------------------------------------------------------------------------
// Catalog. PLACEHOLDER product data, alphabetical by name.
// Only Mathematics, Physical Sciences, English Home Language and Mathematical
// Literacy have real PDFs/preview pages behind them today; the rest exist to
// prove the store scales past a fixed grid and should be replaced with the
// real, finalised guide list before launch.
// ---------------------------------------------------------------------------

export type PreviewImage = { src: string; label: string; locked?: boolean };

export type Guide = {
    id: string;
    name: string;
    icon: LucideIcon;
    accent: string;
    pdf?: string;
    cover?: string;
    preview?: PreviewImage[];
    comingSoon?: boolean;
    /** Product page description. No em dashes. */
    description?: string;
    /** Guide ids recommended as "frequently bought together" with this one. */
    bundleWith?: string[];
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
    },
    {
        id: "businessstudies",
        name: "Business Studies",
        icon: Briefcase,
        accent: "210 50% 40%",
        cover: charNova,
        description:
            "Built around the case-study and essay questions that carry the most marks, covering business environments, human resources, and business operations the way they're tested, not the whole textbook. Worked examples show the structure examiners are marking for on scenario-based questions, and you finish with a full prep paper and memo.",
    },
    {
        id: "cat",
        name: "Computer Applications Technology",
        icon: Monitor,
        accent: "300 40% 40%",
        cover: charLuna,
        description:
            "Built around the theory questions that carry the most marks in Paper 1: systems technologies, hardware and software concepts, database concepts, and social implications, the topics that trip students up most. Every concept comes with a worked example pulled from real past papers, and you finish with a full prep paper and memo.",
    },
    {
        id: "economics",
        name: "Economics",
        icon: LineChart,
        accent: "90 35% 35%",
        cover: charLuna,
        description:
            "Focused on the highest-mark topics across both papers: microeconomics (markets, elasticity and market structures), macroeconomics (the circular flow, business cycles and the state), and economic pursuits and contemporary issues, with the graph-reading and calculation methods examiners expect to see. Every method comes with a worked example from real past papers, plus a full prep paper and memo so you can practise under real time pressure.",
    },
    {
        id: "english",
        name: "English Home Language",
        icon: Languages,
        accent: "351 75% 48%",
        pdf: "/Ruby English P1 Study Guide 2026_.pdf",
        cover: charLex,
        preview: [
            { src: preview5Skills, label: "5 Skills That Give You the Most Marks" },
            { src: previewMistakes, label: "Mistakes That Cost Students Marks" },
            { src: previewStudyPlan, label: "Your 2026 Prep Paper", locked: true },
        ],
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
    },
    {
        id: "mathslit",
        name: "Mathematical Literacy",
        icon: Hash,
        accent: "35 70% 42%",
        pdf: "/Ruby Maths Lit P1 Study Guide 2026.pdf",
        cover: charNova,
        preview: [
            { src: preview5Skills, label: "5 Skills That Give You the Most Marks" },
            { src: previewMistakes, label: "Mistakes That Cost Students Marks" },
            { src: previewStudyPlan, label: "Your 2026 Prep Paper", locked: true },
        ],
        description:
            "Maths Lit is less about formulas and more about knowing how to apply them when the paper is in front of you. This guide walks through the highest-mark question types (finance, measurement, data handling, maps and plans) the way they actually appear in the exam, with worked examples for each. A full 2026-style prep paper and memo let you practise the real thing before you sit it.",
        bundleWith: ["lifesci", "geo"],
    },
    {
        id: "math",
        name: "Mathematics",
        icon: PieChart,
        accent: "348 80% 40%",
        pdf: "/Ruby Maths 2 Study Guide 2026.pdf",
        cover: charNova,
        preview: [
            { src: preview5Skills, label: "5 Skills That Give You the Most Marks" },
            { src: previewMistakes, label: "Mistakes That Cost Students Marks" },
            { src: previewStudyPlan, label: "Your 2026 Prep Paper", locked: true },
        ],
        description:
            "Only what's worth knowing for Maths Papers 1 & 2, built from five years of real NSC papers. You'll get the five skills that carry the most marks every year, worked examples for every method, and a breakdown of the mistakes that quietly cost students marks even when they know the content. Finish with a full 2026-style prep paper and a step-by-step memo, so you walk into November having already written something close to the real thing.",
        bundleWith: ["science", "accounting"],
    },
    {
        id: "science",
        name: "Physical Sciences",
        icon: Atom,
        accent: "226 60% 45%",
        pdf: "/Ruby Physical Science P1 Study Guide 2026.pdf",
        cover: charSol,
        preview: [
            { src: scienceSkills, label: "5 Skills That Give You the Most Marks" },
            { src: scienceMethods, label: "How to Solve Each Question Type" },
            { src: previewStudyPlan, label: "Your 2026 Prep Paper", locked: true },
        ],
        description:
            "Physical Sciences marks are won on method, not memory. This guide gives you a repeatable way to answer every question type that comes up in Paper 1, from mechanics to electricity. Each method is shown with a worked example pulled from real past papers, plus the patterns that repeat most often across the last five years' exams. Ends with a full prep paper and memo so you can test the method under real time pressure.",
        bundleWith: ["math", "lifesci"],
    },
    {
        id: "tourism",
        name: "Tourism",
        icon: Plane,
        accent: "185 50% 38%",
        cover: charStella,
        description:
            "Covers the highest-mark topics, tourism attractions, marketing, sustainable and responsible tourism, and world heritage sites and time zones, the way they actually come up in the exam, not the whole textbook. Worked examples show you how to handle map-work and scenario-based questions specifically, and a full prep paper with memo lets you test yourself before the real thing.",
    },
];

export const findGuide = (id: string) => guides.find((g) => g.id === id);
