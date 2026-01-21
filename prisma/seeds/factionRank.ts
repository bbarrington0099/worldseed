import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Colors } from './index';

type FactionRankPayload = Prisma.FactionRankGetPayload<{}>;
export interface FactionRanks {
    huntboundOrderCoal: FactionRankPayload;
    huntboundOrderCopper: FactionRankPayload;
    huntboundOrderIron: FactionRankPayload;
    huntboundOrderSilver: FactionRankPayload;
    huntboundOrderGold: FactionRankPayload;
    huntboundOrderPlatinum: FactionRankPayload;
    huntboundOrderMithral: FactionRankPayload;
}

export async function seedFactionRanks(): Promise<FactionRanks> {
    return {
        huntboundOrderCoal: await db.createFactionRank({
            id: 'huntbound-order-coal',
            name: 'Coal',
            description: "The most important rank because without it you're just stuck with a bunch of unusable ore. Non-adventuring staff who keep the guild running - blacksmiths, innkeepers, administrators, and support personnel.",
            additionalProperties: {
                levelLow: 1,
                levelHigh: 20,
            },
            color: Colors.COAL_RANK.toString(),
        }),
        huntboundOrderCopper: await db.createFactionRank({
            id: 'huntbound-order-copper',
            name: 'Copper',
            description: 'New recruits and green adventurers. Assigned safer jobs, training, and guild duties.',
            additionalProperties: {
                levelLow: 1,
                levelHigh: 5,
            },
            color: Colors.COPPER_RANK.toString(),
        }),
        huntboundOrderIron: await db.createFactionRank({
            id: 'huntbound-order-iron',
            name: 'Iron',
            description: "The backbone of the guild. Steady hunters who handle most jobs and keep the guild's wheels turning.",
            additionalProperties: {
                levelLow: 5,
                levelHigh: 12,
            },
            color: Colors.IRON_RANK.toString(),
        }),
        huntboundOrderSilver: await db.createFactionRank({
            id: 'huntbound-order-silver',
            name: 'Silver',
            description: "Battle-proven hunters trusted with serious contracts. Considered veterans, though many push for promotion.",
            additionalProperties: {
                levelLow: 12,
                levelHigh: 15,
            },
            color: Colors.SILVER_RANK.toString(),
        }),
        huntboundOrderGold: await db.createFactionRank({
            id: 'huntbound-order-gold',
            name: 'Gold',
            description: "Semi-independent. These hunters travel abroad often, gathering glory, wealth, and lore. Called back only for dire needs.",
            additionalProperties: {
                levelLow: 15,
                levelHigh: 18,
            },
            color: Colors.GOLD_RANK.toString(),
        }),
        huntboundOrderPlatinum: await db.createFactionRank({
            id: 'huntbound-order-platinum',
            name: 'Platinum',
            description: "Elite hunters, legends in their own right. Act with the authority of the guild wherever it is recognized. Rarely seen unless they choose to be.",
            additionalProperties: {
                levelLow: 19,
                levelHigh: 20,
            },
            color: Colors.PLATINUM_RANK.toString(),
        }),
        huntboundOrderMithral: await db.createFactionRank({
            id: 'huntbound-order-mithral',
            name: 'Mithral',
            description: "The singular leader of the Huntbound Order. Currently Tharos Raggenthraw, the founder.",
            additionalProperties: {
                levelLow: 20,
                levelHigh: 20,
            },
            color: Colors.MITHRAL_RANK.toString(),
        }),
    };
}