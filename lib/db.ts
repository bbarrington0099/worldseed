/**
 * Database helper functions with caching support
 * These functions wrap Prisma queries and are designed to work with Next.js caching
 */

import { prisma } from "./prisma";
import * as Prisma from "@prismagen/client";
import { CACHE_TAGS } from "./constants";
import { slugify } from "./utils";

// Re-export cache tags for convenience
export { CACHE_TAGS };

// ============================================================================
// WORLD & GEOGRAPHY
// ============================================================================

export async function getWorld() {
    return prisma.world.findFirst({
        include: {
            continents: {
                orderBy: { name: "asc" },
            },
        },
    });
}

export async function getContinents() {
    return prisma.continent.findMany({
        orderBy: { name: "asc" },
        include: {
            capital: {
                include: {
                    ruler: true,
                },
            },
            kingdom: true,
        },
    });
}

export async function getContinentBySlug(slug: string) {
    return prisma.continent.findUnique({
        where: { slug },
        include: {
            capital: {
                include: {
                    ruler: {
                        include: {
                            deity: true,
                        },
                    },
                },
            },
            kingdom: true,
            towns: {
                orderBy: { name: "asc" },
                include: {
                    leader: true,
                },
            },
            languages: true,
            politics: true,
            voyagesFrom: {
                include: {
                    toContinent: true,
                },
            },
            warsConflicts: true,
            treaties: true,
            tradeRoutes: true,
            creatureTypes: {
                include: {
                    creatureType: true,
                },
            },
            factionPresence: {
                include: {
                    faction: true,
                },
            },
        },
    });
}

export async function getTownBySlug(continentSlug: string, townSlug: string) {
    const continent = await prisma.continent.findUnique({
        where: { slug: continentSlug },
    });

    if (!continent) return null;

    return prisma.town.findUnique({
        where: {
            continentId_slug: {
                continentId: continent.id,
                slug: townSlug,
            },
        },
        include: {
            continent: true,
            leader: true,
            npcs: {
                include: {
                    profession: true,
                    factionMemberships: {
                        include: {
                            faction: true,
                            role: true,
                        },
                    },
                },
            },
            factionBases: {
                include: {
                    faction: true,
                },
            },
        },
    });
}

// ============================================================================
// RACES
// ============================================================================

export async function getRaces() {
    return prisma.race.findMany({
        orderBy: { name: "asc" },
        include: {
            subraces: true,
            abilityScoreIncreases: true,
        },
    });
}

export async function getRaceBySlug(slug: string) {
    return prisma.race.findUnique({
        where: { slug },
        include: {
            abilityScoreIncreases: true,
            languages: true,
            traits: true,
            subraces: {
                include: {
                    abilityScoreIncreases: true,
                    traits: true,
                },
            },
            recommendedClasses: {
                include: {
                    class: true,
                },
            },
            continentLocations: {
                include: {
                    continent: true,
                },
            },
            deityRecommendations: {
                include: {
                    deity: true,
                },
            },
            names: true,
        },
    });
}

// ============================================================================
// CLASSES
// ============================================================================

export async function getClasses() {
    return prisma.class.findMany({
        orderBy: { name: "asc" },
        include: {
            subclasses: true,
        },
    });
}

export async function getClassBySlug(slug: string) {
    return prisma.class.findUnique({
        where: { slug },
        include: {
            savingThrows: true,
            keyFeatures: true,
            subclasses: {
                include: {
                    keyFeatures: true,
                },
            },
            recommendedRaces: {
                include: {
                    race: true,
                },
            },
            deityRecommendations: {
                include: {
                    deity: true,
                },
            },
        },
    });
}

// ============================================================================
// PANTHEON & DEITIES
// ============================================================================

export async function getPantheons() {
    return prisma.pantheon.findMany({
        orderBy: { name: "asc" },
        include: {
            deities: {
                orderBy: { name: "asc" },
            },
        },
    });
}

export async function getDeities() {
    return prisma.deity.findMany({
        orderBy: { name: "asc" },
        include: {
            pantheon: true,
            domains: true,
        },
    });
}

export async function getDeityBySlug(slug: string) {
    return prisma.deity.findUnique({
        where: { slug },
        include: {
            pantheon: true,
            domains: true,
            followers: true,
            holyDays: true,
            symbols: true,
            colors: true,
            history: true,
            alliesFrom: {
                include: {
                    relatedDeity: true,
                },
            },
            alliesTo: {
                include: {
                    deity: true,
                },
            },
            recommendations: {
                include: {
                    race: true,
                    subrace: true,
                    class: true,
                    subclass: true,
                    continent: true,
                },
            },
        },
    });
}

// ============================================================================
// GUILDS
// ============================================================================

export async function getGuilds() {
    return prisma.guild.findMany({
        orderBy: { name: "asc" },
        include: {
            continent: true,
            _count: {
                select: {
                    members: true,
                    staff: true,
                    quests: true,
                },
            },
        },
    });
}

