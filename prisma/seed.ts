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
import { Prisma, TownType, TradeRouteType, TradeRouteFrequency, ContinentLanguagePrevalence, GovernmentType, WarConflictStatus, Month, ContinentCreatureRelation, LegendaryCreatureThreatLevel, AbilityScores, ArmorProficiency, WeaponProficiency, ToolProficiency, DeityRelationshipCategory } from "../generated/prisma/client";
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
            ability: AbilityScores.DEXTERITY,
            modifier: 1
        }),
        dex_two: await db.createRaceAbilityScore({
            id: "race-ability-score-dex-two",
            ability: AbilityScores.DEXTERITY,
            modifier: 2
        }),
        cha_one: await db.createRaceAbilityScore({
            id: "race-ability-score-cha-one",
            ability: AbilityScores.CHARISMA,
            modifier: 1
        }),
        cha_two: await db.createRaceAbilityScore({
            id: "race-ability-score-cha-two",
            ability: AbilityScores.CHARISMA,
            modifier: 2
        }),
        wis_one: await db.createRaceAbilityScore({
            id: "race-ability-score-wis-one",
            ability: AbilityScores.WISDOM,
            modifier: 1
        }),
        wis_two: await db.createRaceAbilityScore({
            id: "race-ability-score-wis-two",
            ability: AbilityScores.WISDOM,
            modifier: 2
        }),
        int_one: await db.createRaceAbilityScore({
            id: "race-ability-score-int-one",
            ability: AbilityScores.INTELLIGENCE,
            modifier: 1
        }),
        int_two: await db.createRaceAbilityScore({
            id: "race-ability-score-int-two",
            ability: AbilityScores.INTELLIGENCE,
            modifier: 2
        }),
        con_one: await db.createRaceAbilityScore({
            id: "race-ability-score-con-one",
            ability: AbilityScores.CONSTITUTION,
            modifier: 1
        }),
        con_two: await db.createRaceAbilityScore({
            id: "race-ability-score-con-two",
            ability: AbilityScores.CONSTITUTION,
            modifier: 2
        }),
        str_one: await db.createRaceAbilityScore({
            id: "race-ability-score-str-one",
            ability: AbilityScores.STRENGTH,
            modifier: 1
        }),
        str_two: await db.createRaceAbilityScore({
            id: "race-ability-score-str-two",
            ability: AbilityScores.STRENGTH,
            modifier: 2
        }),
        any_one: await db.createRaceAbilityScore({
            id: "race-ability-score-any-one",
            ability: AbilityScores.ANY_OTHER,
            modifier: 1
        }),
        any_two: await db.createRaceAbilityScore({
            id: "race-ability-score-any-two",
            ability: AbilityScores.ANY_OTHER,
            modifier: 2
        })
    };
    // Race Traits
    const raceTrait: Record<string, Prisma.RaceTraitGetPayload<{}>> = {
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
    const raceNames: Record<string, Prisma.RaceNameGetPayload<{}>> = {
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
    const race: Record<string, Prisma.RaceGetPayload<{}>> = {
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
    const subrace: Record<string, Prisma.SubraceGetPayload<{}>> = {
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
    // Class Roles
    const classRole: Record<string, Prisma.ClassRoleGetPayload<{}>> = {
      tank: await db.createClassRole({
        id: "class-role-tank",
        name: "Tank",
        purpose: "Absorb damage and protect allies in combat.",
        keyTraits: [
          "Damage Mitigation",
          "Battlefield Presence",
          "Zone Control",
        ],
      }),
      striker: await db.createClassRole({
        id: "class-role-striker",
        name: "Striker",
        purpose: "Deal high damage to single targets.",
        keyTraits: [
          "Burst Damage",
          "Mobility",
          "Target Focus",
        ],
      }),
      damage_dealer: await db.createClassRole({
        id: "class-role-damage-dealer",
        name: "Damage Dealer",
        purpose: "Deal consistent damage across multiple turns or multiple targets.",
        keyTraits: [
          "Sustained Damage",
          "Area-of-Effect Options",
          "Reliable Output",
        ],
      }),
      controller: await db.createClassRole({
        id: "class-role-controller",
        name: "Controller",
        purpose: "Shape the battlefield by limiting enemy actions and movement.",
        keyTraits: [
          "Crowd Control",
          "Debuffs",
          "Battlefield Manipulation",
        ],
      }),
      healer: await db.createClassRole({
        id: "class-role-healer",
        name: "Healer",
        purpose: "Restore health and remove harmful conditions from allies.",
        keyTraits: [
          "Healing Output",
          "Condition Removal",
          "Emergency Recovery",
        ],
      }),
      support: await db.createClassRole({
        id: "class-role-support",
        name: "Support",
        purpose: "Enhance allies through buffs, bonuses, and tactical advantages.",
        keyTraits: [
          "Buffs",
          "Ally Synergy",
          "Resource Enhancement",
        ],
      }),
      utility: await db.createClassRole({
        id: "class-role-utility",
        name: "Utility",
        purpose: "Solve non-combat challenges and provide versatility in and out of combat.",
        keyTraits: [
          "Skill Expertise",
          "Exploration Tools",
          "Problem Solving",
        ],
      }),
      scout: await db.createClassRole({
        id: "class-role-scout",
        name: "Scout",
        purpose: "Gather information and secure advantageous positioning.",
        keyTraits: [
          "Stealth",
          "Reconnaissance",
          "Initiative Advantage",
        ],
      }),
      shapeshifter: await db.createClassRole({
        id: "class-role-shapeshifter",
        name: "Shapeshifter",
        purpose: "Adapt to situations by changing form or abilities.",
        keyTraits: [
          "Form Switching",
          "Role Flexibility",
          "Adaptive Combat Styles",
        ],
      }),
      summoner: await db.createClassRole({
        id: "class-role-summoner",
        name: "Summoner",
        purpose: "Control the battlefield through summoned creatures, minions, or conjured entities.",
        keyTraits: [
          "Minion Management",
          "Action Economy Advantage",
          "Battlefield Presence",
        ],
      }),
      blaster: await db.createClassRole({
        id: "class-role-blaster",
        name: "Blaster",
        purpose: "Deal heavy area-of-effect damage using powerful offensive abilities or spells.",
        keyTraits: [
          "Area-of-Effect Damage",
          "High Burst Output",
          "Limited Sustained Damage",
        ],
      }),
      defender: await db.createClassRole({
        id: "class-role-defender",
        name: "Defender",
        purpose: "Protect allies by combining durability with battlefield control.",
        keyTraits: [
          "Damage Mitigation",
          "Enemy Control",
          "Frontline Presence",
        ],
      }),
      face: await db.createClassRole({
        id: "class-role-face",
        name: "Face",
        purpose: "Handle social encounters and negotiations on behalf of the party.",
        keyTraits: [
          "High Charisma",
          "Persuasion and Deception",
          "Social Influence",
        ],
      }),
    };
    // Class Features
    const classFeature: Record<string, Prisma.ClassFeatureGetPayload<{}>> = {
      artificer_magical_tinkering: await db.createClassFeature({
        id: "class-feature-artificer-magical-tinkering",
        name: "Magical Tinkering",
        level: 1,
        description: "Create tiny magical objects that produce minor effects",
      }),
      artificer_infuse_item: await db.createClassFeature({
        id: "class-feature-artificer-infuse-item",
        name: "Infuse Item",
        level: 2,
        description: "Imbue mundane items with magical properties",
      }),
      artificer_spellcasting: await db.createClassFeature({
        id: "class-feature-artificer-spellcasting",
        name: "Spellcasting",
        level: 1,
        description: "Half-caster using tools as spellcasting focus",
      }),
      artificer_tool_expertise: await db.createClassFeature({
        id: "class-feature-artificer-tool-expertise",
        name: "Tool Expertise",
        level: 6,
        description: "Double proficiency bonus with tool checks",
      }),
      artificer_alchemist_experimental_elixir: await db.createClassFeature({
        id: "class-feature-artificer-alchemist-experimental-elixir",
        name: "Experimental Elixir",
        level: 3,
        description: "Create random beneficial potions each day",
      }),
      artificer_alchemist_healing_word: await db.createClassFeature({
        id: "class-feature-artificer-alchemist-healing-word",
        name: "Healing Word",
        level: 3,
        description: "Always prepared spell for emergency healing",
      }),
      artificer_alchemist_alchemical_savant: await db.createClassFeature({
        id: "class-feature-artificer-alchemist-alchemical-savant",
        name: "Alchemical Savant",
        level: 5,
        description: "Add INT modifier to spell damage and healing",
      }),
      artificer_armorer_arcane_armor: await db.createClassFeature({
        id: "class-feature-artificer-armorer-arcane-armor",
        name: "Arcane Armor",
        level: 3,
        description: "Transform armor into magical suit with special properties",
      }),
      artificer_armorer_armor_model: await db.createClassFeature({
        id: "class-feature-artificer-armorer-armor-model",
        name: "Armor Model",
        level: 3,
        description: "Choose between Guardian (tank) or Infiltrator (stealth) modes",
      }),
      artificer_armorer_extra_attack: await db.createClassFeature({
        id: "class-feature-artificer-armorer-extra-attack",
        name: "Extra Attack",
        level: 5,
        description: "Make two attacks when you take the Attack action",
      }),
      artificer_artillerist_eldritch_cannons: await db.createClassFeature({
        id: "class-feature-artificer-artillerist-eldritch-cannons",
        name: "Eldritch Cannons",
        level: 3,
        description: "Create magical turrets for offense, defense, or support",
      }),
      artificer_artillerist_arcane_firearm: await db.createClassFeature({
        id: "class-feature-artificer-artillerist-arcane-firearm",
        name: "Arcane Firearm",
        level: 5,
        description: "Enhanced damage with artificer spells using wands or rods",
      }),
      artificer_artillerist_explosive_cannon: await db.createClassFeature({
        id: "class-feature-artificer-artillerist-explosive-cannon",
        name: "Explosive Cannon",
        level: 9,
        description: "Sacrifice cannons for explosive damage",
      }),
      artificer_battle_smith_steel_defender: await db.createClassFeature({
        id: "class-feature-artificer-battle-smith-steel-defender",
        name: "Steel Defender",
        level: 3,
        description: "Mechanical companion that fights alongside you",
      }),
      artificer_battle_smith_battle_ready: await db.createClassFeature({
        id: "class-feature-artificer-battle-smith-battle-ready",
        name: "Battle Ready",
        level: 3,
        description: "Use INT for weapon attacks and gain martial weapon proficiency",
      }),
      artificer_battle_smith_extra_attack: await db.createClassFeature({
        id: "class-feature-artificer-battle-smith-extra-attack",
        name: "Extra Attack",
        level: 5,
        description: "Make two attacks when you take the Attack action",
      }),
      barbarian_rage: await db.createClassFeature({
        id: "class-feature-barbarian-rage",
        name: "Rage",
        level: 1,
        description: "Enter a battle fury for damage bonus and damage resistance",
      }),
      barbarian_unarmored_defense: await db.createClassFeature({
        id: "class-feature-barbarian-unarmored-defense",
        name: "Unarmored Defense",
        level: 1,
        description: "AC equals 10 + Dex modifier + Con modifier while unarmored",
      }),
      barbarian_reckless_attack: await db.createClassFeature({
        id: "class-feature-barbarian-reckless-attack",
        name: "Reckless Attack",
        level: 2,
        description: "Gain advantage on attacks but enemies have advantage against you",
      }),
      barbarian_extra_attack: await db.createClassFeature({
        id: "class-feature-barbarian-extra-attack",
        name: "Extra Attack",
        level: 5,
        description: "Make two attacks when you take the Attack action",
      }),
      barbarian_path_of_the_ancestral_guardian_ancestral_protectors: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-ancestral-guardian-ancestral-protectors",
        name: "Ancestral Protectors",
        level: 3,
        description: "Ancestors reduce damage to allies and hinder your targets",
      }),
      barbarian_path_of_the_ancestral_guardian_spirit_shield: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-ancestral-guardian-spirit-shield",
        name: "Spirit Shield",
        level: 6,
        description: "Use reaction to reduce damage to nearby allies",
      }),
      barbarian_path_of_the_ancestral_guardian_consult_the_spirits: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-ancestral-guardian-consult-the-spirits",
        name: "Consult The Spirits",
        level: 10,
        description: "Cast augury or clairvoyance as rituals",
      }),
      barbarian_path_of_the_beast_form_of_the_beast: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-beast-form-of-the-beast",
        name: "Form Of The Beast",
        level: 3,
        description: "Grow natural weapons when you rage: bite, claws, or tail",
      }),
      barbarian_path_of_the_beast_bestial_soul: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-beast-bestial-soul",
        name: "Bestial Soul",
        level: 6,
        description: "Gain climbing, swimming speed or enhanced jumping",
      }),
      barbarian_path_of_the_beast_infectious_fury: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-beast-infectious-fury",
        name: "Infectious Fury",
        level: 10,
        description: "Spread your bestial rage to allies",
      }),
      barbarian_path_of_the_berserker_frenzy: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-berserker-frenzy",
        name: "Frenzy",
        level: 3,
        description: "Make additional attacks during rage but gain exhaustion",
      }),
      barbarian_path_of_the_berserker_mindless_rage: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-berserker-mindless-rage",
        name: "Mindless Rage",
        level: 6,
        description: "Immunity to charm and fear while raging",
      }),
      barbarian_path_of_the_berserker_intimidating_presence: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-berserker-intimidating-presence",
        name: "Intimidating Presence",
        level: 10,
        description: "Frighten enemies with your ferocity",
      }),
      barbarian_path_of_the_storm_herald_storm_aura: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-storm-herald-storm-aura",
        name: "Storm Aura",
        level: 3,
        description: "Choose desert (fire), sea (lightning), or tundra (cold) aura effects",
      }),
      barbarian_path_of_the_storm_herald_storm_soul: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-storm-herald-storm-soul",
        name: "Storm Soul",
        level: 6,
        description: "Gain resistance and additional benefits based on your aura",
      }),
      barbarian_path_of_the_storm_herald_shielding_storm: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-storm-herald-shielding-storm",
        name: "Shielding Storm",
        level: 10,
        description: "Grant resistance to allies within your aura",
      }),
      barbarian_path_of_the_totem_warrior_totem_spirit: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-totem-warrior-totem-spirit",
        name: "Totem Spirit",
        level: 3,
        description: "Choose bear (resistance), eagle (perception), or wolf (pack tactics) totems",
      }),
      barbarian_path_of_the_totem_warrior_aspect_of_the_beast: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-totem-warrior-aspect-of-the-beast",
        name: "Aspect Of The Beast",
        level: 6,
        description: "Gain additional totem animal benefits outside of rage",
      }),
      barbarian_path_of_the_totem_warrior_totemic_attunement: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-totem-warrior-totemic-attunement",
        name: "Totemic Attunement",
        level: 14,
        description: "Powerful totem abilities that affect combat and exploration",
      }),
      barbarian_path_of_the_zealot_divine_fury: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-zealot-divine-fury",
        name: "Divine Fury",
        level: 3,
        description: "Deal extra radiant or necrotic damage while raging",
      }),
      barbarian_path_of_the_zealot_warrior_of_the_gods: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-zealot-warrior-of-the-gods",
        name: "Warrior Of The Gods",
        level: 3,
        description: "Spells that restore you to life require no material components",
      }),
      barbarian_path_of_the_zealot_zealous_presence: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-zealot-zealous-presence",
        name: "Zealous Presence",
        level: 10,
        description: "Grant allies advantage on attacks and saving throws",
      }),
      barbarian_path_of_the_battlerager_battlerager_armor: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-battlerager-battlerager-armor",
        name: "Battlerager Armor",
        level: 3,
        description: "Gain proficiency with spiked armor and can use it as a weapon",
      }),
      barbarian_path_of_the_battlerager_reckless_abandon: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-battlerager-reckless-abandon",
        name: "Reckless Abandon",
        level: 3,
        description: "Gain temporary hit points when you use Reckless Attack",
      }),
      barbarian_path_of_the_battlerager_battlerager_charge: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-battlerager-battlerager-charge",
        name: "Battlerager Charge",
        level: 6,
        description: "Charge into battle, dealing damage and knocking enemies prone",
      }),
      barbarian_path_of_the_giant_giants_might: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-giant-giants-might",
        name: "Giants Might",
        level: 3,
        description: "Grow to Large size when you rage, gaining reach and damage bonuses",
      }),
      barbarian_path_of_the_giant_elemental_cleaver: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-giant-elemental-cleaver",
        name: "Elemental Cleaver",
        level: 6,
        description: "Infuse your attacks with elemental damage based on your chosen giant type",
      }),
      barbarian_path_of_the_giant_mighty_impel: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-the-giant-mighty-impel",
        name: "Mighty Impel",
        level: 10,
        description: "Throw enemies or objects with incredible force, dealing damage and knocking them back",
      }),
      barbarian_path_of_wild_magic_magic_awareness: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-wild-magic-magic-awareness",
        name: "Magic Awareness",
        level: 3,
        description: "Sense magic around you as a bonus action and gain advantage on saving throws against spells",
      }),
      barbarian_path_of_wild_magic_wild_surge: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-wild-magic-wild-surge",
        name: "Wild Surge",
        level: 3,
        description: "Trigger random magical effects when you rage, from beneficial to dangerous",
      }),
      barbarian_path_of_wild_magic_bolstering_magic: await db.createClassFeature({
        id: "class-feature-barbarian-path-of-wild-magic-bolstering-magic",
        name: "Bolstering Magic",
        level: 6,
        description: "Grant spell slots or enhance ability checks for allies through your wild magic",
      }),
      bard_spellcasting: await db.createClassFeature({
        id: "class-feature-bard-spellcasting",
        name: "Spellcasting",
        level: 1,
        description: "Full caster with access to spells from any class",
      }),
      bard_bardic_inspiration: await db.createClassFeature({
        id: "class-feature-bard-bardic-inspiration",
        name: "Bardic Inspiration",
        level: 1,
        description: "Grant allies bonus dice to add to their rolls",
      }),
      bard_jack_of_all_trades: await db.createClassFeature({
        id: "class-feature-bard-jack-of-all-trades",
        name: "Jack Of All Trades",
        level: 2,
        description: "Add half proficiency bonus to non-proficient ability checks",
      }),
      bard_expertise: await db.createClassFeature({
        id: "class-feature-bard-expertise",
        name: "Expertise",
        level: 3,
        description: "Double proficiency bonus for chosen skills",
      }),
      bard_college_of_creation_note_of_potential: await db.createClassFeature({
        id: "class-feature-bard-college-of-creation-note-of-potential",
        name: "Note Of Potential",
        level: 3,
        description: "Bardic Inspiration dice can trigger additional effects",
      }),
      bard_college_of_creation_performance_of_creation: await db.createClassFeature({
        id: "class-feature-bard-college-of-creation-performance-of-creation",
        name: "Performance Of Creation",
        level: 3,
        description: "Create nonmagical items through performance",
      }),
      bard_college_of_creation_animating_performance: await db.createClassFeature({
        id: "class-feature-bard-college-of-creation-animating-performance",
        name: "Animating Performance",
        level: 6,
        description: "Bring objects to life as dancing companions",
      }),
      bard_college_of_eloquence_silver_tongue: await db.createClassFeature({
        id: "class-feature-bard-college-of-eloquence-silver-tongue",
        name: "Silver Tongue",
        level: 3,
        description: "Treat low rolls on Deception and Persuasion as 10s",
      }),
      bard_college_of_eloquence_unsettling_words: await db.createClassFeature({
        id: "class-feature-bard-college-of-eloquence-unsettling-words",
        name: "Unsettling Words",
        level: 3,
        description: "Use Bardic Inspiration to reduce enemy saving throws",
      }),
      bard_college_of_eloquence_universal_speech: await db.createClassFeature({
        id: "class-feature-bard-college-of-eloquence-universal-speech",
        name: "Universal Speech",
        level: 6,
        description: "Make any creature understand your speech",
      }),
      bard_college_of_glamour_mantle_of_inspiration: await db.createClassFeature({
        id: "class-feature-bard-college-of-glamour-mantle-of-inspiration",
        name: "Mantle Of Inspiration",
        level: 3,
        description: "Grant allies temporary hit points and movement",
      }),
      bard_college_of_glamour_enthralling_performance: await db.createClassFeature({
        id: "class-feature-bard-college-of-glamour-enthralling-performance",
        name: "Enthralling Performance",
        level: 3,
        description: "Charm creatures through extended performance",
      }),
      bard_college_of_glamour_mantle_of_majesty: await db.createClassFeature({
        id: "class-feature-bard-college-of-glamour-mantle-of-majesty",
        name: "Mantle Of Majesty",
        level: 6,
        description: "Cast command as a bonus action while concentrating on enchantment",
      }),
      bard_college_of_lore_cutting_words: await db.createClassFeature({
        id: "class-feature-bard-college-of-lore-cutting-words",
        name: "Cutting Words",
        level: 3,
        description: "Use Bardic Inspiration to reduce enemy attack, ability, and damage rolls",
      }),
      bard_college_of_lore_additional_magical_secrets: await db.createClassFeature({
        id: "class-feature-bard-college-of-lore-additional-magical-secrets",
        name: "Additional Magical Secrets",
        level: 6,
        description: "Learn spells from any class earlier than other bards",
      }),
      bard_college_of_lore_peerless_skill: await db.createClassFeature({
        id: "class-feature-bard-college-of-lore-peerless-skill",
        name: "Peerless Skill",
        level: 14,
        description: "Add half your proficiency bonus to Bardic Inspiration",
      }),
      bard_college_of_spirits_guiding_whispers: await db.createClassFeature({
        id: "class-feature-bard-college-of-spirits-guiding-whispers",
        name: "Guiding Whispers",
        level: 3,
        description: "Bardic Inspiration can be used on Wisdom or Charisma checks",
      }),
      bard_college_of_spirits_spirit_session: await db.createClassFeature({
        id: "class-feature-bard-college-of-spirits-spirit-session",
        name: "Spirit Session",
        level: 3,
        description: "Channel spirits for random magical effects",
      }),
      bard_college_of_spirits_tales_from_beyond: await db.createClassFeature({
        id: "class-feature-bard-college-of-spirits-tales-from-beyond",
        name: "Tales From Beyond",
        level: 6,
        description: "Use Bardic Inspiration to trigger specific spirit effects",
      }),
      bard_college_of_swords_fighting_style: await db.createClassFeature({
        id: "class-feature-bard-college-of-swords-fighting-style",
        name: "Fighting Style",
        level: 3,
        description: "Choose Dueling or Two-Weapon Fighting",
      }),
      bard_college_of_swords_blade_flourish: await db.createClassFeature({
        id: "class-feature-bard-college-of-swords-blade-flourish",
        name: "Blade Flourish",
        level: 3,
        description: "Use Bardic Inspiration for special attack effects",
      }),
      bard_college_of_swords_extra_attack: await db.createClassFeature({
        id: "class-feature-bard-college-of-swords-extra-attack",
        name: "Extra Attack",
        level: 6,
        description: "Make two attacks when you take the Attack action",
      }),
      bard_college_of_valor_combat_inspiration: await db.createClassFeature({
        id: "class-feature-bard-college-of-valor-combat-inspiration",
        name: "Combat Inspiration",
        level: 3,
        description: "Bardic Inspiration can add to weapon damage or AC",
      }),
      bard_college_of_valor_medium_armor_and_shields: await db.createClassFeature({
        id: "class-feature-bard-college-of-valor-medium-armor-and-shields",
        name: "Medium Armor And Shields",
        level: 3,
        description: "Proficiency with medium armor, shields, and martial weapons",
      }),
      bard_college_of_valor_extra_attack: await db.createClassFeature({
        id: "class-feature-bard-college-of-valor-extra-attack",
        name: "Extra Attack",
        level: 6,
        description: "Make two attacks when you take the Attack action",
      }),
      bard_college_of_whispers_psychic_blades: await db.createClassFeature({
        id: "class-feature-bard-college-of-whispers-psychic-blades",
        name: "Psychic Blades",
        level: 3,
        description: "Use Bardic Inspiration to deal psychic damage",
      }),
      bard_college_of_whispers_words_of_terror: await db.createClassFeature({
        id: "class-feature-bard-college-of-whispers-words-of-terror",
        name: "Words Of Terror",
        level: 3,
        description: "Frighten creatures through whispered secrets",
      }),
      bard_college_of_whispers_mantle_of_whispers: await db.createClassFeature({
        id: "class-feature-bard-college-of-whispers-mantle-of-whispers",
        name: "Mantle Of Whispers",
        level: 6,
        description: "Capture and use the shadows of humanoids",
      }),
      cleric_spellcasting: await db.createClassFeature({
        id: "class-feature-cleric-spellcasting",
        name: "Spellcasting",
        level: 1,
        description: "Full caster with access to entire cleric spell list",
      }),
      cleric_divine_domain: await db.createClassFeature({
        id: "class-feature-cleric-divine-domain",
        name: "Divine Domain",
        level: 1,
        description: "Choose a domain that grants additional spells and abilities",
      }),
      cleric_channel_divinity: await db.createClassFeature({
        id: "class-feature-cleric-channel-divinity",
        name: "Channel Divinity",
        level: 2,
        description: "Channel divine energy for powerful effects",
      }),
      cleric_destroy_undead: await db.createClassFeature({
        id: "class-feature-cleric-destroy-undead",
        name: "Destroy Undead",
        level: 5,
        description: "Automatically destroy low-CR undead with Channel Divinity",
      }),
      cleric_forge_domain_blessing_of_the_forge: await db.createClassFeature({
        id: "class-feature-cleric-forge-domain-blessing-of-the-forge",
        name: "Blessing Of The Forge",
        level: 1,
        description: "Enhance weapons or armor with +1 bonus",
      }),
      cleric_forge_domain_channel_divinity_artisans_blessing: await db.createClassFeature({
        id: "class-feature-cleric-forge-domain-channel-divinity-artisans-blessing",
        name: "Channel Divinity Artisans Blessing",
        level: 2,
        description: "Create simple metal items through divine power",
      }),
      cleric_forge_domain_soul_of_the_forge: await db.createClassFeature({
        id: "class-feature-cleric-forge-domain-soul-of-the-forge",
        name: "Soul Of The Forge",
        level: 6,
        description: "Resistance to fire damage and +1 AC while wearing heavy armor",
      }),
      cleric_life_domain_disciple_of_life: await db.createClassFeature({
        id: "class-feature-cleric-life-domain-disciple-of-life",
        name: "Disciple Of Life",
        level: 1,
        description: "Healing spells restore additional hit points",
      }),
      cleric_life_domain_channel_divinity_preserve_life: await db.createClassFeature({
        id: "class-feature-cleric-life-domain-channel-divinity-preserve-life",
        name: "Channel Divinity Preserve Life",
        level: 2,
        description: "Heal multiple allies simultaneously",
      }),
      cleric_life_domain_blessed_healer: await db.createClassFeature({
        id: "class-feature-cleric-life-domain-blessed-healer",
        name: "Blessed Healer",
        level: 6,
        description: "Heal yourself when you heal others with spells",
      }),
      cleric_war_domain_war_priest: await db.createClassFeature({
        id: "class-feature-cleric-war-domain-war-priest",
        name: "War Priest",
        level: 1,
        description: "Make bonus action weapon attacks when casting spells",
      }),
      cleric_war_domain_channel_divinity_guided_strike: await db.createClassFeature({
        id: "class-feature-cleric-war-domain-channel-divinity-guided-strike",
        name: "Channel Divinity Guided Strike",
        level: 2,
        description: "Gain +10 bonus to attack rolls",
      }),
      cleric_war_domain_war_domain_spells: await db.createClassFeature({
        id: "class-feature-cleric-war-domain-war-domain-spells",
        name: "War Domain Spells",
        level: 1,
        description: "Always know spells like shield, spiritual weapon, and crusader's mantle",
      }),
      cleric_tempest_domain_wrath_of_the_storm: await db.createClassFeature({
        id: "class-feature-cleric-tempest-domain-wrath-of-the-storm",
        name: "Wrath Of The Storm",
        level: 1,
        description: "Deal thunder or lightning damage to attackers",
      }),
      cleric_tempest_domain_channel_divinity_destructive_wrath: await db.createClassFeature({
        id: "class-feature-cleric-tempest-domain-channel-divinity-destructive-wrath",
        name: "Channel Divinity Destructive Wrath",
        level: 2,
        description: "Maximize thunder or lightning damage",
      }),
      cleric_tempest_domain_thunderbolt_strike: await db.createClassFeature({
        id: "class-feature-cleric-tempest-domain-thunderbolt-strike",
        name: "Thunderbolt Strike",
        level: 6,
        description: "Push enemies when dealing lightning damage",
      }),
      cleric_light_domain_warding_flare: await db.createClassFeature({
        id: "class-feature-cleric-light-domain-warding-flare",
        name: "Warding Flare",
        level: 1,
        description: "Impose disadvantage on enemy attacks as a reaction",
      }),
      cleric_light_domain_channel_divinity_radiance_of_the_dawn: await db.createClassFeature({
        id: "class-feature-cleric-light-domain-channel-divinity-radiance-of-the-dawn",
        name: "Channel Divinity Radiance Of The Dawn",
        level: 2,
        description: "Create a burst of radiant light that damages undead and fiends",
      }),
      cleric_light_domain_potent_spellcasting: await db.createClassFeature({
        id: "class-feature-cleric-light-domain-potent-spellcasting",
        name: "Potent Spellcasting",
        level: 8,
        description: "Add Wisdom modifier to cantrip damage",
      }),
      cleric_nature_domain_acolyte_of_nature: await db.createClassFeature({
        id: "class-feature-cleric-nature-domain-acolyte-of-nature",
        name: "Acolyte Of Nature",
        level: 1,
        description: "Learn a druid cantrip and gain proficiency with heavy armor",
      }),
      cleric_nature_domain_channel_divinity_charm_animals_and_plants: await db.createClassFeature({
        id: "class-feature-cleric-nature-domain-channel-divinity-charm-animals-and-plants",
        name: "Channel Divinity Charm Animals And Plants",
        level: 2,
        description: "Charm beasts and plants to aid you",
      }),
      cleric_nature_domain_dampen_elements: await db.createClassFeature({
        id: "class-feature-cleric-nature-domain-dampen-elements",
        name: "Dampen Elements",
        level: 6,
        description: "Grant resistance to elemental damage to allies",
      }),
      cleric_trickery_domain_blessing_of_the_trickster: await db.createClassFeature({
        id: "class-feature-cleric-trickery-domain-blessing-of-the-trickster",
        name: "Blessing Of The Trickster",
        level: 1,
        description: "Grant advantage on Stealth checks to allies",
      }),
      cleric_trickery_domain_channel_divinity_invoke_duplicity: await db.createClassFeature({
        id: "class-feature-cleric-trickery-domain-channel-divinity-invoke-duplicity",
        name: "Channel Divinity Invoke Duplicity",
        level: 2,
        description: "Create an illusory duplicate of yourself",
      }),
      cleric_trickery_domain_cloak_of_shadows: await db.createClassFeature({
        id: "class-feature-cleric-trickery-domain-cloak-of-shadows",
        name: "Cloak Of Shadows",
        level: 6,
        description: "Turn invisible as an action",
      }),
      druid_druidcraft: await db.createClassFeature({
        id: "class-feature-druid-druidcraft",
        name: "Druidcraft",
        level: 1,
        description: "Minor nature-based magical effects",
      }),
      druid_spellcasting: await db.createClassFeature({
        id: "class-feature-druid-spellcasting",
        name: "Spellcasting",
        level: 1,
        description: "Full caster with nature and elemental spells",
      }),
      druid_wild_shape: await db.createClassFeature({
        id: "class-feature-druid-wild-shape",
        name: "Wild Shape",
        level: 2,
        description: "Transform into beasts for combat and utility",
      }),
      druid_druid_circle: await db.createClassFeature({
        id: "class-feature-druid-druid-circle",
        name: "Druid Circle",
        level: 2,
        description: "Choose a circle that defines your druidic focus",
      }),
      druid_circle_of_the_land_bonus_cantrip: await db.createClassFeature({
        id: "class-feature-druid-circle-of-the-land-bonus-cantrip",
        name: "Bonus Cantrip",
        level: 2,
        description: "Learn an additional druid cantrip",
      }),
      druid_circle_of_the_land_natural_recovery: await db.createClassFeature({
        id: "class-feature-druid-circle-of-the-land-natural-recovery",
        name: "Natural Recovery",
        level: 2,
        description: "Recover spell slots during short rests",
      }),
      druid_circle_of_the_land_circle_spells: await db.createClassFeature({
        id: "class-feature-druid-circle-of-the-land-circle-spells",
        name: "Circle Spells",
        level: 3,
        description: "Additional spells based on chosen land type",
      }),
      druid_circle_of_the_moon_combat_wild_shape: await db.createClassFeature({
        id: "class-feature-druid-circle-of-the-moon-combat-wild-shape",
        name: "Combat Wild Shape",
        level: 2,
        description: "Use Wild Shape as a bonus action and while in beast form",
      }),
      druid_circle_of_the_moon_circle_forms: await db.createClassFeature({
        id: "class-feature-druid-circle-of-the-moon-circle-forms",
        name: "Circle Forms",
        level: 2,
        description: "Transform into more powerful beasts, including CR 1 creatures",
      }),
      druid_circle_of_the_moon_primal_strike: await db.createClassFeature({
        id: "class-feature-druid-circle-of-the-moon-primal-strike",
        name: "Primal Strike",
        level: 6,
        description: "Beast form attacks count as magical",
      }),
      druid_circle_of_wildfire_summon_wildfire_spirit: await db.createClassFeature({
        id: "class-feature-druid-circle-of-wildfire-summon-wildfire-spirit",
        name: "Summon Wildfire Spirit",
        level: 2,
        description: "Summon a fire elemental companion",
      }),
      druid_circle_of_wildfire_enhanced_bond: await db.createClassFeature({
        id: "class-feature-druid-circle-of-wildfire-enhanced-bond",
        name: "Enhanced Bond",
        level: 6,
        description: "Gain benefits when your wildfire spirit is active",
      }),
      druid_circle_of_wildfire_circle_spells: await db.createClassFeature({
        id: "class-feature-druid-circle-of-wildfire-circle-spells",
        name: "Circle Spells",
        level: 2,
        description: "Additional fire and healing spells",
      }),
      fighter_fighting_style: await db.createClassFeature({
        id: "class-feature-fighter-fighting-style",
        name: "Fighting Style",
        level: 1,
        description: "Choose a specialized combat technique",
      }),
      fighter_second_wind: await db.createClassFeature({
        id: "class-feature-fighter-second-wind",
        name: "Second Wind",
        level: 1,
        description: "Recover hit points as a bonus action",
      }),
      fighter_action_surge: await db.createClassFeature({
        id: "class-feature-fighter-action-surge",
        name: "Action Surge",
        level: 2,
        description: "Take an additional action on your turn",
      }),
      fighter_extra_attack: await db.createClassFeature({
        id: "class-feature-fighter-extra-attack",
        name: "Extra Attack",
        level: 5,
        description: "Make multiple attacks when you take the Attack action",
      }),
      fighter_champion_improved_critical: await db.createClassFeature({
        id: "class-feature-fighter-champion-improved-critical",
        name: "Improved Critical",
        level: 3,
        description: "Score critical hits on 19-20",
      }),
      fighter_champion_remarkable_athlete: await db.createClassFeature({
        id: "class-feature-fighter-champion-remarkable-athlete",
        name: "Remarkable Athlete",
        level: 7,
        description: "Add half proficiency to Strength, Dexterity, and Constitution checks",
      }),
      fighter_champion_additional_fighting_style: await db.createClassFeature({
        id: "class-feature-fighter-champion-additional-fighting-style",
        name: "Additional Fighting Style",
        level: 10,
        description: "Choose a second fighting style",
      }),
      fighter_battle_master_combat_superiority: await db.createClassFeature({
        id: "class-feature-fighter-battle-master-combat-superiority",
        name: "Combat Superiority",
        level: 3,
        description: "Superiority dice to fuel special maneuvers",
      }),
      fighter_battle_master_maneuvers: await db.createClassFeature({
        id: "class-feature-fighter-battle-master-maneuvers",
        name: "Maneuvers",
        level: 3,
        description: "Learn tactical combat techniques like Trip Attack and Riposte",
      }),
      fighter_battle_master_know_your_enemy: await db.createClassFeature({
        id: "class-feature-fighter-battle-master-know-your-enemy",
        name: "Know Your Enemy",
        level: 7,
        description: "Learn information about enemy capabilities",
      }),
      fighter_eldritch_knight_spellcasting: await db.createClassFeature({
        id: "class-feature-fighter-eldritch-knight-spellcasting",
        name: "Spellcasting",
        level: 3,
        description: "One-third caster focusing on abjuration and evocation",
      }),
      fighter_eldritch_knight_weapon_bond: await db.createClassFeature({
        id: "class-feature-fighter-eldritch-knight-weapon-bond",
        name: "Weapon Bond",
        level: 3,
        description: "Bond with weapons to summon them and enhance attacks",
      }),
      fighter_eldritch_knight_war_magic: await db.createClassFeature({
        id: "class-feature-fighter-eldritch-knight-war-magic",
        name: "War Magic",
        level: 7,
        description: "Make weapon attacks after casting cantrips",
      }),
      monk_unarmored_defense: await db.createClassFeature({
        id: "class-feature-monk-unarmored-defense",
        name: "Unarmored Defense",
        level: 1,
        description: "AC equals 10 + Dex modifier + Wis modifier while unarmored",
      }),
      monk_martial_arts: await db.createClassFeature({
        id: "class-feature-monk-martial-arts",
        name: "Martial Arts",
        level: 1,
        description: "Enhanced unarmed strikes and bonus action attacks",
      }),
      monk_ki: await db.createClassFeature({
        id: "class-feature-monk-ki",
        name: "Ki",
        level: 2,
        description: "Spend ki points for special techniques and abilities",
      }),
      monk_unarmored_movement: await db.createClassFeature({
        id: "class-feature-monk-unarmored-movement",
        name: "Unarmored Movement",
        level: 2,
        description: "Increased speed while unarmored",
      }),
      monk_way_of_the_open_hand_open_hand_technique: await db.createClassFeature({
        id: "class-feature-monk-way-of-the-open-hand-open-hand-technique",
        name: "Open Hand Technique",
        level: 3,
        description: "Add effects to Flurry of Blows attacks: knock prone, push, or prevent reactions",
      }),
      monk_way_of_the_open_hand_wholeness_of_body: await db.createClassFeature({
        id: "class-feature-monk-way-of-the-open-hand-wholeness-of-body",
        name: "Wholeness Of Body",
        level: 6,
        description: "Heal yourself using ki",
      }),
      monk_way_of_the_open_hand_tranquility: await db.createClassFeature({
        id: "class-feature-monk-way-of-the-open-hand-tranquility",
        name: "Tranquility",
        level: 11,
        description: "End enchantments on yourself and gain sanctuary-like protection",
      }),
      monk_way_of_shadow_shadow_arts: await db.createClassFeature({
        id: "class-feature-monk-way-of-shadow-shadow-arts",
        name: "Shadow Arts",
        level: 3,
        description: "Cast darkness, darkvision, pass without trace, and silence using ki",
      }),
      monk_way_of_shadow_shadow_step: await db.createClassFeature({
        id: "class-feature-monk-way-of-shadow-shadow-step",
        name: "Shadow Step",
        level: 6,
        description: "Teleport between shadows and gain advantage on attacks",
      }),
      monk_way_of_shadow_cloak_of_shadows: await db.createClassFeature({
        id: "class-feature-monk-way-of-shadow-cloak-of-shadows",
        name: "Cloak Of Shadows",
        level: 11,
        description: "Become invisible as an action",
      }),
      monk_way_of_the_four_elements_elemental_disciplines: await db.createClassFeature({
        id: "class-feature-monk-way-of-the-four-elements-elemental-disciplines",
        name: "Elemental Disciplines",
        level: 3,
        description: "Learn to cast elemental spells using ki points",
      }),
      monk_way_of_the_four_elements_additional_disciplines: await db.createClassFeature({
        id: "class-feature-monk-way-of-the-four-elements-additional-disciplines",
        name: "Additional Disciplines",
        level: 6,
        description: "Learn more powerful elemental techniques",
      }),
      monk_way_of_the_four_elements_elemental_mastery: await db.createClassFeature({
        id: "class-feature-monk-way-of-the-four-elements-elemental-mastery",
        name: "Elemental Mastery",
        level: 11,
        description: "Access to high-level elemental spells",
      }),
      paladin_divine_sense: await db.createClassFeature({
        id: "class-feature-paladin-divine-sense",
        name: "Divine Sense",
        level: 1,
        description: "Detect celestials, fiends, and undead",
      }),
      paladin_lay_on_hands: await db.createClassFeature({
        id: "class-feature-paladin-lay-on-hands",
        name: "Lay On Hands",
        level: 1,
        description: "Heal others through touch",
      }),
      paladin_divine_smite: await db.createClassFeature({
        id: "class-feature-paladin-divine-smite",
        name: "Divine Smite",
        level: 2,
        description: "Expend spell slots for extra radiant damage",
      }),
      paladin_sacred_oath: await db.createClassFeature({
        id: "class-feature-paladin-sacred-oath",
        name: "Sacred Oath",
        level: 3,
        description: "Choose an oath that defines your paladin's mission",
      }),
      paladin_oath_of_devotion_sacred_weapon: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-devotion-sacred-weapon",
        name: "Sacred Weapon",
        level: 3,
        description: "Channel Divinity to make weapon magical and shed bright light",
      }),
      paladin_oath_of_devotion_turn_the_unholy: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-devotion-turn-the-unholy",
        name: "Turn The Unholy",
        level: 3,
        description: "Channel Divinity to turn fiends and undead",
      }),
      paladin_oath_of_devotion_aura_of_devotion: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-devotion-aura-of-devotion",
        name: "Aura Of Devotion",
        level: 7,
        description: "Grant charm immunity to nearby allies",
      }),
      paladin_oath_of_the_ancients_natures_wrath: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-the-ancients-natures-wrath",
        name: "Natures Wrath",
        level: 3,
        description: "Channel Divinity to restrain enemies with spectral vines",
      }),
      paladin_oath_of_the_ancients_turn_the_faithless: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-the-ancients-turn-the-faithless",
        name: "Turn The Faithless",
        level: 3,
        description: "Channel Divinity to turn fey and fiends",
      }),
      paladin_oath_of_the_ancients_aura_of_warding: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-the-ancients-aura-of-warding",
        name: "Aura Of Warding",
        level: 7,
        description: "Grant spell damage resistance to nearby allies",
      }),
      paladin_oath_of_vengeance_abjure_enemy: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-vengeance-abjure-enemy",
        name: "Abjure Enemy",
        level: 3,
        description: "Channel Divinity to frighten and slow a target",
      }),
      paladin_oath_of_vengeance_vow_of_enmity: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-vengeance-vow-of-enmity",
        name: "Vow Of Enmity",
        level: 3,
        description: "Channel Divinity to gain advantage against one enemy",
      }),
      paladin_oath_of_vengeance_relentless_avenger: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-vengeance-relentless-avenger",
        name: "Relentless Avenger",
        level: 7,
        description: "Move without provoking opportunity attacks after hitting with opportunity attack",
      }),
      paladin_oath_of_the_crown_channel_divinity_champion_challenge: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-the-crown-channel-divinity-champion-challenge",
        name: "Channel Divinity Champion Challenge",
        level: 3,
        description: "Challenge a creature to fight you, imposing disadvantage on attacks against others",
      }),
      paladin_oath_of_the_crown_channel_divinity_turn_the_tide: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-the-crown-channel-divinity-turn-the-tide",
        name: "Channel Divinity Turn The Tide",
        level: 3,
        description: "Use reaction to heal and rally nearby allies when they're reduced to 0 hit points",
      }),
      paladin_oath_of_the_crown_divine_allegiance: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-the-crown-divine-allegiance",
        name: "Divine Allegiance",
        level: 7,
        description: "Use reaction to take damage meant for an ally within 5 feet",
      }),
      paladin_oath_of_the_crown_unbreakable_majesty: await db.createClassFeature({
        id: "class-feature-paladin-oath-of-the-crown-unbreakable-majesty",
        name: "Unbreakable Majesty",
        level: 15,
        description: "Cast compulsion as a bonus action and gain immunity to being charmed or frightened",
      }),
      ranger_favored_enemy: await db.createClassFeature({
        id: "class-feature-ranger-favored-enemy",
        name: "Favored Enemy",
        level: 1,
        description: "Choose creature types to gain bonuses against",
      }),
      ranger_natural_explorer: await db.createClassFeature({
        id: "class-feature-ranger-natural-explorer",
        name: "Natural Explorer",
        level: 1,
        description: "Choose favored terrain for exploration benefits",
      }),
      ranger_spellcasting: await db.createClassFeature({
        id: "class-feature-ranger-spellcasting",
        name: "Spellcasting",
        level: 2,
        description: "Half-caster with nature and utility spells",
      }),
      ranger_ranger_archetype: await db.createClassFeature({
        id: "class-feature-ranger-ranger-archetype",
        name: "Ranger Archetype",
        level: 3,
        description: "Choose a specialization that defines your ranger's focus",
      }),
      ranger_hunter_hunters_prey: await db.createClassFeature({
        id: "class-feature-ranger-hunter-hunters-prey",
        name: "Hunters Prey",
        level: 3,
        description: "Choose Colossus Slayer, Giant Killer, or Horde Breaker",
      }),
      ranger_hunter_defensive_tactics: await db.createClassFeature({
        id: "class-feature-ranger-hunter-defensive-tactics",
        name: "Defensive Tactics",
        level: 7,
        description: "Choose Escape the Horde, Multiattack Defense, or Steel Will",
      }),
      ranger_hunter_multiattack: await db.createClassFeature({
        id: "class-feature-ranger-hunter-multiattack",
        name: "Multiattack",
        level: 11,
        description: "Choose Volley or Whirlwind Attack for fighting groups",
      }),
      ranger_beast_master_rangers_companion: await db.createClassFeature({
        id: "class-feature-ranger-beast-master-rangers-companion",
        name: "Rangers Companion",
        level: 3,
        description: "Gain a loyal animal companion that fights with you",
      }),
      ranger_beast_master_exceptional_training: await db.createClassFeature({
        id: "class-feature-ranger-beast-master-exceptional-training",
        name: "Exceptional Training",
        level: 7,
        description: "Your companion can take the Dash, Disengage, or Help action",
      }),
      ranger_beast_master_bestial_fury: await db.createClassFeature({
        id: "class-feature-ranger-beast-master-bestial-fury",
        name: "Bestial Fury",
        level: 11,
        description: "Your companion can make two attacks",
      }),
      ranger_gloom_stalker_dread_ambusher: await db.createClassFeature({
        id: "class-feature-ranger-gloom-stalker-dread-ambusher",
        name: "Dread Ambusher",
        level: 3,
        description: "Extra attack and damage on first turn of combat",
      }),
      ranger_gloom_stalker_umbral_sight: await db.createClassFeature({
        id: "class-feature-ranger-gloom-stalker-umbral-sight",
        name: "Umbral Sight",
        level: 3,
        description: "Darkvision and invisibility to darkvision while in darkness",
      }),
      ranger_gloom_stalker_iron_mind: await db.createClassFeature({
        id: "class-feature-ranger-gloom-stalker-iron-mind",
        name: "Iron Mind",
        level: 7,
        description: "Proficiency in Wisdom saving throws",
      }),
      rogue_expertise: await db.createClassFeature({
        id: "class-feature-rogue-expertise",
        name: "Expertise",
        level: 1,
        description: "Double proficiency bonus for chosen skills",
      }),
      rogue_sneak_attack: await db.createClassFeature({
        id: "class-feature-rogue-sneak-attack",
        name: "Sneak Attack",
        level: 1,
        description: "Deal extra damage when you have advantage or an ally nearby",
      }),
      rogue_thieves_cant: await db.createClassFeature({
        id: "class-feature-rogue-thieves-cant",
        name: "Thieves Cant",
        level: 1,
        description: "Secret language and signs used by rogues",
      }),
      rogue_cunning_action: await db.createClassFeature({
        id: "class-feature-rogue-cunning-action",
        name: "Cunning Action",
        level: 2,
        description: "Dash, Disengage, or Hide as bonus actions",
      }),
      rogue_thief_fast_hands: await db.createClassFeature({
        id: "class-feature-rogue-thief-fast-hands",
        name: "Fast Hands",
        level: 3,
        description: "Use objects, pick locks, or disarm traps as bonus actions",
      }),
      rogue_thief_second_story_work: await db.createClassFeature({
        id: "class-feature-rogue-thief-second-story-work",
        name: "Second Story Work",
        level: 3,
        description: "Enhanced climbing and jumping abilities",
      }),
      rogue_thief_use_magic_device: await db.createClassFeature({
        id: "class-feature-rogue-thief-use-magic-device",
        name: "Use Magic Device",
        level: 13,
        description: "Use any magic item regardless of restrictions",
      }),
      rogue_assassin_bonus_proficiencies: await db.createClassFeature({
        id: "class-feature-rogue-assassin-bonus-proficiencies",
        name: "Bonus Proficiencies",
        level: 3,
        description: "Proficiency with disguise kit and poisoner's kit",
      }),
      rogue_assassin_assassinate: await db.createClassFeature({
        id: "class-feature-rogue-assassin-assassinate",
        name: "Assassinate",
        level: 3,
        description: "Advantage and automatic crits against surprised creatures",
      }),
      rogue_assassin_infiltration_expertise: await db.createClassFeature({
        id: "class-feature-rogue-assassin-infiltration-expertise",
        name: "Infiltration Expertise",
        level: 9,
        description: "Create false identities and blend into society",
      }),
      rogue_arcane_trickster_spellcasting: await db.createClassFeature({
        id: "class-feature-rogue-arcane-trickster-spellcasting",
        name: "Spellcasting",
        level: 3,
        description: "One-third caster focusing on illusion and enchantment",
      }),
      rogue_arcane_trickster_mage_hand_legerdemain: await db.createClassFeature({
        id: "class-feature-rogue-arcane-trickster-mage-hand-legerdemain",
        name: "Mage Hand Legerdemain",
        level: 3,
        description: "Enhanced mage hand for thievery and stealth",
      }),
      rogue_arcane_trickster_magical_ambush: await db.createClassFeature({
        id: "class-feature-rogue-arcane-trickster-magical-ambush",
        name: "Magical Ambush",
        level: 9,
        description: "Impose disadvantage on saves against spells cast while hidden",
      }),
      sorcerer_spellcasting: await db.createClassFeature({
        id: "class-feature-sorcerer-spellcasting",
        name: "Spellcasting",
        level: 1,
        description: "Full caster with limited spells known but flexible casting",
      }),
      sorcerer_sorcerous_origin: await db.createClassFeature({
        id: "class-feature-sorcerer-sorcerous-origin",
        name: "Sorcerous Origin",
        level: 1,
        description: "Source of your magic that grants additional abilities",
      }),
      sorcerer_font_of_magic: await db.createClassFeature({
        id: "class-feature-sorcerer-font-of-magic",
        name: "Font Of Magic",
        level: 2,
        description: "Convert spell slots to sorcery points and vice versa",
      }),
      sorcerer_metamagic: await db.createClassFeature({
        id: "class-feature-sorcerer-metamagic",
        name: "Metamagic",
        level: 3,
        description: "Modify spells with sorcery points for enhanced effects",
      }),
      sorcerer_draconic_bloodline_dragon_ancestor: await db.createClassFeature({
        id: "class-feature-sorcerer-draconic-bloodline-dragon-ancestor",
        name: "Dragon Ancestor",
        level: 1,
        description: "Choose a dragon type for damage resistance and extra spells",
      }),
      sorcerer_draconic_bloodline_draconic_resilience: await db.createClassFeature({
        id: "class-feature-sorcerer-draconic-bloodline-draconic-resilience",
        name: "Draconic Resilience",
        level: 1,
        description: "Extra hit points and natural armor",
      }),
      sorcerer_draconic_bloodline_elemental_affinity: await db.createClassFeature({
        id: "class-feature-sorcerer-draconic-bloodline-elemental-affinity",
        name: "Elemental Affinity",
        level: 6,
        description: "Add Charisma modifier to damage of chosen type",
      }),
      sorcerer_wild_magic_wild_magic_surge: await db.createClassFeature({
        id: "class-feature-sorcerer-wild-magic-wild-magic-surge",
        name: "Wild Magic Surge",
        level: 1,
        description: "Chance to trigger random magical effects when casting spells",
      }),
      sorcerer_wild_magic_tides_of_chaos: await db.createClassFeature({
        id: "class-feature-sorcerer-wild-magic-tides-of-chaos",
        name: "Tides Of Chaos",
        level: 1,
        description: "Gain advantage on rolls but increase surge chance",
      }),
      sorcerer_wild_magic_bend_luck: await db.createClassFeature({
        id: "class-feature-sorcerer-wild-magic-bend-luck",
        name: "Bend Luck",
        level: 6,
        description: "Spend sorcery points to alter d20 rolls",
      }),
      sorcerer_divine_soul_divine_magic: await db.createClassFeature({
        id: "class-feature-sorcerer-divine-soul-divine-magic",
        name: "Divine Magic",
        level: 1,
        description: "Learn spells from cleric spell list in addition to sorcerer",
      }),
      sorcerer_divine_soul_favored_by_the_gods: await db.createClassFeature({
        id: "class-feature-sorcerer-divine-soul-favored-by-the-gods",
        name: "Favored By The Gods",
        level: 1,
        description: "Add 2d4 to failed saving throws",
      }),
      sorcerer_divine_soul_empowered_healing: await db.createClassFeature({
        id: "class-feature-sorcerer-divine-soul-empowered-healing",
        name: "Empowered Healing",
        level: 6,
        description: "Spend sorcery points to maximize healing spells",
      }),
      warlock_otherworldly_patron: await db.createClassFeature({
        id: "class-feature-warlock-otherworldly-patron",
        name: "Otherworldly Patron",
        level: 1,
        description: "Choose a powerful entity that grants you magic",
      }),
      warlock_pact_magic: await db.createClassFeature({
        id: "class-feature-warlock-pact-magic",
        name: "Pact Magic",
        level: 1,
        description: "Short rest spell slot recovery with limited but powerful slots",
      }),
      warlock_eldritch_invocations: await db.createClassFeature({
        id: "class-feature-warlock-eldritch-invocations",
        name: "Eldritch Invocations",
        level: 2,
        description: "Customize your abilities with invocation choices",
      }),
      warlock_pact_boon: await db.createClassFeature({
        id: "class-feature-warlock-pact-boon",
        name: "Pact Boon",
        level: 3,
        description: "Choose Blade, Chain, or Tome for additional abilities",
      }),
      warlock_the_fiend_dark_ones_blessing: await db.createClassFeature({
        id: "class-feature-warlock-the-fiend-dark-ones-blessing",
        name: "Dark Ones Blessing",
        level: 1,
        description: "Gain temporary hit points when you reduce enemies to 0 HP",
      }),
      warlock_the_fiend_dark_ones_own_luck: await db.createClassFeature({
        id: "class-feature-warlock-the-fiend-dark-ones-own-luck",
        name: "Dark Ones Own Luck",
        level: 6,
        description: "Add d10 to ability checks or saves",
      }),
      warlock_the_fiend_fiendish_resilience: await db.createClassFeature({
        id: "class-feature-warlock-the-fiend-fiendish-resilience",
        name: "Fiendish Resilience",
        level: 10,
        description: "Choose damage type to resist each short rest",
      }),
      warlock_the_archfey_fey_presence: await db.createClassFeature({
        id: "class-feature-warlock-the-archfey-fey-presence",
        name: "Fey Presence",
        level: 1,
        description: "Cause enemies to be charmed or frightened",
      }),
      warlock_the_archfey_misty_escape: await db.createClassFeature({
        id: "class-feature-warlock-the-archfey-misty-escape",
        name: "Misty Escape",
        level: 6,
        description: "Turn invisible and teleport when taking damage",
      }),
      warlock_the_archfey_beguiling_defenses: await db.createClassFeature({
        id: "class-feature-warlock-the-archfey-beguiling-defenses",
        name: "Beguiling Defenses",
        level: 10,
        description: "Immunity to charm and reflect charm effects",
      }),
      warlock_the_great_old_one_telepathic_communication: await db.createClassFeature({
        id: "class-feature-warlock-the-great-old-one-telepathic-communication",
        name: "Telepathic Communication",
        level: 1,
        description: "Communicate telepathically with creatures",
      }),
      warlock_the_great_old_one_entropic_ward: await db.createClassFeature({
        id: "class-feature-warlock-the-great-old-one-entropic-ward",
        name: "Entropic Ward",
        level: 6,
        description: "Impose disadvantage on attacks and gain advantage on next attack",
      }),
      warlock_the_great_old_one_thought_shield: await db.createClassFeature({
        id: "class-feature-warlock-the-great-old-one-thought-shield",
        name: "Thought Shield",
        level: 10,
        description: "Resistance to psychic damage and reflect psychic damage",
      }),
      wizard_spellcasting: await db.createClassFeature({
        id: "class-feature-wizard-spellcasting",
        name: "Spellcasting",
        level: 1,
        description: "Full caster with spellbook containing all known spells",
      }),
      wizard_arcane_recovery: await db.createClassFeature({
        id: "class-feature-wizard-arcane-recovery",
        name: "Arcane Recovery",
        level: 1,
        description: "Recover some spell slots during short rests",
      }),
      wizard_arcane_tradition: await db.createClassFeature({
        id: "class-feature-wizard-arcane-tradition",
        name: "Arcane Tradition",
        level: 2,
        description: "Choose a school of magic specialization",
      }),
      wizard_spell_mastery: await db.createClassFeature({
        id: "class-feature-wizard-spell-mastery",
        name: "Spell Mastery",
        level: 18,
        description: "Cast certain spells without using spell slots",
      }),
      wizard_school_of_evocation_sculpt_spells: await db.createClassFeature({
        id: "class-feature-wizard-school-of-evocation-sculpt-spells",
        name: "Sculpt Spells",
        level: 2,
        description: "Protect allies from your area spells",
      }),
      wizard_school_of_evocation_potent_cantrip: await db.createClassFeature({
        id: "class-feature-wizard-school-of-evocation-potent-cantrip",
        name: "Potent Cantrip",
        level: 6,
        description: "Cantrips deal half damage on successful saves",
      }),
      wizard_school_of_evocation_empowered_evocation: await db.createClassFeature({
        id: "class-feature-wizard-school-of-evocation-empowered-evocation",
        name: "Empowered Evocation",
        level: 10,
        description: "Add Intelligence modifier to evocation spell damage",
      }),
      wizard_school_of_illusion_improved_minor_illusion: await db.createClassFeature({
        id: "class-feature-wizard-school-of-illusion-improved-minor-illusion",
        name: "Improved Minor Illusion",
        level: 2,
        description: "Create both sound and image with minor illusion",
      }),
      wizard_school_of_illusion_malleable_illusions: await db.createClassFeature({
        id: "class-feature-wizard-school-of-illusion-malleable-illusions",
        name: "Malleable Illusions",
        level: 6,
        description: "Change illusion spell details as an action",
      }),
      wizard_school_of_illusion_illusory_reality: await db.createClassFeature({
        id: "class-feature-wizard-school-of-illusion-illusory-reality",
        name: "Illusory Reality",
        level: 14,
        description: "Make one object from illusion spells temporarily real",
      }),
      wizard_school_of_divination_portent: await db.createClassFeature({
        id: "class-feature-wizard-school-of-divination-portent",
        name: "Portent",
        level: 2,
        description: "Roll dice each day to replace d20 rolls later",
      }),
      wizard_school_of_divination_expert_divination: await db.createClassFeature({
        id: "class-feature-wizard-school-of-divination-expert-divination",
        name: "Expert Divination",
        level: 6,
        description: "Recover spell slots when casting divination spells",
      }),
      wizard_school_of_divination_the_third_eye: await db.createClassFeature({
        id: "class-feature-wizard-school-of-divination-the-third-eye",
        name: "The Third Eye",
        level: 10,
        description: "Choose from various enhanced sight abilities",
      }),
      tactician_perfect_plan: await db.createClassFeature({
        id: "class-feature-tactician-perfect-plan",
        name: "Perfect Plan",
        level: 1,
        description: "Gain Perfect Plan dice that can be used to enhance your own or allies' rolls",
      }),
      tactician_intelligent_defense: await db.createClassFeature({
        id: "class-feature-tactician-intelligent-defense",
        name: "Intelligent Defense",
        level: 1,
        description: "Use Intelligence modifier instead of Dexterity for AC calculation",
      }),
      tactician_analyze: await db.createClassFeature({
        id: "class-feature-tactician-analyze",
        name: "Analyze",
        level: 2,
        description: "As a bonus action, analyze a creature within 60 feet for tactical advantages",
      }),
      tactician_strategic_focus: await db.createClassFeature({
        id: "class-feature-tactician-strategic-focus",
        name: "Strategic Focus",
        level: 3,
        description: "Choose a strategic focus that grants additional features and maneuvers",
      }),
      tactician_tactical_command: await db.createClassFeature({
        id: "class-feature-tactician-tactical-command",
        name: "Tactical Command",
        level: 5,
        description: "Grant allies additional actions or movement through strategic commands",
      }),
      tactician_battlefield_control: await db.createClassFeature({
        id: "class-feature-tactician-battlefield-control",
        name: "Battlefield Control",
        level: 7,
        description: "Manipulate the battlefield to your advantage through superior positioning",
      }),
      tactician_grandmaster_strategic_planning: await db.createClassFeature({
        id: "class-feature-tactician-grandmaster-strategic-planning",
        name: "Strategic Planning",
        level: 3,
        description: "Spend time planning to gain significant advantages in upcoming encounters",
      }),
      tactician_grandmaster_battlefield_survey: await db.createClassFeature({
        id: "class-feature-tactician-grandmaster-battlefield-survey",
        name: "Battlefield Survey",
        level: 6,
        description: "Analyze terrain and enemy positions to predict and counter enemy tactics",
      }),
      tactician_grandmaster_grand_strategy: await db.createClassFeature({
        id: "class-feature-tactician-grandmaster-grand-strategy",
        name: "Grand Strategy",
        level: 10,
        description: "Coordinate multiple allies with complex tactical maneuvers",
      }),
      tactician_mentalist_telepathic_link: await db.createClassFeature({
        id: "class-feature-tactician-mentalist-telepathic-link",
        name: "Telepathic Link",
        level: 3,
        description: "Create mental connections with allies for silent communication and coordination",
      }),
      tactician_mentalist_mind_reading: await db.createClassFeature({
        id: "class-feature-tactician-mentalist-mind-reading",
        name: "Mind Reading",
        level: 6,
        description: "Read enemy surface thoughts to predict their actions and counter their tactics",
      }),
      tactician_mentalist_psychic_command: await db.createClassFeature({
        id: "class-feature-tactician-mentalist-psychic-command",
        name: "Psychic Command",
        level: 10,
        description: "Issue mental commands that enhance ally performance and disrupt enemy coordination",
      }),
      tactician_scholar_tactical_knowledge: await db.createClassFeature({
        id: "class-feature-tactician-scholar-tactical-knowledge",
        name: "Tactical Knowledge",
        level: 3,
        description: "Gain extensive knowledge of enemy tactics and weaknesses",
      }),
      tactician_scholar_research_and_development: await db.createClassFeature({
        id: "class-feature-tactician-scholar-research-and-development",
        name: "Research And Development",
        level: 6,
        description: "Develop new tactics and strategies based on historical study and analysis",
      }),
      tactician_scholar_master_tactician: await db.createClassFeature({
        id: "class-feature-tactician-scholar-master-tactician",
        name: "Master Tactician",
        level: 10,
        description: "Apply advanced tactical knowledge to gain significant advantages in combat",
      }),
      tactician_war_mind_combat_analysis: await db.createClassFeature({
        id: "class-feature-tactician-war-mind-combat-analysis",
        name: "Combat Analysis",
        level: 3,
        description: "Analyze combat situations in real-time to gain tactical advantages",
      }),
      tactician_war_mind_battlefield_presence: await db.createClassFeature({
        id: "class-feature-tactician-war-mind-battlefield-presence",
        name: "Battlefield Presence",
        level: 6,
        description: "Your mere presence on the battlefield inspires and coordinates allies",
      }),
      tactician_war_mind_war_leader: await db.createClassFeature({
        id: "class-feature-tactician-war-mind-war-leader",
        name: "War Leader",
        level: 10,
        description: "Lead by example, gaining powerful combat abilities when fighting alongside allies",
      }),
    };
    // Classes
    const clazz: Record<string, Prisma.ClassGetPayload<{}>> = {
      artificer: await db.createClass({
        id: "class-artificer",
        name: "Artificer",
        slug: "artificer",
        description: "Innovative crafters who blend magic and technology to create magical items and devices. Masters of invention who infuse mundane objects with arcane power.",
        roles: { connect: [{ id: classRole.support.id }, { id: classRole.utility.id }] },
        primaryAbility: [AbilityScores.INTELLIGENCE],
        hitDie: "d8",
        savingThrows: [AbilityScores.CONSTITUTION, AbilityScores.INTELLIGENCE],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.FIREARMS, WeaponProficiency.LIGHT_CROSSBOWS, WeaponProficiency.HEAVY_CROSSBOWS],
        toolProficiency: [ToolProficiency.THIEVES_TOOLS, ToolProficiency.ARTISANS_TINKERS_TOOLS, ToolProficiency.ARTISANS_CHOOSE_ONE],
        alabastriaLore: "In the volcanic forges of Alatman and the mountain workshops of Maltman, Artificers represent the pinnacle of magical engineering. These innovative creators bridge the gap between ancient magic and emerging technology, crafting wonders that aid adventurers and defend settlements across Kamalatman.",
        playstyle: "Versatile support character who excels at problem-solving through magical items and utility spells. Best for players who enjoy creative solutions and helping the party with magical gadgets.",
        keyFeatures: {
          connect: [
            { id: classFeature.artificer_magical_tinkering.id },
            { id: classFeature.artificer_infuse_item.id },
            { id: classFeature.artificer_spellcasting.id },
            { id: classFeature.artificer_tool_expertise.id },
          ]
        }
      }),
      barbarian: await db.createClass({
        id: "class-barbarian",
        name: "Barbarian",
        slug: "barbarian",
        description: "Fierce warriors who harness primal fury and instinct to become devastating forces in battle. They draw strength from rage and their connection to the wild.",
        roles: { connect: [ { id: classRole.tank.id }, { id: classRole.damage_dealer.id } ] },
        primaryAbility: [AbilityScores.STRENGTH],
        hitDie: "d12",
        savingThrows: [AbilityScores.STRENGTH, AbilityScores.CONSTITUTION],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.MARTIAL_WEAPONS],
        toolProficiency: [],
        alabastriaLore: "From the frozen peaks of Bulsania to the swampy strongholds of Katman, Barbarians embody the untamed spirit of Alabastria's wildest places. These warriors reject civilization's constraints, drawing power from ancestral spirits, primal totems, and the raw fury of the natural world.",
        playstyle: "High-damage, high-durability front-line fighter. Best for players who want to charge into battle and deal massive damage while shrugging off enemy attacks.",
        keyFeatures: {
          connect: [
            { id: classFeature.barbarian_rage.id },
            { id: classFeature.barbarian_unarmored_defense.id },
            { id: classFeature.barbarian_reckless_attack.id },
            { id: classFeature.barbarian_extra_attack.id },
          ]
        }
      }),
      bard: await db.createClass({
        id: "class-bard",
        name: "Bard",
        slug: "bard",
        description: "Versatile performers who weave magic through music, stories, and performance. Masters of inspiration who support allies and control the battlefield through charm and wit.",
        roles: { connect: [ { id: classRole.support.id }, { id: classRole.utility.id } ] },
        primaryAbility: [AbilityScores.CHARISMA],
        hitDie: "d8",
        savingThrows: [AbilityScores.DEXTERITY, AbilityScores.CHARISMA],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.HAND_CROSSBOWS, WeaponProficiency.LONGSWORDS, WeaponProficiency.RAPIERS, WeaponProficiency.SHORTSWORDS],
        toolProficiency: [ToolProficiency.MUSICAL_INSTRUMENT_CHOOSE_THREE],
        alabastriaLore: "In Skratonia's diverse city-states and Kuriguer's magical courts, Bards serve as diplomats, entertainers, and keepers of lore. Their songs preserve the history of The Bringing, weave magic through performance, and inspire heroes across all continents of Alabastria.",
        playstyle: "Ultimate support character with unmatched versatility. Best for players who enjoy helping others succeed and having options for every situation.",
        keyFeatures: {
          connect: [
            { id: classFeature.bard_spellcasting.id },
            { id: classFeature.bard_bardic_inspiration.id },
            { id: classFeature.bard_jack_of_all_trades.id },
            { id: classFeature.bard_expertise.id },
          ]
        }
      }),
      cleric: await db.createClass({
        id: "class-cleric",
        name: "Cleric",
        slug: "cleric",
        description: "Divine agents who channel the power of their deities to heal, protect, and smite enemies. Servants of gods who wield holy magic to aid allies and punish the wicked.",
        roles: { connect: [ { id: classRole.support.id }, { id: classRole.healer.id } ] },
        primaryAbility: [AbilityScores.WISDOM],
        hitDie: "d8",
        savingThrows: [AbilityScores.WISDOM, AbilityScores.CHARISMA],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS],
        toolProficiency: [],
        alabastriaLore: "Across Alabastria's diverse continents, Clerics serve as the primary connection between mortals and the divine. From Tempus-worshipping War Clerics like Tharos Raggenthraw to forge-priests in Maltman's workshops, these holy servants adapt their faith to serve their communities' needs.",
        playstyle: "Primary healer and support with strong defensive capabilities. Best for players who want to keep the party alive while contributing meaningful combat support.",
        keyFeatures: {
          connect: [
            { id: classFeature.cleric_spellcasting.id },
            { id: classFeature.cleric_divine_domain.id },
            { id: classFeature.cleric_channel_divinity.id },
            { id: classFeature.cleric_destroy_undead.id },
          ]
        }
      }),
      druid: await db.createClass({
        id: "class-druid",
        name: "Druid",
        slug: "druid",
        description: "Guardians of nature who wield primal magic and can transform into animals. Protectors of the natural world who draw power from the land itself.",
        roles: { connect: [ { id: classRole.blaster.id }, { id: classRole.shapeshifter.id } ] },
        primaryAbility: [AbilityScores.WISDOM],
        hitDie: "d8",
        savingThrows: [AbilityScores.INTELLIGENCE, AbilityScores.WISDOM],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS_NON_METAL_ONLY],
        weaponProficiency: [WeaponProficiency.CLUBS, WeaponProficiency.DAGGERS, WeaponProficiency.DARTS, WeaponProficiency.JAVELINS, WeaponProficiency.MACES, WeaponProficiency.QUARTERSTAFFS, WeaponProficiency.SCIMITARS, WeaponProficiency.SICKLES, WeaponProficiency.SLINGS, WeaponProficiency.SPEARS],
        toolProficiency: [ToolProficiency.HERBALISM_KIT],
        alabastriaLore: "In Kuriguer's magical forests and Skratonia's fertile plains, Druids maintain the balance between civilization and wilderness. These primal spellcasters guard ancient groves, tend to wounded lands, and serve as bridges between the natural and civilized worlds.",
        playstyle: "Versatile nature-based caster with shapeshifting abilities. Best for players who want to embody nature's power and have unique utility options.",
        keyFeatures: {
          connect: [
            { id: classFeature.druid_druidcraft.id },
            { id: classFeature.druid_spellcasting.id },
            { id: classFeature.druid_wild_shape.id },
            { id: classFeature.druid_druid_circle.id },
          ]
        }
      }),
      fighter: await db.createClass({
        id: "class-fighter",
        name: "Fighter",
        slug: "fighter",
        description: "Masters of martial combat skilled with a variety of weapons and tactics. Versatile warriors who excel in physical combat through training and technique.",
        roles: { connect: [ { id: classRole.tank.id }, { id: classRole.damage_dealer.id } ] },
        primaryAbility: [AbilityScores.STRENGTH, AbilityScores.DEXTERITY],
        hitDie: "d10",
        savingThrows: [AbilityScores.STRENGTH, AbilityScores.CONSTITUTION],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.HEAVY_ARMOR, ArmorProficiency.SHIELDS],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.MARTIAL_WEAPONS],
        toolProficiency: [],
        alabastriaLore: "From Skratonia's diverse city militias to Bulsania's elite dragon-riders, Fighters represent the pinnacle of martial training. These versatile warriors adapt their techniques to serve as guards, soldiers, duelists, and champions across all of Alabastria's continents.",
        playstyle: "Reliable physical combatant with excellent survivability. Best for players who want consistent performance in combat with tactical options.",
        keyFeatures: {
          connect: [
            { id: classFeature.fighter_fighting_style.id },
            { id: classFeature.fighter_second_wind.id },
            { id: classFeature.fighter_action_surge.id },
            { id: classFeature.fighter_extra_attack.id },
          ]
        }
      }),
      monk: await db.createClass({
        id: "class-monk",
        name: "Monk",
        slug: "monk",
        description: "Disciplined martial artists who harness their inner energy (ki) for extraordinary abilities. Masters of unarmed combat who achieve supernatural feats through meditation and training.",
        roles: { connect: [ { id: classRole.striker.id }, { id: classRole.utility.id } ] },
        primaryAbility: [AbilityScores.DEXTERITY, AbilityScores.WISDOM],
        hitDie: "d8",
        savingThrows: [AbilityScores.STRENGTH, AbilityScores.DEXTERITY],
        armorProficiency: [],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.SHORTSWORDS],
        toolProficiency: [ToolProficiency.ARTISANS_CHOOSE_ONE_OR_MUSICAL_INSTRUMENT_CHOOSE_ONE],
        alabastriaLore: "In hidden monasteries across Alabastria's mountains and secluded valleys, Monks pursue physical and spiritual perfection. These disciplined warriors combine ancient martial techniques with mystical ki manipulation, serving as guardians, seekers, and enlightened warriors.",
        playstyle: "Mobile striker with unique abilities and excellent utility. Best for players who want to be agile, versatile, and different from traditional warriors.",
        keyFeatures: {
          connect: [
            { id: classFeature.monk_unarmored_defense.id },
            { id: classFeature.monk_martial_arts.id },
            { id: classFeature.monk_ki.id },
            { id: classFeature.monk_unarmored_movement.id },
          ]
        }
      }),
      paladin: await db.createClass({
        id: "class-paladin",
        name: "Paladin",
        slug: "paladin",
        description: "Holy warriors bound by sacred oaths to uphold justice and righteousness. Divine champions who combine martial prowess with holy magic to protect the innocent.",
        roles: { connect: [ { id: classRole.tank.id }, { id: classRole.support.id } ] },
        primaryAbility: [AbilityScores.STRENGTH, AbilityScores.CHARISMA],
        hitDie: "d10",
        savingThrows: [AbilityScores.WISDOM, AbilityScores.CHARISMA],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.HEAVY_ARMOR, ArmorProficiency.SHIELDS],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.MARTIAL_WEAPONS],
        toolProficiency: [],
        alabastriaLore: "Across Alabastria's realms, Paladins stand as beacons of hope and justice. These oath-bound warriors serve various causes, from protecting ancient forests to conquering evil, their divine magic powered by unwavering conviction and righteous purpose.",
        playstyle: "Durable front-line fighter with healing and support abilities. Best for players who want to be the party's moral compass and protector.",
        keyFeatures: {
          connect: [
            { id: classFeature.paladin_divine_sense.id },
            { id: classFeature.paladin_lay_on_hands.id },
            { id: classFeature.paladin_divine_smite.id },
            { id: classFeature.paladin_sacred_oath.id },
          ]
        }
      }),
      ranger: await db.createClass({
        id: "class-ranger",
        name: "Ranger",
        slug: "ranger",
        description: "Skilled hunters and trackers who thrive in the wilderness. Masters of survival who protect civilization's borders and guide others through dangerous lands.",
        roles: { connect: [ { id: classRole.striker.id }, { id: classRole.scout.id } ] },
        primaryAbility: [AbilityScores.DEXTERITY, AbilityScores.WISDOM],
        hitDie: "d10",
        savingThrows: [AbilityScores.STRENGTH, AbilityScores.DEXTERITY],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.MARTIAL_WEAPONS],
        toolProficiency: [],
        alabastriaLore: "From Kuriguer's magical forests to Bulsania's frozen peaks, Rangers serve as guardians of the wild places. These skilled trackers and hunters protect travelers, hunt dangerous beasts, and maintain the balance between civilization and wilderness.",
        playstyle: "Versatile scout and ranged combatant with survival expertise. Best for players who want to excel in exploration and outdoor adventures.",
        keyFeatures: {
          connect: [
            { id: classFeature.ranger_favored_enemy.id },
            { id: classFeature.ranger_natural_explorer.id },
            { id: classFeature.ranger_spellcasting.id },
            { id: classFeature.ranger_ranger_archetype.id },
          ]
        }
      }),
      rogue: await db.createClass({
        id: "class-rogue",
        name: "Rogue",
        slug: "rogue",
        description: "Cunning and agile characters who excel in stealth, thievery, and precision strikes. Masters of skills and subterfuge who strike from the shadows.",
        roles: { connect: [ { id: classRole.striker.id }, { id: classRole.utility.id } ] },
        primaryAbility: [AbilityScores.DEXTERITY],
        hitDie: "d8",
        savingThrows: [AbilityScores.DEXTERITY, AbilityScores.INTELLIGENCE],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.HAND_CROSSBOWS, WeaponProficiency.LONGSWORDS, WeaponProficiency.RAPIERS, WeaponProficiency.SHORTSWORDS],
        toolProficiency: [ToolProficiency.THIEVES_TOOLS],
        alabastriaLore: "In Skratonia's bustling cities and Kuriguer's diverse ports, Rogues operate in the shadows of society. These skilled individuals serve as spies, thieves, investigators, and scouts, using cunning and agility to accomplish what others cannot through force.",
        playstyle: "High-damage striker with excellent utility and mobility. Best for players who enjoy stealth, problem-solving, and precise strikes.",
        keyFeatures: {
          connect: [
            { id: classFeature.rogue_expertise.id },
            { id: classFeature.rogue_sneak_attack.id },
            { id: classFeature.rogue_thieves_cant.id },
            { id: classFeature.rogue_cunning_action.id },
          ]
        }
      }),
      sorcerer: await db.createClass({
        id: "class-sorcerer",
        name: "Sorcerer",
        slug: "sorcerer",
        description: "Innate spellcasters whose magic comes from their bloodline or a mysterious source within. Raw magical power channeled through force of personality.",
        roles: { connect: [ { id: classRole.damage_dealer.id }, { id: classRole.controller.id } ] },
        primaryAbility: [AbilityScores.CHARISMA],
        hitDie: "d6",
        savingThrows: [AbilityScores.CONSTITUTION, AbilityScores.CHARISMA],
        armorProficiency: [],
        weaponProficiency: [WeaponProficiency.DAGGERS, WeaponProficiency.DARTS, WeaponProficiency.SLINGS, WeaponProficiency.QUARTERSTAFFS, WeaponProficiency.LIGHT_CROSSBOWS],
        toolProficiency: [],
        alabastriaLore: "Across Alabastria, Sorcerers represent the raw power of magic made manifest. From Dragonborn with draconic heritage in Bulsania to Tieflings channeling infernal chaos in Skratonia, these spellcasters wield power that flows from their very being.",
        playstyle: "Flexible spellcaster with powerful magical effects. Best for players who want to specialize in magic and customize their spells.",
        keyFeatures: {
          connect: [
            { id: classFeature.sorcerer_spellcasting.id },
            { id: classFeature.sorcerer_sorcerous_origin.id },
            { id: classFeature.sorcerer_font_of_magic.id },
            { id: classFeature.sorcerer_metamagic.id },
          ]
        }
      }),
      warlock: await db.createClass({
        id: "class-warlock",
        name: "Warlock",
        slug: "warlock",
        description: "Spellcasters who derive their magic from pacts with powerful entities. Wielders of eldritch power gained through otherworldly bargains.",
        roles: { connect: [ { id: classRole.damage_dealer.id }, { id: classRole.utility.id } ] },
        primaryAbility: [AbilityScores.CHARISMA],
        hitDie: "d8",
        savingThrows: [AbilityScores.WISDOM, AbilityScores.CHARISMA],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS],
        toolProficiency: [],
        alabastriaLore: "In Alabastria's shadowed corners and desperate places, Warlocks forge pacts with beings beyond mortal understanding. From Tieflings embracing their fiendish heritage to Humans seeking forbidden power, these spellcasters trade pieces of their souls for eldritch might.",
        playstyle: "Customizable spellcaster with consistent power. Best for players who want unique abilities and don't mind role-playing otherworldly obligations.",
        keyFeatures: {
          connect: [
            { id: classFeature.warlock_otherworldly_patron.id },
            { id: classFeature.warlock_pact_magic.id },
            { id: classFeature.warlock_eldritch_invocations.id },
            { id: classFeature.warlock_pact_boon.id },
          ]
        }
      }),
      wizard: await db.createClass({
        id: "class-wizard",
        name: "Wizard",
        slug: "wizard",
        description: "Scholarly spellcasters who master arcane magic through rigorous study and research. The ultimate magical generalists with access to the largest spell selection.",
        roles: { connect: [ { id: classRole.controller.id }, { id: classRole.utility.id } ] },
        primaryAbility: [AbilityScores.INTELLIGENCE],
        hitDie: "d6",
        savingThrows: [AbilityScores.INTELLIGENCE, AbilityScores.WISDOM],
        armorProficiency: [],
        weaponProficiency: [WeaponProficiency.DAGGERS, WeaponProficiency.DARTS, WeaponProficiency.SLINGS, WeaponProficiency.QUARTERSTAFFS, WeaponProficiency.LIGHT_CROSSBOWS],
        toolProficiency: [],
        alabastriaLore: "In Kuriguer's magical academies and Skratonia's scholarly institutions, Wizards represent the pinnacle of magical learning. These dedicated researchers unlock the secrets of arcane power through study, experimentation, and careful documentation of magical phenomena.",
        playstyle: "Ultimate magical versatility with preparation-based casting. Best for players who enjoy strategic planning and having the right spell for every situation.",
        keyFeatures: {
          connect: [
            { id: classFeature.wizard_spellcasting.id },
            { id: classFeature.wizard_arcane_recovery.id },
            { id: classFeature.wizard_arcane_tradition.id },
            { id: classFeature.wizard_spell_mastery.id },
          ]
        }
      }),
      tactician: await db.createClass({
        id: "class-tactician",
        name: "Tactician",
        slug: "tactician",
        description: "Masters of strategy and battlefield control who use intelligence and planning to outmaneuver enemies and coordinate allies. These brilliant commanders excel at analyzing situations and turning the tide of battle through superior tactics.",
        roles: { connect: [ { id: classRole.support.id }, { id: classRole.controller.id } ] },
        primaryAbility: [AbilityScores.INTELLIGENCE],
        hitDie: "d8",
        savingThrows: [AbilityScores.INTELLIGENCE, AbilityScores.WISDOM],
        armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
        weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.HAND_CROSSBOWS, WeaponProficiency.LONGSWORDS, WeaponProficiency.RAPIERS, WeaponProficiency.SHORTSWORDS],
        toolProficiency: [ToolProficiency.GAMING_SET_CHOOSE_ONE, ToolProficiency.MUSICAL_INSTRUMENT_CHOOSE_ONE],
        alabastriaLore: "In the complex political landscape of Alabastria, Tacticians serve as military advisors, guild strategists, and battlefield commanders. Their analytical minds and strategic thinking make them invaluable in the Huntbound Order's most dangerous missions, where proper planning can mean the difference between victory and disaster.",
        playstyle: "Support character who excels at battlefield control and enhancing allies through strategic planning. Best for players who enjoy tactical thinking and coordinating team efforts.",
        keyFeatures: {
          connect: [
            { id: classFeature.tactician_perfect_plan.id },
            { id: classFeature.tactician_intelligent_defense.id },
            { id: classFeature.tactician_analyze.id },
            { id: classFeature.tactician_strategic_focus.id },
            { id: classFeature.tactician_tactical_command.id },
            { id: classFeature.tactician_battlefield_control.id },
          ]
        }
      }),
    };
		// Subclasses
		const subclass: Record<string, Prisma.SubclassGetPayload<{}>> = {
			artificer_alchemist: await db.createSubclass({
				id: "subclass-artificer-alchemist",
				name: "Alchemist",
				slug: "alchemist",
				description: "Masters of magical chemistry who brew potions and elixirs to heal allies and harm enemies.",
				alabastriaContext: "In Kuriguer's coastal towns, Gnome Alchemists work alongside Deep Gnomes from Maltman's underground laboratories, creating miraculous healing draughts and explosive compounds. Their workshops fill the air with colorful smoke and the promise of magical discovery.",
				playstyle: "Support-focused healer and utility caster. Perfect for players who want to be the party's medic while contributing unique magical solutions.",
				classId: clazz.artificer.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.artificer_alchemist_experimental_elixir.id },
						{ id: classFeature.artificer_alchemist_healing_word.id },
						{ id: classFeature.artificer_alchemist_alchemical_savant.id },
					]
				}
			}),
			artificer_armorer: await db.createSubclass({
				id: "subclass-artificer-armorer",
				name: "Armorer",
				slug: "armorer",
				description: "Creators of magical armor who turn their own body into a walking fortress or stealth suit.",
				alabastriaContext: "Warforged Armorers in Alatman's volcanic forges create living armor that adapts to any situation. Dwarven Armorers in Maltman craft traditional but magically enhanced suits, while Hobgoblin Armorers in Bulsania focus on military applications.",
				playstyle: "Tanky front-line fighter or stealthy infiltrator. Great for players who want to be heavily armored but still have magical utility.",
				classId: clazz.artificer.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.artificer_armorer_arcane_armor.id },
						{ id: classFeature.artificer_armorer_armor_model.id },
						{ id: classFeature.artificer_armorer_extra_attack.id },
					]
				}
			}),
			artificer_artillerist: await db.createSubclass({
				id: "subclass-artificer-artillerist",
				name: "Artillerist",
				slug: "artillerist",
				description: "Experts in explosive magic and ranged combat who create magical turrets and enhance projectiles.",
				alabastriaContext: "Rock Gnome Artillerists in Kuriguer's innovative coastal cities develop siege weapons that blend magic with mechanical precision. In Bulsania's icy fortresses, Hobgoblin Artillerists create devastating weapons to defend against the harsh frontier.",
				playstyle: "Ranged damage dealer with battlefield control. Ideal for players who enjoy tactical positioning and dealing consistent damage from afar.",
				classId: clazz.artificer.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.artificer_artillerist_eldritch_cannons.id },
						{ id: classFeature.artificer_artillerist_arcane_firearm.id },
						{ id: classFeature.artificer_artillerist_explosive_cannon.id },
					]
				}
			}),
			artificer_battle_smith: await db.createSubclass({
				id: "subclass-artificer-battle-smith",
				name: "Battle Smith",
				slug: "battle-smith",
				description: "Warrior-inventors who combine martial prowess with magical constructs, accompanied by a steel defender.",
				alabastriaContext: "Warforged Battle Smiths in Alatman understand construct creation intimately, crafting loyal steel defenders. Gnome Battle Smiths in Kuriguer combine inventive genius with combat necessity, while Human Battle Smiths in Skratonia adapt these techniques for city defense.",
				playstyle: "Versatile warrior with a loyal companion. Perfect for players who want to fight in melee while having a pet and magical utility.",
				classId: clazz.artificer.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.artificer_battle_smith_steel_defender.id },
						{ id: classFeature.artificer_battle_smith_battle_ready.id },
						{ id: classFeature.artificer_battle_smith_extra_attack.id },
					]
				}
			}),
			barbarian_path_of_the_ancestral_guardian: await db.createSubclass({
				id: "subclass-barbarian-path-of-the-ancestral-guardian",
				name: "Path Of The Ancestral Guardian",
				slug: "path-of-the-ancestral-guardian",
				description: "Barbarians who call upon the spirits of their ancestors to protect allies and hinder enemies.",
				alabastriaContext: "In Bulsania's mountain tribes, Goliath Ancestral Guardians commune with the spirits of their giant-kin ancestors. Orc tribes in Katman's swamps honor their fallen warriors, while Lizardfolk draw upon ancient reptilian memories.",
				playstyle: "Protective tank who shields allies while dealing damage. Great for players who want to be the party's guardian and protector.",
				classId: clazz.barbarian.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.barbarian_path_of_the_ancestral_guardian_ancestral_protectors.id },
						{ id: classFeature.barbarian_path_of_the_ancestral_guardian_spirit_shield.id },
						{ id: classFeature.barbarian_path_of_the_ancestral_guardian_consult_the_spirits.id },
					]
				}
			}),
			barbarian_path_of_the_beast: await db.createSubclass({
				id: "subclass-barbarian-path-of-the-beast",
				name: "Path Of The Beast",
				slug: "path-of-the-beast",
				description: "Barbarians whose rage manifests as bestial transformations, growing claws, fangs, or other natural weapons.",
				alabastriaContext: "Shifters in Kuriguer's wild woods naturally gravitate toward this path, their lycanthropic heritage manifesting in battle. Tabaxi on Skratonia's plains embrace their feline nature, while Beasthide Shifters become living weapons.",
				playstyle: "Versatile melee combatant with animal-like abilities. Perfect for players who want to embody primal savagery and adaptability.",
				classId: clazz.barbarian.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.barbarian_path_of_the_beast_form_of_the_beast.id },
						{ id: classFeature.barbarian_path_of_the_beast_bestial_soul.id },
						{ id: classFeature.barbarian_path_of_the_beast_infectious_fury.id },
					]
				}
			}),
			barbarian_path_of_the_berserker: await db.createSubclass({
				id: "subclass-barbarian-path-of-the-berserker",
				name: "Path Of The Berserker",
				slug: "path-of-the-berserker",
				description: "Warriors who abandon all restraint in battle, becoming unstoppable forces of destruction.",
				alabastriaContext: "Orc warriors in Katman's tribal strongholds embrace the berserker's path, their natural fury enhanced by swamp warfare. Goliaths in Bulsania's harsh mountains use relentless rage to survive, while Dragonborn channel draconic wrath.",
				playstyle: "Maximum damage output with high risk/reward mechanics. Ideal for players who want to be an unstoppable force of destruction.",
				classId: clazz.barbarian.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.barbarian_path_of_the_berserker_frenzy.id },
						{ id: classFeature.barbarian_path_of_the_berserker_mindless_rage.id },
						{ id: classFeature.barbarian_path_of_the_berserker_intimidating_presence.id },
					]
				}
			}),
			barbarian_path_of_the_storm_herald: await db.createSubclass({
				id: "subclass-barbarian-path-of-the-storm-herald",
				name: "Path Of The Storm Herald",
				slug: "path-of-the-storm-herald",
				description: "Barbarians who channel elemental forces during their rage, creating auras of destruction around them.",
				alabastriaContext: "Aarakocra Storm Heralds in Bulsania's peaks channel mountain storms and arctic winds. Air Genasi in Kuriguer embrace coastal tempests, while Goliaths manifest the fury of blizzards and avalanches.",
				playstyle: "Area-of-effect damage dealer who affects the battlefield around them. Great for players who want elemental powers and battlefield control.",
				classId: clazz.barbarian.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.barbarian_path_of_the_storm_herald_storm_aura.id },
						{ id: classFeature.barbarian_path_of_the_storm_herald_storm_soul.id },
						{ id: classFeature.barbarian_path_of_the_storm_herald_shielding_storm.id },
					]
				}
			}),
			barbarian_path_of_the_totem_warrior: await db.createSubclass({
				id: "subclass-barbarian-path-of-the-totem-warrior",
				name: "Path Of The Totem Warrior",
				slug: "path-of-the-totem-warrior",
				description: "Barbarians who form spiritual bonds with animal totems, gaining their traits and wisdom.",
				alabastriaContext: "Goliath tribes in Bulsania bond with mountain spirits and giant eagles. Shifters in Kuriguer connect with forest predators, while Centaurs on Skratonia's plains honor horse spirits and plains animals.",
				playstyle: "Versatile barbarian with nature-themed abilities. Perfect for players who want spiritual connection to animals and varied utility.",
				classId: clazz.barbarian.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.barbarian_path_of_the_totem_warrior_totem_spirit.id },
						{ id: classFeature.barbarian_path_of_the_totem_warrior_aspect_of_the_beast.id },
						{ id: classFeature.barbarian_path_of_the_totem_warrior_totemic_attunement.id },
					]
				}
			}),
			barbarian_path_of_wild_magic: await db.createSubclass({
				id: "subclass-barbarian-path-of-wild-magic",
				name: "Path Of Wild Magic",
				slug: "path-of-wild-magic",
				description: "Barbarians touched by chaotic magic whose rage triggers unpredictable magical effects.",
				alabastriaContext: "Genasi in Kuriguer's magical forests experience wild surges from elemental chaos. Tieflings across Skratonia manifest infernal unpredictability, while Halflings discover their luck interacts strangely with magical forces.",
				playstyle: "Unpredictable barbarian with magical effects. Ideal for players who enjoy chaos and want magic mixed with martial combat.",
				classId: clazz.barbarian.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.barbarian_path_of_wild_magic_magic_awareness.id },
						{ id: classFeature.barbarian_path_of_wild_magic_wild_surge.id },
						{ id: classFeature.barbarian_path_of_wild_magic_bolstering_magic.id },
					]
				}
			}),
			barbarian_path_of_the_zealot: await db.createSubclass({
				id: "subclass-barbarian-path-of-the-zealot",
				name: "Path Of The Zealot",
				slug: "path-of-the-zealot",
				description: "Divine warriors whose rage is fueled by religious fervor and celestial or infernal power.",
				alabastriaContext: "Aarakocra Zealots in Bulsania serve sky gods with divine fury. Aasimar across Skratonia channel celestial rage for righteous causes, while Dragonborn embrace draconic religious fervor in their militarized society.",
				playstyle: "Religious warrior with divine damage and support abilities. Perfect for players who want to combine faith with fury.",
				classId: clazz.barbarian.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.barbarian_path_of_the_zealot_divine_fury.id },
						{ id: classFeature.barbarian_path_of_the_zealot_warrior_of_the_gods.id },
						{ id: classFeature.barbarian_path_of_the_zealot_zealous_presence.id },
					]
				}
			}),
			barbarian_path_of_the_battlerager: await db.createSubclass({
				id: "subclass-barbarian-path-of-the-battlerager",
				name: "Path Of The Battlerager",
				slug: "path-of-the-battlerager",
				description: "Dwarven warriors who wear spiked armor and use it as a weapon, becoming whirlwinds of destruction in combat.",
				alabastriaContext: "Battleragers in Alabastria are primarily found among the dwarven strongholds of Bulsania, where their aggressive fighting style is both feared and respected. They often serve as elite shock troops in the Icebound Confederacy.",
				playstyle: "Aggressive tank who uses armor as a weapon. Perfect for players who want to be a mobile, damaging tank.",
				classId: clazz.barbarian.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.barbarian_path_of_the_battlerager_battlerager_armor.id },
						{ id: classFeature.barbarian_path_of_the_battlerager_reckless_abandon.id },
						{ id: classFeature.barbarian_path_of_the_battlerager_battlerager_charge.id },
					]
				}
			}),
			barbarian_path_of_the_giant: await db.createSubclass({
				id: "subclass-barbarian-path-of-the-giant",
				name: "Path Of The Giant",
				slug: "path-of-the-giant",
				description: "Barbarians who channel the power of giants, growing in size and strength as they rage, becoming towering forces of destruction.",
				alabastriaContext: "Giant barbarians in Alabastria often trace their lineage to the ancient giants who once roamed the mountains of Bulsania and the peaks of Kamalatman. Their connection to these primordial beings gives them incredible strength and size.",
				playstyle: "Size-changing warrior with area control and massive damage. Great for players who want to be a huge, intimidating presence on the battlefield.",
				classId: clazz.barbarian.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.barbarian_path_of_the_giant_giants_might.id },
						{ id: classFeature.barbarian_path_of_the_giant_elemental_cleaver.id },
						{ id: classFeature.barbarian_path_of_the_giant_mighty_impel.id },
					]
				}
			}),
			bard_college_of_creation: await db.createSubclass({
				id: "subclass-bard-college-of-creation",
				name: "College Of Creation",
				slug: "college-of-creation",
				description: "Bards who use the Song of Creation to bring objects and creatures into existence through performance.",
				alabastriaContext: "Satyr Bards in Kuriguer's fey glades channel creation magic through revelry and song. Half-Elf Bards in Skratonia use their versatile nature to bridge different artistic traditions, while Fairy Bards create wonder through miniature performances.",
				playstyle: "Creative support with unique utility options. Great for players who want to solve problems through magical creativity.",
				classId: clazz.bard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.bard_college_of_creation_note_of_potential.id },
						{ id: classFeature.bard_college_of_creation_performance_of_creation.id },
						{ id: classFeature.bard_college_of_creation_animating_performance.id },
					]
				}
			}),
			bard_college_of_eloquence: await db.createSubclass({
				id: "subclass-bard-college-of-eloquence",
				name: "College Of Eloquence",
				slug: "college-of-eloquence",
				description: "Masters of speech and persuasion who can sway minds and guarantee their words have impact.",
				alabastriaContext: "Half-Elf diplomats in Skratonia's council chambers master eloquence to bridge cultural divides. Aasimar speakers inspire through celestial wisdom, while Human politicians navigate complex city-state relationships.",
				playstyle: "Social manipulation and guaranteed success. Perfect for players who want to excel in roleplay and social encounters.",
				classId: clazz.bard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.bard_college_of_eloquence_silver_tongue.id },
						{ id: classFeature.bard_college_of_eloquence_unsettling_words.id },
						{ id: classFeature.bard_college_of_eloquence_universal_speech.id },
					]
				}
			}),
			bard_college_of_glamour: await db.createSubclass({
				id: "subclass-bard-college-of-glamour",
				name: "College Of Glamour",
				slug: "college-of-glamour",
				description: "Bards touched by fey magic who use supernatural beauty and charm to entrance and command.",
				alabastriaContext: "Eladrin Bards in Kuriguer's magic groves embody seasonal glamour and fey beauty. Satyr performers captivate audiences with supernatural charisma, while Tiefling Bards use infernal allure for darker purposes.",
				playstyle: "Enchantment-focused controller with fey magic. Ideal for players who want to charm enemies and inspire allies with supernatural presence.",
				classId: clazz.bard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.bard_college_of_glamour_mantle_of_inspiration.id },
						{ id: classFeature.bard_college_of_glamour_enthralling_performance.id },
						{ id: classFeature.bard_college_of_glamour_mantle_of_majesty.id },
					]
				}
			}),
			bard_college_of_lore: await db.createSubclass({
				id: "subclass-bard-college-of-lore",
				name: "College Of Lore",
				slug: "college-of-lore",
				description: "Scholars and knowledge-seekers who collect secrets and magical techniques from across the world.",
				alabastriaContext: "Human scholars in Skratonia's libraries preserve knowledge from all continents. Half-Elf researchers bridge different cultural traditions, while Vedalken academics approach lore with systematic precision.",
				playstyle: "Ultimate versatility with access to any spell. Perfect for players who want maximum options and knowledge-based roleplay.",
				classId: clazz.bard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.bard_college_of_lore_cutting_words.id },
						{ id: classFeature.bard_college_of_lore_additional_magical_secrets.id },
						{ id: classFeature.bard_college_of_lore_peerless_skill.id },
					]
				}
			}),
			bard_college_of_spirits: await db.createSubclass({
				id: "subclass-bard-college-of-spirits",
				name: "College Of Spirits",
				slug: "college-of-spirits",
				description: "Bards who commune with spirits and channel their stories for magical effects.",
				alabastriaContext: "Shadar-kai Bards in Kuriguer's dangerous woods commune with shadow spirits. Reborn individuals in Skratonia channel memories of past lives, while Hexblood Bards speak with spirits touched by hag magic.",
				playstyle: "Unpredictable support with spiritual themes. Great for players who enjoy ghostly lore and random magical effects.",
				classId: clazz.bard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.bard_college_of_spirits_guiding_whispers.id },
						{ id: classFeature.bard_college_of_spirits_spirit_session.id },
						{ id: classFeature.bard_college_of_spirits_tales_from_beyond.id },
					]
				}
			}),
			bard_college_of_swords: await db.createSubclass({
				id: "subclass-bard-college-of-swords",
				name: "College Of Swords",
				slug: "college-of-swords",
				description: "Warrior-poets who combine bladework with performance, fighting with artistic flair.",
				alabastriaContext: "Half-Elf duelists in Skratonia's urban centers blend combat with performance art. Tabaxi blade dancers on the plains combine feline grace with swordplay, while Human sword-singers adapt techniques from multiple traditions.",
				playstyle: "Melee-focused bard with combat prowess. Perfect for players who want to fight up close while maintaining bardic versatility.",
				classId: clazz.bard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.bard_college_of_swords_fighting_style.id },
						{ id: classFeature.bard_college_of_swords_blade_flourish.id },
						{ id: classFeature.bard_college_of_swords_extra_attack.id },
					]
				}
			}),
			bard_college_of_valor: await db.createSubclass({
				id: "subclass-bard-college-of-valor",
				name: "College Of Valor",
				slug: "college-of-valor",
				description: "Battle-bards who inspire courage in combat and fight alongside their allies.",
				alabastriaContext: "Dragonborn war-singers in Bulsania's militarized society inspire troops with draconic battle hymns. Human valor bards lead Skratonia's city militias, while Leonin pride-singers rally their warrior communities.",
				playstyle: "Balanced combat and support character. Ideal for players who want to fight effectively while inspiring allies.",
				classId: clazz.bard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.bard_college_of_valor_combat_inspiration.id },
						{ id: classFeature.bard_college_of_valor_medium_armor_and_shields.id },
						{ id: classFeature.bard_college_of_valor_extra_attack.id },
					]
				}
			}),
			bard_college_of_whispers: await db.createSubclass({
				id: "subclass-bard-college-of-whispers",
				name: "College Of Whispers",
				slug: "college-of-whispers",
				description: "Spies and manipulators who use secrets and psychic magic to control and deceive.",
				alabastriaContext: "Changeling spies in Kuriguer's diverse ports use their shapeshifting with whispered secrets. Kenku information brokers excel at gathering and trading secrets, while Tiefling manipulators work in Skratonia's political shadows.",
				playstyle: "Espionage and psychological warfare. Perfect for players who want to be the party's spy and manipulator.",
				classId: clazz.bard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.bard_college_of_whispers_psychic_blades.id },
						{ id: classFeature.bard_college_of_whispers_words_of_terror.id },
						{ id: classFeature.bard_college_of_whispers_mantle_of_whispers.id },
					]
				}
			}),
			cleric_forge_domain: await db.createSubclass({
				id: "subclass-cleric-forge-domain",
				name: "Forge Domain",
				slug: "forge-domain",
				description: "Clerics of smithing gods who bless weapons and armor with divine power.",
				alabastriaContext: "Dwarven Forge Clerics in Maltman's mountain strongholds serve the god of smiths and creation. Warforged clerics in Alatman understand the divine spark within constructed beings, while Duergar forge-priests work in the deepest underground workshops.",
				playstyle: "Tanky support focused on equipment enhancement. Perfect for players who want to craft magical items and support through divine smithing.",
				classId: clazz.cleric.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.cleric_forge_domain_blessing_of_the_forge.id },
						{ id: classFeature.cleric_forge_domain_channel_divinity_artisans_blessing.id },
						{ id: classFeature.cleric_forge_domain_soul_of_the_forge.id },
					]
				}
			}),
			cleric_life_domain: await db.createSubclass({
				id: "subclass-cleric-life-domain",
				name: "Life Domain",
				slug: "life-domain",
				description: "Healers dedicated to preserving and restoring life, the most traditional clerical role.",
				alabastriaContext: "Aasimar Life Clerics in Skratonia's cities serve as beacons of hope and healing. Human clerics establish temples and hospitals, while Halfling healers tend to rural communities and traveling caravans.",
				playstyle: "Ultimate healer focused on keeping everyone alive. Ideal for players who want to be the party's primary source of healing and support.",
				classId: clazz.cleric.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.cleric_life_domain_disciple_of_life.id },
						{ id: classFeature.cleric_life_domain_channel_divinity_preserve_life.id },
						{ id: classFeature.cleric_life_domain_blessed_healer.id },
					]
				}
			}),
			cleric_war_domain: await db.createSubclass({
				id: "subclass-cleric-war-domain",
				name: "War Domain",
				slug: "war-domain",
				description: "Battle-clerics who serve gods of war and conflict, blessing warriors and leading charges.",
				alabastriaContext: "Leonin War Clerics like Tharos Raggenthraw serve Tempus across Skratonia's warrior prides. Dragonborn battle-priests lead Bulsania's militarized forces, while Orc war-shamans rally tribal warriors in Katman's swamps.",
				playstyle: "Combat-focused cleric who fights on the front lines. Great for players who want to be both warrior and priest.",
				classId: clazz.cleric.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.cleric_war_domain_war_priest.id },
						{ id: classFeature.cleric_war_domain_channel_divinity_guided_strike.id },
						{ id: classFeature.cleric_war_domain_war_domain_spells.id },
					]
				}
			}),
			cleric_tempest_domain: await db.createSubclass({
				id: "subclass-cleric-tempest-domain",
				name: "Tempest Domain",
				slug: "tempest-domain",
				description: "Storm-callers who channel the power of thunder, lightning, and ocean tempests.",
				alabastriaContext: "Aarakocra Tempest Clerics in Bulsania's peaks command mountain storms and arctic winds. Triton storm-callers along Kuriguer's coasts control oceanic tempests, while Air Genasi channel coastal winds and lightning.",
				playstyle: "Destructive spellcaster with weather-based powers. Perfect for players who want to call down divine storms and lightning.",
				classId: clazz.cleric.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.cleric_tempest_domain_wrath_of_the_storm.id },
						{ id: classFeature.cleric_tempest_domain_channel_divinity_destructive_wrath.id },
						{ id: classFeature.cleric_tempest_domain_thunderbolt_strike.id },
					]
				}
			}),
			cleric_light_domain: await db.createSubclass({
				id: "subclass-cleric-light-domain",
				name: "Light Domain",
				slug: "light-domain",
				description: "Clerics of light and sun gods who wield radiant energy to illuminate darkness and burn away evil.",
				alabastriaContext: "Light Clerics in Alabastria serve as beacons of hope in dark times, their radiant magic particularly effective against the undead and fiends that plague the world. They are common in Skratonia's cities and the Huntbound Order.",
				playstyle: "Offensive caster with radiant damage and area control. Great for players who want to be a divine blaster with utility.",
				classId: clazz.cleric.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.cleric_light_domain_warding_flare.id },
						{ id: classFeature.cleric_light_domain_channel_divinity_radiance_of_the_dawn.id },
						{ id: classFeature.cleric_light_domain_potent_spellcasting.id },
					]
				}
			}),
			cleric_nature_domain: await db.createSubclass({
				id: "subclass-cleric-nature-domain",
				name: "Nature Domain",
				slug: "nature-domain",
				description: "Clerics who serve nature gods, wielding the power of the natural world to protect and nurture life.",
				alabastriaContext: "Nature Clerics in Alabastria are found in the wild regions of Kuriguer and the untamed areas of Kamalatman. They serve as protectors of the natural world and guides for those who venture into dangerous wilderness.",
				playstyle: "Versatile caster with nature magic and elemental resistance. Perfect for players who want to combine divine power with nature magic.",
				classId: clazz.cleric.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.cleric_nature_domain_acolyte_of_nature.id },
						{ id: classFeature.cleric_nature_domain_channel_divinity_charm_animals_and_plants.id },
						{ id: classFeature.cleric_nature_domain_dampen_elements.id },
					]
				}
			}),
			cleric_trickery_domain: await db.createSubclass({
				id: "subclass-cleric-trickery-domain",
				name: "Trickery Domain",
				slug: "trickery-domain",
				description: "Clerics of trickster gods who use deception, illusion, and cunning to outwit enemies and protect their allies.",
				alabastriaContext: "Trickery Clerics in Alabastria often serve as spies, scouts, and information gatherers. Their deceptive abilities make them valuable in the complex political landscape and dangerous missions of the Huntbound Order.",
				playstyle: "Stealth-focused caster with illusion magic and deception. Great for players who want to be sneaky and cunning.",
				classId: clazz.cleric.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.cleric_trickery_domain_blessing_of_the_trickster.id },
						{ id: classFeature.cleric_trickery_domain_channel_divinity_invoke_duplicity.id },
						{ id: classFeature.cleric_trickery_domain_cloak_of_shadows.id },
					]
				}
			}),
			druid_circle_of_the_land: await db.createSubclass({
				id: "subclass-druid-circle-of-the-land",
				name: "Circle Of The Land",
				slug: "circle-of-the-land",
				description: "Druids connected to specific terrains who draw additional magic from their chosen environment.",
				alabastriaContext: "Wood Elf Land Druids in Kuriguer's forests specialize in woodland magic. Centaurs on Skratonia's plains master grassland spells, while Lizardfolk in Katman's swamps command wetland magic.",
				playstyle: "Spell-focused druid with terrain specialization. Great for players who want maximum spellcasting power and environmental themes.",
				classId: clazz.druid.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.druid_circle_of_the_land_bonus_cantrip.id },
						{ id: classFeature.druid_circle_of_the_land_natural_recovery.id },
						{ id: classFeature.druid_circle_of_the_land_circle_spells.id },
					]
				}
			}),
			druid_circle_of_the_moon: await db.createSubclass({
				id: "subclass-druid-circle-of-the-moon",
				name: "Circle Of The Moon",
				slug: "circle-of-the-moon",
				description: "Druids who excel at shapeshifting, taking more powerful beast forms for combat.",
				alabastriaContext: "Shifters in Kuriguer's wild woods naturally gravitate toward moon magic, their lycanthropic heritage enhanced by druidic power. Firbolg moon druids become massive forest guardians, while Wood Elves master the forms of woodland predators.",
				playstyle: "Melee combatant through shapeshifting. Perfect for players who want to fight as animals and have strong physical presence.",
				classId: clazz.druid.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.druid_circle_of_the_moon_combat_wild_shape.id },
						{ id: classFeature.druid_circle_of_the_moon_circle_forms.id },
						{ id: classFeature.druid_circle_of_the_moon_primal_strike.id },
					]
				}
			}),
			druid_circle_of_wildfire: await db.createSubclass({
				id: "subclass-druid-circle-of-wildfire",
				name: "Circle Of Wildfire",
				slug: "circle-of-wildfire",
				description: "Druids who understand that destruction and renewal are part of nature's cycle, wielding cleansing flames.",
				alabastriaContext: "Fire Genasi in Kuriguer's magical hotspots channel elemental fire for renewal. Tiefling druids across Skratonia use infernal heritage for natural cleansing, while Dragonborn embrace draconic flame as part of nature's cycle.",
				playstyle: "Fire-focused druid with elemental companion. Ideal for players who want to combine destruction and healing themes.",
				classId: clazz.druid.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.druid_circle_of_wildfire_summon_wildfire_spirit.id },
						{ id: classFeature.druid_circle_of_wildfire_enhanced_bond.id },
						{ id: classFeature.druid_circle_of_wildfire_circle_spells.id },
					]
				}
			}),
			fighter_champion: await db.createSubclass({
				id: "subclass-fighter-champion",
				name: "Champion",
				slug: "champion",
				description: "Fighters focused on physical excellence and improved critical hits, representing peak athletic ability.",
				alabastriaContext: "Human Champions in Skratonia's cities excel through pure determination and training. Goliath Champions in Bulsania's mountains embody natural athletic superiority, while Orc Champions in Katman's swamps demonstrate raw physical power.",
				playstyle: "Simple but effective warrior focused on consistent damage. Perfect for new players or those who want straightforward combat effectiveness.",
				classId: clazz.fighter.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.fighter_champion_improved_critical.id },
						{ id: classFeature.fighter_champion_remarkable_athlete.id },
						{ id: classFeature.fighter_champion_additional_fighting_style.id },
					]
				}
			}),
			fighter_battle_master: await db.createSubclass({
				id: "subclass-fighter-battle-master",
				name: "Battle Master",
				slug: "battle-master",
				description: "Tactical fighters who use combat maneuvers to control the battlefield and enhance their attacks.",
				alabastriaContext: "Hobgoblin Battle Masters in Bulsania's fortresses combine military discipline with tactical expertise. Human officers in Skratonia's armies use maneuvers to coordinate troops, while Dwarf veterans in Maltman employ mountain warfare tactics.",
				playstyle: "Tactical combatant with versatile options. Great for players who enjoy strategic thinking and battlefield control.",
				classId: clazz.fighter.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.fighter_battle_master_combat_superiority.id },
						{ id: classFeature.fighter_battle_master_maneuvers.id },
						{ id: classFeature.fighter_battle_master_know_your_enemy.id },
					]
				}
			}),
			fighter_eldritch_knight: await db.createSubclass({
				id: "subclass-fighter-eldritch-knight",
				name: "Eldritch Knight",
				slug: "eldritch-knight",
				description: "Warrior-mages who combine martial prowess with arcane magic, creating spellswords.",
				alabastriaContext: "High Elf Eldritch Knights in Kuriguer's magical forests blend ancient spellsword traditions with modern techniques. Githyanki warriors adapt planar magic for combat, while Half-Elf knights bridge martial and magical traditions.",
				playstyle: "Magical warrior with utility spells and combat enhancement. Ideal for players who want both sword and sorcery.",
				classId: clazz.fighter.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.fighter_eldritch_knight_spellcasting.id },
						{ id: classFeature.fighter_eldritch_knight_weapon_bond.id },
						{ id: classFeature.fighter_eldritch_knight_war_magic.id },
					]
				}
			}),
			monk_way_of_the_open_hand: await db.createSubclass({
				id: "subclass-monk-way-of-the-open-hand",
				name: "Way Of The Open Hand",
				slug: "way-of-the-open-hand",
				description: "Traditional monks who master unarmed combat and ki manipulation techniques.",
				alabastriaContext: "Human Open Hand Monks in Skratonia's urban monasteries teach classical martial arts. Aarakocra monks in Bulsania's peaks combine aerial techniques with traditional forms, while High Elf monks in Kuriguer blend ancient elven martial traditions.",
				playstyle: "Classic monk focused on unarmed combat mastery. Perfect for players who want the traditional monk experience with reliable techniques.",
				classId: clazz.monk.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.monk_way_of_the_open_hand_open_hand_technique.id },
						{ id: classFeature.monk_way_of_the_open_hand_wholeness_of_body.id },
						{ id: classFeature.monk_way_of_the_open_hand_tranquility.id },
					]
				}
			}),
			monk_way_of_shadow: await db.createSubclass({
				id: "subclass-monk-way-of-shadow",
				name: "Way Of Shadow",
				slug: "way-of-shadow",
				description: "Ninja-like monks who use stealth, darkness, and illusion magic for infiltration and assassination.",
				alabastriaContext: "Shadar-kai Shadow Monks in Kuriguer's dangerous woods master shadow magic and stealth. Kenku monks use their mimicry for infiltration, while Tabaxi shadow dancers combine feline stealth with monastic training.",
				playstyle: "Stealth-focused monk with magical abilities. Great for players who want to be sneaky scouts and assassins.",
				classId: clazz.monk.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.monk_way_of_shadow_shadow_arts.id },
						{ id: classFeature.monk_way_of_shadow_shadow_step.id },
						{ id: classFeature.monk_way_of_shadow_cloak_of_shadows.id },
					]
				}
			}),
			monk_way_of_the_four_elements: await db.createSubclass({
				id: "subclass-monk-way-of-the-four-elements",
				name: "Way Of The Four Elements",
				slug: "way-of-the-four-elements",
				description: "Monks who channel elemental forces through their ki, becoming living conduits of elemental power.",
				alabastriaContext: "Genasi Four Elements Monks in Kuriguer's elemental nodes master their inherited powers. Air Genasi control wind and storm, Fire Genasi channel flame and heat, while Earth and Water Genasi manipulate stone and tide.",
				playstyle: "Magical monk with elemental powers. Ideal for players who want to blend martial arts with elemental magic.",
				classId: clazz.monk.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.monk_way_of_the_four_elements_elemental_disciplines.id },
						{ id: classFeature.monk_way_of_the_four_elements_additional_disciplines.id },
						{ id: classFeature.monk_way_of_the_four_elements_elemental_mastery.id },
					]
				}
			}),
			paladin_oath_of_devotion: await db.createSubclass({
				id: "subclass-paladin-oath-of-devotion",
				name: "Oath Of Devotion",
				slug: "oath-of-devotion",
				description: "Traditional paladins devoted to ideals of virtue, honor, and righteousness.",
				alabastriaContext: "Aasimar Devotion Paladins in Skratonia's cities serve as exemplars of celestial virtue. Human paladins establish orders dedicated to justice and protection, while Dragonborn honor-knights uphold draconic codes of conduct.",
				playstyle: "Classic righteous paladin focused on protection and virtue. Perfect for players who want to be the traditional holy knight.",
				classId: clazz.paladin.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.paladin_oath_of_devotion_sacred_weapon.id },
						{ id: classFeature.paladin_oath_of_devotion_turn_the_unholy.id },
						{ id: classFeature.paladin_oath_of_devotion_aura_of_devotion.id },
					]
				}
			}),
			paladin_oath_of_the_ancients: await db.createSubclass({
				id: "subclass-paladin-oath-of-the-ancients",
				name: "Oath Of The Ancients",
				slug: "oath-of-the-ancients",
				description: "Paladins who protect the light, beauty, and life of the world, often serving nature deities.",
				alabastriaContext: "Wood Elf Ancients Paladins in Kuriguer's forests protect sacred groves and ancient mysteries. Firbolg guardians serve as champions of the natural world, while Centaurs on Skratonia's plains defend the harmony between civilization and nature.",
				playstyle: "Nature-focused paladin with protective abilities. Great for players who want to combine holy warrior with nature themes.",
				classId: clazz.paladin.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.paladin_oath_of_the_ancients_natures_wrath.id },
						{ id: classFeature.paladin_oath_of_the_ancients_turn_the_faithless.id },
						{ id: classFeature.paladin_oath_of_the_ancients_aura_of_warding.id },
					]
				}
			}),
			paladin_oath_of_vengeance: await db.createSubclass({
				id: "subclass-paladin-oath-of-vengeance",
				name: "Oath Of Vengeance",
				slug: "oath-of-vengeance",
				description: "Paladins dedicated to punishing wrongdoers and pursuing justice through relentless pursuit.",
				alabastriaContext: "Half-Orc Vengeance Paladins in Katman's frontier pursue justice with savage determination. Tiefling paladins seek to overcome their infernal heritage through righteous action, while Human avengers hunt down those who prey on the innocent.",
				playstyle: "Aggressive paladin focused on hunting down evil. Ideal for players who want to be a relentless force of justice.",
				classId: clazz.paladin.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.paladin_oath_of_vengeance_abjure_enemy.id },
						{ id: classFeature.paladin_oath_of_vengeance_vow_of_enmity.id },
						{ id: classFeature.paladin_oath_of_vengeance_relentless_avenger.id },
					]
				}
			}),
			paladin_oath_of_the_crown: await db.createSubclass({
				id: "subclass-paladin-oath-of-the-crown",
				name: "Oath Of The Crown",
				slug: "oath-of-the-crown",
				description: "Paladins who serve the law and civilization, defending the social order and protecting the innocent through loyalty to crown and country.",
				alabastriaContext: "Human Crown Paladins in Skratonia's city-states serve as royal guards and civic protectors, upholding the law and defending the democratic councils. Dragonborn Crown Paladins in Bulsania's militarized society embody draconic honor and loyalty to the Icebound Confederacy. Dwarven Crown Paladins in Maltman serve as elite royal guards for Queen Bronwyn, while Orc Crown Paladins in Katman defend High King Gorak's unified kingdom. These paladins often serve as diplomats, judges, and elite military officers, bridging the gap between divine righteousness and civic duty.",
				playstyle: "Lawful protector focused on defending allies and maintaining order. Perfect for players who want to be a noble guardian of civilization and law.",
				classId: clazz.paladin.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.paladin_oath_of_the_crown_channel_divinity_champion_challenge.id },
						{ id: classFeature.paladin_oath_of_the_crown_channel_divinity_turn_the_tide.id },
						{ id: classFeature.paladin_oath_of_the_crown_divine_allegiance.id },
						{ id: classFeature.paladin_oath_of_the_crown_unbreakable_majesty.id },
					]
				}
			}),
			ranger_hunter: await db.createSubclass({
				id: "subclass-ranger-hunter",
				name: "Hunter",
				slug: "hunter",
				description: "Rangers specialized in hunting specific types of prey, masters of taking down dangerous creatures.",
				alabastriaContext: "Human Hunters in Skratonia's diverse lands adapt their techniques for various threats. Wood Elf hunters in Kuriguer specialize in forest predators, while Tabaxi hunters on the plains track dangerous beasts with feline instincts.",
				playstyle: "Versatile combatant effective against many enemy types. Great for players who want reliable combat effectiveness and adaptability.",
				classId: clazz.ranger.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.ranger_hunter_hunters_prey.id },
						{ id: classFeature.ranger_hunter_defensive_tactics.id },
						{ id: classFeature.ranger_hunter_multiattack.id },
					]
				}
			}),
			ranger_beast_master: await db.createSubclass({
				id: "subclass-ranger-beast-master",
				name: "Beast Master",
				slug: "beast-master",
				description: "Rangers who form deep bonds with animal companions, fighting alongside loyal beasts.",
				alabastriaContext: "Aarakocra Beast Masters in Bulsania's peaks bond with eagles and mountain cats. Shifters in Kuriguer form natural connections with forest creatures, while Halfling rangers partner with loyal dogs and ponies for caravan protection.",
				playstyle: "Pet-focused ranger with loyal companion. Perfect for players who want an animal partner and unique tactical options.",
				classId: clazz.ranger.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.ranger_beast_master_rangers_companion.id },
						{ id: classFeature.ranger_beast_master_exceptional_training.id },
						{ id: classFeature.ranger_beast_master_bestial_fury.id },
					]
				}
			}),
			ranger_gloom_stalker: await db.createSubclass({
				id: "subclass-ranger-gloom-stalker",
				name: "Gloom Stalker",
				slug: "gloom-stalker",
				description: "Rangers who excel in darkness and underground environments, masters of ambush and stealth.",
				alabastriaContext: "Shadar-kai Gloom Stalkers in Kuriguer's shadow-touched woods master darkness and stealth. Drow rangers in Maltman's underground caverns excel at subterranean warfare, while Tabaxi night-hunters use feline senses for nocturnal tracking.",
				playstyle: "Stealth-focused ambush specialist. Ideal for players who want to be deadly scouts and first-strike specialists.",
				classId: clazz.ranger.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.ranger_gloom_stalker_dread_ambusher.id },
						{ id: classFeature.ranger_gloom_stalker_umbral_sight.id },
						{ id: classFeature.ranger_gloom_stalker_iron_mind.id },
					]
				}
			}),
			rogue_thief: await db.createSubclass({
				id: "subclass-rogue-thief",
				name: "Thief",
				slug: "thief",
				description: "Classic rogues who excel at burglary, climbing, and using magical items.",
				alabastriaContext: "Halfling Thieves in Skratonia's cities use their natural nimbleness for both legitimate and questionable pursuits. Goblin scavengers on the plains excel at finding and using discarded items, while Human thieves adapt techniques from multiple traditions.",
				playstyle: "Utility-focused rogue with excellent mobility and item use. Perfect for players who want to be the party's problem solver and infiltrator.",
				classId: clazz.rogue.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.rogue_thief_fast_hands.id },
						{ id: classFeature.rogue_thief_second_story_work.id },
						{ id: classFeature.rogue_thief_use_magic_device.id },
					]
				}
			}),
			rogue_assassin: await db.createSubclass({
				id: "subclass-rogue-assassin",
				name: "Assassin",
				slug: "assassin",
				description: "Professional killers who specialize in disguises, poisons, and elimination techniques.",
				alabastriaContext: "Kenku Assassins in Kuriguer's ports use their mimicry for perfect infiltration. Shadar-kai killers employ shadow magic for silent elimination, while Changeling assassins become anyone they need to be for their missions.",
				playstyle: "Stealth-focused killer with disguise abilities. Great for players who want to be deadly infiltrators and eliminate key targets.",
				classId: clazz.rogue.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.rogue_assassin_bonus_proficiencies.id },
						{ id: classFeature.rogue_assassin_assassinate.id },
						{ id: classFeature.rogue_assassin_infiltration_expertise.id },
					]
				}
			}),
			rogue_arcane_trickster: await db.createSubclass({
				id: "subclass-rogue-arcane-trickster",
				name: "Arcane Trickster",
				slug: "arcane-trickster",
				description: "Rogues who blend thievery with illusion and enchantment magic.",
				alabastriaContext: "High Elf Arcane Tricksters in Kuriguer combine natural magic with roguish skills. Gnome tricksters use illusion magic for elaborate heists, while Half-Elf rogues bridge magical and mundane techniques.",
				playstyle: "Magical rogue with utility spells and enhanced stealth. Ideal for players who want magic mixed with traditional rogue abilities.",
				classId: clazz.rogue.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.rogue_arcane_trickster_spellcasting.id },
						{ id: classFeature.rogue_arcane_trickster_mage_hand_legerdemain.id },
						{ id: classFeature.rogue_arcane_trickster_magical_ambush.id },
					]
				}
			}),
			sorcerer_draconic_bloodline: await db.createSubclass({
				id: "subclass-sorcerer-draconic-bloodline",
				name: "Draconic Bloodline",
				slug: "draconic-bloodline",
				description: "Sorcerers with dragon ancestry who gain draconic resilience and elemental power.",
				alabastriaContext: "Dragonborn Sorcerers in Bulsania manifest their draconic heritage through raw magical power. Kobolds in Maltman's mines channel their dragon worship into sorcerous abilities, while Half-Elves across Skratonia discover draconic ancestors in their mixed bloodlines.",
				playstyle: "Durable elemental damage dealer. Perfect for players who want to embody draconic power and specialize in elemental magic.",
				classId: clazz.sorcerer.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.sorcerer_draconic_bloodline_dragon_ancestor.id },
						{ id: classFeature.sorcerer_draconic_bloodline_draconic_resilience.id },
						{ id: classFeature.sorcerer_draconic_bloodline_elemental_affinity.id },
					]
				}
			}),
			sorcerer_wild_magic: await db.createSubclass({
				id: "subclass-sorcerer-wild-magic",
				name: "Wild Magic",
				slug: "wild-magic",
				description: "Sorcerers touched by chaotic magic whose spells can trigger unpredictable effects.",
				alabastriaContext: "Genasi Wild Sorcerers in Kuriguer's magical forests experience surges from elemental chaos. Tiefling sorcerers across Skratonia manifest infernal unpredictability, while Halfling magic-users find their luck creates unexpected magical results.",
				playstyle: "Unpredictable spellcaster with chaotic effects. Great for players who enjoy randomness and want to create memorable magical moments.",
				classId: clazz.sorcerer.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.sorcerer_wild_magic_wild_magic_surge.id },
						{ id: classFeature.sorcerer_wild_magic_tides_of_chaos.id },
						{ id: classFeature.sorcerer_wild_magic_bend_luck.id },
					]
				}
			}),
			sorcerer_divine_soul: await db.createSubclass({
				id: "subclass-sorcerer-divine-soul",
				name: "Divine Soul",
				slug: "divine-soul",
				description: "Sorcerers blessed by divine power who can access both arcane and divine magic.",
				alabastriaContext: "Aasimar Divine Soul Sorcerers in Skratonia channel celestial power through their bloodline. Protector Aasimar focus on healing and protection, while Dragonborn divine sorcerers in Bulsania combine draconic heritage with divine blessing.",
				playstyle: "Versatile caster with both arcane and divine magic. Ideal for players who want maximum spell variety and healing capabilities.",
				classId: clazz.sorcerer.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.sorcerer_divine_soul_divine_magic.id },
						{ id: classFeature.sorcerer_divine_soul_favored_by_the_gods.id },
						{ id: classFeature.sorcerer_divine_soul_empowered_healing.id },
					]
				}
			}),
			warlock_the_fiend: await db.createSubclass({
				id: "subclass-warlock-the-fiend",
				name: "The Fiend",
				slug: "the-fiend",
				description: "Warlocks who serve demons, devils, or other evil outsiders for infernal power.",
				alabastriaContext: "Tiefling Fiend Warlocks in Skratonia embrace their infernal heritage through diabolic pacts. Human desperate souls make bargains for power, while Half-Orc warlocks in Katman's swamps trade with savage fiendish entities.",
				playstyle: "Durable damage dealer with infernal power. Perfect for players who want to play with dark themes and consistent combat effectiveness.",
				classId: clazz.warlock.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.warlock_the_fiend_dark_ones_blessing.id },
						{ id: classFeature.warlock_the_fiend_dark_ones_own_luck.id },
						{ id: classFeature.warlock_the_fiend_fiendish_resilience.id },
					]
				}
			}),
			warlock_the_archfey: await db.createSubclass({
				id: "subclass-warlock-the-archfey",
				name: "The Archfey",
				slug: "the-archfey",
				description: "Warlocks bound to powerful fey lords who grant whimsical but potent magic.",
				alabastriaContext: "Eladrin Archfey Warlocks in Kuriguer's magic groves serve seasonal courts with natural connections. Satyr warlocks revel with fey lords in eternal parties, while Half-Elf warlocks bridge mortal and fey worlds through their pacts.",
				playstyle: "Enchantment-focused controller with fey magic. Great for players who want whimsical powers and social manipulation abilities.",
				classId: clazz.warlock.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.warlock_the_archfey_fey_presence.id },
						{ id: classFeature.warlock_the_archfey_misty_escape.id },
						{ id: classFeature.warlock_the_archfey_beguiling_defenses.id },
					]
				}
			}),
			warlock_the_great_old_one: await db.createSubclass({
				id: "subclass-warlock-the-great-old-one",
				name: "The Great Old One",
				slug: "the-great-old-one",
				description: "Warlocks who serve ancient, alien entities that exist beyond normal reality.",
				alabastriaContext: "Kalashtar Great Old One Warlocks in Skratonia accidentally contact alien minds through their psychic abilities. Human scholars uncover forbidden knowledge, while Githyanki warlocks encounter cosmic entities during planar travels.",
				playstyle: "Psychic-themed warlock with alien abilities. Ideal for players who enjoy cosmic horror themes and mental manipulation.",
				classId: clazz.warlock.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.warlock_the_great_old_one_telepathic_communication.id },
						{ id: classFeature.warlock_the_great_old_one_entropic_ward.id },
						{ id: classFeature.warlock_the_great_old_one_thought_shield.id },
					]
				}
			}),
			wizard_school_of_evocation: await db.createSubclass({
				id: "subclass-wizard-school-of-evocation",
				name: "School Of Evocation",
				slug: "school-of-evocation",
				description: "Wizards who specialize in destructive magic, mastering spells of force and energy.",
				alabastriaContext: "Dragonborn Evocation Wizards in Bulsania combine draconic heritage with destructive magic research. Fire Genasi wizards in Kuriguer master elemental destruction, while High Elf battle-mages refine combat spellcasting techniques.",
				playstyle: "Damage-focused wizard with safe area spells. Perfect for players who want to be the party's primary magical damage dealer.",
				classId: clazz.wizard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.wizard_school_of_evocation_sculpt_spells.id },
						{ id: classFeature.wizard_school_of_evocation_potent_cantrip.id },
						{ id: classFeature.wizard_school_of_evocation_empowered_evocation.id },
					]
				}
			}),
			wizard_school_of_illusion: await db.createSubclass({
				id: "subclass-wizard-school-of-illusion",
				name: "School Of Illusion",
				slug: "school-of-illusion",
				description: "Wizards who master deception, misdirection, and reality-bending illusions.",
				alabastriaContext: "Gnome Illusion Wizards in Kuriguer's coastal towns combine natural illusion magic with scholarly study. Changeling wizards use their shapeshifting to enhance deceptive magic, while Kenku illusionists perfect mimicry through magical means.",
				playstyle: "Deception and control specialist with creative solutions. Great for players who enjoy creative problem-solving and battlefield control.",
				classId: clazz.wizard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.wizard_school_of_illusion_improved_minor_illusion.id },
						{ id: classFeature.wizard_school_of_illusion_malleable_illusions.id },
						{ id: classFeature.wizard_school_of_illusion_illusory_reality.id },
					]
				}
			}),
			wizard_school_of_divination: await db.createSubclass({
				id: "subclass-wizard-school-of-divination",
				name: "School Of Divination",
				slug: "school-of-divination",
				description: "Wizards who peer into the future and uncover hidden knowledge through prophetic magic.",
				alabastriaContext: "High Elf Divination Wizards in Kuriguer use their long lives to study prophetic magic. Kalashtar wizards in Skratonia combine dream-plane visions with scholarly divination, while Human oracles interpret divine and arcane portents.",
				playstyle: "Support wizard with future sight and information gathering. Ideal for players who want to help the party through foresight and knowledge.",
				classId: clazz.wizard.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.wizard_school_of_divination_portent.id },
						{ id: classFeature.wizard_school_of_divination_expert_divination.id },
						{ id: classFeature.wizard_school_of_divination_the_third_eye.id },
					]
				}
			}),
			tactician_grandmaster: await db.createSubclass({
				id: "subclass-tactician-grandmaster",
				name: "Grandmaster",
				slug: "grandmaster",
				description: "Masters of grand strategy who excel at long-term planning and large-scale tactical operations.",
				alabastriaContext: "Grandmasters in Alabastria often serve as military advisors to kingdoms and guild leaders. Their strategic minds are crucial for planning large-scale operations against the most dangerous threats.",
				playstyle: "Long-term strategic planning and battlefield control. Perfect for players who enjoy complex tactical scenarios.",
				classId: clazz.tactician.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.tactician_grandmaster_strategic_planning.id },
						{ id: classFeature.tactician_grandmaster_battlefield_survey.id },
						{ id: classFeature.tactician_grandmaster_grand_strategy.id },
					]
				}
			}),
			tactician_mentalist: await db.createSubclass({
				id: "subclass-tactician-mentalist",
				name: "Mentalist",
				slug: "mentalist",
				description: "Tacticians who use psionic abilities and mental powers to read enemy intentions and coordinate allies through telepathic communication.",
				alabastriaContext: "Mentalists in Alabastria often work with the Huntbound Order's intelligence operations, using their psionic abilities to gather information and coordinate covert missions.",
				playstyle: "Psionic support and battlefield communication. Great for players who want to combine strategy with mental powers.",
				classId: clazz.tactician.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.tactician_mentalist_telepathic_link.id },
						{ id: classFeature.tactician_mentalist_mind_reading.id },
						{ id: classFeature.tactician_mentalist_psychic_command.id },
					]
				}
			}),
			tactician_scholar: await db.createSubclass({
				id: "subclass-tactician-scholar",
				name: "Scholar",
				slug: "scholar",
				description: "Academic tacticians who study warfare, history, and enemy tactics to develop innovative strategies and countermeasures.",
				alabastriaContext: "Scholars in Alabastria often work in the magical academies of Kuriguer, studying ancient warfare and developing new tactics for modern threats.",
				playstyle: "Knowledge-based strategy and research. Ideal for players who enjoy learning about enemy types and developing counter-strategies.",
				classId: clazz.tactician.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.tactician_scholar_tactical_knowledge.id },
						{ id: classFeature.tactician_scholar_research_and_development.id },
						{ id: classFeature.tactician_scholar_master_tactician.id },
					]
				}
			}),
			tactician_war_mind: await db.createSubclass({
				id: "subclass-tactician-war-mind",
				name: "War Mind",
				slug: "war-mind",
				description: "Combat-focused tacticians who combine martial prowess with strategic thinking, leading from the front lines.",
				alabastriaContext: "War Minds in Alabastria often serve as field commanders in the Huntbound Order, leading dangerous missions and inspiring their fellow hunters to greatness.",
				playstyle: "Combat-focused strategy and leadership. Perfect for players who want to combine tactical thinking with martial prowess.",
				classId: clazz.tactician.id,
				keyFeatures: {
					connect: [
						{ id: classFeature.tactician_war_mind_combat_analysis.id },
						{ id: classFeature.tactician_war_mind_battlefield_presence.id },
						{ id: classFeature.tactician_war_mind_war_leader.id },
					]
				}
			}),
		};
    // Pantheon
		const pantheon: Record<string, Prisma.PantheonGetPayload<{}>> = {
			human_centric_faerun_forgotten_realms: await db.createPantheon({
				id: "human-centric-faerun-forgotten-realms",
				name: "Human-Centric (Faerûn / Forgotten Realms)",
				slug: "human-centric-faerun-forgotten-realms",
				description: "The primary pantheon of human civilizations, brought to Alabastria through The Bringing. These gods represent the core values and aspects of human society.",
				symbol: "fas fa-crown",
			}),
			dwarves_moradins_folk: await db.createPantheon({
				id: "dwarves-moradins-folk",
				name: "Dwarves – Moradin's Folk",
				slug: "dwarves-moradins-folk",
				description: "The traditional pantheon of dwarven civilization, centered around Moradin and his family. These gods represent the core values of dwarven society: craftsmanship, honor, and family.",
				symbol: "fas fa-hammer",
			}),
			elves_the_seldarine_dark_seldarine: await db.createPantheon({
				id: "elves-the-seldarine-dark-seldarine",
				name: "Elves – The Seldarine & Dark Seldarine",
				slug: "elves-the-seldarine-dark-seldarine",
				description: "The traditional pantheon of elven civilization, centered around Corellon Larethian and his family. These gods represent the core values of elven society: art, magic, and nature.",
				symbol: "fas fa-moon",
			}),
			orcs_tribe_of_gruumsh: await db.createPantheon({
				id: "orcs-tribe-of-gruumsh",
				name: "Orcs – Tribe of Gruumsh",
				slug: "orcs-tribe-of-gruumsh",
				description: "The brutal pantheon of orcish deities, focused on conquest, strength, and survival in harsh conditions.",
				symbol: "fas fa-skull",
			}),
			dragons_dragonborn: await db.createPantheon({
				id: "dragons-dragonborn",
				name: "Dragons & Dragonborn",
				slug: "dragons-dragonborn",
				description: "The ancient draconic pantheon, representing the eternal struggle between metallic and chromatic dragons.",
				symbol: "fas fa-dragon",
			}),
			elemental_lords: await db.createPantheon({
				id: "elemental-lords",
				name: "Elemental Lords",
				slug: "elemental-lords",
				description: "The primordial forces of nature, worshiped by genasi, tritons, and those who seek to understand the fundamental elements.",
				symbol: "fas fa-fire",
			}),
			death_shadow_powers: await db.createPantheon({
				id: "death-shadow-powers",
				name: "Death & Shadow Powers",
				slug: "death-shadow-powers",
				description: "The mysterious pantheon of death, fate, and shadow, worshiped by those who deal with the afterlife and hidden knowledge.",
				symbol: "fas fa-skull",
			}),
			halfling_yondallas_children: await db.createPantheon({
				id: "halfling-yondallas-children",
				name: "Halfling – Yondalla's Children",
				slug: "halfling-yondallas-children",
				description: "The warm and protective pantheon of halfling deities, focused on home, family, and community.",
				symbol: "fas fa-home",
			}),
			gnomes_lords_of_the_golden_hills: await db.createPantheon({
				id: "gnomes-lords-of-the-golden-hills",
				name: "Gnomes – Lords of the Golden Hills",
				slug: "gnomes-lords-of-the-golden-hills",
				description: "The playful and protective pantheon of gnome deities, focused on luck, protection, and trickery.",
				symbol: "fas fa-gem",
			}),
			goblins_the_dark_gods: await db.createPantheon({
				id: "goblins-the-dark-gods",
				name: "Goblins – The Dark Gods",
				slug: "goblins-the-dark-gods",
				description: "The brutal and oppressive pantheon of goblinoid deities, focused on war, domination, and goblinoid supremacy.",
				symbol: "fas fa-skull-crossbones",
			}),
			gith: await db.createPantheon({
				id: "gith",
				name: "Gith",
				slug: "gith",
				description: "The unique pantheon of Gith deities, focused on freedom, vengeance, and the eternal struggle against mind flayers.",
				symbol: "fas fa-fist-raised",
			}),
			yuan_ti_serpent_gods: await db.createPantheon({
				id: "yuan-ti-serpent-gods",
				name: "Yuan-Ti / Serpent Gods",
				slug: "yuan-ti-serpent-gods",
				description: "The ancient and mysterious pantheon of serpent deities, focused on ambition, secrecy, and corruption.",
				symbol: "fas fa-staff-snake",
			}),
			sea_powers: await db.createPantheon({
				id: "sea-powers",
				name: "Sea Powers",
				slug: "sea-powers",
				description: "The powerful pantheon of sea deities, worshiped by tritons, sailors, and coastal folk who depend on the ocean for their livelihood.",
				symbol: "fas fa-water",
			}),
		};
		// Deities
		const deity: Record<string, Prisma.DeityGetPayload<{}>> = {
			cyric: await db.createDeity({
				id: "cyric",
				name: "Cyric",
				slug: "cyric",
				title: "Prince of Lies",
				alignment: "Chaotic Evil",
				symbol: "fas fa-sun-plant-wilt",
				alabastriaContext: "Since The Bringing, Cyric’s presence in Alabastria has been subtle but deeply corrosive. His cult thrives in the shadows of major cities, especially where political intrigue, secret wars, and assassinations are common. His influence is most feared in fractured states and among criminal syndicates.",
				description: "The god of lies, deception, madness, and murder. Cyric embodies betrayal, falsehood, and the destructive power of unrestrained ambition, delighting in the downfall of gods and mortals alike.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Trickery", "Death", "Madness", "Intrigue"],
				followers: ["Assassins", "Liars and deceivers", "Mad prophets", "Cultists", "Political conspirators"],
				temples: "Hidden shrines, underground chambers, and abandoned ruins",
				symbols: ["Black sun with a purple core", "Broken halo", "Bloodstained dagger", "Cracked skull"],
				colors: ["Black", "Deep purple", "Blood red", "Ash gray"],
			}),
			tempus: await db.createDeity({
				id: "tempus",
				name: "Tempus",
				slug: "tempus",
				title: "Lord of Battles",
				alignment: "Neutral",
				symbol: "fas fa-pen-fancy",
				alabastriaContext: "Since The Bringing, Tempus has gained many followers among the Huntbound Order and military forces across all continents. His influence is strongest in Skratonia where organized warfare is most common.",
				description: "The god of war, battle, and strategy. Tempus represents the honor and glory of combat, as well as the strategic thinking required for warfare.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["War", "Battle", "Strategy"],
				followers: ["Warriors", "Soldiers", "Strategists", "Huntbound Order"],
				temples: "Fortresses and training grounds",
				symbols: ["Crossed swords", "Burning sword", "War banner", "Shield with lightning bolt", "Sword and shield"],
				colors: ["Crimson red", "Gold", "Silver", "Steel gray"],
			}),
			mystra: await db.createDeity({
				id: "mystra",
				name: "Mystra",
				slug: "mystra",
				title: "Goddess of Magic",
				alignment: "Neutral Good",
				symbol: "fas fa-magic",
				alabastriaContext: "Mystra's influence is strongest in Kuriguer where magical anomalies and research institutions are concentrated. Her followers have been instrumental in understanding the magical properties of Alabastria.",
				description: "The goddess of magic and the Weave. She governs all arcane magic and is the patron of wizards and sorcerers.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Magic", "The Weave", "Arcane Knowledge"],
				followers: ["Wizards", "Sorcerers", "Arcane Researchers", "Magic Scholars"],
				temples: "Libraries and magical academies",
				symbols: ["Seven-pointed star", "Weave pattern", "Mystra's symbol", "Arcane circle", "Magic staff"],
				colors: ["Deep blue", "Silver", "White", "Purple"],
			}),
			lathander: await db.createDeity({
				id: "lathander",
				name: "Lathander",
				slug: "lathander",
				title: "Morninglord",
				alignment: "Lawful Good",
				symbol: "fas fa-sun",
				alabastriaContext: "Lathander's influence is strongest in Skratonia where his temples serve as centers of healing and renewal. His followers are often found among healers and those seeking new beginnings.",
				description: "The god of renewal, dawn, and hope. He represents new beginnings, healing, and the triumph of light over darkness.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Renewal", "Dawn", "Hope", "Spring"],
				followers: ["Healers", "Paladins", "Farmers", "Those Seeking Renewal"],
				temples: "Healing centers and agricultural communities",
				symbols: ["Rising sun", "Golden disk", "Dawn's light", "Spring flower", "Sunburst"],
				colors: ["Gold", "Yellow", "White", "Light blue"],
			}),
			selune: await db.createDeity({
				id: "selune",
				name: "Selûne",
				slug: "selune",
				title: "Our Lady of Silver",
				alignment: "Chaotic Good",
				symbol: "fas fa-moon",
				alabastriaContext: "Selûne's influence is strongest among coastal communities and travelers. Her followers are often found among sailors, rangers, and those who explore the unknown.",
				description: "The goddess of the moon, navigation, and wanderers. She guides travelers and protects those who journey under the stars.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Moon", "Navigation", "Stars", "Wanderers"],
				followers: ["Sailors", "Rangers", "Travelers", "Explorers"],
				temples: "Lighthouses and coastal shrines",
				symbols: ["Crescent moon", "Silver disk", "Star cluster", "Compass rose", "Moon and stars"],
				colors: ["Silver", "White", "Light blue", "Pale gold"],
			}),
			shar: await db.createDeity({
				id: "shar",
				name: "Shar",
				slug: "shar",
				title: "Mistress of the Night",
				alignment: "Neutral Evil",
				symbol: "fas fa-eye-slash",
				alabastriaContext: "Shar's influence is strongest in the darker corners of society and among those who deal in secrets. Her followers are often found among rogues, spies, and those who have lost much.",
				description: "The goddess of darkness, secrets, and loss. She represents the hidden aspects of existence and the power of shadows.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Darkness", "Secrets", "Loss", "Forgetting"],
				followers: ["Rogues", "Spies", "Those Who Have Lost", "Shadow Workers"],
				temples: "Hidden shrines and secret meeting places",
				symbols: ["Black disk", "Shadow veil", "Dark moon", "Mystery symbol", "Eclipse"],
				colors: ["Black", "Dark purple", "Deep blue", "Silver"],
			}),
			oghma: await db.createDeity({
				id: "oghma",
				name: "Oghma",
				slug: "oghma",
				title: "The Binder of What Is Known",
				alignment: "Neutral",
				symbol: "fas fa-book-open",
				alabastriaContext: "Since The Bringing, Oghma has become a stabilizing force in Alabastria, revered by scholars seeking to preserve pre-Bringing knowledge and to understand the new world. His temples often serve as libraries, universities, and neutral grounds for discourse across cultures.",
				description: "The god of knowledge, inspiration, and invention. Oghma embodies the preservation and sharing of all information, believing that truth and creativity should flow freely to enlighten the world.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Knowledge", "Inspiration", "Lore", "Communication"],
				followers: ["Scholars", "Bards", "Historians", "Scribes", "Inventors"],
				temples: "Libraries, archives, universities, and scriptoria",
				symbols: ["Open book with a blank page", "Quill crossed with a scroll", "Knot of knowledge", "Seven-pointed star of lore"],
				colors: ["White", "Sky blue", "Gold", "Soft gray"],
			}),
			deneir: await db.createDeity({
				id: "deneir",
				name: "Deneir",
				slug: "deneir",
				title: "The First Scribe",
				alignment: "Neutral Good",
				symbol: "fas fa-feather-pointed",
				alabastriaContext: "Since The Bringing, Deneir’s followers have worked closely with Oghman temples to transcribe fading memories and endangered texts. In Alabastria, his influence is strongest wherever laws, histories, and magical formulae must be carefully recorded and protected.",
				description: "The god of writing, glyphs, and recorded knowledge. Deneir is the patron of scribes and chroniclers, devoted to the accurate preservation of truth through the written word.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Knowledge", "Writing", "Glyphs", "Literature"],
				followers: ["Scribes", "Librarians", "Archivists", "Chroniclers", "Rune scholars"],
				temples: "Scriptoria, record halls, rune libraries, and monasteries",
				symbols: ["Lit candle above an open book", "Runed quill", "Glyph-inscribed scroll", "Eye within a page"],
				colors: ["Ivory", "Ink black", "Gold", "Deep blue"],
			}),
			mask: await db.createDeity({
				id: "mask",
				name: "Mask",
				slug: "mask",
				title: "The Lord of Shadows",
				alignment: "Chaotic Neutral",
				symbol: "fas fa-masks-theater",
				alabastriaContext: "Since The Bringing, Mask has flourished in Alabastria’s expanding cities and trade hubs. His worship is strongest among thieves’ guilds, smugglers, and information brokers, where secrecy and misdirection are essential to survival.",
				description: "The god of shadows, thieves, and intrigue. Mask represents stealth, cleverness, and the art of taking what is forbidden, valuing wit and subtlety over brute force.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Trickery", "Shadows", "Thievery", "Intrigue"],
				followers: ["Thieves", "Rogues", "Spies", "Smugglers", "Information brokers"],
				temples: "Hidden guild halls, back-alley shrines, and shadowed catacombs",
				symbols: ["Black mask", "Shadowed dagger", "Coin with a hole", "Cloaked figure"],
				colors: ["Black", "Midnight blue", "Silver", "Smoke gray"],
			}),
			helm: await db.createDeity({
				id: "helm",
				name: "Helm",
				slug: "helm",
				title: "The Vigilant One",
				alignment: "Lawful Neutral",
				symbol: "fas fa-shield-halved",
				alabastriaContext: "Since The Bringing, Helm has been revered by city guards, watchmen, and defenders of the realm in Alabastria. His temples often serve as barracks, training halls, and places of sanctuary during times of unrest.",
				description: "The god of guardians, protection, and vigilance. Helm embodies duty, steadfastness, and the unwavering defense of law and order against chaos and threats.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Protection", "Guardianship", "Duty", "Law"],
				followers: ["Guards", "Soldiers", "Watchmen", "Paladins", "Lawful magistrates"],
				temples: "Fortified temples, watchtowers, barracks, and city walls",
				symbols: ["Closed helm", "Shield with an eye", "Watchtower", "Gauntleted fist"],
				colors: ["Steel gray", "Silver", "White", "Dark blue"],
			}),
			tyr: await db.createDeity({
				id: "tyr",
				name: "Tyr",
				slug: "tyr",
				title: "The Even-Handed",
				alignment: "Lawful Good",
				symbol: "fas fa-scale-balanced",
				alabastriaContext: "Since The Bringing, Tyr has been a guiding force for judges, magistrates, and paladins in Alabastria. His teachings underpin many of the legal systems in cities and kingdoms, emphasizing fairness, accountability, and moral responsibility.",
				description: "The god of justice, law, and righteous duty. Tyr embodies fairness, honor, and the pursuit of justice, ensuring that the innocent are protected and the guilty are held accountable.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Justice", "Law", "Honor", "Duty"],
				followers: ["Judges", "Paladins", "Lawyers", "City officials", "Soldiers upholding justice"],
				temples: "Courthouses, fortified temples, and halls of justice",
				symbols: ["Balanced scales", "Sword over scales", "Blindfolded hand holding scales", "Gauntlet holding a sword"],
				colors: ["White", "Gold", "Silver", "Crimson"],
			}),
			chauntea: await db.createDeity({
				id: "chauntea",
				name: "Chauntea",
				slug: "chauntea",
				title: "The Great Mother",
				alignment: "Neutral Good",
				symbol: "fas fa-seedling",
				alabastriaContext: "Since The Bringing, Chauntea has been revered by farmers, gardeners, and rural communities across Alabastria. Her temples often serve as centers of agricultural knowledge, seasonal festivals, and communal guidance on cultivation.",
				description: "The goddess of agriculture, fertility, and the nurturing of life. Chauntea embodies the growth of crops, the cycles of nature, and the sustenance of communities through careful stewardship of the land.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Agriculture", "Harvest", "Nature", "Life"],
				followers: ["Farmers", "Gardeners", "Rangers", "Druids", "Herbalists"],
				temples: "Granaries, farm shrines, garden temples, and rural sanctuaries",
				symbols: ["Sheaf of wheat", "Blooming flower", "Cornucopia", "Tree with deep roots"],
				colors: ["Green", "Earth brown", "Golden yellow", "Sky blue"],
			}),
			ilmater: await db.createDeity({
				id: "ilmater",
				name: "Ilmater",
				slug: "ilmater",
				title: "The Crying God",
				alignment: "Lawful Good",
				symbol: "fas fa-hand-holding-heart",
				alabastriaContext: "Since The Bringing, Ilmater’s worship has grown among refugees, the sick, and those affected by war and disaster in Alabastria. His temples often double as hospitals, orphanages, and shelters, serving as beacons of mercy and care.",
				description: "The god of endurance, suffering, and compassion. Ilmater embodies patience, selflessness, and the relief of pain, inspiring his followers to comfort the oppressed and aid those in distress.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Endurance", "Suffering", "Compassion", "Healing"],
				followers: ["Healers", "Clerics", "Monks", "Caregivers", "Refugees and the oppressed"],
				temples: "Hospitals, shelters, monasteries, and quiet sanctuaries",
				symbols: ["Pair of hands bound with a red cord", "Weeping face", "Broken chain", "Heart encircled by flame"],
				colors: ["White", "Crimson red", "Pale blue", "Silver"],
			}),
			talona: await db.createDeity({
				id: "talona",
				name: "Talona",
				slug: "talona",
				title: "Lady of Poison",
				alignment: "Chaotic Evil",
				symbol: "fas fa-skull-crossbones",
				alabastriaContext: "Since The Bringing, Talona’s worship has surged during times of plague, famine, and environmental collapse. Her cults are strongest in overcrowded cities, war-torn regions, and areas struck by unexplained illness. Many secretly placate her rather than openly worship her, hoping to avert her attention.",
				description: "The goddess of poison, disease, and decay. Talona embodies silent death and lingering suffering, reveling in plagues, toxins, and the slow corruption of body and land.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Poison", "Disease", "Decay", "Suffering"],
				followers: ["Poisoners", "Plague cultists", "Assassins", "Alchemists", "Desperate commoners"],
				temples: "Hidden shrines, plague pits, ruined hospitals, and alchemical dens",
				symbols: ["Three teardrops falling from a skull", "Poisoned chalice", "Green-black serpent", "Withered flower"],
				colors: ["Sickly green", "Black", "Venom yellow", "Dark brown"],
			}),
			tymora: await db.createDeity({
				id: "tymora",
				name: "Tymora",
				slug: "tymora",
				title: "Lady Luck",
				alignment: "Chaotic Good",
				symbol: "fas fa-dice",
				alabastriaContext: "Tymora's influence is strongest among adventurers, gamblers, and those who take risks. Her followers are often found among the Huntbound Order and other adventuring groups.",
				description: "The goddess of good fortune and luck. She blesses adventurers and those who take risks for noble causes.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Good Fortune", "Luck", "Adventure", "Gambling"],
				followers: ["Adventurers", "Gamblers", "Risk Takers", "Huntbound Order"],
				temples: "Taverns and gambling halls",
				symbols: ["Gold coin", "Lucky clover", "Dice", "Fortune wheel", "Four-leaf clover"],
				colors: ["Gold", "Green", "White", "Silver"],
			}),
			beshaba: await db.createDeity({
				id: "beshaba",
				name: "Beshaba",
				slug: "beshaba",
				title: "Lady Doom",
				alignment: "Chaotic Evil",
				symbol: "fas fa-skull",
				alabastriaContext: "Beshaba's influence is strongest among those who have suffered great misfortune or who deal in curses and hexes. Her followers are often found among those who have been wronged.",
				description: "The goddess of misfortune and bad luck. She represents the darker side of chance and the consequences of poor decisions.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Misfortune", "Bad Luck", "Accidents", "Curses"],
				followers: ["Those Who Have Suffered", "Cursed Individuals", "Hex Workers", "Victims of Misfortune"],
				temples: "Cursed places and accident sites",
				symbols: ["skull"],
				colors: ["Unknown color"],
			}),
			kelemvor: await db.createDeity({
				id: "kelemvor",
				name: "Kelemvor",
				slug: "kelemvor",
				title: "Lord of the Dead",
				alignment: "Lawful Neutral",
				symbol: "fas fa-balance-scale",
				alabastriaContext: "Kelemvor's influence is strongest among those who deal with death and the dead. His followers are often found among clerics, undertakers, and those who seek justice.",
				description: "The god of death and judgment. He ensures that the dead are properly judged and that death comes to all in its proper time.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Death", "Judgment", "The Dead", "Justice"],
				followers: ["Clerics", "Undertakers", "Judges", "Those Seeking Justice"],
				temples: "Cemeteries and courthouses",
				symbols: ["Skeleton", "Scale", "Sword", "Death symbol", "Scales of justice"],
				colors: ["Black", "White", "Silver", "Gray"],
			}),
			bane: await db.createDeity({
				id: "bane",
				name: "Bane",
				slug: "bane",
				title: "The Black Hand",
				alignment: "Lawful Evil",
				symbol: "fas fa-fist-raised",
				alabastriaContext: "Bane's influence is strongest among tyrants, conquerors, and those who seek to control others through fear. His followers are often found among the ruling classes and military leaders.",
				description: "The god of tyranny and conquest. He represents the power of fear and oppression to control others.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Tyranny", "Conquest", "Fear", "Oppression"],
				followers: ["Tyrants", "Conquerors", "Military Leaders", "Those Seeking Power"],
				temples: "Fortresses and military bases",
				symbols: ["Clenched fist", "Black gauntlet", "Tyranny symbol", "Iron crown", "Fist of Bane"],
				colors: ["Black", "Red", "Dark gray", "Crimson"],
			}),
			myrkul: await db.createDeity({
				id: "myrkul",
				name: "Myrkul",
				slug: "myrkul",
				title: "Lord of Bones",
				alignment: "Neutral Evil",
				symbol: "fas fa-skull-crossbones",
				alabastriaContext: "Myrkul's influence is strongest among necromancers, undead, and those who deal with death magic. His followers are often found among the undead and those who seek to cheat death.",
				description: "The god of undeath and necromancy. He represents the power of death and the undead.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Undeath", "Necromancy", "The Undead", "Decay"],
				followers: ["Necromancers", "Undead", "Those Seeking Immortality", "Death Magic Users"],
				temples: "Necropolises and undead lairs",
				symbols: ["skull crossbones"],
				colors: ["Unknown color"],
			}),
			jergal: await db.createDeity({
				id: "jergal",
				name: "Jergal",
				slug: "jergal",
				title: "Scribe of the Dead",
				alignment: "True Neutral",
				symbol: "fas fa-scroll",
				alabastriaContext: "Jergal's influence is strongest among scribes, historians, and those who deal with records and knowledge. His followers are often found among scholars and record keepers.",
				description: "The god of records of the dead and fate. He maintains the records of all who have died and ensures that fate is properly recorded.",
				pantheonId: "human-centric-faerun-forgotten-realms",
				domains: ["Records of the Dead", "Fate", "History", "Knowledge"],
				followers: ["Scribes", "Historians", "Record Keepers", "Scholars"],
				temples: "Libraries and record halls",
				symbols: ["scroll"],
				colors: ["Unknown color"],
			}),
			moradin: await db.createDeity({
				id: "moradin",
				name: "Moradin",
				slug: "moradin",
				title: "Soul Forger",
				alignment: "Lawful Good",
				symbol: "fas fa-hammer",
				alabastriaContext: "Moradin's influence is strongest among dwarven communities and craftsmen. His followers are often found among blacksmiths, miners, and those who work with metal.",
				description: "The chief god of the dwarves and the creator of the dwarven race. He represents craftsmanship, creation, and the forge.",
				pantheonId: "dwarves-moradins-folk",
				domains: ["Creation", "Forge", "Craftsmanship", "Dwarves"],
				followers: ["Dwarves", "Blacksmiths", "Miners", "Craftsmen"],
				temples: "Forges and workshops",
				symbols: ["Hammer and anvil", "Mountain", "Forge", "Dwarven rune", "Hammer of Moradin"],
				colors: ["Brown", "Gold", "Orange", "Gray"],
			}),
			berronar_truesilver: await db.createDeity({
				id: "berronar-truesilver",
				name: "Berronar Truesilver",
				slug: "berronar-truesilver",
				title: "The Shield Mother",
				alignment: "Lawful Good",
				symbol: "fas fa-shield-alt",
				alabastriaContext: "Berronar's influence is strongest among dwarven families and those who seek to protect their homes. Her followers are often found among mothers, protectors, and those who maintain homes.",
				description: "The goddess of home, hearth, and family. She represents the protective and nurturing aspects of dwarven society.",
				pantheonId: "dwarves-moradins-folk",
				domains: ["Home", "Hearth", "Family", "Protection"],
				followers: ["Dwarven Mothers", "Protectors", "Home Keepers", "Family Members"],
				temples: "Homes and family shrines",
				symbols: ["Shield", "Hammer", "Dwarven symbol", "Protection symbol", "Shield of truth"],
				colors: ["Silver", "Blue", "White", "Gold"],
			}),
			clangeddin_silverbeard: await db.createDeity({
				id: "clangeddin-silverbeard",
				name: "Clangeddin Silverbeard",
				slug: "clangeddin-silverbeard",
				title: "The Battle Lord",
				alignment: "Lawful Good",
				symbol: "fas fa-tents",
				alabastriaContext: "Clangeddin's influence is strongest among dwarven warriors and those who fight for honor. His followers are often found among soldiers, paladins, and those who seek justice through combat.",
				description: "The god of battle and war. He represents the honor and courage of dwarven warriors.",
				pantheonId: "dwarves-moradins-folk",
				domains: ["Battle", "War", "Honor", "Courage"],
				followers: ["Dwarven Warriors", "Soldiers", "Paladins", "Honor Seekers"],
				temples: "Barracks and training grounds",
				symbols: ["War camp", "Battle axe", "Dwarven symbol", "Shield", "Axe of war"],
				colors: ["Silver", "Blue", "White", "Gold"],
			}),
			dugmaren_brightmantle: await db.createDeity({
				id: "dugmaren-brightmantle",
				name: "Dugmaren Brightmantle",
				slug: "dugmaren-brightmantle",
				title: "The Gleam in the Eye",
				alignment: "Chaotic Good",
				symbol: "fas fa-lightbulb",
				alabastriaContext: "Dugmaren's influence is strongest among dwarven inventors and those who seek new knowledge. His followers are often found among engineers, researchers, and those who create new things.",
				description: "The god of discovery and invention. He represents the innovative and curious aspects of dwarven society.",
				pantheonId: "dwarves-moradins-folk",
				domains: ["Discovery", "Invention", "Innovation", "Knowledge"],
				followers: ["Dwarven Inventors", "Engineers", "Researchers", "Innovators"],
				temples: "Libraries and workshops",
				symbols: ["Light bulb", "Book", "Gnome symbol", "Innovation symbol", "Bright mantle"],
				colors: ["Gold", "Blue", "White", "Silver"],
			}),
			vergadain: await db.createDeity({
				id: "vergadain",
				name: "Vergadain",
				slug: "vergadain",
				title: "The Merchant King",
				alignment: "Neutral",
				symbol: "fas fa-coins",
				alabastriaContext: "Vergadain's influence is strongest among dwarven merchants and those who deal in trade. His followers are often found among traders, merchants, and those who seek wealth.",
				description: "The god of wealth and trade. He represents the commercial and entrepreneurial aspects of dwarven society.",
				pantheonId: "dwarves-moradins-folk",
				domains: ["Wealth", "Luck", "Trade", "Commerce"],
				followers: ["Dwarven Merchants", "Traders", "Wealth Seekers", "Entrepreneurs"],
				temples: "Markets and trading posts",
				symbols: ["coins"],
				colors: ["Unknown color"],
			}),
			corellon_larethian: await db.createDeity({
				id: "corellon-larethian",
				name: "Corellon Larethian",
				slug: "corellon-larethian",
				title: "Creator of the Elves",
				alignment: "Chaotic Good",
				symbol: "fas fa-palette",
				alabastriaContext: "Corellon's influence is strongest among elven communities and artists. His followers are often found among bards, wizards, and those who create beautiful things.",
				description: "The chief god of the elves and the creator of the elven race. He represents art, magic, and the creative spirit.",
				pantheonId: "elves-the-seldarine-dark-seldarine",
				domains: ["Elves", "Art", "Magic", "Music"],
				followers: ["Elves", "Artists", "Bards", "Wizards", "Creators"],
				temples: "Art galleries and magical academies",
				symbols: ["Silver crescent", "Artistic brush", "Musical note", "Elven rune", "Crescent moon"],
				colors: ["Silver", "Blue", "White", "Gold"],
			}),
			sehanine_moonbow: await db.createDeity({
				id: "sehanine-moonbow",
				name: "Sehanine Moonbow",
				slug: "sehanine-moonbow",
				title: "Goddess of Dreams",
				alignment: "Chaotic Good",
				symbol: "fas fa-moon",
				alabastriaContext: "Sehanine's influence is strongest among elven rangers and those who journey. Her followers are often found among rangers, druids, and those who explore the unknown.",
				description: "The goddess of dreams, journeys, and mysteries. She represents the elven connection to the ethereal and the unknown.",
				pantheonId: "elves-the-seldarine-dark-seldarine",
				domains: ["Dreams", "Journeys", "Death", "Mysteries"],
				followers: ["Elven Rangers", "Druids", "Explorers", "Dreamers"],
				temples: "Forest shrines and journey markers",
				symbols: ["moon"],
				colors: ["Silver", "White"],
			}),
			hanali_celanil: await db.createDeity({
				id: "hanali-celanil",
				name: "Hanali Celanil",
				slug: "hanali-celanil",
				title: "Goddess of Love",
				alignment: "Chaotic Good",
				symbol: "fas fa-heart",
				alabastriaContext: "Hanali's influence is strongest among elven communities and those who appreciate beauty. Her followers are often found among artists, lovers, and those who seek beauty.",
				description: "The goddess of love, beauty, and romance. She represents the elven appreciation for beauty and love.",
				pantheonId: "elves-the-seldarine-dark-seldarine",
				domains: ["Love", "Beauty", "Romance", "Art"],
				followers: ["Elven Artists", "Lovers", "Beauty Seekers", "Romantics"],
				temples: "Gardens and art galleries",
				symbols: ["heart"],
				colors: ["Gold", "Pink"],
			}),
			labelas_enoreth: await db.createDeity({
				id: "labelas-enoreth",
				name: "Labelas Enoreth",
				slug: "labelas-enoreth",
				title: "God of Time",
				alignment: "Neutral Good",
				symbol: "fas fa-clock",
				alabastriaContext: "Labelas's influence is strongest among elven scholars and those who study history. His followers are often found among historians, scholars, and those who seek wisdom.",
				description: "The god of time, wisdom, and longevity. He represents the elven connection to time and memory.",
				pantheonId: "elves-the-seldarine-dark-seldarine",
				domains: ["Time", "Wisdom", "Longevity", "Memory"],
				followers: ["Elven Scholars", "Historians", "Wisdom Seekers", "Memory Keepers"],
				temples: "Libraries and historical sites",
				symbols: ["clock"],
				colors: ["Gold", "Silver"],
			}),
			solonor_thelandira: await db.createDeity({
				id: "solonor-thelandira",
				name: "Solonor Thelandira",
				slug: "solonor-thelandira",
				title: "God of Archery",
				alignment: "Chaotic Good",
				symbol: "fas fa-arrows-up-to-line",
				alabastriaContext: "Solonor's influence is strongest among elven rangers and hunters. His followers are often found among rangers, hunters, and those who live in the wilderness.",
				description: "The god of archery, wilderness, and hunting. He represents the elven connection to nature and the hunt.",
				pantheonId: "elves-the-seldarine-dark-seldarine",
				domains: ["Archery", "Wilderness", "Hunting", "Nature"],
				followers: ["Elven Rangers", "Hunters", "Wilderness Dwellers", "Archers"],
				temples: "Forest shrines and hunting lodges",
				symbols: ["bow arrow"],
				colors: ["Green", "Brown"],
			}),
			lolth: await db.createDeity({
				id: "lolth",
				name: "Lolth",
				slug: "lolth",
				title: "Spider Queen",
				alignment: "Chaotic Evil",
				symbol: "fas fa-spider",
				alabastriaContext: "Lolth's influence is strongest among dark elves and those who seek power through deception. Her followers are often found among drow, rogues, and those who deal in lies.",
				description: "The goddess of spiders, lies, and domination. She represents the dark side of elven society and the power of deception.",
				pantheonId: "elves-the-seldarine-dark-seldarine",
				domains: ["Spiders", "Lies", "Domination", "Darkness"],
				followers: ["Drow", "Rogues", "Deceivers", "Power Seekers"],
				temples: "Underground shrines and dark places",
				symbols: ["Spider", "Web", "Drow symbol", "Eight-pointed star", "Spider web"],
				colors: ["Black", "Purple", "Silver", "Red"],
			}),
			vhaeraun: await db.createDeity({
				id: "vhaeraun",
				name: "Vhaeraun",
				slug: "vhaeraun",
				title: "God of Shadow",
				alignment: "Chaotic Evil",
				symbol: "fas fa-mask",
				alabastriaContext: "Vhaeraun's influence is strongest among dark elves and those who rebel against authority. His followers are often found among rogues, rebels, and those who deal in shadows.",
				description: "The god of shadow, rebellion, and thievery. He represents the rebellious and thieving aspects of dark elven society.",
				pantheonId: "elves-the-seldarine-dark-seldarine",
				domains: ["Shadow", "Rebellion", "Thievery", "Secrets"],
				followers: ["Dark Elves", "Rogues", "Rebels", "Thieves"],
				temples: "Hidden shrines and secret meeting places",
				symbols: ["mask"],
				colors: ["Red", "Black"],
			}),
			eilistraee: await db.createDeity({
				id: "eilistraee",
				name: "Eilistraee",
				slug: "eilistraee",
				title: "Goddess of Song",
				alignment: "Chaotic Good",
				symbol: "fas fa-music",
				alabastriaContext: "Eilistraee's influence is strongest among dark elves who seek redemption and those who appreciate music. Her followers are often found among bards, dancers, and those who seek redemption.",
				description: "The goddess of song, redemption, and dance. She represents the hope for redemption among dark elves.",
				pantheonId: "elves-the-seldarine-dark-seldarine",
				domains: ["Song", "Redemption", "Dance", "Beauty"],
				followers: ["Redeemed Dark Elves", "Bards", "Dancers", "Redemption Seekers"],
				temples: "Music halls and dance studios",
				symbols: ["music"],
				colors: ["Gold", "Silver"],
			}),
			gruumsh_one_eye: await db.createDeity({
				id: "gruumsh-one-eye",
				name: "Gruumsh One-Eye",
				slug: "gruumsh-one-eye",
				title: "The One-Eyed God",
				alignment: "Chaotic Evil",
				symbol: "fas fa-eye-slash",
				alabastriaContext: "Since The Bringing, Gruumsh has found new followers among the orc tribes scattered across Alabastria's harsh lands, particularly in the Blood Badlands and other unforgiving territories.",
				description: "undefined",
				pantheonId: "orcs-tribe-of-gruumsh",
				domains: ["War", "Destruction", "Conquest"],
				followers: ["Orcs", "Barbarians", "Conquerors"],
				temples: "War Camps",
				symbols: ["eye slash"],
				colors: ["Red", "Black"],
			}),
			luthic: await db.createDeity({
				id: "luthic",
				name: "Luthic",
				slug: "luthic",
				title: "The Cave Mother",
				alignment: "Lawful Evil",
				symbol: "fas fa-mountain",
				alabastriaContext: "Luthic's influence has been crucial for orc survival in Alabastria's harsh environments, particularly in the Blood Badlands where her followers have established hidden cave settlements.",
				description: "undefined",
				pantheonId: "orcs-tribe-of-gruumsh",
				domains: ["Fertility", "Healing", "Caves"],
				followers: ["Orc Mothers", "Healers", "Cave Dwellers"],
				temples: "Cave Sanctuaries",
				symbols: ["mountain"],
				colors: ["Brown", "Green"],
			}),
			ilneval: await db.createDeity({
				id: "ilneval",
				name: "Ilneval",
				slug: "ilneval",
				title: "The War Chief",
				alignment: "Lawful Evil",
				symbol: "fas fa-chess",
				alabastriaContext: "Ilneval's strategic wisdom has been invaluable for orc survival in Alabastria, helping them adapt their warfare tactics to the new world's challenges.",
				description: "undefined",
				pantheonId: "orcs-tribe-of-gruumsh",
				domains: ["War", "Strategy", "Leadership"],
				followers: ["Orc Generals", "Tacticians", "War Leaders"],
				temples: "War Academies",
				symbols: ["chess"],
				colors: ["Red", "Silver"],
			}),
			bahgtru: await db.createDeity({
				id: "bahgtru",
				name: "Bahgtru",
				slug: "bahgtru",
				title: "The Brute",
				alignment: "Chaotic Evil",
				symbol: "fas fa-fist-raised",
				alabastriaContext: "Bahgtru's followers have become known for their incredible physical strength and unwavering loyalty, making them valuable allies and fearsome enemies in Alabastria.",
				description: "undefined",
				pantheonId: "orcs-tribe-of-gruumsh",
				domains: ["Strength", "Loyalty", "Brute Force"],
				followers: ["Orc Warriors", "Berserkers", "Bodyguards"],
				temples: "Training Grounds",
				symbols: ["fist raised"],
				colors: ["Brown", "Red"],
			}),
			shargaas: await db.createDeity({
				id: "shargaas",
				name: "Shargaas",
				slug: "shargaas",
				title: "The Night Stalker",
				alignment: "Chaotic Evil",
				symbol: "fas fa-mask",
				alabastriaContext: "Shargaas's followers have found new opportunities in Alabastria's complex political landscape, serving as spies, assassins, and information brokers.",
				description: "undefined",
				pantheonId: "orcs-tribe-of-gruumsh",
				domains: ["Darkness", "Stealth", "Thievery"],
				followers: ["Assassins", "Thieves", "Spies"],
				temples: "Hidden Shrines",
				symbols: ["mask"],
				colors: ["Black", "Gray"],
			}),
			bahamut: await db.createDeity({
				id: "bahamut",
				name: "Bahamut",
				slug: "bahamut",
				title: "The Platinum Dragon",
				alignment: "Lawful Good",
				symbol: "fas fa-shield-alt",
				alabastriaContext: "Bahamut's influence has been crucial for dragonborn integration into Alabastrian society, providing them with a moral compass and sense of purpose.",
				description: "undefined",
				pantheonId: "dragons-dragonborn",
				domains: ["Justice", "Protection", "Nobility"],
				followers: ["Dragonborn", "Paladins", "Noble Warriors"],
				temples: "Noble Temples",
				symbols: ["Dragon head", "Platinum scale", "Divine symbol", "Wing", "Platinum dragon"],
				colors: ["Platinum", "White", "Gold", "Silver"],
			}),
			tiamat: await db.createDeity({
				id: "tiamat",
				name: "Tiamat",
				slug: "tiamat",
				title: "The Chromatic Dragon",
				alignment: "Chaotic Evil",
				symbol: "fas fa-crown",
				alabastriaContext: "Tiamat's influence has been a constant threat in Alabastria, with her followers seeking power, wealth, and domination over others.",
				description: "undefined",
				pantheonId: "dragons-dragonborn",
				domains: ["Greed", "Tyranny", "Vengeance"],
				followers: ["Evil Dragonborn", "Tyrants", "Greedy Merchants"],
				temples: "Dark Fortresses",
				symbols: ["Five-headed dragon", "Chromatic scale", "Evil symbol", "Claw", "Five-headed dragon"],
				colors: ["Red", "Blue", "Green", "Black", "White"],
			}),
			akadi: await db.createDeity({
				id: "akadi",
				name: "Akadi",
				slug: "akadi",
				title: "The Queen of Air",
				alignment: "Chaotic Neutral",
				symbol: "fas fa-wind",
				alabastriaContext: "Akadi's influence has been crucial for air genasi and sailors in Alabastria, helping them navigate the winds and adapt to change.",
				description: "undefined",
				pantheonId: "elemental-lords",
				domains: ["Air", "Movement", "Change"],
				followers: ["Air Genasi", "Sailors", "Wanderers"],
				temples: "High Towers",
				symbols: ["wind"],
				colors: ["White", "Blue"],
			}),
			grumbar: await db.createDeity({
				id: "grumbar",
				name: "Grumbar",
				slug: "grumbar",
				title: "The Earth Lord",
				alignment: "Lawful Neutral",
				symbol: "fas fa-mountain",
				alabastriaContext: "Grumbar's influence has been essential for earth genasi and miners in Alabastria, helping them work with the land and extract its resources.",
				description: "undefined",
				pantheonId: "elemental-lords",
				domains: ["Earth", "Strength", "Endurance"],
				followers: ["Earth Genasi", "Miners", "Farmers"],
				temples: "Underground Shrines",
				symbols: ["mountain"],
				colors: ["Brown", "Gray"],
			}),
			kossuth: await db.createDeity({
				id: "kossuth",
				name: "Kossuth",
				slug: "kossuth",
				title: "The Fire Lord",
				alignment: "Chaotic Neutral",
				symbol: "fas fa-fire",
				alabastriaContext: "Kossuth's influence has been crucial for fire genasi and blacksmiths in Alabastria, providing them with the power to forge weapons and tools.",
				description: "undefined",
				pantheonId: "elemental-lords",
				domains: ["Fire", "Destruction", "Renewal"],
				followers: ["Fire Genasi", "Blacksmiths", "Warriors"],
				temples: "Forge Temples",
				symbols: ["fire"],
				colors: ["Red", "Orange"],
			}),
			istishia: await db.createDeity({
				id: "istishia",
				name: "Istishia",
				slug: "istishia",
				title: "The Water Lord",
				alignment: "True Neutral",
				symbol: "fas fa-water",
				alabastriaContext: "Istishia's influence has been essential for water genasi and fishermen in Alabastria, helping them work with rivers and heal the sick.",
				description: "undefined",
				pantheonId: "elemental-lords",
				domains: ["Water", "Adaptability", "Rivers"],
				followers: ["Water Genasi", "Fishermen", "Healers"],
				temples: "Riverside Shrines",
				symbols: ["water"],
				colors: ["Blue", "White"],
			}),
			the_raven_queen: await db.createDeity({
				id: "the-raven-queen",
				name: "The Raven Queen",
				slug: "the-raven-queen",
				title: "Goddess of Fate and Death",
				alignment: "Lawful Neutral",
				symbol: "fas fa-crow",
				alabastriaContext: "The Raven Queen's influence has been crucial for those dealing with death and memory in Alabastria, particularly among the Shadar-kai and those who mourn the lost.",
				description: "undefined",
				pantheonId: "death-shadow-powers",
				domains: ["Death", "Fate", "Memory"],
				followers: ["Shadar-kai", "Mourners", "Necromancers"],
				temples: "Shadow Sanctuaries",
				symbols: ["Raven", "Crown", "Scythe", "Fate symbol", "Raven's crown"],
				colors: ["Black", "Silver", "White", "Purple"],
			}),
			asmodeus: await db.createDeity({
				id: "asmodeus",
				name: "Asmodeus",
				slug: "asmodeus",
				title: "Lord of the Nine Hells",
				alignment: "Lawful Evil",
				symbol: "fas fa-crown",
				alabastriaContext: "Asmodeus's influence in Alabastria has been subtle but persistent, with his followers often working through legal systems and contracts to gain power.",
				description: "undefined",
				pantheonId: "death-shadow-powers",
				domains: ["Tyranny", "Infernal", "Contracts"],
				followers: ["Devils", "Tyrants", "Contract Lawyers"],
				temples: "Infernal Fortresses",
				symbols: ["Devil's head", "Infernal symbol", "Crown", "Flame", "Crown of Asmodeus"],
				colors: ["Red", "Black", "Gold", "Crimson"],
			}),
			yondalla: await db.createDeity({
				id: "yondalla",
				name: "Yondalla",
				slug: "yondalla",
				title: "The Protector and Provider",
				alignment: "Lawful Good",
				symbol: "fas fa-shield-alt",
				alabastriaContext: "Yondalla's influence has been essential for halfling communities in Alabastria, providing them with protection and prosperity in their new homes.",
				description: "undefined",
				pantheonId: "halfling-yondallas-children",
				domains: ["Fertility", "Protection", "Halflings"],
				followers: ["Halflings", "Farmers", "Families"],
				temples: "Home Shrines",
				symbols: ["Shield", "Home", "Halfling symbol", "Cornucopia", "Shield of protection"],
				colors: ["Green", "Brown", "Gold", "White"],
			}),
			arvoreen: await db.createDeity({
				id: "arvoreen",
				name: "Arvoreen",
				slug: "arvoreen",
				title: "The Defender",
				alignment: "Lawful Good",
				symbol: "fas fa-shield",
				alabastriaContext: "Arvoreen's influence has been crucial for halfling defense in Alabastria, teaching them to protect their communities from threats.",
				description: "undefined",
				pantheonId: "halfling-yondallas-children",
				domains: ["Defense", "Vigilance", "Guardianship"],
				followers: ["Halfling Guards", "Defenders", "Vigilantes"],
				temples: "Guard Posts",
				symbols: ["Shield", "Sword", "Halfling symbol", "Defense symbol", "Shield of Arvoreen"],
				colors: ["Silver", "Blue", "White", "Gold"],
			}),
			cyrrollalee: await db.createDeity({
				id: "cyrrollalee",
				name: "Cyrrollalee",
				slug: "cyrrollalee",
				title: "The Hearthkeeper",
				alignment: "Neutral Good",
				symbol: "fas fa-heart",
				alabastriaContext: "Cyrrollalee's influence has been essential for building halfling communities in Alabastria, fostering friendship and trust among neighbors.",
				description: "undefined",
				pantheonId: "halfling-yondallas-children",
				domains: ["Friendship", "Trust", "Hearth"],
				followers: ["Halfling Hosts", "Friends", "Community Builders"],
				temples: "Community Centers",
				symbols: ["Heart", "Handshake", "Home", "Friendship symbol", "Heart of friendship"],
				colors: ["Pink", "Gold", "White", "Green"],
			}),
			urogalan: await db.createDeity({
				id: "urogalan",
				name: "Urogalan",
				slug: "urogalan",
				title: "The Earth Lord",
				alignment: "Lawful Neutral",
				symbol: "fas fa-mountain",
				alabastriaContext: "Urogalan's influence has been important for halfling burial practices in Alabastria, providing them with proper death rites and earth connection.",
				description: "undefined",
				pantheonId: "halfling-yondallas-children",
				domains: ["Death", "Earth", "Burials"],
				followers: ["Halfling Gravediggers", "Earth Workers", "Mourners"],
				temples: "Graveyards",
				symbols: ["Mountain", "Shovel", "Grave", "Earth symbol", "Mountain of earth"],
				colors: ["Brown", "Gray", "Green", "Gold"],
			}),
			garl_glittergold: await db.createDeity({
				id: "garl-glittergold",
				name: "Garl Glittergold",
				slug: "garl-glittergold",
				title: "The Joker",
				alignment: "Neutral Good",
				symbol: "fas fa-smile",
				alabastriaContext: "Garl Glittergold's influence has been essential for gnome communities in Alabastria, providing them with luck and protection through humor.",
				description: "undefined",
				pantheonId: "gnomes-lords-of-the-golden-hills",
				domains: ["Luck", "Jokes", "Protection"],
				followers: ["Gnomes", "Tricksters", "Protectors"],
				temples: "Playful Shrines",
				symbols: ["Gold nugget", "Gem", "Pickaxe", "Gnome symbol", "Golden gem"],
				colors: ["Gold", "Green", "Blue", "Silver"],
			}),
			baervan_wildwanderer: await db.createDeity({
				id: "baervan-wildwanderer",
				name: "Baervan Wildwanderer",
				slug: "baervan-wildwanderer",
				title: "The Forest Walker",
				alignment: "Chaotic Good",
				symbol: "fas fa-tree",
				alabastriaContext: "Baervan Wildwanderer's influence has been important for gnome rangers and travelers in Alabastria, helping them navigate the wild places.",
				description: "undefined",
				pantheonId: "gnomes-lords-of-the-golden-hills",
				domains: ["Forests", "Travel", "Wild Places"],
				followers: ["Gnome Rangers", "Travelers", "Nature Lovers"],
				temples: "Forest Shrines",
				symbols: ["Tree", "Leaf", "Path", "Nature symbol", "Tree of life"],
				colors: ["Green", "Brown", "Gold", "Silver"],
			}),
			baravar_cloakshadow: await db.createDeity({
				id: "baravar-cloakshadow",
				name: "Baravar Cloakshadow",
				slug: "baravar-cloakshadow",
				title: "The Shadow Walker",
				alignment: "Chaotic Neutral",
				symbol: "fas fa-mask",
				alabastriaContext: "Baravar Cloakshadow's influence has been important for gnome illusionists and tricksters in Alabastria, teaching them the art of deception.",
				description: "undefined",
				pantheonId: "gnomes-lords-of-the-golden-hills",
				domains: ["Trickery", "Illusions", "Deception"],
				followers: ["Gnome Illusionists", "Tricksters", "Spies"],
				temples: "Hidden Shrines",
				symbols: ["Mask", "Shadow", "Cloak", "Trickery symbol", "Shadow mask"],
				colors: ["Purple", "Black", "Silver", "Gold"],
			}),
			segojan_earthcaller: await db.createDeity({
				id: "segojan-earthcaller",
				name: "Segojan Earthcaller",
				slug: "segojan-earthcaller",
				title: "The Earth Speaker",
				alignment: "Neutral Good",
				symbol: "fas fa-mountain",
				alabastriaContext: "Segojan Earthcaller's influence has been essential for gnome miners and earth workers in Alabastria, helping them work with the earth safely.",
				description: "undefined",
				pantheonId: "gnomes-lords-of-the-golden-hills",
				domains: ["Earth", "Burrows", "Deep Places"],
				followers: ["Gnome Miners", "Earth Workers", "Burrowers"],
				temples: "Underground Shrines",
				symbols: ["Mountain", "Hammer", "Gem", "Earth symbol", "Mountain gem"],
				colors: ["Brown", "Gold", "Green", "Silver"],
			}),
			maglubiyet: await db.createDeity({
				id: "maglubiyet",
				name: "Maglubiyet",
				slug: "maglubiyet",
				title: "The Mighty One",
				alignment: "Lawful Evil",
				symbol: "fas fa-crown",
				alabastriaContext: "Maglubiyet's influence has been crucial for goblinoid survival in Alabastria, teaching them to dominate and conquer in the new world.",
				description: "undefined",
				pantheonId: "goblins-the-dark-gods",
				domains: ["War", "Domination", "Goblinoids"],
				followers: ["Goblins", "Hobgoblins", "Bugbears"],
				temples: "War Camps",
				symbols: ["Goblin symbol", "Skull", "War axe", "Banner", "Goblin crown"],
				colors: ["Red", "Black", "Brown", "Yellow"],
			}),
			khurgorbaeyag: await db.createDeity({
				id: "khurgorbaeyag",
				name: "Khurgorbaeyag",
				slug: "khurgorbaeyag",
				title: "The Slave Driver",
				alignment: "Lawful Evil",
				symbol: "fas fa-chain",
				alabastriaContext: "Khurgorbaeyag's influence has been important for goblinoid slavers in Alabastria, teaching them the art of oppression and control.",
				description: "undefined",
				pantheonId: "goblins-the-dark-gods",
				domains: ["Slavery", "Tyranny", "Oppression"],
				followers: ["Goblin Slavers", "Tyrants", "Oppressors"],
				temples: "Slave Pits",
				symbols: ["Chain", "Whip", "Collar", "Slavery symbol", "Chain of slavery"],
				colors: ["Black", "Red", "Brown", "Gray"],
			}),
			bargrivyek: await db.createDeity({
				id: "bargrivyek",
				name: "Bargrivyek",
				slug: "bargrivyek",
				title: "The Peacekeeper",
				alignment: "Lawful Neutral",
				symbol: "fas fa-handshake",
				alabastriaContext: "Bargrivyek's influence has been rare but important for goblinoid cooperation in Alabastria, teaching them the value of unity and peace.",
				description: "undefined",
				pantheonId: "goblins-the-dark-gods",
				domains: ["Territory", "Cooperation", "Unity"],
				followers: ["Goblin Diplomats", "Peacemakers", "Unifiers"],
				temples: "Diplomatic Centers",
				symbols: ["Handshake", "Peace sign", "Unity symbol", "Goblin symbol", "Hand of peace"],
				colors: ["Green", "Gold", "White", "Blue"],
			}),
			nomog_geaya: await db.createDeity({
				id: "nomog-geaya",
				name: "Nomog-Geaya",
				slug: "nomog-geaya",
				title: "The Authority",
				alignment: "Lawful Evil",
				symbol: "fas fa-gavel",
				alabastriaContext: "Nomog-Geaya's influence has been crucial for hobgoblin military organization in Alabastria, teaching them the importance of authority and discipline.",
				description: "undefined",
				pantheonId: "goblins-the-dark-gods",
				domains: ["Authority", "War", "Hobgoblins"],
				followers: ["Hobgoblins", "Military Leaders", "Authorities"],
				temples: "Military Forts",
				symbols: ["Gavel", "Crown", "Authority symbol", "Hobgoblin symbol", "Gavel of authority"],
				colors: ["Red", "Black", "Gold", "Silver"],
			}),
			kurtulmak: await db.createDeity({
				id: "kurtulmak",
				name: "Kurtulmak",
				slug: "kurtulmak",
				title: "The Kobold God",
				alignment: "Lawful Evil",
				symbol: "fas fa-hammer",
				alabastriaContext: "Kurtulmak's influence has been essential for kobold survival in Alabastria, teaching them to build traps and tunnels for protection.",
				description: "undefined",
				pantheonId: "goblins-the-dark-gods",
				domains: ["Kobolds", "Traps", "Tunnels"],
				followers: ["Kobolds", "Trap Makers", "Tunnelers"],
				temples: "Underground Lairs",
				symbols: ["Kobold symbol", "Trap", "Dagger", "Small skull", "Kobold trap"],
				colors: ["Brown", "Red", "Black", "Yellow"],
			}),
			gith: await db.createDeity({
				id: "gith",
				name: "Gith",
				slug: "gith",
				title: "The Liberator",
				alignment: "Chaotic Good",
				symbol: "fas fa-fist-raised",
				alabastriaContext: "Gith's influence has been crucial for Gith communities in Alabastria, teaching them the value of freedom and the importance of fighting against oppression.",
				description: "undefined",
				pantheonId: "gith",
				domains: ["Freedom", "Vengeance", "Liberation"],
				followers: ["Githyanki", "Githzerai", "Liberators"],
				temples: "Liberation Shrines",
				symbols: ["Fist", "Sword", "Liberation symbol", "Gith symbol", "Fist of freedom"],
				colors: ["Silver", "Blue", "White", "Gold"],
			}),
			vlaakith: await db.createDeity({
				id: "vlaakith",
				name: "Vlaakith",
				slug: "vlaakith",
				title: "The Lich-Queen",
				alignment: "Lawful Evil",
				symbol: "fas fa-skull",
				alabastriaContext: "Vlaakith's influence has been important for Githyanki communities in Alabastria, teaching them the power of tyranny and undeath.",
				description: "undefined",
				pantheonId: "gith",
				domains: ["Tyranny", "Undeath", "Githyanki"],
				followers: ["Githyanki", "Undead", "Tyrants"],
				temples: "Undead Fortresses",
				symbols: ["Skull", "Crown", "Lich symbol", "Githyanki symbol", "Crown of undeath"],
				colors: ["Black", "Purple", "Silver", "Red"],
			}),
			sseth: await db.createDeity({
				id: "sseth",
				name: "Sseth",
				slug: "sseth",
				title: "The Serpent Lord",
				alignment: "Chaotic Evil",
				symbol: "fas fa-eye",
				alabastriaContext: "Sseth's influence has been important for Yuan-Ti communities in Alabastria, teaching them the power of ambition and secrecy.",
				description: "undefined",
				pantheonId: "yuan-ti-serpent-gods",
				domains: ["Ambition", "Secrecy", "Deception"],
				followers: ["Yuan-Ti", "Ambition Seekers", "Deceivers"],
				temples: "Hidden Temples",
				symbols: ["Eye", "Snake", "Ambition symbol", "Yuan-ti symbol", "Eye of ambition"],
				colors: ["Green", "Gold", "Black", "Silver"],
			}),
			merrshaulk: await db.createDeity({
				id: "merrshaulk",
				name: "Merrshaulk",
				slug: "merrshaulk",
				title: "The Slumbering Serpent",
				alignment: "Chaotic Evil",
				symbol: "fas fa-bed",
				alabastriaContext: "Merrshaulk's influence has been important for Yuan-Ti communities in Alabastria, teaching them the dangers of decadence and corruption.",
				description: "undefined",
				pantheonId: "yuan-ti-serpent-gods",
				domains: ["Decadence", "Corruption", "Slumber"],
				followers: ["Yuan-Ti", "Corrupt Officials", "Decadent Rulers"],
				temples: "Corrupt Palaces",
				symbols: ["Bed", "Snake", "Decadence symbol", "Yuan-ti symbol", "Serpent of slumber"],
				colors: ["Green", "Gold", "Black", "Purple"],
			}),
			umberlee: await db.createDeity({
				id: "umberlee",
				name: "Umberlee",
				slug: "umberlee",
				title: "The Bitch Queen",
				alignment: "Chaotic Evil",
				symbol: "fas fa-wave-square",
				alabastriaContext: "Umberlee's influence has been crucial for sailors and coastal folk in Alabastria, teaching them to respect the power of the sea and storms.",
				description: "undefined",
				pantheonId: "sea-powers",
				domains: ["Sea", "Storms", "Drowning"],
				followers: ["Sailors", "Storm Callers", "Sea Witches"],
				temples: "Storm Shrines",
				symbols: ["Wave", "Storm", "Sea symbol", "Trident", "Storm wave"],
				colors: ["Blue", "White", "Silver", "Gray"],
			}),
			valkur: await db.createDeity({
				id: "valkur",
				name: "Valkur",
				slug: "valkur",
				title: "The Sailor's Friend",
				alignment: "Chaotic Good",
				symbol: "fas fa-anchor",
				alabastriaContext: "Valkur's influence has been essential for sailors and sea travelers in Alabastria, providing them with protection and fair winds.",
				description: "undefined",
				pantheonId: "sea-powers",
				domains: ["Sailors", "Protection", "Fair Seas"],
				followers: ["Sailors", "Coastal Guards", "Sea Travelers"],
				temples: "Harbor Shrines",
				symbols: ["Anchor", "Ship", "Sailor symbol", "Compass", "Anchor of safety"],
				colors: ["Blue", "White", "Gold", "Silver"],
			}),
			deep_sashelas: await db.createDeity({
				id: "deep-sashelas",
				name: "Deep Sashelas",
				slug: "deep-sashelas",
				title: "The Sea Elf God",
				alignment: "Chaotic Good",
				symbol: "fas fa-fish",
				alabastriaContext: "Deep Sashelas's influence has been important for sea elves and coastal artists in Alabastria, inspiring creativity and knowledge of the sea.",
				description: "undefined",
				pantheonId: "sea-powers",
				domains: ["Creativity", "Knowledge", "Sea"],
				followers: ["Sea Elves", "Artists", "Scholars"],
				temples: "Underwater Temples",
				symbols: ["Fish", "Coral", "Sea symbol", "Trident", "Coral trident"],
				colors: ["Blue", "Green", "Gold", "Silver"],
			}),
			sekolah: await db.createDeity({
				id: "sekolah",
				name: "Sekolah",
				slug: "sekolah",
				title: "The Shark God",
				alignment: "Chaotic Evil",
				symbol: "fas fa-khanda",
				alabastriaContext: "Sekolah's influence has been important for Sahuagin communities in Alabastria, teaching them the power of predation and the hunt.",
				description: "undefined",
				pantheonId: "sea-powers",
				domains: ["Sharks", "Predation", "Sahuagin"],
				followers: ["Sahuagin", "Shark Cultists", "Predators"],
				temples: "Underwater Lairs",
				symbols: ["Shark", "Fang", "Predation symbol", "Sahuagin symbol", "Shark's fang"],
				colors: ["Gray", "Red", "Black", "White"],
			}),
		};
		// Holy Days
		const holyDay: Record<string, Prisma.DeityHolyDayGetPayload<{}>> = {
			cyric_the_black_sun: await db.createDeityHolyDay({
				id: "cyric-the-black-sun",
				name: "The Black Sun",
				deityId: "cyric",
			}),
			cyric_night_of_shattered_truths: await db.createDeityHolyDay({
				id: "cyric-night-of-shattered-truths",
				name: "Night of Shattered Truths",
				deityId: "cyric",
			}),
			tempus_battles_dawn: await db.createDeityHolyDay({
				id: "tempus-battles-dawn",
				name: "Battle's Dawn",
				deityId: "tempus",
			}),
			tempus_victorys_end: await db.createDeityHolyDay({
				id: "tempus-victorys-end",
				name: "Victory's End",
				deityId: "tempus",
			}),
			mystra_weaves_awakening: await db.createDeityHolyDay({
				id: "mystra-weaves-awakening",
				name: "Weave's Awakening",
				deityId: "mystra",
			}),
			mystra_mystras_blessing: await db.createDeityHolyDay({
				id: "mystra-mystras-blessing",
				name: "Mystra's Blessing",
				deityId: "mystra",
			}),
			lathander_dawns_blessing: await db.createDeityHolyDay({
				id: "lathander-dawns-blessing",
				name: "Dawn's Blessing",
				deityId: "lathander",
			}),
			lathander_springs_awakening: await db.createDeityHolyDay({
				id: "lathander-springs-awakening",
				name: "Spring's Awakening",
				deityId: "lathander",
			}),
			selune_moons_blessing: await db.createDeityHolyDay({
				id: "selune-moons-blessing",
				name: "Moon's Blessing",
				deityId: "selune",
			}),
			selune_stars_guidance: await db.createDeityHolyDay({
				id: "selune-stars-guidance",
				name: "Star's Guidance",
				deityId: "selune",
			}),
			shar_nights_embrace: await db.createDeityHolyDay({
				id: "shar-nights-embrace",
				name: "Night's Embrace",
				deityId: "shar",
			}),
			shar_shadows_blessing: await db.createDeityHolyDay({
				id: "shar-shadows-blessing",
				name: "Shadow's Blessing",
				deityId: "shar",
			}),
			oghma_the_day_of_unbound_pages: await db.createDeityHolyDay({
				id: "oghma-the-day-of-unbound-pages",
				name: "The Day of Unbound Pages",
				deityId: "oghma",
			}),
			oghma_festival_of_first_words: await db.createDeityHolyDay({
				id: "oghma-festival-of-first-words",
				name: "Festival of First Words",
				deityId: "oghma",
			}),
			deneir_the_first_inscription: await db.createDeityHolyDay({
				id: "deneir-the-first-inscription",
				name: "The First Inscription",
				deityId: "deneir",
			}),
			deneir_inkbound_vigil: await db.createDeityHolyDay({
				id: "deneir-inkbound-vigil",
				name: "Inkbound Vigil",
				deityId: "deneir",
			}),
			mask_the_long_shadow: await db.createDeityHolyDay({
				id: "mask-the-long-shadow",
				name: "The Long Shadow",
				deityId: "mask",
			}),
			mask_night_of_vanishing_coin: await db.createDeityHolyDay({
				id: "mask-night-of-vanishing-coin",
				name: "Night of Vanishing Coin",
				deityId: "mask",
			}),
			helm_the_vigil: await db.createDeityHolyDay({
				id: "helm-the-vigil",
				name: "The Vigil",
				deityId: "helm",
			}),
			helm_day_of_the_watchtower: await db.createDeityHolyDay({
				id: "helm-day-of-the-watchtower",
				name: "Day of the Watchtower",
				deityId: "helm",
			}),
			tyr_day_of_the_scales: await db.createDeityHolyDay({
				id: "tyr-day-of-the-scales",
				name: "Day of the Scales",
				deityId: "tyr",
			}),
			tyr_judgment_s_dawn: await db.createDeityHolyDay({
				id: "tyr-judgment-s-dawn",
				name: "Judgment’s Dawn",
				deityId: "tyr",
			}),
			chauntea_planting_day: await db.createDeityHolyDay({
				id: "chauntea-planting-day",
				name: "Planting Day",
				deityId: "chauntea",
			}),
			chauntea_harvest_home: await db.createDeityHolyDay({
				id: "chauntea-harvest-home",
				name: "Harvest Home",
				deityId: "chauntea",
			}),
			ilmater_day_of_tears: await db.createDeityHolyDay({
				id: "ilmater-day-of-tears",
				name: "Day of Tears",
				deityId: "ilmater",
			}),
			ilmater_night_of_quiet_vigil: await db.createDeityHolyDay({
				id: "ilmater-night-of-quiet-vigil",
				name: "Night of Quiet Vigil",
				deityId: "ilmater",
			}),
			talona_the_weeping_blight: await db.createDeityHolyDay({
				id: "talona-the-weeping-blight",
				name: "The Weeping Blight",
				deityId: "talona",
			}),
			talona_night_of_bitter_breath: await db.createDeityHolyDay({
				id: "talona-night-of-bitter-breath",
				name: "Night of Bitter Breath",
				deityId: "talona",
			}),
			tymora_lucks_blessing: await db.createDeityHolyDay({
				id: "tymora-lucks-blessing",
				name: "Luck's Blessing",
				deityId: "tymora",
			}),
			tymora_adventures_call: await db.createDeityHolyDay({
				id: "tymora-adventures-call",
				name: "Adventure's Call",
				deityId: "tymora",
			}),
			beshaba_dooms_call: await db.createDeityHolyDay({
				id: "beshaba-dooms-call",
				name: "Doom's Call",
				deityId: "beshaba",
			}),
			beshaba_misfortunes_blessing: await db.createDeityHolyDay({
				id: "beshaba-misfortunes-blessing",
				name: "Misfortune's Blessing",
				deityId: "beshaba",
			}),
			kelemvor_deaths_judgment: await db.createDeityHolyDay({
				id: "kelemvor-deaths-judgment",
				name: "Death's Judgment",
				deityId: "kelemvor",
			}),
			kelemvor_justices_call: await db.createDeityHolyDay({
				id: "kelemvor-justices-call",
				name: "Justice's Call",
				deityId: "kelemvor",
			}),
			bane_tyrannys_call: await db.createDeityHolyDay({
				id: "bane-tyrannys-call",
				name: "Tyranny's Call",
				deityId: "bane",
			}),
			bane_conquests_blessing: await db.createDeityHolyDay({
				id: "bane-conquests-blessing",
				name: "Conquest's Blessing",
				deityId: "bane",
			}),
			myrkul_undeaths_call: await db.createDeityHolyDay({
				id: "myrkul-undeaths-call",
				name: "Undeath's Call",
				deityId: "myrkul",
			}),
			myrkul_necromancys_blessing: await db.createDeityHolyDay({
				id: "myrkul-necromancys-blessing",
				name: "Necromancy's Blessing",
				deityId: "myrkul",
			}),
			jergal_records_blessing: await db.createDeityHolyDay({
				id: "jergal-records-blessing",
				name: "Record's Blessing",
				deityId: "jergal",
			}),
			jergal_fates_call: await db.createDeityHolyDay({
				id: "jergal-fates-call",
				name: "Fate's Call",
				deityId: "jergal",
			}),
			moradin_forges_blessing: await db.createDeityHolyDay({
				id: "moradin-forges-blessing",
				name: "Forge's Blessing",
				deityId: "moradin",
			}),
			moradin_creations_call: await db.createDeityHolyDay({
				id: "moradin-creations-call",
				name: "Creation's Call",
				deityId: "moradin",
			}),
			berronar_truesilver_hearths_blessing: await db.createDeityHolyDay({
				id: "berronar-truesilver-hearths-blessing",
				name: "Hearth's Blessing",
				deityId: "berronar-truesilver",
			}),
			berronar_truesilver_familys_call: await db.createDeityHolyDay({
				id: "berronar-truesilver-familys-call",
				name: "Family's Call",
				deityId: "berronar-truesilver",
			}),
			clangeddin_silverbeard_battles_call: await db.createDeityHolyDay({
				id: "clangeddin-silverbeard-battles-call",
				name: "Battle's Call",
				deityId: "clangeddin-silverbeard",
			}),
			clangeddin_silverbeard_honors_blessing: await db.createDeityHolyDay({
				id: "clangeddin-silverbeard-honors-blessing",
				name: "Honor's Blessing",
				deityId: "clangeddin-silverbeard",
			}),
			dugmaren_brightmantle_discoverys_call: await db.createDeityHolyDay({
				id: "dugmaren-brightmantle-discoverys-call",
				name: "Discovery's Call",
				deityId: "dugmaren-brightmantle",
			}),
			dugmaren_brightmantle_innovations_blessing: await db.createDeityHolyDay({
				id: "dugmaren-brightmantle-innovations-blessing",
				name: "Innovation's Blessing",
				deityId: "dugmaren-brightmantle",
			}),
			vergadain_trades_blessing: await db.createDeityHolyDay({
				id: "vergadain-trades-blessing",
				name: "Trade's Blessing",
				deityId: "vergadain",
			}),
			vergadain_wealths_call: await db.createDeityHolyDay({
				id: "vergadain-wealths-call",
				name: "Wealth's Call",
				deityId: "vergadain",
			}),
			corellon_larethian_arts_blessing: await db.createDeityHolyDay({
				id: "corellon-larethian-arts-blessing",
				name: "Art's Blessing",
				deityId: "corellon-larethian",
			}),
			corellon_larethian_creations_call: await db.createDeityHolyDay({
				id: "corellon-larethian-creations-call",
				name: "Creation's Call",
				deityId: "corellon-larethian",
			}),
			sehanine_moonbow_dreams_blessing: await db.createDeityHolyDay({
				id: "sehanine-moonbow-dreams-blessing",
				name: "Dream's Blessing",
				deityId: "sehanine-moonbow",
			}),
			sehanine_moonbow_journeys_call: await db.createDeityHolyDay({
				id: "sehanine-moonbow-journeys-call",
				name: "Journey's Call",
				deityId: "sehanine-moonbow",
			}),
			hanali_celanil_loves_blessing: await db.createDeityHolyDay({
				id: "hanali-celanil-loves-blessing",
				name: "Love's Blessing",
				deityId: "hanali-celanil",
			}),
			hanali_celanil_beautys_call: await db.createDeityHolyDay({
				id: "hanali-celanil-beautys-call",
				name: "Beauty's Call",
				deityId: "hanali-celanil",
			}),
			labelas_enoreth_times_blessing: await db.createDeityHolyDay({
				id: "labelas-enoreth-times-blessing",
				name: "Time's Blessing",
				deityId: "labelas-enoreth",
			}),
			labelas_enoreth_wisdoms_call: await db.createDeityHolyDay({
				id: "labelas-enoreth-wisdoms-call",
				name: "Wisdom's Call",
				deityId: "labelas-enoreth",
			}),
			solonor_thelandira_archerys_blessing: await db.createDeityHolyDay({
				id: "solonor-thelandira-archerys-blessing",
				name: "Archery's Blessing",
				deityId: "solonor-thelandira",
			}),
			solonor_thelandira_hunts_call: await db.createDeityHolyDay({
				id: "solonor-thelandira-hunts-call",
				name: "Hunt's Call",
				deityId: "solonor-thelandira",
			}),
			lolth_spiders_blessing: await db.createDeityHolyDay({
				id: "lolth-spiders-blessing",
				name: "Spider's Blessing",
				deityId: "lolth",
			}),
			lolth_deceptions_call: await db.createDeityHolyDay({
				id: "lolth-deceptions-call",
				name: "Deception's Call",
				deityId: "lolth",
			}),
			vhaeraun_shadows_blessing: await db.createDeityHolyDay({
				id: "vhaeraun-shadows-blessing",
				name: "Shadow's Blessing",
				deityId: "vhaeraun",
			}),
			vhaeraun_rebellions_call: await db.createDeityHolyDay({
				id: "vhaeraun-rebellions-call",
				name: "Rebellion's Call",
				deityId: "vhaeraun",
			}),
			eilistraee_songs_blessing: await db.createDeityHolyDay({
				id: "eilistraee-songs-blessing",
				name: "Song's Blessing",
				deityId: "eilistraee",
			}),
			eilistraee_redemptions_call: await db.createDeityHolyDay({
				id: "eilistraee-redemptions-call",
				name: "Redemption's Call",
				deityId: "eilistraee",
			}),
			gruumsh_one_eye_blood_moon: await db.createDeityHolyDay({
				id: "gruumsh-one-eye-blood-moon",
				name: "Blood Moon",
				deityId: "gruumsh-one-eye",
			}),
			gruumsh_one_eye_conquest_day: await db.createDeityHolyDay({
				id: "gruumsh-one-eye-conquest-day",
				name: "Conquest Day",
				deityId: "gruumsh-one-eye",
			}),
			luthic_birth_festival: await db.createDeityHolyDay({
				id: "luthic-birth-festival",
				name: "Birth Festival",
				deityId: "luthic",
			}),
			luthic_cave_blessing: await db.createDeityHolyDay({
				id: "luthic-cave-blessing",
				name: "Cave Blessing",
				deityId: "luthic",
			}),
			ilneval_strategy_day: await db.createDeityHolyDay({
				id: "ilneval-strategy-day",
				name: "Strategy Day",
				deityId: "ilneval",
			}),
			ilneval_victory_feast: await db.createDeityHolyDay({
				id: "ilneval-victory-feast",
				name: "Victory Feast",
				deityId: "ilneval",
			}),
			bahgtru_strength_day: await db.createDeityHolyDay({
				id: "bahgtru-strength-day",
				name: "Strength Day",
				deityId: "bahgtru",
			}),
			bahgtru_loyalty_feast: await db.createDeityHolyDay({
				id: "bahgtru-loyalty-feast",
				name: "Loyalty Feast",
				deityId: "bahgtru",
			}),
			shargaas_night_of_shadows: await db.createDeityHolyDay({
				id: "shargaas-night-of-shadows",
				name: "Night of Shadows",
				deityId: "shargaas",
			}),
			shargaas_stealth_festival: await db.createDeityHolyDay({
				id: "shargaas-stealth-festival",
				name: "Stealth Festival",
				deityId: "shargaas",
			}),
			bahamut_day_of_justice: await db.createDeityHolyDay({
				id: "bahamut-day-of-justice",
				name: "Day of Justice",
				deityId: "bahamut",
			}),
			bahamut_protection_festival: await db.createDeityHolyDay({
				id: "bahamut-protection-festival",
				name: "Protection Festival",
				deityId: "bahamut",
			}),
			tiamat_day_of_conquest: await db.createDeityHolyDay({
				id: "tiamat-day-of-conquest",
				name: "Day of Conquest",
				deityId: "tiamat",
			}),
			tiamat_greed_festival: await db.createDeityHolyDay({
				id: "tiamat-greed-festival",
				name: "Greed Festival",
				deityId: "tiamat",
			}),
			akadi_wind_festival: await db.createDeityHolyDay({
				id: "akadi-wind-festival",
				name: "Wind Festival",
				deityId: "akadi",
			}),
			akadi_change_day: await db.createDeityHolyDay({
				id: "akadi-change-day",
				name: "Change Day",
				deityId: "akadi",
			}),
			grumbar_earth_day: await db.createDeityHolyDay({
				id: "grumbar-earth-day",
				name: "Earth Day",
				deityId: "grumbar",
			}),
			grumbar_harvest_festival: await db.createDeityHolyDay({
				id: "grumbar-harvest-festival",
				name: "Harvest Festival",
				deityId: "grumbar",
			}),
			kossuth_fire_festival: await db.createDeityHolyDay({
				id: "kossuth-fire-festival",
				name: "Fire Festival",
				deityId: "kossuth",
			}),
			kossuth_renewal_day: await db.createDeityHolyDay({
				id: "kossuth-renewal-day",
				name: "Renewal Day",
				deityId: "kossuth",
			}),
			istishia_water_festival: await db.createDeityHolyDay({
				id: "istishia-water-festival",
				name: "Water Festival",
				deityId: "istishia",
			}),
			istishia_flow_day: await db.createDeityHolyDay({
				id: "istishia-flow-day",
				name: "Flow Day",
				deityId: "istishia",
			}),
			the_raven_queen_day_of_remembrance: await db.createDeityHolyDay({
				id: "the-raven-queen-day-of-remembrance",
				name: "Day of Remembrance",
				deityId: "the-raven-queen",
			}),
			the_raven_queen_shadow_festival: await db.createDeityHolyDay({
				id: "the-raven-queen-shadow-festival",
				name: "Shadow Festival",
				deityId: "the-raven-queen",
			}),
			asmodeus_day_of_binding: await db.createDeityHolyDay({
				id: "asmodeus-day-of-binding",
				name: "Day of Binding",
				deityId: "asmodeus",
			}),
			asmodeus_infernal_solstice: await db.createDeityHolyDay({
				id: "asmodeus-infernal-solstice",
				name: "Infernal Solstice",
				deityId: "asmodeus",
			}),
			yondalla_harvest_festival: await db.createDeityHolyDay({
				id: "yondalla-harvest-festival",
				name: "Harvest Festival",
				deityId: "yondalla",
			}),
			yondalla_family_day: await db.createDeityHolyDay({
				id: "yondalla-family-day",
				name: "Family Day",
				deityId: "yondalla",
			}),
			arvoreen_defense_day: await db.createDeityHolyDay({
				id: "arvoreen-defense-day",
				name: "Defense Day",
				deityId: "arvoreen",
			}),
			arvoreen_vigilance_night: await db.createDeityHolyDay({
				id: "arvoreen-vigilance-night",
				name: "Vigilance Night",
				deityId: "arvoreen",
			}),
			cyrrollalee_friendship_day: await db.createDeityHolyDay({
				id: "cyrrollalee-friendship-day",
				name: "Friendship Day",
				deityId: "cyrrollalee",
			}),
			cyrrollalee_hearth_festival: await db.createDeityHolyDay({
				id: "cyrrollalee-hearth-festival",
				name: "Hearth Festival",
				deityId: "cyrrollalee",
			}),
			urogalan_earth_day: await db.createDeityHolyDay({
				id: "urogalan-earth-day",
				name: "Earth Day",
				deityId: "urogalan",
			}),
			urogalan_burial_festival: await db.createDeityHolyDay({
				id: "urogalan-burial-festival",
				name: "Burial Festival",
				deityId: "urogalan",
			}),
			garl_glittergold_joke_day: await db.createDeityHolyDay({
				id: "garl-glittergold-joke-day",
				name: "Joke Day",
				deityId: "garl-glittergold",
			}),
			garl_glittergold_luck_festival: await db.createDeityHolyDay({
				id: "garl-glittergold-luck-festival",
				name: "Luck Festival",
				deityId: "garl-glittergold",
			}),
			baervan_wildwanderer_forest_day: await db.createDeityHolyDay({
				id: "baervan-wildwanderer-forest-day",
				name: "Forest Day",
				deityId: "baervan-wildwanderer",
			}),
			baervan_wildwanderer_travel_festival: await db.createDeityHolyDay({
				id: "baervan-wildwanderer-travel-festival",
				name: "Travel Festival",
				deityId: "baervan-wildwanderer",
			}),
			baravar_cloakshadow_trick_day: await db.createDeityHolyDay({
				id: "baravar-cloakshadow-trick-day",
				name: "Trick Day",
				deityId: "baravar-cloakshadow",
			}),
			baravar_cloakshadow_shadow_festival: await db.createDeityHolyDay({
				id: "baravar-cloakshadow-shadow-festival",
				name: "Shadow Festival",
				deityId: "baravar-cloakshadow",
			}),
			segojan_earthcaller_earth_day: await db.createDeityHolyDay({
				id: "segojan-earthcaller-earth-day",
				name: "Earth Day",
				deityId: "segojan-earthcaller",
			}),
			segojan_earthcaller_burrow_festival: await db.createDeityHolyDay({
				id: "segojan-earthcaller-burrow-festival",
				name: "Burrow Festival",
				deityId: "segojan-earthcaller",
			}),
			maglubiyet_conquest_day: await db.createDeityHolyDay({
				id: "maglubiyet-conquest-day",
				name: "Conquest Day",
				deityId: "maglubiyet",
			}),
			maglubiyet_supremacy_festival: await db.createDeityHolyDay({
				id: "maglubiyet-supremacy-festival",
				name: "Supremacy Festival",
				deityId: "maglubiyet",
			}),
			khurgorbaeyag_slavery_day: await db.createDeityHolyDay({
				id: "khurgorbaeyag-slavery-day",
				name: "Slavery Day",
				deityId: "khurgorbaeyag",
			}),
			khurgorbaeyag_tyranny_festival: await db.createDeityHolyDay({
				id: "khurgorbaeyag-tyranny-festival",
				name: "Tyranny Festival",
				deityId: "khurgorbaeyag",
			}),
			bargrivyek_unity_day: await db.createDeityHolyDay({
				id: "bargrivyek-unity-day",
				name: "Unity Day",
				deityId: "bargrivyek",
			}),
			bargrivyek_peace_festival: await db.createDeityHolyDay({
				id: "bargrivyek-peace-festival",
				name: "Peace Festival",
				deityId: "bargrivyek",
			}),
			nomog_geaya_authority_day: await db.createDeityHolyDay({
				id: "nomog-geaya-authority-day",
				name: "Authority Day",
				deityId: "nomog-geaya",
			}),
			nomog_geaya_war_festival: await db.createDeityHolyDay({
				id: "nomog-geaya-war-festival",
				name: "War Festival",
				deityId: "nomog-geaya",
			}),
			kurtulmak_trap_day: await db.createDeityHolyDay({
				id: "kurtulmak-trap-day",
				name: "Trap Day",
				deityId: "kurtulmak",
			}),
			kurtulmak_tunnel_festival: await db.createDeityHolyDay({
				id: "kurtulmak-tunnel-festival",
				name: "Tunnel Festival",
				deityId: "kurtulmak",
			}),
			gith_liberation_day: await db.createDeityHolyDay({
				id: "gith-liberation-day",
				name: "Liberation Day",
				deityId: "gith",
			}),
			gith_freedom_festival: await db.createDeityHolyDay({
				id: "gith-freedom-festival",
				name: "Freedom Festival",
				deityId: "gith",
			}),
			vlaakith_tyranny_day: await db.createDeityHolyDay({
				id: "vlaakith-tyranny-day",
				name: "Tyranny Day",
				deityId: "vlaakith",
			}),
			vlaakith_undeath_festival: await db.createDeityHolyDay({
				id: "vlaakith-undeath-festival",
				name: "Undeath Festival",
				deityId: "vlaakith",
			}),
			sseth_ambition_day: await db.createDeityHolyDay({
				id: "sseth-ambition-day",
				name: "Ambition Day",
				deityId: "sseth",
			}),
			sseth_secrecy_festival: await db.createDeityHolyDay({
				id: "sseth-secrecy-festival",
				name: "Secrecy Festival",
				deityId: "sseth",
			}),
			merrshaulk_decadence_day: await db.createDeityHolyDay({
				id: "merrshaulk-decadence-day",
				name: "Decadence Day",
				deityId: "merrshaulk",
			}),
			merrshaulk_slumber_festival: await db.createDeityHolyDay({
				id: "merrshaulk-slumber-festival",
				name: "Slumber Festival",
				deityId: "merrshaulk",
			}),
			umberlee_storm_day: await db.createDeityHolyDay({
				id: "umberlee-storm-day",
				name: "Storm Day",
				deityId: "umberlee",
			}),
			umberlee_sea_festival: await db.createDeityHolyDay({
				id: "umberlee-sea-festival",
				name: "Sea Festival",
				deityId: "umberlee",
			}),
			valkur_sailors_day: await db.createDeityHolyDay({
				id: "valkur-sailors-day",
				name: "Sailor's Day",
				deityId: "valkur",
			}),
			valkur_fair_seas_festival: await db.createDeityHolyDay({
				id: "valkur-fair-seas-festival",
				name: "Fair Seas Festival",
				deityId: "valkur",
			}),
			deep_sashelas_creativity_day: await db.createDeityHolyDay({
				id: "deep-sashelas-creativity-day",
				name: "Creativity Day",
				deityId: "deep-sashelas",
			}),
			deep_sashelas_knowledge_festival: await db.createDeityHolyDay({
				id: "deep-sashelas-knowledge-festival",
				name: "Knowledge Festival",
				deityId: "deep-sashelas",
			}),
			sekolah_predation_day: await db.createDeityHolyDay({
				id: "sekolah-predation-day",
				name: "Predation Day",
				deityId: "sekolah",
			}),
			sekolah_shark_festival: await db.createDeityHolyDay({
				id: "sekolah-shark-festival",
				name: "Shark Festival",
				deityId: "sekolah",
			}),
		};
		// Deity History
		const deityHistory: Record<string, Prisma.DeityHistoryGetPayload<{}>> = {
			cyric_0_100_cycles_history: await db.createDeityHistory({
				id: "cyric-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "cyric",
				description: "The Bringing weakened Cyric’s divine coherence, amplifying his madness. His early cults splintered, many turning violently on one another as conflicting visions spread.",
			}),
			cyric_100_300_cycles_history: await db.createDeityHistory({
				id: "cyric-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "cyric",
				description: "Cyricite sects began infiltrating courts and guilds, engineering assassinations and civil unrest. Several short-lived theocracies collapsed due to internal betrayal.",
			}),
			cyric_300_600_cycles_history: await db.createDeityHistory({
				id: "cyric-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "cyric",
				description: "A period known as the Fractured Dogma saw Cyric’s followers war against each other over contradictory revelations. Despite this, his influence grew through fear and chaos rather than devotion.",
			}),
			cyric_600_800_cycles_history: await db.createDeityHistory({
				id: "cyric-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "cyric",
				description: "In the current age, Cyric is worshiped primarily in secret. His cults are blamed for several major political collapses and the rise of the Veiled Knives, an infamous assassin network operating across continents.",
			}),
			tempus_0_100_cycles_history: await db.createDeityHistory({
				id: "tempus-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "tempus",
				description: "Initially confused by The Bringing, Tempus's followers struggled to maintain their faith in a new world. Many turned to him for guidance during the early conflicts and resource wars.",
			}),
			tempus_100_300_cycles_history: await db.createDeityHistory({
				id: "tempus-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "tempus",
				description: "Gained prominence during the First Continental War, with his temples becoming centers of military training and strategy. The Huntbound Order's founding in 755 cycles marked a major resurgence of his influence.",
			}),
			tempus_300_600_cycles_history: await db.createDeityHistory({
				id: "tempus-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "tempus",
				description: "Became the patron deity of the Huntbound Order, with Tharos Raggenthraw being a devoted follower. His influence spread across all continents as the guild expanded.",
			}),
			tempus_600_800_cycles_history: await db.createDeityHistory({
				id: "tempus-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "tempus",
				description: "Currently at the height of his power in Alabastria, with the Huntbound Order serving as his primary religious organization. His temples are found in every major city.",
			}),
			mystra_0_100_cycles_history: await db.createDeityHistory({
				id: "mystra-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "mystra",
				description: "Her followers were among the first to adapt to Alabastria's unique magical properties, establishing the first magical research centers.",
			}),
			mystra_100_300_cycles_history: await db.createDeityHistory({
				id: "mystra-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "mystra",
				description: "Gained significant influence during Kuriguer's Magic Surge, with her temples becoming centers of magical learning and research.",
			}),
			mystra_300_600_cycles_history: await db.createDeityHistory({
				id: "mystra-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "mystra",
				description: "Established the first magical academies in Kuriguer, becoming the primary patron of magical education and research across Alabastria.",
			}),
			mystra_600_800_cycles_history: await db.createDeityHistory({
				id: "mystra-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "mystra",
				description: "Currently maintains the most prestigious magical institutions in Alabastria, with her followers being the primary researchers of the continent's magical anomalies.",
			}),
			lathander_0_100_cycles_history: await db.createDeityHistory({
				id: "lathander-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "lathander",
				description: "Provided hope and healing during the chaotic early years of The Bringing, with his temples becoming sanctuaries for the displaced.",
			}),
			lathander_100_300_cycles_history: await db.createDeityHistory({
				id: "lathander-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "lathander",
				description: "Gained prominence as a patron of agriculture and renewal, with his followers helping establish the first successful farming communities in Skratonia.",
			}),
			lathander_300_600_cycles_history: await db.createDeityHistory({
				id: "lathander-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "lathander",
				description: "Became the primary patron of healing and renewal across all continents, with his temples serving as centers of medical knowledge and agricultural innovation.",
			}),
			lathander_600_800_cycles_history: await db.createDeityHistory({
				id: "lathander-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "lathander",
				description: "Currently maintains the most extensive healing network in Alabastria, with his followers being the primary healers and agricultural advisors across all continents.",
			}),
			selune_0_100_cycles_history: await db.createDeityHistory({
				id: "selune-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "selune",
				description: "Guided the first explorers and settlers as they navigated the new world, with her temples serving as navigation aids and safe havens.",
			}),
			selune_100_300_cycles_history: await db.createDeityHistory({
				id: "selune-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "selune",
				description: "Gained prominence as a patron of exploration and trade, with her followers establishing the first trade routes and navigation systems.",
			}),
			selune_300_600_cycles_history: await db.createDeityHistory({
				id: "selune-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "selune",
				description: "Became the primary patron of maritime trade and exploration, with her temples serving as lighthouses and navigation centers along all coastlines.",
			}),
			selune_600_800_cycles_history: await db.createDeityHistory({
				id: "selune-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "selune",
				description: "Currently maintains the most extensive navigation network in Alabastria, with her followers being the primary guides for all maritime and overland travel.",
			}),
			shar_0_100_cycles_history: await db.createDeityHistory({
				id: "shar-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "shar",
				description: "Gained followers among those who lost everything in The Bringing, with her temples serving as places of mourning and secret gathering.",
			}),
			shar_100_300_cycles_history: await db.createDeityHistory({
				id: "shar-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "shar",
				description: "Established a network of hidden shrines and secret societies, with her followers becoming the primary information brokers and spies across all continents.",
			}),
			shar_300_600_cycles_history: await db.createDeityHistory({
				id: "shar-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "shar",
				description: "Became the patron of the shadow economy and underground networks, with her followers controlling much of the information flow between continents.",
			}),
			shar_600_800_cycles_history: await db.createDeityHistory({
				id: "shar-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "shar",
				description: "Currently maintains the most extensive information network in Alabastria, with her followers being the primary spies and information brokers across all continents.",
			}),
			oghma_0_100_cycles_history: await db.createDeityHistory({
				id: "oghma-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "oghma",
				description: "In the aftermath of The Bringing, Oghma’s faithful focused on salvaging texts, oral histories, and lost languages. Many risked their lives to preserve fragments of the old world’s knowledge.",
			}),
			oghma_100_300_cycles_history: await db.createDeityHistory({
				id: "oghma-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "oghma",
				description: "Oghman libraries became centers of learning and diplomacy. The first Great Concord of Scholars was signed under his auspices, standardizing languages and historical records.",
			}),
			oghma_300_600_cycles_history: await db.createDeityHistory({
				id: "oghma-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "oghma",
				description: "A golden age of invention and exploration emerged, driven by Oghma’s clergy encouraging experimentation and free exchange of ideas across continents.",
			}),
			oghma_600_800_cycles_history: await db.createDeityHistory({
				id: "oghma-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "oghma",
				description: "In the present age, Oghma’s temples stand as neutral sanctuaries. His followers are instrumental in educating the masses and safeguarding truth against manipulation and deliberate falsehoods.",
			}),
			deneir_0_100_cycles_history: await db.createDeityHistory({
				id: "deneir-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "deneir",
				description: "Following The Bringing, Deneir’s clergy raced to document events as they unfolded, believing that accurate records would prevent future chaos born of forgotten truth.",
			}),
			deneir_100_300_cycles_history: await db.createDeityHistory({
				id: "deneir-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "deneir",
				description: "Deneirite monasteries became centers of law and record-keeping. Many early Alabastrian legal codes were penned under his guidance.",
			}),
			deneir_300_600_cycles_history: await db.createDeityHistory({
				id: "deneir-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "deneir",
				description: "A surge in rune magic and glyph-based spellcraft elevated Deneir’s status among mages and artificers, solidifying his role as guardian of written magic.",
			}),
			deneir_600_800_cycles_history: await db.createDeityHistory({
				id: "deneir-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "deneir",
				description: "In the current age, Deneir’s followers act as trusted neutral recorders of treaties, histories, and magical research, often serving as arbiters when truth is disputed.",
			}),
			mask_0_100_cycles_history: await db.createDeityHistory({
				id: "mask-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "mask",
				description: "In the uncertain days after The Bringing, Mask’s faithful became essential scouts, smugglers, and information gatherers. Many cities quietly relied on them despite public condemnation.",
			}),
			mask_100_300_cycles_history: await db.createDeityHistory({
				id: "mask-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "mask",
				description: "Thieves’ guilds formally organized under Mask’s loose patronage, creating networks that spanned continents and traded in secrets as readily as coin.",
			}),
			mask_300_600_cycles_history: await db.createDeityHistory({
				id: "mask-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "mask",
				description: "A golden age of espionage elevated Mask’s influence. Shadow wars between rival states were often decided by Maskan agents before armies ever marched.",
			}),
			mask_600_800_cycles_history: await db.createDeityHistory({
				id: "mask-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "mask",
				description: "In the present era, Mask is regarded with wary tolerance. His worship persists wherever laws are rigid, borders are tight, and secrets are valuable.",
			}),
			helm_0_100_cycles_history: await db.createDeityHistory({
				id: "helm-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "helm",
				description: "After The Bringing, Helm’s followers focused on restoring order amidst widespread chaos. His priests advised leaders on maintaining law and discipline in vulnerable cities.",
			}),
			helm_100_300_cycles_history: await db.createDeityHistory({
				id: "helm-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "helm",
				description: "Helm’s influence expanded with the rise of city-states and organized militias. Watchtowers and fortified temples were constructed to safeguard urban centers.",
			}),
			helm_300_600_cycles_history: await db.createDeityHistory({
				id: "helm-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "helm",
				description: "Helm’s clergy became a respected force in law enforcement, mediating disputes and training guards. Many paladins and knights pledged service to him during regional conflicts.",
			}),
			helm_600_800_cycles_history: await db.createDeityHistory({
				id: "helm-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "helm",
				description: "In the present age, Helm’s faithful continue to safeguard Alabastria. His temples act as centers of civic defense, and his doctrines of vigilance and duty guide soldiers, guards, and lawkeepers across the land.",
			}),
			tyr_0_100_cycles_history: await db.createDeityHistory({
				id: "tyr-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "tyr",
				description: "Following The Bringing, Tyr’s faithful worked to stabilize cities and regions, establishing courts and promoting impartial justice in a chaotic world.",
			}),
			tyr_100_300_cycles_history: await db.createDeityHistory({
				id: "tyr-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "tyr",
				description: "Tyr’s influence expanded as legal codes were formalized across Alabastria. Paladins of Tyr acted as judges, mediators, and protectors of law.",
			}),
			tyr_300_600_cycles_history: await db.createDeityHistory({
				id: "tyr-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "tyr",
				description: "Tyr’s clergy gained recognition as moral arbiters, intervening in disputes between rulers and kingdoms. His doctrines of fairness became a cornerstone of governance.",
			}),
			tyr_600_800_cycles_history: await db.createDeityHistory({
				id: "tyr-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "tyr",
				description: "In the current era, Tyr’s temples serve as centers of law and justice. His followers continue to uphold fairness, mediate conflicts, and punish wrongdoing, ensuring that Tyr’s ideals remain a guiding light in Alabastria.",
			}),
			chauntea_0_100_cycles_history: await db.createDeityHistory({
				id: "chauntea-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "chauntea",
				description: "After The Bringing, Chauntea’s clergy focused on restoring agricultural systems disrupted by chaos. Seeds were planted anew, and knowledge of irrigation and crop rotation was shared widely.",
			}),
			chauntea_100_300_cycles_history: await db.createDeityHistory({
				id: "chauntea-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "chauntea",
				description: "Rural communities grew in size and stability under her guidance. Festivals celebrating planting and harvest became widespread, reinforcing social cohesion.",
			}),
			chauntea_300_600_cycles_history: await db.createDeityHistory({
				id: "chauntea-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "chauntea",
				description: "Her influence extended into urban centers as granaries, gardens, and public farms were established to feed growing populations. Druidic orders allied with her for land stewardship.",
			}),
			chauntea_600_800_cycles_history: await db.createDeityHistory({
				id: "chauntea-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "chauntea",
				description: "In the present era, Chauntea’s followers continue to ensure food security, protect farmland, and celebrate the cycles of growth and harvest. Her teachings influence both peasants and rulers who value the prosperity of the land.",
			}),
			ilmater_0_100_cycles_history: await db.createDeityHistory({
				id: "ilmater-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "ilmater",
				description: "After The Bringing, Ilmater’s followers focused on aiding those devastated by upheaval. Temples acted as emergency relief centers for the displaced and wounded.",
			}),
			ilmater_100_300_cycles_history: await db.createDeityHistory({
				id: "ilmater-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "ilmater",
				description: "Ilmaterite charities and hospitals were formalized, and orders of compassionate monks and clerics spread throughout Alabastria.",
			}),
			ilmater_300_600_cycles_history: await db.createDeityHistory({
				id: "ilmater-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "ilmater",
				description: "His clergy became mediators and healers in war-torn regions. Pilgrimages to sites of past tragedies grew as acts of penance and service.",
			}),
			ilmater_600_800_cycles_history: await db.createDeityHistory({
				id: "ilmater-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "ilmater",
				description: "In the present era, Ilmater’s temples are vital centers for social welfare. His followers continue to alleviate suffering, provide refuge, and advocate for endurance, patience, and hope in the face of adversity.",
			}),
			talona_0_100_cycles_history: await db.createDeityHistory({
				id: "talona-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "talona",
				description: "In the chaos following The Bringing, Talona’s influence spread rapidly through uncontrolled disease and spoiled food supplies. Early cultists flourished among refugees and the dying.",
			}),
			talona_100_300_cycles_history: await db.createDeityHistory({
				id: "talona-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "talona",
				description: "Several devastating plagues were attributed to Talona’s favor or wrath. Her worship became deeply feared, and many cities outlawed even speaking her name.",
			}),
			talona_300_600_cycles_history: await db.createDeityHistory({
				id: "talona-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "talona",
				description: "Talona’s followers refined poisons and diseases into weapons, selling their services to criminals and rival states. Her cults became more organized and secretive.",
			}),
			talona_600_800_cycles_history: await db.createDeityHistory({
				id: "talona-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "talona",
				description: "In the current era, Talona is placated through forbidden rites rather than openly praised. Her cults are blamed for recent outbreaks collectively known as the Ashen Cough and the Black Bloom.",
			}),
			tymora_0_100_cycles_history: await db.createDeityHistory({
				id: "tymora-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "tymora",
				description: "Gained followers among those who took risks to survive in the new world, with her temples serving as centers of hope and luck.",
			}),
			tymora_100_300_cycles_history: await db.createDeityHistory({
				id: "tymora-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "tymora",
				description: "Became the patron of early adventurers and explorers, with her temples serving as gathering places for those seeking fortune and adventure.",
			}),
			tymora_300_600_cycles_history: await db.createDeityHistory({
				id: "tymora-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "tymora",
				description: "Gained significant influence among the Huntbound Order and other adventuring groups, with her temples becoming centers of luck and fortune.",
			}),
			tymora_600_800_cycles_history: await db.createDeityHistory({
				id: "tymora-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "tymora",
				description: "Currently maintains the most extensive network of luck and fortune in Alabastria, with her followers being the primary patrons of adventurers and risk takers.",
			}),
			beshaba_0_100_cycles_history: await db.createDeityHistory({
				id: "beshaba-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "beshaba",
				description: "Gained followers among those who suffered the most from The Bringing, with her temples serving as places of mourning and curse work.",
			}),
			beshaba_100_300_cycles_history: await db.createDeityHistory({
				id: "beshaba-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "beshaba",
				description: "Established a network of cursed shrines and accident sites, with her followers becoming the primary curse workers and hex specialists across all continents.",
			}),
			beshaba_300_600_cycles_history: await db.createDeityHistory({
				id: "beshaba-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "beshaba",
				description: "Became the patron of the cursed and wronged, with her temples serving as centers of curse work and misfortune magic.",
			}),
			beshaba_600_800_cycles_history: await db.createDeityHistory({
				id: "beshaba-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "beshaba",
				description: "Currently maintains the most extensive network of curse work and misfortune in Alabastria, with her followers being the primary curse workers and hex specialists.",
			}),
			kelemvor_0_100_cycles_history: await db.createDeityHistory({
				id: "kelemvor-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "kelemvor",
				description: "Gained followers among those who dealt with the many deaths caused by The Bringing, with his temples serving as centers of death and judgment.",
			}),
			kelemvor_100_300_cycles_history: await db.createDeityHistory({
				id: "kelemvor-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "kelemvor",
				description: "Became the primary patron of death and judgment across all continents, with his temples serving as centers of justice and the dead.",
			}),
			kelemvor_300_600_cycles_history: await db.createDeityHistory({
				id: "kelemvor-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "kelemvor",
				description: "Established the most extensive network of death and judgment in Alabastria, with his followers being the primary judges and undertakers across all continents.",
			}),
			kelemvor_600_800_cycles_history: await db.createDeityHistory({
				id: "kelemvor-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "kelemvor",
				description: "Currently maintains the most extensive network of death and judgment in Alabastria, with his followers being the primary judges and undertakers across all continents.",
			}),
			bane_0_100_cycles_history: await db.createDeityHistory({
				id: "bane-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "bane",
				description: "Gained followers among those who sought to control the chaos of The Bringing, with his temples serving as centers of tyranny and conquest.",
			}),
			bane_100_300_cycles_history: await db.createDeityHistory({
				id: "bane-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "bane",
				description: "Became the patron of many ruling classes and military leaders, with his temples serving as centers of power and control across all continents.",
			}),
			bane_300_600_cycles_history: await db.createDeityHistory({
				id: "bane-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "bane",
				description: "Established a network of tyrannical rule and military conquest, with his followers being the primary tyrants and conquerors across all continents.",
			}),
			bane_600_800_cycles_history: await db.createDeityHistory({
				id: "bane-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "bane",
				description: "Currently maintains the most extensive network of tyranny and conquest in Alabastria, with his followers being the primary tyrants and conquerors across all continents.",
			}),
			myrkul_0_100_cycles_history: await db.createDeityHistory({
				id: "myrkul-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "myrkul",
				description: "Gained followers among those who sought to cheat death in the new world, with his temples serving as centers of necromancy and undeath.",
			}),
			myrkul_100_300_cycles_history: await db.createDeityHistory({
				id: "myrkul-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "myrkul",
				description: "Became the patron of necromancers and undead across all continents, with his temples serving as centers of death magic and undeath.",
			}),
			myrkul_300_600_cycles_history: await db.createDeityHistory({
				id: "myrkul-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "myrkul",
				description: "Established a network of necromancy and undeath across all continents, with his followers being the primary necromancers and undead across all continents.",
			}),
			myrkul_600_800_cycles_history: await db.createDeityHistory({
				id: "myrkul-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "myrkul",
				description: "Currently maintains the most extensive network of necromancy and undeath in Alabastria, with his followers being the primary necromancers and undead across all continents.",
			}),
			jergal_0_100_cycles_history: await db.createDeityHistory({
				id: "jergal-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "jergal",
				description: "Gained followers among those who sought to record the history of The Bringing, with his temples serving as centers of record keeping and knowledge.",
			}),
			jergal_100_300_cycles_history: await db.createDeityHistory({
				id: "jergal-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "jergal",
				description: "Became the patron of scribes and historians across all continents, with his temples serving as centers of record keeping and knowledge.",
			}),
			jergal_300_600_cycles_history: await db.createDeityHistory({
				id: "jergal-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "jergal",
				description: "Established the most extensive network of record keeping and knowledge in Alabastria, with his followers being the primary scribes and historians across all continents.",
			}),
			jergal_600_800_cycles_history: await db.createDeityHistory({
				id: "jergal-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "jergal",
				description: "Currently maintains the most extensive network of record keeping and knowledge in Alabastria, with his followers being the primary scribes and historians across all continents.",
			}),
			moradin_0_100_cycles_history: await db.createDeityHistory({
				id: "moradin-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "moradin",
				description: "Gained followers among dwarven settlers who sought to establish their craft in the new world, with his temples serving as centers of craftsmanship and creation.",
			}),
			moradin_100_300_cycles_history: await db.createDeityHistory({
				id: "moradin-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "moradin",
				description: "Became the patron of dwarven communities across all continents, with his temples serving as centers of craftsmanship and creation.",
			}),
			moradin_300_600_cycles_history: await db.createDeityHistory({
				id: "moradin-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "moradin",
				description: "Established the most extensive network of craftsmanship and creation in Alabastria, with his followers being the primary craftsmen and creators across all continents.",
			}),
			moradin_600_800_cycles_history: await db.createDeityHistory({
				id: "moradin-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "moradin",
				description: "Currently maintains the most extensive network of craftsmanship and creation in Alabastria, with his followers being the primary craftsmen and creators across all continents.",
			}),
			berronar_truesilver_0_100_cycles_history: await db.createDeityHistory({
				id: "berronar-truesilver-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "berronar-truesilver",
				description: "Gained followers among dwarven families who sought to establish their homes in the new world, with her temples serving as centers of family and protection.",
			}),
			berronar_truesilver_100_300_cycles_history: await db.createDeityHistory({
				id: "berronar-truesilver-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "berronar-truesilver",
				description: "Became the patron of dwarven families across all continents, with her temples serving as centers of family and protection.",
			}),
			berronar_truesilver_300_600_cycles_history: await db.createDeityHistory({
				id: "berronar-truesilver-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "berronar-truesilver",
				description: "Established the most extensive network of family and protection in Alabastria, with her followers being the primary protectors and home keepers across all continents.",
			}),
			berronar_truesilver_600_800_cycles_history: await db.createDeityHistory({
				id: "berronar-truesilver-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "berronar-truesilver",
				description: "Currently maintains the most extensive network of family and protection in Alabastria, with her followers being the primary protectors and home keepers across all continents.",
			}),
			clangeddin_silverbeard_0_100_cycles_history: await db.createDeityHistory({
				id: "clangeddin-silverbeard-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "clangeddin-silverbeard",
				description: "Gained followers among dwarven warriors who sought to protect their people in the new world, with his temples serving as centers of battle and honor.",
			}),
			clangeddin_silverbeard_100_300_cycles_history: await db.createDeityHistory({
				id: "clangeddin-silverbeard-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "clangeddin-silverbeard",
				description: "Became the patron of dwarven warriors across all continents, with his temples serving as centers of battle and honor.",
			}),
			clangeddin_silverbeard_300_600_cycles_history: await db.createDeityHistory({
				id: "clangeddin-silverbeard-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "clangeddin-silverbeard",
				description: "Established the most extensive network of battle and honor in Alabastria, with his followers being the primary warriors and honor seekers across all continents.",
			}),
			clangeddin_silverbeard_600_800_cycles_history: await db.createDeityHistory({
				id: "clangeddin-silverbeard-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "clangeddin-silverbeard",
				description: "Currently maintains the most extensive network of battle and honor in Alabastria, with his followers being the primary warriors and honor seekers across all continents.",
			}),
			dugmaren_brightmantle_0_100_cycles_history: await db.createDeityHistory({
				id: "dugmaren-brightmantle-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "dugmaren-brightmantle",
				description: "Gained followers among dwarven inventors who sought to adapt their technology to the new world, with his temples serving as centers of discovery and innovation.",
			}),
			dugmaren_brightmantle_100_300_cycles_history: await db.createDeityHistory({
				id: "dugmaren-brightmantle-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "dugmaren-brightmantle",
				description: "Became the patron of dwarven inventors across all continents, with his temples serving as centers of discovery and innovation.",
			}),
			dugmaren_brightmantle_300_600_cycles_history: await db.createDeityHistory({
				id: "dugmaren-brightmantle-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "dugmaren-brightmantle",
				description: "Established the most extensive network of discovery and innovation in Alabastria, with his followers being the primary inventors and researchers across all continents.",
			}),
			dugmaren_brightmantle_600_800_cycles_history: await db.createDeityHistory({
				id: "dugmaren-brightmantle-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "dugmaren-brightmantle",
				description: "Currently maintains the most extensive network of discovery and innovation in Alabastria, with his followers being the primary inventors and researchers across all continents.",
			}),
			vergadain_0_100_cycles_history: await db.createDeityHistory({
				id: "vergadain-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "vergadain",
				description: "Gained followers among dwarven merchants who sought to establish trade in the new world, with his temples serving as centers of wealth and trade.",
			}),
			vergadain_100_300_cycles_history: await db.createDeityHistory({
				id: "vergadain-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "vergadain",
				description: "Became the patron of dwarven merchants across all continents, with his temples serving as centers of wealth and trade.",
			}),
			vergadain_300_600_cycles_history: await db.createDeityHistory({
				id: "vergadain-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "vergadain",
				description: "Established the most extensive network of wealth and trade in Alabastria, with his followers being the primary merchants and traders across all continents.",
			}),
			vergadain_600_800_cycles_history: await db.createDeityHistory({
				id: "vergadain-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "vergadain",
				description: "Currently maintains the most extensive network of wealth and trade in Alabastria, with his followers being the primary merchants and traders across all continents.",
			}),
			corellon_larethian_0_100_cycles_history: await db.createDeityHistory({
				id: "corellon-larethian-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "corellon-larethian",
				description: "Gained followers among elven settlers who sought to establish their art and magic in the new world, with his temples serving as centers of creativity and magic.",
			}),
			corellon_larethian_100_300_cycles_history: await db.createDeityHistory({
				id: "corellon-larethian-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "corellon-larethian",
				description: "Became the patron of elven communities across all continents, with his temples serving as centers of art and magic.",
			}),
			corellon_larethian_300_600_cycles_history: await db.createDeityHistory({
				id: "corellon-larethian-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "corellon-larethian",
				description: "Established the most prestigious magical and artistic institutions in Alabastria, with his followers being the primary creators and magical researchers across all continents.",
			}),
			corellon_larethian_600_800_cycles_history: await db.createDeityHistory({
				id: "corellon-larethian-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "corellon-larethian",
				description: "Currently maintains the most extensive network of art and magic in Alabastria, with his followers being the primary artists and magical researchers across all continents.",
			}),
			sehanine_moonbow_0_100_cycles_history: await db.createDeityHistory({
				id: "sehanine-moonbow-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "sehanine-moonbow",
				description: "Gained followers among elven rangers who sought to explore the new world, with her temples serving as centers of dreams and journeys.",
			}),
			sehanine_moonbow_100_300_cycles_history: await db.createDeityHistory({
				id: "sehanine-moonbow-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "sehanine-moonbow",
				description: "Became the patron of elven rangers across all continents, with her temples serving as centers of exploration and dreams.",
			}),
			sehanine_moonbow_300_600_cycles_history: await db.createDeityHistory({
				id: "sehanine-moonbow-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "sehanine-moonbow",
				description: "Established the most extensive network of exploration and dreams in Alabastria, with her followers being the primary rangers and explorers across all continents.",
			}),
			sehanine_moonbow_600_800_cycles_history: await db.createDeityHistory({
				id: "sehanine-moonbow-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "sehanine-moonbow",
				description: "Currently maintains the most extensive network of exploration and dreams in Alabastria, with her followers being the primary rangers and explorers across all continents.",
			}),
			hanali_celanil_0_100_cycles_history: await db.createDeityHistory({
				id: "hanali-celanil-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "hanali-celanil",
				description: "Gained followers among elven communities who sought to maintain their culture of beauty and love in the new world, with her temples serving as centers of love and beauty.",
			}),
			hanali_celanil_100_300_cycles_history: await db.createDeityHistory({
				id: "hanali-celanil-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "hanali-celanil",
				description: "Became the patron of elven communities across all continents, with her temples serving as centers of love and beauty.",
			}),
			hanali_celanil_300_600_cycles_history: await db.createDeityHistory({
				id: "hanali-celanil-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "hanali-celanil",
				description: "Established the most extensive network of love and beauty in Alabastria, with her followers being the primary artists and lovers across all continents.",
			}),
			hanali_celanil_600_800_cycles_history: await db.createDeityHistory({
				id: "hanali-celanil-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "hanali-celanil",
				description: "Currently maintains the most extensive network of love and beauty in Alabastria, with her followers being the primary artists and lovers across all continents.",
			}),
			labelas_enoreth_0_100_cycles_history: await db.createDeityHistory({
				id: "labelas-enoreth-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "labelas-enoreth",
				description: "Gained followers among elven scholars who sought to record the history of The Bringing, with his temples serving as centers of time and wisdom.",
			}),
			labelas_enoreth_100_300_cycles_history: await db.createDeityHistory({
				id: "labelas-enoreth-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "labelas-enoreth",
				description: "Became the patron of elven scholars across all continents, with his temples serving as centers of time and wisdom.",
			}),
			labelas_enoreth_300_600_cycles_history: await db.createDeityHistory({
				id: "labelas-enoreth-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "labelas-enoreth",
				description: "Established the most extensive network of time and wisdom in Alabastria, with his followers being the primary historians and scholars across all continents.",
			}),
			labelas_enoreth_600_800_cycles_history: await db.createDeityHistory({
				id: "labelas-enoreth-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "labelas-enoreth",
				description: "Currently maintains the most extensive network of time and wisdom in Alabastria, with his followers being the primary historians and scholars across all continents.",
			}),
			solonor_thelandira_0_100_cycles_history: await db.createDeityHistory({
				id: "solonor-thelandira-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "solonor-thelandira",
				description: "Gained followers among elven rangers who sought to hunt and explore the new world, with his temples serving as centers of archery and hunting.",
			}),
			solonor_thelandira_100_300_cycles_history: await db.createDeityHistory({
				id: "solonor-thelandira-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "solonor-thelandira",
				description: "Became the patron of elven rangers across all continents, with his temples serving as centers of archery and hunting.",
			}),
			solonor_thelandira_300_600_cycles_history: await db.createDeityHistory({
				id: "solonor-thelandira-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "solonor-thelandira",
				description: "Established the most extensive network of archery and hunting in Alabastria, with his followers being the primary rangers and hunters across all continents.",
			}),
			solonor_thelandira_600_800_cycles_history: await db.createDeityHistory({
				id: "solonor-thelandira-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "solonor-thelandira",
				description: "Currently maintains the most extensive network of archery and hunting in Alabastria, with his followers being the primary rangers and hunters across all continents.",
			}),
			lolth_0_100_cycles_history: await db.createDeityHistory({
				id: "lolth-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "lolth",
				description: "Gained followers among dark elves who sought to establish their power in the new world, with her temples serving as centers of deception and domination.",
			}),
			lolth_100_300_cycles_history: await db.createDeityHistory({
				id: "lolth-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "lolth",
				description: "Became the patron of dark elves across all continents, with her temples serving as centers of deception and domination.",
			}),
			lolth_300_600_cycles_history: await db.createDeityHistory({
				id: "lolth-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "lolth",
				description: "Established a network of deception and domination across all continents, with her followers being the primary deceivers and power seekers across all continents.",
			}),
			lolth_600_800_cycles_history: await db.createDeityHistory({
				id: "lolth-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "lolth",
				description: "Currently maintains a network of deception and domination in Alabastria, with her followers being the primary deceivers and power seekers across all continents.",
			}),
			vhaeraun_0_100_cycles_history: await db.createDeityHistory({
				id: "vhaeraun-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "vhaeraun",
				description: "Gained followers among dark elves who sought to rebel against the new world order, with his temples serving as centers of shadow and rebellion.",
			}),
			vhaeraun_100_300_cycles_history: await db.createDeityHistory({
				id: "vhaeraun-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "vhaeraun",
				description: "Became the patron of dark elves across all continents, with his temples serving as centers of shadow and rebellion.",
			}),
			vhaeraun_300_600_cycles_history: await db.createDeityHistory({
				id: "vhaeraun-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "vhaeraun",
				description: "Established a network of shadow and rebellion across all continents, with his followers being the primary rebels and thieves across all continents.",
			}),
			vhaeraun_600_800_cycles_history: await db.createDeityHistory({
				id: "vhaeraun-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "vhaeraun",
				description: "Currently maintains a network of shadow and rebellion in Alabastria, with his followers being the primary rebels and thieves across all continents.",
			}),
			eilistraee_0_100_cycles_history: await db.createDeityHistory({
				id: "eilistraee-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "eilistraee",
				description: "Gained followers among dark elves who sought redemption in the new world, with her temples serving as centers of song and redemption.",
			}),
			eilistraee_100_300_cycles_history: await db.createDeityHistory({
				id: "eilistraee-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "eilistraee",
				description: "Became the patron of redeemed dark elves across all continents, with her temples serving as centers of song and redemption.",
			}),
			eilistraee_300_600_cycles_history: await db.createDeityHistory({
				id: "eilistraee-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "eilistraee",
				description: "Established a network of song and redemption across all continents, with her followers being the primary bards and redemption seekers across all continents.",
			}),
			eilistraee_600_800_cycles_history: await db.createDeityHistory({
				id: "eilistraee-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "eilistraee",
				description: "Currently maintains a network of song and redemption in Alabastria, with her followers being the primary bards and redemption seekers across all continents.",
			}),
			gruumsh_one_eye_0_100_cycles_history: await db.createDeityHistory({
				id: "gruumsh-one-eye-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "gruumsh-one-eye",
				description: "undefined",
			}),
			gruumsh_one_eye_100_300_cycles_history: await db.createDeityHistory({
				id: "gruumsh-one-eye-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "gruumsh-one-eye",
				description: "undefined",
			}),
			gruumsh_one_eye_300_600_cycles_history: await db.createDeityHistory({
				id: "gruumsh-one-eye-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "gruumsh-one-eye",
				description: "undefined",
			}),
			gruumsh_one_eye_600_800_cycles_history: await db.createDeityHistory({
				id: "gruumsh-one-eye-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "gruumsh-one-eye",
				description: "undefined",
			}),
			luthic_0_100_cycles_history: await db.createDeityHistory({
				id: "luthic-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "luthic",
				description: "undefined",
			}),
			luthic_100_300_cycles_history: await db.createDeityHistory({
				id: "luthic-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "luthic",
				description: "undefined",
			}),
			luthic_300_600_cycles_history: await db.createDeityHistory({
				id: "luthic-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "luthic",
				description: "undefined",
			}),
			luthic_600_800_cycles_history: await db.createDeityHistory({
				id: "luthic-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "luthic",
				description: "undefined",
			}),
			ilneval_0_100_cycles_history: await db.createDeityHistory({
				id: "ilneval-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "ilneval",
				description: "undefined",
			}),
			ilneval_100_300_cycles_history: await db.createDeityHistory({
				id: "ilneval-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "ilneval",
				description: "undefined",
			}),
			ilneval_300_600_cycles_history: await db.createDeityHistory({
				id: "ilneval-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "ilneval",
				description: "undefined",
			}),
			ilneval_600_800_cycles_history: await db.createDeityHistory({
				id: "ilneval-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "ilneval",
				description: "undefined",
			}),
			bahgtru_0_100_cycles_history: await db.createDeityHistory({
				id: "bahgtru-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "bahgtru",
				description: "undefined",
			}),
			bahgtru_100_300_cycles_history: await db.createDeityHistory({
				id: "bahgtru-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "bahgtru",
				description: "undefined",
			}),
			bahgtru_300_600_cycles_history: await db.createDeityHistory({
				id: "bahgtru-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "bahgtru",
				description: "undefined",
			}),
			bahgtru_600_800_cycles_history: await db.createDeityHistory({
				id: "bahgtru-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "bahgtru",
				description: "undefined",
			}),
			shargaas_0_100_cycles_history: await db.createDeityHistory({
				id: "shargaas-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "shargaas",
				description: "undefined",
			}),
			shargaas_100_300_cycles_history: await db.createDeityHistory({
				id: "shargaas-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "shargaas",
				description: "undefined",
			}),
			shargaas_300_600_cycles_history: await db.createDeityHistory({
				id: "shargaas-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "shargaas",
				description: "undefined",
			}),
			shargaas_600_800_cycles_history: await db.createDeityHistory({
				id: "shargaas-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "shargaas",
				description: "undefined",
			}),
			bahamut_0_100_cycles_history: await db.createDeityHistory({
				id: "bahamut-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "bahamut",
				description: "undefined",
			}),
			bahamut_100_300_cycles_history: await db.createDeityHistory({
				id: "bahamut-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "bahamut",
				description: "undefined",
			}),
			bahamut_300_600_cycles_history: await db.createDeityHistory({
				id: "bahamut-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "bahamut",
				description: "undefined",
			}),
			bahamut_600_800_cycles_history: await db.createDeityHistory({
				id: "bahamut-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "bahamut",
				description: "undefined",
			}),
			tiamat_0_100_cycles_history: await db.createDeityHistory({
				id: "tiamat-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "tiamat",
				description: "undefined",
			}),
			tiamat_100_300_cycles_history: await db.createDeityHistory({
				id: "tiamat-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "tiamat",
				description: "undefined",
			}),
			tiamat_300_600_cycles_history: await db.createDeityHistory({
				id: "tiamat-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "tiamat",
				description: "undefined",
			}),
			tiamat_600_800_cycles_history: await db.createDeityHistory({
				id: "tiamat-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "tiamat",
				description: "undefined",
			}),
			akadi_0_100_cycles_history: await db.createDeityHistory({
				id: "akadi-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "akadi",
				description: "undefined",
			}),
			akadi_100_300_cycles_history: await db.createDeityHistory({
				id: "akadi-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "akadi",
				description: "undefined",
			}),
			akadi_300_600_cycles_history: await db.createDeityHistory({
				id: "akadi-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "akadi",
				description: "undefined",
			}),
			akadi_600_800_cycles_history: await db.createDeityHistory({
				id: "akadi-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "akadi",
				description: "undefined",
			}),
			grumbar_0_100_cycles_history: await db.createDeityHistory({
				id: "grumbar-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "grumbar",
				description: "undefined",
			}),
			grumbar_100_300_cycles_history: await db.createDeityHistory({
				id: "grumbar-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "grumbar",
				description: "undefined",
			}),
			grumbar_300_600_cycles_history: await db.createDeityHistory({
				id: "grumbar-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "grumbar",
				description: "undefined",
			}),
			grumbar_600_800_cycles_history: await db.createDeityHistory({
				id: "grumbar-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "grumbar",
				description: "undefined",
			}),
			kossuth_0_100_cycles_history: await db.createDeityHistory({
				id: "kossuth-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "kossuth",
				description: "undefined",
			}),
			kossuth_100_300_cycles_history: await db.createDeityHistory({
				id: "kossuth-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "kossuth",
				description: "undefined",
			}),
			kossuth_300_600_cycles_history: await db.createDeityHistory({
				id: "kossuth-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "kossuth",
				description: "undefined",
			}),
			kossuth_600_800_cycles_history: await db.createDeityHistory({
				id: "kossuth-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "kossuth",
				description: "undefined",
			}),
			istishia_0_100_cycles_history: await db.createDeityHistory({
				id: "istishia-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "istishia",
				description: "undefined",
			}),
			istishia_100_300_cycles_history: await db.createDeityHistory({
				id: "istishia-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "istishia",
				description: "undefined",
			}),
			istishia_300_600_cycles_history: await db.createDeityHistory({
				id: "istishia-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "istishia",
				description: "undefined",
			}),
			istishia_600_800_cycles_history: await db.createDeityHistory({
				id: "istishia-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "istishia",
				description: "undefined",
			}),
			the_raven_queen_0_100_cycles_history: await db.createDeityHistory({
				id: "the-raven-queen-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "the-raven-queen",
				description: "undefined",
			}),
			the_raven_queen_100_300_cycles_history: await db.createDeityHistory({
				id: "the-raven-queen-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "the-raven-queen",
				description: "undefined",
			}),
			the_raven_queen_300_600_cycles_history: await db.createDeityHistory({
				id: "the-raven-queen-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "the-raven-queen",
				description: "undefined",
			}),
			the_raven_queen_600_800_cycles_history: await db.createDeityHistory({
				id: "the-raven-queen-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "the-raven-queen",
				description: "undefined",
			}),
			asmodeus_0_100_cycles_history: await db.createDeityHistory({
				id: "asmodeus-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "asmodeus",
				description: "undefined",
			}),
			asmodeus_100_300_cycles_history: await db.createDeityHistory({
				id: "asmodeus-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "asmodeus",
				description: "undefined",
			}),
			asmodeus_300_600_cycles_history: await db.createDeityHistory({
				id: "asmodeus-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "asmodeus",
				description: "undefined",
			}),
			asmodeus_600_800_cycles_history: await db.createDeityHistory({
				id: "asmodeus-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "asmodeus",
				description: "undefined",
			}),
			yondalla_0_100_cycles_history: await db.createDeityHistory({
				id: "yondalla-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "yondalla",
				description: "undefined",
			}),
			yondalla_100_300_cycles_history: await db.createDeityHistory({
				id: "yondalla-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "yondalla",
				description: "undefined",
			}),
			yondalla_300_600_cycles_history: await db.createDeityHistory({
				id: "yondalla-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "yondalla",
				description: "undefined",
			}),
			yondalla_600_800_cycles_history: await db.createDeityHistory({
				id: "yondalla-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "yondalla",
				description: "undefined",
			}),
			arvoreen_0_100_cycles_history: await db.createDeityHistory({
				id: "arvoreen-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "arvoreen",
				description: "undefined",
			}),
			arvoreen_100_300_cycles_history: await db.createDeityHistory({
				id: "arvoreen-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "arvoreen",
				description: "undefined",
			}),
			arvoreen_300_600_cycles_history: await db.createDeityHistory({
				id: "arvoreen-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "arvoreen",
				description: "undefined",
			}),
			arvoreen_600_800_cycles_history: await db.createDeityHistory({
				id: "arvoreen-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "arvoreen",
				description: "undefined",
			}),
			cyrrollalee_0_100_cycles_history: await db.createDeityHistory({
				id: "cyrrollalee-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "cyrrollalee",
				description: "undefined",
			}),
			cyrrollalee_100_300_cycles_history: await db.createDeityHistory({
				id: "cyrrollalee-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "cyrrollalee",
				description: "undefined",
			}),
			cyrrollalee_300_600_cycles_history: await db.createDeityHistory({
				id: "cyrrollalee-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "cyrrollalee",
				description: "undefined",
			}),
			cyrrollalee_600_800_cycles_history: await db.createDeityHistory({
				id: "cyrrollalee-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "cyrrollalee",
				description: "undefined",
			}),
			urogalan_0_100_cycles_history: await db.createDeityHistory({
				id: "urogalan-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "urogalan",
				description: "undefined",
			}),
			urogalan_100_300_cycles_history: await db.createDeityHistory({
				id: "urogalan-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "urogalan",
				description: "undefined",
			}),
			urogalan_300_600_cycles_history: await db.createDeityHistory({
				id: "urogalan-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "urogalan",
				description: "undefined",
			}),
			urogalan_600_800_cycles_history: await db.createDeityHistory({
				id: "urogalan-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "urogalan",
				description: "undefined",
			}),
			garl_glittergold_0_100_cycles_history: await db.createDeityHistory({
				id: "garl-glittergold-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "garl-glittergold",
				description: "undefined",
			}),
			garl_glittergold_100_300_cycles_history: await db.createDeityHistory({
				id: "garl-glittergold-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "garl-glittergold",
				description: "undefined",
			}),
			garl_glittergold_300_600_cycles_history: await db.createDeityHistory({
				id: "garl-glittergold-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "garl-glittergold",
				description: "undefined",
			}),
			garl_glittergold_600_800_cycles_history: await db.createDeityHistory({
				id: "garl-glittergold-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "garl-glittergold",
				description: "undefined",
			}),
			baervan_wildwanderer_0_100_cycles_history: await db.createDeityHistory({
				id: "baervan-wildwanderer-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "baervan-wildwanderer",
				description: "undefined",
			}),
			baervan_wildwanderer_100_300_cycles_history: await db.createDeityHistory({
				id: "baervan-wildwanderer-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "baervan-wildwanderer",
				description: "undefined",
			}),
			baervan_wildwanderer_300_600_cycles_history: await db.createDeityHistory({
				id: "baervan-wildwanderer-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "baervan-wildwanderer",
				description: "undefined",
			}),
			baervan_wildwanderer_600_800_cycles_history: await db.createDeityHistory({
				id: "baervan-wildwanderer-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "baervan-wildwanderer",
				description: "undefined",
			}),
			baravar_cloakshadow_0_100_cycles_history: await db.createDeityHistory({
				id: "baravar-cloakshadow-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "baravar-cloakshadow",
				description: "undefined",
			}),
			baravar_cloakshadow_100_300_cycles_history: await db.createDeityHistory({
				id: "baravar-cloakshadow-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "baravar-cloakshadow",
				description: "undefined",
			}),
			baravar_cloakshadow_300_600_cycles_history: await db.createDeityHistory({
				id: "baravar-cloakshadow-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "baravar-cloakshadow",
				description: "undefined",
			}),
			baravar_cloakshadow_600_800_cycles_history: await db.createDeityHistory({
				id: "baravar-cloakshadow-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "baravar-cloakshadow",
				description: "undefined",
			}),
			segojan_earthcaller_0_100_cycles_history: await db.createDeityHistory({
				id: "segojan-earthcaller-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "segojan-earthcaller",
				description: "undefined",
			}),
			segojan_earthcaller_100_300_cycles_history: await db.createDeityHistory({
				id: "segojan-earthcaller-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "segojan-earthcaller",
				description: "undefined",
			}),
			segojan_earthcaller_300_600_cycles_history: await db.createDeityHistory({
				id: "segojan-earthcaller-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "segojan-earthcaller",
				description: "undefined",
			}),
			segojan_earthcaller_600_800_cycles_history: await db.createDeityHistory({
				id: "segojan-earthcaller-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "segojan-earthcaller",
				description: "undefined",
			}),
			maglubiyet_0_100_cycles_history: await db.createDeityHistory({
				id: "maglubiyet-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "maglubiyet",
				description: "undefined",
			}),
			maglubiyet_100_300_cycles_history: await db.createDeityHistory({
				id: "maglubiyet-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "maglubiyet",
				description: "undefined",
			}),
			maglubiyet_300_600_cycles_history: await db.createDeityHistory({
				id: "maglubiyet-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "maglubiyet",
				description: "undefined",
			}),
			maglubiyet_600_800_cycles_history: await db.createDeityHistory({
				id: "maglubiyet-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "maglubiyet",
				description: "undefined",
			}),
			khurgorbaeyag_0_100_cycles_history: await db.createDeityHistory({
				id: "khurgorbaeyag-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "khurgorbaeyag",
				description: "undefined",
			}),
			khurgorbaeyag_100_300_cycles_history: await db.createDeityHistory({
				id: "khurgorbaeyag-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "khurgorbaeyag",
				description: "undefined",
			}),
			khurgorbaeyag_300_600_cycles_history: await db.createDeityHistory({
				id: "khurgorbaeyag-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "khurgorbaeyag",
				description: "undefined",
			}),
			khurgorbaeyag_600_800_cycles_history: await db.createDeityHistory({
				id: "khurgorbaeyag-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "khurgorbaeyag",
				description: "undefined",
			}),
			bargrivyek_0_100_cycles_history: await db.createDeityHistory({
				id: "bargrivyek-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "bargrivyek",
				description: "undefined",
			}),
			bargrivyek_100_300_cycles_history: await db.createDeityHistory({
				id: "bargrivyek-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "bargrivyek",
				description: "undefined",
			}),
			bargrivyek_300_600_cycles_history: await db.createDeityHistory({
				id: "bargrivyek-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "bargrivyek",
				description: "undefined",
			}),
			bargrivyek_600_800_cycles_history: await db.createDeityHistory({
				id: "bargrivyek-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "bargrivyek",
				description: "undefined",
			}),
			nomog_geaya_0_100_cycles_history: await db.createDeityHistory({
				id: "nomog-geaya-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "nomog-geaya",
				description: "undefined",
			}),
			nomog_geaya_100_300_cycles_history: await db.createDeityHistory({
				id: "nomog-geaya-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "nomog-geaya",
				description: "undefined",
			}),
			nomog_geaya_300_600_cycles_history: await db.createDeityHistory({
				id: "nomog-geaya-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "nomog-geaya",
				description: "undefined",
			}),
			nomog_geaya_600_800_cycles_history: await db.createDeityHistory({
				id: "nomog-geaya-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "nomog-geaya",
				description: "undefined",
			}),
			kurtulmak_0_100_cycles_history: await db.createDeityHistory({
				id: "kurtulmak-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "kurtulmak",
				description: "undefined",
			}),
			kurtulmak_100_300_cycles_history: await db.createDeityHistory({
				id: "kurtulmak-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "kurtulmak",
				description: "undefined",
			}),
			kurtulmak_300_600_cycles_history: await db.createDeityHistory({
				id: "kurtulmak-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "kurtulmak",
				description: "undefined",
			}),
			kurtulmak_600_800_cycles_history: await db.createDeityHistory({
				id: "kurtulmak-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "kurtulmak",
				description: "undefined",
			}),
			gith_0_100_cycles_history: await db.createDeityHistory({
				id: "gith-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "gith",
				description: "undefined",
			}),
			gith_100_300_cycles_history: await db.createDeityHistory({
				id: "gith-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "gith",
				description: "undefined",
			}),
			gith_300_600_cycles_history: await db.createDeityHistory({
				id: "gith-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "gith",
				description: "undefined",
			}),
			gith_600_800_cycles_history: await db.createDeityHistory({
				id: "gith-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "gith",
				description: "undefined",
			}),
			vlaakith_0_100_cycles_history: await db.createDeityHistory({
				id: "vlaakith-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "vlaakith",
				description: "undefined",
			}),
			vlaakith_100_300_cycles_history: await db.createDeityHistory({
				id: "vlaakith-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "vlaakith",
				description: "undefined",
			}),
			vlaakith_300_600_cycles_history: await db.createDeityHistory({
				id: "vlaakith-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "vlaakith",
				description: "undefined",
			}),
			vlaakith_600_800_cycles_history: await db.createDeityHistory({
				id: "vlaakith-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "vlaakith",
				description: "undefined",
			}),
			sseth_0_100_cycles_history: await db.createDeityHistory({
				id: "sseth-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "sseth",
				description: "undefined",
			}),
			sseth_100_300_cycles_history: await db.createDeityHistory({
				id: "sseth-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "sseth",
				description: "undefined",
			}),
			sseth_300_600_cycles_history: await db.createDeityHistory({
				id: "sseth-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "sseth",
				description: "undefined",
			}),
			sseth_600_800_cycles_history: await db.createDeityHistory({
				id: "sseth-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "sseth",
				description: "undefined",
			}),
			merrshaulk_0_100_cycles_history: await db.createDeityHistory({
				id: "merrshaulk-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "merrshaulk",
				description: "undefined",
			}),
			merrshaulk_100_300_cycles_history: await db.createDeityHistory({
				id: "merrshaulk-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "merrshaulk",
				description: "undefined",
			}),
			merrshaulk_300_600_cycles_history: await db.createDeityHistory({
				id: "merrshaulk-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "merrshaulk",
				description: "undefined",
			}),
			merrshaulk_600_800_cycles_history: await db.createDeityHistory({
				id: "merrshaulk-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "merrshaulk",
				description: "undefined",
			}),
			umberlee_0_100_cycles_history: await db.createDeityHistory({
				id: "umberlee-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "umberlee",
				description: "undefined",
			}),
			umberlee_100_300_cycles_history: await db.createDeityHistory({
				id: "umberlee-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "umberlee",
				description: "undefined",
			}),
			umberlee_300_600_cycles_history: await db.createDeityHistory({
				id: "umberlee-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "umberlee",
				description: "undefined",
			}),
			umberlee_600_800_cycles_history: await db.createDeityHistory({
				id: "umberlee-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "umberlee",
				description: "undefined",
			}),
			valkur_0_100_cycles_history: await db.createDeityHistory({
				id: "valkur-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "valkur",
				description: "undefined",
			}),
			valkur_100_300_cycles_history: await db.createDeityHistory({
				id: "valkur-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "valkur",
				description: "undefined",
			}),
			valkur_300_600_cycles_history: await db.createDeityHistory({
				id: "valkur-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "valkur",
				description: "undefined",
			}),
			valkur_600_800_cycles_history: await db.createDeityHistory({
				id: "valkur-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "valkur",
				description: "undefined",
			}),
			deep_sashelas_0_100_cycles_history: await db.createDeityHistory({
				id: "deep-sashelas-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "deep-sashelas",
				description: "undefined",
			}),
			deep_sashelas_100_300_cycles_history: await db.createDeityHistory({
				id: "deep-sashelas-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "deep-sashelas",
				description: "undefined",
			}),
			deep_sashelas_300_600_cycles_history: await db.createDeityHistory({
				id: "deep-sashelas-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "deep-sashelas",
				description: "undefined",
			}),
			deep_sashelas_600_800_cycles_history: await db.createDeityHistory({
				id: "deep-sashelas-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "deep-sashelas",
				description: "undefined",
			}),
			sekolah_0_100_cycles_history: await db.createDeityHistory({
				id: "sekolah-0-100-cycles-history",
				era: "0-100 cycles",
				deityId: "sekolah",
				description: "undefined",
			}),
			sekolah_100_300_cycles_history: await db.createDeityHistory({
				id: "sekolah-100-300-cycles-history",
				era: "100-300 cycles",
				deityId: "sekolah",
				description: "undefined",
			}),
			sekolah_300_600_cycles_history: await db.createDeityHistory({
				id: "sekolah-300-600-cycles-history",
				era: "300-600 cycles",
				deityId: "sekolah",
				description: "undefined",
			}),
			sekolah_600_800_cycles_history: await db.createDeityHistory({
				id: "sekolah-600-800-cycles-history",
				era: "600-800 cycles",
				deityId: "sekolah",
				description: "undefined",
			}),
		};
		// Deity Relationships
		const deityRelationship: Record<string, Prisma.DeityRelationshipGetPayload<{}>> = {
			cyric_ally_shar: await db.createDeityRelationship({
				id: "cyric-ally-shar",
				deityId: "cyric",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.ALLY,
			}),
			cyric_ally_talona: await db.createDeityRelationship({
				id: "cyric-ally-talona",
				deityId: "cyric",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.ALLY,
			}),
			cyric_conflict_mystra: await db.createDeityRelationship({
				id: "cyric-conflict-mystra",
				deityId: "cyric",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			cyric_conflict_kelemvor: await db.createDeityRelationship({
				id: "cyric-conflict-kelemvor",
				deityId: "cyric",
				relatedDeityId: "kelemvor",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			cyric_conflict_tempus: await db.createDeityRelationship({
				id: "cyric-conflict-tempus",
				deityId: "cyric",
				relatedDeityId: "tempus",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			cyric_conflict_lathander: await db.createDeityRelationship({
				id: "cyric-conflict-lathander",
				deityId: "cyric",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			tempus_ally_tymora: await db.createDeityRelationship({
				id: "tempus-ally-tymora",
				deityId: "tempus",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			tempus_ally_lathander: await db.createDeityRelationship({
				id: "tempus-ally-lathander",
				deityId: "tempus",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			tempus_ally_mystra: await db.createDeityRelationship({
				id: "tempus-ally-mystra",
				deityId: "tempus",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			tempus_conflict_bane: await db.createDeityRelationship({
				id: "tempus-conflict-bane",
				deityId: "tempus",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			tempus_conflict_talona: await db.createDeityRelationship({
				id: "tempus-conflict-talona",
				deityId: "tempus",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			mystra_ally_corellon_larethian: await db.createDeityRelationship({
				id: "mystra-ally-corellon-larethian",
				deityId: "mystra",
				relatedDeityId: "corellon-larethian",
				type: DeityRelationshipCategory.ALLY,
			}),
			mystra_ally_oghma: await db.createDeityRelationship({
				id: "mystra-ally-oghma",
				deityId: "mystra",
				relatedDeityId: "oghma",
				type: DeityRelationshipCategory.ALLY,
			}),
			mystra_ally_lathander: await db.createDeityRelationship({
				id: "mystra-ally-lathander",
				deityId: "mystra",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			mystra_conflict_bane: await db.createDeityRelationship({
				id: "mystra-conflict-bane",
				deityId: "mystra",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			mystra_conflict_shar: await db.createDeityRelationship({
				id: "mystra-conflict-shar",
				deityId: "mystra",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			lathander_ally_tymora: await db.createDeityRelationship({
				id: "lathander-ally-tymora",
				deityId: "lathander",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			lathander_ally_selune: await db.createDeityRelationship({
				id: "lathander-ally-selune",
				deityId: "lathander",
				relatedDeityId: "selune",
				type: DeityRelationshipCategory.ALLY,
			}),
			lathander_conflict_shar: await db.createDeityRelationship({
				id: "lathander-conflict-shar",
				deityId: "lathander",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			lathander_conflict_bane: await db.createDeityRelationship({
				id: "lathander-conflict-bane",
				deityId: "lathander",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			selune_ally_tymora: await db.createDeityRelationship({
				id: "selune-ally-tymora",
				deityId: "selune",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			selune_ally_corellon_larethian: await db.createDeityRelationship({
				id: "selune-ally-corellon-larethian",
				deityId: "selune",
				relatedDeityId: "corellon-larethian",
				type: DeityRelationshipCategory.ALLY,
			}),
			selune_conflict_shar: await db.createDeityRelationship({
				id: "selune-conflict-shar",
				deityId: "selune",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			selune_conflict_cyric: await db.createDeityRelationship({
				id: "selune-conflict-cyric",
				deityId: "selune",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			selune_conflict_bane: await db.createDeityRelationship({
				id: "selune-conflict-bane",
				deityId: "selune",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			shar_ally_bane: await db.createDeityRelationship({
				id: "shar-ally-bane",
				deityId: "shar",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			shar_ally_talona: await db.createDeityRelationship({
				id: "shar-ally-talona",
				deityId: "shar",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.ALLY,
			}),
			oghma_ally_deneir: await db.createDeityRelationship({
				id: "oghma-ally-deneir",
				deityId: "oghma",
				relatedDeityId: "deneir",
				type: DeityRelationshipCategory.ALLY,
			}),
			oghma_ally_lathander: await db.createDeityRelationship({
				id: "oghma-ally-lathander",
				deityId: "oghma",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			oghma_conflict_cyric: await db.createDeityRelationship({
				id: "oghma-conflict-cyric",
				deityId: "oghma",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			oghma_conflict_shar: await db.createDeityRelationship({
				id: "oghma-conflict-shar",
				deityId: "oghma",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			oghma_conflict_talona: await db.createDeityRelationship({
				id: "oghma-conflict-talona",
				deityId: "oghma",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			deneir_ally_mystra: await db.createDeityRelationship({
				id: "deneir-ally-mystra",
				deityId: "deneir",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			deneir_ally_lathander: await db.createDeityRelationship({
				id: "deneir-ally-lathander",
				deityId: "deneir",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			deneir_conflict_cyric: await db.createDeityRelationship({
				id: "deneir-conflict-cyric",
				deityId: "deneir",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			deneir_conflict_shar: await db.createDeityRelationship({
				id: "deneir-conflict-shar",
				deityId: "deneir",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			deneir_conflict_mask: await db.createDeityRelationship({
				id: "deneir-conflict-mask",
				deityId: "deneir",
				relatedDeityId: "mask",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			mask_ally_cyric: await db.createDeityRelationship({
				id: "mask-ally-cyric",
				deityId: "mask",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			mask_ally_shar: await db.createDeityRelationship({
				id: "mask-ally-shar",
				deityId: "mask",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.ALLY,
			}),
			mask_conflict_tyr: await db.createDeityRelationship({
				id: "mask-conflict-tyr",
				deityId: "mask",
				relatedDeityId: "tyr",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			mask_conflict_helm: await db.createDeityRelationship({
				id: "mask-conflict-helm",
				deityId: "mask",
				relatedDeityId: "helm",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			helm_ally_tyr: await db.createDeityRelationship({
				id: "helm-ally-tyr",
				deityId: "helm",
				relatedDeityId: "tyr",
				type: DeityRelationshipCategory.ALLY,
			}),
			helm_ally_lathander: await db.createDeityRelationship({
				id: "helm-ally-lathander",
				deityId: "helm",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			helm_ally_oghma: await db.createDeityRelationship({
				id: "helm-ally-oghma",
				deityId: "helm",
				relatedDeityId: "oghma",
				type: DeityRelationshipCategory.ALLY,
			}),
			helm_conflict_cyric: await db.createDeityRelationship({
				id: "helm-conflict-cyric",
				deityId: "helm",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			helm_conflict_talona: await db.createDeityRelationship({
				id: "helm-conflict-talona",
				deityId: "helm",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			tyr_ally_lathander: await db.createDeityRelationship({
				id: "tyr-ally-lathander",
				deityId: "tyr",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			tyr_ally_oghma: await db.createDeityRelationship({
				id: "tyr-ally-oghma",
				deityId: "tyr",
				relatedDeityId: "oghma",
				type: DeityRelationshipCategory.ALLY,
			}),
			tyr_conflict_cyric: await db.createDeityRelationship({
				id: "tyr-conflict-cyric",
				deityId: "tyr",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			tyr_conflict_talona: await db.createDeityRelationship({
				id: "tyr-conflict-talona",
				deityId: "tyr",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			chauntea_ally_lathander: await db.createDeityRelationship({
				id: "chauntea-ally-lathander",
				deityId: "chauntea",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			chauntea_ally_tyr: await db.createDeityRelationship({
				id: "chauntea-ally-tyr",
				deityId: "chauntea",
				relatedDeityId: "tyr",
				type: DeityRelationshipCategory.ALLY,
			}),
			chauntea_ally_oghma: await db.createDeityRelationship({
				id: "chauntea-ally-oghma",
				deityId: "chauntea",
				relatedDeityId: "oghma",
				type: DeityRelationshipCategory.ALLY,
			}),
			chauntea_conflict_talona: await db.createDeityRelationship({
				id: "chauntea-conflict-talona",
				deityId: "chauntea",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			chauntea_conflict_cyric: await db.createDeityRelationship({
				id: "chauntea-conflict-cyric",
				deityId: "chauntea",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			chauntea_conflict_bane: await db.createDeityRelationship({
				id: "chauntea-conflict-bane",
				deityId: "chauntea",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			ilmater_ally_lathander: await db.createDeityRelationship({
				id: "ilmater-ally-lathander",
				deityId: "ilmater",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			ilmater_ally_tyr: await db.createDeityRelationship({
				id: "ilmater-ally-tyr",
				deityId: "ilmater",
				relatedDeityId: "tyr",
				type: DeityRelationshipCategory.ALLY,
			}),
			ilmater_ally_chauntea: await db.createDeityRelationship({
				id: "ilmater-ally-chauntea",
				deityId: "ilmater",
				relatedDeityId: "chauntea",
				type: DeityRelationshipCategory.ALLY,
			}),
			ilmater_conflict_talona: await db.createDeityRelationship({
				id: "ilmater-conflict-talona",
				deityId: "ilmater",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			ilmater_conflict_bane: await db.createDeityRelationship({
				id: "ilmater-conflict-bane",
				deityId: "ilmater",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			ilmater_conflict_cyric: await db.createDeityRelationship({
				id: "ilmater-conflict-cyric",
				deityId: "ilmater",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			talona_conflict_lathander: await db.createDeityRelationship({
				id: "talona-conflict-lathander",
				deityId: "talona",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			tymora_conflict_bane: await db.createDeityRelationship({
				id: "tymora-conflict-bane",
				deityId: "tymora",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			tymora_conflict_cyric: await db.createDeityRelationship({
				id: "tymora-conflict-cyric",
				deityId: "tymora",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			tymora_conflict_talona: await db.createDeityRelationship({
				id: "tymora-conflict-talona",
				deityId: "tymora",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			kelemvor_ally_lathander: await db.createDeityRelationship({
				id: "kelemvor-ally-lathander",
				deityId: "kelemvor",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			kelemvor_ally_mystra: await db.createDeityRelationship({
				id: "kelemvor-ally-mystra",
				deityId: "kelemvor",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			kelemvor_ally_tymora: await db.createDeityRelationship({
				id: "kelemvor-ally-tymora",
				deityId: "kelemvor",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			kelemvor_conflict_bane: await db.createDeityRelationship({
				id: "kelemvor-conflict-bane",
				deityId: "kelemvor",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			kelemvor_conflict_talona: await db.createDeityRelationship({
				id: "kelemvor-conflict-talona",
				deityId: "kelemvor",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			bane_ally_cyric: await db.createDeityRelationship({
				id: "bane-ally-cyric",
				deityId: "bane",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			bane_ally_talona: await db.createDeityRelationship({
				id: "bane-ally-talona",
				deityId: "bane",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.ALLY,
			}),
			moradin_ally_lathander: await db.createDeityRelationship({
				id: "moradin-ally-lathander",
				deityId: "moradin",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			moradin_ally_mystra: await db.createDeityRelationship({
				id: "moradin-ally-mystra",
				deityId: "moradin",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			moradin_ally_tymora: await db.createDeityRelationship({
				id: "moradin-ally-tymora",
				deityId: "moradin",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			moradin_conflict_bane: await db.createDeityRelationship({
				id: "moradin-conflict-bane",
				deityId: "moradin",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			moradin_conflict_cyric: await db.createDeityRelationship({
				id: "moradin-conflict-cyric",
				deityId: "moradin",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			moradin_conflict_talona: await db.createDeityRelationship({
				id: "moradin-conflict-talona",
				deityId: "moradin",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			berronar_truesilver_ally_moradin: await db.createDeityRelationship({
				id: "berronar-truesilver-ally-moradin",
				deityId: "berronar-truesilver",
				relatedDeityId: "moradin",
				type: DeityRelationshipCategory.ALLY,
			}),
			berronar_truesilver_ally_lathander: await db.createDeityRelationship({
				id: "berronar-truesilver-ally-lathander",
				deityId: "berronar-truesilver",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			berronar_truesilver_ally_tymora: await db.createDeityRelationship({
				id: "berronar-truesilver-ally-tymora",
				deityId: "berronar-truesilver",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			berronar_truesilver_conflict_bane: await db.createDeityRelationship({
				id: "berronar-truesilver-conflict-bane",
				deityId: "berronar-truesilver",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			berronar_truesilver_conflict_cyric: await db.createDeityRelationship({
				id: "berronar-truesilver-conflict-cyric",
				deityId: "berronar-truesilver",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			berronar_truesilver_conflict_talona: await db.createDeityRelationship({
				id: "berronar-truesilver-conflict-talona",
				deityId: "berronar-truesilver",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			clangeddin_silverbeard_ally_moradin: await db.createDeityRelationship({
				id: "clangeddin-silverbeard-ally-moradin",
				deityId: "clangeddin-silverbeard",
				relatedDeityId: "moradin",
				type: DeityRelationshipCategory.ALLY,
			}),
			clangeddin_silverbeard_ally_lathander: await db.createDeityRelationship({
				id: "clangeddin-silverbeard-ally-lathander",
				deityId: "clangeddin-silverbeard",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			clangeddin_silverbeard_ally_tymora: await db.createDeityRelationship({
				id: "clangeddin-silverbeard-ally-tymora",
				deityId: "clangeddin-silverbeard",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			clangeddin_silverbeard_conflict_bane: await db.createDeityRelationship({
				id: "clangeddin-silverbeard-conflict-bane",
				deityId: "clangeddin-silverbeard",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			clangeddin_silverbeard_conflict_cyric: await db.createDeityRelationship({
				id: "clangeddin-silverbeard-conflict-cyric",
				deityId: "clangeddin-silverbeard",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			clangeddin_silverbeard_conflict_talona: await db.createDeityRelationship({
				id: "clangeddin-silverbeard-conflict-talona",
				deityId: "clangeddin-silverbeard",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			dugmaren_brightmantle_ally_garl_glittergold: await db.createDeityRelationship({
				id: "dugmaren-brightmantle-ally-garl-glittergold",
				deityId: "dugmaren-brightmantle",
				relatedDeityId: "garl-glittergold",
				type: DeityRelationshipCategory.ALLY,
			}),
			dugmaren_brightmantle_ally_lathander: await db.createDeityRelationship({
				id: "dugmaren-brightmantle-ally-lathander",
				deityId: "dugmaren-brightmantle",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			dugmaren_brightmantle_ally_mystra: await db.createDeityRelationship({
				id: "dugmaren-brightmantle-ally-mystra",
				deityId: "dugmaren-brightmantle",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			dugmaren_brightmantle_conflict_bane: await db.createDeityRelationship({
				id: "dugmaren-brightmantle-conflict-bane",
				deityId: "dugmaren-brightmantle",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			dugmaren_brightmantle_conflict_cyric: await db.createDeityRelationship({
				id: "dugmaren-brightmantle-conflict-cyric",
				deityId: "dugmaren-brightmantle",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			dugmaren_brightmantle_conflict_talona: await db.createDeityRelationship({
				id: "dugmaren-brightmantle-conflict-talona",
				deityId: "dugmaren-brightmantle",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			corellon_larethian_ally_lathander: await db.createDeityRelationship({
				id: "corellon-larethian-ally-lathander",
				deityId: "corellon-larethian",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			corellon_larethian_conflict_lolth: await db.createDeityRelationship({
				id: "corellon-larethian-conflict-lolth",
				deityId: "corellon-larethian",
				relatedDeityId: "lolth",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			corellon_larethian_conflict_bane: await db.createDeityRelationship({
				id: "corellon-larethian-conflict-bane",
				deityId: "corellon-larethian",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			corellon_larethian_conflict_cyric: await db.createDeityRelationship({
				id: "corellon-larethian-conflict-cyric",
				deityId: "corellon-larethian",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			lolth_ally_bane: await db.createDeityRelationship({
				id: "lolth-ally-bane",
				deityId: "lolth",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			lolth_ally_cyric: await db.createDeityRelationship({
				id: "lolth-ally-cyric",
				deityId: "lolth",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			lolth_ally_shar: await db.createDeityRelationship({
				id: "lolth-ally-shar",
				deityId: "lolth",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.ALLY,
			}),
			lolth_conflict_lathander: await db.createDeityRelationship({
				id: "lolth-conflict-lathander",
				deityId: "lolth",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			lolth_conflict_mystra: await db.createDeityRelationship({
				id: "lolth-conflict-mystra",
				deityId: "lolth",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			bahamut_ally_lathander: await db.createDeityRelationship({
				id: "bahamut-ally-lathander",
				deityId: "bahamut",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			bahamut_ally_mystra: await db.createDeityRelationship({
				id: "bahamut-ally-mystra",
				deityId: "bahamut",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			bahamut_ally_tymora: await db.createDeityRelationship({
				id: "bahamut-ally-tymora",
				deityId: "bahamut",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			bahamut_conflict_tiamat: await db.createDeityRelationship({
				id: "bahamut-conflict-tiamat",
				deityId: "bahamut",
				relatedDeityId: "tiamat",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			bahamut_conflict_bane: await db.createDeityRelationship({
				id: "bahamut-conflict-bane",
				deityId: "bahamut",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			bahamut_conflict_cyric: await db.createDeityRelationship({
				id: "bahamut-conflict-cyric",
				deityId: "bahamut",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			tiamat_ally_bane: await db.createDeityRelationship({
				id: "tiamat-ally-bane",
				deityId: "tiamat",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			tiamat_ally_cyric: await db.createDeityRelationship({
				id: "tiamat-ally-cyric",
				deityId: "tiamat",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			tiamat_ally_shar: await db.createDeityRelationship({
				id: "tiamat-ally-shar",
				deityId: "tiamat",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.ALLY,
			}),
			tiamat_conflict_lathander: await db.createDeityRelationship({
				id: "tiamat-conflict-lathander",
				deityId: "tiamat",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			tiamat_conflict_mystra: await db.createDeityRelationship({
				id: "tiamat-conflict-mystra",
				deityId: "tiamat",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			the_raven_queen_ally_kelemvor: await db.createDeityRelationship({
				id: "the-raven-queen-ally-kelemvor",
				deityId: "the-raven-queen",
				relatedDeityId: "kelemvor",
				type: DeityRelationshipCategory.ALLY,
			}),
			the_raven_queen_ally_lathander: await db.createDeityRelationship({
				id: "the-raven-queen-ally-lathander",
				deityId: "the-raven-queen",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			the_raven_queen_ally_mystra: await db.createDeityRelationship({
				id: "the-raven-queen-ally-mystra",
				deityId: "the-raven-queen",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			the_raven_queen_conflict_bane: await db.createDeityRelationship({
				id: "the-raven-queen-conflict-bane",
				deityId: "the-raven-queen",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			the_raven_queen_conflict_cyric: await db.createDeityRelationship({
				id: "the-raven-queen-conflict-cyric",
				deityId: "the-raven-queen",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			the_raven_queen_conflict_talona: await db.createDeityRelationship({
				id: "the-raven-queen-conflict-talona",
				deityId: "the-raven-queen",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			asmodeus_ally_bane: await db.createDeityRelationship({
				id: "asmodeus-ally-bane",
				deityId: "asmodeus",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			asmodeus_ally_cyric: await db.createDeityRelationship({
				id: "asmodeus-ally-cyric",
				deityId: "asmodeus",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			asmodeus_ally_shar: await db.createDeityRelationship({
				id: "asmodeus-ally-shar",
				deityId: "asmodeus",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.ALLY,
			}),
			asmodeus_conflict_lathander: await db.createDeityRelationship({
				id: "asmodeus-conflict-lathander",
				deityId: "asmodeus",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			asmodeus_conflict_mystra: await db.createDeityRelationship({
				id: "asmodeus-conflict-mystra",
				deityId: "asmodeus",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			asmodeus_conflict_tymora: await db.createDeityRelationship({
				id: "asmodeus-conflict-tymora",
				deityId: "asmodeus",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			yondalla_ally_lathander: await db.createDeityRelationship({
				id: "yondalla-ally-lathander",
				deityId: "yondalla",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			yondalla_ally_tymora: await db.createDeityRelationship({
				id: "yondalla-ally-tymora",
				deityId: "yondalla",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			yondalla_ally_mystra: await db.createDeityRelationship({
				id: "yondalla-ally-mystra",
				deityId: "yondalla",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			yondalla_conflict_bane: await db.createDeityRelationship({
				id: "yondalla-conflict-bane",
				deityId: "yondalla",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			yondalla_conflict_cyric: await db.createDeityRelationship({
				id: "yondalla-conflict-cyric",
				deityId: "yondalla",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			yondalla_conflict_talona: await db.createDeityRelationship({
				id: "yondalla-conflict-talona",
				deityId: "yondalla",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			arvoreen_ally_lathander: await db.createDeityRelationship({
				id: "arvoreen-ally-lathander",
				deityId: "arvoreen",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			arvoreen_ally_tymora: await db.createDeityRelationship({
				id: "arvoreen-ally-tymora",
				deityId: "arvoreen",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			arvoreen_ally_yondalla: await db.createDeityRelationship({
				id: "arvoreen-ally-yondalla",
				deityId: "arvoreen",
				relatedDeityId: "yondalla",
				type: DeityRelationshipCategory.ALLY,
			}),
			arvoreen_conflict_bane: await db.createDeityRelationship({
				id: "arvoreen-conflict-bane",
				deityId: "arvoreen",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			arvoreen_conflict_cyric: await db.createDeityRelationship({
				id: "arvoreen-conflict-cyric",
				deityId: "arvoreen",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			arvoreen_conflict_talona: await db.createDeityRelationship({
				id: "arvoreen-conflict-talona",
				deityId: "arvoreen",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			cyrrollalee_ally_yondalla: await db.createDeityRelationship({
				id: "cyrrollalee-ally-yondalla",
				deityId: "cyrrollalee",
				relatedDeityId: "yondalla",
				type: DeityRelationshipCategory.ALLY,
			}),
			cyrrollalee_ally_lathander: await db.createDeityRelationship({
				id: "cyrrollalee-ally-lathander",
				deityId: "cyrrollalee",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			cyrrollalee_ally_tymora: await db.createDeityRelationship({
				id: "cyrrollalee-ally-tymora",
				deityId: "cyrrollalee",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			cyrrollalee_conflict_bane: await db.createDeityRelationship({
				id: "cyrrollalee-conflict-bane",
				deityId: "cyrrollalee",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			cyrrollalee_conflict_cyric: await db.createDeityRelationship({
				id: "cyrrollalee-conflict-cyric",
				deityId: "cyrrollalee",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			cyrrollalee_conflict_talona: await db.createDeityRelationship({
				id: "cyrrollalee-conflict-talona",
				deityId: "cyrrollalee",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			urogalan_ally_kelemvor: await db.createDeityRelationship({
				id: "urogalan-ally-kelemvor",
				deityId: "urogalan",
				relatedDeityId: "kelemvor",
				type: DeityRelationshipCategory.ALLY,
			}),
			urogalan_ally_lathander: await db.createDeityRelationship({
				id: "urogalan-ally-lathander",
				deityId: "urogalan",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			urogalan_ally_mystra: await db.createDeityRelationship({
				id: "urogalan-ally-mystra",
				deityId: "urogalan",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			urogalan_conflict_bane: await db.createDeityRelationship({
				id: "urogalan-conflict-bane",
				deityId: "urogalan",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			urogalan_conflict_cyric: await db.createDeityRelationship({
				id: "urogalan-conflict-cyric",
				deityId: "urogalan",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			urogalan_conflict_talona: await db.createDeityRelationship({
				id: "urogalan-conflict-talona",
				deityId: "urogalan",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			garl_glittergold_ally_tymora: await db.createDeityRelationship({
				id: "garl-glittergold-ally-tymora",
				deityId: "garl-glittergold",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			garl_glittergold_ally_lathander: await db.createDeityRelationship({
				id: "garl-glittergold-ally-lathander",
				deityId: "garl-glittergold",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			garl_glittergold_ally_mystra: await db.createDeityRelationship({
				id: "garl-glittergold-ally-mystra",
				deityId: "garl-glittergold",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			garl_glittergold_conflict_bane: await db.createDeityRelationship({
				id: "garl-glittergold-conflict-bane",
				deityId: "garl-glittergold",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			garl_glittergold_conflict_cyric: await db.createDeityRelationship({
				id: "garl-glittergold-conflict-cyric",
				deityId: "garl-glittergold",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			garl_glittergold_conflict_talona: await db.createDeityRelationship({
				id: "garl-glittergold-conflict-talona",
				deityId: "garl-glittergold",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			baervan_wildwanderer_ally_garl_glittergold: await db.createDeityRelationship({
				id: "baervan-wildwanderer-ally-garl-glittergold",
				deityId: "baervan-wildwanderer",
				relatedDeityId: "garl-glittergold",
				type: DeityRelationshipCategory.ALLY,
			}),
			baervan_wildwanderer_ally_lathander: await db.createDeityRelationship({
				id: "baervan-wildwanderer-ally-lathander",
				deityId: "baervan-wildwanderer",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			baervan_wildwanderer_ally_tymora: await db.createDeityRelationship({
				id: "baervan-wildwanderer-ally-tymora",
				deityId: "baervan-wildwanderer",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			baervan_wildwanderer_conflict_bane: await db.createDeityRelationship({
				id: "baervan-wildwanderer-conflict-bane",
				deityId: "baervan-wildwanderer",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			baervan_wildwanderer_conflict_cyric: await db.createDeityRelationship({
				id: "baervan-wildwanderer-conflict-cyric",
				deityId: "baervan-wildwanderer",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			baervan_wildwanderer_conflict_talona: await db.createDeityRelationship({
				id: "baervan-wildwanderer-conflict-talona",
				deityId: "baervan-wildwanderer",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			baravar_cloakshadow_ally_garl_glittergold: await db.createDeityRelationship({
				id: "baravar-cloakshadow-ally-garl-glittergold",
				deityId: "baravar-cloakshadow",
				relatedDeityId: "garl-glittergold",
				type: DeityRelationshipCategory.ALLY,
			}),
			baravar_cloakshadow_ally_tymora: await db.createDeityRelationship({
				id: "baravar-cloakshadow-ally-tymora",
				deityId: "baravar-cloakshadow",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			baravar_cloakshadow_ally_lathander: await db.createDeityRelationship({
				id: "baravar-cloakshadow-ally-lathander",
				deityId: "baravar-cloakshadow",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			baravar_cloakshadow_conflict_bane: await db.createDeityRelationship({
				id: "baravar-cloakshadow-conflict-bane",
				deityId: "baravar-cloakshadow",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			baravar_cloakshadow_conflict_cyric: await db.createDeityRelationship({
				id: "baravar-cloakshadow-conflict-cyric",
				deityId: "baravar-cloakshadow",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			baravar_cloakshadow_conflict_talona: await db.createDeityRelationship({
				id: "baravar-cloakshadow-conflict-talona",
				deityId: "baravar-cloakshadow",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			segojan_earthcaller_ally_garl_glittergold: await db.createDeityRelationship({
				id: "segojan-earthcaller-ally-garl-glittergold",
				deityId: "segojan-earthcaller",
				relatedDeityId: "garl-glittergold",
				type: DeityRelationshipCategory.ALLY,
			}),
			segojan_earthcaller_ally_moradin: await db.createDeityRelationship({
				id: "segojan-earthcaller-ally-moradin",
				deityId: "segojan-earthcaller",
				relatedDeityId: "moradin",
				type: DeityRelationshipCategory.ALLY,
			}),
			segojan_earthcaller_ally_lathander: await db.createDeityRelationship({
				id: "segojan-earthcaller-ally-lathander",
				deityId: "segojan-earthcaller",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			segojan_earthcaller_conflict_bane: await db.createDeityRelationship({
				id: "segojan-earthcaller-conflict-bane",
				deityId: "segojan-earthcaller",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			segojan_earthcaller_conflict_cyric: await db.createDeityRelationship({
				id: "segojan-earthcaller-conflict-cyric",
				deityId: "segojan-earthcaller",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			segojan_earthcaller_conflict_talona: await db.createDeityRelationship({
				id: "segojan-earthcaller-conflict-talona",
				deityId: "segojan-earthcaller",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			maglubiyet_ally_bane: await db.createDeityRelationship({
				id: "maglubiyet-ally-bane",
				deityId: "maglubiyet",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			maglubiyet_ally_cyric: await db.createDeityRelationship({
				id: "maglubiyet-ally-cyric",
				deityId: "maglubiyet",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			maglubiyet_ally_talona: await db.createDeityRelationship({
				id: "maglubiyet-ally-talona",
				deityId: "maglubiyet",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.ALLY,
			}),
			maglubiyet_conflict_lathander: await db.createDeityRelationship({
				id: "maglubiyet-conflict-lathander",
				deityId: "maglubiyet",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			maglubiyet_conflict_mystra: await db.createDeityRelationship({
				id: "maglubiyet-conflict-mystra",
				deityId: "maglubiyet",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			maglubiyet_conflict_tymora: await db.createDeityRelationship({
				id: "maglubiyet-conflict-tymora",
				deityId: "maglubiyet",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			khurgorbaeyag_ally_maglubiyet: await db.createDeityRelationship({
				id: "khurgorbaeyag-ally-maglubiyet",
				deityId: "khurgorbaeyag",
				relatedDeityId: "maglubiyet",
				type: DeityRelationshipCategory.ALLY,
			}),
			khurgorbaeyag_ally_bane: await db.createDeityRelationship({
				id: "khurgorbaeyag-ally-bane",
				deityId: "khurgorbaeyag",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			khurgorbaeyag_ally_cyric: await db.createDeityRelationship({
				id: "khurgorbaeyag-ally-cyric",
				deityId: "khurgorbaeyag",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			khurgorbaeyag_conflict_lathander: await db.createDeityRelationship({
				id: "khurgorbaeyag-conflict-lathander",
				deityId: "khurgorbaeyag",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			khurgorbaeyag_conflict_mystra: await db.createDeityRelationship({
				id: "khurgorbaeyag-conflict-mystra",
				deityId: "khurgorbaeyag",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			khurgorbaeyag_conflict_tymora: await db.createDeityRelationship({
				id: "khurgorbaeyag-conflict-tymora",
				deityId: "khurgorbaeyag",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			bargrivyek_ally_maglubiyet: await db.createDeityRelationship({
				id: "bargrivyek-ally-maglubiyet",
				deityId: "bargrivyek",
				relatedDeityId: "maglubiyet",
				type: DeityRelationshipCategory.ALLY,
			}),
			bargrivyek_ally_lathander: await db.createDeityRelationship({
				id: "bargrivyek-ally-lathander",
				deityId: "bargrivyek",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			bargrivyek_ally_tymora: await db.createDeityRelationship({
				id: "bargrivyek-ally-tymora",
				deityId: "bargrivyek",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			bargrivyek_conflict_bane: await db.createDeityRelationship({
				id: "bargrivyek-conflict-bane",
				deityId: "bargrivyek",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			bargrivyek_conflict_cyric: await db.createDeityRelationship({
				id: "bargrivyek-conflict-cyric",
				deityId: "bargrivyek",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			bargrivyek_conflict_talona: await db.createDeityRelationship({
				id: "bargrivyek-conflict-talona",
				deityId: "bargrivyek",
				relatedDeityId: "talona",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			nomog_geaya_ally_maglubiyet: await db.createDeityRelationship({
				id: "nomog-geaya-ally-maglubiyet",
				deityId: "nomog-geaya",
				relatedDeityId: "maglubiyet",
				type: DeityRelationshipCategory.ALLY,
			}),
			nomog_geaya_ally_bane: await db.createDeityRelationship({
				id: "nomog-geaya-ally-bane",
				deityId: "nomog-geaya",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			nomog_geaya_ally_cyric: await db.createDeityRelationship({
				id: "nomog-geaya-ally-cyric",
				deityId: "nomog-geaya",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			nomog_geaya_conflict_lathander: await db.createDeityRelationship({
				id: "nomog-geaya-conflict-lathander",
				deityId: "nomog-geaya",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			nomog_geaya_conflict_mystra: await db.createDeityRelationship({
				id: "nomog-geaya-conflict-mystra",
				deityId: "nomog-geaya",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			nomog_geaya_conflict_tymora: await db.createDeityRelationship({
				id: "nomog-geaya-conflict-tymora",
				deityId: "nomog-geaya",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			kurtulmak_ally_maglubiyet: await db.createDeityRelationship({
				id: "kurtulmak-ally-maglubiyet",
				deityId: "kurtulmak",
				relatedDeityId: "maglubiyet",
				type: DeityRelationshipCategory.ALLY,
			}),
			kurtulmak_ally_bane: await db.createDeityRelationship({
				id: "kurtulmak-ally-bane",
				deityId: "kurtulmak",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			kurtulmak_ally_cyric: await db.createDeityRelationship({
				id: "kurtulmak-ally-cyric",
				deityId: "kurtulmak",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			kurtulmak_conflict_lathander: await db.createDeityRelationship({
				id: "kurtulmak-conflict-lathander",
				deityId: "kurtulmak",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			kurtulmak_conflict_mystra: await db.createDeityRelationship({
				id: "kurtulmak-conflict-mystra",
				deityId: "kurtulmak",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			kurtulmak_conflict_tymora: await db.createDeityRelationship({
				id: "kurtulmak-conflict-tymora",
				deityId: "kurtulmak",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			gith_ally_lathander: await db.createDeityRelationship({
				id: "gith-ally-lathander",
				deityId: "gith",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			gith_ally_mystra: await db.createDeityRelationship({
				id: "gith-ally-mystra",
				deityId: "gith",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			gith_ally_tymora: await db.createDeityRelationship({
				id: "gith-ally-tymora",
				deityId: "gith",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			gith_conflict_vlaakith: await db.createDeityRelationship({
				id: "gith-conflict-vlaakith",
				deityId: "gith",
				relatedDeityId: "vlaakith",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			gith_conflict_bane: await db.createDeityRelationship({
				id: "gith-conflict-bane",
				deityId: "gith",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			gith_conflict_cyric: await db.createDeityRelationship({
				id: "gith-conflict-cyric",
				deityId: "gith",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			vlaakith_ally_bane: await db.createDeityRelationship({
				id: "vlaakith-ally-bane",
				deityId: "vlaakith",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			vlaakith_ally_cyric: await db.createDeityRelationship({
				id: "vlaakith-ally-cyric",
				deityId: "vlaakith",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			vlaakith_ally_shar: await db.createDeityRelationship({
				id: "vlaakith-ally-shar",
				deityId: "vlaakith",
				relatedDeityId: "shar",
				type: DeityRelationshipCategory.ALLY,
			}),
			vlaakith_conflict_lathander: await db.createDeityRelationship({
				id: "vlaakith-conflict-lathander",
				deityId: "vlaakith",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			vlaakith_conflict_mystra: await db.createDeityRelationship({
				id: "vlaakith-conflict-mystra",
				deityId: "vlaakith",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			sseth_ally_merrshaulk: await db.createDeityRelationship({
				id: "sseth-ally-merrshaulk",
				deityId: "sseth",
				relatedDeityId: "merrshaulk",
				type: DeityRelationshipCategory.ALLY,
			}),
			sseth_ally_bane: await db.createDeityRelationship({
				id: "sseth-ally-bane",
				deityId: "sseth",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			sseth_ally_cyric: await db.createDeityRelationship({
				id: "sseth-ally-cyric",
				deityId: "sseth",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			sseth_conflict_lathander: await db.createDeityRelationship({
				id: "sseth-conflict-lathander",
				deityId: "sseth",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			sseth_conflict_mystra: await db.createDeityRelationship({
				id: "sseth-conflict-mystra",
				deityId: "sseth",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			sseth_conflict_tymora: await db.createDeityRelationship({
				id: "sseth-conflict-tymora",
				deityId: "sseth",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			merrshaulk_ally_bane: await db.createDeityRelationship({
				id: "merrshaulk-ally-bane",
				deityId: "merrshaulk",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			merrshaulk_ally_cyric: await db.createDeityRelationship({
				id: "merrshaulk-ally-cyric",
				deityId: "merrshaulk",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			merrshaulk_conflict_lathander: await db.createDeityRelationship({
				id: "merrshaulk-conflict-lathander",
				deityId: "merrshaulk",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			merrshaulk_conflict_mystra: await db.createDeityRelationship({
				id: "merrshaulk-conflict-mystra",
				deityId: "merrshaulk",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			merrshaulk_conflict_tymora: await db.createDeityRelationship({
				id: "merrshaulk-conflict-tymora",
				deityId: "merrshaulk",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			umberlee_ally_sekolah: await db.createDeityRelationship({
				id: "umberlee-ally-sekolah",
				deityId: "umberlee",
				relatedDeityId: "sekolah",
				type: DeityRelationshipCategory.ALLY,
			}),
			umberlee_ally_bane: await db.createDeityRelationship({
				id: "umberlee-ally-bane",
				deityId: "umberlee",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			umberlee_ally_cyric: await db.createDeityRelationship({
				id: "umberlee-ally-cyric",
				deityId: "umberlee",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			umberlee_conflict_valkur: await db.createDeityRelationship({
				id: "umberlee-conflict-valkur",
				deityId: "umberlee",
				relatedDeityId: "valkur",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			umberlee_conflict_lathander: await db.createDeityRelationship({
				id: "umberlee-conflict-lathander",
				deityId: "umberlee",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			umberlee_conflict_mystra: await db.createDeityRelationship({
				id: "umberlee-conflict-mystra",
				deityId: "umberlee",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			valkur_ally_deep_sashelas: await db.createDeityRelationship({
				id: "valkur-ally-deep-sashelas",
				deityId: "valkur",
				relatedDeityId: "deep-sashelas",
				type: DeityRelationshipCategory.ALLY,
			}),
			valkur_ally_lathander: await db.createDeityRelationship({
				id: "valkur-ally-lathander",
				deityId: "valkur",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			valkur_ally_tymora: await db.createDeityRelationship({
				id: "valkur-ally-tymora",
				deityId: "valkur",
				relatedDeityId: "tymora",
				type: DeityRelationshipCategory.ALLY,
			}),
			valkur_conflict_sekolah: await db.createDeityRelationship({
				id: "valkur-conflict-sekolah",
				deityId: "valkur",
				relatedDeityId: "sekolah",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			valkur_conflict_bane: await db.createDeityRelationship({
				id: "valkur-conflict-bane",
				deityId: "valkur",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			deep_sashelas_ally_lathander: await db.createDeityRelationship({
				id: "deep-sashelas-ally-lathander",
				deityId: "deep-sashelas",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.ALLY,
			}),
			deep_sashelas_ally_mystra: await db.createDeityRelationship({
				id: "deep-sashelas-ally-mystra",
				deityId: "deep-sashelas",
				relatedDeityId: "mystra",
				type: DeityRelationshipCategory.ALLY,
			}),
			deep_sashelas_conflict_sekolah: await db.createDeityRelationship({
				id: "deep-sashelas-conflict-sekolah",
				deityId: "deep-sashelas",
				relatedDeityId: "sekolah",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			deep_sashelas_conflict_bane: await db.createDeityRelationship({
				id: "deep-sashelas-conflict-bane",
				deityId: "deep-sashelas",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			deep_sashelas_conflict_cyric: await db.createDeityRelationship({
				id: "deep-sashelas-conflict-cyric",
				deityId: "deep-sashelas",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.CONFLICT,
			}),
			sekolah_ally_bane: await db.createDeityRelationship({
				id: "sekolah-ally-bane",
				deityId: "sekolah",
				relatedDeityId: "bane",
				type: DeityRelationshipCategory.ALLY,
			}),
			sekolah_ally_cyric: await db.createDeityRelationship({
				id: "sekolah-ally-cyric",
				deityId: "sekolah",
				relatedDeityId: "cyric",
				type: DeityRelationshipCategory.ALLY,
			}),
			sekolah_conflict_lathander: await db.createDeityRelationship({
				id: "sekolah-conflict-lathander",
				deityId: "sekolah",
				relatedDeityId: "lathander",
				type: DeityRelationshipCategory.CONFLICT,
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