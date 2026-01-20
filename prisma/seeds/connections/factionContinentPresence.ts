import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Factions, Continents } from '../index';

type FactionContinentPresencePayload = Prisma.FactionContinentPresenceGetPayload<{}>;
export interface FactionContinentPresences {
    huntbound_order_skratonia: FactionContinentPresencePayload;
    huntbound_order_bulsania: FactionContinentPresencePayload;
    huntbound_order_kuriguer: FactionContinentPresencePayload;
    huntbound_order_katman: FactionContinentPresencePayload;
    huntbound_order_alatman: FactionContinentPresencePayload;
    huntbound_order_maltman: FactionContinentPresencePayload;
    huntbound_order_kantra: FactionContinentPresencePayload;
}

interface SeedFactionContinentPresenceParams {
    factions: Factions;
    continents: Continents;
}
export async function setFactionContinentPresences(
    params: SeedFactionContinentPresenceParams
): Promise<FactionContinentPresences> {
    const { factions, continents } = params;
    return {
        huntbound_order_skratonia: await db.createFactionContinentPresence({
            id: 'huntbound-order-skratonia',
            description: 'The Huntbound Order has its headquarters and primary operations in Skratonia, where it was founded and continues to protect settlements from monstrous threats.',
            influenceLevel: 'MAJOR',
            factionId: factions.huntboundOrder.id,
            continentId: continents.skratonia.id,
        }),
        huntbound_order_bulsania: await db.createFactionContinentPresence({
            id: 'huntbound-order-bulsania',
            description: 'The Huntbound Order conducts regular expeditions into Bulsania to hunt dangerous monsters that threaten trade routes and settlements, often collaborating with local factions.',
            influenceLevel: 'MODERATE',
            activities: ['Giant hunting', 'Frontier protection', 'Cold weather operations'],
            factionId: factions.huntboundOrder.id,
            continentId: continents.bulsania.id,
        }),
        huntbound_order_kuriguer: await db.createFactionContinentPresence({
            id: 'huntbound-order-kuriguer',
            description: 'The Huntbound Order undertakes expeditions in Kuriguer, focusing on magical creature hunting and anomaly investigations in the coastal towns and nearby forests.',
            influenceLevel: 'MINOR',
            activities: ['Magical creature hunting', 'Anomaly investigation', 'Coastal protection'],
            factionId: factions.huntboundOrder.id,
            continentId: continents.kuriguer.id,
        }),
        huntbound_order_katman: await db.createFactionContinentPresence({
            id: 'huntbound-order-katman',
            description: 'The Huntbound Order has secondary operations in Katman, conducting swamp patrols and resource protection missions.',
            influenceLevel: 'MINOR',
            activities: ['Swamp patrols', 'Resource protection'],
            factionId: factions.huntboundOrder.id,
            continentId: continents.katman.id,
        }),
        huntbound_order_alatman: await db.createFactionContinentPresence({
            id: 'huntbound-order-alatman',
            description: 'The Huntbound Order operates in Alatman, focusing on protecting valuable resources and ensuring the safety of mining operations.',
            influenceLevel: 'MINOR',
            activities: ['Mine security'],
            factionId: factions.huntboundOrder.id,
            continentId: continents.alatman.id,
        }),
        huntbound_order_maltman: await db.createFactionContinentPresence({
            id: 'huntbound-order-maltman',
            description: 'The Huntbound Order conducts operations in the mountainous regions of Maltman, dealing with threats unique to high-altitude environments.',
            influenceLevel: 'MINOR',
            activities: ['Multi-terrain operations'],
            factionId: factions.huntboundOrder.id,
            continentId: continents.maltman.id,
        }),
        huntbound_order_kantra: await db.createFactionContinentPresence({
            id: 'huntbound-order-kantra',
            description: 'The Huntbound Order undertakes rare, high-risk missions to Kantra, focusing on extreme expeditions and reconnaissance in this largely unexplored continent.',
            influenceLevel: 'HIDDEN',
            activities: ['Extreme expeditions', 'Reconnaissance', 'Survival missions'],
            factionId: factions.huntboundOrder.id,
            continentId: continents.kantra.id,
        }),
    };
}