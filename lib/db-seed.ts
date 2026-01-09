/**
 * Database seed helper functions
 * Used to create seeded/seeded data with consistent patterns
 */

import { prisma } from './prisma';
import { Prisma, ContinentLanguagePrevalence } from "@prismagen/client";
import * as db from "./db";
import { slugify } from './utils';
import type {
    GuildRank,
    MemberStatus
} from "@prismagen/client";

// ============================================================================
// WORLD & GEOGRAPHY
// ============================================================================

export async function createSeason(data: Prisma.SeasonCreateInput): Promise<Prisma.SeasonGetPayload<{}>> {
    return await db.createSeason(data, true);
}

export async function createMonth(data: Prisma.MonthUncheckedCreateInput): Promise<Prisma.MonthGetPayload<{}>> {
    return await db.createMonth(data, true);
}

export async function createWeekDay(data: Prisma.WeekDayCreateInput): Promise<Prisma.WeekDayGetPayload<{}>> {
    const weekDay = await db.createWeekDay(data, true);
    await createWorldConnection({
        id: `weekday-alabastria-connection-${weekDay.id}`,
        worldId: 'alabastria',
        weekDayId: weekDay.id,
    });
    return weekDay;
}

export async function createWorld(data: Prisma.WorldUncheckedCreateInput): Promise<Prisma.WorldGetPayload<{}>> {
    const world = await db.createWorld(data, true);

    if (!process.env.DEFAULT_ADMIN_EMAIL) {
        throw new Error('DEFAULT_ADMIN_EMAIL is not set in environment variables.');
    }
    const defaultUser = await prisma.user.findUnique({
		where: { email: process.env.DEFAULT_ADMIN_EMAIL },
	});
    if (!defaultUser) {
		throw new Error(
			`Default admin user with email ${process.env.DEFAULT_ADMIN_EMAIL} not found.`
		);
	}

    await prisma.world.update({
        where: { id: world.id },
        data: {
            owner: { connect: { id: defaultUser.id } },
        },
    });

    return world;
}

export async function createWorldConnection(data: Prisma.WorldConnectionUncheckedCreateInput): Promise<Prisma.WorldConnectionGetPayload<{}>> {
    return await db.createWorldConnection(data, true);
}

