/**
 * Application constants for Alabastria
 */

export const APP_NAME = "Alabastria";
export const APP_DESCRIPTION = "Explore the lands of Alabastria and discover your character's destiny";

// Cache configuration
export const CACHE_TAGS = {
    // World data
    WORLD: "world",
    CONTINENTS: "continents",
    TOWNS: "towns",
    KINGDOMS: "kingdoms",

    // History
    HISTORY_PERIODS: "history-periods",
    HISTORY_EVENTS: "history-events",

    // Character building
    RACES: "races",
    CLASSES: "classes",

    // Religion
    PANTHEONS: "pantheons",
    DEITIES: "deities",
    DEITY_RELATIONSHIPS: "deity-relationships",

    // Guilds
    GUILDS: "guilds",
    GUILD_STAFF: "guild-staff",
    GUILD_MEMBERS: "guild-members",
    QUESTS: "quests",

    // NPCs
    NPCS: "npcs",
    PROFESSIONS: "professions",
    NPC_RELATIONSHIPS: "npc-relationships",

    // Factions
    FACTIONS: "factions",
    FACTION_BASES: "faction-bases",
    FACTION_ROLES: "faction-roles",
    FACTION_RELATIONSHIPS: "faction-relationships",

    // Guides
    PLAYSTYLE: "playstyle",
    BESTIARY: "bestiary",

    // User data
    USERS: "users",
    CHARACTERS: "characters",
} as const;

// Cache lifetimes (in seconds)
export const CACHE_LIFE = {
    // Official/seed data - long cache
    OFFICIAL: {
        stale: 86400,      // 1 day
        revalidate: 604800, // 1 week
        expire: 2592000,    // 30 days
    },
    // User-generated data - shorter cache
    USER: {
        stale: 60,         // 1 minute
        revalidate: 300,   // 5 minutes
        expire: 3600,      // 1 hour
    },
    // Development - minimal cache
    DEV: {
        stale: 1,
        revalidate: 60,
        expire: 3600,
    },
} as const;

// Guild ranks in order
export const GUILD_RANKS = [
    "COAL",
    "COPPER",
    "IRON",
    "SILVER",
    "GOLD",
    "PLATINUM",
    "MITHRAL",
] as const;

// Faction influence levels
export const FACTION_INFLUENCE_LEVELS = [
    "MINOR",
    "MODERATE",
    "MAJOR",
    "DOMINANT",
    "HIDDEN",
] as const;

// User roles
export const USER_ROLES = ["ADMIN", "DM", "GUILD_MEMBER"] as const;

// Pagination defaults
export const PAGINATION = {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
} as const;

// Image upload limits
export const UPLOAD_LIMITS = {
    MAX_FILE_SIZE: 4 * 1024 * 1024, // 4MB
    ACCEPTED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif"],
} as const;

// NPC stat ranges
export const NPC_STATS = {
    MIN_ABILITY_SCORE: 3,
    MAX_ABILITY_SCORE: 20,
    DEFAULT_ABILITY_SCORE: 10,
} as const;

