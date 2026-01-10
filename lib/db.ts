/**
 * Database helper functions with caching support
 * These functions wrap Prisma queries and are designed to work with Next.js caching
 */

import { prisma } from "./prisma";
import { ContinentLanguagePrevalence, UserRole, Prisma } from "@prismagen/client";
import { CACHE_TAGS } from "./constants";
import { slugify } from "./utils";
import bcrypt from "bcrypt";

// Re-export cache tags for convenience
export { CACHE_TAGS };

// ============================================================================
// USER MANAGEMENT
// ============================================================================

export async function createUserRole(data: Prisma.UserRoleCreateInput): Promise<Prisma.UserRoleGetPayload<{}>> {
    return await prisma.userRole.upsert({
        where: { id: data.id },
        update: data,
        create: data,
    });
}

export async function createUser(
    data: Prisma.UserCreateInput & { plainPassword: string }
): Promise<Prisma.UserGetPayload<{}>> {
    const { plainPassword, ...userData } = data;

    if (!userData.email || !plainPassword) {
        throw new Error("Email and plainPassword are required to create a user.");
    }

    const worldId = process.env.WORLD_SEED_ID;
    if (!worldId) {
        throw new Error("Missing WORLD_SEED_ID in environment variables.");
    }

    const passwordHash = await bcrypt.hash(plainPassword, 10);

    try {
        await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    ...userData,
                    passwordHash,
                },
            });
            
            const worldCount = await tx.world.count();
            if (worldCount > 0) {
                await tx.world.update({
                    where: { id: worldId },
                    data: {
                        occupants: {
                            connect: { id: user.id },
                        },
                    },
                });
            }
        });
        return await prisma.user.findUnique({
            where: { email: data.email },
        }) as Prisma.UserGetPayload<{}>;
    } catch (err: any) {
        if (err.code === "P2002") {
            throw new Error(`User with email ${data.email} already exists.`);
        }
        throw err;
    }
}

// ============================================================================
// WORLD & GEOGRAPHY
// ============================================================================