export async function createKingdom(data: Prisma.KingdomUncheckedCreateInput): Promise<Prisma.KingdomGetPayload<{}>> {
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

export async function createHistoricalPeriod(data: Prisma.HistoricalPeriodUncheckedCreateInput): Promise<Prisma.HistoricalPeriodGetPayload<{}>> {
    return await db.createHistoricalPeriod(data, true);
}

// ============================================================================
// BESTIARY
// ============================================================================

export async function createCreatureSize(data: Prisma.CreatureSizeCreateInput): Promise<Prisma.CreatureSizeGetPayload<{}>> {
    return await db.createCreatureSize(data, true);
}

export async function createCreatureType(data: Prisma.CreatureTypeCreateInput): Promise<Prisma.CreatureTypeGetPayload<{}>> {
    const creatureType = await db.createCreatureType(data, true);
    createWorldConnection({
        id: `creature-type-alabastria-connection-${creatureType.id}`,
        worldId: 'alabastria',
        creatureTypeId: creatureType.id,
    });
    return creatureType;
}

export async function createContinentCreatureType(data: Prisma.ContinentCreatureTypeUncheckedCreateInput): Promise<Prisma.ContinentCreatureTypeGetPayload<{}>> {
    return await db.createContinentCreatureType(data, true);
}

export async function createLegendaryCreature(data: Prisma.LegendaryCreatureUncheckedCreateInput): Promise<Prisma.LegendaryCreatureGetPayload<{}>> {
    const legendaryCreature = await db.createLegendaryCreature(data, true);
    createWorldConnection({
        id: `legendary-creature-alabastria-connection-${legendaryCreature.id}`,
        worldId: 'alabastria',
        legendaryCreatureId: legendaryCreature.id,
    });
    return legendaryCreature;
}

// ============================================================================
// RACES
// ============================================================================

export async function createRaceName(data: Prisma.RaceNameUncheckedCreateInput): Promise<Prisma.RaceNameGetPayload<{}>> {
    return db.createRaceName(data, true);
}

export async function createRace(data: Prisma.RaceUncheckedCreateInput & { alabastriaLore: string }): Promise<Prisma.RaceGetPayload<{}>> {
    const { alabastriaLore, ...raceData } = data;
    const race = await db.createRace(raceData, true);
    createWorldConnection({
        id: `race-alabastria-connection-${race.id}`,
        worldId: 'alabastria',
        raceId: race.id,
        connection: data.alabastriaLore,
    });
    return race;
}

export async function createSubrace(data: Prisma.SubraceUncheckedCreateInput & { alabastriaContext: string }): Promise<Prisma.SubraceGetPayload<{}>> {
    const { alabastriaContext, ...subraceData } = data;
    const subrace = await db.createSubrace(subraceData, true);
    createWorldConnection({
        id: `subrace-alabastria-connection-${subrace.id}`,
        worldId: 'alabastria',
        subraceId: subrace.id,
        connection: data.alabastriaContext,
    });
    return subrace;
}

// ============================================================================
// CLASSES
// ============================================================================

export async function createClassRole(data: Prisma.ClassRoleCreateInput): Promise<Prisma.ClassRoleGetPayload<{}>> {
    return db.createClassRole(data, true);
}

export async function createClass(data: Prisma.ClassCreateInput & { alabastriaLore: string }) : Promise<Prisma.ClassGetPayload<{}>> {
    const { alabastriaLore, ...classData } = data;
    const clazz = await db.createClass(classData, true);
    createWorldConnection({
        id: `class-alabastria-connection-${clazz.id}`,
        worldId: 'alabastria',
        classId: clazz.id,
        connection: data.alabastriaLore,
    });
    return clazz;
}

export async function createSubclass(data: Prisma.SubclassUncheckedCreateInput & { alabastriaContext: string }) : Promise<Prisma.SubclassGetPayload<{}>> {
    const { alabastriaContext, ...subclassData } = data;
    const subclass = await db.createSubclass(subclassData, true);
    createWorldConnection({
        id: `subclass-alabastria-connection-${subclass.id}`,
        worldId: 'alabastria',
        subclassId: subclass.id,
        connection: data.alabastriaContext,
    });
    return subclass;
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

export async function createDeity(data: Prisma.DeityUncheckedCreateInput & { alabastriaContext: string }): Promise<Prisma.DeityGetPayload<{}>> {
    const { alabastriaContext, ...deityData } = data;
    const deity = await db.createDeity(deityData, true);
    createWorldConnection({
        id: `deity-alabastria-connection-${deity.id}`,
        worldId: 'alabastria',
        deityId: deity.id,
        connection: data.alabastriaContext,
    });
    return deity;
}

export async function createDeityRelationship(data: Prisma.DeityRelationshipUncheckedCreateInput): Promise<Prisma.DeityRelationshipGetPayload<{}>> {
    return db.createDeityRelationship(data, true);
}

// ============================================================================
// RECOMMENDATIONS
// ============================================================================

export async function createRaceSubclassRecommendation(data: Prisma.RaceSubclassRecommendationUncheckedCreateInput): Promise<Prisma.RaceSubclassRecommendationGetPayload<{}>> {
    return db.createRaceSubclassRecommendation(data, true);
}

export async function createSubraceSubclassRecommendation(data: Prisma.SubraceSubclassRecommendationUncheckedCreateInput): Promise<Prisma.SubraceSubclassRecommendationGetPayload<{}>> {
    return db.createSubraceSubclassRecommendation(data, true);
}

export async function createRaceContinent(data: Prisma.RaceContinentUncheckedCreateInput): Promise<Prisma.RaceContinentGetPayload<{}>> {
    return db.createRaceContinent(data, true);
}

export async function createSubraceContinent(data: Prisma.SubraceContinentUncheckedCreateInput): Promise<Prisma.SubraceContinentGetPayload<{}>> {
    return db.createSubraceContinent(data, true);
}

export async function createSubclassContinent(data: Prisma.SubclassContinentUncheckedCreateInput): Promise<Prisma.SubclassContinentGetPayload<{}>> {
    return db.createSubclassContinent(data, true);
}

// ============================================================================
// CHARACTERS
// ============================================================================

export async function createCharacter(data: Prisma.CharacterUncheckedCreateInput): Promise<Prisma.CharacterGetPayload<{}>> {
    const character = await db.createCharacter(data, true);
    createWorldConnection({
        id: `character-alabastria-connection-${character.id}`,
        worldId: 'alabastria',
        characterId: character.id,
    });
    return character;
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

export async function createUser(data: Prisma.UserCreateInput & { plainPassword: string }): Promise<void> {
    await db.createUser(data);
}