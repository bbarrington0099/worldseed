/**
 * Database seed helper functions
 * Used to create official/seeded data with consistent patterns
 */

import { prisma } from "./prisma";
import * as Prisma from "@prismagen/client";
import * as db from "./db";
import { slugify } from "./utils";
import type {
    GuildRank,
    MemberStatus,
    UserRole,
    DeityRelationshipCategory,
    FactionInfluenceLevel,
    ProfessionRestrictionType,
} from "@prismagen/client";

// ============================================================================
// WORLD & GEOGRAPHY
// ============================================================================

export async function createWorld(data: {
    name: string;
    description: string;
    circumferenceMi?: number;
    diameterMi?: number;
    ageCycles?: number;
    surfaceAreaSqMi?: bigint;
}) {
    return prisma.world.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, official: true },
    });
}

export async function createContinent(data: {
    worldId: string;
    name: string;
    description: string;
    lengthMi?: number;
    widthMi?: number;
    heightMi?: number;
    surfaceAreaSqMi?: number;
    primaryColor?: string;
    secondaryColor?: string;
    flagSymbol?: string;
    flagDescription?: string;
    mapImagePath?: string;
    flagImagePath?: string;
}) {
    const slug = slugify(data.name);
    return prisma.continent.upsert({
        where: { slug },
        update: data,
        create: { ...data, slug, official: true },
    });
}

export async function createTown(data: {
    continentId: string;
    name: string;
    description: string;
    location?: string;
    population?: number;
}) {
    const slug = slugify(data.name);
    return prisma.town.upsert({
        where: {
            continentId_slug: {
                continentId: data.continentId,
                slug,
            },
        },
        update: data,
        create: { ...data, slug, official: true },
    });
}

export async function createCapital(data: {
    continentId: string;
    name: string;
    location: string;
    description: string;
}) {
    return prisma.capital.upsert({
        where: { continentId: data.continentId },
        update: data,
        create: data,
    });
}

export async function createRuler(data: {
    capitalId: string;
    name: string;
    race?: string;
    title?: string;
    personality?: string;
    rulingStyle?: string;
    background?: string;
    appearance?: string;
    imagePath?: string;
    deityId?: string;
    deityReasoning?: string;
}) {
    return prisma.ruler.upsert({
        where: { capitalId: data.capitalId },
        update: data,
        create: data,
    });
}

// ============================================================================
// RACES
// ============================================================================

export async function createRace(data: {
    name: string;
    description: string;
    size?: string;
    speed?: string;
    age?: string;
    alignment?: string;
    heightRange?: string;
    weightRange?: string;
    alabastriaLore?: string;
    playstyle?: string;
}) {
    const slug = slugify(data.name);
    return prisma.race.upsert({
        where: { slug },
        update: data,
        create: { ...data, slug, official: true },
    });
}

export async function createSubrace(data: {
    raceId: string;
    name: string;
    description: string;
    heightRange?: string;
    weightRange?: string;
    alabastriaContext?: string;
    playstyle?: string;
}) {
    const slug = slugify(data.name);
    return prisma.subrace.upsert({
        where: {
            raceId_slug: {
                raceId: data.raceId,
                slug,
            },
        },
        update: data,
        create: { ...data, slug, official: true },
    });
}

// ============================================================================
// CLASSES
// ============================================================================

export async function createClass(data: {
    name: string;
    description: string;
    role?: string;
    primaryAbility?: string;
    hitDie?: string;
    armorProficiency?: string;
    weaponProficiency?: string;
    toolProficiency?: string;
    alabastriaLore?: string;
    playstyle?: string;
}) {
    const slug = slugify(data.name);
    return prisma.class.upsert({
        where: { slug },
        update: data,
        create: { ...data, slug, official: true },
    });
}

export async function createSubclass(data: {
    classId: string;
    name: string;
    description: string;
    alabastriaContext?: string;
    playstyle?: string;
}) {
    const slug = slugify(data.name);
    return prisma.subclass.upsert({
        where: {
            classId_slug: {
                classId: data.classId,
                slug,
            },
        },
        update: data,
        create: { ...data, slug, official: true },
    });
}

// ============================================================================
// PANTHEON & DEITIES
// ============================================================================

export async function createPantheon(data: {
    name: string;
    description: string;
    symbol?: string;
}) {
    const slug = slugify(data.name);
    return prisma.pantheon.upsert({
        where: { slug },
        update: data,
        create: { ...data, slug, official: true },
    });
}

