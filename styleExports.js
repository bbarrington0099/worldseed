/**
 * Style exports for Alabastria
 * These values are used to generate SCSS variables and can be imported in JS/TS
 * Fantasy/D&D inspired color scheme with dark mode as default
 */

export const styleExports = {
    colors: {
        values: {
            // Primary backgrounds (dark mode default)
            "bg-primary": { raw: "#0d0f14", dressed: "#0d0f14" },           // Deep night
            "bg-secondary": { raw: "#151821", dressed: "#151821" },         // Slightly lighter night
            "bg-tertiary": { raw: "#1c2029", dressed: "#1c2029" },          // Card backgrounds
            "bg-elevated": { raw: "#242833", dressed: "#242833" },          // Elevated surfaces

            // Light mode backgrounds (parchment theme)
            "bg-light-primary": { raw: "#f5f0e6", dressed: "#f5f0e6" },     // Parchment
            "bg-light-secondary": { raw: "#ebe5d8", dressed: "#ebe5d8" },   // Darker parchment
            "bg-light-tertiary": { raw: "#e0d9c8", dressed: "#e0d9c8" },    // Card backgrounds
            "bg-light-elevated": { raw: "#fff9ed", dressed: "#fff9ed" },    // Elevated surfaces

            // Foreground text
            "fg-primary": { raw: "#e8e4dc", dressed: "#e8e4dc" },           // Warm cream
            "fg-secondary": { raw: "#a8a4a0", dressed: "#a8a4a0" },         // Muted text
            "fg-tertiary": { raw: "#6b6864", dressed: "#6b6864" },          // Subtle text
            "fg-light-primary": { raw: "#2d2d2d", dressed: "#2d2d2d" },     // Dark charcoal
            "fg-light-secondary": { raw: "#5a5a5a", dressed: "#5a5a5a" },   // Muted dark

            // Accent colors
            "accent-gold": { raw: "#c9a227", dressed: "#c9a227" },          // Royal gold
            "accent-gold-dim": { raw: "#8b7320", dressed: "#8b7320" },      // Dimmed gold
            "accent-gold-glow": { raw: "rgba(201, 162, 39, 0.3)", dressed: "rgba(201, 162, 39, 0.3)" },
            "accent-crimson": { raw: "#8b2942", dressed: "#8b2942" },       // Blood red
            "accent-forest": { raw: "#2d5a27", dressed: "#2d5a27" },        // Deep forest
            "accent-mystic": { raw: "#4a3f6b", dressed: "#4a3f6b" },        // Mystic purple
            "accent-ocean": { raw: "#1e4d6b", dressed: "#1e4d6b" },         // Ocean blue
            "accent-ember": { raw: "#b35a1f", dressed: "#b35a1f" },         // Ember orange

            // Status colors
            "status-success": { raw: "#2d7a3e", dressed: "#2d7a3e" },
            "status-warning": { raw: "#b38b1f", dressed: "#b38b1f" },
            "status-error": { raw: "#9e2d2d", dressed: "#9e2d2d" },
            "status-info": { raw: "#2d5a8b", dressed: "#2d5a8b" },

            // Guild ranks
            "rank-coal": { raw: "#36454f", dressed: "#36454f" },
            "rank-copper": { raw: "#b87333", dressed: "#b87333" },
            "rank-iron": { raw: "#6b6b6b", dressed: "#6b6b6b" },
            "rank-silver": { raw: "#c0c0c0", dressed: "#c0c0c0" },
            "rank-gold": { raw: "#ffd700", dressed: "#ffd700" },
            "rank-platinum": { raw: "#e5e4e2", dressed: "#e5e4e2" },
            "rank-mithral": { raw: "#7ec8e3", dressed: "#7ec8e3" },

            // Faction influence levels
            "influence-minor": { raw: "#6b6864", dressed: "#6b6864" },
            "influence-moderate": { raw: "#4a7c59", dressed: "#4a7c59" },
            "influence-major": { raw: "#c9a227", dressed: "#c9a227" },
            "influence-dominant": { raw: "#8b2942", dressed: "#8b2942" },
            "influence-hidden": { raw: "#4a3f6b", dressed: "#4a3f6b" },

            // Borders
            "border-primary": { raw: "#2a2e38", dressed: "#2a2e38" },
            "border-secondary": { raw: "#3a3e48", dressed: "#3a3e48" },
            "border-accent": { raw: "#c9a227", dressed: "#c9a227" },
            "border-light-primary": { raw: "#d4cfc2", dressed: "#d4cfc2" },

            // Skeleton loading
            "skeleton-base": { raw: "#1c2029", dressed: "#1c2029" },
            "skeleton-shine": { raw: "#2a2e38", dressed: "#2a2e38" },
            "skeleton-light-base": { raw: "#e0d9c8", dressed: "#e0d9c8" },
            "skeleton-light-shine": { raw: "#f5f0e6", dressed: "#f5f0e6" },
        },
    },
    fonts: {
        values: {
            "family-display": { raw: "'Cinzel', 'Times New Roman', serif", dressed: "'Cinzel', 'Times New Roman', serif" },
            "family-body": { raw: "'Lora', 'Georgia', serif", dressed: "'Lora', 'Georgia', serif" },
            "family-ui": { raw: "'Source Sans 3', 'Segoe UI', sans-serif", dressed: "'Source Sans 3', 'Segoe UI', sans-serif" },
            "family-mono": { raw: "'JetBrains Mono', 'Consolas', monospace", dressed: "'JetBrains Mono', 'Consolas', monospace" },
        },
    },
    spacing: {
        values: {
            "xs": { raw: "0.25rem", dressed: "0.25rem" },
            "sm": { raw: "0.5rem", dressed: "0.5rem" },
            "md": { raw: "1rem", dressed: "1rem" },
            "lg": { raw: "1.5rem", dressed: "1.5rem" },
            "xl": { raw: "2rem", dressed: "2rem" },
            "2xl": { raw: "3rem", dressed: "3rem" },
            "3xl": { raw: "4rem", dressed: "4rem" },
        },
    },
    breakpoints: {
        values: {
            "sm": { raw: "640px", dressed: "640px" },
            "md": { raw: "768px", dressed: "768px" },
            "lg": { raw: "1024px", dressed: "1024px" },
            "xl": { raw: "1280px", dressed: "1280px" },
            "2xl": { raw: "1536px", dressed: "1536px" },
        },
    },
    shadows: {
        values: {
            "sm": { raw: "0 1px 2px rgba(0, 0, 0, 0.3)", dressed: "0 1px 2px rgba(0, 0, 0, 0.3)" },
            "md": { raw: "0 4px 6px rgba(0, 0, 0, 0.4)", dressed: "0 4px 6px rgba(0, 0, 0, 0.4)" },
            "lg": { raw: "0 10px 15px rgba(0, 0, 0, 0.5)", dressed: "0 10px 15px rgba(0, 0, 0, 0.5)" },
            "glow-gold": { raw: "0 0 20px rgba(201, 162, 39, 0.4)", dressed: "0 0 20px rgba(201, 162, 39, 0.4)" },
            "glow-mystic": { raw: "0 0 20px rgba(74, 63, 107, 0.4)", dressed: "0 0 20px rgba(74, 63, 107, 0.4)" },
        },
    },
    transitions: {
        values: {
            "fast": { raw: "150ms ease", dressed: "150ms ease" },
            "normal": { raw: "250ms ease", dressed: "250ms ease" },
            "slow": { raw: "400ms ease", dressed: "400ms ease" },
        },
    },
    radii: {
        values: {
            "sm": { raw: "4px", dressed: "4px" },
            "md": { raw: "8px", dressed: "8px" },
            "lg": { raw: "12px", dressed: "12px" },
            "xl": { raw: "16px", dressed: "16px" },
            "full": { raw: "9999px", dressed: "9999px" },
        },
    },
};

