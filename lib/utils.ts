/**
 * Utility functions for Alabastria
 */

/**
 * Slugify a string for URL-safe paths
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/**
 * Convert a slug back to title case
 */
export function unslugify(slug: string): string {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

/**
 * Format a number with commas
 */
export function formatNumber(num: number): string {
    return num.toLocaleString();
}

/**
 * Format a cycle date (e.g., "800 Cycles After The Bringing")
 */
export function formatCycle(cycle: number): string {
    return `${formatNumber(cycle)} Cycles After The Bringing`;
}

/**
 * Clamp a number between min and max
 */
export function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}

/**
 * Generate a random integer between min (inclusive) and max (inclusive)
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Pick a random item from an array
 */
export function randomPick<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Weighted random selection
 * @param items Array of items with weights
 * @returns Selected item
 */
export function weightedRandomPick<T>(
    items: { item: T; weight: number }[]
): T {
    const totalWeight = items.reduce((sum, { weight }) => sum + weight, 0);
    let random = Math.random() * totalWeight;

    for (const { item, weight } of items) {
        random -= weight;
        if (random <= 0) {
            return item;
        }
    }

    // Fallback to last item
    return items[items.length - 1].item;
}

/**
 * Delay execution for a specified time
 */
export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Capitalize first letter of a string
 */
export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Truncate text to a maximum length with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + "...";
}

/**
 * Check if a value is a non-empty string
 */
export function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

/**
 * Parse JSON safely with a fallback
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
    try {
        return JSON.parse(json) as T;
    } catch {
        return fallback;
    }
}

/**
 * Class name utility (simplified cn function)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
}

