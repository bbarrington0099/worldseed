/**
 * Style exports for Alabastria
 * These values are used to generate SCSS variables and can be imported in JS/TS
 */

export const styleExports = {
    colors: createStyleExport({
        unit: '#',
        unitPosition: 'prefix',
        stringify: false,
        values: {
            // Primary backgrounds (dark mode default)
            "bg-primary": { raw: "0d0f14" },           // Deep night
            "bg-secondary": { raw: "151821" },         // Slightly lighter night
            "bg-tertiary": { raw: "1c2029" },          // Card backgrounds
            "bg-elevated": { raw: "242833" },          // Elevated surfaces

            // Light mode backgrounds (parchment theme)
            "bg-light-primary": { raw: "f5f0e6" },     // Parchment
            "bg-light-secondary": { raw: "ebe5d8" },   // Darker parchment
            "bg-light-tertiary": { raw: "e0d9c8" },    // Card backgrounds
            "bg-light-elevated": { raw: "fff9ed" },    // Elevated surfaces

            // Foreground text
            "fg-primary": { raw: "e8e4dc" },           // Warm cream
            "fg-secondary": { raw: "a8a4a0" },         // Muted text
            "fg-tertiary": { raw: "6b6864" },          // Subtle text
            "fg-light-primary": { raw: "2d2d2d" },     // Dark charcoal
            "fg-light-secondary": { raw: "5a5a5a" },   // Muted dark

            // Accent colors
            "accent-gold": { raw: "c9a227" },          // Royal gold
            "accent-gold-dim": { raw: "8b7320" },      // Dimmed gold
            "accent-gold-glow": { raw: "rgba(201, 162, 39, 0.3)", natural: true }, // Glowing gold
            "accent-crimson": { raw: "8b2942" },       // Blood red
            "accent-forest": { raw: "2d5a27" },        // Deep forest
            "accent-mystic": { raw: "4a3f6b" },        // Mystic purple
            "accent-ocean": { raw: "1e4d6b" },         // Ocean blue
            "accent-ember": { raw: "b35a1f" },         // Ember orange

            // Status colors
            "status-success": { raw: "2d7a3e" },
            "status-warning": { raw: "b38b1f" },
            "status-error": { raw: "9e2d2d" },
            "status-info": { raw: "2d5a8b" },

            // Guild ranks
            "rank-coal": { raw: "36454f" },
            "rank-copper": { raw: "b87333" },
            "rank-iron": { raw: "6b6b6b" },
            "rank-silver": { raw: "c0c0c0" },
            "rank-gold": { raw: "ffd700" },
            "rank-platinum": { raw: "e5e4e2" },
            "rank-mithral": { raw: "7ec8e3" },

            // Faction influence levels
            "influence-minor": { raw: "6b6864" },
            "influence-moderate": { raw: "4a7c59" },
            "influence-major": { raw: "c9a227" },
            "influence-dominant": { raw: "8b2942" },
            "influence-hidden": { raw: "4a3f6b" },

            // Borders
            "border-primary": { raw: "2a2e38" },
            "border-secondary": { raw: "3a3e48" },
            "border-accent": { raw: "c9a227" },
            "border-light-primary": { raw: "d4cfc2" },

            // Skeleton loading
            "skeleton-base": { raw: "1c2029" },
            "skeleton-shine": { raw: "2a2e38" },
            "skeleton-light-base": { raw: "e0d9c8" },
            "skeleton-light-shine": { raw: "f5f0e6" },
        }
    }),
    fonts: {
        values: {
            "family-display": { raw: "'Cinzel', 'Times New Roman', serif", natural: true },
            "family-body": { raw: "'Lora', 'Georgia', serif", natural: true },
            "family-ui": { raw: "'Source Sans 3', 'Segoe UI', sans-serif", natural: true },
            "family-mono": { raw: "'JetBrains Mono', 'Consolas', monospace", natural: true },
        },
    },
    spacing: createStyleExport({
        unit: 'rem',
        unitPosition: 'suffix',
        stringify: false,
        values: {
            "xs": { raw: "0.25" },
            "sm": { raw: "0.5" },
            "md": { raw: "1" },
            "lg": { raw: "1.5" },
            "xl": { raw: "2" },
            "2xl": { raw: "3" },
            "3xl": { raw: "4" },
        }
    }),
    breakpoints: {
        unit: 'px',
        unitPosition: 'suffix',
        stringify: false,
        values: {
            "sm": { raw: "640" },
            "md": { raw: "768" },
            "lg": { raw: "1024" },
            "xl": { raw: "1280" },
            "2xl": { raw: "1536" },
        },
    },
    shadows: {
        values: {
            "sm": { raw: "0 1px 2px rgba(0, 0, 0, 0.3)", natural: true },
            "md": { raw: "0 4px 6px rgba(0, 0, 0, 0.4)", natural: true },
            "lg": { raw: "0 10px 15px rgba(0, 0, 0, 0.5)", natural: true },
            "glow-gold": { raw: "0 0 20px rgba(201, 162, 39, 0.4)", natural: true },
            "glow-mystic": { raw: "0 0 20px rgba(74, 63, 107, 0.4)", natural: true },
        },
    },
    transitions: createStyleExport({
        unit: 'ms ease',
        unitPosition: 'suffix',
        stringify: false,
        values: {
            "fast": { raw: "150" },
            "normal": { raw: "250" },
            "slow": { raw: "400" },
        },
    }),
    radii: createStyleExport({
        unit: 'px',
        unitPosition: 'suffix',
        stringify: false,
        values: {
            "sm": { raw: "4" },
            "md": { raw: "8" },
            "lg": { raw: "12" },
            "xl": { raw: "16" },
            "full": { raw: "9999" },
        },
    }),
};

function createStyleExport(styleExport) {
    for (const [key, styleValue] of Object.entries(styleExport.values)) {
        if (styleValue.natural) {
            styleExport.values[key].dressed = styleValue.raw;
            continue;
        };
        let dressedValue = '';
        dressedValue += styleExport.unit && styleExport.unitPosition === 'prefix' ? styleExport.unit : '';
        dressedValue += styleValue.raw;
        dressedValue += styleExport.unit && (!styleExport.unitPosition || styleExport.unitPosition === 'suffix') ? styleExport.unit : '';
        styleExport.values[key].dressed = styleExport.stringify ? `"${dressedValue}"` : dressedValue;
    }
    return styleExport;
}