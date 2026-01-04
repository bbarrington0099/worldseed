/**
 * Database seed helper functions
 * Used to create seeded/seeded data with consistent patterns
 */

import { prisma } from './prisma';
import { Prisma, ContinentLanguagePrevalence, ContinentCreatureRelation } from "@prismagen/client";
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

export async function createWorld(data: Prisma.WorldCreateInput): Promise<Prisma.WorldGetPayload<{}>> {
    return await db.createWorld(data, true);
}

export async function createKingdom(data: Prisma.KingdomCreateInput): Promise<Prisma.KingdomGetPayload<{}>> {
    return await db.createKingdom(data, true);
}

export async function createContinent(data: Prisma.ContinentCreateInput): Promise<Prisma.ContinentGetPayload<{}>> {
    return await db.createContinent(data, true);
}

export async function setKingdomCapital(kingdomId: string, continentId: string): Promise<boolean> {
    return await db.setKingdomCapital(kingdomId, continentId);
}

export async function createTown(data: Prisma.TownCreateInput): Promise<Prisma.TownGetPayload<{}>> {
    return await db.createTown(data, true);
}

export async function setContinentCapital(continentId: string, townId: string): Promise<boolean> {
    return await db.setContinentCapital(continentId, townId);
}

export async function createRegion(data: Prisma.RegionCreateInput): Promise<Prisma.RegionGetPayload<{}>> {
    return await db.createRegion(data, true);
}

export async function createVoyage(data: Prisma.VoyageCreateInput): Promise<Prisma.VoyageGetPayload<{}>> {
    return await db.createVoyage(data, true);
}

export async function createTradeRoute(data: Prisma.TradeRouteCreateInput): Promise<Prisma.TradeRouteGetPayload<{}>> {
    return await db.createTradeRoute(data, true);
}

export async function createLanguage(data: Prisma.LanguageCreateInput): Promise<Prisma.LanguageGetPayload<{}>> {
    return await db.createLanguage(data, true);
}

export async function addContinentLanguage(prevalence: ContinentLanguagePrevalence, continentId: string, languageId: string): Promise<boolean> {
    return await db.addContinentLanguage(prevalence, continentId, languageId);
}

export async function createWarConflict(data: Prisma.WarConflictCreateInput): Promise<Prisma.WarConflictGetPayload<{}>> {
    return await db.createWarConflict(data, true);
}

export async function createTreaty(data: Prisma.TreatyCreateInput): Promise<Prisma.TreatyGetPayload<{}>> {
    return await db.createTreaty(data, true);
}

// ============================================================================
// BESTIARY
// ============================================================================

export async function createCreatureSize(data: Prisma.CreatureSizeCreateInput): Promise<Prisma.CreatureSizeGetPayload<{}>> {
    return await db.createCreatureSize(data, true);
}

export async function createCreatureType(data: Prisma.CreatureTypeCreateInput): Promise<Prisma.CreatureTypeGetPayload<{}>> {
    return await db.createCreatureType(data, true);
}

export async function createContinentCreatureType(data: Prisma.ContinentCreatureTypeUncheckedCreateInput): Promise<Prisma.ContinentCreatureTypeGetPayload<{}>> {
    return await db.createContinentCreatureType(data, true);
}

export async function createLegendaryCreature(data: Prisma.LegendaryCreatureUncheckedCreateInput): Promise<Prisma.LegendaryCreatureGetPayload<{}>> {
    return await db.createLegendaryCreature(data, true);
}

// ============================================================================
// RACES
// ============================================================================

export async function createRaceAbilityScore(data: Prisma.RaceAbilityScoreCreateInput): Promise<Prisma.RaceAbilityScoreGetPayload<{}>> {
    return db.createRaceAbilityScore(data, true);
}

export async function createRaceTrait(data: Prisma.RaceTraitCreateInput): Promise<Prisma.RaceTraitGetPayload<{}>> {
    return db.createRaceTrait(data, true);
}

export async function createRaceName(data: Prisma.RaceNameUncheckedCreateInput): Promise<Prisma.RaceNameGetPayload<{}>> {
    return db.createRaceName(data, true);
}

export async function createRace(data: Prisma.RaceUncheckedCreateInput): Promise<Prisma.RaceGetPayload<{}>> {
    return db.createRace(data, true);
}

