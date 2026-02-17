import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export const siteConfig = {
    name: "WealthDrift",
    description: "Let your money do the moving",
    url: "https://wealthdrift.com",
};

export const categoryIcons: Record<string, string> = {
    Saving: "💰",
    Investing: "📈",
    "Credit Cards": "💳",
    "Side Hustles": "🚀",
    "Real Estate": "🏠",
    Budgeting: "📊",
};