export async function getGuildBySlug(slug: string) {
    return prisma.guild.findUnique({
        where: { slug },
        include: {
            continent: true,
            staff: {
                include: {
                    race: true,
                    class: true,
                    deity: true,
                },
            },
            members: {
                include: {
                    race: true,
                    subrace: true,
                    class: true,
                    subclass: true,
                    deity: true,
                    tags: true,
                    achievements: true,
                },
            },
            quests: {
                orderBy: { createdAt: "desc" },
                include: {
                    participants: {
                        include: {
                            member: true,
                        },
                    },
                },
            },
        },
    });
}

// ============================================================================
// FACTIONS
// ============================================================================

export async function getFactions() {
    return prisma.faction.findMany({
        orderBy: { name: "asc" },
        include: {
            continentPresence: {
                include: {
                    continent: true,
                },
            },
            _count: {
                select: {
                    bases: true,
                    npcMembers: true,
                    guildMembers: true,
                },
            },
        },
    });
}

export async function getFactionBySlug(slug: string) {
    return prisma.faction.findUnique({
        where: { slug },
        include: {
            continentPresence: {
                include: {
                    continent: true,
                },
            },
            bases: {
                include: {
                    town: {
                        include: {
                            continent: true,
                        },
                    },
                },
            },
            npcMembers: {
                include: {
                    npc: true,
                    role: true,
                    base: true,
                },
            },
            guildMembers: {
                include: {
                    guildMember: true,
                    role: true,
                    base: true,
                },
            },
            relationshipsFrom: {
                include: {
                    toFaction: true,
                    relationshipType: true,
                },
            },
            relationshipsTo: {
                include: {
                    fromFaction: true,
                    relationshipType: true,
                },
            },
        },
    });
}

// ============================================================================
// HISTORY
// ============================================================================

export async function getHistoricalPeriods() {
    return prisma.historicalPeriod.findMany({
        orderBy: { sortOrder: "asc" },
        include: {
            events: {
                orderBy: { sortOrder: "asc" },
            },
        },
    });
}

// ============================================================================
// BESTIARY
// ============================================================================

export async function getCreatureTypes() {
    return prisma.creatureType.findMany({
        orderBy: { name: "asc" },
        include: {
            legendaryCreatures: true,
            continentReasons: {
                include: {
                    continent: true,
                },
            },
        },
    });
}

export async function getCreatureTypeBySlug(slug: string) {
    return prisma.creatureType.findUnique({
        where: { slug },
        include: {
            legendaryCreatures: {
                include: {
                    continent: true,
                },
            },
            continentReasons: {
                include: {
                    continent: true,
                },
            },
        },
    });
}

// ============================================================================
// NPC PROFESSIONS
// ============================================================================

export async function getProfessions() {
    return prisma.nPCProfession.findMany({
        orderBy: { name: "asc" },
        include: {
            restrictedToContinents: {
                include: {
                    continent: true,
                },
            },
            restrictedToTowns: {
                include: {
                    town: {
                        include: {
                            continent: true,
                        },
                    },
                },
            },
        },
    });
}

export async function getAvailableProfessions(continentId?: string, townId?: string) {
    const professions = await prisma.nPCProfession.findMany({
        include: {
            restrictedToContinents: {
                include: {
                    continent: true,
                },
            },
            restrictedToTowns: {
                include: {
                    town: true,
                },
            },
        },
    });

    return professions.filter((profession) => {
        if (profession.restrictionType === "UNRESTRICTED") {
            return true;
        }

        if (profession.restrictionType === "CONTINENT" && continentId) {
            return profession.restrictedToContinents.some(
                (r) => r.continent.id === continentId
            );
        }

        if (profession.restrictionType === "TOWN" && townId) {
            return profession.restrictedToTowns.some(
                (r) => r.town.id === townId
            );
        }

        return false;
    });
}

// ============================================================================
// RELATIONSHIP TYPES
// ============================================================================

export async function getNPCRelationshipTypes() {
    return prisma.nPCRelationshipType.findMany({
        orderBy: { name: "asc" },
    });
}

export async function getFactionRelationshipTypes() {
    return prisma.factionRelationshipType.findMany({
        orderBy: { name: "asc" },
    });
}

export async function getFactionRoles() {
    return prisma.factionRole.findMany({
        orderBy: { rankOrder: "asc" },
    });
}

// ============================================================================
// USER HELPERS
// ============================================================================

export async function getUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email },
    });
}

export async function isUserGuildDM(userId: string, guildId: string) {
    const dm = await prisma.guildDM.findUnique({
        where: {
            userId_guildId: {
                userId,
                guildId,
            },
        },
    });
    return !!dm;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function generateSlug(name: string): string {
    return slugify(name);
}

