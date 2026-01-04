import { Prisma, WarConflictStatus } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents } from "./index";

type WarConflictPayload = Prisma.WarConflictGetPayload<{}>;
export interface WarConflicts {
    wyvern_war: WarConflictPayload;
    first_continental_war: WarConflictPayload;
    coastal_forest_dispuit: WarConflictPayload;
    swamp_war: WarConflictPayload;
    swamp_border_skirmish: WarConflictPayload;
    southern_frontier_war: WarConflictPayload;
    alatman_resource_war: WarConflictPayload;
    resource_tax_rebellion: WarConflictPayload;
    great_mining_war: WarConflictPayload;
    underground_expansion_conflict: WarConflictPayload;
    coastal_mountain_dispute: WarConflictPayload;
    caravan_war: WarConflictPayload;
    kantra_watch: WarConflictPayload;
    forbidden_land_dispute: WarConflictPayload;
}

interface SeedWarConflictsParams {
    continents: Continents;
}
export async function seedWarConflicts(params: SeedWarConflictsParams): Promise<WarConflicts> {
    const { continents } = params;
    return {
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
                    { id: continents.kuriguer.id },
                    { id: continents.katman.id },
                    { id: continents.alatman.id },
                    { id: continents.maltman.id },
                    { id: continents.skratonia.id },
                    { id: continents.bulsania.id }
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
                    { id: continents.skratonia.id },
                    { id: continents.bulsania.id }
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
                    { id: continents.kuriguer.id },
                    { id: continents.skratonia.id }
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
                    { id: continents.katman.id },
                    { id: continents.alatman.id },
                    { id: continents.maltman.id }
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
                    { id: continents.katman.id },
                    { id: continents.alatman.id }
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
                    { id: continents.katman.id },
                    { id: continents.alatman.id },
                    { id: continents.maltman.id },
                    { id: continents.skratonia.id }
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
                    { id: continents.alatman.id },
                    { id: continents.katman.id },
                    { id: continents.maltman.id }
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
                    { id: continents.alatman.id },
                    { id: continents.maltman.id },
                    { id: continents.katman.id }
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
                    { id: continents.maltman.id },
                    { id: continents.katman.id },
                    { id: continents.alatman.id }
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
                    { id: continents.maltman.id },
                    { id: continents.kuriguer.id }
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
                    { id: continents.maltman.id },
                    { id: continents.bulsania.id }
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
                    { id: continents.bulsania.id }
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
                    { id: continents.bulsania.id },
                    { id: continents.skratonia.id }
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
                    { id: continents.katman.id },
                    { id: continents.skratonia.id },
                    { id: continents.bulsania.id }
                ]
            }
        })
    }
}