export async function createDeity(data: {
    pantheonId: string;
    name: string;
    title?: string;
    alignment?: string;
    symbol?: string;
    description: string;
    alabastriaContext?: string;
    temples?: string;
}) {
    const slug = slugify(data.name);
    return prisma.deity.upsert({
        where: { slug },
        update: data,
        create: { ...data, slug, official: true },
    });
}

export async function createDeityRelationship(data: {
    deityId: string;
    relatedDeityId: string;
    type: DeityRelationshipCategory;
    reasoning?: string;
}) {
    return prisma.deityRelationship.upsert({
        where: {
            deityId_relatedDeityId_type: {
                deityId: data.deityId,
                relatedDeityId: data.relatedDeityId,
                type: data.type,
            },
        },
        update: data,
        create: data,
    });
}

// ============================================================================
// GUILDS
// ============================================================================

export async function createGuild(data: {
    name: string;
    description: string;
    emblemPath?: string;
    foundedCycle?: number;
    continentId?: string;
}) {
    const slug = slugify(data.name);
    return prisma.guild.upsert({
        where: { slug },
        update: data,
        create: { ...data, slug, official: true },
    });
}

export async function createGuildStaff(data: {
    guildId: string;
    name: string;
    guildRole?: string;
    rank: GuildRank;
    appearance?: string;
    personality?: string;
    faith?: string;
    background?: string;
    imagePath?: string;
    raceId?: string;
    classId?: string;
    deityId?: string;
}) {
    return prisma.guildStaff.create({
        data: { ...data, official: true },
    });
}

export async function createGuildMember(data: {
    guildId: string;
    name: string;
    rank: GuildRank;
    level?: number;
    status?: MemberStatus;
    specialization?: string;
    backgroundSummary?: string;
    imagePath?: string;
    managedBy?: string;
    raceId?: string;
    subraceId?: string;
    classId?: string;
    subclassId?: string;
    deityId?: string;
    deityReasoning?: string;
}) {
    return prisma.guildMember.create({
        data: { ...data, official: true },
    });
}

// ============================================================================
// QUESTS
// ============================================================================

export async function createQuestReport(data: {
    guildId: string;
    name: string;
    summary: string;
    rank: GuildRank;
    commissionedBy?: string;
    date?: string;
    location?: string;
    duration?: string;
    outcome?: string;
    extraNotes?: string;
}) {
    return prisma.questReport.create({
        data: { ...data, official: true },
    });
}

// ============================================================================
// FACTIONS
// ============================================================================

export async function createFaction(data: {
    name: string;
    description: string;
    mainPurpose: string;
    emblemPath?: string;
    foundedCycle?: number;
}) {
    const slug = slugify(data.name);
    return prisma.faction.upsert({
        where: { slug },
        update: data,
        create: { ...data, slug, official: true },
    });
}

export async function createFactionRole(data: {
    name: string;
    description?: string;
    rankOrder?: number;
}) {
    return prisma.factionRole.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, official: true },
    });
}

export async function createFactionRelationshipType(data: {
    name: string;
    description?: string;
}) {
    return prisma.factionRelationshipType.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, official: true },
    });
}

// ============================================================================
// NPC SYSTEM
// ============================================================================

export async function createNPCProfession(data: {
    name: string;
    description?: string;
    category?: string;
    restrictionType?: ProfessionRestrictionType;
}) {
    return prisma.nPCProfession.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, official: true },
    });
}

export async function createNPCRelationshipType(data: {
    name: string;
    description?: string;
}) {
    return prisma.nPCRelationshipType.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, official: true },
    });
}

// ============================================================================
// HISTORY
// ============================================================================

export async function createHistoricalPeriod(data: {
    name: string;
    startCycle: number;
    endCycle?: number;
    description: string;
    significance?: string;
    sortOrder?: number;
}) {
    return prisma.historicalPeriod.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, official: true },
    });
}

export async function createHistoricalEvent(data: {
    periodId?: string;
    name: string;
    cycle: number;
    description: string;
    impact?: string;
    sortOrder?: number;
    continentId?: string;
}) {
    return prisma.historicalEvent.create({
        data: { ...data, official: true },
    });
}

// ============================================================================
// BESTIARY
// ============================================================================

export async function createCreatureType(data: {
    name: string;
    description: string;
    habits?: string;
    tactics?: string;
    weaknesses?: string;
}) {
    const slug = slugify(data.name);
    return prisma.creatureType.upsert({
        where: { slug },
        update: data,
        create: { ...data, slug, official: true },
    });
}

