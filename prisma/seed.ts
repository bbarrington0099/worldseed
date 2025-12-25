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
        unknown_dialects: await db.createLanguage({
            id: "language-unknown-dialects-alabastria",
            name: "Unknown Dialects",
            description: "A mysterious babble; unpredictable and varied. It may sound like a jumble of fragments from many tongues, a chaotic and esoteric jumble of sounds that defies easy description."
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
    const raceTrait: Record<string, Prisma.RaceTraitGetPayload<{}>> = {
        flight: await db.createRaceTrait({
            id: "race-trait-flight",
            name: "Flight",
            description: "You have a flying speed of 50 feet. To use this speed, you can't be wearing medium or heavy armor.",
        }),
        talons: await db.createRaceTrait({
            id: "race-trait-talons",
            name: "Talons",
            description: "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.",
        }),
        darkvision: await db.createRaceTrait({
            id: "race-trait-darkvision",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        celestial_resistance: await db.createRaceTrait({
            id: "race-trait-celestial-resistance",
            name: "Celestial Resistance",
            description: "You have resistance to necrotic damage and radiant damage.",
        }),
        healing_hands: await db.createRaceTrait({
            id: "race-trait-healing-hands",
            name: "Healing Hands",
            description: "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.",
        }),
        radiant_soul: await db.createRaceTrait({
            id: "race-trait-radiant-soul",
            name: "Radiant Soul",
            description: "As an action, you can unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        }),
        radiant_consumption: await db.createRaceTrait({
            id: "race-trait-radiant-consumption",
            name: "Radiant Consumption",
            description: "As an action, you can unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        }),
        necrotic_shroud: await db.createRaceTrait({
            id: "race-trait-necrotic-shroud",
            name: "Necrotic Shroud",
            description: "As an action, you can unleash the divine energy within yourself, causing your eyes to turn black and two skeletal, ghostly, flightless wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        })
    };
    // Race Names
    const raceNames: Record<string, Prisma.RaceNameGetPayload<{}>> = {
        aarakocra: await db.createRaceName({
            id: "race-names-aarakocra",
            male: ["Kree", "Kreel", "Kreeth", "Kreetha", "Kreetho", "Kreethu", "Rath", "Ratha", "Ratho", "Rathu"],
            female: ["Kreea", "Kreela", "Kreetha", "Kreethia", "Kreetho", "Kreethia", "Ratha", "Rathia", "Ratho", "Rathia"],
            unisex: ["Sky", "Wind", "Feather", "Talons", "Beak", "Wing", "Cloud", "Breeze", "Storm", "Gale"],
            surname: ["Skycaller", "Windrider", "Featherfoot", "Talonstrike", "Beakblade", "Wingflap", "Cloudsworn", "Breezefury", "Stormwatcher", "Galesinger"]
        }),
        aasimar: await db.createRaceName({
            id: "race-names-aasimar",
            male: ["Seraphiel", "Thalion", "Aurelius", "Celestius", "Divinus", "Luminus", "Radiant", "Solarius", "Elysian", "Zephyrus"],
            female: ["Liora", "Mara", "Celestia", "Aurelia", "Divina", "Lumina", "Radiance", "Solara", "Elysia", "Zephyra"],
            unisex: ["Light", "Dawn", "Glory", "Hope", "Faith", "Grace", "Valor", "Truth", "Honor", "Justice"],
            surname: ["Lightbringer", "Dawnstar", "Gloryseeker", "Hopebearer", "Faithkeeper", "Gracelord", "Valorshield", "Truthsayer", "Honorguard", "Justiceblade", "Brightwing", "Goldheart", "Starfall", "Lightbringer", "Heavenward", "Divinegrace"]
        })
    };
    // Races
    const race: Record<string, Prisma.RaceGetPayload<{}>> = {
        aarakocra: await db.createRace({
            id: "race-aarakocra",
            name: "Aarakocra",
            slug: "aarakocra",
            description: "Birdfolk from the Elemental Plane of Air, Aarakocra are often travelers, expats, refugees, or adventurers. Resembling humanoids in their stature and bipedal movements, they also gain the benefits of a flying speed, slashing talons, and an understanding of the Aarakocra as well as the Auran tongue and writ.",
            speed: "25 feet walking, 50 feet flying",
            age: "Aarakocra reach maturity by age 3. Compared to humans, aarakocra don't usually live longer than 30 years.",
            alignment: "Most aarakocra are good and rarely choose sides when it comes to law and chaos. Leaders are sometimes lawful good.",
            heightRange: "5'0\" to 6'4\"",
            weightRange: "90 to 130 lbs",
            alabastriaLore: "In Bulsania's mountain peaks and Kuriguer's coastal cliffs, Aarakocra serve as messengers and scouts, their aerial perspective providing crucial intelligence about the harsh landscapes below. These birdfolk often work with the Huntbound Order, using their flight to track dangerous creatures across difficult terrain.",
            playstyle: "Excellent mobility and ranged combat specialists. Perfect for players who want aerial superiority and unique movement options.",
            defaultCreatureSizeId: "creature-size-medium",
            languages: {
                connect: [
                    { id: language.common.id },
                    { id: language.aarakocra.id },
                    { id: language.auran.id }
                ]
            },
            traits: {
                connect: [
                    { id: raceTrait.flight.id },
                    { id: raceTrait.talons.id }
                ]
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScore.dex_two.id },
                    { id: raceAbilityScore.wis_one.id }
                ]
            },
            namesId: raceNames.aarakocra.id
        }),
        aasimar: await db.createRace({
            id: "race-aasimar",
            name: "Aasimar",
            slug: "aasimar",
            description: "Aasimar are descended from humans and often celestials, reflecting the light and pure good of the divine realm. This goodness is often signified by a celestial mark on their bodies and their undeniable beauty.",
            speed: "30 feet",
            age: "Aasimar mature at the same rate as humans but can live up to 160 years.",
            alignment: "Aasimar are inclined toward good alignments. Not all aasimar are of good alignment, but very few are evil.",
            heightRange: "5'4\" to 7'0\"",
            weightRange: "110 to 190 lbs",
            alabastriaLore: "Across Skratonia's cities and temples, Aasimar serve as beacons of hope and divine guidance. These celestial-touched individuals often work with clerics and paladins, their healing abilities and divine resistance making them natural leaders in the fight against darkness.",
            playstyle: "Divine support and healing specialists. Great for players who want to be the party's moral compass and primary healer.",
            defaultCreatureSizeId: "creature-size-medium",
            languages: {
                connect: [
                    { id: language.common.id },
                    { id: language.celestial.id }
                ]
            },
            traits: {
                connect: [
                    { id: raceTrait.darkvision.id },
                    { id: raceTrait.celestial_resistance.id },
                    { id: raceTrait.healing_hands.id }
                ]
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScore.cha_two.id }
                ]
            },
            namesId: raceNames.aasimar.id
        })
    };
    // Subraces
    const subrace: Record<string, Prisma.SubraceGetPayload<{}>> = {
        // Aasimar
        aasimar_protector: await db.createSubrace({
            id: "subrace-aasimar-protector",
            name: "Protector Aasimar",
            slug: "protector-aasimar",
            description: "Protector aasimar are charged by the powers of good to guard the weak, to seek out evil, and to stand vigilant against the darkness.",
            alabastriaContext: "Protector Aasimar in Skratonia's temples serve as divine guardians, their radiant wings inspiring hope in the faithful. They often work alongside Tharos Raggenthraw's Huntbound Order, bringing celestial light to the darkest corners of Alabastria.",
            playstyle: "Defensive support with healing and radiant damage. Perfect for players who want to protect allies while dealing divine damage.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScore.wis_one.id }
                ]
            },
            traits: {
                connect: [
                    { id: raceTrait.radiant_soul.id }
                ]
            },
            raceId: race.aasimar.id
        }),
        aasimar_scourge: await db.createSubrace({
            id: "subrace-aasimar-scourge",
            name: "Scourge Aasimar",
            slug: "scourge-aasimar",
            description: "Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil—a desire that is, at its best, unflinching and, at its worst, all-consuming.",
            alabastriaContext: "Scourge Aasimar in Alabastria's frontier regions channel their burning divine fury against the forces of evil. Their intense light and self-sacrificing nature make them formidable allies in the Huntbound Order's most dangerous missions.",
            playstyle: "Offensive support with area damage and self-sacrifice. Great for players who want to deal damage while supporting allies.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScore.con_one.id }
                ]
            },
            traits: {
                connect: [
                    { id: raceTrait.radiant_consumption.id }
                ]
            },
            raceId: race.aasimar.id
        }),
        aasimar_fallen: await db.createSubrace({
            id: "subrace-aasimar-fallen",
            name: "Fallen Aasimar",
            slug: "fallen-aasimar",
            description: "An aasimar who was touched by dark powers, or who chose to dabble in them, is an aasimar whose original celestial nature has been warped by evil.",
            alabastriaContext: "Fallen Aasimar in Alabastria's shadowed corners struggle with their corrupted divine nature. Some seek redemption through the Huntbound Order, while others embrace their dark power to fight evil with evil.",
            playstyle: "Dark support with necrotic damage and intimidation. Ideal for players who want to play morally complex characters with dark powers.",
            abilityScoreIncreases: {
                connect: [ 
                    { id: raceAbilityScore.str_one.id }
                ]
            },
            traits: {
                connect: [
                    { id: raceTrait.necrotic_shroud.id }
                ]
            },
            raceId: race.aasimar.id
        })
    }
    //await migrateLegacyData()

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