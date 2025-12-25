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
import { Prisma, TownType, TradeRouteType, TradeRouteFrequency, ContinentLanguagePrevalence, GovernmentType, WarConflictStatus, Month, ContinentCreatureRelation, LegendaryCreatureThreatLevel, RaceAbilityScores } from "../generated/prisma/client";
import * as db from "../lib/db-seed";
import bcrypt from "bcrypt";

async function main() {
    console.log("🌱 Starting database seed...\n");
    // ============================================================================
    // DELETE ALL EXISTING OFFICIAL DATA
    // ============================================================================
    console.log("🧹 Deleting all existing seeded data...");

    await db.deleteAllOfficialData();

    console.log("   ✓ Deleted all existing seeded data\n");

    // ============================================================================
    // CREATE ADMIN USER
    // ============================================================================
    console.log("👤 Creating admin user...");
    const passwordHash = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD || "admin123", 10);

    await db.createUser({
        email: process.env.DEFAULT_ADMIN_EMAIL || "admin@alabastria.local",
        name: process.env.DEFAULT_ADMIN_NAME || "Admin",
        passwordHash,
        role: "ADMIN",
        mustChangePassword: true,
    });
    console.log(`   ✓ Admin user created (${process.env.DEFAULT_ADMIN_EMAIL || "admin@alabastria.local"})\n`);

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

    for (const type of npcRelationshipTypes) {
        await db.createNPCRelationshipType(type);
    }
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

    // World
    const world: Record<string, Prisma.WorldGetPayload<{}>> = {
        alabastria: await db.createWorld({
            id: "alabastria",
            slug: "alabastria",
            name: "Alabastria",
            description: "This world of wonders was once a beastly plane simply consisting of wild creatures within its forests, mountains, deserts, and plains. It is unknown in record what was responsible or how it happened, but groups of creatures and peoples from all different manner of realms and worlds of existence began reappearing in this new land and its various continents. Through much loss and areal infighting, not understanding or knowing what had happened to their homes, as the quickest to adapt and recover rose to establish the beginnings of control, now many starting new generations, permanent homes, their own ways of life, making Alabastria what it is today. <hr> It has now been 800 cycles since The Bringing, most races are multiple generations deep, empires have risen and fallen, villages have become towns and towns have become capital cities, politics from whatever land their ancestors hailed from are long forgotten for this current worlds kingdoms.",
            circumferenceMi: 15000,
            diameterMi: 4775,
            currentCycle: 800,
            currentMonth: Month.JUNE,
            currentDay: 15,
            surfaceAreaSqMi: BigInt(716100000)
        }),
    };
    // Kingdom
    const kingdom: Record<string, Prisma.KingdomGetPayload<{}>> = {
        kamalatman: await db.createKingdom({
            id: "kamalatman-alabastria",
            name: "Kamalatman",
            slug: "kamalatman-alabastria",
            world: { connect: { id: world.alabastria.id } },
            description: "The unified kingdom encompassing the three continents of Alatman, Maltman, and Katman, ruled by a single royal family with regional princes governing each continent.",
            surfaceAreaSqMi: BigInt(2130000),
            primaryColor: "Gold",
            secondaryColor: "Crimson",
            flagSymbol: "Triple Crown",
            flagDescription: "Three interlocked crowns representing the unified rule of the three Kamalatman continents.",
            cycleEstablished: 183,
            governmentType: GovernmentType.MONARCHY,
            politicalStructure: "Each continent within the kingdom posesses its own government that governs that continent under the authority and rule of the current Supreme Ruler, rotating which of the continent elects to the overall throne as Supreme Ruler every half-century.",
            majorPoliticalIssue: "Tensions occasionally arise between the three continental rulers, each vying for greater influence over the kingdom's policies and resources. Regional disputes over taxation and resource allocation are common, as each continent seeks to maximize its own prosperity while maintaining loyalty to the central monarchy.",
            foreignRelations: "Kamalatman maintains a cautious but pragmatic relationship with neighboring continents, focusing on trade and mutual defense. Diplomatic envoys are regularly exchanged to foster goodwill, though underlying tensions exist due to historical conflicts and competition for resources."
        })
    };
    // Continents
    const continent: Record<string, Prisma.ContinentGetPayload<{}>> = {
        kuriguer: await db.createContinent({
            id: "kuriguer-alabastria", 
            slug: "kuriguer-alabastria",
            world: { connect: { id: world.alabastria.id } }, 
            name: "Kuriguer", 
            description: "Here is the land of magic, far from a fairytale sense. With the establishment of two fine towns along the coast and smaller settlements leading South, the rest of this land is shrouded beyond a forest not typically kind to strangers.", 
            heightMi: 2200, 
            widthMi: 1400, 
            surfaceAreaSqMi: BigInt(2300000), 
            primaryColor: "Purple", 
            secondaryColor: "Silver", 
            flagSymbol: "Mystical Tree", 
            flagDescription: "A silver tree with purple leaves representing the magical forests and elven coastal settlements, symbolizing the balance between nature and arcane knowledge.",
            languageReasoning: "The magical nature of Kuriguer has attracted diverse races. Elvish dominates the forests, Sylvan echoes in fey-touched areas, while Primordial resonates with elemental magic. The coastal towns use Common for trade, and magical research brings scholars speaking Draconic and even rarer planar languages.",
            governmentType: GovernmentType.MAGICAL_CONCLAVE,
            politicalStructure: "Kuriguer is governed by a Conclave of Archmages, each representing different schools of magic and the various settlements. While decisions attempted to be made collectively, there is a seat of High Archmage for settling disputes and addressing the public. The conclave operates with a focus on preserving the magical integrity of the continent while fostering cooperation among its diverse inhabitants.",
            foreignRelations: "Kuriguer maintains a network of alliances with other magical realms and mystical creatures. Diplomatic efforts are often intertwined with arcane rituals and exchanges of magical knowledge, ensuring that the continent remains a pivotal center for magical research and cooperation.",
            majorPoliticalIssue: "The diverse magical factions within Kuriguer often clash over the direction of magical research and the use of arcane resources. Disputes arise between traditionalist mages who wish to preserve ancient practices and progressive scholars advocating for new magical innovations, leading to political tension within the Conclave."
        }),
        katman: await db.createContinent({
            id: "katman-kamalatman-alabastria",
            slug: "katman-kamalatman-alabastria",
            world: { connect: { id: world.alabastria.id } },
            kingdom: { connect: { id: kingdom.kamalatman.id } },
            name: "Katman",
            description: "Home to most of the kingdoms inhabitants, this land has a stretch of planes preluding a mass of swampy less populated areas.",
            heightMi: 1100,
            widthMi: 800,
            surfaceAreaSqMi: BigInt(700000),
            primaryColor: "Pink",
            secondaryColor: "Brown",
            flagSymbol: "Swamp Lily",
            flagDescription: "A pink swamp lily on a brown background, representing the swampy marshlands and the royal capital that governs the three Kamalatman continents.",
            languageReasoning: "The swamplands echo with Orcish war-cries from the tribal strongholds, while Common serves the kingdom's administration on the plains. Lizardfolk communities maintain their ancient reptilian tongue, and the secretive Yuan-ti speak their serpentine language in hidden enclaves. Draconic marks ancient ruins, while Aquan flows with the wetland waters and Druidic whispers through the marsh grasses.",
            governmentType: GovernmentType.TRIBAL,
            politicalStructure: "When not holding the Supreme Ruler throne, the Katman royal family governs through a council of Chieftains representing the various clans and tribes. This council advises on matters of regional importance, ensuring that the diverse cultures within Katman have a voice in the kingdom's governance.",
            foreignRelations: "Katman maintains a network of alliances and trade agreements with neighboring continents, balancing tribal autonomy with cooperative defense pacts. Diplomatic envoys often navigate complex clan rivalries to foster peace and mutual prosperity.",
            majorPoliticalIssue: "Inter-tribal rivalries and disputes over resource control frequently challenge the unity of Katman. The council of Chieftains often grapples with balancing traditional tribal customs with the demands of a centralized monarchy, leading to political tensions and occasional conflicts."
        }),
        alatman: await db.createContinent({
            id: "alatman-kamalatman-alabastria",
            slug: "alatman-kamalatman-alabastria",
            world: { connect: { id: world.alabastria.id } },
            kingdom: { connect: { id: kingdom.kamalatman.id } },
            name: "Alatman",
            description: "Land grouped of grey forests, flat swamps, and a timely volcano, exploring this land is quite popular due to the great natural riches that can be sent back, but settling there has proven quite difficult with the royal family's great taxes placed on the land with claims of wanting to regulate the removal of the materials found.",
            heightMi: 600,
            widthMi: 900,
            surfaceAreaSqMi: BigInt(430000),
            primaryColor: "Orange",
            secondaryColor: "Yellow",
            flagSymbol: "Volcanic Crown",
            flagDescription: "A golden crown with orange flames rising from it, representing the volcanic nature and the royal family's control over the natural riches of the land.",
            languageReasoning: "The volcanic forges and construct workshops of Alatman attract Warforged and Autognomes, making Draconic common for magical crafting. The dangerous forests harbor darker creatures, bringing Infernal and Abyssal whispers. Primordial echoes from the volcanic activity, while Common serves the mining expeditions.",
            governmentType: GovernmentType.MONARCHY,
            politicalStructure: "Alatman is governed by a ruler that takes the title of King or Queen of Alatman that is a role achieved through a combination of noble lineage and proven leadership, who oversees the continent's administration and reports directly to the Supreme Ruler of Kamalatman. The monarch is supported by a council of advisors, who work to ensure that the continent is able to keep its own identity while contributing to the overall kingdom's prosperity.",
            majorPoliticalIssue: "The heavy taxation on mining operations has led to unrest among the local populace and mining guilds. Disputes over resource rights and environmental concerns frequently challenge the monarch's authority, leading to protests and occasional sabotage of mining infrastructure.",
            foreignRelations: "Alatman has open trade with many of its neighbors, but tries to maintain a balance between economic growth and environmental preservation as in the past the constant exploitation of resources for mass external trade led to significant degradation.",
        }),
        maltman: await db.createContinent({
            id: "maltman-kamalatman-alabastria",
            slug: "maltman-kamalatman-alabastria",
            world: { connect: { id: world.alabastria.id } },
            kingdom: { connect: { id: kingdom.kamalatman.id } },
            name: "Maltman",
            description: "A very mountainous region, the kingdom sends ships to collect and spread many ores and materials across the world from the vastly efficient yet seemingly small mining villages.",
            heightMi: 1400,
            widthMi: 900,
            surfaceAreaSqMi: BigInt(1000000),
            primaryColor: "Steel gray",
            secondaryColor: "Blue",
            flagSymbol: "Mountain Pickaxe",
            flagDescription: "A steel pickaxe crossed with a blue mountain peak, symbolizing the mining industry and the mountainous terrain that defines this continent's economy.",
            languageReasoning: "The mountain strongholds echo with Dwarvish as the dominant language, while mining operations use Common for trade. Deep Gnome communities speak Undercommon, and ancient draconic runes mark the deepest mines. Kobolds in the depths maintain their Draconic dialect, and the rare Giant tongue echoes from the highest peaks.",
            governmentType: GovernmentType.MONARCHY,
            politicalStructure: "Maltman is governed by a ruler that takes the title of King or Queen of Maltman who is born into a bloodline that has long overseen the continent and taken its seat as Supreme Ruler when the time comes. The monarch is supported by a council of mining guild leaders and local nobility, ensuring that the continent's economic interests are well-represented in the kingdom's governance.",
            majorPoliticalIssue: "Labor disputes and safety concerns within the mining industry frequently challenge the monarch's authority. Strikes and protests by miners seeking better working conditions and fair wages have led to tensions between the ruling class and the working populace.",
            foreignRelations: "Maltman maintains robust trade relations with neighboring continents, exporting its mineral wealth in exchange for goods and services. Diplomatic efforts focus on securing favorable trade agreements while managing tensions arising from resource competition."
        }),
        skratonia: await db.createContinent({
            id: "skratonia-alabastria",
            slug: "skratonia-alabastria",
            world: { connect: { id: world.alabastria.id } },
            name: "Skratonia",
            description: "While other worlds would likely consider this a desert wasteland, in Alabastria, Skratonia is the most populated land due to its' many open planes, and moderate temperate compared to much of the commoner welcome options or the swampy marshlands of the triontinental Kingdom of Kamalatman, allowing the growth of decent crops, leading to a very diverse mix of people of small settlements connected through major towns.",
            heightMi: 1800,
            widthMi: 1300,
            surfaceAreaSqMi: BigInt(1800000),
            primaryColor: "Green",
            secondaryColor: "Gold",
            flagSymbol: "Golden Wheat Sheaf",
            flagDescription: "A golden sheaf of wheat on a green field, representing the agricultural prosperity and the fertile plains that make this the most populated continent.",
            languageReasoning: "As the most diverse and populated continent, Skratonia is dominated by Common as the trade language. Halfling communities maintain their pastoral tongue, while the many Tieflings bring Infernal influences. Aasimar populations contribute Celestial phrases, and the scholarly cities preserve Draconic texts. The plains-dwelling Centaurs and Leonin add their own linguistic flavors.",
            governmentType: GovernmentType.REPUBLIC,
            politicalStructure: "Skratonia is governed as a republic, with elected representatives from various settlements forming a Continental Council with a Head Speaker elected from among them. This council oversees legislation, resource management, and diplomatic relations, ensuring that the diverse interests of Skratonia's inhabitants are represented in governance.",
            majorPoliticalIssue: "Balancing the needs of the diverse population often leads to political gridlock within the Continental Council. Disputes over land use, resource allocation, and cultural representation frequently challenge the republic's ability to enact effective policies.",
            foreignRelations: "Skratonia maintains active trade relations with neighboring continents, leveraging its agricultural surplus to secure goods and services. Diplomatic efforts focus on fostering mutual prosperity while navigating cultural differences and occasional border disputes."
        }),
        bulsania: await db.createContinent({
            id: "bulsania-alabastria",
            slug: "bulsania-alabastria",
            world: { connect: { id: world.alabastria.id } },
            name: "Bulsania",
            description: "The resident continent of ice and tough inhabitants holds few settlements on its' West coast before reaching a group of mountain ranges including the cloud towering Noxious Mountain, leading into a frozen land left to giants and titans. The wastes are prowled by mercenary companies like the Frostmarch Company, who make their living as hired blades and monster hunters in this unforgiving landscape where survival itself is a form of warfare.",
            heightMi: 500,
            widthMi: 800,
            surfaceAreaSqMi: BigInt(320000),
            primaryColor: "Light blue",
            secondaryColor: "White",
            flagSymbol: "Frozen Mountain",
            flagDescription: "A white mountain peak against a light blue sky, representing the frozen Noxious Mountain and the icy landscape that defines this harsh northern continent.",
            languageReasoning: "The harsh frozen landscape is dominated by Giant, spoken by the titans and giants that rule the interior. Draconic echoes from the militarized Dragonborn settlements, while Aarakocra calls ring from the mountain peaks. The few coastal settlements use Common for trade, and Primordial whispers through the eternal storms. Goliath tribal dialects blend elements of Giant and Common. Mercenary clans like the Frostmarch Company often speak a mix of Goblin and Common for their operations.",
            governmentType: GovernmentType.TRIBAL,
            politicalStructure: "Bulsania is governed by a council of tribal chieftains and warlords, each representing their respective clans and settlements; all under High Chief Thane Icewind who has ruled Bulsania for centeries, seeming too be frozen in time. This council convenes to make decisions on matters of mutual interest, such as defense against external threats and resource sharing. Leadership is often determined through displays of courage and honor, reflecting the harsh realities of life in this frozen land.",
            majorPoliticalIssue: "Inter-tribal rivalries and disputes over hunting grounds frequently challenge the unity of Bulsania. The council of chieftains often grapples with balancing traditional customs with the demands of survival in a harsh environment, leading to political tensions and occasional conflicts.",
            foreignRelations: "Bulsania maintains a cautious relationship with neighboring continents, focusing on defense and survival. Diplomatic efforts are often limited to trade agreements for essential goods, while military alliances are formed in response to external threats such as marauding monsters and rival factions."
        }),
        kantra: await db.createContinent({
            id: "kantra-alabastria",
            slug: "kantra-alabastria",
            world: { connect: { id: world.alabastria.id } },
            name: "Kantra",
            description: "A counter to Bulsania, this land of fiery cracking earth and ash filled sky is home to creatures not known by the lands around it as no attempted explorations have returned, leading to quite the rumors of this hellish region. (No map as the land is uncharted)",
            heightMi: 600,
            widthMi: 400,
            surfaceAreaSqMi: BigInt(190000),
            primaryColor: "Crimson",
            secondaryColor: "Dark",
            flagSymbol: "Burning Skull",
            flagDescription: "A crimson skull wreathed in dark flames, representing the dangerous and uncharted nature of this hellish region where no explorers have returned.",
            languageReasoning: "The uncharted hellish landscape of Kantra is shrouded in mystery, but the few whispered reports speak of Infernal and Abyssal tongues echoing across the burning plains. Ignan, the language of fire elementals, crackles through the volcanic air, while Primordial resonates with the raw elemental chaos. Unknown dialects of creatures that have never been catalogued may exist in this forbidden land.",
            governmentType: GovernmentType.ANARCHY,
        })
    };
    // Kingdom Capitals
    try {
        await db.setKingdomCapital(kingdom.kamalatman.id, continent.katman.id);
    } catch (error) {
        console.error(`Error setting capital for kingdom:`, error);
        process.exit(1);
    }
    // Towns
    const town: Record<string, Prisma.TownGetPayload<{}>> = {
        silverleaf_harbor: await db.createTown({
            id: "silverleaf-harbor-kuriguer-alabastria",
            slug: "silverleaf-harbor-kuriguer-alabastria",
            name: "Silverleaf Harbor",
            type: TownType.CAPITAL,
            location: "To the south-west of the continent, Silverleaf Harbor is a small city built into the cliffs of Mount Rian, where natural architecture blends seamlessly with arcane engineering.",
            continent: { connect: { id: continent.kuriguer.id } },
            description: "A beautiful elven city built into the cliffs and trees, where natural architecture blends seamlessly with arcane engineering.",
        }),
        swamp_crown: await db.createTown({
            id: "swamp-crown-katman-kamalatman-alabastria",
            slug: "swamp-crown-katman-kamalatman-alabastria",
            name: "Swamp Crown",
            type: TownType.CAPITAL,
            continent: { connect: { id: continent.katman.id } },
            location: "To the north-west of the continent, the swamp crown sits on a small island in the middle of Incense Swamp, surrounded by the vast swamp and the forest that borders it.",
            description: "A unique city built on stilts and elevated platforms above the swamps, with the royal palace constructed on the highest point, connected by rope bridges and wooden walkways.",
        }),
        volcanic_throne: await db.createTown({
            id: "volcanic-throne-alatman-kamalatman-alabastria",
            slug: "volcanic-throne-alatman-kamalatman-alabastria",
            name: "Volcanic Throne",
            type: TownType.CAPITAL,
            continent: { connect: { id: continent.alatman.id } },
            location: "To the east in the northern section of the continent, the volcanic throne sits atop a volcanic plateau, overlooking the grey forests and swamps",
            description: "A fortress city built around the active volcano, with forges and workshops carved into the mountainside, where the royal palace sits atop the volcanic peak.",
        }),
        deepforge_citadel: await db.createTown({
            id: "deepforge-citadel-maltman-kamalatman-alabastria",
            slug: "deepforge-citadel-maltman-kamalatman-alabastria",
            name: "Deepforge Citadel",
            type: TownType.CAPITAL,
            continent: { connect: { id: continent.maltman.id } },
            location: "Protruding from Mount Gorgon, this great stronghold overlooks the great lake that lies in the center of the continent, feeding the land with it's fresh water and fish.",
            description: "A massive dwarven stronghold carved directly into the mountain, with multiple levels descending deep underground, where the royal halls are surrounded by the most productive mines.",
        }),
        golden_fields: await db.createTown({
            id: "golden-fields-skratonia-alabastria",
            slug: "golden-fields-skratonia-alabastria",
            name: "Golden Fields",
            type: TownType.CAPITAL,
            location: "Golden Fields is located to the southern edge of the central plains of the continent, at the crossroads of all major trade routes.",
            continent: { connect: { id: continent.skratonia.id } },
            description: "A sprawling metropolis built around a massive central marketplace, where the Council Halls rise above the bustling trade districts and agricultural warehouses.",
        }),
        frosthold: await db.createTown({
            id: "frosthold-bulsania-alabastria",
            slug: "frosthold-bulsania-alabastria",
            name: "Frosthold",
            type: TownType.CAPITAL,
            location: "In the west most part of the continent, Frosthold sits lodged against the outer side of the Noxious Mountain range, restricting access to and from the glacial side of the contient",
            continent: { connect: { id: continent.bulsania.id } },
            description: "A massive fortress city carved from ice and stone, with towering walls that blend into the mountain itself, where the royal halls are warmed by geothermal springs. The city relies heavily on mercenary companies like the Frostmarch Company to protect food caravans from raider tribes such as the Icemaw.",
        }),
        suetonon: await db.createTown({
            id: "suetonon-skratonia-alabastria",
            slug: "suetonon-skratonia-alabastria",
            name: "Suetonon",
            type: TownType.CITY,
            continent: { connect: { id: continent.skratonia.id } },
            location: "Suetonon is located in the far northern part of the continent, east of the wasted mountains, sitting on a river that flows into the ocean.",
            description: "A sprawling city of stone and steel, built on the ruins of an ancient empire. The city is a hub of trade and commerce, and is home to the Suetonon University, one of the most prestigious institutions of learning in the world.",
        }),
        tuinton: await db.createTown({
            id: "tuinton-skratonia-alabastria",
            slug: "tuinton-skratonia-alabastria",
            name: "Tuinton",
            type: TownType.HAMLET,
            location: "Tuinton is on the western edge of the Ashen City, just north of the mountain range that borders the road from Suetonon to the south.",
            continent: { connect: { id: continent.skratonia.id } },
            description: "A small, weather-worn farming hamlet nestled on the ashen fringe between Suetonon's outer roads and the looming influence of the Ashen City. Low stone cottages and timber barns cluster around a muddy crossroads, their roofs perpetually dusted with gray ash that drifts in from the surrounding wastes. The people are practical and insular, bound by shared labor and old obligations to distant nobles, and quick to grow silent around strangers.",
        }),
    };
    // Continents Capitals
    try {
        await db.setContinentCapital(continent.kuriguer.id, town.silverleaf_harbor.id);
        await db.setContinentCapital(continent.katman.id, town.swamp_crown.id);
        await db.setContinentCapital(continent.alatman.id, town.volcanic_throne.id);
        await db.setContinentCapital(continent.maltman.id, town.deepforge_citadel.id);
        await db.setContinentCapital(continent.skratonia.id, town.golden_fields.id);
        await db.setContinentCapital(continent.bulsania.id, town.frosthold.id);
    } catch (error) {
        console.error("Error setting continent capitals:", error);
        process.exit(1);
    }
    // Regions
    const region: Record<string, Prisma.RegionGetPayload<{}>> = {
        central_skratonia: await db.createRegion({
            id: "central-skratonia-alabastria",
            name: "Central Skratonia",
            continent: { connect: { id: continent.skratonia.id } },
            description: "The central region of Skratonia, sitting between 'Otherwordly Wastes' and 'The Farmlands', known for its' rolling plains and scattered settlements with many of the continents trade routes passing through.",
        }),
        the_ashen_city: await db.createRegion({
            id: "the-ashen-city-skratonia-alabastria",
            name: "The Ashen City",
            continent: { connect: { id: continent.skratonia.id } },
            description: "Sitting to the north-east of the continent, The Ashen City is a vast ruin-choked region where a once-great metropolis lies buried under drifting gray ash and shattered stone. Ghostly lights, lingering magic, and restless spirits haunt its collapsed streets, and the air itself feels heavy with memory. Few enter willingly, as the Ashen City is known to change those who stay around for too long.",
        }),
        otherwordly_wastes: await db.createRegion({
            id: "otherwordly-wastes-skratonia-alabastria",
            name: "Otherwordly Wastes",
            continent: { connect: { id: continent.skratonia.id } },
            description: "On the northern coast of the continent, west of the mountains near Suetonon, Otherwordly Wastes is a vast, unforgiving desert where the sun beats down mercilessly, and the air is filled with the scent of death. The wastes are home to many dangerous creatures, and few dare to venture within their boundaries.",
        }),
        farmlands_of_paradise: await db.createRegion({
            id: "farmlands-of-paradise-skratonia-alabastria",
            name: "Farmlands of Paradise",
            continent: { connect: { id: continent.skratonia.id } },
            description: "To the south of Suetonon, Farmlands of Paradise is the region that give Skratonia its' lifeblood, providing the continent with its' food and trade.",
        }),
        blood_badlands: await db.createRegion({
            id: "blood-badlands-skratonia-alabastria",
            name: "Blood Badlands",
            continent: { connect: { id: continent.skratonia.id } },
            description: "Near the farthest west coast of the continent, Blood Badlands is the most dangerous region of the continent, where not only wild beasts roam, but many raiding tribes have made their home in the rugged terrain and rocky cliffs.",
        }),
    };
    // Voyages
    const voyage: Record<string, Prisma.VoyageGetPayload<{}>> = {
        kuriguer_katman: await db.createVoyage({
            id: "voyage-kuriguer-katman-alabastria",
            name: "Between Kuriguer and Katman",
            fromContinent: { connect: { id: continent.kuriguer.id } },
            toContinent: { connect: { id: continent.katman.id } },
            distanceMi: 1200,
            travelDays: 25,
            travelHours: 12
        }),
        kuriguer_maltman: await db.createVoyage({
            id: "voyage-kuriguer-maltman-alabastria",
            name: "Between Kuriguer and Maltman",
            fromContinent: { connect: { id: continent.kuriguer.id } },
            toContinent: { connect: { id: continent.maltman.id } },
            distanceMi: 800,
            travelDays: 16,
            travelHours: 16
        }),
        kuriguer_bulsania: await db.createVoyage({
            id: "voyage-kuriguer-bulsania-alabastria",
            name: "Between Kuriguer and Bulsania",
            fromContinent: { connect: { id: continent.kuriguer.id } },
            toContinent: { connect: { id: continent.bulsania.id } },
            distanceMi: 1500,
            travelDays: 31,
            travelHours: 6
        }),
        kuriguer_skratonia: await db.createVoyage({
            id: "voyage-kuriguer-skratonia-alabastria",
            name: "Between Kuriguer and Skratonia",
            fromContinent: { connect: { id: continent.kuriguer.id } },
            toContinent: { connect: { id: continent.skratonia.id } },
            distanceMi: 2100,
            travelDays: 43,
            travelHours: 18
        }),
        kuriguer_kantra: await db.createVoyage({
            id: "voyage-kuriguer-kantra-alabastria",
            name: "Between Kuriguer and Kantra",
            fromContinent: { connect: { id: continent.kuriguer.id } },
            toContinent: { connect: { id: continent.kantra.id } },
            distanceMi: 2800,
            travelDays: 58,
            travelHours: 8
        }),
        katman_skratonia: await db.createVoyage({
            id: "voyage-katman-skratonia-alabastria",
            name: "Between Katman and Skratonia",
            fromContinent: { connect: { id: continent.katman.id } },
            toContinent: { connect: { id: continent.skratonia.id } },
            distanceMi: 1400,
            travelDays: 29,
            travelHours: 4
        }),
        katman_maltman: await db.createVoyage({
            id: "voyage-katman-maltman-alabastria",
            name: "Between Katman and Maltman",
            fromContinent: { connect: { id: continent.katman.id } },
            toContinent: { connect: { id: continent.maltman.id } },
            distanceMi: 700,
            travelDays: 14,
            travelHours: 14
        }),
        katman_alatman: await db.createVoyage({
            id: "voyage-katman-alatman-alabastria",
            name: "Between Katman and Alatman",
            fromContinent: { connect: { id: continent.katman.id } },
            toContinent: { connect: { id: continent.alatman.id } },
            distanceMi: 800,
            travelDays: 16,
            travelHours: 16
        }),
        alatman_bulsania: await db.createVoyage({
            id: "voyage-alatman-bulsania-alabastria",
            name: "Between Alatman and Bulsania",
            fromContinent: { connect: { id: continent.alatman.id } },
            toContinent: { connect: { id: continent.bulsania.id } },
            distanceMi: 700,
            travelDays: 14,
            travelHours: 14
        }),
        alatman_maltman: await db.createVoyage({
            id: "voyage-alatman-maltman-alabastria",
            name: "Between Alatman and Maltman",
            fromContinent: { connect: { id: continent.alatman.id } },
            toContinent: { connect: { id: continent.maltman.id } },
            distanceMi: 700,
            travelDays: 14,
            travelHours: 14
        }),
        maltman_bulsania: await db.createVoyage({
            id: "voyage-maltman-bulsania-alabastria",
            name: "Between Maltman and Bulsania",
            fromContinent: { connect: { id: continent.maltman.id } },
            toContinent: { connect: { id: continent.bulsania.id } },
            distanceMi: 900,
            travelDays: 18,
            travelHours: 18
        }),
        skratonia_kantra: await db.createVoyage({
            id: "voyage-skratonia-kantra-alabastria",
            name: "Between Skratonia and Kantra",
            fromContinent: { connect: { id: continent.skratonia.id } },
            toContinent: { connect: { id: continent.kantra.id } },
            distanceMi: 2300,
            travelDays: 47,
            travelHours: 22
        }),
        bulsania_kantra: await db.createVoyage({
            id: "voyage-bulsania-kantra-alabastria",
            name: "Between Bulsania and Kantra",
            fromContinent: { connect: { id: continent.bulsania.id } },
            toContinent: { connect: { id: continent.kantra.id } },
            distanceMi: 1500,
            travelDays: 31,
            travelHours: 6
        })
    };
    // Trade Routes
    const trade_route: Record<string, Prisma.TradeRouteGetPayload<{}>> = {
        magical_coast: await db.createTradeRoute({
            id: "trade-route-magical-coast-alabastria",
            name: "Magical Coast Route",
            description: "Primary maritime trade route across the seas connecting Kuriguer's coastal towns to Skratonia's major cities, carrying magical components and research materials.",
            goods: ["Magical components", "Research materials", "Elven crafts", "Agricultural products"],
            routeType: TradeRouteType.MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continent.kuriguer.id },
                    { id: continent.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.kuriguer_skratonia.id }
                ]
            }
        }),
        northern_air: await db.createTradeRoute({
            id: "trade-route-northern-air-alabastria",
            name: "Northern Air Route",
            description: "Aerial trade route using flying ships from Kuriguer to cross the northern seas and connect with Bulsania, avoiding the dangerous Kantra region.",
            goods: ["Frozen goods", "Rare materials", "Magical artifacts", "Elven weapons"],
            routeType: TradeRouteType.AERIAL,
            frequency: TradeRouteFrequency.MONTHLY,
            continentStops: {
                connect: [
                    { id: continent.kuriguer.id },
                    { id: continent.bulsania.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.kuriguer_bulsania.id }
                ]
            }
        }),
        forest_path: await db.createTradeRoute({
            id: "trade-route-forest-path-alabastria",
            name: "Forest Path",
            description: "Dangerous overland route through Kuriguer's interior forests to reach coastal ports, where goods are then transported by sea to the Kamalatman regions. Used by brave traders and the Huntbound Order.",
            goods: ["Magical research", "Rare herbs", "Mining equipment", "Swamp goods"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.IRREGULAR,
            continentStops: {
                connect: [
                    { id: continent.kuriguer.id },
                    { id: continent.maltman.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.kuriguer_maltman.id }
                ]
            }
        }),
        southern_swamp: await db.createTradeRoute({
            id: "trade-route-southern-swamp-alabastria",
            name: "Southern Swamp Route",
            description: "Dangerous overland route connecting to the coastal ports of Katman, where goods are then transported by sea to Skratonia's agricultural regions, carrying swamp goods and raw materials.",
            goods: ["Swamp goods", "Raw materials", "Agricultural products", "Military equipment"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.katman_skratonia.id }
                ]
            }
        }),
        swamp_passage: await db.createTradeRoute({
            id: "trade-route-swamp-passage-alabastria",
            name: "Swamp Passage",
            description: "Dangerous overland route through the swamps connecting to the coastal ports of Katman, where goods are then transported by sea to Alatman, used for internal Kamalatman trade.",
            goods: ["Raw materials", "Food supplies", "Military equipment", "Swamp resources"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.alatman.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.katman_alatman.id }
                ]
            }
        }),
        central_plains: await db.createTradeRoute({
            id: "trade-route-central-plains-alabastria",
            name: "Central Plains Route",
            description: "Major trade route connecting to the coastal ports of Katman often intercepting goods from Maltman, where goods are then transported by sea to Skratonia's agricultural regions, carrying raw materials and manufactured goods.",
            goods: ["Raw materials", "Manufactured goods", "Agricultural products", "Military equipment"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.BI_WEEKLY,
            continentStops: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.maltman.id },
                    { id: continent.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.katman_maltman.id },
                    { id: voyage.katman_skratonia.id }
                ]
            }
        }),
        eastern_sea: await db.createTradeRoute({
            id: "trade-route-eastern-sea-alabastria",
            name: "Eastern Sea Route",
            description: "Maritime route sailing out of Katman after often intercepting goods from Alatman, where goods are then transported over the eastern seas to Skratonia, carrying high-value swamp goods.",
            goods: ["Raw materials", "Swamp goods", "Agricultural products", "Military equipment", "Magical components", "Rare gems", "Volcanic weapons"],
            routeType: TradeRouteType.MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.alatman.id },
                    { id: continent.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.katman_skratonia.id },
                    { id: voyage.katman_alatman.id }
                ]
            }
        }),
        volcanic_supply: await db.createTradeRoute({
            id: "trade-route-volcanic-supply-alabastria",
            name: "Volcanic Supply Route",
            description: "Primary maritime trade route connecting Alatman's volcanic forges to the other Kamalatman regions and beyond via sea travel.",
            goods: ["Volcanic glass", "Magical metals", "Constructed items", "Rare minerals"],
            routeType: TradeRouteType.MARITIME,
            frequency: TradeRouteFrequency.DAILY,
            continentStops: {
                connect: [
                    { id: continent.alatman.id },
                    { id: continent.katman.id },
                    { id: continent.maltman.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.alatman_maltman.id },
                    { id: voyage.katman_alatman.id }
                ]
            }
        }),
        great_mining_road: await db.createTradeRoute({
            id: "trade-route-great-mining-road-alabastria",
            name: "Great Mining Road",
            description: "Primary overland trade route connecting Maltman's mining villages to coastal ports, where goods are then transported by sea to other Kamalatman regions and major trade centers.",
            goods: ["Raw ores", "Refined metals", "Gems", "Mining equipment", "Dwarven crafts"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.DAILY,
            continentStops: {
                connect: [
                    { id: continent.maltman.id },
                    { id: continent.katman.id },
                    { id: continent.alatman.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.katman_maltman.id },
                    { id: voyage.katman_alatman.id }
                ]
            }
        }),
        northern_sea: await db.createTradeRoute({
            id: "trade-route-northern-sea-alabastria",
            name: "Northern Sea Route",
            description: "Maritime route connecting to Bulsania from Maltman, carrying high-value mining goods.",
            goods: ["Rare metals", "Magical gems", "Dwarven weapons", "Frozen goods"],
            routeType: TradeRouteType.MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continent.maltman.id },
                    { id: continent.bulsania.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.maltman_bulsania.id }
                ]
            }
        }),
        underground_passage: await db.createTradeRoute({
            id: "trade-route-underground-passage-alabastria",
            name: "Underground Passage",
            description: "Secret underground trade route connecting to Alatman to Maltman, where goods are then transported by sea to Kuriguer, used for magical research materials.",
            goods: ["Magical metals", "Ancient artifacts", "Research materials", "Rare components"],
            routeType: TradeRouteType.UNDERGROUND_TO_MARITIME,
            frequency: TradeRouteFrequency.MONTHLY,
            continentStops: {
                connect: [
                    { id: continent.alatman.id },
                    { id: continent.maltman.id },
                    { id: continent.kuriguer.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.kuriguer_maltman.id }
                ]
            }
        }),
        great_central_highway: await db.createTradeRoute({
            id: "trade-route-great-central-highway-alabastria",
            name: "Great Central Highway",
            description: "Primary overland trade route connecting all major Skratonian cities and ports.",
            goods: ["Agricultural products", "Manufactured goods", "Trade goods", "Food supplies"],
            routeType: TradeRouteType.OVERLAND,
            frequency: TradeRouteFrequency.DAILY,
            continentStops: {
                connect: [
                    { id: continent.skratonia.id }
                ]
            },
            townStops: {
                connect: [
                    { id: town.suetonon.id },
                    { id: town.silverleaf_harbor.id }
                ]
            }
        }),
        kantra_watch: await db.createTradeRoute({
            id: "trade-route-kantra-watch-alabastria",
            name: "Kantra Watch Route",
            description: "Military patrol route along the north-eastern borders of Bulsania and south-western borders of Skratonia, monitoring for threats from Kantra and unknown dangers; delivering supplies to naval forces stationed outside of Kantra.",
            goods: ["Military equipment", "Supplies", "Reconnaissance", "Defense materials"],
            routeType: TradeRouteType.OVERLAND,
            frequency: TradeRouteFrequency.MONTHLY,
            continentStops: {
                connect: [
                    { id: continent.bulsania.id },
                    { id: continent.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyage.bulsania_kantra.id },
                    { id: voyage.skratonia_kantra.id }
                ]
            }
        })
    };
    // Languages
    const language: Record<string, Prisma.LanguageGetPayload<{}>> = {
        common: await db.createLanguage({
            id: "language-common-alabastria",
            name: "Common",
            description: "The common language of the world, a straightforward, everyday tongue considered simple and unremarkable yet existing in many different dialects and variations."
        }),
        elvish: await db.createLanguage({
            id: "language-elvish-alabastria",
            name: "Elvish",
            description: "An elegant, fluid speech; flowing and musical with subtle intonations and intricate grammar, so that even ordinary phrases sound like poetry."
        }),
        sylvan: await db.createLanguage({
            id: "language-sylvan-alabastria",
            name: "Sylvan",
            description: "The language of the fey, a mesmerizing natural music; composed of countless delicate and wild sounds (from a butterfly's whisper to a tree's thunder), painfully beautiful and enchantingly melodic."
        }),
        gnomish: await db.createLanguage({
            id: "language-gnomish-alabastria",
            name: "Gnomish",
            description: "A quirky, singsong chattering; precise and stilted, with a playful lilt and a cadence that makes even harsh consonants sound unusually cheerful."
        }),
        draconic: await db.createLanguage({
            id: "language-draconic-alabastria",
            name: "Draconic",
            description: "A harsh, sibilant tongue; full of sharp, crackling consonants and rolling r's, like the echo of claws on stone; it's powerful and ancient, often likened to dragons' roar."
        }),
        primordial: await db.createLanguage({
            id: "language-primordial-alabastria",
            name: "Primordial",
            description: "The elemental tongue; a raw, guttural rumble filled with nature's noises (the bubbling of water, the roar of fire, the rush of wind, the tremble of earth), as if speaking in the very voice of the elements."
        }),
        celestial: await db.createLanguage({
            id: "language-celestial-alabastria",
            name: "Celestial",
            description: "A sublime, harmonized speech; layered and melodic with round vowels and a sing-song tone. It flows like a divine hymn, beautiful and ethereal, almost too perfect for mortal ears."
        }),
        abyssal: await db.createLanguage({
            id: "language-abyssal-alabastria",
            name: "Abyssal",
            description: "A chaotic, discordant cacophony; snarling like barking demons and buzzing like a swarm of hornets, an ugly melee of harsh hisses and shouts. Its sound is unsettling and violent, a savage twin of elemental speech."
        }),
        deep_speech: await db.createLanguage({
            id: "language-deep-speech-alabastria",
            name: "Deep Speech",
            description: "The mind-shattering aberrant tongue; a reel of impossible, droning noises and eerie emotional tones with no normal grammar. Hearing it induces a profound wrongness, like a dirge of madness just on the edge of understanding."
        }),
        infernal: await db.createLanguage({
            id: "language-infernal-alabastria",
            name: "Infernal",
            description: "A harsh, austere dialect; once pure harmony but twisted with Abyssal harshness. It mixes round, orderly vowels with sharp, hissing consonants, an unholy fusion of melody and menace that is painful on the tongue."
        }),
        dwarvish: await db.createLanguage({
            id: "language-dwarvish-alabastria",
            name: "Dwarvish",
            description: "A stout, gutteral tongue; thick with hard consonants and throat-clearing sounds. It has a staccato, hearty rhythm, as if every word is hammered out of rock."
        }),
        undercommon: await db.createLanguage({
            id: "language-undercommon-alabastria",
            name: "Undercommon",
            description: "A deep, resonant murmur often spoken in darkness or caverns. It emphasizes volume, vibration and tone (more than nuanced words), carrying weight in how it's delivered, often feeling heavy and echoing."
        }),
        orcish: await db.createLanguage({
            id: "language-orcish-alabastria",
            name: "Orcish",
            description: "A raw, guttural growl; coarse and gravelly, with heavy hard consonants and a grating quality. It sounds fierce and unpolished, like a fighter's shout or the grinding of blades."
        }),
        lizardfolk: await db.createLanguage({
            id: "language-lizardfolk-alabastria",
            name: "Lizardfolk",
            description: "A reptilian croak; full of low growls and sharp hisses. It uses growling vowels and clipped consonants, often conveying meaning through tone and simple, blunt sounds."
        }),
        yuan_ti: await db.createLanguage({
            id: "language-yuan-ti-alabastria",
            name: "Yuan-Ti",
            description: "A sinuous, hissing tongue; serpentine and sibilant, with drawn-out s's and breathy whispers. It sounds smooth and exotic like a serpent's hiss beneath civilized words."
        }),
        aquan: await db.createLanguage({
            id: "language-aquan-alabastria",
            name: "Aquan",
            description: "A flowing, liquid speech; smooth and subtle like water itself. It ripples with hidden nuance and double meanings, as if every phrase carries a hidden current beneath its gentle surface."
        }),
        giant: await db.createLanguage({
            id: "language-giant-alabastria",
            name: "Giant",
            description: "A booming, thunderous roar; low and resonant with deep vibrating tones. It sounds like rolling thunder or shifting boulders, far below the pitch of most humanoids."
        }),
        terran: await db.createLanguage({
            id: "language-terran-alabastria",
            name: "Terran",
            description: "An earthy rumble; a deep, vibrating tongue like a tremor through rock. Words roll out like shifting stones, low and bass-heavy, echoing in the chest."
        }),
        telepathic: await db.createLanguage({
            id: "language-telepathic-alabastria",
            name: "Telepathic",
            description: "A wordless mind-voice no audible sound at all. Thoughts, images or emotions are conveyed directly, as if ideas themselves 'speak' without any real sound or accent."
        }),
        halfling: await db.createLanguage({
            id: "language-halfling-alabastria",
            name: "Halfling",
            description: "A soft, friendly chatter; light and gentle, with a quick, cheerful lilt. It often sounds warm and inviting, as if every sentence is spoken with a smile."
        }),
        aarakocra: await db.createLanguage({
            id: "language-aarakocra-alabastria",
            name: "Aarakocra",
            description: "An avian song; punctuated by chirps, trills and whistles. Many phrases are woven with bird-like notes and clicks, giving it a musical, airy quality like birdsong."
        }),
        goliath: await db.createLanguage({
            id: "language-goliath-alabastria",
            name: "Goliath",
            description: "A rugged, mountainous speech; guttural and blunt, with a rolling quality. It often sounds like a hardy growl or rumble (imagine the echoes of wind over peaks), reflecting a harsh and stoic nature."
        }),
        auran: await db.createLanguage({
            id: "language-auran-alabastria",
            name: "Auran",
            description: "An airy, breathy tongue; a long, slow exhalation of sound. Words come out softly and deliberately, drifting like a gentle breeze from the mouth."
        }),
        druidic: await db.createLanguage({
            id: "language-druidic-alabastria",
            name: "Druidic",
            description: "A secret, mystical language; soft and lyrical like a chant or whisper in the woods. It often feels like quiet chants or rustling leaves, using its own curving runes; outsiders may perceive it as musical and elusive (spoken only by druids)."
        }),
        modron: await db.createLanguage({
            id: "language-modron-alabastria",
            name: "Modron",
            description: "A mechanical, precise chatter; a series of clicks, beeps and soft whirrs. To most ears it sounds like a clockwork or machine-like language, deliberate and unemotional."
        }),
        ignan: await db.createLanguage({
            id: "language-ignan-alabastria",
            name: "Ignan",
            description: "A crackling, fiery hiss; sharp and staccato, full of hisses and clicks. It snaps and sparks like flames, evoking the crackle of fire or the pop of burning embers."
        }),
        goblin: await db.createLanguage({
            id: "language-goblin-alabastria",
            name: "Goblin",
            description: "A guttural tongue of hisses, grunts, and high-pitched chirrs, like a swarm of angry crows squabbling in a dark alley. Its writing often appears as jagged runes, as if clawed or gouged into stone."
        }),
        giff: await db.createLanguage({
            id: "language-giff-alabastria",
            name: "Giff",
            description: "Booming and brash, this language rolls out like a cannon blast with low chesty bellows broken by sudden shrieks and rasping chuckles. It has an oddly musical range, jumping from bass-heavy booms to tinny squeaks."
        }),
        hadozee: await db.createLanguage({
            id: "language-hadozee-alabastria",
            name: "Hadozee",
            description: "Soft and breezy, this language is made of low rumbling murmurs and owl-like hoots, flowing gently like waves against a wooden hull. Speech is often punctuated by barky clicks and breathy squeals, blending sound with subtle motion."
        }),
        quori: await db.createLanguage({
            id: "language-quori-alabastria",
            name: "Quori",
            description: "Sibilant and eerie, this language sounds like serpents whispering through dreams, its words hissing and rumbling with unsettling intent. Its script forms elegant circular sigils, like smoke curling into meaningful shapes."
        }),
        kenderspeak: await db.createLanguage({
            id: "language-kenderspeak-alabastria",
            name: "Kenderspeak",
            description: "Wildly whimsical and sprightly, this language dances along in a playful, question-filled rhythm that never seems to sit still. It flits between bright tones and quick babble, sounding as if the words themselves are hopping ahead of the speaker."
        }),
        leonin: await db.createLanguage({
            id: "language-leonin-alabastria",
            name: "Leonin",
            description: "Deep and proud, this language rumbles with low, powerful tones like a slow lion’s growl before bursting into thunderous shouts. Every word feels deliberate and forceful, trailing with confidence and sun-warmed strength."
        }),
        loxodon: await db.createLanguage({
            id: "language-loxodon-alabastria",
            name: "Loxodon",
            description: "Slow, meditative, and sonorous, this language hums like calm chanting backed by deep drums. Each syllable is drawn out in warm, mellow tones that feel as if they rise from deep within stone."
        }),
        minotaur: await db.createLanguage({
            id: "language-minotaur-alabastria",
            name: "Minotaur",
            description: "Guttural and blunt, this language crashes out in short bursts of snorts, growls, and heavy breaths. It often sounds like cattle lowing mixed with sharp bellows, emphasizing strength through sheer volume."
        }),
        owlin: await db.createLanguage({
            id: "language-owlin-alabastria",
            name: "Owlin",
            description: "Quiet and melodic, this language flows like a night breeze through feathers, ending phrases with soft hoots or gentle coos. It feels hushed and thoughtful, like lullabies whispered beneath moonlight."
        }),
        tabaxi: await db.createLanguage({
            id: "language-tabaxi-alabastria",
            name: "Tabaxi",
            description: "Playful and elastic, this language purrs and trills with rolling sounds, sudden hisses, and curious squeaks. It feels light and energetic, as if each word is chasing something just out of reach."
        }),
        thri_kreen: await db.createLanguage({
            id: "language-thri-kreen-alabastria",
            name: "Thri-kreen",
            description: "Alien and chittering, this language clicks, buzzes, and snaps like an insect chorus speaking in perfect rhythm. To most ears it barely registers as speech, sounding more like an intricate machine of mandible-snaps and whistles."
        }),
        vedalken: await db.createLanguage({
            id: "language-vedalken-alabastria",
            name: "Vedalken",
            description: "Coolly precise and smooth, this language slides from sound to sound with long vowels and soft sibilants. It feels measured and deliberate, like water flowing over polished stone or ink spreading cleanly across a page."
        }),
        unknown_dialects: await db.createLanguage({
            id: "language-unknown-dialects-alabastria",
            name: "Unknown Dialects",
            description: "A mysterious babble; unpredictable and varied. It may sound like a jumble of fragments from many tongues, a chaotic and esoteric jumble of sounds that defies easy description."
        }),
        any_one: await db.createLanguage({
            id: "language-any-one-alabastria",
            name: "Any One Language",
            description: "The ability to speak and understand any one language of your choice."
        }),
        any_two: await db.createLanguage({
            id: "language-any-two-alabastria",
            name: "Any Two Languages",
            description: "The ability to speak and understand any two languages of your choice."
        }),
        common_sign_language: await db.createLanguage({
            id: "language-common-sign-language-alabastria",
            name: "Common Sign Language",
            description: "A visual-gestural language using hand signs, facial expressions, and body language to convey meaning without spoken words."
        }),
        thieves_cant: await db.createLanguage({
            id: "language-thieves-cant-alabastria",
            name: "Thieves' Cant",
            description: "A secretive language used by rogues and thieves, consisting of coded phrases, slang, symbols, and gestures to communicate covertly."
        })
    };
    // Connect languages to continents
    try {
        // Kuriguer
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.kuriguer.id, language.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.kuriguer.id, language.elvish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.kuriguer.id, language.sylvan.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.kuriguer.id, language.gnomish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.kuriguer.id, language.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.kuriguer.id, language.primordial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.kuriguer.id, language.celestial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.kuriguer.id, language.abyssal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.kuriguer.id, language.deep_speech.id);
        // Katman
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.katman.id, language.orcish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.katman.id, language.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.katman.id, language.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.katman.id, language.lizardfolk.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.katman.id, language.yuan_ti.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.katman.id, language.abyssal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.katman.id, language.aquan.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.katman.id, language.druidic.id);
        // Alatman
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.alatman.id, language.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.alatman.id, language.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.alatman.id, language.gnomish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.alatman.id, language.infernal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.alatman.id, language.primordial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.alatman.id, language.modron.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.alatman.id, language.abyssal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.alatman.id, language.deep_speech.id);
        // Maltman
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.maltman.id, language.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.maltman.id, language.dwarvish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.maltman.id, language.undercommon.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.maltman.id, language.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.maltman.id, language.gnomish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.maltman.id, language.giant.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.maltman.id, language.terran.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.maltman.id, language.deep_speech.id);
        // Skratonia
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.skratonia.id, language.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.skratonia.id, language.halfling.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.skratonia.id, language.elvish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.skratonia.id, language.infernal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.skratonia.id, language.celestial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.skratonia.id, language.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.skratonia.id, language.telepathic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.skratonia.id, language.giant.id);
        // Bulsania
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.bulsania.id, language.giant.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.bulsania.id, language.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.bulsania.id, language.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.bulsania.id, language.aarakocra.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.bulsania.id, language.goliath.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.bulsania.id, language.auran.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.bulsania.id, language.primordial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.bulsania.id, language.celestial.id);
        // Kantra
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.kantra.id, language.infernal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continent.kantra.id, language.abyssal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.kantra.id, language.ignan.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continent.kantra.id, language.primordial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.kantra.id, language.deep_speech.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continent.kantra.id, language.unknown_dialects.id);
    } catch (error) {
        console.error("Error connecting languages to continents:", error);
        process.exit(1);
    }
    // War Conflicts
    const war_conflict: Record<string, Prisma.WarConflictGetPayload<{}>> = {
        wyvern_war: await db.createWarConflict({
            id: "war-conflict-wyvern-wars-alabastria",
            name: "Wyvern Wars",
            description: "A great migration of wyverns leaving Kantra to explore the newly inhabited lands, laying siege against all continents and their developing civilizations, causing widespread devastation and forcing unlikely alliances to repel the threat.",
            startCycle: 300,
            endCycle: 600,
            status: WarConflictStatus.RESOLVED,
            outcome: "Victory for the allied continents, and while it was at a great cost; led to most of the continents taking on their role from the war as a specialization in their economies and cultures.",
            continentsInvolved: {
                connect: [
                    { id: continent.kuriguer.id },
                    { id: continent.katman.id },
                    { id: continent.alatman.id },
                    { id: continent.maltman.id },
                    { id: continent.skratonia.id },
                    { id: continent.bulsania.id }
                ]
            }
        }),
        first_continental_war: await db.createWarConflict({
            id: "war-conflict-first-continental-war-alabastria",
            name: "First Continental War",
            description: "Major naval conflict with Bulsania over control of northern maritime trade routes, establishing Skratonia as the central trade hub.",
            startCycle: 100,
            endCycle: 130,
            status: WarConflictStatus.RESOLVED,
            outcome: "Skratonia's victory established it as the dominant maritime power in the northern seas, controlling key trade routes and ports.",
            continentsInvolved: {
                connect: [
                    { id: continent.skratonia.id },
                    { id: continent.bulsania.id }
                ]
            }
        }),
        coastal_forest_dispuit: await db.createWarConflict({
            id: "war-conflict-coastal-forest-disputes-alabastria",
            name: "Coastal Forest Disputes",
            description: "Ongoing tensions with Skratonia over logging rights in the northern coastal forests. Skratonian settlers occasionally arrive by sea to encroach on elven territory.",
            startCycle: 768,
            status: WarConflictStatus.LOW_INTENSITY,
            continentsInvolved: {
                connect: [
                    { id: continent.kuriguer.id },
                    { id: continent.skratonia.id }
                ]
            }
        }),
        swamp_war: await db.createWarConflict({
            id: "war-conflict-swamp-wars-alabastria",
            name: "Swamp Wars",
            description: "Major conflicts over control of the swamp regions, establishing Katman as the primary agricultural center of Kamalatman.",
            startCycle: 500,
            endCycle: 600,
            status: WarConflictStatus.RESOLVED,
            outcome: "Katman's victory solidified its role as the agricultural hub of Kamalatman, controlling vital swamp resources and trade routes.",
            continentsInvolved: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.alatman.id },
                    { id: continent.maltman.id }
                ]
            }
        }),
        swamp_border_skirmish: await db.createWarConflict({
            id: "war-conflict-swamp-border-skirmishes-alabastria",
            name: "Swamp Border Skirmishes",
            description: "Frequent skirmishes along the swamp borders between Katman and Alatman, with disputes over fishing rights with naval support from both sides.",
            startCycle: 785,
            status: WarConflictStatus.COLD_WAR,
            continentsInvolved: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.alatman.id }
                ]
            }
        }),
        southern_frontier_war: await db.createWarConflict({
            id: "war-conflict-southern-frontier-war-alabastria",
            name: "Southern Frontier War",
            description: "Ongoing conflicts with Skratonia over trade tariffs and resource taxation, particularly affecting the southern maritime trade routes.",
            startCycle: 770,
            status: WarConflictStatus.LOW_INTENSITY,
            continentsInvolved: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.alatman.id },
                    { id: continent.maltman.id },
                    { id: continent.skratonia.id }
                ]
            }
        }),
        alatman_resource_war: await db.createWarConflict({
            id: "war-conflict-alatman-resource-wars-alabastria",
            name: "Alatman Resource Wars",
            description: "Major conflict over control of the volcanic resources, leading to the current taxation system.",
            startCycle: 600,
            endCycle: 700,
            status: WarConflictStatus.RESOLVED,
            outcome: "In the end the continent of Alatman gave in to the demands of Katman and Maltman, agreeing to a taxation system that benefited all parties involved.",
            continentsInvolved: {
                connect: [
                    { id: continent.alatman.id },
                    { id: continent.katman.id },
                    { id: continent.maltman.id }
                ]
            }
        }),
        resource_tax_rebellion: await db.createWarConflict({
            id: "war-conflict-resource-tax-rebellion-alabastria",
            name: "Resource Tax Rebellion",
            description: "Ongoing uprisings against the Kamalatman monarchy's heavy taxation on resource extraction. Local miners and settlers demand fairer treatment.",
            startCycle: 795,
            status: WarConflictStatus.COLD_WAR,
            continentsInvolved: {
                connect: [
                    { id: continent.alatman.id },
                    { id: continent.maltman.id },
                    { id: continent.katman.id }
                ]
            }
        }),
        great_mining_war: await db.createWarConflict({
            id: "war-conflict-great-mining-war-alabastria",
            name: "Great Mining War",
            description: "Major conflicts over control of the richest mining regions, establishing Maltman as the primary mining center of Kamalatman.",
            startCycle: 200,
            endCycle: 300,
            status: WarConflictStatus.RESOLVED,
            outcome: "Maltman's victory solidified its role as the mining hub of Kamalatman, controlling vital mineral resources and trade routes.",
            continentsInvolved: {
                connect: [
                    { id: continent.maltman.id },
                    { id: continent.katman.id },
                    { id: continent.alatman.id }
                ]
            }
        }),
        underground_expansion_conflict: await db.createWarConflict({
            id: "war-conflict-underground-expansion-conflict-alabastria",
            name: "Underground Expansion Conflict",
            description: "Tensions with Kuriguer over underground magical resources and ancient ruins discovered in deep mines.",
            startCycle: 780,
            status: WarConflictStatus.COLD_WAR,
            continentsInvolved: {
                connect: [
                    { id: continent.maltman.id },
                    { id: continent.kuriguer.id }
                ]
            }
        }),
        coastal_mountain_dispute: await db.createWarConflict({
            id: "war-conflict-coastal-mountain-dispute-alabastria",
            name: "Coastal Mountain Dispute",
            description: "Frequent disputes caused by Maltman attempting to lay claim to mountain resources in areas of Bulsania that the tribes do not often travel to due to the dangers of being on that side of the continent.",
            startCycle: 642,
            status: WarConflictStatus.LOW_INTENSITY,
            continentsInvolved: {
                connect: [
                    { id: continent.maltman.id },
                    { id: continent.bulsania.id }
                ]
            }
        }),
        caravan_war: await db.createWarConflict({
            id: "war-conflict-caravan-wars-alabastria",
            name: "Caravan Wars",
            description: "Ongoing conflict between Frosthold and raider tribes like the Icemaw who regularly attack food caravans. Mercenary companies such as the Frostmarch Company are frequently hired to hunt down and eliminate raider camps.",
            startCycle: 515,
            status: WarConflictStatus.HIGH_INTENSITY,
            continentsInvolved: {
                connect: [
                    { id: continent.bulsania.id }
                ]
            }
        }),
        kantra_watch: await db.createWarConflict({
            id: "war-conflict-kantra-watch-alabastria",
            name: "Kantra Watch",
            description: "Constant maritime vigilance against threats from the mysterious Kantra region across the northern seas, requiring significant naval resources.",
            startCycle: 600,
            status: WarConflictStatus.COLD_WAR,
            continentsInvolved: {
                connect: [
                    { id: continent.bulsania.id },
                    { id: continent.skratonia.id }
                ]
            }
        }),
        forbidden_land_dispute: await db.createWarConflict({
            id: "war-conflict-forbidden-land-dispute-alabastria",
            name: "Forbidden Land Dispute",
            description: "Ongoing tensions over who has the right to explore or claim Kantra, with multiple nations claiming territorial rights.",
            startCycle: 750,
            status: WarConflictStatus.COLD_WAR,
            continentsInvolved: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.skratonia.id },
                    { id: continent.bulsania.id }
                ]
            }
        })
    };
    // Treaties
    const treaty: Record<string, Prisma.TreatyGetPayload<{}>> = {
        magical_research_accord: await db.createTreaty({
            id: "treaty-magical-research-accord-alabastria",
            name: "Magical Research Accord",
            signedCycle: 615,
            terms: "Kuriguer shares magical knowledge in exchange for agricultural goods and trade access across the seas protected by Skratonia.",
            continentsInvolved: {
                connect: [
                    { id: continent.kuriguer.id },
                    { id: continent.skratonia.id }
                ]
            }
        }),
        northern_defense_pact: await db.createTreaty({
            id: "treaty-northern-defense-pact-alabastria",
            name: "Northern Defense Pact",
            signedCycle: 580,
            terms: "Mutual defense agreement between Bulsania and Skratonia to protect northern maritime trade routes from Kantra threats.",
            continentsInvolved: {
                connect: [
                    { id: continent.bulsania.id },
                    { id: continent.skratonia.id }
                ]
            }
        }),
        kamalatman_internal_trade_agreement: await db.createTreaty({
            id: "treaty-kamalatman-internal-trade-agreement-alabastria",
            name: "Kamalatman Internal Trade Agreement",
            signedCycle: 700,
            terms: "Free trade agreement between Katman, Alatman, and Maltman to promote economic growth and resource sharing within Kamalatman.",
            continentsInvolved: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.alatman.id },
                    { id: continent.maltman.id }
                ]
            }
        }),
        southern_trade_pact: await db.createTreaty({
            id: "treaty-southern-trade-pact-alabastria",
            name: "Southern Trade Pact",
            signedCycle: 750,
            terms: "Trade agreement between Katman, and Skratonia to facilitate trade of agricultural goods and manufactured items in exchange for raw materials and swamp resources.",
            continentsInvolved: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.skratonia.id }
                ]
            }
        }),
        volcanic_forge_accord: await db.createTreaty({
            id: "treaty-volcanic-forge-accord-alabastria",
            name: "Volcanic Forge Accord",
            signedCycle: 680,
            terms: "Agreement between Alatman and Skratonia to supply advanced magical components in exchange for agricultural goods and trade access.",
            continentsInvolved: {
                connect: [
                    { id: continent.alatman.id },
                    { id: continent.skratonia.id }
                ]
            }
        }),
        northern_mining_accord: await db.createTreaty({
            id: "treaty-northern-mining-accord-alabastria",
            name: "Northern Mining Accord",
            signedCycle: 518,
            terms: "Mining rights agreement between Maltman and Bulsania for rare metals and gems in exchange for advanced mining equipment and techniques.",
            continentsInvolved: {
                connect: [
                    { id: continent.maltman.id },
                    { id: continent.bulsania.id }
                ]
            }
        }),
        raw_trade_pact: await db.createTreaty({
            id: "treaty-raw-trade-pact-alabastria",
            name: "Raw Trade Pact",
            signedCycle: 730,
            terms: "Trade agreement between Maltman, and Skratonia to facilitate trade for agricultural goods and manufactured items in exchange for raw materials and mining expertise.",
            continentsInvolved: {
                connect: [
                    { id: continent.maltman.id },
                    { id: continent.skratonia.id }
                ]
            }
        }),
        kantra_non_aggression_pact: await db.createTreaty({
            id: "treaty-kantra-non-aggression-pact-alabastria",
            name: "Kantra Non-Aggression Pact",
            signedCycle: 412,
            terms: "Mutual non-aggression agreement between all continents to avoid direct conflict over Kantra and focus on defense against its threats.",
            continentsInvolved: {
                connect: [
                    { id: continent.katman.id },
                    { id: continent.alatman.id },
                    { id: continent.maltman.id },
                    { id: continent.skratonia.id },
                    { id: continent.bulsania.id }
                ]
            }
        })
    };
    // Creature Sizes
    const creature_size: Record<string, Prisma.CreatureSizeGetPayload<{}>> = {
        tiny: await db.createCreatureSize({
            id: "creature-size-tiny",
            name: "Tiny",
            occupiedSpace: "2.5 ft. x 2.5 ft.",
            heightRange: "Under 2.5 ft.",
            weightRange: "Under 20 lbs.",
            description: "Tiny creatures are very small, often fitting in the palm of a hand. They occupy minimal space and can easily hide or maneuver in tight areas."
        }),
        small: await db.createCreatureSize({
            id: "creature-size-small",
            name: "Small",
            occupiedSpace: "5 ft. x 5 ft.",
            heightRange: "2.5 ft. to 4 ft.",
            weightRange: "20 lbs. to 40 lbs.",
            description: "Small creatures are larger than Tiny ones but still compact. They can navigate through spaces that larger creatures cannot and often have agility advantages."
        }),
        medium: await db.createCreatureSize({
            id: "creature-size-medium",
            name: "Medium",
            occupiedSpace: "5 ft. x 5 ft.",
            heightRange: "4 ft. to 8 ft.",
            weightRange: "40 lbs. to 400 lbs.",
            description: "Medium creatures are the standard size for most humanoids. They occupy a moderate amount of space and have balanced physical capabilities."
        }),
        large: await db.createCreatureSize({
            id: "creature-size-large",
            name: "Large",
            occupiedSpace: "10 ft. x 10 ft.",
            heightRange: "8 ft. to 16 ft.",
            weightRange: "400 lbs. to 2,000 lbs.",
            description: "Large creatures are imposing and occupy significant space. They often have greater strength and durability but may be less agile."
        }),
        huge: await db.createCreatureSize({
            id: "creature-size-huge",
            name: "Huge",
            occupiedSpace: "15 ft. x 15 ft.",
            heightRange: "16 ft. to 32 ft.",
            weightRange: "2,000 lbs. to 20,000 lbs.",
            description: "Huge creatures are massive beings that dominate their surroundings. They require large areas to move and can often cause environmental damage due to their size."
        }),
        gargantuan: await db.createCreatureSize({
            id: "creature-size-gargantuan",
            name: "Gargantuan",
            occupiedSpace: "20 ft. x 20 ft. or larger",
            heightRange: "Over 32 ft.",
            weightRange: "Over 20,000 lbs.",
            description: "Gargantuan creatures are colossal entities that tower over most others. They occupy vast spaces and their presence can significantly alter the landscape around them."
        })
    };
    // Creature Types
    const creature_type: Record<string, Prisma.CreatureTypeGetPayload<{}>> = {
        aberration: await db.createCreatureType({
            id: "creature-type-aberration",
            name: "Aberration",
            slug: "creature-type-aberration",
            description: "Creatures that defy natural law and understanding, often born from magical experimentation or planar corruption.",
            habits: "Aberrations are unpredictable and alien in their thinking. They often lurk in dark, isolated places and prefer to ambush their prey. Many are drawn to areas of magical instability or planar rifts.",
            tactics: "Aberrations typically use their bizarre anatomies and psionic abilities to confuse and terrify opponents. They often attack from unexpected angles and use mind-affecting abilities to turn allies against each other. Many can phase through solid matter or exist partially in other planes.",
            weaknesses: "Most aberrations are vulnerable to psychic damage and mind-affecting spells. They often have poor physical defenses despite their otherworldly abilities. Many are susceptible to radiant damage and can be banished or contained with proper magical wards.",
            commonSizes: {
                connect: [
                    { id: creature_size.medium.id },
                    { id: creature_size.large.id }
                ]
            }
        }),
        beast: await db.createCreatureType({
            id: "creature-type-beast",
            name: "Beast",
            slug: "creature-type-beast",
            description: "Wild creatures both natural and magical, ranging from ordinary animals to fantastical beasts that roam the wilderness.",
            habits: "Beasts follow natural instincts and territorial patterns. They establish hunting grounds, mark territory with scent or claw marks, and often hunt at specific times of day. Many are protective of their young and will fight more ferociously when cornered.",
            tactics: "Beasts rely on natural weapons like claws, teeth, and horns. They use pack tactics when in groups, with some members flanking while others attack head-on. Many use their superior senses to track and ambush prey, often attacking from cover or above.",
            weaknesses: "Most beasts are vulnerable to fire and loud noises. They can be distracted by food or territorial displays. Many are susceptible to charm effects and can be calmed by druids or rangers with proper animal handling skills.",
            commonSizes: {
                connect: [
                    { id: creature_size.tiny.id },
                    { id: creature_size.small.id },
                    { id: creature_size.medium.id },
                    { id: creature_size.large.id },
                    { id: creature_size.huge.id }
                ]
            }
        }),
        celestial: await db.createCreatureType({
            id: "creature-type-celestial",
            name: "Celestial",
            slug: "creature-type-celestial",
            description: "Beings of pure light and divine energy, often sent to protect the innocent or carry out divine will.",
            habits: "Celestials are drawn to areas of great virtue, holy sites, and places where evil threatens the innocent. They often appear during times of great need and prefer to work through mortal champions rather than directly intervening.",
            tactics: "Celestials fight with divine magic and radiant energy. They use their healing abilities to support allies and their smiting powers to destroy evil. Many can fly and use their mobility to outmaneuver ground-based opponents.",
            weaknesses: "Celestials are vulnerable to necrotic damage and can be banished by powerful evil magic. They are bound by divine law and cannot act against their nature. Some can be corrupted or turned to evil through prolonged exposure to negative energy.",
            commonSizes: {
                connect: [
                    { id: creature_size.medium.id },
                    { id: creature_size.large.id }
                ]
            }
        }),
        construct: await db.createCreatureType({
            id: "creature-type-construct",
            name: "Construct",
            slug: "creature-type-construct",
            description: "Artificial beings created through magic or technology, ranging from simple golems to complex mechanical creatures.",
            habits: "Constructs are typically found guarding specific locations or performing assigned tasks. They follow their programming rigidly and rarely deviate from their intended purpose. Many are powered by magical cores that require periodic maintenance.",
            tactics: "Constructs fight with relentless determination, using their superior strength and durability to overwhelm opponents. They often use simple but effective combat patterns and can continue fighting even when severely damaged. Many have built-in weapons or magical abilities.",
            weaknesses: "Constructs are immune to poison and psychic effects but vulnerable to rust and acid damage. They can be disabled by targeting their control mechanisms or power sources. Many are susceptible to dispel magic and can be reprogrammed by skilled artificers.",
            commonSizes: {
                connect: [
                    { id: creature_size.medium.id },
                    { id: creature_size.medium.id },
                    { id: creature_size.large.id },
                ]
            }
        }),
        dragon: await db.createCreatureType({
            id: "creature-type-dragon",
            name: "Dragon",
            slug: "creature-type-dragon",
            description: "Ancient, powerful reptilian creatures of immense intelligence and magical ability, often hoarding treasure and knowledge.",
            habits: "Dragons are territorial and establish lairs in remote, defensible locations. They hoard treasure and magical items, often using them to enhance their power. Many dragons are highly intelligent and can be negotiated with, though they are proud and easily offended.",
            tactics: "Dragons use their breath weapons to devastating effect, often opening combat with a breath attack. They combine aerial mobility with powerful melee attacks, using their size and strength to dominate the battlefield. Many can cast spells and use their hoard's magic items.",
            weaknesses: "Each dragon type has specific elemental vulnerabilities. Most dragons have soft underbelly scales that are easier to penetrate. They are vulnerable to attacks that target their wings or eyes. Many can be affected by spells that target their pride or greed.",
            commonSizes: {
                connect: [
                    { id: creature_size.large.id },
                    { id: creature_size.huge.id },
                ]
            }
        }),
        elemental: await db.createCreatureType({
            id: "creature-type-elemental",
            name: "Elemental",
            slug: "creature-type-elemental",
            description: "Beings of pure elemental energy - fire, water, earth, and air - often summoned or bound to specific locations.",
            habits: "Elementals are drawn to areas that match their elemental nature. Fire elementals seek heat and flame, water elementals are found near bodies of water, earth elementals prefer rocky terrain, and air elementals favor high places and open skies.",
            tactics: "Elementals use their elemental powers to devastating effect, often creating environmental hazards. They can merge with their element to become harder to hit and can create elemental effects that persist after they're gone. Many can summon smaller elementals to aid them.",
            weaknesses: "Each elemental type is vulnerable to its opposing element. Fire elementals are weak to water, water to fire, earth to air, and air to earth. They can be banished or dispelled with the right magic. Many are bound to specific locations and cannot travel far from their source.",
            commonSizes: {
                connect: [
                    { id: creature_size.medium.id },
                    { id: creature_size.large.id },
                ]
            }
        }),
        fey: await db.createCreatureType({
            id: "creature-type-fey",
            name: "Fey",
            slug: "creature-type-fey",
            description: "Magical creatures of the natural world, often capricious and dangerous, dwelling in enchanted forests and glades.",
            habits: "Fey creatures are drawn to areas of natural beauty and magical energy. They often establish courts in enchanted groves and are most active during twilight hours. Many are bound by ancient pacts and cannot break their word once given.",
            tactics: "Fey use charm and illusion magic to confuse and mislead opponents. They often fight in groups, using their superior mobility and magical abilities to outmaneuver enemies. Many can phase between the material plane and the Feywild.",
            weaknesses: "Fey creatures are vulnerable to cold iron weapons and can be bound by proper magical wards. They are susceptible to spells that target their nature and can be banished back to the Feywild. Many are bound by their word and cannot break promises.",
            commonSizes: {
                connect: [
                    { id: creature_size.tiny.id },
                    { id: creature_size.small.id },
                ]
            }
        }),
        fiend: await db.createCreatureType({
            id: "creature-type-fiend",
            name: "Fiend",
            slug: "creature-type-fiend",
            description: "Creatures from the lower planes, often demonic or devilish in nature, seeking to corrupt and destroy.",
            habits: "Fiends are drawn to areas of corruption, suffering, and evil. They often establish cults and corrupt mortals to do their bidding. Many are bound by contracts and cannot break their word, though they will exploit every loophole.",
            tactics: "Fiends use fear, corruption, and overwhelming force to defeat opponents. They often fight in groups, with weaker fiends supporting stronger ones. Many can summon other fiends and use their infernal powers to create lasting effects.",
            weaknesses: "Fiends are vulnerable to radiant damage and can be banished with holy magic. They are bound by their nature and cannot act against their alignment. Many can be bound by proper magical wards and are vulnerable to weapons blessed by good deities.",
            commonSizes: {
                connect: [
                    { id: creature_size.medium.id },
                    { id: creature_size.large.id },
                ]
            }
        }),
        giant: await db.createCreatureType({
            id: "creature-type-giant",
            name: "Giant",
            slug: "creature-type-giant",
            description: "Massive humanoid creatures of great strength and often primitive intelligence, dwelling in remote mountainous regions.",
            habits: "Giants are territorial and establish strongholds in remote areas. They often form tribes and follow a strict hierarchy. Many are drawn to areas rich in resources and will defend their territory fiercely.",
            tactics: "Giants use their massive size and strength to overwhelm opponents. They often fight with large weapons and can throw boulders or other heavy objects. Many use their reach advantage to keep enemies at bay while dealing devastating damage.",
            weaknesses: "Giants are often slow and less agile than smaller opponents. They can be outmaneuvered and are vulnerable to attacks that target their joints or eyes. Many are susceptible to charm effects and can be turned against each other.",
            commonSizes: {
                connect: [
                    { id: creature_size.huge.id }
                ]
            }
        }),
        humanoid: await db.createCreatureType({
            id: "creature-type-humanoid",
            name: "Humanoid",
            slug: "creature-type-humanoid",
            description: "Intelligent humanoid creatures that pose threats through organization, cunning, and numbers - including bandits, cults, rebels, and hostile tribes.",
            habits: "Humanoid enemies often operate in organized groups with clear hierarchies. They establish bases of operations, gather intelligence, and plan coordinated attacks. Many are motivated by greed, power, or ideological beliefs.",
            tactics: "Humanoids use strategy, teamwork, and superior numbers to overcome opponents. They often employ hit-and-run tactics, ambushes, and psychological warfare. Many use magic items, poisons, and other tools to gain advantages.",
            weaknesses: "Humanoids are vulnerable to the same tactics they use against others. They can be turned against each other through bribery, intimidation, or magical influence. Many are susceptible to charm effects and can be captured for information.",
            commonSizes: {
                connect: [
                    { id: creature_size.medium.id }
                ]
            }
        }),
        monstrosity: await db.createCreatureType({
            id: "creature-type-monstrosity",
            name: "Monstrosity",
            slug: "creature-type-monstrosity",
            description: "Creatures that defy natural classification, often the result of magical experimentation or planar corruption.",
            habits: "Monstrosities are often solitary creatures that lurk in remote or dangerous areas. They are drawn to places of magical instability and often exhibit behaviors that combine traits from multiple creature types.",
            tactics: "Monstrosities use their unique abilities and bizarre anatomies to surprise and overwhelm opponents. They often have multiple attack methods and can adapt their tactics based on their opponent's weaknesses. Many are highly aggressive and fight to the death.",
            weaknesses: "Monstrosities often have specific vulnerabilities based on their component creatures. Many are vulnerable to radiant damage and can be affected by spells that target their unnatural nature. They often have poor intelligence and can be outsmarted.",
            commonSizes: {
                connect: [
                    { id: creature_size.medium.id },
                    { id: creature_size.large.id }
                ]
            }
        }),
        ooze: await db.createCreatureType({
            id: "creature-type-ooze",
            name: "Ooze",
            slug: "creature-type-ooze",
            description: "Amorphous, slithering creatures that move through the environment, often acidic or toxic in nature.",
            habits: "Oozes are drawn to dark, damp environments and often lurk in dungeons, caves, and underground areas. They are attracted to organic matter and will consume almost anything they can engulf. Many are slow-moving but persistent hunters.",
            tactics: "Oozes use their amorphous nature to squeeze through small spaces and surprise opponents. They often attack by engulfing their prey and dissolving them with acid. Many can split into smaller oozes when damaged, making them harder to eliminate completely.",
            weaknesses: "Oozes are vulnerable to fire and cold damage, which can slow or stop their movement. They are immune to most mental effects and cannot be charmed or frightened. Many can be destroyed by splitting them into pieces too small to survive.",
            commonSizes: {
                connect: [
                    { id: creature_size.small.id },
                    { id: creature_size.medium.id },
                    { id: creature_size.large.id }
                ]
            }
        }),
        plant: await db.createCreatureType({
            id: "creature-type-plant",
            name: "Plant",
            slug: "creature-type-plant",
            description: "Vegetation that has gained consciousness and mobility, often carnivorous or magical in nature.",
            habits: "Plant creatures are rooted to specific locations and are most active during daylight hours. They often establish groves or forests where they can control the environment. Many are territorial and will defend their domain fiercely.",
            tactics: "Plant creatures use their natural weapons like thorns, vines, and roots to attack opponents. They often use their environment to their advantage, creating difficult terrain and using their reach to keep enemies at bay. Many can regenerate and are difficult to kill permanently.",
            weaknesses: "Plant creatures are vulnerable to fire damage and can be affected by spells that target plants. They are often immobile and can be outmaneuvered. Many are susceptible to spells that affect their growth or can be controlled by druids.",
            commonSizes: {
                connect: [
                    { id: creature_size.medium.id },
                    { id: creature_size.large.id }
                ]
            }
        }),
        undead: await db.createCreatureType({
            id: "creature-type-undead",
            name: "Undead",
            slug: "creature-type-undead",
            description: "Creatures that have returned from death, often through necromancy or dark magic, seeking to spread their curse.",
            habits: "Undead creatures are drawn to areas of death, decay, and negative energy. They often lurk in graveyards, crypts, and battlefields. Many are bound to specific locations or objects and cannot travel far from their source.",
            tactics: "Undead use fear, paralysis, and life-draining abilities to weaken opponents. They often fight in groups and can raise fallen enemies as undead allies. Many are immune to most mental effects and cannot be charmed or frightened.",
            weaknesses: "Undead creatures are vulnerable to radiant damage and can be turned or destroyed by holy magic. They are often weak to fire and can be affected by spells that target undead. Many can be destroyed by finding and destroying their phylactery or source.",
            commonSizes: {
                connect: [
                    { id: creature_size.medium.id },
                ]
            }
        })
    };
    // Connect creature types to continents
    try {
        // Kuriguer
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-aberration-kuriguer-alabastria",
            continentId: continent.kuriguer.id,
            creatureTypeId: creature_type.aberration.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "Scholars whisper of ancient secrets buried in the magical academies, where research into 'lost knowledge' has uncovered things that defy natural law. Travelers who venture too deep into the research districts report seeing creatures that move in impossible ways and speak in tongues that hurt the mind."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-fey-kuriguer-alabastria",
            continentId: continent.kuriguer.id,
            creatureTypeId: creature_type.fey.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The deeper forests pulse with fey magic, where Sylvan voices whisper from unseen glades. The Living Barrier itself seems to dance with otherworldly energy, and many claim to have seen ethereal figures flitting between the ancient trees."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-plant-kuriguer-alabastria",
            continentId: continent.kuriguer.id,
            creatureTypeId: creature_type.plant.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The forests here are alive in ways that unsettle even experienced druids. Trees seem to watch travelers pass, and the very ground beneath your feet sometimes shifts as if the roots themselves are moving. The archmage's ability to speak with all living things suggests the plants here possess a consciousness beyond the ordinary."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-elemental-kuriguer-alabastria",
            continentId: continent.kuriguer.id,
            creatureTypeId: creature_type.elemental.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The air itself crackles with primordial energy, and travelers often witness storms that seem to have minds of their own. The magical nature of this land has drawn elemental forces from across the planes."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-kuriguer-alabastria",
            continentId: continent.kuriguer.id,
            creatureTypeId: creature_type.dragon.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "Though the Wyvern Wars ended centuries ago, the scars remain in the landscape and the memories of the people. Ancient draconic runes can still be found carved into stones, and some claim to hear the echoes of great wings in the mountain winds."
        });
        // Katman
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-katman-alabastria",
            continentId: continent.katman.id,
            creatureTypeId: creature_type.dragon.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The legend of Malagaroth the Swamp Dragon still haunts these lands. Travelers crossing the vast swamps often hear deep, rumbling calls that echo through the mist, and the very ground sometimes trembles as if the great beast's spirit still stirs beneath the murky waters."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-ooze-katman-alabastria",
            continentId: continent.katman.id,
            creatureTypeId: creature_type.ooze.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The swamps here are alive with slithering, amorphous creatures that seem to rise from the very muck itself. Travelers must watch their step carefully, as what appears to be a simple puddle might suddenly reach out with pseudopods to drag the unwary into the depths."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-plant-katman-alabastria",
            continentId: continent.katman.id,
            creatureTypeId: creature_type.plant.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The swamplands teem with vegetation that moves with purpose. Swamp lilies bloom in impossible colors, and vines seem to reach toward travelers as they pass. The very air is thick with the scent of growing things that have learned to hunt."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-monstrosity-katman-alabastria",
            continentId: continent.katman.id,
            creatureTypeId: creature_type.monstrosity.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The frontier swamps breed creatures that defy natural classification. Travelers report seeing beasts that seem to be part reptile, part plant, part something else entirely - as if the very nature of the swamps has twisted the creatures that call it home."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-undead-katman-alabastria",
            continentId: continent.katman.id,
            creatureTypeId: creature_type.undead.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The swamps hold their dead close, and many who perish in these treacherous waters find themselves unable to rest. Misty figures can be seen moving through the reeds at night, and the sound of dragging footsteps often follows travelers along the narrow paths."
        });
        // Alatman
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-elemental-alatman-alabastria",
            continentId: continent.alatman.id,
            creatureTypeId: creature_type.elemental.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The volcano rumbles constantly, and travelers report seeing creatures of pure flame dancing in the lava flows. The very air shimmers with heat, and those who venture too close to the volcanic vents often witness earth and fire elementals emerging from the molten rock as if summoned by the land itself."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-construct-alatman-alabastria",
            continentId: continent.alatman.id,
            creatureTypeId: creature_type.construct.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The forges here never sleep, and the clang of metal on metal echoes day and night. Travelers are often startled to see mechanical beings that move with purpose through the workshops - some clearly artificial, others so lifelike that only their glowing eyes give them away as constructs rather than living beings."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-fiend-alatman-alabastria",
            continentId: continent.alatman.id,
            creatureTypeId: creature_type.fiend.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The darker forests whisper with infernal voices, and travelers who stray from the main paths often report seeing creatures with too many eyes and too many teeth. The very shadows seem to move with malicious intent, and many claim to hear whispers in languages that chill the blood."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-alatman-alabastria",
            continentId: continent.alatman.id,
            creatureTypeId: creature_type.dragon.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The volcanic peaks are said to be home to dragons of fire and stone, and travelers often see great winged shapes silhouetted against the ash-filled sky. The ancient draconic tongue is still spoken here, passed down through generations who learned it from the great wyrms themselves."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-aberration-alatman-alabastria",
            continentId: continent.alatman.id,
            creatureTypeId: creature_type.aberration.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "Deep in the volcanic caves and ancient ruins, travelers report encountering creatures that move in ways that hurt the mind to watch. Their speech sounds like the grinding of stones and the crackling of flames, and their very presence seems to warp the reality around them."
        });
        // Maltman
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-giant-maltman-alabastria",
            continentId: continent.maltman.id,
            creatureTypeId: creature_type.giant.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The mountains here are home to creatures of immense size, and travelers often hear the thunderous footsteps of giants echoing through the peaks. The Noxious Mountain itself seems to breathe, and those who venture too high report seeing massive figures moving among the clouds, their forms barely visible through the mist."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-construct-maltman-alabastria",
            continentId: continent.maltman.id,
            creatureTypeId: creature_type.construct.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The mines are filled with mechanical wonders that never tire. Travelers marvel at the clockwork guardians that patrol the deeper tunnels, their brass bodies gleaming in the torchlight. The dwarves have created beings of metal and stone that work alongside the miners, their movements precise and tireless."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-maltman-alabastria",
            continentId: continent.maltman.id,
            creatureTypeId: creature_type.dragon.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "Ancient draconic runes cover the walls of the deepest mines, carved by claws that could only belong to dragons. Travelers sometimes hear the deep, rumbling calls of great wyrms echoing through the mountain passages, and the miners speak of encounters with creatures that seem to be part dragon, part mountain itself."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-elemental-maltman-alabastria",
            continentId: continent.maltman.id,
            creatureTypeId: creature_type.elemental.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The deep mining operations have awakened the very earth, and travelers report seeing creatures of stone and metal that seem to emerge from the walls themselves. The mountain's heart beats with elemental energy, and those who listen closely can hear the ancient songs of the earth."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-aberration-maltman-alabastria",
            continentId: continent.maltman.id,
            creatureTypeId: creature_type.aberration.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The deepest mines have uncovered things that should have remained buried. Travelers who venture into the oldest tunnels report encountering creatures that seem to be made of living stone, their forms shifting and changing in ways that defy understanding."
        });
        // Skratonia
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-humanoid-skratonia-alabastria",
            continentId: continent.skratonia.id,
            creatureTypeId: creature_type.humanoid.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "As the crossroads of civilization, this land attracts both legitimate traders and dangerous outlaws. Bandit groups prey on caravans, while cults seek to exploit the diverse population for their dark purposes. The wealth and diversity make it a prime target for criminal organizations and hostile humanoid threats."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-beast-skratonia-alabastria",
            continentId: continent.skratonia.id,
            creatureTypeId: creature_type.beast.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The vast plains are alive with creatures both wild and domesticated. Travelers often see herds of strange beasts grazing in the distance, their forms silhouetted against the golden wheat fields. The pastoral communities have learned to live alongside creatures that would be considered dangerous elsewhere."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-celestial-skratonia-alabastria",
            continentId: continent.skratonia.id,
            creatureTypeId: creature_type.celestial.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The prosperity and diversity of this land has drawn the attention of celestial beings, and travelers often report seeing figures of pure light moving through the cities at dawn. The aasimar populations seem to glow with an inner radiance, and many claim to have been blessed by divine intervention during their travels here."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-fiend-skratonia-alabastria",
            continentId: continent.skratonia.id,
            creatureTypeId: creature_type.fiend.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "Even in this land of plenty, the infernal influence can be felt. Travelers sometimes notice the tiefling populations moving through the shadows with an otherworldly grace, and the very air occasionally carries whispers in languages that chill the soul."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-fey-skratonia-alabastria",
            continentId: continent.skratonia.id,
            creatureTypeId: creature_type.fey.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The rural areas hold pockets of wild magic where the fey still dance. Travelers who venture off the main roads often find themselves in glades where the very nature of reality seems to shift, and the creatures they encounter there are neither wholly natural nor wholly magical."
        });
        // Bulsania
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-giant-bulsania-alabastria",
            continentId: continent.bulsania.id,
            creatureTypeId: creature_type.giant.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The frozen peaks are home to creatures of immense size, their forms barely visible through the eternal blizzards. Travelers often hear the thunderous footsteps of giants echoing across the ice fields, and the very mountains themselves seem to move with the slow, deliberate pace of ancient titans."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-bulsania-alabastria",
            continentId: continent.bulsania.id,
            creatureTypeId: creature_type.dragon.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The ice dragons of Bulsania are legendary, their breath turning the very air to ice crystals. Travelers report seeing great winged shapes soaring through the aurora-lit skies, their scales glinting like frozen gems. The Dragonborn settlements here speak of ancient pacts with these magnificent creatures."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-undead-bulsania-alabastria",
            continentId: continent.bulsania.id,
            creatureTypeId: creature_type.undead.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The harsh conditions and violent deaths in the frozen wastes mean that not all spirits find peace. Restless souls occasionally manifest, bound to the material realm by unfinished business, powerful emotions, or connections to items they held dear in life. Some appear in the periphery of vision, while others gain enough strength to manipulate the physical world, watching over loved ones or seeking to complete their final missions."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-elemental-bulsania-alabastria",
            continentId: continent.bulsania.id,
            creatureTypeId: creature_type.elemental.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The frozen landscape pulses with elemental energy, and travelers often witness storms that seem to have minds of their own. Ice elementals dance in the blizzards, and the very ground sometimes shifts as if the earth itself is alive beneath the permafrost. The far northern spires are haunted by a particularly terrifying phenomenon - sentient blizzards that hunt living creatures, composed of tortured souls trapped within swirling ice and snow, their screams echoing through the winds as they tear apart any who venture too close."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-monstrosity-bulsania-alabastria",
            continentId: continent.bulsania.id,
            creatureTypeId: creature_type.monstrosity.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The extreme cold has twisted the creatures that call this land home, creating beings that are neither wholly natural nor wholly magical. Travelers report encountering beasts with too many eyes and too many limbs, their forms adapted to survive in conditions that would kill ordinary creatures. Rimebeasts prowl the wastes - small but vicious predators that hunt in packs and are a common target for mercenary hunting parties, though they should never be underestimated."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-celestial-bulsania-alabastria",
            continentId: continent.bulsania.id,
            creatureTypeId: creature_type.celestial.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The divine transformation of the ruler has left its mark on the land, and travelers sometimes witness celestial beings moving through the frozen wastes. The very air occasionally shimmers with divine light, and those who are pure of heart often find themselves guided by unseen hands through the treacherous terrain."
        });
    } catch (error) {
        console.error("Error connecting creature types to continents:", error);
        process.exit(1);
    }
    // Legendary Creatures
    try {
        // Past
        await db.createLegendaryCreature({
            id: "legendary-creature-malagaroth-swamp-dragon",
            name: "Malagaroth the Swamp Dragon",
            description: "A massive black dragon that terrorized the swamplands for centuries, breathing clouds of toxic gas that turned the very air into poison. Its lair was a vast network of flooded caves beneath the swamps, where it hoarded the treasures of countless victims.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            isPast: true,
            defeatedBy: "Gorak Swampstrider",
            defeatedByTitle: "Supreme Ruler of Kamalatman",
            defeatStory: "During the Swamp Wars, when Gorak was in his 40s (793AB), he single-handedly defeated the dreaded Swamp Dragon Malagaroth, whose death throes created the vast swamplands that now bear his name. This victory earned him the respect of all three Kamalatman kingdoms, and he was chosen to marry Princess Elara of Katman, uniting the royal bloodlines.",
            legacy: "The dragon's death created the vast swamplands that now define the region, and its bones are said to still lie beneath the murky waters, occasionally causing the ground to tremble.",
            creatureSizeId: creature_size.huge.id,
            creatureTypeId: creature_type.dragon.id,
            continentId: continent.katman.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-wyvern-queen-sylvara",
            name: "Wyvern Queen Sylvara",
            description: "A massive white wyvern with ice-blue scales that could freeze the very air with her breath. She led a vast migration of wyverns that threatened to overrun the northern continents, her intelligence and magical abilities making her nearly invincible.",
            threatLevel: LegendaryCreatureThreatLevel.GLOBAL,
            isPast: true,
            defeatedBy: "Thane Icewind",
            defeatedByTitle: "Legendary Frost Giant Slayer",
            defeatStory: "During the Great Wyvern Migration including the year 730AB, when the Wyvern Queen led her vast army north, Thane Icewind was a legendary warrior from the northern tribes. In the final battle against the Wyvern Queen, Thane was struck by her devastating frost breath, which should have killed him instantly. However, through sheer willpower and divine intervention from Tempus, he survived but was permanently transformed - his skin turned to the pale blue-gray of ice, his eyes became piercing ice-blue, and his very essence became bound to the frozen elements. This transformation made him the perfect leader for the harsh frozen lands, and he established the first Icebound Confederacy.",
            legacy: "The Wyvern Wars ended with her defeat, establishing the current alliance system between continents and making Thane a legendary figure across all of Alabastria.",
            creatureSizeId: creature_size.gargantuan.id,
            creatureTypeId: creature_type.dragon.id,
            continentId: continent.bulsania.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-crimson-cult-leader-azrakul",
            name: "Azrakul the Crimson Cult Leader",
            description: "A charismatic tiefling warlock who led a massive cult that sought to open portals to the lower planes. His followers numbered in the thousands, and he had mastered dark magic that allowed him to command legions of fiends.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            isPast: true,
            defeatedBy: "Sir Aldric the Redeemer",
            defeatedByTitle: "Paladin of the Golden Order",
            defeatStory: "During the Great Wyvern Migration including the year 506AB, Sir Aldric the Redeemer was a legendary paladin who used his diplomatic skills and divine magic to infiltrate the cult, learning their plans and turning many of their members against their leader. Through careful negotiation and the promise of redemption, he convinced the cult's inner circle to betray their master, leading to the cult leader's capture and the cult's dissolution. This victory helped secure the alliance that would later allow the Treaty of Golden Fields to be brokered, and his methods of redemption through diplomacy became legendary, inspiring future leaders like Marcus Goldfield.",
            legacy: "The cult's stronghold was destroyed, and many former cultists were rehabilitated and reintegrated into society, proving that even the most lost souls can find redemption.",
            creatureSizeId: creature_size.medium.id,
            creatureTypeId: creature_type.humanoid.id,
            continentId: continent.bulsania.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-iron-golem-king",
            name: "The Iron Golem King",
            description: "A massive construct created by ancient dwarven artificers, standing over 20 feet tall and made entirely of enchanted iron. It had gained sentience and declared itself king of the volcanic region, enslaving the local population to mine materials for its ever-growing army of constructs.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            isPast: true,
            defeatedBy: "Svenrue Steelmore",
            defeatedByTitle: "Master of the Volcanic Forges",
            defeatStory: "Around 214AB, Svenrue Steelmore discovered the ancient control runes that had been used to create the Iron Golem King. Through careful study and magical expertise, she was able to reprogram the construct, turning it from a tyrant into a guardian that now protects the volcanic region from external threats.",
            legacy: "The Iron Golem King now serves as a guardian of the volcanic region, and its knowledge of ancient construct-making techniques has been preserved and taught to new generations of artificers.",
            creatureSizeId: creature_size.huge.id,
            creatureTypeId: creature_type.construct.id,
            continentId: continent.alatman.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-shadow-stalker",
            name: "The Shadow Stalker",
            description: "A creature that existed partially in the shadow plane, able to phase through solid matter and drain the life force from its victims. It had been created by a failed magical experiment and had been terrorizing the magical academies for decades.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            isPast: true,
            defeatedBy: "Elara Moonwhisper",
            defeatedByTitle: "High Archmage of the Conclave",
            defeatStory: "Elara spent years researching the creature's nature and finally in 659AB discovered that it was bound to a specific shadow anchor. Through a complex ritual involving light magic and planar binding, she was able to banish the creature back to the shadow plane and seal the anchor, preventing its return.",
            legacy: "The magical academies now have better protections against planar creatures, and Elara's research into shadow magic has advanced the field significantly.",
            creatureSizeId: creature_size.medium.id,
            creatureTypeId: creature_type.aberration.id,
            continentId: continent.kuriguer.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-ancient-wyvern",
            name: "The Ancient Wyvern",
            description: "A massive, ancient wyvern that had terrorized the central plains for decades, preying on caravans and settlements. This wyvern was larger and more intelligent than its kin, with scales as hard as steel and breath that could melt stone. It had learned to avoid large military forces and instead targeted isolated communities, making it nearly impossible to track and defeat.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            isPast: true,
            defeatedBy: "Tharos Raggenthraw",
            defeatedByTitle: "Guild Founder and Master of the Huntbound Order",
            defeatStory: "In 755AB, before founding the Huntbound Order, Tharos was a veteran of the Skratonian Alliance's military forces. After witnessing villages abandoned to monsters while soldiers fought foreign wars, he took matters into his own hands. He tracked the Ancient Wyvern for months, learning its patterns and weaknesses. In a legendary duel that lasted three days, Tharos used his divine connection to Tempus and his mastery of battle tactics to finally defeat the beast. This victory inspired him to found the Huntbound Order, dedicated to protecting the innocent from monsters that the regular military couldn't handle.",
            legacy: "The defeat of the Ancient Wyvern proved that dedicated monster hunters could succeed where armies failed. This victory directly led to the founding of the Huntbound Order, which has since become the premier organization for monster hunting across all of Alabastria.",
            creatureSizeId: creature_size.gargantuan.id,
            creatureTypeId: creature_type.dragon.id,
            continentId: continent.skratonia.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-plague-lord",
            name: "The Plague Lord",
            description: "A powerful lich who had mastered death magic and was spreading a magical plague across the continent in 312AB. The plague turned its victims into mindless undead, and the lich was using their souls to fuel his dark rituals.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            isPast: true,
            defeatedBy: "The Radiant Paladin",
            defeatedByTitle: "Champion of the Light",
            defeatStory: "The Radiant Paladin, whose true name has been lost to history, led a crusade against the Plague Lord, gathering paladins and clerics from across the continent. Through divine magic and sheer determination, they were able to destroy the lich's phylactery and banish his spirit to the lower planes, ending the plague.",
            legacy: "The Radiant Paladin's sacrifice saved countless lives, and their name is still spoken with reverence by those who follow the light. The continent of Katman, while still cursed, is no longer plagued by the undead curse.",
            creatureSizeId: creature_size.medium.id,
            creatureTypeId: creature_type.undead.id,
            continentId: continent.katman.id
        });
        // Present
        await db.createLegendaryCreature({
            id: "legendary-creature-shadowmaw-pack",
            name: "The Shadowmaw Pack",
            description: "A pack of massive, intelligent wolves that have been corrupted by shadow magic. They hunt in the deeper forests, their howls causing fear and madness in those who hear them. Their leader, Shadowmaw, is said to be as large as a horse and can phase through shadows.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            questPotential: "Hunt down the pack and either destroy them or find a way to break their curse and restore them to their natural state.",
            creatureSizeId: creature_size.large.id,
            creatureTypeId: creature_type.beast.id,
            continentId: continent.kuriguer.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-crimson-reaper",
            name: "The Crimson Reaper",
            description: "A powerful demon that has established a cult in the cursed lands, using its infernal powers to corrupt the local population. It appears as a massive figure wreathed in flames, wielding a scythe that can cut through both flesh and soul.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            questPotential: "Infiltrate the cult, gather information about the demon's weaknesses, and either banish it back to the lower planes or destroy it permanently.",
            creatureSizeId: creature_size.huge.id,
            creatureTypeId: creature_type.fiend.id,
            continentId: continent.alatman.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-iron-titan",
            name: "The Iron Titan",
            description: "A massive construct that has gone rogue, rampaging through the mining villages and destroying everything in its path. It was originally created to help with mining operations but has developed a malevolent consciousness and now seeks to destroy all organic life.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            questPotential: "Find a way to either shut down the construct or reprogram it to serve its original purpose. The construct's control systems are hidden deep within the mountain.",
            creatureSizeId: creature_size.large.id,
            creatureTypeId: creature_type.construct.id,
            continentId: continent.maltman.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-swamp-witch",
            name: "The Swamp Witch",
            description: "A powerful druid who has been corrupted by the dark magic of the swamps. She commands legions of plant creatures and oozes, using them to terrorize the local population and expand her domain. She lives in a massive tree that has been twisted into a fortress.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Either defeat the Swamp Witch and free the corrupted creatures under her control, or find a way to redeem her and restore the natural balance of the swamps.",
            creatureSizeId: creature_size.medium.id,
            creatureTypeId: creature_type.humanoid.id,
            continentId: continent.katman.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-frost-wraith",
            name: "The Frost Wraith",
            description: "The spirit of a powerful shaman who died in the frozen wastes, now bound to the ice and seeking revenge against the living. It can control the weather, creating blizzards that last for days, and its touch can freeze a person solid instantly.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            questPotential: "Discover the Frost Wraith's true name and the circumstances of its death, then perform the proper burial rites to lay its spirit to rest.",
            creatureSizeId: creature_size.medium.id,
            creatureTypeId: creature_type.undead.id,
            continentId: continent.bulsania.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-elemental-storm",
            name: "The Elemental Storm",
            description: "A massive storm of pure elemental energy that has been raging around the volcano for months. It contains fire, earth, and air elementals all mixed together, creating a chaotic maelstrom that threatens to spread across the entire region.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Find a way to either calm the elemental storm or channel its energy into something constructive, such as powering the forges or creating new magical items.",
            creatureSizeId: creature_size.gargantuan.id,
            creatureTypeId: creature_type.elemental.id,
            continentId: continent.alatman.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-bandit-king",
            name: "The Bandit King",
            description: "A charismatic leader who has united several bandit groups into a massive criminal organization. He controls the major trade routes and demands tribute from all caravans, using his network of spies and informants to stay one step ahead of the law.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            questPotential: "Infiltrate the bandit organization, gather evidence of their crimes, and either capture the Bandit King or convince him to turn over a new leaf and use his skills for legitimate purposes.",
            creatureSizeId: creature_size.medium.id,
            creatureTypeId: creature_type.humanoid.id,
            continentId: continent.skratonia.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-fey-lord",
            name: "The Fey Lord",
            description: "A powerful fey creature that has claimed a large portion of the forest as its domain, trapping travelers in an endless maze of enchanted trees. It feeds on the confusion and fear of its victims, growing stronger with each person it ensnares.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Navigate the enchanted maze, find the Fey Lord's true name, and either defeat it in combat or outwit it in a game of riddles and puzzles.",
            creatureSizeId: creature_size.large.id,
            creatureTypeId: creature_type.fey.id,
            continentId: continent.kuriguer.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-crystal-dragon",
            name: "The Crystal Dragon",
            description: "A young but powerful dragon made entirely of living crystal that has taken up residence in the deepest mines. It hoards precious gems and metals, and its breath weapon can turn living creatures into crystal statues.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            questPotential: "Either negotiate with the dragon to share the mines' resources, or find a way to defeat it without destroying the valuable crystal it has created.",
            creatureSizeId: creature_size.huge.id,
            creatureTypeId: creature_type.dragon.id,
            continentId: continent.maltman.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-cult-of-the-void",
            name: "The Cult of the Void",
            description: "A secretive cult that worships the concept of nothingness and seeks to unravel the very fabric of reality. They have been performing dark rituals that are causing reality to become unstable in certain areas, creating dangerous zones where the laws of physics no longer apply.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            questPotential: "Investigate the cult's activities, stop their reality-warping rituals, and either capture or eliminate the cult leaders before they can cause irreparable damage to the world.",
            creatureSizeId: creature_size.medium.id,
            creatureTypeId: creature_type.humanoid.id,
            continentId: continent.kuriguer.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-swarm-queen",
            name: "The Swarm Queen",
            description: "A massive, insect-like creature that has been breeding an army of smaller monsters in the deepest swamps. It can control its offspring telepathically and uses them to expand its territory, consuming everything in its path.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Find and destroy the Swarm Queen before it can breed enough offspring to overrun the entire swamp region. The queen is heavily protected by its swarm, so a direct assault may not be the best approach.",
            creatureSizeId: creature_size.huge.id,
            creatureTypeId: creature_type.monstrosity.id,
            continentId: continent.katman.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-time-wraith",
            name: "The Time Wraith",
            description: "A creature that exists partially outside of time, able to move through different moments in history. It has been causing temporal anomalies throughout the magical academies, making it difficult to perform spells that require precise timing.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            questPotential: "Track down the Time Wraith through different time periods, understand its nature, and either banish it to a timeless void or find a way to anchor it to a specific moment in time.",
            creatureSizeId: creature_size.medium.id,
            creatureTypeId: creature_type.aberration.id,
            continentId: continent.kuriguer.id
        });
        await db.createLegendaryCreature({
            id: "legendary-creature-mountain-giant-chieftain",
            name: "The Mountain Giant Chieftain",
            description: "A massive giant who has united several giant clans under his leadership. He seeks to reclaim the mountain regions from the smaller tribes and monsters that have encroached upon their ancestral lands.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Negotiate with the chieftain to find a peaceful resolution to the territorial disputes, or prepare for a large-scale battle against his united giant forces.",
            creatureSizeId: creature_size.gargantuan.id,
            creatureTypeId: creature_type.giant.id,
            continentId: continent.bulsania.id
        });
    } catch (error) {
        console.error("Error creating legendary creatures:", error);
        process.exit(1);
    }
    // Race Ability Scores
    const raceAbilityScore: Record<string, Prisma.RaceAbilityScoreGetPayload<{}>> = {
        dex_one: await db.createRaceAbilityScore({
            id: "race-ability-score-dex-one",
            ability: RaceAbilityScores.DEXTERITY,
            modifier: 1
        }),
        dex_two: await db.createRaceAbilityScore({
            id: "race-ability-score-dex-two",
            ability: RaceAbilityScores.DEXTERITY,
            modifier: 2
        }),
        cha_one: await db.createRaceAbilityScore({
            id: "race-ability-score-cha-one",
            ability: RaceAbilityScores.CHARISMA,
            modifier: 1
        }),
        cha_two: await db.createRaceAbilityScore({
            id: "race-ability-score-cha-two",
            ability: RaceAbilityScores.CHARISMA,
            modifier: 2
        }),
        wis_one: await db.createRaceAbilityScore({
            id: "race-ability-score-wis-one",
            ability: RaceAbilityScores.WISDOM,
            modifier: 1
        }),
        wis_two: await db.createRaceAbilityScore({
            id: "race-ability-score-wis-two",
            ability: RaceAbilityScores.WISDOM,
            modifier: 2
        }),
        int_one: await db.createRaceAbilityScore({
            id: "race-ability-score-int-one",
            ability: RaceAbilityScores.INTELLIGENCE,
            modifier: 1
        }),
        int_two: await db.createRaceAbilityScore({
            id: "race-ability-score-int-two",
            ability: RaceAbilityScores.INTELLIGENCE,
            modifier: 2
        }),
        con_one: await db.createRaceAbilityScore({
            id: "race-ability-score-con-one",
            ability: RaceAbilityScores.CONSTITUTION,
            modifier: 1
        }),
        con_two: await db.createRaceAbilityScore({
            id: "race-ability-score-con-two",
            ability: RaceAbilityScores.CONSTITUTION,
            modifier: 2
        }),
        str_one: await db.createRaceAbilityScore({
            id: "race-ability-score-str-one",
            ability: RaceAbilityScores.STRENGTH,
            modifier: 1
        }),
        str_two: await db.createRaceAbilityScore({
            id: "race-ability-score-str-two",
            ability: RaceAbilityScores.STRENGTH,
            modifier: 2
        }),
        any_one: await db.createRaceAbilityScore({
            id: "race-ability-score-any-one",
            ability: RaceAbilityScores.ANY_OTHER,
            modifier: 1
        }),
        any_two: await db.createRaceAbilityScore({
            id: "race-ability-score-any-two",
            ability: RaceAbilityScores.ANY_OTHER,
            modifier: 2
        })
    };
        // Race Traits
    const raceTrait = {
      flight_aarakocra: await db.createRaceTrait({
        id: "race-trait-flight-aarakocra",
        name: "Flight",
        description: "You have a flying speed of 50 feet. To use this speed, you can't be wearing medium or heavy armor.",
      }),
      talons_aarakocra: await db.createRaceTrait({
        id: "race-trait-talons-aarakocra",
        name: "Talons",
        description: "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.",
      }),
      darkvision_aasimar: await db.createRaceTrait({
        id: "race-trait-darkvision-aasimar",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      celestial_resistance_aasimar: await db.createRaceTrait({
        id: "race-trait-celestial-resistance-aasimar",
        name: "Celestial Resistance",
        description: "You have resistance to necrotic damage and radiant damage.",
      }),
      healing_hands_aasimar: await db.createRaceTrait({
        id: "race-trait-healing-hands-aasimar",
        name: "Healing Hands",
        description: "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.",
      }),
      radiant_soul_aasimar_protector_aasimar: await db.createRaceTrait({
        id: "race-trait-radiant-soul-aasimar_protector_aasimar",
        name: "Radiant Soul",
        description: "As an action, you can unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
      }),
      radiant_consumption_aasimar_scourge_aasimar: await db.createRaceTrait({
        id: "race-trait-radiant-consumption-aasimar_scourge_aasimar",
        name: "Radiant Consumption",
        description: "As an action, you can unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
      }),
      necrotic_shroud_aasimar_fallen_aasimar: await db.createRaceTrait({
        id: "race-trait-necrotic-shroud-aasimar_fallen_aasimar",
        name: "Necrotic Shroud",
        description: "As an action, you can unleash the divine energy within yourself, causing your eyes to turn black and two skeletal, ghostly, flightless wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
      }),
      constructed_resilience_autognome: await db.createRaceTrait({
        id: "race-trait-constructed-resilience-autognome",
        name: "Constructed Resilience",
        description: "You were created to have remarkable fortitude, represented by the following benefits: You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You don't need to eat, drink, or breathe. You are immune to disease. You don't need to sleep, and magic can't put you to sleep.",
      }),
      mechanical_nature_autognome: await db.createRaceTrait({
        id: "race-trait-mechanical-nature-autognome",
        name: "Mechanical Nature",
        description: "Your creature type is construct, rather than humanoid. Spells and other effects that target humanoids don't affect you.",
      }),
      sentrys_rest_autognome: await db.createRaceTrait({
        id: "race-trait-sentrys-rest-autognome",
        name: "Sentry's Rest",
        description: "When you take a long rest, you must spend at least 6 hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.",
      }),
      true_life_autognome: await db.createRaceTrait({
        id: "race-trait-true-life-autognome",
        name: "True Life",
        description: "You are a living creature. You can be affected by healing magic, and you can be targeted by spells that target humanoids. You can be raised from the dead.",
      }),
      darkvision_bugbear: await db.createRaceTrait({
        id: "race-trait-darkvision-bugbear",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      long_limbed_bugbear: await db.createRaceTrait({
        id: "race-trait-long-limbed-bugbear",
        name: "Long-Limbed",
        description: "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.",
      }),
      powerful_build_bugbear: await db.createRaceTrait({
        id: "race-trait-powerful-build-bugbear",
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      }),
      sneaky_bugbear: await db.createRaceTrait({
        id: "race-trait-sneaky-bugbear",
        name: "Sneaky",
        description: "You are proficient in the Stealth skill.",
      }),
      surprise_attack_bugbear: await db.createRaceTrait({
        id: "race-trait-surprise-attack-bugbear",
        name: "Surprise Attack",
        description: "If you surprise a creature and hit it with an attack on your first turn in combat, the target takes an extra 2d6 damage from the attack.",
      }),
      charge_centaur: await db.createRaceTrait({
        id: "race-trait-charge-centaur",
        name: "Charge",
        description: "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.",
      }),
      hooves_centaur: await db.createRaceTrait({
        id: "race-trait-hooves-centaur",
        name: "Hooves",
        description: "Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      }),
      equine_build_centaur: await db.createRaceTrait({
        id: "race-trait-equine-build-centaur",
        name: "Equine Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot.",
      }),
      survivor_centaur: await db.createRaceTrait({
        id: "race-trait-survivor-centaur",
        name: "Survivor",
        description: "You have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival.",
      }),
      shapechanger_changeling: await db.createRaceTrait({
        id: "race-trait-shapechanger-changeling",
        name: "Shapechanger",
        description: "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of a creature you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait. You stay in the new form until you use an action to revert to your true form or until you die.",
      }),
      changeling_instincts_changeling: await db.createRaceTrait({
        id: "race-trait-changeling-instincts-changeling",
        name: "Changeling Instincts",
        description: "You gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion.",
      }),
      divergent_persona_changeling: await db.createRaceTrait({
        id: "race-trait-divergent-persona-changeling",
        name: "Divergent Persona",
        description: "You gain proficiency with one tool of your choice. You also choose two personality traits, one ideal, one bond, and one flaw. While you are in the form of this persona, the chosen personality traits, ideal, bond, and flaw replace those of your background.",
      }),
      darkvision_dhampir: await db.createRaceTrait({
        id: "race-trait-darkvision-dhampir",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      spider_climb_dhampir: await db.createRaceTrait({
        id: "race-trait-spider-climb-dhampir",
        name: "Spider Climb",
        description: "You have a climbing speed equal to your walking speed. In addition, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.",
      }),
      vampiric_bite_dhampir: await db.createRaceTrait({
        id: "race-trait-vampiric-bite-dhampir",
        name: "Vampiric Bite",
        description: "Your fanged bite is a natural weapon, which counts as a simple melee weapon with which you are proficient. You add your Constitution modifier, instead of your Strength modifier, to the attack and damage rolls when you attack with this bite. It deals 1d4 piercing damage on a hit. While you are missing half or more of your hit points, you have advantage on attack rolls you make with this bite. When you attack with this bite and hit a creature that doesn't have all its hit points, you can empower yourself in one of the following ways: You regain hit points equal to the damage dealt by the bite. You gain a bonus to the next ability check or attack roll you make; the bonus equals the damage dealt by the bite (minimum of +1). Either choice requires no action. You can empower yourself with this bite a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
      }),
      deathless_nature_dhampir: await db.createRaceTrait({
        id: "race-trait-deathless-nature-dhampir",
        name: "Deathless Nature",
        description: "You don't need to breathe.",
      }),
      draconic_ancestry_dragonborn: await db.createRaceTrait({
        id: "race-trait-draconic-ancestry-dragonborn",
        name: "Draconic Ancestry",
        description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
      }),
      breath_weapon_dragonborn: await db.createRaceTrait({
        id: "race-trait-breath-weapon-dragonborn",
        name: "Breath Weapon",
        description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
      }),
      damage_resistance_dragonborn: await db.createRaceTrait({
        id: "race-trait-damage-resistance-dragonborn",
        name: "Damage Resistance",
        description: "You have resistance to the damage type associated with your draconic ancestry.",
      }),
      darkvision_dwarf: await db.createRaceTrait({
        id: "race-trait-darkvision-dwarf",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      dwarven_resilience_dwarf: await db.createRaceTrait({
        id: "race-trait-dwarven-resilience-dwarf",
        name: "Dwarven Resilience",
        description: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
      }),
      stonecunning_dwarf: await db.createRaceTrait({
        id: "race-trait-stonecunning-dwarf",
        name: "Stonecunning",
        description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
      }),
      dwarven_toughness_dwarf_hill_dwarf: await db.createRaceTrait({
        id: "race-trait-dwarven-toughness-dwarf_hill_dwarf",
        name: "Dwarven Toughness",
        description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
      }),
      dwarven_armor_training_dwarf_mountain_dwarf: await db.createRaceTrait({
        id: "race-trait-dwarven-armor-training-dwarf_mountain_dwarf",
        name: "Dwarven Armor Training",
        description: "You have proficiency with light and medium armor.",
      }),
      duergar_magic_dwarf_duergar: await db.createRaceTrait({
        id: "race-trait-duergar-magic-dwarf_duergar",
        name: "Duergar Magic",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the enlarge/reduce spell on yourself once with this trait, without requiring a material component. When you reach 5th level, you can cast the invisibility spell on yourself once with this trait, without requiring a material component. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells.",
      }),
      duergar_resilience_dwarf_duergar: await db.createRaceTrait({
        id: "race-trait-duergar-resilience-dwarf_duergar",
        name: "Duergar Resilience",
        description: "You have advantage on saving throws against illusions and against being charmed or paralyzed.",
      }),
      sunlight_sensitivity_dwarf_duergar: await db.createRaceTrait({
        id: "race-trait-sunlight-sensitivity-dwarf_duergar",
        name: "Sunlight Sensitivity",
        description: "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
      }),
      darkvision_elf: await db.createRaceTrait({
        id: "race-trait-darkvision-elf",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      keen_senses_elf: await db.createRaceTrait({
        id: "race-trait-keen-senses-elf",
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill.",
      }),
      fey_ancestry_elf: await db.createRaceTrait({
        id: "race-trait-fey-ancestry-elf",
        name: "Fey Ancestry",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
      }),
      trance_elf: await db.createRaceTrait({
        id: "race-trait-trance-elf",
        name: "Trance",
        description: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
      }),
      elf_weapon_training_elf_high_elf: await db.createRaceTrait({
        id: "race-trait-elf-weapon-training-elf_high_elf",
        name: "Elf Weapon Training",
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
      }),
      cantrip_elf_high_elf: await db.createRaceTrait({
        id: "race-trait-cantrip-elf_high_elf",
        name: "Cantrip",
        description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
      }),
      extra_language_elf_high_elf: await db.createRaceTrait({
        id: "race-trait-extra-language-elf_high_elf",
        name: "Extra Language",
        description: "You can speak, read, and write one extra language of your choice.",
      }),
      elf_weapon_training_elf_wood_elf: await db.createRaceTrait({
        id: "race-trait-elf-weapon-training-elf_wood_elf",
        name: "Elf Weapon Training",
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
      }),
      fleet_of_foot_elf_wood_elf: await db.createRaceTrait({
        id: "race-trait-fleet-of-foot-elf_wood_elf",
        name: "Fleet of Foot",
        description: "Your base walking speed increases to 35 feet.",
      }),
      mask_of_the_wild_elf_wood_elf: await db.createRaceTrait({
        id: "race-trait-mask-of-the-wild-elf_wood_elf",
        name: "Mask of the Wild",
        description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
      }),
      superior_darkvision_elf_dark_elf_drow: await db.createRaceTrait({
        id: "race-trait-superior-darkvision-elf_dark_elf_drow",
        name: "Superior Darkvision",
        description: "Your darkvision has a radius of 120 feet.",
      }),
      sunlight_sensitivity_elf_dark_elf_drow: await db.createRaceTrait({
        id: "race-trait-sunlight-sensitivity-elf_dark_elf_drow",
        name: "Sunlight Sensitivity",
        description: "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
      }),
      drow_magic_elf_dark_elf_drow: await db.createRaceTrait({
        id: "race-trait-drow-magic-elf_dark_elf_drow",
        name: "Drow Magic",
        description: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      drow_weapon_training_elf_dark_elf_drow: await db.createRaceTrait({
        id: "race-trait-drow-weapon-training-elf_dark_elf_drow",
        name: "Drow Weapon Training",
        description: "You have proficiency with rapiers, shortswords, and hand crossbows.",
      }),
      sea_elf_training_elf_sea_elf: await db.createRaceTrait({
        id: "race-trait-sea-elf-training-elf_sea_elf",
        name: "Sea Elf Training",
        description: "You have proficiency with the spear, trident, light crossbow, and net.",
      }),
      child_of_the_sea_elf_sea_elf: await db.createRaceTrait({
        id: "race-trait-child-of-the-sea-elf_sea_elf",
        name: "Child of the Sea",
        description: "You have a swimming speed of 30 feet, and you can breathe air and water.",
      }),
      friend_of_the_sea_elf_sea_elf: await db.createRaceTrait({
        id: "race-trait-friend-of-the-sea-elf_sea_elf",
        name: "Friend of the Sea",
        description: "Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.",
      }),
      fey_step_elf_eladrin: await db.createRaceTrait({
        id: "race-trait-fey-step-elf_eladrin",
        name: "Fey Step",
        description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season. The effect lasts until the end of your next turn.",
      }),
      trance_elf_eladrin: await db.createRaceTrait({
        id: "race-trait-trance-elf_eladrin",
        name: "Trance",
        description: "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious.",
      }),
      blessing_of_the_raven_queen_elf_shadar_kai: await db.createRaceTrait({
        id: "race-trait-blessing-of-the-raven-queen-elf_shadar_kai",
        name: "Blessing of the Raven Queen",
        description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest. Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.",
      }),
      necrotic_resistance_elf_shadar_kai: await db.createRaceTrait({
        id: "race-trait-necrotic-resistance-elf_shadar_kai",
        name: "Necrotic Resistance",
        description: "You have resistance to necrotic damage.",
      }),
      trance_elf_shadar_kai: await db.createRaceTrait({
        id: "race-trait-trance-elf_shadar_kai",
        name: "Trance",
        description: "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious.",
      }),
      fairy_magic_fairy: await db.createRaceTrait({
        id: "race-trait-fairy-magic-fairy",
        name: "Fairy Magic",
        description: "You know the druidcraft cantrip. Starting at 3rd level, you can cast the faerie fire spell with this trait. Starting at 5th level, you can also cast the enlarge/reduce spell with this trait. Once you cast faerie fire or enlarge/reduce with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. Charisma is your spellcasting ability for these spells.",
      }),
      flight_fairy: await db.createRaceTrait({
        id: "race-trait-flight-fairy",
        name: "Flight",
        description: "You have a flying speed equal to your walking speed. You can hover.",
      }),
      fey_passage_fairy: await db.createRaceTrait({
        id: "race-trait-fey-passage-fairy",
        name: "Fey Passage",
        description: "You can squeeze through a space as narrow as 1 inch wide without squeezing.",
      }),
      firbolg_magic_firbolg: await db.createRaceTrait({
        id: "race-trait-firbolg-magic-firbolg",
        name: "Firbolg Magic",
        description: "You can cast detect magic and disguise self with this trait, using Wisdom as your spellcasting ability. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a short or long rest. You can also cast these spells using any spell slots you have of the appropriate level.",
      }),
      hidden_step_firbolg: await db.createRaceTrait({
        id: "race-trait-hidden-step-firbolg",
        name: "Hidden Step",
        description: "As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't do so again until you finish a short or long rest.",
      }),
      powerful_build_firbolg: await db.createRaceTrait({
        id: "race-trait-powerful-build-firbolg",
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      }),
      speech_of_beast_and_leaf_firbolg: await db.createRaceTrait({
        id: "race-trait-speech-of-beast-and-leaf-firbolg",
        name: "Speech of Beast and Leaf",
        description: "You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.",
      }),
      elemental_resistance_genasi: await db.createRaceTrait({
        id: "race-trait-elemental-resistance-genasi",
        name: "Elemental Resistance",
        description: "You have resistance to one damage type based on your elemental heritage.",
      }),
      elemental_magic_genasi: await db.createRaceTrait({
        id: "race-trait-elemental-magic-genasi",
        name: "Elemental Magic",
        description: "You know one cantrip based on your elemental heritage. At 3rd level, you can cast a 1st-level spell based on your elemental heritage. At 5th level, you can cast a 2nd-level spell based on your elemental heritage. Once you cast a spell with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level. Constitution is your spellcasting ability for these spells.",
      }),
      air_resistance_genasi_air_genasi: await db.createRaceTrait({
        id: "race-trait-air-resistance-genasi_air_genasi",
        name: "Air Resistance",
        description: "You have resistance to lightning damage.",
      }),
      air_magic_genasi_air_genasi: await db.createRaceTrait({
        id: "race-trait-air-magic-genasi_air_genasi",
        name: "Air Magic",
        description: "You know the shocking grasp cantrip. At 3rd level, you can cast feather fall with this trait. At 5th level, you can cast levitate with this trait. Once you cast feather fall or levitate with this trait, you can't cast that spell with it again until you finish a long rest.",
      }),
      unending_breath_genasi_air_genasi: await db.createRaceTrait({
        id: "race-trait-unending-breath-genasi_air_genasi",
        name: "Unending Breath",
        description: "You can hold your breath indefinitely while you're not incapacitated.",
      }),
      mingle_with_the_wind_genasi_air_genasi: await db.createRaceTrait({
        id: "race-trait-mingle-with-the-wind-genasi_air_genasi",
        name: "Mingle with the Wind",
        description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest.",
      }),
      earth_resistance_genasi_earth_genasi: await db.createRaceTrait({
        id: "race-trait-earth-resistance-genasi_earth_genasi",
        name: "Earth Resistance",
        description: "You have resistance to acid damage.",
      }),
      earth_magic_genasi_earth_genasi: await db.createRaceTrait({
        id: "race-trait-earth-magic-genasi_earth_genasi",
        name: "Earth Magic",
        description: "You know the blade ward cantrip. At 3rd level, you can cast earth tremor with this trait. At 5th level, you can cast passwall with this trait. Once you cast earth tremor or passwall with this trait, you can't cast that spell with it again until you finish a long rest.",
      }),
      earth_walk_genasi_earth_genasi: await db.createRaceTrait({
        id: "race-trait-earth-walk-genasi_earth_genasi",
        name: "Earth Walk",
        description: "You can move across difficult terrain made of earth or stone without spending extra movement.",
      }),
      fire_resistance_genasi_fire_genasi: await db.createRaceTrait({
        id: "race-trait-fire-resistance-genasi_fire_genasi",
        name: "Fire Resistance",
        description: "You have resistance to fire damage.",
      }),
      fire_magic_genasi_fire_genasi: await db.createRaceTrait({
        id: "race-trait-fire-magic-genasi_fire_genasi",
        name: "Fire Magic",
        description: "You know the produce flame cantrip. At 3rd level, you can cast burning hands with this trait. At 5th level, you can cast flame blade with this trait. Once you cast burning hands or flame blade with this trait, you can't cast that spell with it again until you finish a long rest.",
      }),
      reach_to_the_blaze_genasi_fire_genasi: await db.createRaceTrait({
        id: "race-trait-reach-to-the-blaze-genasi_fire_genasi",
        name: "Reach to the Blaze",
        description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest.",
      }),
      water_resistance_genasi_water_genasi: await db.createRaceTrait({
        id: "race-trait-water-resistance-genasi_water_genasi",
        name: "Water Resistance",
        description: "You have resistance to acid damage.",
      }),
      water_magic_genasi_water_genasi: await db.createRaceTrait({
        id: "race-trait-water-magic-genasi_water_genasi",
        name: "Water Magic",
        description: "You know the shape water cantrip. At 3rd level, you can cast create or destroy water with this trait. At 5th level, you can cast wall of water with this trait. Once you cast create or destroy water or wall of water with this trait, you can't cast that spell with it again until you finish a long rest.",
      }),
      amphibious_genasi_water_genasi: await db.createRaceTrait({
        id: "race-trait-amphibious-genasi_water_genasi",
        name: "Amphibious",
        description: "You can breathe air and water.",
      }),
      swim_genasi_water_genasi: await db.createRaceTrait({
        id: "race-trait-swim-genasi_water_genasi",
        name: "Swim",
        description: "You have a swimming speed of 30 feet.",
      }),
      darkvision_gnome: await db.createRaceTrait({
        id: "race-trait-darkvision-gnome",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      gnome_cunning_gnome: await db.createRaceTrait({
        id: "race-trait-gnome-cunning-gnome",
        name: "Gnome Cunning",
        description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
      }),
      natural_illusionist_gnome_forest_gnome: await db.createRaceTrait({
        id: "race-trait-natural-illusionist-gnome_forest_gnome",
        name: "Natural Illusionist",
        description: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.",
      }),
      speak_with_small_beasts_gnome_forest_gnome: await db.createRaceTrait({
        id: "race-trait-speak-with-small-beasts-gnome_forest_gnome",
        name: "Speak with Small Beasts",
        description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.",
      }),
      artificers_lore_gnome_rock_gnome: await db.createRaceTrait({
        id: "race-trait-artificers-lore-gnome_rock_gnome",
        name: "Artificer's Lore",
        description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
      }),
      tinker_gnome_rock_gnome: await db.createRaceTrait({
        id: "race-trait-tinker-gnome_rock_gnome",
        name: "Tinker",
        description: "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp).",
      }),
      firearms_mastery_giff: await db.createRaceTrait({
        id: "race-trait-firearms-mastery-giff",
        name: "Firearms Mastery",
        description: "You have proficiency with firearms and ignore the loading property of firearms. You can use a bonus action to reload a firearm you are holding.",
      }),
      hippo_build_giff: await db.createRaceTrait({
        id: "race-trait-hippo-build-giff",
        name: "Hippo Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      }),
      natural_armor_giff: await db.createRaceTrait({
        id: "race-trait-natural-armor-giff",
        name: "Natural Armor",
        description: "Your thick hide provides you with a +1 bonus to AC when you aren't wearing armor.",
      }),
      darkvision_goblin: await db.createRaceTrait({
        id: "race-trait-darkvision-goblin",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      fury_of_the_small_goblin: await db.createRaceTrait({
        id: "race-trait-fury-of-the-small-goblin",
        name: "Fury of the Small",
        description: "When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can't use it again until you finish a short or long rest.",
      }),
      nimble_escape_goblin: await db.createRaceTrait({
        id: "race-trait-nimble-escape-goblin",
        name: "Nimble Escape",
        description: "You can take the Disengage or Hide action as a bonus action on each of your turns.",
      }),
      natural_athlete_goliath: await db.createRaceTrait({
        id: "race-trait-natural-athlete-goliath",
        name: "Natural Athlete",
        description: "You have proficiency in the Athletics skill.",
      }),
      stones_endurance_goliath: await db.createRaceTrait({
        id: "race-trait-stones-endurance-goliath",
        name: "Stone's Endurance",
        description: "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short or long rest.",
      }),
      powerful_build_goliath: await db.createRaceTrait({
        id: "race-trait-powerful-build-goliath",
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      }),
      mountain_born_goliath: await db.createRaceTrait({
        id: "race-trait-mountain-born-goliath",
        name: "Mountain Born",
        description: "You're acclimated to high altitude, including elevations above 20,000 feet. You're also naturally adapted to cold climates.",
      }),
      dexterous_feet_hadozee: await db.createRaceTrait({
        id: "race-trait-dexterous-feet-hadozee",
        name: "Dexterous Feet",
        description: "As a bonus action, you can use your feet to manipulate an object, open or close a door or container, or pick up or set down a Tiny object.",
      }),
      glide_hadozee: await db.createRaceTrait({
        id: "race-trait-glide-hadozee",
        name: "Glide",
        description: "When you fall at least 10 feet, you can use your reaction to extend your skin membranes to glide horizontally a number of feet equal to your walking speed, and you take no damage from the fall. You choose the direction of the glide.",
      }),
      hadozee_dodge_hadozee: await db.createRaceTrait({
        id: "race-trait-hadozee-dodge-hadozee",
        name: "Hadozee Dodge",
        description: "When you take damage, you can use your reaction to roll a d6 and add your proficiency bonus; reduce the damage by that total (minimum 0). You can use this trait a number of times equal to your proficiency bonus, and regain all uses after a long rest.",
      }),
      darkvision_half_elf: await db.createRaceTrait({
        id: "race-trait-darkvision-half_elf",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      fey_ancestry_half_elf: await db.createRaceTrait({
        id: "race-trait-fey-ancestry-half_elf",
        name: "Fey Ancestry",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
      }),
      skill_versatility_half_elf: await db.createRaceTrait({
        id: "race-trait-skill-versatility-half_elf",
        name: "Skill Versatility",
        description: "You gain proficiency in two skills of your choice.",
      }),
      aquatic_half_elf_aquatic_half_elf: await db.createRaceTrait({
        id: "race-trait-aquatic-half_elf_aquatic_half_elf",
        name: "Aquatic",
        description: "You can breathe air and water, and you have a swimming speed of 30 feet.",
      }),
      drow_magic_half_elf_drow_half_elf: await db.createRaceTrait({
        id: "race-trait-drow-magic-half_elf_drow_half_elf",
        name: "Drow Magic",
        description: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      elf_weapon_training_half_elf_high_half_elf: await db.createRaceTrait({
        id: "race-trait-elf-weapon-training-half_elf_high_half_elf",
        name: "Elf Weapon Training",
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
      }),
      cantrip_half_elf_high_half_elf: await db.createRaceTrait({
        id: "race-trait-cantrip-half_elf_high_half_elf",
        name: "Cantrip",
        description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
      }),
      elf_weapon_training_half_elf_wood_half_elf: await db.createRaceTrait({
        id: "race-trait-elf-weapon-training-half_elf_wood_half_elf",
        name: "Elf Weapon Training",
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
      }),
      fleet_of_foot_half_elf_wood_half_elf: await db.createRaceTrait({
        id: "race-trait-fleet-of-foot-half_elf_wood_half_elf",
        name: "Fleet of Foot",
        description: "Your base walking speed increases to 35 feet.",
      }),
      mask_of_the_wild_half_elf_wood_half_elf: await db.createRaceTrait({
        id: "race-trait-mask-of-the-wild-half_elf_wood_half_elf",
        name: "Mask of the Wild",
        description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
      }),
      darkvision_half_orc: await db.createRaceTrait({
        id: "race-trait-darkvision-half_orc",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      relentless_endurance_half_orc: await db.createRaceTrait({
        id: "race-trait-relentless-endurance-half_orc",
        name: "Relentless Endurance",
        description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
      }),
      savage_attacks_half_orc: await db.createRaceTrait({
        id: "race-trait-savage-attacks-half_orc",
        name: "Savage Attacks",
        description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
      }),
      lucky_halfling: await db.createRaceTrait({
        id: "race-trait-lucky-halfling",
        name: "Lucky",
        description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
      }),
      brave_halfling: await db.createRaceTrait({
        id: "race-trait-brave-halfling",
        name: "Brave",
        description: "You have advantage on saving throws against being frightened.",
      }),
      halfling_nimbleness_halfling: await db.createRaceTrait({
        id: "race-trait-halfling-nimbleness-halfling",
        name: "Halfling Nimbleness",
        description: "You can move through the space of any creature that is of a size larger than yours.",
      }),
      naturally_stealthy_halfling_lightfoot_halfling: await db.createRaceTrait({
        id: "race-trait-naturally-stealthy-halfling_lightfoot_halfling",
        name: "Naturally Stealthy",
        description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
      }),
      stout_resilience_halfling_stout_halfling: await db.createRaceTrait({
        id: "race-trait-stout-resilience-halfling_stout_halfling",
        name: "Stout Resilience",
        description: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
      }),
      silent_speech_halfling_ghostwise_halfling: await db.createRaceTrait({
        id: "race-trait-silent-speech-halfling_ghostwise_halfling",
        name: "Silent Speech",
        description: "You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.",
      }),
      hare_trigger_harengon: await db.createRaceTrait({
        id: "race-trait-hare-trigger-harengon",
        name: "Hare-Trigger",
        description: "You can add your proficiency bonus to your initiative rolls.",
      }),
      leporine_senses_harengon: await db.createRaceTrait({
        id: "race-trait-leporine-senses-harengon",
        name: "Leporine Senses",
        description: "You have proficiency in the Perception skill.",
      }),
      lucky_footwork_harengon: await db.createRaceTrait({
        id: "race-trait-lucky-footwork-harengon",
        name: "Lucky Footwork",
        description: "When you fail a Dexterity saving throw, you can use your reaction to reroll the die, and you must use the new roll.",
      }),
      rabbit_hop_harengon: await db.createRaceTrait({
        id: "race-trait-rabbit-hop-harengon",
        name: "Rabbit Hop",
        description: "As a bonus action, you can jump a number of feet equal to 5 × your proficiency bonus, without provoking opportunity attacks. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
      }),
      darkvision_hexblood: await db.createRaceTrait({
        id: "race-trait-darkvision-hexblood",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      hex_magic_hexblood: await db.createRaceTrait({
        id: "race-trait-hex-magic-hexblood",
        name: "Hex Magic",
        description: "You know the minor illusion cantrip. When you reach 3rd level, you can cast the hex spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can also cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      eerie_token_hexblood: await db.createRaceTrait({
        id: "race-trait-eerie-token-hexblood",
        name: "Eerie Token",
        description: "As an action, you can harmlessly remove a lock of your hair, a bit of your nail, or one of your teeth. This token is imbued with magic until you finish a long rest. While the token is imbued in this way, you can use an action to send a telepathic message to the creature holding or carrying the token, as long as you are on the same plane of existence. The message can contain up to twenty-five words.",
      }),
      darkvision_hobgoblin: await db.createRaceTrait({
        id: "race-trait-darkvision-hobgoblin",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      martial_training_hobgoblin: await db.createRaceTrait({
        id: "race-trait-martial-training-hobgoblin",
        name: "Martial Training",
        description: "You are proficient with two martial weapons of your choice and with light armor.",
      }),
      saving_face_hobgoblin: await db.createRaceTrait({
        id: "race-trait-saving-face-hobgoblin",
        name: "Saving Face",
        description: "If you miss with an attack roll or fail an ability check, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't use it again until you finish a short or long rest.",
      }),
      extra_language_human: await db.createRaceTrait({
        id: "race-trait-extra-language-human",
        name: "Extra Language",
        description: "You can speak, read, and write one extra language of your choice.",
      }),
      feat_human_variant_human: await db.createRaceTrait({
        id: "race-trait-feat-human_variant_human",
        name: "Feat",
        description: "You gain one feat of your choice.",
      }),
      skill_human_variant_human: await db.createRaceTrait({
        id: "race-trait-skill-human_variant_human",
        name: "Skill",
        description: "You gain proficiency in one skill of your choice.",
      }),
      hunters_intuition_human_mark_of_finding_human: await db.createRaceTrait({
        id: "race-trait-hunters-intuition-human_mark_of_finding_human",
        name: "Hunter's Intuition",
        description: "When you make a Wisdom (Perception) or Wisdom (Survival) check, you can roll a d4 and add the number rolled to the ability check.",
      }),
      finders_magic_human_mark_of_finding_human: await db.createRaceTrait({
        id: "race-trait-finders-magic-human_mark_of_finding_human",
        name: "Finder's Magic",
        description: "You can cast the hunter's mark spell with this trait. Starting at 3rd level, you can also cast the locate object spell with it. Starting at 5th level, you can also cast the locate creature spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
      }),
      wild_intuition_human_mark_of_handling_human: await db.createRaceTrait({
        id: "race-trait-wild-intuition-human_mark_of_handling_human",
        name: "Wild Intuition",
        description: "When you make a Wisdom (Animal Handling) or Intelligence (Nature) check, you can roll a d4 and add the number rolled to the ability check.",
      }),
      primal_connection_human_mark_of_handling_human: await db.createRaceTrait({
        id: "race-trait-primal-connection-human_mark_of_handling_human",
        name: "Primal Connection",
        description: "You can cast the speak with animals spell with this trait. Starting at 3rd level, you can also cast the animal friendship spell with it. Starting at 5th level, you can also cast the beast sense spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
      }),
      artisans_intuition_human_mark_of_making_human: await db.createRaceTrait({
        id: "race-trait-artisans-intuition-human_mark_of_making_human",
        name: "Artisan's Intuition",
        description: "When you make an Intelligence (Arcana) or Intelligence (History) check, you can roll a d4 and add the number rolled to the ability check.",
      }),
      makers_magic_human_mark_of_making_human: await db.createRaceTrait({
        id: "race-trait-makers-magic-human_mark_of_making_human",
        name: "Maker's Magic",
        description: "You can cast the mending cantrip with this trait. Starting at 3rd level, you can also cast the magic weapon spell with it. Starting at 5th level, you can also cast the fabricate spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Intelligence is your spellcasting ability for these spells.",
      }),
      intuitive_motion_human_mark_of_passage_human: await db.createRaceTrait({
        id: "race-trait-intuitive-motion-human_mark_of_passage_human",
        name: "Intuitive Motion",
        description: "When you make a Dexterity (Acrobatics) or Strength (Athletics) check, you can roll a d4 and add the number rolled to the ability check.",
      }),
      passage_magic_human_mark_of_passage_human: await db.createRaceTrait({
        id: "race-trait-passage-magic-human_mark_of_passage_human",
        name: "Passage Magic",
        description: "You can cast the longstrider spell with this trait. Starting at 3rd level, you can also cast the misty step spell with it. Starting at 5th level, you can also cast the passwall spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Intelligence is your spellcasting ability for these spells.",
      }),
      vigilant_guardian_human_mark_of_sentinel_human: await db.createRaceTrait({
        id: "race-trait-vigilant-guardian-human_mark_of_sentinel_human",
        name: "Vigilant Guardian",
        description: "When you make a Wisdom (Insight) or Wisdom (Perception) check, you can roll a d4 and add the number rolled to the ability check.",
      }),
      sentinels_magic_human_mark_of_sentinel_human: await db.createRaceTrait({
        id: "race-trait-sentinels-magic-human_mark_of_sentinel_human",
        name: "Sentinel's Magic",
        description: "You can cast the shield spell with this trait. Starting at 3rd level, you can also cast the warding bond spell with it. Starting at 5th level, you can also cast the death ward spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
      }),
      dual_mind_kalashtar: await db.createRaceTrait({
        id: "race-trait-dual-mind-kalashtar",
        name: "Dual Mind",
        description: "You have advantage on all Wisdom saving throws.",
      }),
      mental_discipline_kalashtar: await db.createRaceTrait({
        id: "race-trait-mental-discipline-kalashtar",
        name: "Mental Discipline",
        description: "You have resistance to psychic damage.",
      }),
      mind_link_kalashtar: await db.createRaceTrait({
        id: "race-trait-mind-link-kalashtar",
        name: "Mind Link",
        description: "You can speak telepathically to any creature you can see within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.",
      }),
      severed_from_dreams_kalashtar: await db.createRaceTrait({
        id: "race-trait-severed-from-dreams-kalashtar",
        name: "Severed from Dreams",
        description: "You don't sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
      }),
      fearless_kender: await db.createRaceTrait({
        id: "race-trait-fearless-kender",
        name: "Fearless",
        description: "You are immune to the frightened condition.",
      }),
      kender_curiosity_kender: await db.createRaceTrait({
        id: "race-trait-kender-curiosity-kender",
        name: "Kender Curiosity",
        description: "You have advantage on all Intelligence (Investigation) checks.",
      }),
      taunt_kender: await db.createRaceTrait({
        id: "race-trait-taunt-kender",
        name: "Taunt",
        description: "As a bonus action, you can unleash a string of provoking words at a creature within 30 feet of you that can hear you. The target must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or be taunted by you until the start of your next turn. A taunted target has disadvantage on attack rolls against targets other than you.",
      }),
      expert_forgery_kenku: await db.createRaceTrait({
        id: "race-trait-expert-forgery-kenku",
        name: "Expert Forgery",
        description: "You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects.",
      }),
      kenku_training_kenku: await db.createRaceTrait({
        id: "race-trait-kenku-training-kenku",
        name: "Kenku Training",
        description: "You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.",
      }),
      mimicry_kenku: await db.createRaceTrait({
        id: "race-trait-mimicry-kenku",
        name: "Mimicry",
        description: "You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.",
      }),
      darkvision_kobold: await db.createRaceTrait({
        id: "race-trait-darkvision-kobold",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      grovel_cower_and_beg_kobold: await db.createRaceTrait({
        id: "race-trait-grovel-cower-and-beg-kobold",
        name: "Grovel, Cower, and Beg",
        description: "As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against creatures within 10 feet of you that can see you. Once you use this trait, you can't use it again until you finish a short or long rest.",
      }),
      pack_tactics_kobold: await db.createRaceTrait({
        id: "race-trait-pack-tactics-kobold",
        name: "Pack Tactics",
        description: "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.",
      }),
      darkvision_leonin: await db.createRaceTrait({
        id: "race-trait-darkvision-leonin",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      claws_leonin: await db.createRaceTrait({
        id: "race-trait-claws-leonin",
        name: "Claws",
        description: "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      }),
      hunters_instincts_leonin: await db.createRaceTrait({
        id: "race-trait-hunters-instincts-leonin",
        name: "Hunter's Instincts",
        description: "You have proficiency in one of the following skills of your choice: Athletics, Intimidation, Perception, or Survival.",
      }),
      daunting_roar_leonin: await db.createRaceTrait({
        id: "race-trait-daunting-roar-leonin",
        name: "Daunting Roar",
        description: "As a bonus action, you can let out a menacing roar. Creatures of your choice within 10 feet of you that can hear you must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. Once you use this trait, you can't use it again until you finish a short or long rest.",
      }),
      bite_lizardfolk: await db.createRaceTrait({
        id: "race-trait-bite-lizardfolk",
        name: "Bite",
        description: "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      }),
      cunning_artisan_lizardfolk: await db.createRaceTrait({
        id: "race-trait-cunning-artisan-lizardfolk",
        name: "Cunning Artisan",
        description: "As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools.",
      }),
      hold_breath_lizardfolk: await db.createRaceTrait({
        id: "race-trait-hold-breath-lizardfolk",
        name: "Hold Breath",
        description: "You can hold your breath for up to 15 minutes at a time.",
      }),
      natural_armor_lizardfolk: await db.createRaceTrait({
        id: "race-trait-natural-armor-lizardfolk",
        name: "Natural Armor",
        description: "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
      }),
      hungry_jaws_lizardfolk: await db.createRaceTrait({
        id: "race-trait-hungry-jaws-lizardfolk",
        name: "Hungry Jaws",
        description: "In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest.",
      }),
      natural_armor_loxodon: await db.createRaceTrait({
        id: "race-trait-natural-armor-loxodon",
        name: "Natural Armor",
        description: "You have thick, leathery skin. When you aren't wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
      }),
      powerful_build_loxodon: await db.createRaceTrait({
        id: "race-trait-powerful-build-loxodon",
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      }),
      trunk_loxodon: await db.createRaceTrait({
        id: "race-trait-trunk-loxodon",
        name: "Trunk",
        description: "You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options. It can't wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.",
      }),
      keen_smell_loxodon: await db.createRaceTrait({
        id: "race-trait-keen-smell-loxodon",
        name: "Keen Smell",
        description: "Thanks to your sensitive trunk, you have advantage on Wisdom (Perception) checks that involve smell.",
      }),
      horns_minotaur: await db.createRaceTrait({
        id: "race-trait-horns-minotaur",
        name: "Horns",
        description: "Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      }),
      goring_rush_minotaur: await db.createRaceTrait({
        id: "race-trait-goring-rush-minotaur",
        name: "Goring Rush",
        description: "When you take the Dash action on your turn, you can make one melee attack with your horns as a bonus action.",
      }),
      hammering_horns_minotaur: await db.createRaceTrait({
        id: "race-trait-hammering-horns-minotaur",
        name: "Hammering Horns",
        description: "When you use the Attack action during your turn to make a melee attack, you can attempt to shove a creature with your horns as a bonus action. You cannot use this shove attempt to knock a creature prone.",
      }),
      labyrinthine_recall_minotaur: await db.createRaceTrait({
        id: "race-trait-labyrinthine-recall-minotaur",
        name: "Labyrinthine Recall",
        description: "You can perfectly recall any path you have traveled.",
      }),
      darkvision_orc: await db.createRaceTrait({
        id: "race-trait-darkvision-orc",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      aggressive_orc: await db.createRaceTrait({
        id: "race-trait-aggressive-orc",
        name: "Aggressive",
        description: "As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.",
      }),
      powerful_build_orc: await db.createRaceTrait({
        id: "race-trait-powerful-build-orc",
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      }),
      darkvision_owlin: await db.createRaceTrait({
        id: "race-trait-darkvision-owlin",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      flight_owlin: await db.createRaceTrait({
        id: "race-trait-flight-owlin",
        name: "Flight",
        description: "You have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
      }),
      keen_senses_owlin: await db.createRaceTrait({
        id: "race-trait-keen-senses-owlin",
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill.",
      }),
      silent_feathers_owlin: await db.createRaceTrait({
        id: "race-trait-silent-feathers-owlin",
        name: "Silent Feathers",
        description: "You have proficiency in the Stealth skill.",
      }),
      amorphous_plasmoid: await db.createRaceTrait({
        id: "race-trait-amorphous-plasmoid",
        name: "Amorphous",
        description: "You can squeeze through a space as narrow as 1 inch wide without squeezing.",
      }),
      darkvision_plasmoid: await db.createRaceTrait({
        id: "race-trait-darkvision-plasmoid",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      hold_breath_plasmoid: await db.createRaceTrait({
        id: "race-trait-hold-breath-plasmoid",
        name: "Hold Breath",
        description: "You can hold your breath for 1 hour.",
      }),
      natural_reach_plasmoid: await db.createRaceTrait({
        id: "race-trait-natural-reach-plasmoid",
        name: "Natural Reach",
        description: "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.",
      }),
      shape_self_plasmoid: await db.createRaceTrait({
        id: "race-trait-shape-self-plasmoid",
        name: "Shape Self",
        description: "As a bonus action, you can reshape your body to give yourself a head, one or two arms, one or two legs, and makeshift hands and feet, or you can revert to a limbless blob. While you have a humanlike shape, you can wear clothing and armor made for a Humanoid of your size. As a bonus action, you can extrude a pseudopod that is up to 6 inches wide and 10 feet long, or reabsorb it into your body. You can use this pseudopod to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can't attack with the pseudopod or use it to carry more than 10 pounds.",
      }),
      ancestral_legacy_reborn: await db.createRaceTrait({
        id: "race-trait-ancestral-legacy-reborn",
        name: "Ancestral Legacy",
        description: "You gain the benefits of your choice of one of the following options: (a) Darkvision with a range of 60 feet, (b) Proficiency in two skills of your choice, or (c) Proficiency with one tool of your choice.",
      }),
      deathless_nature_reborn: await db.createRaceTrait({
        id: "race-trait-deathless-nature-reborn",
        name: "Deathless Nature",
        description: "You don't need to eat, drink, or breathe. You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in an inactive, motionless state, during which you remain semiconscious.",
      }),
      knowledge_from_a_past_life_reborn: await db.createRaceTrait({
        id: "race-trait-knowledge-from-a-past-life-reborn",
        name: "Knowledge from a Past Life",
        description: "When you make an ability check that uses a skill, you can roll a d6 and add the number rolled to the check. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
      }),
      souls_gift_reborn: await db.createRaceTrait({
        id: "race-trait-souls-gift-reborn",
        name: "Soul's Gift",
        description: "You have resistance to necrotic damage and radiant damage.",
      }),
      fey_satyr: await db.createRaceTrait({
        id: "race-trait-fey-satyr",
        name: "Fey",
        description: "Your creature type is fey, rather than humanoid.",
      }),
      ram_satyr: await db.createRaceTrait({
        id: "race-trait-ram-satyr",
        name: "Ram",
        description: "You can use your head and horns to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      }),
      magic_resistance_satyr: await db.createRaceTrait({
        id: "race-trait-magic-resistance-satyr",
        name: "Magic Resistance",
        description: "You have advantage on saving throws against spells and other magical effects.",
      }),
      mirthful_leaps_satyr: await db.createRaceTrait({
        id: "race-trait-mirthful-leaps-satyr",
        name: "Mirthful Leaps",
        description: "Whenever you make a long or high jump, you can roll a d8 and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.",
      }),
      reveler_satyr: await db.createRaceTrait({
        id: "race-trait-reveler-satyr",
        name: "Reveler",
        description: "You have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice.",
      }),
      darkvision_shifter: await db.createRaceTrait({
        id: "race-trait-darkvision-shifter",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      shifting_shifter: await db.createRaceTrait({
        id: "race-trait-shifting-shifter",
        name: "Shifting",
        description: "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1). You also gain additional benefits that depend on your shifter type, as detailed below. Once you shift, you can't do so again until you finish a short or long rest.",
      }),
      shifting_feature_shifter_beasthide_shifter: await db.createRaceTrait({
        id: "race-trait-shifting-feature-shifter_beasthide_shifter",
        name: "Shifting Feature",
        description: "While shifting, you gain 1d6 temporary hit points at the start of each of your turns. You also gain a +1 bonus to AC while shifting.",
      }),
      shifting_feature_shifter_longtooth_shifter: await db.createRaceTrait({
        id: "race-trait-shifting-feature-shifter_longtooth_shifter",
        name: "Shifting Feature",
        description: "While shifting, you can use your fangs to make an unarmed strike as a bonus action. If you hit, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      }),
      shifting_feature_shifter_swiftstride_shifter: await db.createRaceTrait({
        id: "race-trait-shifting-feature-shifter_swiftstride_shifter",
        name: "Shifting Feature",
        description: "While shifting, your walking speed increases by 10 feet. You also gain a +1 bonus to AC while shifting.",
      }),
      shifting_feature_shifter_wildhunt_shifter: await db.createRaceTrait({
        id: "race-trait-shifting-feature-shifter_wildhunt_shifter",
        name: "Shifting Feature",
        description: "While shifting, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you, unless you're incapacitated.",
      }),
      animal_enhancement_simic_hybrid: await db.createRaceTrait({
        id: "race-trait-animal-enhancement-simic_hybrid",
        name: "Animal Enhancement",
        description: "You gain one of the following enhancements of your choice: (a) Manta Glide: You have a flying speed equal to your walking speed, but you must end your turn on solid ground or fall. (b) Nimble Climber: You have a climbing speed equal to your walking speed. (c) Underwater Adaptation: You can breathe air and water, and you have a swimming speed equal to your walking speed.",
      }),
      darkvision_simic_hybrid: await db.createRaceTrait({
        id: "race-trait-darkvision-simic_hybrid",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      darkvision_tabaxi: await db.createRaceTrait({
        id: "race-trait-darkvision-tabaxi",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      feline_agility_tabaxi: await db.createRaceTrait({
        id: "race-trait-feline-agility-tabaxi",
        name: "Feline Agility",
        description: "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.",
      }),
      cats_claws_tabaxi: await db.createRaceTrait({
        id: "race-trait-cats-claws-tabaxi",
        name: "Cat's Claws",
        description: "Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      }),
      cats_talent_tabaxi: await db.createRaceTrait({
        id: "race-trait-cats-talent-tabaxi",
        name: "Cat's Talent",
        description: "You have proficiency in the Perception and Stealth skills.",
      }),
      chameleon_carapace_thri_kreen: await db.createRaceTrait({
        id: "race-trait-chameleon-carapace-thri_kreen",
        name: "Chameleon Carapace",
        description: "As a bonus action, you can change the color of your carapace to match the color and texture of your surroundings, giving you advantage on Dexterity (Stealth) checks made to hide.",
      }),
      darkvision_thri_kreen: await db.createRaceTrait({
        id: "race-trait-darkvision-thri_kreen",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      extra_arms_thri_kreen: await db.createRaceTrait({
        id: "race-trait-extra-arms-thri_kreen",
        name: "Extra Arms",
        description: "You have two extra arms below your main pair of arms. The extra arms can manipulate an object, open or close a door or container, pick up or set down a Tiny object, or wield a weapon that has the light property.",
      }),
      sleepless_thri_kreen: await db.createRaceTrait({
        id: "race-trait-sleepless-thri_kreen",
        name: "Sleepless",
        description: "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain semiconscious.",
      }),
      thri_kreen_weapon_training_thri_kreen: await db.createRaceTrait({
        id: "race-trait-thri-kreen-weapon-training-thri_kreen",
        name: "Thri-kreen Weapon Training",
        description: "You are proficient with the gythka and the chatkcha.",
      }),
      darkvision_tiefling: await db.createRaceTrait({
        id: "race-trait-darkvision-tiefling",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      hellish_resistance_tiefling: await db.createRaceTrait({
        id: "race-trait-hellish-resistance-tiefling",
        name: "Hellish Resistance",
        description: "You have resistance to fire damage.",
      }),
      infernal_legacy_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      infernal_legacy_tiefling_asmodeus_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling_asmodeus_tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      infernal_legacy_tiefling_baalzebul_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling_baalzebul_tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the stinking cloud spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      infernal_legacy_tiefling_dispater_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling_dispater_tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the command spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the detect magic spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      infernal_legacy_tiefling_fierna_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling_fierna_tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the charm person spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      infernal_legacy_tiefling_glasya_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling_glasya_tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the minor illusion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      infernal_legacy_tiefling_levistus_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling_levistus_tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the ray of frost spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the armor of Agathys spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      infernal_legacy_tiefling_mammon_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling_mammon_tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the Tenser's floating disk spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the arcane lock spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      infernal_legacy_tiefling_mephistopheles_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling_mephistopheles_tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the burning hands spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the flame blade spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      infernal_legacy_tiefling_zariel_tiefling: await db.createRaceTrait({
        id: "race-trait-infernal-legacy-tiefling_zariel_tiefling",
        name: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the searing smite spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the branding smite spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      claws_tortle: await db.createRaceTrait({
        id: "race-trait-claws-tortle",
        name: "Claws",
        description: "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      }),
      hold_breath_tortle: await db.createRaceTrait({
        id: "race-trait-hold-breath-tortle",
        name: "Hold Breath",
        description: "You can hold your breath for up to 1 hour.",
      }),
      natural_armor_tortle: await db.createRaceTrait({
        id: "race-trait-natural-armor-tortle",
        name: "Natural Armor",
        description: "Due to your shell, you have a +2 bonus to AC while you aren't wearing armor.",
      }),
      shell_defense_tortle: await db.createRaceTrait({
        id: "race-trait-shell-defense-tortle",
        name: "Shell Defense",
        description: "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell.",
      }),
      survival_instinct_tortle: await db.createRaceTrait({
        id: "race-trait-survival-instinct-tortle",
        name: "Survival Instinct",
        description: "You gain proficiency in the Survival skill. Your shell gives you advantage on all checks made to stabilize a dying creature and on all checks made to provide first aid.",
      }),
      amphibious_triton: await db.createRaceTrait({
        id: "race-trait-amphibious-triton",
        name: "Amphibious",
        description: "You can breathe air and water.",
      }),
      control_air_and_water_triton: await db.createRaceTrait({
        id: "race-trait-control-air-and-water-triton",
        name: "Control Air and Water",
        description: "You can cast fog cloud with this trait. Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      emissary_of_the_sea_triton: await db.createRaceTrait({
        id: "race-trait-emissary-of-the-sea-triton",
        name: "Emissary of the Sea",
        description: "Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas to any beast that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return.",
      }),
      guardians_of_the_depths_triton: await db.createRaceTrait({
        id: "race-trait-guardians-of-the-depths-triton",
        name: "Guardians of the Depths",
        description: "Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks caused by a deep, underwater environment.",
      }),
      swimming_speed_triton: await db.createRaceTrait({
        id: "race-trait-swimming-speed-triton",
        name: "Swimming Speed",
        description: "You have a swimming speed of 30 feet.",
      }),
      darkvision_vedalken: await db.createRaceTrait({
        id: "race-trait-darkvision-vedalken",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      vedalken_dispassion_vedalken: await db.createRaceTrait({
        id: "race-trait-vedalken-dispassion-vedalken",
        name: "Vedalken Dispassion",
        description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws.",
      }),
      partially_amphibious_vedalken: await db.createRaceTrait({
        id: "race-trait-partially-amphibious-vedalken",
        name: "Partially Amphibious",
        description: "You can breathe air and water, but you need to be submerged at least once every 4 hours to avoid suffocating.",
      }),
      tireless_precision_vedalken: await db.createRaceTrait({
        id: "race-trait-tireless-precision-vedalken",
        name: "Tireless Precision",
        description: "You are proficient with one of the following skills of your choice: Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. You are also proficient with one tool of your choice. When you make an ability check with the chosen skill or tool, you can roll a d4 and add the number rolled to the check.",
      }),
      constructed_resilience_warforged: await db.createRaceTrait({
        id: "race-trait-constructed-resilience-warforged",
        name: "Constructed Resilience",
        description: "You were created to have remarkable fortitude, represented by the following benefits: You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You don't need to eat, drink, or breathe. You are immune to disease. You don't need to sleep, and magic can't put you to sleep.",
      }),
      sentrys_rest_warforged: await db.createRaceTrait({
        id: "race-trait-sentrys-rest-warforged",
        name: "Sentry's Rest",
        description: "When you take a long rest, you must spend at least 6 hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.",
      }),
      integrated_protection_warforged: await db.createRaceTrait({
        id: "race-trait-integrated-protection-warforged",
        name: "Integrated Protection",
        description: "Your body has built-in defensive layers, which can be enhanced with armor: You gain a +1 bonus to Armor Class. You can don only armor with which you have proficiency. To don armor other than a shield, you must incorporate it into your body over the course of 1 hour, during which you must remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way. While you live, the armor incorporated into your body can't be removed against your will.",
      }),
      specialized_design_warforged: await db.createRaceTrait({
        id: "race-trait-specialized-design-warforged",
        name: "Specialized Design",
        description: "You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.",
      }),
      darkvision_yuan_ti: await db.createRaceTrait({
        id: "race-trait-darkvision-yuan_ti",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      }),
      magic_resistance_yuan_ti: await db.createRaceTrait({
        id: "race-trait-magic-resistance-yuan_ti",
        name: "Magic Resistance",
        description: "You have advantage on saving throws against spells and other magical effects.",
      }),
      poison_immunity_yuan_ti: await db.createRaceTrait({
        id: "race-trait-poison-immunity-yuan_ti",
        name: "Poison Immunity",
        description: "You are immune to poison damage and the poisoned condition.",
      }),
      serpentine_magic_yuan_ti: await db.createRaceTrait({
        id: "race-trait-serpentine-magic-yuan_ti",
        name: "Serpentine Magic",
        description: "You know the poison spray cantrip. When you reach 3rd level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the animal friendship spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      innate_spellcasting_yuan_ti_pureblood_yuan_ti: await db.createRaceTrait({
        id: "race-trait-innate-spellcasting-yuan_ti_pureblood_yuan_ti",
        name: "Innate Spellcasting",
        description: "You know the poison spray cantrip. When you reach 3rd level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the animal friendship spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      }),
      chromatic_ancestry_dragonborn: await db.createRaceTrait({
        id: "race-trait-chromatic-ancestry-dragonborn",
        name: "Chromatic Ancestry",
        description: "You have draconic ancestry of your chosen color, which determines your resistance and breathe weapon type.\n\tBlack: Acid (5 by 30ft line)\n\tBlue: Lightning (5 by 30ft line)\n\tGreen: Poison (15ft cone)\n\tRed: Fire (15ft cone)\n\tWhite: Cold (15ft cone)",
      }),
      metallic_ancestry_dragonborn: await db.createRaceTrait({
        id: "race-trait-metallic-ancestry-dragonborn",
        name: "Metallic Ancestry",
        description: "You have draconic ancestry of your chosen metal, which determines your resistance and breathe weapon type.\n\tBrass: Fire (5 by 30ft line)\n\tBronze: Lightning (5 by 30ft line)\n\tCopper: Acid (5 by 30ft line)\n\tGold: Fire (15ft cone)\n\tSilver: Cold (15ft cone)",
      }),
      gem_ancestry_dragonborn: await db.createRaceTrait({
        id: "race-trait-gem-ancestry-dragonborn",
        name: "Gem Ancestry",
        description: "You have draconic ancestry of your chosen gem, which determines your resistance and breathe weapon type.\n\tAmethyst: Force (15ft cone)\n\tCrystal: Radiant (5 by 30ft line)\n\tEmerald: Psychic (15ft cone)\n\tSapphire: Thunder (5 by 30ft line)\n\tTopaz: Necrotic (5 by 30ft line)",
      })
    };
    // Race Names
    const raceNames = {
    aarakocra: await db.createRaceName({
        id: "race-names-aarakocra",
        male: ["Kree", "Kreel", "Kreeth", "Kreetha", "Kreetho", "Kreethu"],
        female: ["Kreea", "Kreela", "Kreetha", "Kreethi", "Kreetho", "Kreethu"],
        unisex: [],
        surname: ["Windcaller", "Skysoarer", "Clouddancer", "Stormrider", "Windwhisper", "Skywatcher"]
    }),
    aasimar: await db.createRaceName({
        id: "race-names-aasimar",
        male: ["Seraphiel", "Thalion", "Aurelius", "Celestius", "Divinus", "Luminus"],
        female: ["Liora", "Mara", "Celestia", "Aurelia", "Divina", "Lumina"],
        unisex: [],
        surname: ["Brightwing", "Goldheart", "Starfall", "Lightbringer", "Heavenward", "Divinegrace"]
    }),
    autognome: await db.createRaceName({
        id: "race-names-autognome",
        male: ["Cog", "Gear", "Spring", "Piston", "Rivet", "Bolt"],
        female: ["Cog", "Gear", "Spring", "Piston", "Rivet", "Bolt"],
        unisex: [],
        surname: ["Ironworks", "Steelcraft", "Clockwork", "Mechanus", "Gearwright", "Springmaker"]
    }),
    bugbear: await db.createRaceName({
        id: "race-names-bugbear",
        male: ["Gor", "Thokk", "Dren", "Harg", "Krusk", "Vrak"],
        female: ["Shara", "Emen", "Baggi", "Vola", "Ovak", "Zara"],
        unisex: [],
        surname: ["Bloodclaw", "Bonechewer", "Skullcrusher", "Ironhide", "Grimjaw", "Darkfang"]
    }),
    centaur: await db.createRaceName({
        id: "race-names-centaur",
        male: ["Chiron", "Pholus", "Nessus", "Eurytion", "Hylaeus", "Rhoecus"],
        female: ["Hippe", "Melanippe", "Ocyrhoe", "Theano", "Euippe", "Hippodamia"],
        unisex: [],
        surname: ["Swiftstride", "Windrunner", "Meadowgallop", "Thunderhoof", "Stormchaser", "Wildheart"]
    }),
    changeling: await db.createRaceName({
        id: "race-names-changeling",
        male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
        female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
        unisex: [],
        surname: ["Shapeshifter", "Faceless", "Mimic", "Doppelganger", "Illusion", "Mirage"]
    }),
    dhampir: await db.createRaceName({
        id: "race-names-dhampir",
        male: ["Vladimir", "Damien", "Lucian", "Cassius", "Darius", "Marcus"],
        female: ["Lilith", "Raven", "Luna", "Cassandra", "Diana", "Mira"],
        unisex: [],
        surname: ["Nightshade", "Bloodmoon", "Shadowbane", "Darkheart", "Crimson", "Nocturne"]
    }),
    dragonborn: await db.createRaceName({
        id: "race-names-dragonborn",
        male: ["Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan"],
        female: ["Akra", "Biri", "Daar", "Farideh", "Harann", "Havilar"],
        unisex: [],
        surname: ["Flameheart", "Stormwind", "Frostfang", "Thunderclaw", "Shadowscale", "Goldwing"]
    }),
    dwarf: await db.createRaceName({
        id: "race-names-dwarf",
        male: ["Thrain", "Beldrum", "Dorn", "Farin", "Orik", "Thorin"],
        female: ["Hilda", "Elinor", "Bree", "Dagna", "Helja", "Thora"],
        unisex: [],
        surname: ["Ironbeard", "Stonehammer", "Goldforge", "Mountainheart", "Steelaxe", "Rockfist"]
    }),
    elf: await db.createRaceName({
        id: "race-names-elf",
        male: ["Thamior", "Kaelen", "Aelar", "Valandil", "Immeral", "Arannis"],
        female: ["Laeriel", "Sylvaria", "Naivara", "Elenwen", "Faelina", "Thalindra"],
        unisex: [],
        surname: ["Moonwhisper", "Stardancer", "Windweaver", "Leafshade", "Riversong", "Forestwalker"]
    }),
    fairy: await db.createRaceName({
        id: "race-names-fairy",
        male: ["Puck", "Oberon", "Titania"],
        female: ["Titania", "Puck", "Oberon"],
        unisex: [],
        surname: ["Sparklewing", "Dustdancer", "Glowmoth", "Twinkletoes", "Shimmer", "Gleam"]
    }),
    firbolg: await db.createRaceName({
        id: "race-names-firbolg",
        male: ["Bael", "Druid", "Fael", "Gael", "Hael", "Kael"],
        female: ["Ael", "Bael", "Cael", "Dael", "Eael", "Fael"],
        unisex: [],
        surname: ["Treehugger", "Forestkeeper", "Natureguard", "Wildwood", "Greenheart", "Earthshaker"]
    }),
    genasi: await db.createRaceName({
        id: "race-names-genasi",
        male: ["Aiden", "Blaze", "Cinder", "Dust", "Ember", "Flame"],
        female: ["Aria", "Breeze", "Crystal", "Dew", "Echo", "Frost"],
        unisex: [],
        surname: ["Elemental", "Primordial", "Essence", "Spirit", "Force", "Power"]
    }),
    gnome: await db.createRaceName({
        id: "race-names-gnome",
        male: ["Fizban", "Tink", "Alston", "Boddynock", "Zook", "Fizzlepuff"],
        female: ["Nissa", "Bimpnottin", "Caramip", "Ellywick", "Tana", "Thistle"],
        unisex: [],
        surname: ["Tinkertop", "Gadgetmaker", "Whimsy", "Trickster", "Gizmo", "Puzzle"]
    }),
    giff: await db.createRaceName({
        id: "race-names-giff",
        male: ["Gunther", "Hans", "Klaus", "Otto", "Rolf", "Wolfgang"],
        female: ["Greta", "Helga", "Ingrid", "Katarina", "Petra", "Ursula"],
        unisex: [],
        surname: ["Ironfist", "Steeljaw", "Gunpowder", "Cannonball", "Blunderbuss", "Musket"]
    }),
    goblin: await db.createRaceName({
        id: "race-names-goblin",
        male: ["Grik", "Snag", "Vrak", "Dreg", "Muck", "Snik"],
        female: ["Ziz", "Yip", "Nib", "Gik", "Pox", "Vix"],
        unisex: [],
        surname: ["Sneak", "Stab", "Grab", "Snatch", "Pilfer", "Thief"]
    }),
    goliath: await db.createRaceName({
        id: "race-names-goliath",
        male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        unisex: [],
        surname: ["Stonefist", "Mountainpeak", "Thunderclap", "Stormcaller", "Earthshaker", "Rockbreaker"]
    }),
    hadozee: await db.createRaceName({
        id: "race-names-hadozee",
        male: ["Bansh", "Darsh", "Grath", "Groh", "Polth", "Marn"],
        female: ["Bahasha", "Bannithi", "Dashi", "Kalla", "Risha", "Yasha"],
        unisex: [],
        surname: ["Nightdream", "Swiftson", "Wave-dancer", "Dawnchaser", "Cloudjumper", "Swordstorm"]
    }),
    half_elf: await db.createRaceName({
        id: "race-names-half-elf",
        male: ["Caelum", "Lioran", "Thalion", "Eldrin", "Arlen", "Dorian"],
        female: ["Liora", "Nyxara", "Elara", "Selene", "Aria", "Luna"],
        unisex: [],
        surname: ["Moonwhisper", "Stardancer", "Windweaver", "Leafshade", "Riversong", "Forestwalker"]
    }),
    half_orc: await db.createRaceName({
        id: "race-names-half-orc",
        male: ["Gor", "Thokk", "Dren", "Harg", "Krusk", "Vrak"],
        female: ["Shara", "Emen", "Baggi", "Vola", "Ovak", "Zara"],
        unisex: [],
        surname: ["Bloodclaw", "Bonechewer", "Skullcrusher", "Ironhide", "Grimjaw", "Darkfang"]
    }),
    halfling: await db.createRaceName({
        id: "race-names-halfling",
        male: ["Milo", "Pippin", "Samwise", "Frodo", "Bilbo", "Tobias"],
        female: ["Rosie", "Marigold", "Pansy", "Daisy", "Primrose", "Piri"],
        unisex: [],
        surname: ["Greenbottle", "Underhill", "Goodbarrel", "Hobbiton", "Bagshot", "Baggins"]
    }),
    harengon: await db.createRaceName({
        id: "race-names-harengon",
        male: ["Bunny", "Hoppy", "Jumper", "Skipper", "Bounder", "Leaper"],
        female: ["Bunny", "Hoppy", "Jumper", "Skipper", "Bounder", "Leaper"],
        unisex: [],
        surname: ["Longears", "Quickfoot", "Swiftjump", "Bouncy", "Fleetfoot", "Springstep"]
    }),
    hexblood: await db.createRaceName({
        id: "race-names-hexblood",
        male: ["Crow", "Raven", "Shadow", "Grim", "Dark", "Night"],
        female: ["Crow", "Raven", "Shadow", "Grim", "Dark", "Night"],
        unisex: [],
        surname: ["Hexweaver", "Cursebearer", "Witchborn", "Hagspawn", "Darkmagic", "Spellbound"]
    }),
    hobgoblin: await db.createRaceName({
        id: "race-names-hobgoblin",
        male: ["Gor", "Thokk", "Dren", "Harg", "Krusk", "Vrak"],
        female: ["Shara", "Emen", "Baggi", "Vola", "Ovak", "Zara"],
        unisex: [],
        surname: ["Ironfist", "Steeljaw", "Gunpowder", "Cannonball", "Blunderbuss", "Musket"]
    }),
    human: await db.createRaceName({
        id: "race-names-human",
        male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
        female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
        unisex: [],
        surname: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia"]
    }),
    kalashtar: await db.createRaceName({
        id: "race-names-kalashtar",
        male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
        female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
        unisex: [],
        surname: ["Dreamweaver", "Mindwalker", "Soulbinder", "Spiritguide", "Psion", "Telepath"]
    }),
    kender: await db.createRaceName({
        id: "race-names-kender",
        male: ["Milo", "Pippin", "Samwise", "Frodo", "Bilbo", "Tobias"],
        female: ["Rosie", "Marigold", "Pansy", "Daisy", "Primrose", "Piri"],
        unisex: [],
        surname: ["Greenbottle", "Underhill", "Goodbarrel", "Hobbiton", "Bagshot", "Baggins"]
    }),
    kenku: await db.createRaceName({
        id: "race-names-kenku",
        male: ["Caw", "Squawk", "Chirp", "Tweet", "Coo", "Cackle"],
        female: ["Caw", "Squawk", "Chirp", "Tweet", "Coo", "Cackle"],
        unisex: [],
        surname: ["Featherfall", "Wingbeat", "Skycaller", "Windwhisper", "Cloudsoarer", "Stormdancer"]
    }),
    kobold: await db.createRaceName({
        id: "race-names-kobold",
        male: ["Meepo", "Snik", "Vrak", "Drek", "Muck", "Grik"],
        female: ["Ziz", "Yip", "Nib", "Gik", "Pox", "Vix"],
        unisex: [],
        surname: ["Tinyclaw", "Smallfang", "Littletooth", "Miniscale", "Petite", "Diminutive"]
    }),
    leonin: await db.createRaceName({
        id: "race-names-leonin",
        male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        unisex: [],
        surname: ["Goldmane", "Lionheart", "Pridestalker", "Mane", "Roar", "Claw"]
    }),
    lizardfolk: await db.createRaceName({
        id: "race-names-lizardfolk",
        male: ["Sissith", "Vessk", "Throden", "Hissar", "Ziss", "Kess"],
        female: ["Sash", "Vissara", "Thiss", "Hissara", "Zissith", "Kessara"],
        unisex: [],
        surname: ["Scalefoot", "Tailswish", "Clawmark", "Fang", "Scale", "Lizard"]
    }),
    loxodon: await db.createRaceName({
        id: "race-names-loxodon",
        male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        unisex: [],
        surname: ["Tuskbreaker", "Trunkstrong", "Ivory", "Tusk", "Trunk", "Elephant"]
    }),
    minotaur: await db.createRaceName({
        id: "race-names-minotaur",
        male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        unisex: [],
        surname: ["Hornbreaker", "Bullrush", "Charger", "Horn", "Bull", "Maze"]
    }),
    orc: await db.createRaceName({
        id: "race-names-orc",
        male: ["Gor", "Thokk", "Dren", "Harg", "Krusk", "Vrak"],
        female: ["Shara", "Emen", "Baggi", "Vola", "Ovak", "Zara"],
        unisex: [],
        surname: ["Bloodclaw", "Bonechewer", "Skullcrusher", "Ironhide", "Grimjaw", "Darkfang"]
    }),
    owlin: await db.createRaceName({
        id: "race-names-owlin",
        male: ["Hoot", "Screech"],
        female: ["Hoot", "Screech"],
        unisex: [],
        surname: ["Nightwing", "Owlcall", "Hoot", "Screech", "Wingbeat", "Featherfall"]
    }),
    plasmoid: await db.createRaceName({
        id: "race-names-plasmoid",
        male: ["Blob", "Goo", "Slime", "Gel", "Ooze", "Mucus"],
        female: ["Blob", "Goo", "Slime", "Gel", "Ooze", "Mucus"],
        unisex: [],
        surname: ["Slimy", "Gooey", "Blobby", "Gelatinous", "Mucous", "Viscous"]
    }),
    reborn: await db.createRaceName({
        id: "race-names-reborn",
        male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
        female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
        unisex: [],
        surname: ["Deathless", "Undying", "Eternal", "Immortal", "Ageless", "Timeless"]
    }),
    satyr: await db.createRaceName({
        id: "race-names-satyr",
        male: ["Puck", "Oberon", "Titania"],
        female: ["Titania", "Puck", "Oberon"],
        unisex: [],
        surname: ["Horned", "Goatfoot", "Pan", "Faun", "Sylvan", "Woodland"]
    }),
    shifter: await db.createRaceName({
        id: "race-names-shifter",
        male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
        female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
        unisex: [],
        surname: ["Wildheart", "Beastform", "Shapeshifter", "Feral", "Primal", "Savage"]
    }),
    simic_hybrid: await db.createRaceName({
        id: "race-names-simic-hybrid",
        male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
        female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
        unisex: [],
        surname: ["Hybrid", "Mutant", "Experiment", "Modified", "Enhanced", "Evolved"]
    }),
    tabaxi: await db.createRaceName({
        id: "race-names-tabaxi",
        male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        unisex: [],
        surname: ["Whiskers", "Purr", "Meow", "Claw", "Fang", "Tail"]
    }),
    thri_kreen: await db.createRaceName({
        id: "race-names-thri-kreen",
        male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        unisex: [],
        surname: ["Manyarms", "Chitin", "Exoskeleton", "Mandible", "Antenna", "Compound"]
    }),
    tiefling: await db.createRaceName({
        id: "race-names-tiefling",
        male: ["Akmenos", "Barakas", "Damakos", "Iados", "Therai", "Vladimir"],
        female: ["Akta", "Bryseis", "Damaia", "Kallista", "Lerissa", "Lilith"],
        unisex: [],
        surname: ["Hellspawn", "Devilborn", "Infernal", "Demon", "Fiend", "Devil"]
    }),
    tortle: await db.createRaceName({
        id: "race-names-tortle",
        male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        unisex: [],
        surname: ["Shellback", "Turtle", "Tortoise", "Carapace", "Shell", "Slow"]
    }),
    triton: await db.createRaceName({
        id: "race-names-triton",
        male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        unisex: [],
        surname: ["Seafoam", "Wavecaller", "Tide", "Ocean", "Sea", "Water"]
    }),
    vedalken: await db.createRaceName({
        id: "race-names-vedalken",
        male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
        female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
        unisex: [],
        surname: ["Mind", "Thought", "Logic", "Reason", "Wisdom", "Knowledge"]
    }),
    warforged: await db.createRaceName({
        id: "race-names-warforged",
        male: ["Cog", "Gear", "Spring", "Piston", "Rivet", "Bolt"],
        female: ["Cog", "Gear", "Spring", "Piston", "Rivet", "Bolt"],
        unisex: [],
        surname: ["Ironworks", "Steelcraft", "Clockwork", "Mechanus", "Gearwright", "Springmaker"]
    }),
    yuan_ti: await db.createRaceName({
        id: "race-names-yuan-ti",
        male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
        unisex: [],
        surname: ["Snakescale", "Serpent", "Viper", "Cobra", "Python", "Constrictor"]
    }),
    };
        // Races
    const race = {
      aarakocra: await db.createRace({
        id: "race-aarakocra",
        name: "Aarakocra",
        slug: "aarakocra",
        description:
          "Birdfolk from the Elemental Plane of Air, Aarakocra are often travelers, expats, refugees, or adventurers. Resembling humanoids in their stature and bipedal movements, they also gain the benefits of a flying speed, slashing talons, and an understanding of the Aarakocra as well as the Auran tongue and writ.",
        speed: "25 feet walking, 50 feet flying",
        age: "Aarakocra reach maturity by age 3. Compared to humans, aarakocra don't usually live longer than 30 years.",
        alignment:
          "Most aarakocra are good and rarely choose sides when it comes to law and chaos. Leaders are sometimes lawful good.",
        heightRange: "5'0\" to 6'4\"",
        weightRange: "90 to 130 lbs",
        alabastriaLore:
          "In Bulsania's mountain peaks and Kuriguer's coastal cliffs, Aarakocra serve as messengers and scouts, their aerial perspective providing crucial intelligence about the harsh landscapes below. These birdfolk often work with the Huntbound Order, using their flight to track dangerous creatures across difficult terrain.",
        playstyle:
          "Excellent mobility and ranged combat specialists. Perfect for players who want aerial superiority and unique movement options.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.aarakocra.id },
            { id: language.auran.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.flight_aarakocra.id },
            { id: raceTrait.talons_aarakocra.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.wis_one.id },
          ],
        },
        namesId: raceNames.aarakocra.id,
      }),
      aasimar: await db.createRace({
        id: "race-aasimar",
        name: "Aasimar",
        slug: "aasimar",
        description:
          "Aasimar are descended from humans and often celestials, reflecting the light and pure good of the divine realm. This goodness is often signified by a celestial mark on their bodies and their undeniable beauty.",
        speed: "30 feet",
        age: "Aasimar mature at the same rate as humans but can live up to 160 years.",
        alignment:
          "Aasimar are inclined toward good alignments. Not all aasimar are of good alignment, but very few are evil.",
        heightRange: "5'4\" to 7'0\"",
        weightRange: "110 to 190 lbs",
        alabastriaLore:
          "Across Skratonia's cities and temples, Aasimar serve as beacons of hope and divine guidance. These celestial-touched individuals often work with clerics and paladins, their healing abilities and divine resistance making them natural leaders in the fight against darkness.",
        playstyle:
          "Divine support and healing specialists. Great for players who want to be the party's moral compass and primary healer.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.celestial.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_aasimar.id },
            { id: raceTrait.celestial_resistance_aasimar.id },
            { id: raceTrait.healing_hands_aasimar.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.cha_two.id }],
        },
        namesId: raceNames.aasimar.id,
      }),
      autognome: await db.createRace({
        id: "race-autognome",
        name: "Autognome",
        slug: "autognome",
        description:
          "Autognomes are small constructs built by gnomes to serve as assistants and companions. They are imbued with a spark of life and sentience, making them more than mere machines.",
        speed: "30 feet",
        age: "Autognomes don't age, but they can be destroyed. They can live indefinitely if properly maintained.",
        alignment:
          "Most autognomes are lawful, following the instructions of their creators or their own internal programming.",
        heightRange: "2'8\" to 3'4\"",
        weightRange: "45 to 49 lbs",
        alabastriaLore:
          "In Alatman's volcanic forges and Maltman's mountain workshops, Autognomes serve as tireless assistants to their gnomish creators. These mechanical beings represent the pinnacle of gnomish engineering, combining magical and technological innovation in Alabastria's most advanced settlements.",
        playstyle:
          "Durable utility specialists with unique construct abilities. Perfect for players who want to be immune to many common threats and have unique roleplay opportunities.",
        defaultCreatureSizeId: creature_size.small.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.gnomish.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.constructed_resilience_autognome.id },
            { id: raceTrait.mechanical_nature_autognome.id },
            { id: raceTrait.sentrys_rest_autognome.id },
            { id: raceTrait.true_life_autognome.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.int_two.id },
            { id: raceAbilityScore.con_one.id },
          ],
        },
        namesId: raceNames.autognome.id,
      }),
      bugbear: await db.createRace({
        id: "race-bugbear",
        name: "Bugbear",
        slug: "bugbear",
        description:
          "Bugbears are large, hairy goblinoids with a talent for stealth and surprise attacks. Despite their intimidating appearance, they can be surprisingly cunning and strategic.",
        speed: "30 feet",
        age: "Bugbears reach adulthood at age 16 and live up to 80 years.",
        alignment:
          "Bugbears are chaotic evil in the wild, but some can be trained to be lawful evil.",
        heightRange: "6'0\" to 7'4\"",
        weightRange: "200 to 272 lbs",
        alabastriaLore:
          "In Katman's swamplands and the darker corners of Alabastria, Bugbears serve as scouts and infiltrators for various factions. Their natural stealth and surprise attack abilities make them valuable assets in the Huntbound Order's more covert operations.",
        playstyle:
          "Stealthy melee combatants with surprise tactics. Great for players who want to be sneaky fighters with extended reach.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.goblin.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_bugbear.id },
            { id: raceTrait.long_limbed_bugbear.id },
            { id: raceTrait.powerful_build_bugbear.id },
            { id: raceTrait.sneaky_bugbear.id },
            { id: raceTrait.surprise_attack_bugbear.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.dex_one.id },
          ],
        },
        namesId: raceNames.bugbear.id,
      }),
      centaur: await db.createRace({
        id: "race-centaur",
        name: "Centaur",
        slug: "centaur",
        description:
          "Centaurs are humanoid creatures with the upper body of a human and the lower body of a horse. They are known for their speed, strength, and connection to nature.",
        speed: "40 feet",
        age: "Centaurs mature and age at the same rate as humans, living about 100 years.",
        alignment:
          "Centaurs are typically chaotic good, valuing freedom and nature.",
        heightRange: "6'2\" to 7'10\"",
        weightRange: "200 to 272 lbs",
        alabastriaLore:
          "On Skratonia's vast plains and in Kuriguer's magical forests, Centaurs serve as messengers, scouts, and guardians of nature. Their speed and connection to the land make them invaluable allies in the Huntbound Order's efforts to protect Alabastria's wilderness.",
        playstyle:
          "Mobile melee combatants with nature connection. Perfect for players who want speed, strength, and natural abilities.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.sylvan.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.charge_centaur.id },
            { id: raceTrait.hooves_centaur.id },
            { id: raceTrait.equine_build_centaur.id },
            { id: raceTrait.survivor_centaur.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.wis_one.id },
          ],
        },
        namesId: raceNames.centaur.id,
      }),
      changeling: await db.createRace({
        id: "race-changeling",
        name: "Changeling",
        slug: "changeling",
        description:
          "Changelings are shapeshifters who can alter their appearance at will. They are often found in urban environments where their abilities allow them to blend in and gather information.",
        speed: "30 feet",
        age: "Changelings mature at the same rate as humans but can live up to 200 years.",
        alignment:
          "Changelings are typically chaotic, as they value personal freedom and adaptability.",
        heightRange: "5'4\" to 7'0\"",
        weightRange: "110 to 190 lbs",
        alabastriaLore:
          "In Skratonia's diverse cities and Kuriguer's cosmopolitan ports, Changelings serve as spies, diplomats, and information brokers. Their shapeshifting abilities make them invaluable assets to the Huntbound Order's intelligence operations.",
        playstyle:
          "Versatile social specialists with infiltration abilities. Perfect for players who want to be masters of disguise and social manipulation.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.any_two.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.shapechanger_changeling.id },
            { id: raceTrait.changeling_instincts_changeling.id },
            { id: raceTrait.divergent_persona_changeling.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.cha_two.id },
            { id: raceAbilityScore.dex_one.id },
          ],
        },
        namesId: raceNames.changeling.id,
      }),
      dhampir: await db.createRace({
        id: "race-dhampir",
        name: "Dhampir",
        slug: "dhampir",
        description:
          "Dhampirs are the offspring of vampires and mortals, inheriting some of their undead parent's abilities while maintaining their humanity. They walk between the worlds of the living and the dead.",
        speed: "35 feet",
        age: "Dhampirs mature at the same rate as humans but can live for centuries.",
        alignment:
          "Dhampirs can be of any alignment, though many struggle with their dark heritage.",
        heightRange: "5'4\" to 7'0\"",
        weightRange: "110 to 190 lbs",
        alabastriaLore:
          "In Alabastria's shadowed corners and among the undead-haunted regions, Dhampirs walk a dangerous path between life and death. Some serve the Huntbound Order as specialists against undead threats, while others struggle with their dark heritage in the world's more accepting communities.",
        playstyle:
          "Mobile combatants with unique feeding mechanics. Great for players who want to play morally complex characters with undead abilities.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.any_one.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_dhampir.id },
            { id: raceTrait.spider_climb_dhampir.id },
            { id: raceTrait.vampiric_bite_dhampir.id },
            { id: raceTrait.deathless_nature_dhampir.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.cha_two.id },
            { id: raceAbilityScore.dex_one.id },
          ],
        },
        namesId: raceNames.dhampir.id,
      }),
      dragonborn: await db.createRace({
        id: "race-dragonborn",
        name: "Dragonborn",
        slug: "dragonborn",
        description:
          "Dragonborn are humanoid dragons, created by dragons or born from dragon eggs. They are proud, honorable, and often seek to prove their worth through great deeds.",
        speed: "30 feet",
        age: "Dragonborn grow quickly, reaching adulthood by age 15 and living to be around 80 years old.",
        alignment:
          "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil.",
        heightRange: "5'6\" to 7'2\"",
        weightRange: "175 to 247 lbs",
        alabastriaLore:
          "In Bulsania's militarized society and across Alabastria's dragon-worshipping regions, Dragonborn serve as elite warriors and leaders. Their draconic heritage and martial prowess make them natural commanders in the Huntbound Order's most dangerous missions.",
        playstyle:
          "Martial combatants with elemental abilities. Perfect for players who want to be proud warriors with draconic powers.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.draconic.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.draconic_ancestry_dragonborn.id },
            { id: raceTrait.breath_weapon_dragonborn.id },
            { id: raceTrait.damage_resistance_dragonborn.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.cha_one.id },
          ],
        },
        namesId: raceNames.dragonborn.id,
      }),
      dwarf: await db.createRace({
        id: "race-dwarf",
        name: "Dwarf",
        slug: "dwarf",
        description:
          "Dwarves are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the hardships of the outside world.",
        speed: "25 feet",
        age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
        alignment:
          "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
        heightRange: "3'8\" to 4'0\"",
        weightRange: "115 to 163 lbs",
        alabastriaLore:
          "In Maltman's mountain strongholds and Alatman's volcanic forges, Dwarves serve as master craftsmen and miners. Their expertise in metalwork and stone construction makes them invaluable allies in the Huntbound Order's efforts to fortify settlements against monstrous threats.",
        playstyle:
          "Durable craftsmen and warriors with resistance to common threats. Perfect for players who want to be tough, practical characters with crafting abilities.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.dwarvish.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_dwarf.id },
            { id: raceTrait.dwarven_resilience_dwarf.id },
            { id: raceTrait.stonecunning_dwarf.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.con_two.id }],
        },
        namesId: raceNames.dwarf.id,
      }),
      elf: await db.createRace({
        id: "race-elf",
        name: "Elf",
        slug: "elf",
        description:
          "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light.",
        speed: "30 feet",
        age: "Elves mature at the same rate as humans physically, but are considered adults around 100 years old. They can live to be 750 years old.",
        alignment:
          "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own.",
        heightRange: "4'6\" to 6'4\"",
        weightRange: "90 to 130 lbs",
        alabastriaLore:
          "In Kuriguer's magical forests and Skratonia's ancient groves, Elves serve as guardians of nature and keepers of ancient wisdom. Their long lives and magical heritage make them natural leaders in the Huntbound Order's efforts to protect Alabastria's natural beauty and magical secrets.",
        playstyle:
          "Graceful and perceptive characters with magical resistance. Perfect for players who want to be agile, wise, and resistant to common magical effects.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.elvish.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_elf.id },
            { id: raceTrait.keen_senses_elf.id },
            { id: raceTrait.fey_ancestry_elf.id },
            { id: raceTrait.trance_elf.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.dex_two.id }],
        },
        namesId: raceNames.elf.id,
      }),
      fairy: await db.createRace({
        id: "race-fairy",
        name: "Fairy",
        slug: "fairy",
        description:
          "Fairies are small, magical humanoids with a deep connection to the Feywild. They are known for their mischievous nature and powerful magic.",
        speed: "30 feet",
        age: "Fairies mature at the same rate as humans but can live for centuries.",
        alignment:
          "Fairies are typically chaotic, as they value personal freedom and creativity.",
        heightRange: "2'6\" to 3'2\"",
        weightRange: "30 to 34 lbs",
        alabastriaLore:
          "In Kuriguer's magical forests and fey-touched areas, Fairies serve as messengers and guardians of the natural world. Their small size and magical abilities make them excellent scouts and spies in the Huntbound Order's operations.",
        playstyle:
          "Tiny magical scouts with flight abilities. Perfect for players who want to be small, magical characters with unique movement options.",
        defaultCreatureSizeId: creature_size.small.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.sylvan.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.fairy_magic_fairy.id },
            { id: raceTrait.flight_fairy.id },
            { id: raceTrait.fey_passage_fairy.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.cha_two.id },
            { id: raceAbilityScore.dex_one.id },
          ],
        },
        namesId: raceNames.fairy.id,
      }),
      firbolg: await db.createRace({
        id: "race-firbolg",
        name: "Firbolg",
        slug: "firbolg",
        description:
          "Firbolgs are gentle giants who live in the deepest forests and serve as guardians of nature. They are known for their wisdom, strength, and connection to the natural world.",
        speed: "30 feet",
        age: "Firbolgs reach adulthood around 30 and can live up to 500 years.",
        alignment:
          "Firbolgs are typically neutral good, valuing nature and protecting the innocent.",
        heightRange: "7'0\" to 8'8\"",
        weightRange: "250 to 322 lbs",
        alabastriaLore:
          "In Kuriguer's deepest forests and Skratonia's ancient groves, Firbolgs serve as guardians of nature and protectors of the innocent. Their gentle strength and natural magic make them powerful allies in the Huntbound Order's efforts to protect Alabastria's wilderness.",
        playstyle:
          "Gentle giants with nature magic and stealth abilities. Perfect for players who want to be strong, wise characters with unique magical abilities.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.giant.id },
            { id: language.elvish.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.firbolg_magic_firbolg.id },
            { id: raceTrait.hidden_step_firbolg.id },
            { id: raceTrait.powerful_build_firbolg.id },
            { id: raceTrait.speech_of_beast_and_leaf_firbolg.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.wis_two.id },
            { id: raceAbilityScore.str_one.id },
          ],
        },
        namesId: raceNames.firbolg.id,
      }),
      genasi: await db.createRace({
        id: "race-genasi",
        name: "Genasi",
        slug: "genasi",
        description:
          "Genasi are humanoids with a deep connection to elemental forces. They are born when mortals and elementals interbreed, resulting in beings with elemental powers.",
        speed: "30 feet",
        age: "Genasi mature at the same rate as humans but can live up to 120 years.",
        alignment:
          "Genasi can be of any alignment, though they often reflect the nature of their elemental heritage.",
        heightRange: "5'4\" to 7'0\"",
        weightRange: "110 to 190 lbs",
        alabastriaLore:
          "In Kuriguer's elemental hotspots and Alatman's volcanic regions, Genasi serve as elemental specialists and magical researchers. Their elemental heritage and magical abilities make them valuable assets in the Huntbound Order's efforts to understand and control Alabastria's magical phenomena.",
        playstyle:
          "Elemental magic users with unique resistances. Perfect for players who want to be magical characters with elemental themes.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.primordial.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.elemental_resistance_genasi.id },
            { id: raceTrait.elemental_magic_genasi.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.con_two.id }],
        },
        namesId: raceNames.genasi.id,
      }),
      gnome: await db.createRace({
        id: "race-gnome",
        name: "Gnome",
        slug: "gnome",
        description:
          "Small, curious folk with a natural affinity for magic and invention. Gnomes are known for their intelligence, curiosity, and love of knowledge.",
        speed: "25 feet",
        age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
        alignment:
          "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers.",
        heightRange: "3'0\" to 3'6\"",
        weightRange: "35 to 45 lbs",
        alabastriaLore:
          "Gnomes in Alabastria are found primarily in the magical academies of Kuriguer, where their natural curiosity and magical aptitude make them excellent researchers and inventors. They often work alongside Artificers to create magical devices and study the strange phenomena of the world.",
        playstyle:
          "Intelligent spellcasters and inventors who excel at problem-solving and magical research. Perfect for players who enjoy creative solutions and magical experimentation.",
        defaultCreatureSizeId: creature_size.small.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.gnomish.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_gnome.id },
            { id: raceTrait.gnome_cunning_gnome.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.int_two.id }],
        },
        namesId: raceNames.gnome.id,
      }),
      giff: await db.createRace({
        id: "race-giff",
        name: "Giff",
        slug: "giff",
        description:
          "Hippopotamus-like humanoids known for their strength, honor, and love of firearms and explosives. Giff are disciplined warriors with a strong sense of duty.",
        speed: "30 feet",
        age: "Giff mature at the same rate as humans and live about as long.",
        alignment:
          "Giff are typically lawful, tending toward good. They value honor, discipline, and order.",
        heightRange: "6'0\" to 7'0\"",
        weightRange: "280 to 340 lbs",
        alabastriaLore:
          "Giff in Alabastria are found primarily in the militarized regions of Bulsania, where their disciplined nature and combat prowess make them excellent soldiers and guards. They often serve in the Huntbound Order as elite warriors.",
        playstyle:
          "Strong warriors who excel at ranged combat with firearms and heavy weapons. Perfect for players who want to be disciplined soldiers with advanced weaponry.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.giff.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.firearms_mastery_giff.id },
            { id: raceTrait.hippo_build_giff.id },
            { id: raceTrait.natural_armor_giff.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.con_one.id },
          ],
        },
        namesId: raceNames.giff.id,
      }),
      goblin: await db.createRace({
        id: "race-goblin",
        name: "Goblin",
        slug: "goblin",
        description:
          "Small, cunning humanoids known for their stealth, speed, and opportunistic nature. Goblins are survivors who excel at hit-and-run tactics.",
        speed: "30 feet",
        age: "Goblins reach adulthood at age 8 and live up to 60 years.",
        alignment:
          "Goblins are typically neutral evil, as they care only for their own needs. A few goblins might rise above their origins, however, proving to be heroes worthy of legend.",
        heightRange: "3'0\" to 3'6\"",
        weightRange: "35 to 45 lbs",
        alabastriaLore:
          "Goblins in Alabastria are found in the swamps and wilderness of Kamalatman, where they form small tribes and communities. They are often viewed with suspicion by other races, but some have proven themselves as valuable allies and members of the Huntbound Order.",
        playstyle:
          "Fast and stealthy characters who excel at hit-and-run tactics and survival. Perfect for players who want to be quick and cunning.",
        defaultCreatureSizeId: creature_size.small.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.goblin.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_goblin.id },
            { id: raceTrait.fury_of_the_small_goblin.id },
            { id: raceTrait.nimble_escape_goblin.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.con_one.id },
          ],
        },
        namesId: raceNames.goblin.id,
      }),
      goliath: await db.createRace({
        id: "race-goliath",
        name: "Goliath",
        slug: "goliath",
        description:
          "Tall, muscular humanoids with gray skin and a natural resistance to cold. Goliaths are competitive and value strength and endurance.",
        speed: "30 feet",
        age: "Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.",
        alignment:
          "Goliaths tend toward neutral alignments. They value individual freedom and self-reliance.",
        heightRange: "7'0\" to 8'0\"",
        weightRange: "280 to 340 lbs",
        alabastriaLore:
          "Goliaths in Alabastria are found primarily in the mountain regions of Bulsania and Kamalatman, where their strength and endurance make them excellent climbers and warriors. They often serve as guides and protectors in the harsh mountain terrain.",
        playstyle:
          "Strong and tough characters who excel at physical challenges and combat. Perfect for players who want to be powerful warriors with natural resilience.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.giant.id }, { id: language.common_sign_language.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.natural_athlete_goliath.id },
            { id: raceTrait.stones_endurance_goliath.id },
            { id: raceTrait.powerful_build_goliath.id },
            { id: raceTrait.mountain_born_goliath.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.con_one.id },
          ],
        },
        namesId: raceNames.goliath.id,
      }),
      hadozee: await db.createRace({
        id: "race-hadozee",
        name: "Hadozee",
        slug: "hadozee",
        description:
          "Simian humanoids with patagial skin flaps between their arms and legs, Hadozee are natural climbers, sailors, and gliders. They are often called “deck apes,” moving with agility through ships’ rigging or across rugged terrain. Their prehensile feet grant extra dexterity, and in the air they can glide to safety from falls. In Skratonia, they are known for navigating between open plains and sky-scoured plateaus, often serving as scouts, sailors, or wanderers between towns.",
        speed: "30 feet walking; climbing speed equal to walking speed",
        age: "Hadozee mature at about the same rate as humans (late teens) and often live somewhat longer, up to around 90 years.",
        alignment:
          "Tending toward neutrality, often mercenary or wanderlust-driven. Exceptions lean more chaotic than lawful and more often good than evil.",
        heightRange: "5′0″ to 6′4″",
        weightRange: "150 to 200 lbs",
        alabastriaLore:
          "In the plains and sky-scrub plateaus of Skratonia, Hadozee make their homes near cliff-edged oases and rigged lookout towers, gliding from heights to scout the terrain below. Their prehensile feet let them navigate planks, ropes, and the rigging of ships or nomadic caravans with ease. Many join the wind-flecked trading fleets of Skratonia, serving aboard sail-ships or sky-vessels, guiding them along trade routes between major towns carved across open plains.",
        playstyle:
          "Mobile scouts and utility characters. Good for players who like vertical movement (glide), creative positioning, and surviving falls. Excellent with classes that benefit from mobility, dexterity, or reactions.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.hadozee.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.dexterous_feet_hadozee.id },
            { id: raceTrait.glide_hadozee.id },
            { id: raceTrait.hadozee_dodge_hadozee.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.any_one.id },
          ],
        },
        namesId: raceNames.hadozee.id,
      }),
      half_elf: await db.createRace({
        id: "race-half-elf",
        name: "Half-Elf",
        slug: "half-elf",
        description:
          "The offspring of humans and elves, combining the best traits of both races. Half-elves are versatile and charismatic, often serving as diplomats and mediators.",
        speed: "30 feet",
        age: "Half-elves mature at the same rate humans do and reach adulthood around age 20. They live much longer than humans, often exceeding 180 years.",
        alignment:
          "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Half-Elves in Alabastria are found throughout all continents, often serving as diplomats and mediators between different races. Their mixed heritage makes them valuable in the complex political landscape of the world.",
        playstyle:
          "Versatile characters who excel at social interaction and can adapt to many different situations. Perfect for players who want flexibility and charisma.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.elvish.id },
            { id: language.any_one.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_half_elf.id },
            { id: raceTrait.fey_ancestry_half_elf.id },
            { id: raceTrait.skill_versatility_half_elf.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.cha_two.id },
            { id: raceAbilityScore.any_one.id },
          ],
        },
        namesId: raceNames.half_elf.id,
      }),
      half_orc: await db.createRace({
        id: "race-half-orc",
        name: "Half-Orc",
        slug: "half-orc",
        description:
          "The offspring of humans and orcs, combining human versatility with orcish strength and endurance. Half-orcs are often found on the fringes of society.",
        speed: "30 feet",
        age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
        alignment:
          "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
        heightRange: "5'6\" to 6'6\"",
        weightRange: "150 to 220 lbs",
        alabastriaLore:
          "Half-Orcs in Alabastria are found primarily in the frontier regions of Kamalatman and the borderlands of Skratonia, where their strength and endurance make them valuable as guards and warriors. They often face discrimination but have proven themselves as capable members of the Huntbound Order.",
        playstyle:
          "Strong and tough characters who excel at combat and survival. Perfect for players who want to be powerful warriors with natural resilience.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.orcish.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_half_orc.id },
            { id: raceTrait.relentless_endurance_half_orc.id },
            { id: raceTrait.savage_attacks_half_orc.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.con_one.id },
          ],
        },
        namesId: raceNames.half_orc.id,
      }),
      halfling: await db.createRace({
        id: "race-halfling",
        name: "Halfling",
        slug: "halfling",
        description:
          "Small, cheerful folk known for their luck, courage, and love of comfort. Halflings are optimistic and resourceful, making the best of any situation.",
        speed: "25 feet",
        age: "Halflings reach adulthood at age 20 and live up to 150 years.",
        alignment:
          "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
        heightRange: "2'7\" to 3'3\"",
        weightRange: "30 to 40 lbs",
        alabastriaLore:
          "Halflings in Alabastria are found primarily in the fertile plains of Skratonia, where their agricultural skills and community values make them excellent farmers and merchants. They often serve as the backbone of the region's economy and are known for their hospitality.",
        playstyle:
          "Lucky and brave characters who excel at avoiding danger and supporting their communities. Perfect for players who want to be optimistic and resourceful.",
        defaultCreatureSizeId: creature_size.small.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.halfling.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.lucky_halfling.id },
            { id: raceTrait.brave_halfling.id },
            { id: raceTrait.halfling_nimbleness_halfling.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.dex_two.id }],
        },
        namesId: raceNames.halfling.id,
      }),
      harengon: await db.createRace({
        id: "race-harengon",
        name: "Harengon",
        slug: "harengon",
        description:
          "Rabbit-like humanoids known for their agility, luck, and connection to the Feywild. Harengon are quick, nimble, and often have a mischievous streak.",
        speed: "30 feet",
        age: "Harengon mature at the same rate as humans and live about as long.",
        alignment:
          "Harengon are typically chaotic, tending toward good. They value freedom and personal expression.",
        heightRange: "3'0\" to 5'0\"",
        weightRange: "35 to 85 lbs",
        alabastriaLore:
          "Harengon in Alabastria are found primarily in the magical forests of Kuriguer, where their fey heritage and agility make them excellent scouts and messengers. They often serve as couriers for the Huntbound Order and guides through dangerous terrain.",
        playstyle:
          "Agile and lucky characters who excel at movement and avoiding danger. Perfect for players who want to be quick and nimble.",
        defaultCreatureSizeId: creature_size.small.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.sylvan.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.hare_trigger_harengon.id },
            { id: raceTrait.leporine_senses_harengon.id },
            { id: raceTrait.lucky_footwork_harengon.id },
            { id: raceTrait.rabbit_hop_harengon.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.any_one.id },
          ],
        },
        namesId: raceNames.harengon.id,
      }),
      hexblood: await db.createRace({
        id: "race-hexblood",
        name: "Hexblood",
        slug: "hexblood",
        description:
          "Humanoids touched by hag magic, bearing the mark of a hag's influence. Hexbloods are often outcasts but possess unique magical abilities.",
        speed: "30 feet",
        age: "Hexbloods mature at the same rate as humans but can live up to 200 years due to their hag heritage.",
        alignment:
          "Hexbloods can be of any alignment, but many lean toward chaotic due to their outsider status.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Hexbloods in Alabastria are found in the darker regions of Kuriguer's forests and the swamps of Kamalatman, where their hag-touched nature makes them both feared and sought after for their unique magical abilities. They often serve as scouts and information gatherers for the Huntbound Order.",
        playstyle:
          "Magical characters with unique abilities and outsider status. Perfect for players who want to be mysterious and magical.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.any_one.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_hexblood.id },
            { id: raceTrait.hex_magic_hexblood.id },
            { id: raceTrait.eerie_token_hexblood.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.any_one.id }],
        },
        namesId: raceNames.hexblood.id,
      }),
      hobgoblin: await db.createRace({
        id: "race-hobgoblin",
        name: "Hobgoblin",
        slug: "hobgoblin",
        description:
          "Larger, more disciplined cousins of goblins known for their military prowess and strict codes of honor. Hobgoblins are organized warriors who value discipline and order.",
        speed: "30 feet",
        age: "Hobgoblins mature at the same rate as humans and live about as long.",
        alignment:
          "Hobgoblins are typically lawful evil, as they care only for their own needs and are willing to use any means to achieve their goals.",
        heightRange: "5'6\" to 6'6\"",
        weightRange: "150 to 220 lbs",
        alabastriaLore:
          "Hobgoblins in Alabastria are found in the militarized regions of Bulsania and the organized settlements of Kamalatman, where their disciplined nature and military training make them excellent soldiers and guards. Some have proven themselves as valuable members of the Huntbound Order.",
        playstyle:
          "Disciplined warriors who excel at organized combat and teamwork. Perfect for players who want to be military-focused characters.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.goblin.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_hobgoblin.id },
            { id: raceTrait.martial_training_hobgoblin.id },
            { id: raceTrait.saving_face_hobgoblin.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_two.id },
            { id: raceAbilityScore.int_one.id },
          ],
        },
        namesId: raceNames.hobgoblin.id,
      }),
      human: await db.createRace({
        id: "race-human",
        name: "Human",
        slug: "human",
        description:
          "The most adaptable and ambitious of the common races, humans are known for their versatility and drive to achieve greatness. They are found in every corner of the world.",
        speed: "30 feet",
        age: "Humans reach adulthood in their late teens and live less than a century.",
        alignment:
          "Humans tend toward no particular alignment. The best and the worst are found among them.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Humans in Alabastria are found throughout all continents, serving as the backbone of most civilizations. Their adaptability and ambition have made them leaders in politics, trade, and the Huntbound Order. They are known for their ability to work with other races and their drive to achieve greatness.",
        playstyle:
          "Versatile characters who can excel at any role. Perfect for players who want maximum flexibility and adaptability.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.any_one.id },
          ],
        },
        traits: {
          connect: [{ id: raceTrait.extra_language_human.id }],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.any_one.id }],
        },
        namesId: raceNames.human.id,
      }),
      kalashtar: await db.createRace({
        id: "race-kalashtar",
        name: "Kalashtar",
        slug: "kalashtar",
        description:
          "Humanoids with a unique connection to the dream plane, sharing their consciousness with quori spirits. Kalashtar are wise, empathetic, and possess psionic abilities.",
        speed: "30 feet",
        age: "Kalashtar mature at the same rate as humans and live about as long.",
        alignment:
          "Kalashtar are typically lawful good, as they are guided by the wisdom of their quori spirits.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Kalashtar in Alabastria are found primarily in the magical regions of Kuriguer, where their psionic abilities and connection to the dream plane make them excellent scholars and spiritual guides. They often serve as advisors to the Huntbound Order and other organizations.",
        playstyle:
          "Psionic characters with telepathic abilities and spiritual wisdom. Perfect for players who want to be wise and empathetic with unique mental powers.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.quori.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.dual_mind_kalashtar.id },
            { id: raceTrait.mental_discipline_kalashtar.id },
            { id: raceTrait.mind_link_kalashtar.id },
            { id: raceTrait.severed_from_dreams_kalashtar.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.wis_two.id },
            { id: raceAbilityScore.any_one.id },
          ],
        },
        namesId: raceNames.kalashtar.id,
      }),
      kender: await db.createRace({
        id: "race-kender",
        name: "Kender",
        slug: "kender",
        description:
          "Small, curious humanoids known for their fearlessness, curiosity, and tendency to 'borrow' things. Kender are brave, optimistic, and often find themselves in trouble.",
        speed: "25 feet",
        age: "Kender mature at the same rate as halflings, reaching adulthood around 20 and living up to 150 years.",
        alignment:
          "Kender are typically chaotic good, as they value freedom and helping others.",
        heightRange: "3'0\" to 3'6\"",
        weightRange: "35 to 45 lbs",
        alabastriaLore:
          "Kender in Alabastria are found throughout all continents, often serving as scouts and adventurers. Their fearlessness and curiosity make them excellent for dangerous missions, though their tendency to 'borrow' things can cause problems.",
        playstyle:
          "Fearless and curious characters who excel at exploration and social interaction. Perfect for players who want to be brave and optimistic.",
        defaultCreatureSizeId: creature_size.small.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.kenderspeak.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.fearless_kender.id },
            { id: raceTrait.kender_curiosity_kender.id },
            { id: raceTrait.taunt_kender.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.cha_one.id },
          ],
        },
        namesId: raceNames.kender.id,
      }),
      kenku: await db.createRace({
        id: "race-kenku",
        name: "Kenku",
        slug: "kenku",
        description:
          "Raven-like humanoids cursed to mimic sounds and voices rather than speak original thoughts. Kenku are clever, stealthy, and excellent at imitation.",
        speed: "30 feet",
        age: "Kenku reach adulthood at 12 and live around 60 years.",
        alignment:
          "Kenku are typically chaotic neutral, as they are driven by their own desires and instincts.",
        heightRange: "5'0\" to 5'6\"",
        weightRange: "90 to 120 lbs",
        alabastriaLore:
          "Kenku in Alabastria are found in the cities and wilderness of all continents, often serving as spies, messengers, and information gatherers. Their mimicry abilities make them valuable for the Huntbound Order's intelligence operations.",
        playstyle:
          "Stealthy and clever characters who excel at imitation and information gathering. Perfect for players who want to be sneaky and resourceful.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.auran.id }, { id: language.common_sign_language.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.expert_forgery_kenku.id },
            { id: raceTrait.kenku_training_kenku.id },
            { id: raceTrait.mimicry_kenku.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.wis_one.id },
          ],
        },
        namesId: raceNames.kenku.id,
      }),
      kobold: await db.createRace({
        id: "race-kobold",
        name: "Kobold",
        slug: "kobold",
        description:
          "Small, reptilian humanoids known for their cowardice, cunning, and pack tactics. Kobolds are weak individually but dangerous in groups.",
        speed: "30 feet",
        age: "Kobolds mature quickly, reaching adulthood by age 6, and can live up to 120 years.",
        alignment:
          "Kobolds are typically lawful evil, as they care only for their own needs and are willing to use any means to achieve their goals.",
        heightRange: "2'0\" to 2'6\"",
        weightRange: "25 to 35 lbs",
        alabastriaLore:
          "Kobolds in Alabastria are found in the underground regions of Kamalatman and the mountain caves of Bulsania, where they form small communities and serve as scouts and miners. Some have proven themselves as valuable members of the Huntbound Order.",
        playstyle:
          "Small and cunning characters who excel at teamwork and survival. Perfect for players who want to be clever and resourceful.",
        defaultCreatureSizeId: creature_size.small.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.draconic.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_kobold.id },
            { id: raceTrait.grovel_cower_and_beg_kobold.id },
            { id: raceTrait.pack_tactics_kobold.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.dex_two.id }],
        },
        namesId: raceNames.kobold.id,
      }),
      leonin: await db.createRace({
        id: "race-leonin",
        name: "Leonin",
        slug: "leonin",
        description:
          "Lion-like humanoids known for their strength, courage, and regal bearing. Leonin are proud warriors who value honor and strength.",
        speed: "35 feet",
        age: "Leonin mature at the same rate as humans and live about as long.",
        alignment:
          "Leonin are typically lawful good, as they value honor, justice, and protecting the weak.",
        heightRange: "5'6\" to 6'6\"",
        weightRange: "150 to 220 lbs",
        alabastriaLore:
          "Leonin in Alabastria are found primarily in the plains of Skratonia and the mountain regions of Bulsania, where their strength and courage make them excellent warriors and leaders. They often serve as commanders in the Huntbound Order and other military organizations.",
        playstyle:
          "Strong and courageous characters who excel at combat and leadership. Perfect for players who want to be powerful warriors with regal bearing.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.leonin.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_leonin.id },
            { id: raceTrait.claws_leonin.id },
            { id: raceTrait.hunters_instincts_leonin.id },
            { id: raceTrait.daunting_roar_leonin.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.con_one.id },
          ],
        },
        namesId: raceNames.leonin.id,
      }),
      lizardfolk: await db.createRace({
        id: "race-lizardfolk",
        name: "Lizardfolk",
        slug: "lizardfolk",
        description:
          "Reptilian humanoids known for their natural armor, swimming abilities, and practical nature. Lizardfolk are survivalists who value efficiency and strength.",
        speed: "30 feet",
        age: "Lizardfolk reach adulthood around 14 and live up to 60 years.",
        alignment:
          "Lizardfolk are typically neutral, as they care only for their own survival and the survival of their tribe.",
        heightRange: "5'6\" to 6'6\"",
        weightRange: "150 to 220 lbs",
        alabastriaLore:
          "Lizardfolk in Alabastria are found primarily in the swamps and wetlands of Kamalatman, where their natural abilities make them excellent hunters and survivalists. They often serve as guides and scouts for the Huntbound Order in difficult terrain.",
        playstyle:
          "Survivalist characters who excel at combat and wilderness survival. Perfect for players who want to be practical and efficient.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.draconic.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.bite_lizardfolk.id },
            { id: raceTrait.cunning_artisan_lizardfolk.id },
            { id: raceTrait.hold_breath_lizardfolk.id },
            { id: raceTrait.natural_armor_lizardfolk.id },
            { id: raceTrait.hungry_jaws_lizardfolk.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_two.id },
            { id: raceAbilityScore.wis_one.id },
          ],
        },
        namesId: raceNames.lizardfolk.id,
      }),
      loxodon: await db.createRace({
        id: "race-loxodon",
        name: "Loxodon",
        slug: "loxodon",
        description:
          "Elephant-like humanoids known for their strength, wisdom, and natural armor. Loxodon are patient, wise, and have excellent memories.",
        speed: "30 feet",
        age: "Loxodon mature at the same rate as humans and live about as long.",
        alignment:
          "Loxodon are typically lawful good, as they value order, justice, and protecting others.",
        heightRange: "6'0\" to 7'0\"",
        weightRange: "280 to 340 lbs",
        alabastriaLore:
          "Loxodon in Alabastria are found primarily in the plains of Skratonia and the mountain regions of Bulsania, where their strength and wisdom make them excellent leaders and protectors. They often serve as advisors and commanders in the Huntbound Order.",
        playstyle:
          "Strong and wise characters who excel at leadership and protection. Perfect for players who want to be patient and powerful.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.loxodon.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.natural_armor_loxodon.id },
            { id: raceTrait.powerful_build_loxodon.id },
            { id: raceTrait.trunk_loxodon.id },
            { id: raceTrait.keen_smell_loxodon.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_two.id },
            { id: raceAbilityScore.wis_one.id },
          ],
        },
        namesId: raceNames.loxodon.id,
      }),
      minotaur: await db.createRace({
        id: "race-minotaur",
        name: "Minotaur",
        slug: "minotaur",
        description:
          "Bull-like humanoids known for their strength, horns, and connection to labyrinths. Minotaurs are powerful warriors with a natural sense of direction.",
        speed: "30 feet",
        age: "Minotaurs mature at the same rate as humans and live about as long.",
        alignment:
          "Minotaurs are typically chaotic neutral, as they value freedom and personal strength.",
        heightRange: "6'0\" to 7'0\"",
        weightRange: "200 to 280 lbs",
        alabastriaLore:
          "Minotaurs in Alabastria are found primarily in the mountain regions of Bulsania and the underground areas of Kamalatman, where their strength and sense of direction make them excellent guides and warriors. They often serve as protectors and scouts for the Huntbound Order.",
        playstyle:
          "Strong and powerful characters who excel at combat and navigation. Perfect for players who want to be powerful warriors with unique abilities.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.minotaur.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.horns_minotaur.id },
            { id: raceTrait.goring_rush_minotaur.id },
            { id: raceTrait.hammering_horns_minotaur.id },
            { id: raceTrait.labyrinthine_recall_minotaur.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.con_one.id },
          ],
        },
        namesId: raceNames.minotaur.id,
      }),
      orc: await db.createRace({
        id: "race-orc",
        name: "Orc",
        slug: "orc",
        description:
          "Strong, aggressive humanoids known for their physical prowess and tribal culture. Orcs are fierce warriors who value strength and honor.",
        speed: "30 feet",
        age: "Orcs mature a little faster than humans, reaching adulthood around age 14, and rarely live longer than 75 years.",
        alignment:
          "Orcs are typically chaotic evil, as they care only for their own needs and are willing to use any means to achieve their goals.",
        heightRange: "5'6\" to 6'6\"",
        weightRange: "150 to 220 lbs",
        alabastriaLore:
          "Orcs in Alabastria are found primarily in the frontier regions of Kamalatman and the borderlands of Skratonia, where their strength and aggression make them valuable as warriors and guards. Some have proven themselves as capable members of the Huntbound Order.",
        playstyle:
          "Strong and aggressive characters who excel at combat and physical challenges. Perfect for players who want to be powerful warriors.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.orcish.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_orc.id },
            { id: raceTrait.aggressive_orc.id },
            { id: raceTrait.powerful_build_orc.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.con_one.id },
          ],
        },
        namesId: raceNames.orc.id,
      }),
      owlin: await db.createRace({
        id: "race-owlin",
        name: "Owlin",
        slug: "owlin",
        description:
          "Owl-like humanoids known for their flight, stealth, and keen senses. Owlin are wise, stealthy, and have excellent night vision.",
        speed: "30 feet",
        age: "Owlin mature at the same rate as humans and live about as long.",
        alignment:
          "Owlin are typically neutral good, as they value wisdom and helping others.",
        heightRange: "3'0\" to 5'0\"",
        weightRange: "35 to 85 lbs",
        alabastriaLore:
          "Owlin in Alabastria are found primarily in the forests of Kuriguer and the mountain regions of Bulsania, where their flight and stealth abilities make them excellent scouts and messengers. They often serve as aerial reconnaissance for the Huntbound Order.",
        playstyle:
          "Flying and stealthy characters who excel at reconnaissance and night operations. Perfect for players who want to be wise and mobile.",
        defaultCreatureSizeId: creature_size.small.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.owlin.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_owlin.id },
            { id: raceTrait.flight_owlin.id },
            { id: raceTrait.keen_senses_owlin.id },
            { id: raceTrait.silent_feathers_owlin.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.wis_one.id },
          ],
        },
        namesId: raceNames.owlin.id,
      }),
      plasmoid: await db.createRace({
        id: "race-plasmoid",
        name: "Plasmoid",
        slug: "plasmoid",
        description:
          "Amorphous humanoids made of living ooze, capable of changing their shape and squeezing through tight spaces. Plasmoids are adaptable and resilient.",
        speed: "30 feet",
        age: "Plasmoids mature at the same rate as humans and live about as long.",
        alignment:
          "Plasmoids can be of any alignment, as they are highly adaptable to their environment.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Plasmoids in Alabastria are found in the swamps and underground regions of Kamalatman, where their amorphous nature makes them excellent infiltrators and scouts. They often serve as spies and information gatherers for the Huntbound Order.",
        playstyle:
          "Adaptable and resilient characters who excel at infiltration and survival. Perfect for players who want to be flexible and unique.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.any_one.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.amorphous_plasmoid.id },
            { id: raceTrait.darkvision_plasmoid.id },
            { id: raceTrait.hold_breath_plasmoid.id },
            { id: raceTrait.natural_reach_plasmoid.id },
            { id: raceTrait.shape_self_plasmoid.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_two.id },
            { id: raceAbilityScore.any_one.id },
          ],
        },
        namesId: raceNames.plasmoid.id,
      }),
      reborn: await db.createRace({
        id: "race-reborn",
        name: "Reborn",
        slug: "reborn",
        description:
          "Humanoids who have died and returned to life, bearing the marks of their death and possessing unique abilities. Reborn are often outcasts but have unique perspectives on life and death.",
        speed: "30 feet",
        age: "Reborn don't age naturally and can live indefinitely, though their original race's lifespan may still apply.",
        alignment:
          "Reborn can be of any alignment, as their death and rebirth often changes their perspective on life.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Reborn in Alabastria are found throughout all continents, often serving as advisors and guides due to their unique perspective on life and death. They often work with the Huntbound Order as spiritual advisors and those who understand the nature of mortality.",
        playstyle:
          "Unique characters with death-defying abilities and unique perspectives. Perfect for players who want to be mysterious and otherworldly.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.any_one.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.ancestral_legacy_reborn.id },
            { id: raceTrait.deathless_nature_reborn.id },
            { id: raceTrait.knowledge_from_a_past_life_reborn.id },
            { id: raceTrait.souls_gift_reborn.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [{ id: raceAbilityScore.any_one.id }],
        },
        namesId: raceNames.reborn.id,
      }),
      satyr: await db.createRace({
        id: "race-satyr",
        name: "Satyr",
        slug: "satyr",
        description:
          "Fey humanoids with goat-like features known for their revelry, music, and connection to nature. Satyrs are joyful, musical, and have a strong connection to the Feywild.",
        speed: "35 feet",
        age: "Satyrs mature at the same rate as humans but can live up to 200 years.",
        alignment:
          "Satyrs are typically chaotic good, as they value freedom and joy.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Satyrs in Alabastria are found primarily in the magical forests of Kuriguer, where their fey nature and musical abilities make them excellent entertainers and guides. They often serve as bards and entertainers for the Huntbound Order.",
        playstyle:
          "Joyful and musical characters who excel at entertainment and social interaction. Perfect for players who want to be charismatic and fun-loving.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.sylvan.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.fey_satyr.id },
            { id: raceTrait.ram_satyr.id },
            { id: raceTrait.magic_resistance_satyr.id },
            { id: raceTrait.mirthful_leaps_satyr.id },
            { id: raceTrait.reveler_satyr.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.cha_one.id },
          ],
        },
        namesId: raceNames.satyr.id,
      }),
      shifter: await db.createRace({
        id: "race-shifter",
        name: "Shifter",
        slug: "shifter",
        description:
          "Humanoids with the ability to partially transform into their animal totems. Shifters are connected to nature and have enhanced senses and abilities.",
        speed: "30 feet",
        age: "Shifters mature at the same rate as humans and live about as long.",
        alignment:
          "Shifters are typically neutral, as they are driven by their animal instincts and personal desires.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Shifters in Alabastria are found throughout all continents, often serving as scouts and rangers due to their animal-like abilities. They often work with the Huntbound Order as trackers and wilderness guides.",
        playstyle:
          "Nature-connected characters with animal-like abilities and enhanced senses. Perfect for players who want to be wild and instinctive.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.any_one.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_shifter.id },
            { id: raceTrait.shifting_shifter.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.any_one.id },
          ],
        },
        namesId: raceNames.shifter.id,
      }),
      simic_hybrid: await db.createRace({
        id: "race-simic-hybrid",
        name: "Simic Hybrid",
        slug: "simic-hybrid",
        description:
          "Humanoids who have been enhanced with animal traits through magical experimentation. Simic Hybrids are unique individuals with both human and animal characteristics.",
        speed: "30 feet",
        age: "Simic Hybrids mature at the same rate as humans and live about as long.",
        alignment:
          "Simic Hybrids can be of any alignment, as their enhancements don't determine their moral outlook.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Simic Hybrids in Alabastria are found primarily in the magical academies of Kuriguer, where their unique enhancements make them valuable for research and experimentation. They often serve as test subjects and researchers for the Huntbound Order.",
        playstyle:
          "Enhanced characters with unique animal traits and abilities. Perfect for players who want to be unique and experimental.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.any_one.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.animal_enhancement_simic_hybrid.id },
            { id: raceTrait.darkvision_simic_hybrid.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_two.id },
            { id: raceAbilityScore.any_one.id },
          ],
        },
        namesId: raceNames.simic_hybrid.id,
      }),
      tabaxi: await db.createRace({
        id: "race-tabaxi",
        name: "Tabaxi",
        slug: "tabaxi",
        description:
          "Cat-like humanoids known for their agility, curiosity, and love of shiny objects. Tabaxi are graceful, stealthy, and have excellent reflexes.",
        speed: "30 feet",
        age: "Tabaxi mature at the same rate as humans and have lifespans equivalent to humans.",
        alignment:
          "Tabaxi are typically chaotic good, as they value freedom and helping others.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Tabaxi in Alabastria are found throughout all continents, often serving as scouts and messengers due to their agility and curiosity. They often work with the Huntbound Order as trackers and information gatherers.",
        playstyle:
          "Agile and curious characters who excel at stealth and exploration. Perfect for players who want to be graceful and inquisitive.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.tabaxi.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_tabaxi.id },
            { id: raceTrait.feline_agility_tabaxi.id },
            { id: raceTrait.cats_claws_tabaxi.id },
            { id: raceTrait.cats_talent_tabaxi.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.cha_one.id },
          ],
        },
        namesId: raceNames.tabaxi.id,
      }),
      thri_kreen: await db.createRace({
        id: "race-thri-kreen",
        name: "Thri-kreen",
        slug: "thri-kreen",
        description:
          "Insectoid humanoids with four arms and a chitinous exoskeleton. Thri-kreen are fast, agile, and have unique physical abilities.",
        speed: "30 feet",
        age: "Thri-kreen mature at the same rate as humans and live about as long.",
        alignment:
          "Thri-kreen are typically lawful neutral, as they value order and efficiency.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Thri-kreen in Alabastria are found primarily in the desert regions of Kamalatman and the mountain regions of Bulsania, where their unique abilities make them excellent scouts and warriors. They often serve as elite operatives for the Huntbound Order.",
        playstyle:
          "Unique insectoid characters with multiple arms and special abilities. Perfect for players who want to be alien and efficient.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.thri_kreen.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.chameleon_carapace_thri_kreen.id },
            { id: raceTrait.darkvision_thri_kreen.id },
            { id: raceTrait.extra_arms_thri_kreen.id },
            { id: raceTrait.sleepless_thri_kreen.id },
            { id: raceTrait.thri_kreen_weapon_training_thri_kreen.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_two.id },
            { id: raceAbilityScore.wis_one.id },
          ],
        },
        namesId: raceNames.thri_kreen.id,
      }),
      tiefling: await db.createRace({
        id: "race-tiefling",
        name: "Tiefling",
        slug: "tiefling",
        description:
          "Humanoids with infernal heritage, bearing the mark of their fiendish ancestors. Tieflings are often outcasts but possess unique magical abilities.",
        speed: "30 feet",
        age: "Tieflings mature at the same rate as humans but live a few years longer, up to 120 years.",
        alignment:
          "Tieflings are typically chaotic neutral, as they are driven by their own desires and instincts.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities. They often work with the Huntbound Order as magical specialists and those who understand the nature of fiends.",
        playstyle:
          "Magical characters with infernal heritage and unique abilities. Perfect for players who want to be mysterious and magical.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.infernal.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_tiefling.id },
            { id: raceTrait.hellish_resistance_tiefling.id },
            { id: raceTrait.infernal_legacy_tiefling.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.cha_two.id },
            { id: raceAbilityScore.int_one.id },
          ],
        },
        namesId: raceNames.tiefling.id,
      }),
      tortle: await db.createRace({
        id: "race-tortle",
        name: "Tortle",
        slug: "tortle",
        description:
          "Turtle-like humanoids known for their natural armor and connection to water. Tortles are wise, patient, and have excellent defensive abilities.",
        speed: "30 feet",
        age: "Tortles reach adulthood by age 15 and live to be around 50 years old.",
        alignment:
          "Tortles are typically lawful good, as they value order, justice, and protecting others.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "200 to 280 lbs",
        alabastriaLore:
          "Tortles in Alabastria are found primarily in the coastal regions of Kuriguer and the waterways of Kamalatman, where their natural abilities make them excellent swimmers and protectors. They often serve as guardians and healers for the Huntbound Order.",
        playstyle:
          "Defensive and wise characters who excel at protection and healing. Perfect for players who want to be patient and protective.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.aquan.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.claws_tortle.id },
            { id: raceTrait.hold_breath_tortle.id },
            { id: raceTrait.natural_armor_tortle.id },
            { id: raceTrait.shell_defense_tortle.id },
            { id: raceTrait.survival_instinct_tortle.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
            { id: raceAbilityScore.wis_one.id },
          ],
        },
        namesId: raceNames.tortle.id,
      }),
      triton: await db.createRace({
        id: "race-triton",
        name: "Triton",
        slug: "triton",
        description:
          "Aquatic humanoids with a strong connection to the sea and water magic. Tritons are noble, proud, and have excellent swimming abilities.",
        speed: "30 feet",
        age: "Tritons reach maturity around 15 and can live up to 200 years.",
        alignment:
          "Tritons are typically lawful good, as they value order, justice, and protecting others.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Tritons in Alabastria are found primarily in the coastal regions of Kuriguer and the waterways of Kamalatman, where their aquatic abilities make them excellent sailors and water guardians. They often serve as maritime specialists for the Huntbound Order.",
        playstyle:
          "Aquatic characters with water magic and swimming abilities. Perfect for players who want to be noble and water-focused.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.primordial.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.amphibious_triton.id },
            { id: raceTrait.control_air_and_water_triton.id },
            { id: raceTrait.emissary_of_the_sea_triton.id },
            { id: raceTrait.guardians_of_the_depths_triton.id },
            { id: raceTrait.swimming_speed_triton.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_one.id },
            { id: raceAbilityScore.con_one.id },
            { id: raceAbilityScore.cha_one.id },
          ],
        },
        namesId: raceNames.triton.id,
      }),
      vedalken: await db.createRace({
        id: "race-vedalken",
        name: "Vedalken",
        slug: "vedalken",
        description:
          "Blue-skinned humanoids known for their intelligence, precision, and connection to knowledge. Vedalken are analytical, methodical, and have excellent problem-solving abilities.",
        speed: "30 feet",
        age: "Vedalken mature at the same rate as humans and live about as long.",
        alignment:
          "Vedalken are typically lawful neutral, as they value order, logic, and efficiency.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Vedalken in Alabastria are found primarily in the magical academies of Kuriguer and the research facilities of Kamalatman, where their analytical abilities make them excellent scholars and researchers. They often serve as advisors and researchers for the Huntbound Order.",
        playstyle:
          "Intelligent and analytical characters who excel at problem-solving and research. Perfect for players who want to be methodical and precise.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [{ id: language.common.id }, { id: language.vedalken.id }],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_vedalken.id },
            { id: raceTrait.vedalken_dispassion_vedalken.id },
            { id: raceTrait.partially_amphibious_vedalken.id },
            { id: raceTrait.tireless_precision_vedalken.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.int_two.id },
            { id: raceAbilityScore.wis_one.id },
          ],
        },
        namesId: raceNames.vedalken.id,
      }),
      warforged: await db.createRace({
        id: "race-warforged",
        name: "Warforged",
        slug: "warforged",
        description:
          "Constructed humanoids created for war but now seeking their own purpose. Warforged are durable, adaptable, and have unique mechanical abilities.",
        speed: "30 feet",
        age: "Warforged don't age and can live indefinitely if properly maintained.",
        alignment:
          "Warforged can be of any alignment, as they are driven by their own choices and experiences.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Warforged in Alabastria are found throughout all continents, often serving as guards and warriors due to their constructed nature and durability. They often work with the Huntbound Order as elite operatives and those who understand the nature of constructs.",
        playstyle:
          "Constructed characters with unique mechanical abilities and durability. Perfect for players who want to be artificial and adaptable.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.any_one.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.constructed_resilience_warforged.id },
            { id: raceTrait.sentrys_rest_warforged.id },
            { id: raceTrait.integrated_protection_warforged.id },
            { id: raceTrait.specialized_design_warforged.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_two.id },
            { id: raceAbilityScore.any_one.id },
          ],
        },
        namesId: raceNames.warforged.id,
      }),
      yuan_ti: await db.createRace({
        id: "race-yuan-ti",
        name: "Yuan-ti",
        slug: "yuan-ti",
        description:
          "Snake-like humanoids with serpentine features and magical abilities. Yuan-ti are often outcasts but possess unique magical powers and resistance to magic.",
        speed: "30 feet",
        age: "Yuan-ti mature at the same rate as humans and live up to 120 years.",
        alignment:
          "Yuan-ti are typically chaotic evil, as they care only for their own needs and are willing to use any means to achieve their goals.",
        heightRange: "5'0\" to 6'0\"",
        weightRange: "110 to 180 lbs",
        alabastriaLore:
          "Yuan-ti in Alabastria are found primarily in the swamps and underground regions of Kamalatman, where their serpentine nature makes them excellent infiltrators and spellcasters. They often serve as spies and magical specialists for the Huntbound Order.",
        playstyle:
          "Magical characters with serpentine heritage and unique abilities. Perfect for players who want to be mysterious and magical.",
        defaultCreatureSizeId: creature_size.medium.id,
        languages: {
          connect: [
            { id: language.common.id },
            { id: language.abyssal.id },
            { id: language.draconic.id },
          ],
        },
        traits: {
          connect: [
            { id: raceTrait.darkvision_yuan_ti.id },
            { id: raceTrait.magic_resistance_yuan_ti.id },
            { id: raceTrait.poison_immunity_yuan_ti.id },
            { id: raceTrait.serpentine_magic_yuan_ti.id },
          ],
        },
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.cha_two.id },
            { id: raceAbilityScore.int_one.id },
          ],
        },
        namesId: raceNames.yuan_ti.id,
      }),
    };
        // Subraces
    const subrace = {
      aasimar_protector_aasimar: await db.createSubrace({
        id: "subrace-aasimar-protector-aasimar",
        name: "Protector Aasimar",
        slug: "protector-aasimar",
        description: "Protector aasimar are charged by the powers of good to guard the weak, to seek out evil, and to stand vigilant against the darkness.",
        alabastriaContext: "Protector Aasimar in Skratonia's temples serve as divine guardians, their radiant wings inspiring hope in the faithful. They often work alongside Tharos Raggenthraw's Huntbound Order, bringing celestial light to the darkest corners of Alabastria.",
        playstyle: "Defensive support with healing and radiant damage. Perfect for players who want to protect allies while dealing divine damage.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.wis_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.radiant_soul_aasimar_protector_aasimar.id },
          ]
        },
        raceId: race.aasimar.id
      }),
      aasimar_scourge_aasimar: await db.createSubrace({
        id: "subrace-aasimar-scourge-aasimar",
        name: "Scourge Aasimar",
        slug: "scourge-aasimar",
        description: "Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil—a desire that is, at its best, unflinching and, at its worst, all-consuming.",
        alabastriaContext: "Scourge Aasimar in Alabastria's frontier regions channel their burning divine fury against the forces of evil. Their intense light and self-sacrificing nature make them formidable allies in the Huntbound Order's most dangerous missions.",
        playstyle: "Offensive support with area damage and self-sacrifice. Great for players who want to deal damage while supporting allies.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.radiant_consumption_aasimar_scourge_aasimar.id },
          ]
        },
        raceId: race.aasimar.id
      }),
      aasimar_fallen_aasimar: await db.createSubrace({
        id: "subrace-aasimar-fallen-aasimar",
        name: "Fallen Aasimar",
        slug: "fallen-aasimar",
        description: "An aasimar who was touched by dark powers, or who chose to dabble in them, is an aasimar whose original celestial nature has been warped by evil.",
        alabastriaContext: "Fallen Aasimar in Alabastria's shadowed corners struggle with their corrupted divine nature. Some seek redemption through the Huntbound Order, while others embrace their dark power to fight evil with evil.",
        playstyle: "Dark support with necrotic damage and intimidation. Ideal for players who want to play morally complex characters with dark powers.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.necrotic_shroud_aasimar_fallen_aasimar.id },
          ]
        },
        raceId: race.aasimar.id
      }),
      dragonborn_chromatic_dragonborn: await db.createSubrace({
        id: "subrace-dragonborn-chromatic-dragonborn",
        name: "Chromatic Dragonborn",
        slug: "chromatic-dragonborn",
        description: "Chromatic dragonborn are descended from evil dragons and often inherit their ancestors' destructive tendencies.",
        alabastriaContext: "Chromatic Dragonborn in Bulsania's military often serve as shock troops, their destructive breath weapons making them feared on the battlefield. Some seek redemption through the Huntbound Order, channeling their destructive power against true evil.",
        playstyle: "Offensive warriors with destructive elemental powers. Great for players who want to deal elemental damage and intimidate enemies.",
        raceId: race.dragonborn.id,
        traits: {
          connect: [
            { id: raceTrait.chromatic_ancestry_dragonborn.id },
          ]
        }
      }),
      dragonborn_metallic_dragonborn: await db.createSubrace({
        id: "subrace-dragonborn-metallic-dragonborn",
        name: "Metallic Dragonborn",
        slug: "metallic-dragonborn",
        description: "Metallic dragonborn are descended from good dragons and often inherit their ancestors' protective nature.",
        alabastriaContext: "Metallic Dragonborn in Alabastria's temples and noble houses serve as protectors and leaders. Their noble heritage and protective abilities make them natural leaders in the Huntbound Order's quest to protect the innocent.",
        playstyle: "Defensive warriors with protective elemental powers. Perfect for players who want to be noble protectors with draconic abilities.",
        raceId: race.dragonborn.id,
        traits: {
          connect: [
            { id: raceTrait.metallic_ancestry_dragonborn.id },
          ]
        }
      }),
      dragonborn_gem_dragonborn: await db.createSubrace({
        id: "subrace-dragonborn-gem-dragonborn",
        name: "Gem Dragonborn",
        slug: "gem-dragonborn",
        description: "Gem dragonborn are descended from psionic dragons and often inherit their ancestors' mental abilities.",
        alabastriaContext: "Gem Dragonborn in Kuriguer's magical academies and Skratonia's scholarly institutions study the mysteries of the mind. Their psionic heritage and intellectual abilities make them valuable researchers and strategists in the Huntbound Order.",
        playstyle: "Intellectual warriors with psionic abilities. Ideal for players who want to combine martial prowess with mental powers.",
        raceId: race.dragonborn.id,
        traits: {
          connect: [
            { id: raceTrait.gem_ancestry_dragonborn.id },
          ]
        }
      }),
      dwarf_hill_dwarf: await db.createSubrace({
        id: "subrace-dwarf-hill-dwarf",
        name: "Hill Dwarf",
        slug: "hill-dwarf",
        description: "Hill dwarves are more social and less reclusive than mountain dwarves, often found in human settlements.",
        alabastriaContext: "Hill Dwarves in Skratonia's cities and Kuriguer's coastal towns serve as merchants and craftsmen. Their social nature and extra durability make them excellent community leaders and healers in the Huntbound Order.",
        playstyle: "Durable support characters with extra hit points. Great for players who want to be tough healers or community leaders.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.wis_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.dwarven_toughness_dwarf_hill_dwarf.id },
          ]
        },
        raceId: race.dwarf.id
      }),
      dwarf_mountain_dwarf: await db.createSubrace({
        id: "subrace-dwarf-mountain-dwarf",
        name: "Mountain Dwarf",
        slug: "mountain-dwarf",
        description: "Mountain dwarves are more traditional and reclusive, often found in their mountain strongholds.",
        alabastriaContext: "Mountain Dwarves in Maltman's strongholds and Bulsania's peaks serve as elite warriors and miners. Their martial training and strength make them formidable fighters in the Huntbound Order's most dangerous missions.",
        playstyle: "Heavily armored warriors with martial training. Perfect for players who want to be heavily armored fighters with crafting abilities.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_two.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.dwarven_armor_training_dwarf_mountain_dwarf.id },
          ]
        },
        heightRangeOverride: "4'0\" to 4'8\"",
        weightRangeOverride: "130 to 178 lbs",
        raceId: race.dwarf.id
      }),
      dwarf_duergar: await db.createSubrace({
        id: "subrace-dwarf-duergar",
        name: "Duergar",
        slug: "duergar",
        description: "Duergar are dark dwarves who live in the Underdark and have developed psionic abilities.",
        alabastriaContext: "Duergar in Maltman's deepest mines and Alatman's underground workshops serve as specialized craftsmen and spies. Their psionic abilities and Underdark knowledge make them valuable assets in the Huntbound Order's covert operations.",
        playstyle: "Psionic craftsmen with stealth abilities. Great for players who want to be magical craftsmen with unique abilities.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.duergar_magic_dwarf_duergar.id },
            { id: raceTrait.duergar_resilience_dwarf_duergar.id },
            { id: raceTrait.sunlight_sensitivity_dwarf_duergar.id },
          ]
        },
        raceId: race.dwarf.id
      }),
      elf_high_elf: await db.createSubrace({
        id: "subrace-elf-high-elf",
        name: "High Elf",
        slug: "high-elf",
        description: "High elves are the most traditional and magical of the elven subraces, often found in magical academies and ancient libraries.",
        alabastriaContext: "High Elves in Kuriguer's magical academies and Skratonia's scholarly institutions serve as wizards and researchers. Their intellectual nature and magical abilities make them valuable strategists and spellcasters in the Huntbound Order.",
        playstyle: "Intellectual spellcasters with martial training. Great for players who want to be magical warriors with extra languages.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.int_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.elf_weapon_training_elf_high_elf.id },
            { id: raceTrait.cantrip_elf_high_elf.id },
            { id: raceTrait.extra_language_elf_high_elf.id },
          ]
        },
        raceId: race.elf.id
      }),
      elf_wood_elf: await db.createSubrace({
        id: "subrace-elf-wood-elf",
        name: "Wood Elf",
        slug: "wood-elf",
        description: "Wood elves are swift and stealthy, with a deep bond to the forests and natural world.",
        alabastriaContext: "Wood Elves in Kuriguer's magical forests and Skratonia's ancient groves serve as rangers and druids. Their natural stealth and speed make them excellent scouts and trackers in the Huntbound Order's wilderness operations.",
        playstyle: "Swift and stealthy nature guardians. Perfect for players who want to be fast, sneaky characters with nature abilities.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.wis_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.elf_weapon_training_elf_wood_elf.id },
            { id: raceTrait.fleet_of_foot_elf_wood_elf.id },
            { id: raceTrait.mask_of_the_wild_elf_wood_elf.id },
          ]
        },
        weightRangeOverride: "100 to 140 lbs",
        raceId: race.elf.id
      }),
      elf_dark_elf_drow: await db.createSubrace({
        id: "subrace-elf-dark-elf-drow",
        name: "Dark Elf (Drow)",
        slug: "dark-elf-drow",
        description: "Dark elves, or drow, are elves who live in the Underdark and have adapted to its harsh environment.",
        alabastriaContext: "Drow in Maltman's deepest caverns and Alatman's underground regions serve as scouts and spies. Their Underdark knowledge and magical abilities make them valuable assets in the Huntbound Order's covert operations.",
        playstyle: "Magical scouts with Underdark abilities. Great for players who want to be stealthy spellcasters with unique challenges.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.cha_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.superior_darkvision_elf_dark_elf_drow.id },
            { id: raceTrait.sunlight_sensitivity_elf_dark_elf_drow.id },
            { id: raceTrait.drow_magic_elf_dark_elf_drow.id },
            { id: raceTrait.drow_weapon_training_elf_dark_elf_drow.id },
          ]
        },
        heightRangeOverride: "4'5\" to 5'7\"",
        weightRangeOverride: "75 to 105 lbs",
        raceId: race.elf.id
      }),
      elf_sea_elf: await db.createSubrace({
        id: "subrace-elf-sea-elf",
        name: "Sea Elf",
        slug: "sea-elf",
        description: "Sea elves are elves who have adapted to life underwater and have a deep connection to the ocean.",
        alabastriaContext: "Sea Elves in Kuriguer's coastal waters and along Alabastria's shores serve as maritime scouts and protectors. Their aquatic abilities and ocean knowledge make them valuable allies in the Huntbound Order's coastal operations.",
        playstyle: "Aquatic scouts with ocean abilities. Perfect for players who want to be water-based characters with unique movement options.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.sea_elf_training_elf_sea_elf.id },
            { id: raceTrait.child_of_the_sea_elf_sea_elf.id },
            { id: raceTrait.friend_of_the_sea_elf_sea_elf.id },
          ]
        },
        raceId: race.elf.id
      }),
      elf_eladrin: await db.createSubrace({
        id: "subrace-elf-eladrin",
        name: "Eladrin",
        slug: "eladrin",
        description: "Eladrin are elves who live in the Feywild and have a deep connection to the seasons and natural cycles.",
        alabastriaContext: "Eladrin in Kuriguer's magical forests and fey-touched areas serve as guardians of the natural world. Their seasonal magic and fey connection make them powerful allies in the Huntbound Order's efforts to protect Alabastria's magical balance.",
        playstyle: "Seasonal magic users with teleportation. Great for players who want to be magical characters with unique seasonal abilities.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.int_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.fey_step_elf_eladrin.id },
            { id: raceTrait.trance_elf_eladrin.id },
          ]
        },
        raceId: race.elf.id
      }),
      elf_shadar_kai: await db.createSubrace({
        id: "subrace-elf-shadar-kai",
        name: "Shadar-kai",
        slug: "shadar-kai",
        description: "Shadar-kai are elves who live in the Shadowfell and have a deep connection to death and shadow magic.",
        alabastriaContext: "Shadar-kai in Kuriguer's shadow-touched woods and Alabastria's darker regions serve as specialists against undead threats. Their shadow magic and death resistance make them valuable assets in the Huntbound Order's most dangerous missions.",
        playstyle: "Shadow magic users with death resistance. Perfect for players who want to be dark magical characters with unique abilities.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.blessing_of_the_raven_queen_elf_shadar_kai.id },
            { id: raceTrait.necrotic_resistance_elf_shadar_kai.id },
            { id: raceTrait.trance_elf_shadar_kai.id },
          ]
        },
        raceId: race.elf.id
      }),
      genasi_air_genasi: await db.createSubrace({
        id: "subrace-genasi-air-genasi",
        name: "Air Genasi",
        slug: "air-genasi",
        description: "Air genasi are connected to the element of air and wind, often found in high places and open spaces.",
        alabastriaContext: "Air Genasi in Kuriguer's coastal regions and Bulsania's mountain peaks serve as scouts and messengers. Their wind magic and aerial abilities make them excellent for reconnaissance and communication in the Huntbound Order.",
        playstyle: "Wind magic users with teleportation abilities. Great for players who want to be mobile magical characters with air themes.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.air_resistance_genasi_air_genasi.id },
            { id: raceTrait.air_magic_genasi_air_genasi.id },
            { id: raceTrait.unending_breath_genasi_air_genasi.id },
            { id: raceTrait.mingle_with_the_wind_genasi_air_genasi.id },
          ]
        },
        raceId: race.genasi.id
      }),
      genasi_earth_genasi: await db.createSubrace({
        id: "subrace-genasi-earth-genasi",
        name: "Earth Genasi",
        slug: "earth-genasi",
        description: "Earth genasi are connected to the element of earth and stone, often found in mountains and underground areas.",
        alabastriaContext: "Earth Genasi in Maltman's mountain strongholds and Alatman's volcanic regions serve as miners and craftsmen. Their earth magic and stone abilities make them valuable for construction and excavation in the Huntbound Order.",
        playstyle: "Earth magic users with terrain abilities. Perfect for players who want to be sturdy magical characters with earth themes.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.earth_resistance_genasi_earth_genasi.id },
            { id: raceTrait.earth_magic_genasi_earth_genasi.id },
            { id: raceTrait.earth_walk_genasi_earth_genasi.id },
          ]
        },
        raceId: race.genasi.id
      }),
      genasi_fire_genasi: await db.createSubrace({
        id: "subrace-genasi-fire-genasi",
        name: "Fire Genasi",
        slug: "fire-genasi",
        description: "Fire genasi are connected to the element of fire and heat, often found in volcanic areas and hot climates.",
        alabastriaContext: "Fire Genasi in Alatman's volcanic forges and Kuriguer's magical hotspots serve as smiths and magical researchers. Their fire magic and heat resistance make them excellent for crafting and magical experimentation in the Huntbound Order.",
        playstyle: "Fire magic users with teleportation abilities. Great for players who want to be destructive magical characters with fire themes.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.int_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.fire_resistance_genasi_fire_genasi.id },
            { id: raceTrait.fire_magic_genasi_fire_genasi.id },
            { id: raceTrait.reach_to_the_blaze_genasi_fire_genasi.id },
          ]
        },
        raceId: race.genasi.id
      }),
      genasi_water_genasi: await db.createSubrace({
        id: "subrace-genasi-water-genasi",
        name: "Water Genasi",
        slug: "water-genasi",
        description: "Water genasi are connected to the element of water and ice, often found near bodies of water and in cold climates.",
        alabastriaContext: "Water Genasi in Kuriguer's coastal waters and along Alabastria's shores serve as maritime specialists and water guardians. Their water magic and aquatic abilities make them excellent for coastal operations and water-based missions in the Huntbound Order.",
        playstyle: "Water magic users with aquatic abilities. Perfect for players who want to be water-based magical characters with unique movement options.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.wis_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.water_resistance_genasi_water_genasi.id },
            { id: raceTrait.water_magic_genasi_water_genasi.id },
            { id: raceTrait.amphibious_genasi_water_genasi.id },
            { id: raceTrait.swim_genasi_water_genasi.id },
          ]
        },
        raceId: race.genasi.id
      }),
      gnome_forest_gnome: await db.createSubrace({
        id: "subrace-gnome-forest-gnome",
        name: "Forest Gnome",
        slug: "forest-gnome",
        description: "Forest gnomes are reclusive and shy, living in hidden communities deep in the woods.",
        alabastriaContext: "Forest Gnomes in Alabastria are found in the magical forests of Kuriguer, where they serve as guardians of nature and guides for those who venture into the dangerous woods.",
        playstyle: "Stealthy and nature-focused gnomes who excel at illusion magic and communication with animals.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.natural_illusionist_gnome_forest_gnome.id },
            { id: raceTrait.speak_with_small_beasts_gnome_forest_gnome.id },
          ]
        },
        raceId: race.gnome.id
      }),
      gnome_rock_gnome: await db.createSubrace({
        id: "subrace-gnome-rock-gnome",
        name: "Rock Gnome",
        slug: "rock-gnome",
        description: "Rock gnomes are the most common gnomes, known for their engineering skills and love of tinkering.",
        alabastriaContext: "Rock Gnomes in Alabastria are found in the workshops and forges of Kamalatman, where their engineering skills are highly valued. They often work alongside Dwarves and Artificers to create mechanical devices and magical items.",
        playstyle: "Engineering-focused gnomes who excel at creating devices and understanding technology.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.artificers_lore_gnome_rock_gnome.id },
            { id: raceTrait.tinker_gnome_rock_gnome.id },
          ]
        },
        raceId: race.gnome.id
      }),
      half_elf_aquatic_half_elf: await db.createSubrace({
        id: "subrace-half-elf-aquatic-half-elf",
        name: "Aquatic Half-Elf",
        slug: "aquatic-half-elf",
        description: "Half-elves with aquatic heritage who can breathe underwater and swim with ease.",
        alabastriaContext: "Aquatic Half-Elves in Alabastria are found along the coasts of Kuriguer and in the waterways of Kamalatman, where their aquatic abilities make them excellent for maritime operations.",
        playstyle: "Water-based characters who excel at aquatic adventures and coastal missions.",
        traits: {
          connect: [
            { id: raceTrait.aquatic_half_elf_aquatic_half_elf.id },
          ]
        },
        raceId: race.half_elf.id
      }),
      half_elf_drow_half_elf: await db.createSubrace({
        id: "subrace-half-elf-drow-half-elf",
        name: "Drow Half-Elf",
        slug: "drow-half-elf",
        description: "Half-elves with drow heritage who have some of the dark elves' abilities.",
        alabastriaContext: "Drow Half-Elves in Alabastria are rare but found in the darker regions of Kuriguer's forests, where they often serve as scouts and guides in dangerous areas.",
        playstyle: "Dark magic users with unique spellcasting abilities and darkvision.",
        traits: {
          connect: [
            { id: raceTrait.drow_magic_half_elf_drow_half_elf.id },
          ]
        },
        raceId: race.half_elf.id
      }),
      half_elf_high_half_elf: await db.createSubrace({
        id: "subrace-half-elf-high-half-elf",
        name: "High Half-Elf",
        slug: "high-half-elf",
        description: "Half-elves with high elf heritage who have some magical abilities.",
        alabastriaContext: "High Half-Elves in Alabastria are found in the magical academies of Kuriguer and the cities of Skratonia, where their magical heritage makes them excellent scholars and diplomats.",
        playstyle: "Magical characters with weapon proficiency and cantrip abilities.",
        traits: {
          connect: [
            { id: raceTrait.elf_weapon_training_half_elf_high_half_elf.id },
            { id: raceTrait.cantrip_half_elf_high_half_elf.id },
          ]
        },
        raceId: race.half_elf.id
      }),
      half_elf_wood_half_elf: await db.createSubrace({
        id: "subrace-half-elf-wood-half-elf",
        name: "Wood Half-Elf",
        slug: "wood-half-elf",
        description: "Half-elves with wood elf heritage who have enhanced speed and stealth abilities.",
        alabastriaContext: "Wood Half-Elves in Alabastria are found in the forests of Kuriguer and the wilderness of Kamalatman, where their natural abilities make them excellent rangers and scouts.",
        playstyle: "Fast and stealthy characters who excel at wilderness survival and ranged combat.",
        traits: {
          connect: [
            { id: raceTrait.elf_weapon_training_half_elf_wood_half_elf.id },
            { id: raceTrait.fleet_of_foot_half_elf_wood_half_elf.id },
            { id: raceTrait.mask_of_the_wild_half_elf_wood_half_elf.id },
          ]
        },
        raceId: race.half_elf.id
      }),
      halfling_lightfoot_halfling: await db.createSubrace({
        id: "subrace-halfling-lightfoot-halfling",
        name: "Lightfoot Halfling",
        slug: "lightfoot-halfling",
        description: "Lightfoot halflings are stealthy and social, able to hide behind larger creatures.",
        alabastriaContext: "Lightfoot Halflings in Alabastria are found in the cities of Skratonia, where their social skills and stealth make them excellent merchants and diplomats.",
        playstyle: "Social and stealthy halflings who excel at hiding and social interaction.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.cha_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.naturally_stealthy_halfling_lightfoot_halfling.id },
          ]
        },
        raceId: race.halfling.id
      }),
      halfling_stout_halfling: await db.createSubrace({
        id: "subrace-halfling-stout-halfling",
        name: "Stout Halfling",
        slug: "stout-halfling",
        description: "Stout halflings are hardier and more resistant to poison than other halflings.",
        alabastriaContext: "Stout Halflings in Alabastria are found in the agricultural regions of Skratonia, where their hardiness makes them excellent farmers and workers in harsh conditions.",
        playstyle: "Hardy and resilient halflings who excel at surviving in difficult conditions.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.stout_resilience_halfling_stout_halfling.id },
          ]
        },
        raceId: race.halfling.id
      }),
      halfling_ghostwise_halfling: await db.createSubrace({
        id: "subrace-halfling-ghostwise-halfling",
        name: "Ghostwise Halfling",
        slug: "ghostwise-halfling",
        description: "Ghostwise halflings are reclusive and have telepathic abilities.",
        alabastriaContext: "Ghostwise Halflings in Alabastria are found in the remote regions of Kuriguer's forests, where their telepathic abilities make them excellent scouts and guides.",
        playstyle: "Telepathic halflings who excel at silent communication and wilderness survival.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.wis_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.silent_speech_halfling_ghostwise_halfling.id },
          ]
        },
        raceId: race.halfling.id
      }),
      human_variant_human: await db.createSubrace({
        id: "subrace-human-variant-human",
        name: "Variant Human",
        slug: "variant-human",
        description: "Humans with a particular talent or focus, represented by a feat.",
        alabastriaContext: "Variant Humans in Alabastria are found throughout all continents, often as specialists and experts in their chosen fields. Their focused abilities make them valuable in the Huntbound Order and other organizations.",
        playstyle: "Specialized humans with unique abilities and focused expertise.",
        traits: {
          connect: [
            { id: raceTrait.feat_human_variant_human.id },
            { id: raceTrait.skill_human_variant_human.id },
          ]
        },
        raceId: race.human.id
      }),
      human_mark_of_finding_human: await db.createSubrace({
        id: "subrace-human-mark-of-finding-human",
        name: "Mark of Finding Human",
        slug: "mark-of-finding-human",
        description: "Humans with the Mark of Finding, a dragonmark that grants tracking and divination abilities.",
        alabastriaContext: "Mark of Finding Humans in Alabastria are found primarily in the Huntbound Order, where their tracking abilities make them invaluable for finding monsters and lost people.",
        playstyle: "Tracking specialists with divination magic and enhanced perception.",
        traits: {
          connect: [
            { id: raceTrait.hunters_intuition_human_mark_of_finding_human.id },
            { id: raceTrait.finders_magic_human_mark_of_finding_human.id },
          ]
        },
        raceId: race.human.id
      }),
      human_mark_of_handling_human: await db.createSubrace({
        id: "subrace-human-mark-of-handling-human",
        name: "Mark of Handling Human",
        slug: "mark-of-handling-human",
        description: "Humans with the Mark of Handling, a dragonmark that grants animal handling and beast mastery abilities.",
        alabastriaContext: "Mark of Handling Humans in Alabastria are found in the wilderness regions of Kuriguer and Kamalatman, where their animal handling abilities make them excellent rangers and beast masters.",
        playstyle: "Animal specialists with nature magic and beast communication abilities.",
        traits: {
          connect: [
            { id: raceTrait.wild_intuition_human_mark_of_handling_human.id },
            { id: raceTrait.primal_connection_human_mark_of_handling_human.id },
          ]
        },
        raceId: race.human.id
      }),
      human_mark_of_making_human: await db.createSubrace({
        id: "subrace-human-mark-of-making-human",
        name: "Mark of Making Human",
        slug: "mark-of-making-human",
        description: "Humans with the Mark of Making, a dragonmark that grants crafting and creation abilities.",
        alabastriaContext: "Mark of Making Humans in Alabastria are found in the workshops and forges of Kamalatman, where their crafting abilities make them excellent artificers and smiths.",
        playstyle: "Crafting specialists with creation magic and enhanced intelligence.",
        traits: {
          connect: [
            { id: raceTrait.artisans_intuition_human_mark_of_making_human.id },
            { id: raceTrait.makers_magic_human_mark_of_making_human.id },
          ]
        },
        raceId: race.human.id
      }),
      human_mark_of_passage_human: await db.createSubrace({
        id: "subrace-human-mark-of-passage-human",
        name: "Mark of Passage Human",
        slug: "mark-of-passage-human",
        description: "Humans with the Mark of Passage, a dragonmark that grants movement and transportation abilities.",
        alabastriaContext: "Mark of Passage Humans in Alabastria are found throughout all continents as couriers and messengers, where their movement abilities make them excellent for transportation and communication.",
        playstyle: "Movement specialists with teleportation magic and enhanced mobility.",
        traits: {
          connect: [
            { id: raceTrait.intuitive_motion_human_mark_of_passage_human.id },
            { id: raceTrait.passage_magic_human_mark_of_passage_human.id },
          ]
        },
        raceId: race.human.id
      }),
      human_mark_of_sentinel_human: await db.createSubrace({
        id: "subrace-human-mark-of-sentinel-human",
        name: "Mark of Sentinel Human",
        slug: "mark-of-sentinel-human",
        description: "Humans with the Mark of Sentinel, a dragonmark that grants protection and defense abilities.",
        alabastriaContext: "Mark of Sentinel Humans in Alabastria are found in the Huntbound Order and other protective organizations, where their defensive abilities make them excellent guards and protectors.",
        playstyle: "Protection specialists with defensive magic and enhanced awareness.",
        traits: {
          connect: [
            { id: raceTrait.vigilant_guardian_human_mark_of_sentinel_human.id },
            { id: raceTrait.sentinels_magic_human_mark_of_sentinel_human.id },
          ]
        },
        raceId: race.human.id
      }),
      shifter_beasthide_shifter: await db.createSubrace({
        id: "subrace-shifter-beasthide-shifter",
        name: "Beasthide Shifter",
        slug: "beasthide-shifter",
        description: "Beasthide shifters are tough and resilient, with enhanced durability and strength.",
        alabastriaContext: "Beasthide Shifters in Alabastria are found in the harsh regions of Bulsania and Kamalatman, where their toughness makes them excellent survivalists and warriors.",
        playstyle: "Tough and resilient shifters who excel at survival and combat.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.con_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.shifting_feature_shifter_beasthide_shifter.id },
          ]
        },
        raceId: race.shifter.id
      }),
      shifter_longtooth_shifter: await db.createSubrace({
        id: "subrace-shifter-longtooth-shifter",
        name: "Longtooth Shifter",
        slug: "longtooth-shifter",
        description: "Longtooth shifters are fierce and aggressive, with enhanced combat abilities.",
        alabastriaContext: "Longtooth Shifters in Alabastria are found in the frontier regions of Kamalatman and Skratonia, where their ferocity makes them excellent warriors and guards.",
        playstyle: "Fierce and aggressive shifters who excel at combat and intimidation.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.str_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.shifting_feature_shifter_longtooth_shifter.id },
          ]
        },
        raceId: race.shifter.id
      }),
      shifter_swiftstride_shifter: await db.createSubrace({
        id: "subrace-shifter-swiftstride-shifter",
        name: "Swiftstride Shifter",
        slug: "swiftstride-shifter",
        description: "Swiftstride shifters are fast and agile, with enhanced mobility and reflexes.",
        alabastriaContext: "Swiftstride Shifters in Alabastria are found throughout all continents, often serving as messengers and scouts due to their speed and agility.",
        playstyle: "Fast and agile shifters who excel at mobility and stealth.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.dex_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.shifting_feature_shifter_swiftstride_shifter.id },
          ]
        },
        raceId: race.shifter.id
      }),
      shifter_wildhunt_shifter: await db.createSubrace({
        id: "subrace-shifter-wildhunt-shifter",
        name: "Wildhunt Shifter",
        slug: "wildhunt-shifter",
        description: "Wildhunt shifters are wise and perceptive, with enhanced senses and tracking abilities.",
        alabastriaContext: "Wildhunt Shifters in Alabastria are found in the wilderness regions of Kuriguer and Kamalatman, where their enhanced senses make them excellent trackers and guides.",
        playstyle: "Wise and perceptive shifters who excel at tracking and wilderness survival.",
        abilityScoreIncreases: {
          connect: [
            { id: raceAbilityScore.wis_one.id },
          ]
        },
        traits: {
          connect: [
            { id: raceTrait.shifting_feature_shifter_wildhunt_shifter.id },
          ]
        },
        raceId: race.shifter.id
      }),
      tiefling_asmodeus_tiefling: await db.createSubrace({
        id: "subrace-tiefling-asmodeus-tiefling",
        name: "Asmodeus Tiefling",
        slug: "asmodeus-tiefling",
        description: "Tieflings with the bloodline of Asmodeus, the Lord of the Nine Hells.",
        alabastriaContext: "Asmodeus Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
        playstyle: "Magical tieflings with infernal heritage and unique abilities.",
        traits: {
          connect: [
            { id: raceTrait.infernal_legacy_tiefling_asmodeus_tiefling.id },
          ]
        },
        raceId: race.tiefling.id
      }),
      tiefling_baalzebul_tiefling: await db.createSubrace({
        id: "subrace-tiefling-baalzebul-tiefling",
        name: "Baalzebul Tiefling",
        slug: "baalzebul-tiefling",
        description: "Tieflings with the bloodline of Baalzebul, the Lord of Flies.",
        alabastriaContext: "Baalzebul Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
        playstyle: "Magical tieflings with infernal heritage and unique abilities.",
        traits: {
          connect: [
            { id: raceTrait.infernal_legacy_tiefling_baalzebul_tiefling.id },
          ]
        },
        raceId: race.tiefling.id
      }),
      tiefling_dispater_tiefling: await db.createSubrace({
        id: "subrace-tiefling-dispater-tiefling",
        name: "Dispater Tiefling",
        slug: "dispater-tiefling",
        description: "Tieflings with the bloodline of Dispater, the Iron Duke.",
        alabastriaContext: "Dispater Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
        playstyle: "Magical tieflings with infernal heritage and unique abilities.",
        traits: {
          connect: [
            { id: raceTrait.infernal_legacy_tiefling_dispater_tiefling.id },
          ]
        },
        raceId: race.tiefling.id
      }),
      tiefling_fierna_tiefling: await db.createSubrace({
        id: "subrace-tiefling-fierna-tiefling",
        name: "Fierna Tiefling",
        slug: "fierna-tiefling",
        description: "Tieflings with the bloodline of Fierna, the Lady of the Fourth.",
        alabastriaContext: "Fierna Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
        playstyle: "Magical tieflings with infernal heritage and unique abilities.",
        traits: {
          connect: [
            { id: raceTrait.infernal_legacy_tiefling_fierna_tiefling.id },
          ]
        },
        raceId: race.tiefling.id
      }),
      tiefling_glasya_tiefling: await db.createSubrace({
        id: "subrace-tiefling-glasya-tiefling",
        name: "Glasya Tiefling",
        slug: "glasya-tiefling",
        description: "Tieflings with the bloodline of Glasya, the Daughter of Asmodeus.",
        alabastriaContext: "Glasya Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
        playstyle: "Magical tieflings with infernal heritage and unique abilities.",
        traits: {
          connect: [
            { id: raceTrait.infernal_legacy_tiefling_glasya_tiefling.id },
          ]
        },
        raceId: race.tiefling.id
      }),
      tiefling_levistus_tiefling: await db.createSubrace({
        id: "subrace-tiefling-levistus-tiefling",
        name: "Levistus Tiefling",
        slug: "levistus-tiefling",
        description: "Tieflings with the bloodline of Levistus, the Lord of the Fifth.",
        alabastriaContext: "Levistus Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
        playstyle: "Magical tieflings with infernal heritage and unique abilities.",
        traits: {
          connect: [
            { id: raceTrait.infernal_legacy_tiefling_levistus_tiefling.id },
          ]
        },
        raceId: race.tiefling.id
      }),
      tiefling_mammon_tiefling: await db.createSubrace({
        id: "subrace-tiefling-mammon-tiefling",
        name: "Mammon Tiefling",
        slug: "mammon-tiefling",
        description: "Tieflings with the bloodline of Mammon, the Lord of the Third.",
        alabastriaContext: "Mammon Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
        playstyle: "Magical tieflings with infernal heritage and unique abilities.",
        traits: {
          connect: [
            { id: raceTrait.infernal_legacy_tiefling_mammon_tiefling.id },
          ]
        },
        raceId: race.tiefling.id
      }),
      tiefling_mephistopheles_tiefling: await db.createSubrace({
        id: "subrace-tiefling-mephistopheles-tiefling",
        name: "Mephistopheles Tiefling",
        slug: "mephistopheles-tiefling",
        description: "Tieflings with the bloodline of Mephistopheles, the Lord of the Eighth.",
        alabastriaContext: "Mephistopheles Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
        playstyle: "Magical tieflings with infernal heritage and unique abilities.",
        traits: {
          connect: [
            { id: raceTrait.infernal_legacy_tiefling_mephistopheles_tiefling.id },
          ]
        },
        raceId: race.tiefling.id
      }),
      tiefling_zariel_tiefling: await db.createSubrace({
        id: "subrace-tiefling-zariel-tiefling",
        name: "Zariel Tiefling",
        slug: "zariel-tiefling",
        description: "Tieflings with the bloodline of Zariel, the Fallen Angel.",
        alabastriaContext: "Zariel Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
        playstyle: "Magical tieflings with infernal heritage and unique abilities.",
        traits: {
          connect: [
            { id: raceTrait.infernal_legacy_tiefling_zariel_tiefling.id },
          ]
        },
        raceId: race.tiefling.id
      }),
      yuan_ti_pureblood_yuan_ti: await db.createSubrace({
        id: "subrace-yuan-ti-pureblood-yuan-ti",
        name: "Pureblood Yuan-ti",
        slug: "pureblood-yuan-ti",
        description: "Yuan-ti with the most human-like appearance, often able to pass as human.",
        alabastriaContext: "Pureblood Yuan-ti in Alabastria are found throughout all continents, often serving as spies and infiltrators due to their human-like appearance and magical abilities.",
        playstyle: "Human-like yuan-ti with magical abilities and infiltration skills.",
        traits: {
          connect: [
            { id: raceTrait.innate_spellcasting_yuan_ti_pureblood_yuan_ti.id },
          ]
        },
        raceId: race.yuan_ti.id
      }),
    };

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