export async function createSubrace(data: Prisma.SubraceUncheckedCreateInput): Promise<Prisma.SubraceGetPayload<{}>> {
    return db.createSubrace(data, true);
}

// ============================================================================
// CLASSES
// ============================================================================

export async function createClassRole(data: Prisma.ClassRoleCreateInput): Promise<Prisma.ClassRoleGetPayload<{}>> {
    return db.createClassRole(data, true);
}

export async function createClassFeature(data: Prisma.ClassFeatureCreateInput): Promise<Prisma.ClassFeatureGetPayload<{}>> {
    return db.createClassFeature(data, true);
}

export async function createClass(data: Prisma.ClassCreateInput) : Promise<Prisma.ClassGetPayload<{}>> {
    return db.createClass(data, true);
}

export async function createSubclass(data: Prisma.SubclassUncheckedCreateInput) : Promise<Prisma.SubclassGetPayload<{}>> {
    return db.createSubclass(data, true);
}

// ============================================================================
// PANTHEON & DEITIES
// ============================================================================

export async function createPantheon(data: Prisma.PantheonCreateInput): Promise<Prisma.PantheonGetPayload<{}>> {
    return db.createPantheon(data, true);
}

export async function createDeityHolyDay(data: Prisma.DeityHolyDayUncheckedCreateInput): Promise<Prisma.DeityHolyDayGetPayload<{}>> {
    return db.createDeityHolyDay(data, true);
}

export async function createDeityHistory(data: Prisma.DeityHistoryUncheckedCreateInput): Promise<Prisma.DeityHistoryGetPayload<{}>> {
    return db.createDeityHistory(data, true);
}

export async function createDeity(data: Prisma.DeityUncheckedCreateInput): Promise<Prisma.DeityGetPayload<{}>> {
    return db.createDeity(data, true);
}

export async function createDeityRelationship(data: Prisma.DeityRelationshipUncheckedCreateInput): Promise<Prisma.DeityRelationshipGetPayload<{}>> {
    return db.createDeityRelationship(data, true);
}

// ============================================================================
// CHARACTERS
// ============================================================================

export async function createCharacter(data: Prisma.CharacterUncheckedCreateInput): Promise<Prisma.CharacterGetPayload<{}>> {
    return db.createCharacter(data, true);
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
        create: { ...data, slug, seeded: true },
    });
}

export async function createGuildRole(data: {
    name: string;
    description?: string;
}) {
    return prisma.guildRole.upsert({
        where: { id: data.name }, // Assuming name is used as id for upsert
        update: data,
        create: { ...data, seeded: true, id: data.name }, // Ensure id is passed for create as well
    });
}

export async function createGuildStaff(data: {
    guildId: string;
    guildRoleId: string;
    rank: GuildRank;
    characterId: string;
}) {
    return prisma.guildStaff.upsert({
        where: { characterId: data.characterId },
        update: data,
        create: { ...data, seeded: true },
    });
}

export async function createGuildMember(data: {
    guildId: string;
    rank: GuildRank;
    status?: MemberStatus;
    specialization?: string;
    managedById?: string;
    characterId: string;
}) {
    return prisma.guildMember.upsert({
        where: { characterId: data.characterId },
        update: data,
        create: { ...data, seeded: true },
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
    return prisma.questReport.upsert({
        where: { id: data.guildId },
        update: data,
        create: { ...data, seeded: true },
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
        create: { ...data, slug, seeded: true },
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
        create: { ...data, seeded: true },
    });
}

export async function createFactionRelationshipType(data: {
    name: string;
    description?: string;
}) {
    return prisma.factionRelationshipType.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, seeded: true },
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
        create: { ...data, seeded: true },
    });
}

export async function createNPCRelationshipType(data: {
    name: string;
    description?: string;
}) {
    return prisma.nPCRelationshipType.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, seeded: true },
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
        create: { ...data, seeded: true },
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
        data: { ...data, seeded: true },
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
        create: { ...data, seeded: true },
    });
}

export async function createRoleDescription(data: {
    name: string;
    description: string;
}) {
    return prisma.roleDescription.upsert({
        where: { name: data.name },
        update: data,
        create: { ...data, seeded: true },
    });
}

export async function createComplexityLevel(data: {
    level: string;
    description: string;
}) {
    return prisma.complexityLevel.upsert({
        where: { level: data.level },
        update: data,
        create: { ...data, seeded: true },
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
