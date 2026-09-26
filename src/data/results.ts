// June 2026 study-guide coverage audit: each guide checked question by question
// against the real May/June 2026 paper and marking memo.
// Mirrors the standalone results page (imukadam786/ruby-results-page).

export type Band = "good" | "partial" | "gap";

export type ResultRow = {
  /** question or topic name */
  p: string;
  /** marks available */
  a: number;
  /** marks a guide-only student could earn */
  e: number;
  /** what the guide is missing */
  g: string;
  approx?: boolean;
};

export type ResultPaper = {
  label: string;
  pct: number;
  meta: string;
  rows: ResultRow[];
  choices?: { label: string; a: number; e: number; pct: number }[];
  note?: string;
  warning?: string;
  customBand?: (a: number, e: number) => Band;
};

export type ResultSubject = {
  id: string;
  name: string;
  short: string;
  color: string;
  /** matching study guide id in studyGuides.ts (none = no guide on sale) */
  guideId?: string;
  papers: ResultPaper[];
};

export const RESULTS_SUBJECTS: ResultSubject[] = [
  {
    id:"mathematics", guideId:"math", name:"Mathematics", short:"Maths", color:"oklch(0.58 0.16 265)",
    papers:[
      { label:"Paper 1", pct:87, meta:"150 marks, all compulsory · topic-level only", rows:[
        {p:"Algebra", a:23, e:20, g:"Nested-exponent question"},
        {p:"Sequences", a:17, e:15, g:"Sum of first differences"},
        {p:"Clock problem", a:7, e:5, g:"Word-problem set-up"},
        {p:"Functions", a:21, e:19, g:"Two distinct positive roots"},
        {p:"Hyperbola", a:16, e:12, g:"Area of triangle with variable vertex"},
        {p:"Finance", a:16, e:16, g:""},
        {p:"Differentiation", a:16, e:14, g:""},
        {p:"Cubic graphs", a:13, e:11, g:"Tangent from angle of inclination"},
        {p:"Optimisation", a:7, e:7, g:""},
        {p:"Counting and probability", a:14, e:12, g:"Venn diagram with independent events"}
      ]},
      { label:"Paper 2", pct:83, meta:"150 marks, all compulsory · topic-level only", rows:[
        {p:"Regression and standard deviation", a:10, e:9, g:"Explaining an outlier"},
        {p:"Ogive and box-and-whisker", a:10, e:10, g:""},
        {p:"Analytical geometry", a:18, e:16, g:"Angle between lines"},
        {p:"Circles", a:22, e:15, g:"Common chord of two circles (6), effect of the constant k"},
        {p:"Trig identities", a:15, e:10, g:"Deriving sin(A+B), compound angles"},
        {p:"Trig equations", a:14, e:10, g:""},
        {p:"Trig graphs", a:10, e:10, g:""},
        {p:"Sine rule and 3D trig", a:10, e:7, g:""},
        {p:"Circle theorem proof", a:12, e:12, g:""},
        {p:"Circle geometry", a:12, e:12, g:""},
        {p:"Similar triangles", a:17, e:14, g:""}
      ]}
    ]
  },
  {
    id:"maths-literacy", guideId:"mathslit", name:"Mathematical Literacy", short:"Maths Lit", color:"oklch(0.56 0.15 230)",
    papers:[
      { label:"Paper 1", pct:83, meta:"150 marks, all compulsory", rows:[
        {p:"Definitions, tables", a:29, e:23, g:"Box-and-whisker plot, debit, discrete/continuous"},
        {p:"Invoice, finance, probability", a:34, e:32, g:"Meaning of the invoice number"},
        {p:"Data handling", a:29, e:23, g:"Ordering data, reasoning about context"},
        {p:"Income and tax", a:32, e:30, g:""},
        {p:"Formulas, quartiles, tariffs", a:26, e:17, g:"Quartile and percentile questions (7 marks), reason for tariff intervals"}
      ]},
      { label:"Paper 2", pct:95, meta:"150 marks, all compulsory", rows:[
        {p:"Terms, weather, hike map", a:30, e:28, g:"Metric vs imperial"},
        {p:"Maps, seating plan", a:28, e:28, g:""},
        {p:"Soccer field, windmill tank", a:31, e:29, g:"Multi-step tank-fill time"},
        {p:"Pin board, lockers", a:33, e:31, g:""},
        {p:"Tides, map, Uber trip", a:28, e:27, g:""}
      ]}
    ]
  },
  {
    id:"physical-sciences", guideId:"science", name:"Physical Sciences", short:"Phys Sci", color:"oklch(0.54 0.14 195)",
    papers:[
      { label:"Paper 1", pct:97, meta:"150 marks, all compulsory", rows:[
        {p:"Multiple choice", a:20, e:20, g:""},
        {p:"Newton's laws", a:20, e:18, g:""},
        {p:"Projectile motion", a:18, e:15, g:"Two-ball meeting, position-time graph"},
        {p:"Momentum", a:9, e:9, g:""},
        {p:"Work and energy", a:8, e:8, g:""},
        {p:"Doppler effect", a:13, e:13, g:""},
        {p:"Electrostatics", a:14, e:14, g:""},
        {p:"Circuits", a:21, e:21, g:""},
        {p:"AC and DC generators", a:14, e:14, g:""},
        {p:"Photoelectric effect", a:13, e:13, g:""}
      ]},
      { label:"Paper 2", pct:47, meta:"150 marks, topic-level only", rows:[
        {p:"Organic chemistry: naming and isomerism", a:22, e:8, g:""},
        {p:"Intermolecular forces and physical properties", a:12, e:7, g:""},
        {p:"Organic reactions", a:18, e:9, g:""},
        {p:"Rates of reaction", a:19, e:7, g:""},
        {p:"Chemical equilibrium", a:16, e:9, g:""},
        {p:"Acids and bases", a:23, e:10, g:""},
        {p:"Electrochemistry: galvanic cells", a:10, e:6, g:""},
        {p:"Electrolysis", a:9, e:5, g:""}
      ], warning:"Reconstructed from the 2026 memo. Question paper unavailable at publishing.",
        customBand:(a: number, e: number): Band =>{ const pct = a===0 ? 100 : (e/a)*100; if(pct>50) return "good"; if(pct>=30) return "partial"; return "gap"; } }
    ]
  },
  {
    id:"life-sciences", guideId:"lifesci", name:"Life Sciences", short:"Life Sci", color:"oklch(0.55 0.15 150)",
    papers:[
      { label:"Paper 1", pct:81, meta:"150 marks, all compulsory", rows:[
        {p:"Multiple choice", a:18, e:16, g:"Jelly layer of the ovum"},
        {p:"Terms", a:8, e:5, g:"Acrosome, prolactin, peripheral nervous system"},
        {p:"A/B/both/none", a:6, e:6, g:""},
        {p:"Embryo diagrams", a:6, e:5, g:""},
        {p:"Embryonic stages", a:6, e:6, g:""},
        {p:"Inner ear", a:6, e:4, g:""},
        {p:"Male reproductive system", a:11, e:8, g:"Exocrine glands"},
        {p:"Pituitary tumour", a:11, e:11, g:""},
        {p:"Oogenesis", a:5, e:0, g:"Not in the guide"},
        {p:"Central nervous system", a:11, e:8, g:""},
        {p:"Investigation", a:12, e:12, g:""},
        {p:"Multiple sclerosis", a:10, e:4, g:"Drawing a histogram (6)"},
        {p:"Presbyopia", a:8, e:8, g:""},
        {p:"Hypothyroidism", a:7, e:5, g:""},
        {p:"Homeostasis", a:11, e:10, g:""},
        {p:"Adrenal gland", a:7, e:6, g:""},
        {p:"Plant investigation", a:7, e:7, g:""}
      ]},
      { label:"Paper 2", pct:79, meta:"150 marks, all compulsory", rows:[
        {p:"Multiple choice", a:20, e:16, g:"Mendel, the cell cycle"},
        {p:"Terms", a:9, e:8, g:"Locus"},
        {p:"A/B/both/none", a:6, e:6, g:""},
        {p:"Nucleotides", a:8, e:6, g:"Organelles containing DNA"},
        {p:"Hominid tree", a:7, e:5, g:"Homo naledi"},
        {p:"Meiosis", a:12, e:12, g:""},
        {p:"Transcription", a:7, e:7, g:""},
        {p:"Codons and mutation", a:10, e:10, g:""},
        {p:"Bird sex chromosomes", a:10, e:6, g:"Structural differences, bird vs human (4)"},
        {p:"Pedigree", a:11, e:11, g:""},
        {p:"Paternity, DNA profiling", a:11, e:2, g:"Not in the guide"},
        {p:"Cloning", a:6, e:2, g:""},
        {p:"Speciation", a:8, e:8, g:""},
        {p:"Homologous structures", a:6, e:6, g:""},
        {p:"Fish body size", a:10, e:8, g:""},
        {p:"Out of Africa", a:9, e:6, g:"Who found Mrs Ples, other fossils"}
      ]}
    ]
  },
  {
    id:"english-hl", guideId:"english", name:"English Home Language", short:"English", color:"oklch(0.58 0.16 25)",
    papers:[
      { label:"Paper 1", pct:93, meta:"70 marks, scaled to 100", rows:[
        {p:"Comprehension", a:30, e:27, g:"How the writer develops an argument (3)"},
        {p:"Summary", a:10, e:10, g:""},
        {p:"Advert (Q3)", a:10, e:9, g:"Comparative form of \"least\""},
        {p:"Cartoon (Q4)", a:10, e:10, g:""},
        {p:"Editing (Q5)", a:10, e:9, g:"Function of ellipsis"}
      ]},
      { label:"Paper 2", pct:86, meta:"80 marks, scaled to 100 · best-case pairing shown", rows:[
        {p:"Poetry (2 prescribed + 1 unseen)", a:30, e:27, g:"Prescribed poems not named, but skills are taught", approx:true},
        {p:"The Picture of Dorian Gray", a:25, e:21, g:"", approx:true},
        {p:"Life of Pi", a:25, e:14, g:"No Pondicherry, no three religions", approx:true},
        {p:"Othello", a:25, e:21, g:"", approx:true},
        {p:"Hamlet", a:25, e:18, g:"Claudius and the ghost are thin", approx:true}
      ], choices:[
        {label:"Best (Dorian Gray + Othello)", a:80, e:69, pct:86},
        {label:"Worst (Life of Pi + Hamlet)", a:80, e:59, pct:74}
      ]},
      { label:"Paper 3", pct:100, meta:"100 marks", rows:[
        {p:"Essay (Section A)", a:50, e:50, g:""},
        {p:"Two transactional texts (Section B)", a:50, e:50, g:"Dialogue, e-mail, article, letter, report and speech all covered"}
      ], note:"This measures format coverage, not writing quality." }
    ]
  },
  {
    id:"afrikaans-fal", guideId:"afrikaans", name:"Afrikaans First Additional Language", short:"Afrikaans", color:"oklch(0.62 0.16 55)",
    papers:[
      { label:"Paper 1", pct:86, meta:"80 marks, scaled to 100", rows:[
        {p:"Reading comprehension (A)", a:30, e:30, g:""},
        {p:"Summary (B)", a:10, e:10, g:""},
        {p:"Advert (Q3)", a:10, e:8, g:"Purpose of the asterisk, \"selfstandige naamwoord\""},
        {p:"Cartoon (Q4)", a:10, e:10, g:""},
        {p:"Article language items (Q5.1)", a:14, e:7, g:"Present participle, negation, syllables, wie/wat, articles, \"regte\", rewrite \"Jy moet...\""},
        {p:"Picture language items (Q5.2)", a:6, e:4, g:"Vocabulary (legs = bene), collective word"}
      ]},
      { label:"Paper 2", pct:74, meta:"70 marks, scaled to 100 · answer two of four sections", rows:[
        {p:"Novel (one of four)", a:35, e:19, g:"Guide names none of the set works. Extract and skill questions are earned; event order and book facts are not", approx:true},
        {p:"Drama (one of three)", a:35, e:19, g:"Same gap as the novel", approx:true},
        {p:"Short stories (both)", a:35, e:19, g:"Same gap as the novel", approx:true},
        {p:"Poetry (both poems)", a:35, e:33, g:"Guide teaches tone and imagery; only couplet/stanza terms are thin", approx:true}
      ], choices:[
        {label:"Best (poetry + one work)", a:70, e:52, pct:74},
        {label:"Worst (two works, no poetry)", a:70, e:38, pct:54}
      ]},
      { label:"Paper 3", pct:100, meta:"100 marks", rows:[
        {p:"Essay (A)", a:50, e:50, g:""},
        {p:"Long text (B)", a:30, e:30, g:"Guide gives two different word counts (180–200 and 120–150)"},
        {p:"Short text (C)", a:20, e:20, g:""}
      ], note:"This measures format coverage, not writing quality." }
    ]
  },
  {
    id:"tourism", guideId:"tourism", name:"Tourism", short:"Tourism", color:"oklch(0.62 0.14 85)",
    papers:[
      { label:"Paper", pct:86, meta:"200 marks, scaled to 100 · estimate", rows:[
        {p:"Short questions (A)", a:40, e:33, g:"WHO and health items lightly touched", approx:true},
        {p:"Map work and forex (B)", a:50, e:45, g:"", approx:true},
        {p:"Attractions and heritage (C)", a:50, e:42, g:"Role-player logo sequence", approx:true},
        {p:"Sectors and sustainability (D)", a:30, e:26, g:"", approx:true},
        {p:"Domestic, regional, customer care (E)", a:30, e:26, g:"", approx:true}
      ], note:"These figures are an estimate." }
    ]
  },
  {
    id:"history", guideId:"history", name:"History", short:"History", color:"oklch(0.55 0.15 310)",
    papers:[
      { label:"Paper 1", pct:87, meta:"150 marks: three questions of 50 · best-case combination shown", rows:[
        {p:"Source: NATO and Warsaw Pact (Q1)", a:50, e:38, g:"Cominform, veto, Bevin and Schuman", approx:true},
        {p:"Source: Angola and the MPLA (Q2)", a:50, e:46, g:"", approx:true},
        {p:"Source: Little Rock, Eckford (Q3)", a:50, e:34, g:"Little Rock, Eckford and Daisy Bates absent", approx:true},
        {p:"Essay: Vietnam, Viet Cong (Q4)", a:50, e:42, g:"", approx:true},
        {p:"Essay: Congo, Mobutu (Q5)", a:50, e:40, g:"", approx:true},
        {p:"Essay: Black Power (Q6)", a:50, e:42, g:"", approx:true}
      ], choices:[
        {label:"Best (Q2 + Q4 + Q6)", a:150, e:130, pct:87},
        {label:"Worst (Q1 + Q3 + Q5)", a:150, e:112, pct:75}
      ]},
      { label:"Paper 2", pct:84, meta:"150 marks: three questions of 50 · best-case combination shown", rows:[
        {p:"Source: PW Botha and media (Q1)", a:50, e:34, g:"Botha and censorship barely touched", approx:true},
        {p:"Source: TRC amnesty, Stanza Bopape (Q2)", a:50, e:32, g:"Bopape and the Security Branch absent", approx:true},
        {p:"Source: Belt and Road, BRICS+ (Q3)", a:50, e:30, g:"No China, guide has Cold War and Gorbachev here instead", approx:true},
        {p:"Essay: Biko and Black Consciousness (Q4)", a:50, e:46, g:"", approx:true},
        {p:"Essay: negotiators, 1989–94 (Q5)", a:50, e:46, g:"", approx:true},
        {p:"Essay: Gorbachev (Q6)", a:50, e:45, g:"", approx:true}
      ], choices:[
        {label:"Best (Q4 + Q5 + Q1)", a:150, e:126, pct:84},
        {label:"Worst (Q6 + Q2 + Q3)", a:150, e:107, pct:71}
      ]}
    ]
  },
  {
    id:"geography", guideId:"geo", name:"Geography", short:"Geography", color:"oklch(0.52 0.13 175)",
    papers:[
      { label:"Paper 1", pct:78, meta:"150 marks, all compulsory", rows:[
        {p:"Multiple choice (1.1)", a:8, e:6, g:"Dew point"},
        {p:"Fronts and clouds (1.2)", a:7, e:5, g:""},
        {p:"Mid-latitude cyclone (1.3)", a:15, e:13, g:""},
        {p:"Tropical cyclone (1.4)", a:15, e:13, g:""},
        {p:"Urban heat islands (1.5)", a:15, e:1, g:"Not in the guide"},
        {p:"River types and flow (2.1)", a:7, e:2, g:"Laminar and turbulent flow, stream load"},
        {p:"Drainage patterns (2.2)", a:8, e:8, g:""},
        {p:"Floodplain and levees (2.3)", a:15, e:15, g:""},
        {p:"Rejuvenation (2.4)", a:15, e:15, g:""},
        {p:"Catchment and pollution (2.5)", a:15, e:14, g:""},
        {p:"Map skills and GIS (Q3)", a:30, e:25, g:"Orthophoto tone in winter, slope aspect"}
      ]},
      { label:"Paper 2", pct:58, meta:"150 marks, all compulsory", rows:[
        {p:"Rural settlement patterns (1.1)", a:8, e:8, g:""},
        {p:"Low- and high-order functions (1.2)", a:7, e:0, g:"Not covered"},
        {p:"Rural depopulation (1.3)", a:15, e:15, g:""},
        {p:"CBD (1.4)", a:15, e:15, g:""},
        {p:"Informal settlements (1.5)", a:15, e:15, g:""},
        {p:"Economic sectors (2.1)", a:8, e:8, g:""},
        {p:"Statements (2.2)", a:7, e:4, g:""},
        {p:"Gold mining (2.3)", a:15, e:5, g:"Only general industrial location factors"},
        {p:"Durban–Pinetown region (2.4)", a:15, e:12, g:""},
        {p:"Informal sector (2.5)", a:15, e:5, g:"Not named, only general development covered"},
        {p:"Map skills and GIS (Q3)", a:30, e:0, g:"Guide states it covers Section A only, and says the paper is 225 marks"}
      ]}
    ]
  },
  {
    id:"economics", guideId:"economics", name:"Economics", short:"Economics", color:"oklch(0.55 0.16 340)",
    papers:[
      { label:"Paper 1", pct:73, meta:"150 marks · best-case combination shown", rows:[
        {p:"Multiple choice (1.1)", a:16, e:8, g:"Market price, accountability, transfer duty, globalisation"},
        {p:"Matching (1.2)", a:8, e:4, g:"Kitchin cycle, embargo, open-market operations, skills support programme"},
        {p:"One-word terms (1.3)", a:6, e:3, g:"Autonomous spending, privatisation, land reform"},
        {p:"Short questions (2.1)", a:4, e:2, g:"BOP asset component"},
        {p:"Multiplier extract (2.2)", a:10, e:10, g:""},
        {p:"Laffer curve (2.3)", a:10, e:10, g:""},
        {p:"Reasons for trade (2.4)", a:8, e:0, g:"Natural resources and climate as reasons for trade"},
        {p:"Financial sector (2.5)", a:8, e:8, g:""},
        {p:"Short questions (3.1)", a:4, e:2, g:"SDIs"},
        {p:"Regional development (3.2)", a:10, e:6, g:"Benchmark criteria, human capital, agglomeration"},
        {p:"Indicators (3.3)", a:10, e:3, g:"M1, labour productivity, standardisation of indicators"},
        {p:"Housing and urbanisation (3.4)", a:8, e:0, g:""},
        {p:"PPPs in SDIs (3.5)", a:8, e:0, g:""},
        {p:"Short questions (4.1)", a:4, e:2, g:"Categories of consumer goods"},
        {p:"BOP table (4.2)", a:10, e:8, g:"Gold in the current account, \"current transfers\""},
        {p:"Growth policies (4.3)", a:10, e:7, g:"ASGISA, NSDS shortcoming"},
        {p:"North vs South (4.4)", a:8, e:8, g:""},
        {p:"National budget (4.5)", a:8, e:8, g:""},
        {p:"Essay: forecasting business cycles (Q5)", a:40, e:32, g:"Aggregate supply measures only partly touched"},
        {p:"Essay: export promotion, tariffs (Q6)", a:40, e:32, g:""}
      ], choices:[
        {label:"Best (Q2 + Q4 + Q5)", a:150, e:110, pct:73},
        {label:"Worst (Q3 + Q4 + Q6)", a:150, e:91, pct:61}
      ]},
      { label:"Paper 2", pct:85, meta:"150 marks · best-case combination shown", rows:[
        {p:"Multiple choice (1.1)", a:16, e:8, g:"Explicit cost, hyperinflation, medical tourism, voluntary agreements"},
        {p:"Matching (1.2)", a:8, e:2, g:"Diseconomies, cost-benefit analysis, stagflation, monetarism, quantity standards, leisure tourism"},
        {p:"One-word terms (1.3)", a:6, e:4, g:"Deregulation, business tourism"},
        {p:"Short questions (2.1)", a:4, e:4, g:""},
        {p:"Perfect market (2.2)", a:10, e:10, g:""},
        {p:"Kinked demand (2.3)", a:10, e:8, g:"Duopoly"},
        {p:"Competition Commission (2.4)", a:8, e:8, g:""},
        {p:"Non-price competition (2.5)", a:8, e:8, g:""},
        {p:"Short questions (3.1)", a:4, e:3, g:"Only Robben Island touched for World Heritage Sites"},
        {p:"Tourism impact (3.2)", a:10, e:2, g:"Ecotourism, taxes on tourism, negative impact on households"},
        {p:"Price indexes (3.3)", a:10, e:10, g:""},
        {p:"Tourism policy (3.4)", a:8, e:4, g:"Taxation (infrastructure covered)"},
        {p:"High inflation (3.5)", a:8, e:8, g:""},
        {p:"Short questions (4.1)", a:4, e:4, g:""},
        {p:"Monopoly cartoon (4.2)", a:10, e:10, g:""},
        {p:"Administered prices (4.3)", a:10, e:7, g:"NERSA, all-inclusive inflation"},
        {p:"Profit maximisation graph (4.4)", a:8, e:8, g:""},
        {p:"Tourism and infrastructure (4.5)", a:8, e:8, g:""},
        {p:"Essay: state intervention, public goods (Q5)", a:40, e:38, g:""},
        {p:"Essay: environment, subsidies (Q6)", a:40, e:36, g:""}
      ], choices:[
        {label:"Best (Q2 + Q4 + Q5)", a:150, e:127, pct:85},
        {label:"Worst (Q3 + Q4 + Q6)", a:150, e:114, pct:76}
      ]}
    ]
  },
  {
    id:"accounting", guideId:"accounting", name:"Accounting", short:"Accounting", color:"oklch(0.5 0.14 285)",
    papers:[
      { label:"Paper 1", pct:71, meta:"150 marks, all compulsory", rows:[
        {p:"Closing stock, specific identification (1.1)", a:7, e:0, g:"Method not in the guide"},
        {p:"Fixed deposit total (1.2)", a:5, e:0, g:"Interest on fixed deposits not covered"},
        {p:"Statement of Financial Position (1.3)", a:38, e:20, g:""},
        {p:"True/false on cash flow (2.1)", a:3, e:1, g:"Non-cash items, working-capital movements"},
        {p:"Retained income note (2.2.1)", a:8, e:8, g:""},
        {p:"Cash flow statement (2.2.2)", a:18, e:10, g:"Share repurchase, working-capital items"},
        {p:"Indicators (2.2.3)", a:11, e:11, g:""},
        {p:"Interpretation (3.1–3.5)", a:30, e:30, g:""},
        {p:"New shares, shareholding (3.6)", a:9, e:9, g:""},
        {p:"Cash flow comment (3.7)", a:6, e:3, g:"Shallow"},
        {p:"Corporate governance (Q4)", a:15, e:15, g:"Insider trading, remuneration committee, recommendations"}
      ]},
      { label:"Paper 2", pct:81, meta:"150 marks, all compulsory", rows:[
        {p:"Bank reconciliation (1.1)", a:21, e:21, g:""},
        {p:"Debtors' age analysis (1.2)", a:8, e:6, g:"Age analysis touched only lightly"},
        {p:"VAT (1.3)", a:11, e:11, g:""},
        {p:"Cost accounts (2.1)", a:3, e:3, g:""},
        {p:"Stay-Fit manufacturers (2.2)", a:21, e:17, g:"Export duty effect and strategy (4)"},
        {p:"Break-even, Bags Galore (2.3)", a:16, e:13, g:"Reasons for export cost increases (3)"},
        {p:"FIFO stock, stockholding (3.1)", a:12, e:12, g:""},
        {p:"Fixed assets (3.2)", a:18, e:0, g:"Internal control, land cost, loss on sale, diminishing-balance depreciation, asset register"},
        {p:"Budgeting (Q4)", a:40, e:38, g:"Minor"}
      ]}
    ]
  },
  {
    id:"business-studies", guideId:"businessstudies", name:"Business Studies", short:"Bus Studies", color:"oklch(0.58 0.16 10)",
    papers:[
      { label:"Paper 2", pct:85, meta:"150 marks · scored from the marking guideline · best-case combination shown", rows:[
        {p:"Multiple choice and matching (1.1, 1.3)", a:20, e:12, g:"Estimated, the marking guideline shows only letters", approx:true},
        {p:"Word fill (1.2)", a:10, e:6, g:"Maternity, non-verbal communication"},
        {p:"Ventures (Q2)", a:40, e:36, g:"Return on investment and state-owned company only lightly touched"},
        {p:"Roles (Q3)", a:40, e:36, g:"Unfair advertising, Consumer Protection Act"},
        {p:"Mixed (Q4)", a:40, e:35, g:"Attitude in leadership, social rights"},
        {p:"Essay: presentations (Q5)", a:40, e:32, g:""},
        {p:"Essay: ethics and professionalism (Q6)", a:40, e:38, g:""}
      ], choices:[
        {label:"Best (Q2 + Q3 + Q6)", a:150, e:128, pct:85},
        {label:"Worst (Q3 + Q4 + Q5)", a:150, e:121, pct:81}
      ]}
    ]
  },
  {
    id:"agricultural-sciences", name:"Agricultural Sciences", short:"Agric Sci", color:"oklch(0.52 0.13 130)",
    papers:[
      { label:"Paper 2", pct:70, meta:"150 marks, all compulsory", rows:[
        {p:"Multiple choice (1.1)", a:20, e:10, g:"Importers, land functions, labour management, cash flow statement, strategic management"},
        {p:"Matching (1.2)", a:10, e:6, g:"Bulkiness, farm management"},
        {p:"One-word terms (1.3)", a:10, e:8, g:"Epistasis"},
        {p:"Change the word (1.4)", a:5, e:1, g:"Entrepreneurship, inventory, sex-linked, micro-injection"},
        {p:"Marketing and management (Q2)", a:35, e:26, g:"Elasticity reasons, entrepreneurial process order, chain streamlining"},
        {p:"Production factors (Q3)", a:35, e:25, g:"Characteristics of land, labour health, management principles, competition"},
        {p:"Genetics (Q4)", a:35, e:29, g:"Additive (polygenic) inheritance (5), GMO health risk"}
      ]}
    ]
  }
];
