/**
 * Alabastria Database Seed Script
 * 
 * Seeds the database with:
 * 1. Admin user (admin@alabastria.local / admin123)
 * 2. NPC Professions
 * 3. NPC Relationship Types
 * 4. Faction Roles
 * 5. Faction Relationship Types
 * 
 * Legacy data migration will be added in Phase 3
 */

import { prisma } from "../lib/prisma";
import * as db from "../lib/db-seed";
import * as seed from "./seeds"
import { UserRole } from "@prismagen/client";

async function main() {
    console.log("🌱 Starting database seed...\n");
    // ============================================================================
    // CREATE ADMIN USER
    // ============================================================================
    console.log("👤 Creating admin user...");

    const ADMIN_EMAIL = process.env.DEFAULT_ADMIN_EMAIL;
    if (!ADMIN_EMAIL) {
        throw new Error("DEFAULT_ADMIN_EMAIL environment variable is not set.");
    }
    const ADMIN_PASSWORD = process.env.DEFAULT_ADMIN_PASSWORD;
    if (!ADMIN_PASSWORD) {
        throw new Error("DEFAULT_ADMIN_PASSWORD environment variable is not set.");
    }
    try {
        await db.createUser({
            email: ADMIN_EMAIL,
            name: process.env.DEFAULT_ADMIN_NAME,
            passwordHash: '',
            plainPassword: ADMIN_PASSWORD,
            role: UserRole.ADMIN,
            mustChangePassword: true,
        });
        console.log(`   ✓ Admin user created\n`);
    } catch (error) {
        console.error(`   ✗ Failed to create admin user: ${(error as Error).message}\n`);
    }

    // ============================================================================
    // NPC PROFESSIONS
    // ============================================================================
    console.log("💼 Seeding NPC professions...");

    const professions = [
        // Trade
        { name: "Blacksmith", category: "Trade", description: "Crafts weapons, armor, and metal goods." },
        { name: "Carpenter", category: "Trade", description: "Builds and repairs wooden structures and furniture." },
        { name: "Weaver", category: "Trade", description: "Creates textiles and clothing." },
        { name: "Potter", category: "Trade", description: "Crafts ceramic vessels and decorative items." },
        { name: "Jeweler", category: "Trade", description: "Creates fine jewelry and works with precious metals." },
        { name: "Leatherworker", category: "Trade", description: "Crafts leather goods, armor, and accessories." },
        { name: "Brewer", category: "Trade", description: "Produces ales, wines, and other beverages." },
        { name: "Baker", category: "Trade", description: "Bakes bread and pastries." },
        { name: "Cobbler", category: "Trade", description: "Makes and repairs footwear." },
        { name: "Tailor", category: "Trade", description: "Creates and mends clothing." },

        // Service
        { name: "Innkeeper", category: "Service", description: "Manages an inn, providing lodging and food." },
        { name: "Bartender", category: "Service", description: "Serves drinks and manages a tavern." },
        { name: "Cook", category: "Service", description: "Prepares meals for establishments or households." },
        { name: "Stablehand", category: "Service", description: "Cares for horses and maintains stables." },
        { name: "Servant", category: "Service", description: "Provides domestic services for wealthy households." },
        { name: "Guide", category: "Service", description: "Leads travelers through dangerous or unfamiliar territory." },
        { name: "Courier", category: "Service", description: "Delivers messages and packages." },

        // Merchant
        { name: "Shopkeeper", category: "Merchant", description: "Owns and operates a retail establishment." },
        { name: "Trader", category: "Merchant", description: "Buys and sells goods between settlements." },
        { name: "Pawnbroker", category: "Merchant", description: "Lends money against valuable items." },
        { name: "Fence", category: "Merchant", description: "Deals in stolen or questionable goods." },

        // Scholarly
        { name: "Scholar", category: "Scholarly", description: "Studies and researches various subjects." },
        { name: "Scribe", category: "Scholarly", description: "Copies documents and keeps records." },
        { name: "Librarian", category: "Scholarly", description: "Maintains and organizes collections of books." },
        { name: "Tutor", category: "Scholarly", description: "Provides private education." },
        { name: "Alchemist", category: "Scholarly", description: "Studies and creates potions and elixirs." },

        // Religious
        { name: "Priest", category: "Religious", description: "Leads religious ceremonies and provides spiritual guidance." },
        { name: "Acolyte", category: "Religious", description: "Assists in temple services and duties." },
        { name: "Monk", category: "Religious", description: "Lives a contemplative life dedicated to faith." },
        { name: "Undertaker", category: "Religious", description: "Prepares and buries the dead." },

        // Noble
        { name: "Noble", category: "Noble", description: "Member of the aristocracy." },
        { name: "Courtier", category: "Noble", description: "Attends court and advises nobility." },
        { name: "Diplomat", category: "Noble", description: "Negotiates between political powers." },
        { name: "Steward", category: "Noble", description: "Manages an estate or household." },

        // Criminal
        { name: "Thief", category: "Criminal", description: "Steals for a living." },
        { name: "Smuggler", category: "Criminal", description: "Illegally transports goods." },
        { name: "Assassin", category: "Criminal", description: "Kills for money." },
        { name: "Spy", category: "Criminal", description: "Gathers information covertly." },
        { name: "Pickpocket", category: "Criminal", description: "Steals from individuals in crowds." },

        // Entertainment
        { name: "Entertainer", category: "Entertainment", description: "Performs for audiences." },
        { name: "Minstrel", category: "Entertainment", description: "Sings and plays music for entertainment." },
        { name: "Dancer", category: "Entertainment", description: "Performs dances for entertainment." },
        { name: "Acrobat", category: "Entertainment", description: "Performs feats of agility and balance." },
        { name: "Gladiator", category: "Entertainment", description: "Fights for entertainment in arenas." },

        // Military
        { name: "Guard", category: "Military", description: "Provides security and protection." },
        { name: "Soldier", category: "Military", description: "Serves in an organized military force." },
        { name: "Knight", category: "Military", description: "Noble warrior sworn to service." },
        { name: "Mercenary", category: "Military", description: "Fights for whoever pays." },
        { name: "Watchman", category: "Military", description: "Patrols and maintains order in settlements." },

        // Labor
        { name: "Farmer", category: "Labor", description: "Cultivates crops and raises livestock." },
        { name: "Fisher", category: "Labor", description: "Catches fish for food and trade." },
        { name: "Miner", category: "Labor", description: "Extracts ore and minerals from the earth." },
        { name: "Lumberjack", category: "Labor", description: "Fells trees and processes timber." },
        { name: "Hunter", category: "Labor", description: "Tracks and kills wild game." },
        { name: "Sailor", category: "Labor", description: "Works aboard ships." },
    ];

    for (const prof of professions) {
        await db.createNPCProfession(prof);
    }
    console.log(`   ✓ Created ${professions.length} professions\n`);

    // ============================================================================
    // NPC RELATIONSHIP TYPES
    // ============================================================================
    console.log("💕 Seeding NPC relationship types...");

    const npcRelationshipTypes = [
        // Positive
        { name: "Friend", description: "A close personal relationship based on mutual affection." },
        { name: "Ally", description: "Someone who supports and cooperates with another." },
        { name: "Mentor", description: "A guide who teaches and advises." },
        { name: "Student", description: "One who learns from another." },
        { name: "Lover", description: "A romantic partner." },
        { name: "Spouse", description: "A married partner." },
        { name: "Family", description: "Related by blood or adoption." },
        { name: "Patron", description: "A supporter who provides resources or opportunities." },
        { name: "Protector", description: "One who guards and defends another." },

        // Negative
        { name: "Enemy", description: "One who actively opposes and seeks to harm." },
        { name: "Rival", description: "A competitor for the same goal or position." },
        { name: "Nemesis", description: "A long-standing enemy driven by deep animosity." },
        { name: "Betrayer", description: "One who broke trust or loyalty." },

        // Neutral
        { name: "Acquaintance", description: "Someone known but not closely." },
        { name: "Business Partner", description: "An associate in commercial dealings." },
        { name: "Employer", description: "One who hires and pays for work." },
        { name: "Employee", description: "One who works for payment." },
        { name: "Neighbor", description: "Someone who lives nearby." },
    ];

    /* for (const type of npcRelationshipTypes) {
        await db.createNPCRelationshipType(type);
    } */
    console.log(`   ✓ Created ${npcRelationshipTypes.length} NPC relationship types\n`);

    // ============================================================================
    // FACTION ROLES
    // ============================================================================
    console.log("🎭 Seeding faction roles...");

    const factionRoles = [
        { name: "Leader", description: "The head of the faction.", rankOrder: 1 },
        { name: "Lieutenant", description: "Second in command.", rankOrder: 2 },
        { name: "Captain", description: "Commands a division or unit.", rankOrder: 3 },
        { name: "Agent", description: "Carries out missions and tasks.", rankOrder: 4 },
        { name: "Spy", description: "Gathers intelligence covertly.", rankOrder: 5 },
        { name: "Enforcer", description: "Maintains discipline and handles threats.", rankOrder: 6 },
        { name: "Treasurer", description: "Manages faction finances.", rankOrder: 7 },
        { name: "Informant", description: "Provides information from outside sources.", rankOrder: 8 },
        { name: "Member", description: "A standard faction member.", rankOrder: 9 },
        { name: "Recruit", description: "A new or probationary member.", rankOrder: 10 },
    ];

    for (const role of factionRoles) {
        await db.createFactionRole(role);
    }
    console.log(`   ✓ Created ${factionRoles.length} faction roles\n`);

    // ============================================================================
    // FACTION RELATIONSHIP TYPES
    // ============================================================================
    console.log("🤝 Seeding faction relationship types...");

    const factionRelationshipTypes = [
        { name: "Allied", description: "Formal alliance with shared goals." },
        { name: "At War", description: "Open conflict and hostilities." },
        { name: "Neutral", description: "No formal relationship, neither friendly nor hostile." },
        { name: "Trade Partners", description: "Economic cooperation and commerce." },
        { name: "Rivals", description: "Competition for influence or resources." },
        { name: "Vassal", description: "Subordinate faction owing allegiance." },
        { name: "Puppet State", description: "Nominally independent but controlled." },
        { name: "Cold War", description: "Hostile but not openly fighting." },
        { name: "Non-Aggression Pact", description: "Agreement not to attack each other." },
        { name: "Truce", description: "Temporary cessation of hostilities." },
    ];

    for (const type of factionRelationshipTypes) {
        await db.createFactionRelationshipType(type);
    }
    console.log(`   ✓ Created ${factionRelationshipTypes.length} faction relationship types\n`);

    // ============================================================================
    // MIGRATE LEGACY DATA
    // ============================================================================
    console.log("🔄 Migrating legacy data...");

    // World Creation
    const seasons: seed.Seasons = await seed.seedSeasons();
    const months: seed.Months = await seed.seedMonths({ seasons });
    const worlds: seed.Worlds = await seed.seedWorlds();
    await seed.setWorldsMonths({ worlds, months });
    const weekDays: seed.WeekDays = await seed.seedWeekDays();
    const kingdoms: seed.Kingdoms = await seed.seedKingdoms({ worlds });
    const continents: seed.Continents = await seed.seedContinents({ worlds, kingdoms });
    await seed.setKingdomsCapitals({ kingdoms, continents });
    const towns: seed.Towns = await seed.seedTowns({ continents });
    await seed.setContinentCapitals({ continents, towns });
    const regions: seed.Regions = await seed.seedRegions({ continents });
    const voyages: seed.Voyages = await seed.seedVoyages({ continents });
    const tradeRoutes: seed.TradeRoutes = await seed.seedTradeRoutes({ voyages, continents, towns });
    const languages: seed.Languages = await seed.seedLanguages();
    await seed.setContinentLanguages({ continents, languages });
    const warConflicts: seed.WarConflicts = await seed.seedWarConflicts({ continents });
    const treaties: seed.Treaties = await seed.seedTreaties({ continents });
    const historicalPeriods: seed.HistoricalPeriods = await seed.createHistoricalPeriods({ worlds });
    // Creatures
    const creatureSizes: seed.CreatureSizes = await seed.seedCreatureSizes();
    const creatureTypes: seed.CreatureTypes = await seed.seedCreatureTypes({ creatureSizes });
    await seed.setContinentCreatureTypes({ continents, creatureTypes });
    const legendaryCreatures: seed.LegendaryCreatures = await seed.seedLegendaryCreatures({ continents, creatureSizes, creatureTypes });
    // Races
    const raceNames: seed.RaceNames = await seed.seedRaceNames();
    const races: seed.Races = await seed.seedRaces({ creatureSizes, languages, raceNames  });
    const subraces: seed.Subraces = await seed.seedSubraces({ races });
    // Classes
    const classRoles: seed.ClassRoles = await seed.seedClassRoles();
    const classes: seed.Classes = await seed.seedClasses({ classRoles });
	const subclasses: seed.Subclasses = await seed.seedSubclasses({ classes });
    // Deities
    const pantheons: seed.Pantheons = await seed.seedPantheons();
    const deities: seed.Deities = await seed.seedDeities({ pantheons });
    const deityHolyDays: seed.DeityHolyDays = await seed.seedDeityHolyDays({ deities });
    const deityHistories: seed.DeityHistories = await seed.seedDeityHistories({ deities, historicalPeriods });
    const deityRelationships: seed.DeityRelationships = await seed.seedDeityRelationships({ deities });
    // Recommendations
    const racesContinents: seed.RacesContinents = await seed.setRacesContinents({ races, continents });
    const subracesContinents: seed.SubracesContinents = await seed.setSubracesContinents({ subraces, continents });
    const racesSubclasses: seed.RacesSubclasses = await seed.setRacesSubclasses({ races, subclasses });
    const subclassesContinents: seed.SubclassesContinents = await seed.setSubclassesContinents({ subclasses, continents });
    const subracesSubclasses: seed.SubracesSubclasses = await seed.setSubracesSubclasses({ subraces, subclasses });

    // Characters
    const characters: seed.Characters = await seed.seedCharacters({ races, subraces, classes, subclasses, languages, deities, continents, towns, creatureSizes, creatureTypes });

    console.log("   ✓ Migrated legacy data\n");

    // ============================================================================
    // COMPLETE
    // ============================================================================
    console.log("✨ Database seed complete!\n");
}

main()
    .catch((e) => {
        console.error("❌ Seed failed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });