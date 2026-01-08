import { Prisma, GovernmentType } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Worlds, Kingdoms } from './index';

type ContinentPayload = Prisma.ContinentGetPayload<{}>;
export interface Continents {
    kuriguer: ContinentPayload;
    katman: ContinentPayload;
    alatman: ContinentPayload;
    maltman: ContinentPayload;
    skratonia: ContinentPayload;
    bulsania: ContinentPayload;
    kantra: ContinentPayload;
}

interface SeedContinentsParams {
    worlds: Worlds;
    kingdoms: Kingdoms;
}
export async function seedContinents(params: SeedContinentsParams): Promise<Continents> {
    const { worlds, kingdoms } = params;
    return {
        kuriguer: await db.createContinent({
            id: "kuriguer-alabastria", 
            //slug: "kuriguer-alabastria",
            world: { connect: { id: worlds.alabastria.id } }, 
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
            governmentType: GovernmentType.CONCLAVE,
            politicalStructure: "Kuriguer is governed by a Conclave of Archmages, each representing different schools of magic and the various settlements. While decisions attempted to be made collectively, there is a seat of High Archmage for settling disputes and addressing the public. The conclave operates with a focus on preserving the magical integrity of the continent while fostering cooperation among its diverse inhabitants.",
            foreignRelations: "Kuriguer maintains a network of alliances with other magical realms and mystical creatures. Diplomatic efforts are often intertwined with arcane rituals and exchanges of magical knowledge, ensuring that the continent remains a pivotal center for magical research and cooperation.",
            majorPoliticalIssue: "The diverse magical factions within Kuriguer often clash over the direction of magical research and the use of arcane resources. Disputes arise between traditionalist mages who wish to preserve ancient practices and progressive scholars advocating for new magical innovations, leading to political tension within the Conclave."
        }),
        katman: await db.createContinent({
            id: "katman-kamalatman-alabastria",
            //slug: "katman-kamalatman-alabastria",
            world: { connect: { id: worlds.alabastria.id } },
            kingdom: { connect: { id: kingdoms.kamalatman.id } },
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
            //slug: "alatman-kamalatman-alabastria",
            world: { connect: { id: worlds.alabastria.id } },
            kingdom: { connect: { id: kingdoms.kamalatman.id } },
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
            //slug: "maltman-kamalatman-alabastria",
            world: { connect: { id: worlds.alabastria.id } },
            kingdom: { connect: { id: kingdoms.kamalatman.id } },
            name: "Maltman",
            description: "A very mountainous region, the kingdom sends ships to collect and spread many ores and materials across the world from the vastly efficient yet seemingly small mining villages.",
            heightMi: 1400,
            widthMi: 900,
            surfaceAreaSqMi: BigInt(1000000),
            primaryColor: "Steel gray",
            secondaryColor: "Blue",
            flagSymbol: "Mountain Pickaxe",
            flagDescription: "A steel pickaxe crossed with a blue mountain peak, symbolizing the mining industry and the mountainous terrain that defines this continent's economy.",
            languageReasoning: "The mountain strongholds echo with Dwarvish as the dominant language, while mining operations use Common for trade. Svirfneblin communities speak Undercommon, and ancient draconic runes mark the deepest mines. Kobolds in the depths maintain their Draconic dialect, and the rare Giant tongue echoes from the highest peaks.",
            governmentType: GovernmentType.MONARCHY,
            politicalStructure: "Maltman is governed by a ruler that takes the title of King or Queen of Maltman who is born into a bloodline that has long overseen the continent and taken its seat as Supreme Ruler when the time comes. The monarch is supported by a council of mining guild leaders and local nobility, ensuring that the continent's economic interests are well-represented in the kingdom's governance.",
            majorPoliticalIssue: "Labor disputes and safety concerns within the mining industry frequently challenge the monarch's authority. Strikes and protests by miners seeking better working conditions and fair wages have led to tensions between the ruling class and the working populace.",
            foreignRelations: "Maltman maintains robust trade relations with neighboring continents, exporting its mineral wealth in exchange for goods and services. Diplomatic efforts focus on securing favorable trade agreements while managing tensions arising from resource competition."
        }),
        skratonia: await db.createContinent({
            id: "skratonia-alabastria",
            //slug: "skratonia-alabastria",
            world: { connect: { id: worlds.alabastria.id } },
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
            //slug: "bulsania-alabastria",
            world: { connect: { id: worlds.alabastria.id } },
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
            //slug: "kantra-alabastria",
            world: { connect: { id: worlds.alabastria.id } },
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
    }
}