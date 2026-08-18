export type Tier = { count: number; price: number; label: string; bonus?: string };

export const tiers: Tier[] = [
    { count: 1, price: 99, label: "1 Study Guide" },
    { count: 2, price: 149, label: "2 Study Guides" },
    { count: 3, price: 179, label: "3 Study Guides" },
    { count: 4, price: 199, label: "Full Bundle", bonus: "+ AI Tutor Access" },
];

export const tierForCount = (n: number): Tier | null => {
    if (n <= 0) return null;
    if (n >= 4) return tiers[3];
    return tiers[n - 1];
};

export const singlePrice = tiers[0].price;

export const ctaGradient = { background: "linear-gradient(135deg, hsl(var(--cta)), hsl(var(--cta-end)))" };