export async function createSeason(data: Prisma.SeasonCreateInput, seeded: boolean = false): Promise<Prisma.SeasonGetPayload<{}>> {
    return await prisma.season.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createMonth(data: Prisma.MonthUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.MonthGetPayload<{}>> {        
    return await prisma.month.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createWeekDay(data: Prisma.WeekDayCreateInput, seeded: boolean = false): Promise<Prisma.WeekDayGetPayload<{}>> {
    return await prisma.weekDay.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createWorld(data: Prisma.WorldUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.WorldGetPayload<{}>> {
    if (!data.ownerId) {
		if (!process.env.DEFAULT_ADMIN_EMAIL) {
			throw new Error(
				'Missing DEFAULT_ADMIN_EMAIL in environment variables.'
			);
		}
		const defaultUser = await prisma.user.findUnique({
			where: { email: process.env.DEFAULT_ADMIN_EMAIL },
		});
        if (!defaultUser) {
            throw new Error(`Default admin user with email ${process.env.DEFAULT_ADMIN_EMAIL} not found.`);
        }
        data.ownerId = defaultUser.id;
	}
    
    return await prisma.world.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createKingdom(data: Prisma.KingdomUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.KingdomGetPayload<{}>> {
    return await prisma.kingdom.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createContinent(data: Prisma.ContinentCreateInput, seeded: boolean = false): Promise<Prisma.ContinentGetPayload<{}>> {
    return await prisma.continent.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function setKingdomCapital(kingdomId: string, continentId: string): Promise<boolean> {
    try {
        await prisma.kingdom.update({
            where: { id: kingdomId },
            data: { capitalContinentId: continentId },
        });
    } catch (error) {
        console.error(`Error setting kingdom capital: ${error}`);
        return false;
    }
    return true;
}

export async function createTown(data: Prisma.TownCreateInput, seeded: boolean = false): Promise<Prisma.TownGetPayload<{}>> {
    return await prisma.town.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function setContinentCapital(continentId: string, townId: string): Promise<boolean> {
    try {
        await prisma.continent.update({
            where: { id: continentId },
            data: { capitalTownId: townId },
        });
    } catch (error) {
        console.error(`Error setting continent capital: ${error}`);
        return false;
    }
    return true;
}

export async function createRegion(data: Prisma.RegionCreateInput, seeded: boolean = false): Promise<Prisma.RegionGetPayload<{}>> {
    return await prisma.region.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createVoyage(data: Prisma.VoyageCreateInput, seeded: boolean = false): Promise<Prisma.VoyageGetPayload<{}>> {
    return await prisma.voyage.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createTradeRoute(data: Prisma.TradeRouteCreateInput, seeded: boolean = false): Promise<Prisma.TradeRouteGetPayload<{}>> {
    return await prisma.tradeRoute.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createLanguage(data: Prisma.LanguageCreateInput, seeded: boolean = false): Promise<Prisma.LanguageGetPayload<{}>> {
    return await prisma.language.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

const ContinentLanguagePrevalenceMap: Record<ContinentLanguagePrevalence, string> = {
    [ContinentLanguagePrevalence.PRIMARY]: "primaryLanguages",
    [ContinentLanguagePrevalence.SECONDARY]: "secondaryLanguages",
    [ContinentLanguagePrevalence.RARE]: "rareLanguages",
} as const;

export async function addContinentLanguage(prevalence: ContinentLanguagePrevalence, continentId: string, languageId: string): Promise<boolean> {
    try {
        await prisma.continent.update({
            where: { id: continentId },
            data: { [ContinentLanguagePrevalenceMap[prevalence]]: { connect: { id: languageId } } },
        });
    } catch (error) {
        console.error(`Error adding continent language: ${error}`);
        return false;
    }
    return true;
}

export async function createWarConflict(data: Prisma.WarConflictCreateInput, seeded: boolean = false): Promise<Prisma.WarConflictGetPayload<{}>> {
    return await prisma.warConflict.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createTreaty(data: Prisma.TreatyCreateInput, seeded: boolean = false): Promise<Prisma.TreatyGetPayload<{}>> {
    return await prisma.treaty.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createHistoricalPeriod(data: Prisma.HistoricalPeriodUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.HistoricalPeriodGetPayload<{}>> {
    return await prisma.historicalPeriod.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

// ============================================================================
// BESTIARY
// ============================================================================

export async function createCreatureSize(data: Prisma.CreatureSizeCreateInput, seeded: boolean = false): Promise<Prisma.CreatureSizeGetPayload<{}>> {
    return await prisma.creatureSize.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createCreatureType(data: Prisma.CreatureTypeCreateInput, seeded: boolean = false): Promise<Prisma.CreatureTypeGetPayload<{}>> {
    return await prisma.creatureType.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createContinentCreatureType(data: Prisma.ContinentCreatureTypeUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.ContinentCreatureTypeGetPayload<{}>> {
    return await prisma.continentCreatureType.upsert({
        where: {
            continentId_creatureTypeId: {
                continentId: data.continentId,
                creatureTypeId: data.creatureTypeId,
            },
        },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createLegendaryCreature(data: Prisma.LegendaryCreatureUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.LegendaryCreatureGetPayload<{}>> {
    return await prisma.legendaryCreature.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

// ============================================================================
// RACES
// ============================================================================

export async function createRaceName(data: Prisma.RaceNameUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.RaceNameGetPayload<{}>> {
    return await prisma.raceName.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createRace(data: Prisma.RaceUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.RaceGetPayload<{}>> {
    return await prisma.race.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createSubrace(data: Prisma.SubraceUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.SubraceGetPayload<{}>> {
    return await prisma.subrace.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

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
                    /* abilityScoreIncreases: true, */
                    /* traits: true, */
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

export async function createClassRole(data: Prisma.ClassRoleCreateInput, seeded: boolean = false): Promise<Prisma.ClassRoleGetPayload<{}>> {
    return await prisma.classRole.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createClass(data: Prisma.ClassCreateInput, seeded: boolean = false): Promise<Prisma.ClassGetPayload<{}>> {
    return await prisma.class.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createSubclass(data: Prisma.SubclassUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.SubclassGetPayload<{}>> {
    return await prisma.subclass.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

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
            //keyFeatures: true,
            subclasses: {
                include: {
                    //keyFeatures: true,
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

export async function createPantheon(data: Prisma.PantheonCreateInput, seeded: boolean = false): Promise<Prisma.PantheonGetPayload<{}>> {
    return await prisma.pantheon.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createDeityHolyDay(data: Prisma.DeityHolyDayUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.DeityHolyDayGetPayload<{}>> {
    return await prisma.deityHolyDay.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createDeityHistory(data: Prisma.DeityHistoryUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.DeityHistoryGetPayload<{}>> {
    return await prisma.deityHistory.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createDeity(data: Prisma.DeityUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.DeityGetPayload<{}>> {
    return await prisma.deity.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createDeityRelationship(data: Prisma.DeityRelationshipUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.DeityRelationshipGetPayload<{}>> {
    const deityExists = await prisma.deity.findUnique({
        where: { id: data.deityId },
    });

    const relatedExists = await prisma.deity.findUnique({
        where: { id: data.relatedDeityId },
    });

    if (!deityExists || !relatedExists) {
        throw new Error(
            `Missing deity FK: ${data.deityId} -> ${data.relatedDeityId}`
        );
    }

    return await prisma.deityRelationship.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
    });
}

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
// RECOMMENDATIONS
// ============================================================================
// RaceClassRecommendation, DeityRecommendation, PlaystyleClassRecommendation?, RaceContinent and continent subclasses

export async function createRaceSubclassRecommendation(data: Prisma.RaceSubclassRecommendationUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.RaceSubclassRecommendationGetPayload<{}>> {
    return await prisma.raceSubclassRecommendation.upsert({
        where: {
            raceId_subclassId:
            {
                raceId: data.raceId,
                subclassId: data.subclassId,
            },
        },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createSubraceSubclassRecommendation(data: Prisma.SubraceSubclassRecommendationUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.SubraceSubclassRecommendationGetPayload<{}>> {
    return await prisma.subraceSubclassRecommendation.upsert({
        where: {
            subraceId_subclassId:
            {
                subraceId: data.subraceId,
                subclassId: data.subclassId,
            },
        },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createRaceContinent(data: Prisma.RaceContinentUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.RaceContinentGetPayload<{}>> {
    return await prisma.raceContinent.upsert({
        where: {
            raceId_continentId:
            {
                raceId: data.raceId,
                continentId: data.continentId,
            },
        },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createSubraceContinent(data: Prisma.SubraceContinentUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.SubraceContinentGetPayload<{}>> {
    return await prisma.subraceContinent.upsert({
        where: {
            subraceId_continentId:
            {
                subraceId: data.subraceId,
                continentId: data.continentId,
            },
        },
        update: data,
        create: { ...data, seeded },
    });
}

export async function createSubclassContinent(data: Prisma.SubclassContinentUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.SubclassContinentGetPayload<{}>> {
    return await prisma.subclassContinent.upsert({
        where: {
            subclassId_continentId:
            {
                subclassId: data.subclassId,
                continentId: data.continentId,
            },
        },
        update: data,
        create: { ...data, seeded },
    });
}

// ============================================================================
// CHARACTERS
// ============================================================================

export async function createCharacter(data: Prisma.CharacterUncheckedCreateInput, seeded: boolean = false): Promise<Prisma.CharacterGetPayload<{}>> {
    return await prisma.character.upsert({
        where: { id: data.id },
        update: data,
        create: { ...data, seeded },
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