export async function createLegendaryCreature(data: {
    creatureTypeId: string;
    name: string;
    description: string;
    threatLevel?: string;
    questPotential?: string;
    isPast?: boolean;
    defeatedBy?: string;
    defeatedByTitle?: string;
    defeatStory?: string;
    legacy?: string;
    continentId?: string;
}) {
    return prisma.legendaryCreature.create({
        data: { ...data, official: true },
    });
}

// ============================================================================
// PLAYSTYLE GUIDE
// ============================================================================

export async function createPlaystyleCategory(data: {
    name: string;
    description: string;
}) {
    return prisma.playstyleCategory.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, official: true },
    });
}

export async function createRoleDescription(data: {
    name: string;
    description: string;
}) {
    return prisma.roleDescription.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, official: true },
    });
}

export async function createComplexityLevel(data: {
    level: string;
    description: string;
}) {
    return prisma.complexityLevel.upsert({
        where: { level: data.level },
        update: data,
        create: { ...data, official: true },
    });
}

// ============================================================================
// USERS
// ============================================================================

export async function createUser(data: {
    email: string;
    name?: string;
    passwordHash: string;
    role?: UserRole;
    mustChangePassword?: boolean;
}) {
    return prisma.user.upsert({
        where: { email: data.email },
        update: data,
        create: {
            ...data,
            role: data.role ?? "GUILD_MEMBER",
            mustChangePassword: data.mustChangePassword ?? true,
        },
    });
}

// ============================================================================
// CLEANUP
// ============================================================================

export async function deleteAllOfficialData() {
    // Delete in reverse dependency order
    const tables = [
        prisma.questFallenMember,
        prisma.questMemberReport,
        prisma.questLoot,
        prisma.questAward,
        prisma.questEnemy,
        prisma.questParticipant,
        prisma.questReport,
        prisma.guildMemberAchievement,
        prisma.guildMemberTag,
        prisma.factionGuildMemberMembership,
        prisma.factionNPCMembership,
        prisma.factionRelationship,
        prisma.factionBase,
        prisma.factionContinentPresence,
        prisma.faction,
        prisma.factionRelationshipType,
        prisma.factionRole,
        prisma.characterNPCRelationship,
        prisma.nPCRelationship,
        prisma.townNPC,
        prisma.professionTownRestriction,
        prisma.professionContinentRestriction,
        prisma.nPCProfession,
        prisma.nPCRelationshipType,
        prisma.guildMember,
        prisma.guildStaff,
        prisma.guildMembership,
        prisma.guildDM,
        prisma.guild,
        prisma.deityRecommendation,
        prisma.deityRelationship,
        prisma.deityHistory,
        prisma.deityColor,
        prisma.deitySymbol,
        prisma.deityHolyDay,
        prisma.deityFollower,
        prisma.deityDomain,
        prisma.deity,
        prisma.pantheon,
        prisma.legendaryCreature,
        prisma.continentCreatureType,
        prisma.creatureType,
        prisma.complexityClass,
        prisma.complexityLevel,
        prisma.roleBestClass,
        prisma.roleKeyAbility,
        prisma.roleDescription,
        prisma.abilityScoreImportance,
        prisma.abilityScoreClass,
        prisma.abilityScorePriority,
        prisma.playstyleClassRecommendation,
        prisma.playstyleCategory,
        prisma.historicalEvent,
        prisma.historicalPeriod,
        prisma.raceClassRecommendation,
        prisma.subclassFeature,
        prisma.subclass,
        prisma.classFeature,
        prisma.classSavingThrow,
        prisma.class,
        prisma.subraceTrait,
        prisma.subraceAbilityScore,
        prisma.subrace,
        prisma.raceName,
        prisma.raceContinent,
        prisma.raceTrait,
        prisma.raceLanguage,
        prisma.raceAbilityScore,
        prisma.race,
        prisma.tradeRoute,
        prisma.treaty,
        prisma.warConflict,
        prisma.continentPolitics,
        prisma.continentLanguage,
        prisma.voyage,
        prisma.townLeader,
        prisma.town,
        prisma.ruler,
        prisma.capital,
        prisma.continent,
        prisma.kingdom,
        prisma.world,
    ];

    for (const table of tables) {
        try {
            await (table as unknown as { deleteMany: (args: { where: { official: boolean } }) => Promise<unknown> }).deleteMany({
                where: { official: true },
            });
        } catch {
            // Some tables might not have official field, skip them
        }
    }
}

